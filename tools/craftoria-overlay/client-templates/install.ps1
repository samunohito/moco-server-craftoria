[CmdletBinding()]
param(
    [Alias('dry-run')]
    [switch]$DryRun,
    [Alias('force-conflict')]
    [switch]$ForceConflict,
    [Alias('help')]
    [switch]$ShowHelp
)

$ErrorActionPreference = 'Stop'
Set-StrictMode -Version 2.0

if ($ShowHelp) {
    Write-Host 'Usage: install.bat [--dry-run] [--force-conflict] [--help]'
    Write-Host '  --dry-run        Show the plan without changing files.'
    Write-Host '  --force-conflict Back up and replace a reviewed unknown conflict.'
    exit 0
}

function Fail([string]$Message) {
    throw $Message
}

function Assert-SafeRelative([string]$Relative) {
    $normalized = $Relative.Replace('\', '/')
    if ([string]::IsNullOrWhiteSpace($normalized) -or
        [System.IO.Path]::IsPathRooted($Relative) -or
        @($normalized.Split('/')) -contains '..' -or
        @($normalized.Split('/')) -contains '.') {
        Fail "Unsafe relative path: $Relative"
    }
    return $normalized
}

function Resolve-Inside([string]$Root, [string]$Relative) {
    $safe = Assert-SafeRelative $Relative
    $resolvedRoot = [System.IO.Path]::GetFullPath($Root)
    $candidate = [System.IO.Path]::GetFullPath((Join-Path $resolvedRoot $safe))
    $prefix = $resolvedRoot.TrimEnd([System.IO.Path]::DirectorySeparatorChar) + [System.IO.Path]::DirectorySeparatorChar
    if (-not $candidate.StartsWith($prefix, [System.StringComparison]::OrdinalIgnoreCase)) {
        Fail "Path escaped the target root: $Relative"
    }
    return $candidate
}

function Get-NormalizedHash([string]$Path, [string]$Algorithm) {
    return (Get-FileHash -LiteralPath $Path -Algorithm $Algorithm).Hash.ToLowerInvariant()
}

function Read-PreviousHashes([string]$ControlRoot) {
    $result = @{}
    $jsonPath = Join-Path $ControlRoot 'installed-state.json'
    if (Test-Path -LiteralPath $jsonPath -PathType Leaf) {
        $state = Get-Content -LiteralPath $jsonPath -Raw | ConvertFrom-Json
        foreach ($file in @($state.files)) {
            if ($null -ne $file.path -and $null -ne $file.hash) {
                $result[[string]$file.path] = ([string]$file.hash).ToLowerInvariant()
            }
        }
    }
    $portablePath = Join-Path $ControlRoot 'installed-files.tsv'
    if (Test-Path -LiteralPath $portablePath -PathType Leaf) {
        foreach ($file in @(Import-Csv -LiteralPath $portablePath -Delimiter "`t")) {
            $result[[string]$file.path] = ([string]$file.hash).ToLowerInvariant()
        }
    }
    return $result
}

function Backup-File([string]$Source, [string]$Relative, [string]$BackupRoot) {
    $backup = Resolve-Inside $BackupRoot $Relative
    [System.IO.Directory]::CreateDirectory([System.IO.Path]::GetDirectoryName($backup)) | Out-Null
    Copy-Item -LiteralPath $Source -Destination $backup -Force
}

$installerRoot = $PSScriptRoot
$packageRoot = [System.IO.Directory]::GetParent($installerRoot).FullName
$minecraftRoot = [System.IO.Directory]::GetParent($packageRoot).FullName
$manifestPath = Join-Path $packageRoot 'manifest.json'
$planPath = Join-Path $installerRoot 'install-plan.tsv'

foreach ($requiredPath in @(
    (Join-Path $minecraftRoot 'version_info.json'),
    $manifestPath,
    $planPath
)) {
    if (-not (Test-Path -LiteralPath $requiredPath -PathType Leaf)) {
        Fail "Required file is missing. Extract this ZIP directly inside Craftoria's game directory: $requiredPath"
    }
}
foreach ($requiredDirectory in @('mods', 'config', 'kubejs')) {
    $directory = Join-Path $minecraftRoot $requiredDirectory
    if (-not (Test-Path -LiteralPath $directory -PathType Container)) {
        Fail "Required Craftoria directory is missing: $directory"
    }
}

$manifest = Get-Content -LiteralPath $manifestPath -Raw | ConvertFrom-Json
$versionInfo = Get-Content -LiteralPath (Join-Path $minecraftRoot 'version_info.json') -Raw | ConvertFrom-Json
if ([string]$versionInfo.version -ne '@@MANAGED_PACK_VERSION@@') { Fail 'Expected Craftoria @@MANAGED_PACK_VERSION@@.' }

$controlRoot = Join-Path $minecraftRoot '.craftoria-overlay'
$previous = Read-PreviousHashes $controlRoot
$entries = @(Import-Csv -LiteralPath $planPath -Delimiter "`t")
$plans = New-Object System.Collections.Generic.List[object]

foreach ($entry in $entries) {
    $relative = Assert-SafeRelative ([string]$entry.path)
    $destination = Resolve-Inside $minecraftRoot $relative
    if ([string]$entry.action -eq 'file') {
        $existingHash = $null
        if (Test-Path -LiteralPath $destination) {
            if (-not (Test-Path -LiteralPath $destination -PathType Leaf)) { Fail "Expected a regular file: $relative" }
            $existingHash = Get-NormalizedHash $destination ([string]$entry.algorithm)
            if ($existingHash -eq ([string]$entry.hash).ToLowerInvariant()) {
                $plans.Add([pscustomobject]@{ Action = 'Skip'; Entry = $entry; Destination = $destination; ExistingHash = $existingHash })
                continue
            }
            $expected = if ([string]$entry.expected -eq '-') { @() } else { @(([string]$entry.expected).Split(',')) }
            $allowed = $expected -contains $existingHash
            if ($previous.ContainsKey($relative) -and $previous[$relative] -eq $existingHash) { $allowed = $true }
            if (-not $allowed -and [string]$entry.policy -ne 'backup' -and -not $ForceConflict) {
                Fail "Conflict at $relative (hash $existingHash). Use --force-conflict only after reviewing it."
            }
        }
        $plans.Add([pscustomobject]@{ Action = 'Install'; Entry = $entry; Destination = $destination; ExistingHash = $existingHash })
    } elseif ([string]$entry.action -eq 'remove') {
        if (Test-Path -LiteralPath $destination) {
            if (-not (Test-Path -LiteralPath $destination -PathType Leaf)) { Fail "Expected a regular file: $relative" }
            $existingHash = Get-NormalizedHash $destination ([string]$entry.algorithm)
            if ($existingHash -ne ([string]$entry.hash).ToLowerInvariant() -and -not $ForceConflict) {
                Fail "Refusing to remove an unexpected file at $relative (hash $existingHash)."
            }
            $plans.Add([pscustomobject]@{ Action = 'Remove'; Entry = $entry; Destination = $destination; ExistingHash = $existingHash })
        }
    } else {
        Fail "Unknown installer action: $($entry.action)"
    }
}

Write-Host "Target: $minecraftRoot"
foreach ($plan in $plans) { Write-Host ('{0,-8} {1}' -f $plan.Action, $plan.Entry.path) }
if ($DryRun) { exit 0 }

[System.IO.Directory]::CreateDirectory((Join-Path $controlRoot 'staging')) | Out-Null
$stageRoot = Join-Path (Join-Path $controlRoot 'staging') ([guid]::NewGuid().ToString('N'))
[System.IO.Directory]::CreateDirectory($stageRoot) | Out-Null
$backupRoot = Join-Path (Join-Path $controlRoot 'backups') ((Get-Date).ToUniversalTime().ToString('yyyyMMdd-HHmmssfffZ'))
$backupMade = $false

try {
    [Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12
    foreach ($plan in $plans) {
        if ($plan.Action -ne 'Install') { continue }
        $relative = [string]$plan.Entry.path
        $staged = Resolve-Inside $stageRoot $relative
        [System.IO.Directory]::CreateDirectory([System.IO.Path]::GetDirectoryName($staged)) | Out-Null
        $source = [string]$plan.Entry.source
        if ($source.StartsWith('url:')) {
            $uri = $source.Substring(4)
            if (-not $uri.StartsWith('https://')) { Fail "Only HTTPS downloads are allowed: $uri" }
            Invoke-WebRequest -UseBasicParsing -Uri $uri -OutFile $staged
        } elseif ($source.StartsWith('payload:')) {
            $payload = Resolve-Inside $packageRoot $source.Substring(8)
            if (-not (Test-Path -LiteralPath $payload -PathType Leaf)) { Fail "Payload is missing: $payload" }
            Copy-Item -LiteralPath $payload -Destination $staged
        } else {
            Fail "Unknown installer source: $source"
        }
        $actual = Get-NormalizedHash $staged ([string]$plan.Entry.algorithm)
        if ($actual -ne ([string]$plan.Entry.hash).ToLowerInvariant()) {
            Fail "Hash verification failed for $relative`: $actual"
        }
    }

    foreach ($plan in $plans) {
        $relative = [string]$plan.Entry.path
        if ($plan.Action -eq 'Install') {
            if (Test-Path -LiteralPath $plan.Destination -PathType Leaf) {
                Backup-File $plan.Destination $relative $backupRoot
                $backupMade = $true
            }
            [System.IO.Directory]::CreateDirectory([System.IO.Path]::GetDirectoryName($plan.Destination)) | Out-Null
            Copy-Item -LiteralPath (Resolve-Inside $stageRoot $relative) -Destination $plan.Destination -Force
            $verified = Get-NormalizedHash $plan.Destination ([string]$plan.Entry.algorithm)
            if ($verified -ne ([string]$plan.Entry.hash).ToLowerInvariant()) { Fail "Post-copy verification failed for $relative." }
        } elseif ($plan.Action -eq 'Remove') {
            Backup-File $plan.Destination $relative $backupRoot
            $backupMade = $true
            Remove-Item -LiteralPath $plan.Destination -Force
        }
    }

    [System.IO.Directory]::CreateDirectory($controlRoot) | Out-Null
    Copy-Item -LiteralPath (Join-Path $installerRoot 'installed-files.tsv') -Destination (Join-Path $controlRoot 'installed-files.tsv') -Force
    $state = [ordered]@{
        addonVersion = [string]$manifest.addonVersion
        installedAt = (Get-Date).ToUniversalTime().ToString('o')
        target = $minecraftRoot
        backup = if ($backupMade) { $backupRoot } else { $null }
        files = @($manifest.files | ForEach-Object {
            [ordered]@{ path = [string]$_.path; hash = [string]$_.hash; hashAlgorithm = [string]$_.hashAlgorithm }
        })
    }
    $stateJson = ($state | ConvertTo-Json -Depth 6) + "`n"
    [System.IO.File]::WriteAllText((Join-Path $controlRoot 'installed-state.json'), $stateJson, (New-Object System.Text.UTF8Encoding($false)))
    Write-Host 'Overlay @@ADDON_VERSION@@ installed successfully.'
    if ($backupMade) { Write-Host "Backup: $backupRoot" }
} finally {
    if (Test-Path -LiteralPath $stageRoot) { Remove-Item -LiteralPath $stageRoot -Recurse -Force }
}
