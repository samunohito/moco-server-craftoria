# Craftoria systemd unit

Craftoria 1.36.0のNeoForgeサーバーをsystemdで起動するための雛形です。既定では次を
前提にしています。

- サービスユーザーとグループ：`minecraft`
- サーバールート：`/srv/craftoria`
- 起動スクリプト：`/srv/craftoria/startserver.sh`
- Java：`/usr/bin/java`など、systemdの`PATH`から実行できるJava 21または25

## 導入前の準備

公式サーバーの導入、EULAへの同意、オーバーレイの適用を先に完了し、手動で一度正常起動
できることを確認してください。ServerStarterのメモリ設定はサーバールートにある
`server-setup-config.yaml`の`launch.minRam`と`launch.maxRam`で変更します。

専用ユーザーをまだ作成していない場合の例です。

```sh
sudo useradd --system --create-home --home-dir /srv/craftoria \
  --shell /usr/sbin/nologin minecraft
sudo chown -R minecraft:minecraft /srv/craftoria
sudo chmod +x /srv/craftoria/startserver.sh
```

別のユーザーまたは配置先を使う場合は、`craftoria.service`の次をすべて変更してください。

- `User`と`Group`
- `ConditionPathExists`
- `WorkingDirectory`と`ExecStart`
- `ReadWritePaths`

サーバーをホームディレクトリ以下に置く場合は、`ProtectHome=true`もその配置に合わせて
見直す必要があります。可能なら`/srv/craftoria`の利用を推奨します。

## systemdへ登録

```sh
sudo install -m 0644 /srv/craftoria/systemd/craftoria.service \
  /etc/systemd/system/craftoria.service
sudo systemctl daemon-reload
sudo systemctl enable --now craftoria.service
```

## 操作とログ

```sh
sudo systemctl status craftoria.service
sudo journalctl -u craftoria.service -f
sudo systemctl stop craftoria.service
sudo systemctl restart craftoria.service
```

停止時はMinecraftへ`SIGINT`を送り、ワールド保存のため最大180秒待機します。異常終了時は
10秒後に再起動しますが、5分間に5回失敗すると再起動を停止します。原因を修正した後は
次で失敗状態を解除できます。

```sh
sudo systemctl reset-failed craftoria.service
sudo systemctl start craftoria.service
```

systemd起動では対話コンソールを直接利用できません。管理コマンドが必要なら、RCONを外部へ
公開せずlocalhostやFirewallで制限して利用してください。定期バックアップはこのサービスと
別のtimer/serviceで構成し、復元手順も事前に確認してください。
