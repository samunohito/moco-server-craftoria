# Craftoria バランス調整一覧

Craftoria 1.31.0（Minecraft 1.21.1 / NeoForge 21.1.230）へ、このオーバーレイが加える
ゲームバランス変更の一覧です。実装の正本は `payload/` です。

基本方針は次のとおりです。

- 単独起動用の代替発電機や、他の進行を不要にする装置は整理する。
- 有用な自動化は原則として残し、出力、速度、レシピ、対象制限で調整する。
- ボス固有品は実際の討伐報酬として保ち、受動的な複製を禁止する。
- 宝箱や敵から偶然得る楽しさは残す。ただし、無効化対象の完成品は非ブロックLootからも除く。
- 蓄電容量、Createの自然回転源、原子力は、明記した例外を除いて変更しない。

ここでいう「非ブロックLoot」は宝箱とエンティティのLootです。設置済みブロックを破壊した
ときの自己ドロップは維持します。

## 発電とエネルギー

### Mekanism Generators

| 対象 | 調整後 | 補足 |
| --- | ---: | --- |
| Solar Generator | 50 J/t | 常時稼働型の序盤発電を抑制 |
| Advanced Solar Generator | 300 J/t | Solar Generatorとの段階差を維持 |
| Wind Generator | 作成不可 | レシピと宝箱・敵Lootから削除 |
| Gas-Burning Generator | Ethene使用時、設計上の上限約9,216 FE/t | `burn_time: 40`、`energy: 90` |

Gas-Burning Generatorのレシピは次へ変更しています。

```text
Refined Obsidian  Reinforced Alloy  Refined Obsidian
Elite Circuit     PRC               Elite Circuit
Refined Obsidian  Reinforced Alloy  Refined Obsidian
```

PRCはPressurized Reaction Chamberです。核分裂、核融合、タービンなどの原子力系設定は
変更していません。

実装：
[generators.toml](payload/config/Mekanism/generators.toml)、
[DataMaps.js](payload/kubejs/server_scripts/Mods/Mekanism/DataMaps.js)、
[GasBurningGenerator.js](payload/kubejs/server_scripts/Mods/Mekanism/GasBurningGenerator.js)、
[DisableWindGenerator.js](payload/kubejs/server_scripts/Mods/Mekanism/DisableWindGenerator.js)

### Powah

Tierの並びはStarter / Basic / Hardened / Blazing / Niotic / Spirited / Nitroです。

| 発電機 | 調整後の発電量（FE/t） |
| --- | --- |
| Furnator | 30 / 100 / 300 / 900 / 2,500 / 6,000 / 10,000 |
| Magmator | 30 / 100 / 300 / 900 / 2,500 / 6,000 / 10,000 |
| Solar Panel | 20 / 60 / 180 / 500 / 1,200 / 3,000 / 6,000 |
| Thermo Generator | 20 / 60 / 100 / 200 / 400 / 800 / 1,600 |
| Reactor | 350 / 1,500 / 3,500 / 8,000 / 18,000 / 50,000 / 100,000 |

容量と転送速度は設定ファイルに記載された値を維持します。クエストのランダム報酬から
Thermo Generator完成品を除き、Battery類は残しています。

実装：[powah.json5](payload/config/powah.json5)

### Create: New Age Motor

FEから回転力への変換は、全Motorを最大1 RPMに固定し、その代わりStress Capacityで
Tier差を表現します。

| Motor | 最大速度 | Stress Capacity | 内部容量 |
| --- | ---: | ---: | ---: |
| Basic | 1 RPM | 15,360 SU | 16,000 FE |
| Advanced | 1 RPM | 61,440 SU | 64,000 FE |
| Reinforced | 1 RPM | 245,760 SU | 256,000 FE |

Motor Extensionの倍率と追加容量は変更していません。水車、風車、蒸気機関などCreateの
自然回転源も変更していません。

実装：[create_new_age-server.toml](payload/config/create_new_age-server.toml)

### AE2とIndustrial Foregoing

- AE2 Crystal Resonance GeneratorとVibration Chamberはレシピを削除。
- AE2クエスト報酬から単独起動用Generator完成品を削除。
- Industrial Foregoing Mycelial Reactorは、Antimatter Pellet 2、Nitro Reactor 2、
  Ultimate Control Circuit 2、Nether Star、Supreme Machine Frame、Ether Gas 2,000 mB、
  処理時間1,200 tickを要求。
- 発電機完成品を直接与える一部クエスト報酬を整理し、蓄電アイテムは維持。

実装：
[DisableStandaloneGenerators.js](payload/kubejs/server_scripts/Mods/AppliedEnergistics2/DisableStandaloneGenerators.js)、
[GeneratorRecipes.js](payload/kubejs/server_scripts/Mods/IndustrialForegoing/GeneratorRecipes.js)

## 採掘と資源生成

### Mekanism Digital Miner

| 設定 | 調整前 | 調整後 |
| --- | ---: | ---: |
| 最大半径 | 64 | 32 |
| 採掘間隔 | 80 tick | 120 tick |
| Easy Miner Filter | 有効 | 無効 |
| 回路素材 | Basic Circuit | Elite Circuit |

選択採掘機としては残し、広域を高速かつ簡単なフィルターで掘り尽くす性能を抑えています。

実装：
[general.toml](payload/config/Mekanism/general.toml)、
[BrokenDevices.js](payload/kubejs/server_scripts/Mods/Craftoria/BrokenDevices.js)

### RFTools Builder

Builder本体と建築用途は維持し、次のQuarry Cardはレシピと非ブロックLootから削除します。

- Shape Card Quarry
- Shape Card Quarry Silk
- Shape Card Quarry Fortune
- Shape Card Quarry Clearing
- Shape Card Quarry Clearing Silk
- Shape Card Quarry Clearing Fortune

これにより、巨大範囲の高速採掘とチャンクロードを閉じつつ、Builderの建築機能は残します。

### Industrial ForegoingとOccultism

- Ore Laser Baseへ追加されていたAncient Debris生成レシピを削除。
- Mob DuplicatorはSupreme Machine Frameを要求。
- Mob Duplicatorは処理時間120 tick、消費25,000 FE/operationへ変更。
- Occultism Ancient Eldritch Minerは15 tickから40 tickへ変更。
- Modern Industrialization Quarryは段階制、EU消費、Drill消耗を持つため変更なし。
- ReplicationとMI Replicatorは終盤設備として維持し、複製禁止タグを強化。

## Mob、ボス、Spawner

### 共通Mob制限

`#craftoria:mob_blacklist`にはMimic、Warden、各種Boss、非PossessedのOccultism Entityを
含め、次へ共有します。

- Ars Nouveau Drygmy
- Apothic Spawners
- Mob Grinding Utils Swab
- Industrial Foregoing Mob Duplicator
- Just Dire Things Paradox Machine

通常Mobの自動化は残し、ボスや固有Entityの受動的な複製を防ぎます。

### Hostile Neural Networks

- Loot Fabricator：256 FE/tから4,096 FE/tへ変更。
- Mimic、Piglich、Elder Guardian、Ender Dragon、Warden、WitherのModelを無効化。
- Twilight ForestのAlpha Yeti、Hydra、Lich、Minoshroom、Naga、Snow Queen、Ur-Ghastの
  Modelを無効化。
- Iron's SpellsのCitadel KeeperとDead KingのModelを無効化。
- MI Model Synthesizerも無効化対象Modelを出力しないよう同期。

自然ドロップと討伐クエストには触れないため、固有素材、装備、Trophyは実際のボス討伐で
入手します。

### Spawner系

| 対象 | 調整 |
| --- | --- |
| Apothic Spawner | 必要Silk Touch IからIV、採掘時耐久消費100から500 |
| Mob Grinding Utils Entity Spawner | レシピと非ブロックLootから削除 |
| PneumaticCraft Pressurized Spawner | Core消耗と圧力要求があるため変更なし |
| Industrial Foregoing Wither Builder | 素材を毎回消費するため変更なし |

### Mekanism Cardboard Box

通常機械の移設用途は維持し、Spawner、Trial Spawner、Vault、Waystone、Portal、End Gateway、
End Portal Frame、Reinforced Deepslateなどを移設禁止にしています。

## 時間操作

### Just Dire Things

| 対象 | 調整 |
| --- | --- |
| Time Wand最大倍率 | 256倍から32倍 |
| Time Wand RF係数 | 100から1,000 |
| Fake PlayerによるTime Wand使用 | 許可から禁止 |
| Paradox Machine制限モード | 無効から有効 |

Paradox MachineはBoss、特殊Mob、Item Entity、Experience Orb、Item Frame、Armor Stand、
Container Minecart、Chest Boat、Villager、荷運びMobなども復元対象から除外します。

### Gadgets Against Grind Time Sand Pouch

| 設定 | 調整前 | 調整後 |
| --- | ---: | ---: |
| 最大倍率 | 256倍 | 32倍 |
| 1回の消費 | 600 grains | 1,200 grains |
| Random Tick加速 | 有効 | 無効 |

レシピは維持し、プレイ時間を貯めて使う道具として残します。

## Easy Villagers

村人の収納と手動取引はQoLとして残し、一ブロックで資源や取引を完結させる装置を整理します。

| 装置 | 調整 |
| --- | --- |
| Farmer | レシピと非ブロックLootから削除 |
| Converter | レシピと非ブロックLootから削除 |
| Auto Trader | レシピと非ブロックLootから削除 |
| Breeder | Supreme Machine Frame級レシピ、生成1分から3分 |
| Iron Farm | Supreme Machine Frame級レシピ、生成4分から6分 |
| Trader | 変更なし |
| Incubator | 変更なし |
| Trade Cycling | 変更なし |

BreederはIncubator 2、Golden Apple 4、Emerald Block 2、Supreme Machine Frameを要求します。
Iron FarmはIron Block 6、Carved Pumpkin、Lava Bucket、Supreme Machine Frameを要求します。

実装：
[easy_villagers-server.toml](payload/config/easy_villagers-server.toml)、
[Balance.js](payload/kubejs/server_scripts/Mods/EasyVillagers/Balance.js)

## 意図的に維持している要素

- Mekanismの原子力系発電。
- Createの水車、風車、蒸気機関などの自然回転源。
- Energy Cube、Batteryなど蓄電設備の容量とLoot。
- Modern Industrialization Quarryと終盤Replicator。
- PneumaticCraft Pressurized Spawner。
- Industrial Foregoing Wither Builder。
- ボスの自然ドロップ、固有装備、Trophy、討伐クエスト。
- Easy Villagers Trader、Incubator、Trade Cycling。

## 反映タイミング

- KubeJSのレシピ、Loot、Tag、生成データは、対応していれば `/reload` で反映できます。
- `config/` の値はModによってホットリロード対応が異なります。
- 確実に全変更を反映するには、Minecraftを完全に終了して再起動してください。
- マルチプレイではクライアントとサーバーへ同じオーバーレイを適用してください。
