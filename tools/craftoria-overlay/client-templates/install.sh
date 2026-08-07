#!/bin/sh
set -eu

dry_run=false
force_conflict=false

usage() {
  printf '%s\n' 'Usage: ./install.sh [--dry-run] [--force-conflict] [--help]'
  printf '%s\n' '  --dry-run        Show the plan without changing files.'
  printf '%s\n' '  --force-conflict Back up and replace a reviewed unknown conflict.'
}

fail() {
  printf 'ERROR: %s\n' "$*" >&2
  exit 1
}

while [ "$#" -gt 0 ]; do
  case "$1" in
    --dry-run) dry_run=true ;;
    --force-conflict) force_conflict=true ;;
    --help|-h) usage; exit 0 ;;
    *) fail "Unknown option: $1" ;;
  esac
  shift
done

package_root=$(CDPATH= cd -- "$(dirname -- "$0")" && pwd -P)
minecraft_root=$(CDPATH= cd -- "$package_root/.." && pwd -P)
installer_root="$package_root/.installer"
plan_path="$installer_root/install-plan.tsv"

for required in "$minecraft_root/version_info.json" "$package_root/manifest.json" "$plan_path"; do
  [ -f "$required" ] || fail "Required file is missing. Extract this ZIP directly inside Craftoria's game directory: $required"
done
for required in "$minecraft_root/mods" "$minecraft_root/config" "$minecraft_root/kubejs"; do
  [ -d "$required" ] || fail "Required Craftoria directory is missing: $required"
done
grep -Eq '"version"[[:space:]]*:[[:space:]]*"@@MANAGED_PACK_VERSION@@"' "$minecraft_root/version_info.json" || fail 'Expected Craftoria @@MANAGED_PACK_VERSION@@.'

command -v awk >/dev/null 2>&1 || fail 'awk is required.'
command -v grep >/dev/null 2>&1 || fail 'grep is required.'

safe_relative() {
  case "$1" in
    ''|/*|*\\*|..|../*|*/..|*/../*|.|./*|*/.|*/./*) fail "Unsafe relative path: $1" ;;
  esac
}

hash_file() {
  algorithm=$1
  file=$2
  case "$algorithm" in
    SHA256)
      if command -v sha256sum >/dev/null 2>&1; then sha256sum "$file" | awk '{print tolower($1)}'
      elif command -v shasum >/dev/null 2>&1; then shasum -a 256 "$file" | awk '{print tolower($1)}'
      elif command -v openssl >/dev/null 2>&1; then openssl dgst -sha256 "$file" | awk '{print tolower($NF)}'
      else fail 'A SHA-256 tool (sha256sum, shasum, or openssl) is required.'; fi
      ;;
    SHA512)
      if command -v sha512sum >/dev/null 2>&1; then sha512sum "$file" | awk '{print tolower($1)}'
      elif command -v shasum >/dev/null 2>&1; then shasum -a 512 "$file" | awk '{print tolower($1)}'
      elif command -v openssl >/dev/null 2>&1; then openssl dgst -sha512 "$file" | awk '{print tolower($NF)}'
      else fail 'A SHA-512 tool (sha512sum, shasum, or openssl) is required.'; fi
      ;;
    *) fail "Unsupported hash algorithm: $algorithm" ;;
  esac
}

control_root="$minecraft_root/.craftoria-overlay"
portable_state="$control_root/installed-files.tsv"
json_state="$control_root/installed-state.json"

previous_hash() {
  wanted=$1
  if [ -f "$portable_state" ]; then
    awk -F '\t' -v wanted="$wanted" '$3 == wanted { value=tolower($2) } END { print value }' "$portable_state"
  elif [ -f "$json_state" ]; then
    awk -v wanted="$wanted" '
      function json_value(line) {
        sub(/^[^:]*:[[:space:]]*"/, "", line)
        sub(/".*$/, "", line)
        return line
      }
      /"path"[[:space:]]*:/ { current=json_value($0) }
      current == wanted && /"hash"[[:space:]]*:/ { print tolower(json_value($0)); exit }
    ' "$json_state"
  fi
  return 0
}

decide_file() {
  policy=$1
  algorithm=$2
  expected_hash=$3
  relative=$4
  expected_existing=$5
  safe_relative "$relative"
  destination="$minecraft_root/$relative"
  if [ -e "$destination" ]; then
    [ -f "$destination" ] || fail "Expected a regular file: $relative"
    existing=$(hash_file "$algorithm" "$destination")
    if [ "$existing" = "$expected_hash" ]; then
      printf '%s\n' 'Skip'
      return
    fi
    allowed=false
    case ",$expected_existing," in *",$existing,"*) allowed=true ;; esac
    previous=$(previous_hash "$relative")
    [ -n "$previous" ] && [ "$previous" = "$existing" ] && allowed=true
    if [ "$allowed" != true ] && [ "$policy" != backup ] && [ "$force_conflict" != true ]; then
      fail "Conflict at $relative (hash $existing). Use --force-conflict only after reviewing it."
    fi
  fi
  printf '%s\n' 'Install'
}

tab=$(printf '\t')
printf 'Target: %s\n' "$minecraft_root"
while IFS="$tab" read -r action kind policy algorithm expected_hash relative source expected_existing; do
  [ "$action" = action ] && continue
  [ -n "$action" ] || continue
  safe_relative "$relative"
  if [ "$action" = file ]; then
    decision=$(decide_file "$policy" "$algorithm" "$expected_hash" "$relative" "$expected_existing")
    printf '%-8s %s\n' "$decision" "$relative"
  elif [ "$action" = remove ]; then
    destination="$minecraft_root/$relative"
    if [ -e "$destination" ]; then
      [ -f "$destination" ] || fail "Expected a regular file: $relative"
      existing=$(hash_file "$algorithm" "$destination")
      if [ "$existing" != "$expected_hash" ] && [ "$force_conflict" != true ]; then
        fail "Refusing to remove an unexpected file at $relative (hash $existing)."
      fi
      printf '%-8s %s\n' 'Remove' "$relative"
    fi
  else
    fail "Unknown installer action: $action"
  fi
done < "$plan_path"

[ "$dry_run" = true ] && exit 0
command -v curl >/dev/null 2>&1 || fail 'curl is required to download additional mods.'

mkdir -p "$control_root/staging"
stage_root="$control_root/staging/installer-$$-$(date -u +%Y%m%d%H%M%S)"
mkdir "$stage_root"
cleanup() { [ ! -d "$stage_root" ] || rm -rf -- "$stage_root"; }
trap cleanup 0 HUP INT TERM

while IFS="$tab" read -r action kind policy algorithm expected_hash relative source expected_existing; do
  [ "$action" = action ] && continue
  [ "$action" = file ] || continue
  decision=$(decide_file "$policy" "$algorithm" "$expected_hash" "$relative" "$expected_existing")
  [ "$decision" = Install ] || continue
  staged="$stage_root/$relative"
  mkdir -p "$(dirname -- "$staged")"
  case "$source" in
    url:https://*) curl --fail --location --proto '=https' --tlsv1.2 --output "$staged" "${source#url:}" ;;
    payload:*)
      payload_relative=${source#payload:}
      safe_relative "$payload_relative"
      [ -f "$package_root/$payload_relative" ] || fail "Payload is missing: $payload_relative"
      cp "$package_root/$payload_relative" "$staged"
      ;;
    *) fail "Unknown or insecure installer source: $source" ;;
  esac
  actual=$(hash_file "$algorithm" "$staged")
  [ "$actual" = "$expected_hash" ] || fail "Hash verification failed for $relative: $actual"
done < "$plan_path"

backup_root="$control_root/backups/$(date -u +%Y%m%d-%H%M%SZ)-$$"
backup_made=false

while IFS="$tab" read -r action kind policy algorithm expected_hash relative source expected_existing; do
  [ "$action" = action ] && continue
  [ -n "$action" ] || continue
  destination="$minecraft_root/$relative"
  if [ "$action" = file ]; then
    decision=$(decide_file "$policy" "$algorithm" "$expected_hash" "$relative" "$expected_existing")
    [ "$decision" = Install ] || continue
    if [ -f "$destination" ]; then
      mkdir -p "$(dirname -- "$backup_root/$relative")"
      cp "$destination" "$backup_root/$relative"
      backup_made=true
    fi
    mkdir -p "$(dirname -- "$destination")"
    cp "$stage_root/$relative" "$destination"
    verified=$(hash_file "$algorithm" "$destination")
    [ "$verified" = "$expected_hash" ] || fail "Post-copy verification failed for $relative."
  elif [ "$action" = remove ] && [ -f "$destination" ]; then
    mkdir -p "$(dirname -- "$backup_root/$relative")"
    cp "$destination" "$backup_root/$relative"
    backup_made=true
    rm -f -- "$destination"
  fi
done < "$plan_path"

cp "$installer_root/installed-files.tsv" "$control_root/installed-files.tsv"
cp "$installer_root/installed-state.template.json" "$control_root/installed-state.json"
printf 'Overlay @@ADDON_VERSION@@ installed successfully.\n'
[ "$backup_made" != true ] || printf 'Backup: %s\n' "$backup_root"
