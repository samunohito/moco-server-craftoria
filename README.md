# Craftoria Add-on Overlay

Craftoriaの幅広い探索・工業・魔術コンテンツを土台に、Create系の設備や戦闘Modを追加し、
進行を飛ばしてしまう自動化、発電、時間操作、ボス複製などを再調整するための
アドオン・オーバーレイです。

これは単体で遊べるModpackではありません。先に導入した**Craftoria 1.31.0**へ、追加Mod、
設定、KubeJSスクリプトを重ねて使用します。Craftoria本体の楽しさや終盤設備を一律に弱体化
するのではなく、「便利さは残し、相応の進行・設備・継続コストを求める」ことを基本方針に
しています。

## 対応環境

| 項目 | バージョン |
| --- | --- |
| Overlay | 1.2.2 |
| Craftoria | 1.31.0 |
| Minecraft | 1.21.1 |
| NeoForge | 21.1.230 |
| Java | 21（サーバーは21または25） |

別バージョンのCraftoriaには適用できません。Craftoria本体を更新した場合も、対応する
オーバーレイが出るまで再適用しないでください。

## 導入方法

### クライアント

1. Prism Launcherなどで **Craftoria 1.31.0** を導入し、一度起動してから終了します。
2. Minecraftとランチャーを完全に終了します。
3. 配布された `Craftoria-Client-Addon-1.2.2.zip` をCraftoriaのゲームディレクトリへ置きます。
4. ZIPを通常どおり展開し、展開先にある `install.bat` を実行します。
5. インストール完了の表示を確認してからCraftoriaを起動します。

ゲームディレクトリとは、`version_info.json`、`mods/`、`config/`、`kubejs/` が置かれて
いる場所です。Prism Launcherでは通常、対象インスタンスの「フォルダー」から開いた先の
`minecraft/` に当たります。ZIPの展開で同名フォルダが二重になっても、インストーラーが
上位のゲームディレクトリを検出します。

Linux/macOSでは、同じ場所で次を実行します。

```sh
./install.sh
# 実行権限がない場合
sh install.sh
```

変更内容だけを確認したい場合は、Windowsで次を実行できます。

```powershell
.\install.bat --dry-run
```

インストーラーは対象のCraftoriaバージョンを検査し、追加Modを固定URLから取得して
ハッシュを検証します。置き換える既存ファイルは `.craftoria-overlay/backups/` へ退避され、
前回導入後に変更されたファイルがあれば安全のため停止します。内容を確認済みの競合だけを
上書きする場合は `--force-conflict` を指定してください。

> セーブデータ、個人設定、ログ、シェーダー、Xaeroのマップデータは配布・変更しません。
> それでも、既存ワールドは導入前に別途バックアップすることを推奨します。

### マルチプレイ

レジストリ、レシピ、設定、追加Modを含むため、原則として**クライアントとサーバーの両方へ
同じオーバーレイ**を適用してください。新規サーバーの構築とNode.js版インストーラーの詳細は
[overlay toolのREADME](tools/craftoria-overlay/README.md)を参照してください。

## 追加Mod

オーバーレイは次のModをCraftoriaへ追加します。バージョンと配布元、ハッシュは
[`overlay.template.json`](tools/craftoria-overlay/overlay.template.json)に固定されています。

### Create・工業・環境

- Create: New Age
- Create Diesel Generators
- Create: Numismatics
- Create: Vintage Improvements
- Numismatics Utils
- Create Slice & Dice
- Advanced Chimneys
- Smog
- ForgeEndertech（Advanced Chimneysの依存ライブラリ）

Createの回転設備、電力変換、ディーゼル発電、通貨・取引、食品加工に加え、排気と大気汚染を
扱う仕組みを拡張します。

### 戦闘・装備・QoL

- Better Combat
- Spartan Weaponry Unofficial
- Spartan Shields Unofficial
- SlashBlade: Resharped
- Easy Villagers
- EMF Compat Core / EMF Compat Better Combat

武器ごとのモーションや間合い、盾、刀によるコンボを追加します。Easy Villagersは村人の
収納と取引を扱いやすくしますが、全自動設備は後述の方針で調整しています。

### KubeJS連携

- KubeJS Create
- KubeJS Diesel Generators
- KubeJS Mekanism Extends

これらは追加コンテンツのレシピやMekanismのデータを、オーバーレイ側のKubeJSから安全に
調整するためにクライアント・サーバー双方へ入ります。

## バランス調整

設備は「作れる時期」と「燃料・電力・搬出まで自動化して常用できる時期」を分けて評価して
います。序盤から機械へ触れられる余地を残しつつ、広域採掘、Mob複製、無限資源、高速処理が
他の進行を丸ごと不要にしないよう調整しています。

主な変更は次のとおりです。

| 分野 | 主な調整 |
| --- | --- |
| 発電 | Mekanismの太陽光とGas-Burning Generator、Powah各発電機の出力を再編。Wind GeneratorとAE2単独起動用発電機は作成不可 |
| Create | New Age Motorを全Tier最大1 RPMとし、Stress CapacityでTier差を表現。水車・風車・蒸気機関は維持 |
| 採掘 | Digital Minerの半径・速度・レシピを調整し、RFTools BuilderのQuarry Cardを無効化 |
| 資源生成 | IF Mob Duplicatorを終盤寄りにし、Ore LaserのAncient Debris生成を削除。MI Quarryと終盤Replicationは維持 |
| Mob・ボス | ボスや固有Entityを捕獲、複製、NoAI化、Spawner化の共通対象外に設定。自然ドロップと討伐報酬は維持 |
| Spawner | Apothic Spawnerの回収条件と耐久消費を強化。MGU Entity Spawnerは作成不可 |
| 戦闘 | SlashBladeの通常コンボは残し、Sランク精錬補正と召喚攻撃連発を抑制。中規模Bossを強化 |
| 時間操作 | Time WandとSand Pouchを最大32倍へ制限し、コストと自動使用制限を強化 |
| 村人 | Easy Villagersの収納・手動取引は維持。Farmer、Converter、Auto Traderを無効化し、BreederとIron Farmを高Tier化 |
| 回復・蘇生 | Advanced AEの継続回復、Angelheart Vial、Vampiric Gloveを調整 |
| Loot | 低危険度の地表Lootから完成済みダイヤ装備だけを除外。Boss固有品、Affix、Gem、Treasureは維持 |

具体的な変更値、レシピ、除外対象、および意図的に変更していない要素は
**[バランス調整一覧](tools/craftoria-overlay/BALANCE.md)**にまとめています。

## 独自Mod: Mekanism Overclock

このリポジトリには独自のNeoForge Mod **Mekanism Overclock 0.1.1** が含まれています。
MekanismのSpeed / Energy Upgradeを最大16枚まで積める楽しさを残しながら、9枚目以降へ
発電設備に見合う追加電力コストを与えるModです。

- 8枚まではMekanism本来のアップグレード曲線を維持
- 9枚目以降はSpeed Upgrade 1枚ごとに、Energy Upgradeで相殺できない1.5倍の電力ペナルティ
- Speed / Energy各16枚で速度100倍、電力と内部容量は約2,563倍
- 標準機械の同時処理を最大16 operation/tickに制限
- 最大強化時に内部容量不足で永久停止しないよう、必要容量だけを同率で拡張

発電量、ケーブル転送量、燃料効率を緩和するModではありません。高速化を選ぶほど、相応の
発電・蓄電・配線インフラが必要になります。また、同じMekanism内部処理を変更する
`mekanism_unleashed` とは非互換です。

実装、計算式、設定、ビルド方法は
[Mekanism OverclockのREADME](tools/mekanism-overclock/README.md)を参照してください。

## リポジトリ構成

```text
tools/
├─ craftoria-overlay/
│  ├─ payload/          # minecraft/へ重ねる設定・KubeJS差分の正本
│  ├─ src/              # 安全な同期・導入・書き出しを行うCLI
│  └─ BALANCE.md        # バランス変更の詳細
└─ mekanism-overclock/  # 独自NeoForge Mod
```

開発用のライブ環境である `minecraft/` は正本ではありません。変更は
`tools/craftoria-overlay/payload/` で管理し、ツールを使って同期します。

```powershell
cd .\tools\craftoria-overlay
pnpm install --frozen-lockfile
pnpm run check
pnpm run cli -- sync --dry-run
pnpm run sync
```

配布ZIPの作成、サーバーブートストラップ、ProbeJS型定義の更新など、メンテナー向けの手順は
[overlay toolのREADME](tools/craftoria-overlay/README.md)にあります。

## 反映と注意事項

- KubeJSのレシピ、Loot、Tagは対応していれば `/reload` で反映できます。
- `startup_scripts` と多くのMod設定はMinecraftの完全な再起動が必要です。
- Mod構成とレジストリに関わるため、導入後のワールドを素のCraftoriaへ戻す運用は想定していません。
