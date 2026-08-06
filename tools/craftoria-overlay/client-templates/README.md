# Craftoria Client Add-on @@ADDON_VERSION@@

Craftoria @@MANAGED_PACK_VERSION@@専用のクライアント追加パッケージです。
MinecraftとPrismLauncherを完全に終了してから導入してください。

## Windows

1. このZIPをCraftoriaの `minecraft` フォルダ内へ置き、「ここに展開」します。
2. 展開された `@@PACKAGE_NAME@@` を開きます。
3. `install.bat` を実行します。

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
