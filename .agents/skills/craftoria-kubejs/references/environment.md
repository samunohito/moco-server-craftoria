# Environment reference

## Fixed baseline

- Prism managed pack: Craftoria 1.31.0
- CurseForge project/file IDs: 1039252 / 8127261
- Minecraft: 1.21.1
- NeoForge: 21.1.230
- Java: 21 or 25
- Game root: `minecraft/`

Read `instance.cfg`, `mmc-pack.json`, and exact JAR names rather than relying only on this summary.

## Evidence routing

- KubeJS source and helpers: `minecraft/kubejs/`
- Generated typings when present: `minecraft/kubejs/probe/` and workspace `.d.ts` files
- KubeJS logs: `minecraft/logs/kubejs/`
- Main runtime log: `minecraft/logs/latest.log`
- Mod files and Prism metadata: `minecraft/mods/` and `minecraft/mods/.index/`
- Common config: `minecraft/config/`
- Defaults copied into new worlds: `minecraft/defaultconfigs/`
- Per-world server config: `minecraft/saves/<world>/serverconfig/`
- Overlay tooling: `tools/craftoria-overlay/`

## Local conventions

Search existing scripts for the target event or mod before coding. Reuse helpers under
`minecraft/kubejs/server_scripts/helpers/` and established `Mods/<ModName>/` organization.

Treat files generated at runtime as evidence, not source, unless the repository already owns
them intentionally. A clean menu launch is insufficient validation: inspect KubeJS and main
logs, and test a dedicated server when the change affects server or registry behavior.

## Release boundary

`tools/craftoria-overlay/payload/` is the tracked source of truth. Its files mirror paths below
`minecraft/`; do not treat the ignored live instance as source. Add or capture one intentional file
at a time, document why in the change summary, and run `sync --dry-run`. Existing KubeJS replacement
hashes belong in `payload-policy.json`.

Only when the user explicitly requests a release or distribution artifact should you bump the
add-on version, rebuild ZIPs, and run the packaged installer with `--dry-run`. Do not generate
distribution artifacts for ordinary payload edits.
