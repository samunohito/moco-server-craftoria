# Mekanism Overclock

Mekanism 10.7.19.85のSpeed / Energy Upgrade上限を個別に設定し、8個を超える
オーバークロックへ発電設備に見合う電力コストを与えるNeoForge Modです。

## 対象

- Minecraft 1.21.1
- NeoForge 21.1.230以上（Minecraft 1.21.1系）
- Mekanism 10.7.19.85（JAR artifact。公開mod versionは`10.7.19`）
- Java 21
- Mod ID: `mekanism_overclock`

Mekanism内部の同じメソッドを変更する`mekanism_unleashed`とは非互換です。両方が存在する
場合はNeoForgeの依存関係検査で起動を停止します。

## 初期設定

```toml
[upgrades]
speedLimit = 16
energyLimit = 16
baselineUpgrades = 8

[overclock]
threshold = 8
powerPenaltyPerUpgrade = 1.5
maxOperationsPerTick = 16
```

設定ファイルは`config/mekanism_overclock-startup.toml`です。STARTUP設定のため、変更後は
Minecraftを完全に再起動します。

Mekanismの`maxUpgradeMultiplier`を`M`、Speed枚数を`S`、Energy枚数を`E`、
基準枚数を`B`、過剰強化開始点を`T`、追加電力係数を`P`とすると、次を使います。

```text
速度倍率 = M^(S / B)
電力倍率 = M^((2S - E) / B) * P^max(S - T, 0)
機械内部容量倍率 = M^(E / B) * P^max(S - T, 0)
Chemical対応機械の化学物質倍率 = M^((2S - C) / B)
```

`C`はChemical Upgrade枚数です。Chemical Upgrade非対応機械では、化学物質倍率は
速度倍率と同じ`M^(S / B)`になります。

既定値では次のようになります。

| Speed / Energy | 速度 | 電力 | 容量 | 1処理当たり電力 |
| ---: | ---: | ---: | ---: | ---: |
| 0 / 0 | 1x | 1x | 1x | 1x |
| 8 / 8 | 10x | 10x | 10x | 1x |
| 12 / 12 | 約31.6x | 約160x | 約160x | 約5.1x |
| 16 / 16 | 100x | 約2,563x | 約2,563x | 約25.6x |

Energy UpgradeはMekanism本来の電費軽減を行いますが、9枚目以降の追加ペナルティは
相殺できません。追加ペナルティは機械内部容量にも同率で反映し、最大強化が内部容量不足で
永久停止することを防ぎます。発電量・転送量・実効稼働時間は緩和しません。
化学物質消費も8枚基準の速度曲線に追従します。

通常の処理機械はMekanism既存の複数operation/tick機構を利用し、設定した上限で制限します。
Digital Miner、Electric Pump、Fluidic Plenisher、Formulaic Assemblicatorなど固有tick処理を
持つ機械は、初期版では最大1 operation/tickです。

## ビルド

```powershell
cd tools/mekanism-overclock
.\gradlew.bat test
.\gradlew.bat build
```

成果物は`build/libs/mekanism-overclock-0.1.2.jar`です。Craftoria overlayはこのJARを
ローカル成果物として同期・同梱します。
