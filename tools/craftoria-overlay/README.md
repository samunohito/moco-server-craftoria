# Craftoria 1.31.0 add-on overlay

Craftoria 1.31.0 (Minecraft 1.21.1 / NeoForge 21.1.230) に、追加した
Create系Mod、選択した設定、KubeJS差分を安全に重ねるためのツールです。

`minecraft/` は実行環境としてGit管理せず、`payload/` をカスタマイズの正本にします。
`payload/` のパスは配置先の `minecraft/` からの相対パスと同じです。

ゲームバランスに関する変更値、無効化したレシピ、維持した要素は
[BALANCE.md](BALANCE.md) に一覧化しています。

## 1. カスタマイズを編集・同期する

初回だけツールのディレクトリで依存パッケージを導入します。

```powershell
cd .\tools\craftoria-overlay
pnpm install --frozen-lockfile
```

KubeJSや設定は `payload/` のファイルを直接編集します。編集後、Minecraftを終了して
開発用インスタンスへ同期します。

```powershell
pnpm run sync
```

変更せず計画だけを見る場合は `--dry-run`、正本とライブ環境を比較する場合は
次を使います。

```powershell
pnpm run cli -- sync --dry-run
pnpm run diff
```

ライブ環境で調整したファイルを正本へ取り込む場合は、ファイルを明示します。
ディレクトリ単位の取り込みはできません。既存のpayloadと内容が異なる場合は、確認後に
`--force` を指定します。

```powershell
pnpm run cli -- capture config/example-common.toml
pnpm run cli -- capture kubejs/server_scripts/Mods/Example/Recipes.js
```

対象にできるのは `kubejs/`、`config/`、`defaultconfigs/` 配下の通常ファイルだけです。
`kubejs/logs/` は実行ログなので拒否されます。`kubejs/probe/` は、Mod構成に合わせて
ProbeJSで生成した型定義を固定スナップショットとして配布する場合だけ使用します。同期は
overlay所有ファイルだけを扱い、既存ファイルは `.craftoria-overlay/backups/` に退避します。前回の同期後に
ライブ側が変更されていれば競合として停止します。

`startup_scripts` の変更にはゲーム再起動が必要です。`server_scripts` と `data` は対応
していれば `/reload`、`client_scripts` と `assets` はクライアント側で確認してください。

### ProbeJS型定義を更新する

ProbeJS 8でゲーム内Dumpを完了した後、次の専用コマンドで `minecraft/.probe/` から
TypeScript宣言だけを `payload/kubejs/probe/` へ取り込みます。

```powershell
pnpm run capture-typings
pnpm run capture-typings -- --dry-run
```

この処理は既存の型スナップショットを置き換え、client/server/startup用の
`jsconfig.json` と既知ベースハッシュも更新します。ProbeJSのsource JAR、キャッシュ、
VS Codeスニペット、ログは取り込みません。

通常のpayload編集や型定義更新では配布ZIPを生成しません。以下のexport操作と
add-onバージョン更新は、リリースまたは配布物の作成を明示的に行うときだけ実施します。

### ローカルビルドMODを同梱する

`tools/`配下に置いた専用Modプロジェクトのビルド済みJARは、外部URLへ公開せずに
overlayへ同梱できます。`overlay.template.json`へ`bundledFiles`を追加します。

```json
"bundledFiles": [
  {
    "source": "craftoria-mekanism-overclock/build/libs/craftoria-mekanism-overclock-0.1.0.jar",
    "path": "mods/craftoria-mekanism-overclock-0.1.0.jar",
    "kind": "mod",
    "hashAlgorithm": "SHA256",
    "replacePolicy": "known-base-only"
  }
]
```

`source`は`tools/`からの相対パス、`path`はインストール先Minecraftディレクトリからの
相対パスです。対象は`mods/`直下のJARに限定されます。`sync`はビルド済みJARを開発用
インスタンスへ同期し、`export`と`export-client`はJARを配布ZIP内のpayloadへコピーして
SHA-256またはSHA-512をmanifestへ自動記録します。成果物が未ビルドの場合は安全のため
処理を停止します。

## 2. クライアント配布ZIPを作る

クライアントがNode.jsやpnpmを導入せずに使えるZIPを、Git管理された `payload/` から
作成します。

```powershell
pnpm run export:client
```

`dist/Craftoria-Client-Addon-<version>.zip` が生成されます。ModのJARはZIPへ含めず、
インストール時にModrinth等の固定HTTPS URLから取得してハッシュ検証します。

受信側ではCraftoriaの `minecraft` フォルダへZIPを置いて「ここに展開」し、展開された
専用フォルダ内の `install.bat` を実行します。Linux/macOSでは `./install.sh` または
`sh install.sh` を実行します。MinecraftとPrismLauncherは先に終了してください。

事前確認や、内容を確認済みの競合を上書きする場合は次のオプションを使えます。

```powershell
.\install.bat --dry-run
.\install.bat --force-conflict
```

追加Modは `overlay.template.json` に固定された現在10 Modです。KubeJS連携用として
次の2 Modもクライアント・サーバー双方へ導入します。

- KubeJS Create 2101.3.1-build.18
- KubeJS Diesel Generators 1.21.1-1.2.3

追加Mod固有の設定ファイルは、ゲームで生成・調整した後に `capture` で必要なファイル
だけを `payload/` へ取り込んでください。

## 3. 開発・サーバー兼用ZIPを作る

従来のNode.js版CLI、サーバーブートストラップ、TypeScriptソースを含むtoolkit ZIPも
引き続き作成できます。

```powershell
pnpm run export
```

出力名は `Craftoria-Addon-<version>.zip` です。以下のNode.js版導入手順やサーバー作成に
使用します。

### Node.js版CLIでクライアントへ導入する

受信側でZIPを展開し、依存パッケージを導入します。

```powershell
pnpm install --frozen-lockfile
```

PrismLauncherとMinecraftを終了して、共通CLIの `install` サブコマンドを実行します。

```powershell
pnpm run cli -- install --instance "C:\path\to\PrismLauncher\instances\Craftoria"
```

事前確認だけなら `--dry-run` を付けます。対象はCraftoria 1.31.0に固定され、既存
ファイルは `.craftoria-overlay/backups/` に退避されます。既知の公式KubeJSファイル
以外が変更済みなら停止します。内容を確認して上書きする場合だけ
`--force-conflict` を指定してください。

## 4. サーバーを作る

配布ZIPを展開した場所から、まず公式Craftoriaサーバーブートストラップを準備します。

```powershell
pnpm run cli -- new-server --target "D:\Minecraft\CraftoriaServer"
```

表示されたとおり対象フォルダの `startserver.bat` を実行し、公式ベースサーバーの
導入を完了して停止します。その後、オーバーレイを適用します。

```powershell
pnpm run cli -- install --server "D:\Minecraft\CraftoriaServer"
```

EULAへ同意済みで一括実行する場合のみ、明示的に次を使えます。

```powershell
pnpm run cli -- new-server --target "D:\Minecraft\CraftoriaServer" --install-base --accept-eula
```

Node.js 24以降、pnpm 11.7.0、Java 21または25が必要です。JavaがPATHにない場合は
`--java "C:\path\to\java.exe"` を指定します。既存ワールドの `serverconfig` は
自動変更しません。

## 開発

スクリプトはビルドせず、`tsx` で `src/cli.ts` を直接実行します。利用できる
サブコマンドとオプションはヘルプで確認できます。

```powershell
pnpm run check
pnpm run cli -- --help
```

`payload-policy.json` はCraftoria同梱ファイルを安全に置換するための既知ハッシュだけを
管理します。新規ファイルは `payload/` に追加すれば自動的に配布対象になります。
既存のKubeJSファイルを初めて `capture` した場合は、取り込み時のハッシュが置換可能な
既知内容として記録されます。config類は常にバックアップしてから配置します。

候補として確認済みのMinecraft開発Skillは、次のコマンドで `.agents/skills` と
`.claude/skills` の両方へ導入できます。`DEV-SKILLS-CANDIDATES.md` は実行時には
解析せず、取得元のcommitとSkill名をCLI内に固定しています。既存Skillは上書きしません。

```powershell
pnpm run cli -- install-dev-skills
```

このコマンドが既定で導入するのは、MITライセンスの `minecraft-modding`、
`minecraft-server-admin`、`minecraft-testing`、`minecraft-ci-release`、
`minecraft-datapack`、`minecraft-resource-pack` です。PolyForm Noncommercial 1.0.0の
条件を満たす非商用利用で `mc-develop-first` と `minecraft-developing-mcp@0.1.15` も
導入する場合だけ、明示的に指定します。

```powershell
pnpm run cli -- install-dev-skills --include-noncommercial
```

非商用オプションはCodexの `.codex/config.toml` とClaudeの `.mcp.json` にプロジェクト
単位のSTDIO MCP設定を追加します。MCPは固定バージョンを `npx` で起動し、
`MC_DEVELOPING_MCP_WORKSPACE_ROOT` を対象ワークスペースへ固定します。既存の同名MCP
設定は上書きしません。導入後は利用するクライアントを再起動してください。

`--dry-run` ではダウンロードもファイル変更も行いません。別のワークスペースへ導入する
場合は `--workspace "C:\path\to\workspace"` を指定できます。

開発・サーバー兼用ZIPにはTypeScriptソース、`package.json`、`pnpm-lock.yaml` が含まれます。
クライアント配布ZIPにはこれらを含めません。

## 注意

- Craftoria同梱の Kotlin for Forge 5.10.0 は、追加版5.12.0へ置換されます。
- KubeJS CreateとKubeJS Diesel Generatorsは独自追加Modとしてクライアント・サーバー双方へ導入します。
- PrismLauncherでCraftoria本体を更新した後は、対応版を確認してオーバーレイを再適用してください。
- `saves`、個人設定、ログ、シェーダー、Xaeroデータは配布対象外です。
