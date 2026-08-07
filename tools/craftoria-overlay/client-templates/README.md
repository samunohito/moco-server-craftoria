# Craftoria Client Add-on @@ADDON_VERSION@@

Craftoria @@MANAGED_PACK_VERSION@@専用のクライアント追加パッケージです。
Minecraftと使用中のランチャーを完全に終了してから導入してください。

PrismLauncher、ATLauncherなど、ランチャーの種類には依存しません。
`version_info.json`、`mods`、`config`、`kubejs` があるCraftoriaのゲームディレクトリへ
展開してください。フォルダ名は `minecraft` でなくても構いません。

## Windows

1. このZIPをCraftoriaのゲームディレクトリ内へ置きます。
2. ZIPを右クリックして「すべて展開」を選び、既定の展開先のまま展開します。
3. 展開先を開き、フォルダをたどって `install.bat` を実行します。

Windowsの既定動作では `@@PACKAGE_NAME@@\@@PACKAGE_NAME@@\` のように同名フォルダが
二重になることがありますが、そのまま実行できます。インストーラーは上位フォルダから
Craftoriaのゲームディレクトリを安全に検出します。

## Linux / macOS

同じ場所へ展開し、ターミナルから次を実行します。

```sh
./install.sh
```

実行権限が復元されない展開ソフトを使った場合は、`sh install.sh` でも実行できます。

## オプション

- `--dry-run`: ファイルを変更せず導入予定だけを表示します。
- `--force-conflict`: 内容を確認した未知の競合ファイルを、バックアップ後に上書きします。
- `--help`: ヘルプを表示します。

追加Modは固定されたHTTPS URLから取得し、配布時に記録されたハッシュと照合します。
変更される既存ファイルは `minecraft/.craftoria-overlay/backups/` に保存されます。
想定外のCraftoriaバージョンやKubeJS競合を検出した場合は、既定では変更せず停止します。
