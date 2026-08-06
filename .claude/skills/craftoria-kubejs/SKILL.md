---
name: craftoria-kubejs
description: Develop, review, diagnose, and package KubeJS scripts and Minecraft modpack changes for this Craftoria 1.31.0 workspace (Minecraft 1.21.1, NeoForge 21.1.230). Use for KubeJS recipes, tags, startup/client/server scripts, Create integration, mod compatibility, client/server synchronization, crash or script-error investigation, and overlay release work in this repository.
---

# Craftoria KubeJS Development

Treat the installed instance, mod JAR metadata, generated ProbeJS declarations, and runtime logs as primary evidence. Do not assume APIs from another Minecraft or KubeJS version.

## Workflow

1. Read [references/environment.md](references/environment.md).
2. Identify the execution side and lifecycle:
   - `startup_scripts`: registries and startup-only definitions; restart required.
   - `server_scripts` and `data`: recipes, tags, datapack/server behavior; prefer `/reload` when supported.
   - `client_scripts` and `assets`: client-only presentation.
3. Search existing Craftoria helpers and conventions before adding new abstractions.
4. Confirm every item, block, recipe type, event, and Java class against local evidence:
   - Search `minecraft/kubejs` and generated declarations first.
   - Inspect `minecraft/logs/kubejs/*.log`, `latest.log`, or crash reports for failures.
   - Inspect exact local JAR metadata or resources when declarations are insufficient.
5. Keep client and dedicated-server requirements explicit. Registry-affecting startup scripts and required content mods must match on both sides.
6. Make the narrowest change possible. Avoid replacing the whole KubeJS tree or generated/runtime files.
7. Validate JavaScript syntax where a compatible checker exists, then test the relevant reload or launch lifecycle. Review KubeJS logs for errors even if the game reaches the menu.
8. For release changes, use `tools/craftoria-overlay`; update only explicit manifest-owned files and retain hash verification/backups.

## Guardrails

- Target only Minecraft 1.21.1, NeoForge 21.1.230, Craftoria 1.31.0 unless the user explicitly requests an upgrade.
- Use Java 21 or 25 for server work.
- Never edit or distribute logs, saves, options, Xaero data, caches, generated search indexes, or personal server lists.
- Do not copy every file under `config` or `kubejs`; enumerate intentional files.
- Preserve user edits and unrelated dirty files.
- Treat Create addon dependencies as both-side dependencies unless exact metadata proves otherwise.
- Prefer official KubeJS, NeoForge, Create, and mod-project documentation for web research. Match documentation to 1.21.1.

