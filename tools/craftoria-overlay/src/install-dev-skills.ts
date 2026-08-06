import { chmod, cp, mkdir, mkdtemp, readFile, rm, writeFile } from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { gunzipSync } from 'node:zlib';
import { downloadFile, pathExists, resolveInside } from './lib.js';

export interface InstallDevSkillsOptions {
  workspacePath?: string;
  includeNoncommercial?: boolean;
  dryRun?: boolean;
}

interface SkillSource {
  repository: string;
  revision: string;
  archiveUrl: string;
  noncommercial: boolean;
  skills: Array<{
    name: string;
    archiveDirectory: string;
  }>;
}

// Deliberately pinned here instead of being parsed from DEV-SKILLS-CANDIDATES.md.
const SKILL_SOURCES: SkillSource[] = [
  {
    repository: 'Jahrome907/minecraft-agent-skills',
    revision: '8c5597d2ca14c3794261525a37eddfdd36c4962b', // v2.4.2
    archiveUrl: 'https://codeload.github.com/Jahrome907/minecraft-agent-skills/tar.gz/8c5597d2ca14c3794261525a37eddfdd36c4962b',
    noncommercial: false,
    skills: [
      'minecraft-modding',
      'minecraft-server-admin',
      'minecraft-testing',
      'minecraft-ci-release',
      'minecraft-datapack',
      'minecraft-resource-pack',
    ].map((name) => ({ name, archiveDirectory: `.agents/skills/${name}` })),
  },
  {
    repository: 'PickAID/mc-developing-mcp',
    revision: 'f9b2149ec93ee88297672b1b8f64f6c7922dd06d',
    archiveUrl: 'https://codeload.github.com/PickAID/mc-developing-mcp/tar.gz/f9b2149ec93ee88297672b1b8f64f6c7922dd06d',
    noncommercial: true,
    skills: [
      { name: 'mc-develop-first', archiveDirectory: 'skills/mc-develop-first' },
    ],
  },
];

const MCP_SERVER_NAME = 'minecraft-developing';
const MCP_PACKAGE = 'minecraft-developing-mcp@0.1.15';

function defaultWorkspacePath(): string {
  const sourceDirectory = fileURLToPath(new URL('.', import.meta.url));
  return path.resolve(sourceDirectory, '..', '..', '..');
}

function readTarString(buffer: Buffer, offset: number, length: number): string {
  const end = buffer.indexOf(0, offset);
  return buffer.subarray(offset, end >= offset && end < offset + length ? end : offset + length).toString('utf8');
}

function readTarNumber(buffer: Buffer, offset: number, length: number): number {
  const raw = readTarString(buffer, offset, length).trim();
  if (raw.length === 0) return 0;
  const value = Number.parseInt(raw, 8);
  if (!Number.isSafeInteger(value) || value < 0) throw new Error(`Invalid TAR number: ${raw}`);
  return value;
}

function paxPath(data: Buffer): string | undefined {
  let offset = 0;
  let result: string | undefined;
  while (offset < data.length) {
    const space = data.indexOf(0x20, offset);
    if (space < 0) break;
    const recordLength = Number.parseInt(data.subarray(offset, space).toString('ascii'), 10);
    if (!Number.isSafeInteger(recordLength) || recordLength <= 0 || offset + recordLength > data.length) break;
    const record = data.subarray(space + 1, offset + recordLength - 1).toString('utf8');
    const equals = record.indexOf('=');
    if (equals > 0 && record.slice(0, equals) === 'path') result = record.slice(equals + 1);
    offset += recordLength;
  }
  return result;
}

function skillRelativePath(archivePath: string, archiveDirectory: string): string | undefined {
  const normalized = archivePath.replaceAll('\\', '/').replace(/^\.\//, '');
  const marker = `/${archiveDirectory}/`;
  const markerIndex = normalized.indexOf(marker);
  if (markerIndex >= 0) return normalized.slice(markerIndex + marker.length);
  if (normalized.endsWith(`/${archiveDirectory}`)) return '';
  return undefined;
}

function tomlString(value: string): string {
  return JSON.stringify(value);
}

async function plannedMcpConfigs(workspace: string): Promise<Array<{ path: string; content: string }>> {
  const codexConfigPath = path.join(workspace, '.codex', 'config.toml');
  const existingCodexConfig = await pathExists(codexConfigPath) ? await readFile(codexConfigPath, 'utf8') : '';
  const codexSectionPattern = /^\s*\[mcp_servers\.(?:"minecraft-developing"|minecraft-developing)\]\s*$/mu;
  if (codexSectionPattern.test(existingCodexConfig)) {
    throw new Error(`既存のMCP設定は上書きしません: ${codexConfigPath} (${MCP_SERVER_NAME})`);
  }
  const codexBlock = [
    `[mcp_servers.${MCP_SERVER_NAME}]`,
    'command = "npx"',
    `args = ["-y", "--package", "${MCP_PACKAGE}", "mc-developing-mcp"]`,
    `cwd = ${tomlString(workspace)}`,
    '',
    `[mcp_servers.${MCP_SERVER_NAME}.env]`,
    `MC_DEVELOPING_MCP_WORKSPACE_ROOT = ${tomlString(workspace)}`,
    '',
  ].join('\n');
  const codexPrefix = existingCodexConfig.length === 0 || existingCodexConfig.endsWith('\n')
    ? existingCodexConfig
    : `${existingCodexConfig}\n`;

  const claudeConfigPath = path.join(workspace, '.mcp.json');
  let claudeConfig: Record<string, unknown> = {};
  if (await pathExists(claudeConfigPath)) {
    const parsed: unknown = JSON.parse(await readFile(claudeConfigPath, 'utf8'));
    if (parsed === null || typeof parsed !== 'object' || Array.isArray(parsed)) {
      throw new Error(`MCP設定がJSON objectではありません: ${claudeConfigPath}`);
    }
    claudeConfig = { ...parsed as Record<string, unknown> };
  }
  const existingServers = claudeConfig.mcpServers;
  if (existingServers !== undefined && (existingServers === null || typeof existingServers !== 'object' || Array.isArray(existingServers))) {
    throw new Error(`mcpServersがJSON objectではありません: ${claudeConfigPath}`);
  }
  const mcpServers = { ...(existingServers as Record<string, unknown> | undefined) };
  if (MCP_SERVER_NAME in mcpServers) {
    throw new Error(`既存のMCP設定は上書きしません: ${claudeConfigPath} (${MCP_SERVER_NAME})`);
  }
  mcpServers[MCP_SERVER_NAME] = {
    type: 'stdio',
    command: 'npx',
    args: ['-y', '--package', MCP_PACKAGE, 'mc-developing-mcp'],
    env: { MC_DEVELOPING_MCP_WORKSPACE_ROOT: workspace },
  };
  claudeConfig.mcpServers = mcpServers;

  return [
    { path: codexConfigPath, content: `${codexPrefix}${codexBlock}` },
    { path: claudeConfigPath, content: `${JSON.stringify(claudeConfig, null, 2)}\n` },
  ];
}

async function extractSelectedSkills(archivePath: string, source: SkillSource, stagingRoot: string): Promise<void> {
  const tar = gunzipSync(await readFile(archivePath));
  let offset = 0;
  let pendingPath: string | undefined;

  while (offset + 512 <= tar.length) {
    const header = tar.subarray(offset, offset + 512);
    if (header.every((byte) => byte === 0)) break;

    const size = readTarNumber(header, 124, 12);
    const type = String.fromCharCode(header[156] ?? 0);
    const name = readTarString(header, 0, 100);
    const prefix = readTarString(header, 345, 155);
    const headerPath = prefix.length > 0 ? `${prefix}/${name}` : name;
    const dataStart = offset + 512;
    const dataEnd = dataStart + size;
    if (dataEnd > tar.length) throw new Error(`Truncated TAR entry: ${headerPath}`);
    const data = tar.subarray(dataStart, dataEnd);

    if (type === 'x') pendingPath = paxPath(data) ?? pendingPath;
    else if (type === 'L') pendingPath = readTarString(data, 0, data.length);
    else {
      const entryPath = pendingPath ?? headerPath;
      pendingPath = undefined;
      for (const skill of source.skills) {
        const relativePath = skillRelativePath(entryPath, skill.archiveDirectory);
        if (relativePath === undefined || relativePath.length === 0) continue;
        const destination = resolveInside(path.join(stagingRoot, skill.name), relativePath);
        if (type === '5') await mkdir(destination, { recursive: true });
        else if (type === '0' || type === '\0') {
          await mkdir(path.dirname(destination), { recursive: true });
          await writeFile(destination, data, { flag: 'wx' });
          await chmod(destination, readTarNumber(header, 100, 8) & 0o777);
        } else if (type !== 'g') {
          throw new Error(`Unsupported TAR entry type ${JSON.stringify(type)} in ${entryPath}`);
        }
      }
    }

    offset = dataStart + Math.ceil(size / 512) * 512;
  }
}

export async function installDevSkills({
  workspacePath = defaultWorkspacePath(),
  includeNoncommercial = false,
  dryRun = false,
}: InstallDevSkillsOptions = {}): Promise<void> {
  const workspace = path.resolve(workspacePath);
  const sources = SKILL_SOURCES.filter((source) => includeNoncommercial || !source.noncommercial);
  const skills = sources.flatMap((source) => source.skills.map((skill) => ({ ...skill, source })));
  const targetRoots = [path.join(workspace, '.agents', 'skills'), path.join(workspace, '.claude', 'skills')];
  const mcpConfigs = includeNoncommercial ? await plannedMcpConfigs(workspace) : [];

  for (const { name } of skills) {
    for (const targetRoot of targetRoots) {
      const target = path.join(targetRoot, name);
      if (await pathExists(target)) throw new Error(`既存のSkillは上書きしません: ${target}`);
    }
  }

  console.log(`Workspace: ${workspace}`);
  for (const { name, source } of skills) {
    console.log(`${dryRun ? 'Would install' : 'Installing'} ${name} from ${source.repository}@${source.revision}`);
  }
  if (!includeNoncommercial) {
    console.log('Skipping mc-develop-first (PolyForm Noncommercial 1.0.0). Use --include-noncommercial only for an eligible noncommercial use.');
  } else {
    console.log(`${dryRun ? 'Would configure' : 'Configuring'} ${MCP_PACKAGE} for Codex and Claude with workspace root ${workspace}`);
  }
  if (dryRun) return;

  const scratch = await mkdtemp(path.join(os.tmpdir(), 'craftoria-dev-skills-'));
  try {
    const stagingRoot = path.join(scratch, 'skills');
    await mkdir(stagingRoot, { recursive: true });
    for (const [index, source] of sources.entries()) {
      const archivePath = path.join(scratch, `source-${index}.tar.gz`);
      await downloadFile(source.archiveUrl, archivePath);
      await extractSelectedSkills(archivePath, source, stagingRoot);
    }

    for (const { name } of skills) {
      const stagedSkill = path.join(stagingRoot, name);
      if (!await pathExists(path.join(stagedSkill, 'SKILL.md'))) {
        throw new Error(`Downloaded archive did not contain the expected Skill: ${name}`);
      }
    }

    for (const targetRoot of targetRoots) {
      await mkdir(targetRoot, { recursive: true });
      for (const { name } of skills) {
        await cp(path.join(stagingRoot, name), path.join(targetRoot, name), {
          recursive: true,
          force: false,
          errorOnExist: true,
        });
      }
    }
    for (const config of mcpConfigs) {
      await mkdir(path.dirname(config.path), { recursive: true });
      await writeFile(config.path, config.content, 'utf8');
    }
  } finally {
    await rm(scratch, { recursive: true, force: true });
  }

  console.log(`${skills.length} Skills installed into .agents/skills and .claude/skills.`);
  if (includeNoncommercial) console.log(`${MCP_PACKAGE} configured for Codex and Claude. Restart the client to load it.`);
}
