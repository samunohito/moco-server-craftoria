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

## 設備Tierの判定基準

発電機、蓄電設備、採掘機、資源生成機、Mob自動化などは、装備やダンジョンとは別のTierで
評価します。設備には作成できても十分に動かせない期間があるため、次の2段階を区別します。

- 導入Tier：本体を作成し、最低限の運転を開始できる時期。
- 常用Tier：燃料、入力、電力、搬出、Upgradeを自動化し、継続運転できる時期。

レシピ難度は導入Tier、出力・消費電力・Upgrade曲線は常用Tierを主に調整します。最大強化時の
常用Tierが導入Tierより後になることは許容し、設備本体を早めに触れる楽しさを残します。

Tier判定では次の5点を確認します。

1. 素材と進行条件：Overworld資源だけか、Nether、End、Boss素材、上位回路、他Mod進行を要求するか。
2. 必要インフラ：単体で動くか、複数機械、流体・Gas、Multiblock、高容量配線を要求するか。
3. 継続コスト：燃料、触媒、耐久、Mob素材、電力などを運転中も消費するか。
4. 自動化能力：放置運転、範囲、選択性、Chunkを跨ぐ処理、並列化によって手作業をどこまで置換するか。
5. 拡張時の影響：Upgradeや台数増加が線形か、自己増殖・無限資源・他進行の省略へつながるか。

| 段階 | 導入・常用の目安 | 許容する設備能力 |
| --- | --- | --- |
| 序盤 | Overworldの一般資源、手動燃料、単体配線で運転 | 小規模発電、短時間の蓄電、局所的・低速な自動化 |
| 中盤 | Nether素材、上位合金、複数機械、流体・Gas供給を要求 | 数千FE/t級の安定発電、一般資源の継続自動化、限定範囲の処理 |
| 後半 | End・Boss素材、Elite級回路、上位Machine Frame、大容量電力網を要求 | 広域選択採掘、Mob複製、高速処理、数万から十万FE/t級の設備 |
| 終盤 | Antimatter、最上位素材、複数Mod進行、大型Multiblockを要求 | 原子力、Replication、ほぼ無限の資源供給、最上位装備の生産基盤 |

数値帯は異なるエネルギー体系を比較するための目安で、FE/tだけでTierを決めません。例えば
燃料不要の放置発電は同出力の燃料式より高く評価し、消耗品を継続消費する設備は低く評価します。
また、Boss固有素材の複製、無条件の広域採掘、単独起動専用の代替発電など、他の進行を省略する
設備は「Tier外のバイパス」として扱い、レシピ高難度化だけで解決しない場合は対象制限または
無効化を選びます。

現在の代表例は次の通りです。

| 設備 | 導入Tier | 常用Tier | 判断 |
| --- | --- | --- | --- |
| Mekanism Solar / Powah Starter・Basic発電 | 序盤 | 序盤 | 低出力の導入用発電 |
| Mekanism Gas-Burning Generator | 中盤 | 中盤 | PRCとEthene自動化を要求。高効率のため本体レシピも強化 |
| Mekanism Digital Miner | 中盤 | 後半 | 本体は早めに導入可能だが、広域運転と9枚目以降の強化には大規模電力網を要求 |
| Powah Spirited / Nitro発電 | 後半 | 後半 | 上位素材と、方式ごとの燃料・熱源に対応した高出力発電 |
| Industrial Foregoing Mob Duplicator | 後半 | 後半 | Supreme Machine Frame、継続電力、Mob素材を要求し、Bossは対象外 |
| Industrial Foregoing Mycelial Reactor | 終盤 | 終盤 | Antimatter、Nitro Reactor、Supreme Machine Frameなど複数系統を要求 |
| Mekanism核分裂・核融合、MI Replicator | 終盤 | 終盤 | 大型設備と最上位素材を要求する最終生産基盤 |

蓄電設備は容量と転送速度だけでは資源やエネルギーを生みません。そのため発電・資源生成設備より
進行破壊リスクを一段低く扱い、現状は容量とLootを変更しません。Createの自然回転源も建築規模と
回転インフラを要求するため維持します。Create: New Age MotorはFEから回転力への変換設備として、
無限ループと自然回転源の陳腐化を防ぐ観点から速度を制限します。

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
| Speed / Energy Upgrade上限（全Mekanism機械） | 16 | 16（9枚目以降は追加電力ペナルティ） |

選択採掘機としては残し、広域を高速かつ簡単なフィルターで掘り尽くす性能を抑えています。
Upgrade上限は16のまま残し、8枚まではMekanism本来の曲線、9枚目以降はSpeed Upgrade
1枚ごとに相殺不能な1.5倍の追加電力ペナルティを課します。Speed / Energyを各16枚積むと
速度は100倍、電力は約2,563倍、標準機械の同時処理は最大16 operation/tickです。
高速化の面白さは残しつつ、発電設備と配線容量を伴わない安易な常用を抑えます。
機械内部容量にも追加ペナルティと同じ倍率を適用し、最大強化を理論上は運用可能にします。
これは消費電力や稼働時間を緩和せず、1 tick分の要求電力すら保持できない永久停止だけを防ぎます。

実装：
[general.toml](payload/config/Mekanism/general.toml)、
[Mekanism Overclock](../mekanism-overclock/README.md)、
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
- Ars Nouveauの捕獲系Spell Jar
- Apothic Spawners
- Mob Grinding Utils Swab
- Industrial Foregoing Mob Duplicator
- Industrial Foregoing Mob Imprisonment Tool
- Just Dire Things Paradox Machine
- Just Dire Things Creature Catcher、NoAI、Polymorph

通常Mobの自動化は残し、ボスや固有Entityの受動的な複製、捕獲、永久停止、変身を防ぎます。

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

## 戦闘バランス

### SlashBlade: Resharped

SlashBlade本来のコンボ、ガード、空中機動、自己修復と通常攻撃力は維持し、Sランク時の
精錬ボーナスと召喚攻撃の連発だけを抑制します。

| 設定 | 標準値 | 調整後 |
| --- | ---: | ---: |
| 通常ダメージ倍率 | 1.0 | 1.0（維持） |
| Sランク時の精錬ダメージ倍率 | 1.0 | 0.25 |
| Trapezohedronの精錬上限 | 2,147,483,647 | 200 |
| 単発召喚剣のProud Soul消費 | 2 | 5 |
| Blade ArtsのProud Soul消費 | 20 | 50 |
| レシピ素材となる刀の精錬値 | 合算 | 最大値のみ継承 |

通常の刀は基礎攻撃力2から8程度で、精錬による表示攻撃力も逓減します。一方、Sランク時は
現在の経験値Levelと精錬値に応じた別枠加算がコンボや召喚攻撃にも反映されるため、その倍率を
25%へ抑えます。Trapezohedronは既存の最上位Proud Soul素材と同じ精錬200を上限とし、
事実上無制限の育成と整数オーバーフローを防ぎます。

Naga、Hydra、Minoshroom、Wither、Ender Dragonなどから得る固有刀は、実際の討伐報酬として
変更せず維持します。PvPと友好Entityへの攻撃は無効のままです。

実装：[slashblade-common.toml](payload/config/slashblade-common.toml)

### 戦闘バイパス

主要Bossへ `#craftoria:mob_blacklist` を共有し、Just Dire ThingsのNoAI、Polymorph、
Creature Catcher、Industrial ForegoingのMob Imprisonment Tool、Ars Nouveauの捕獲系から
除外します。Bossの自然ドロップや討伐報酬は変更せず、正規の戦闘だけを必要にします。

Just Dire Thingsのクエスト抽選表から次を除外します。レシピや通常の進行による作成は
維持します。

- `justdirethings:upgrade_noai`
- `justdirethings:upgrade_invulnerability`

実装：
[tags.js](payload/kubejs/server_scripts/tags.js)、
[JDT 4 reward table](payload/config/ftbquests/quests/reward_tables/1D6F040D6822FC7F.snbt)、
[JDT 1 reward table](payload/config/ftbquests/quests/reward_tables/303299C956CA9C80.snbt)

### 中規模Boss

| 対象 | 調整前 | 調整後 |
| --- | ---: | ---: |
| Iron's Spells Tyros | 1,000 HP / 攻撃10 / Spell Power 1.25 | 1,250 HP / 攻撃12 / Spell Power 1.40 |
| Iron's Spells Dead King | 500 HP / 攻撃10 / Spell Power 1.15 | 750 HP / 攻撃12 / Spell Power 1.30 |
| Eternal Starlight Gatekeeper | 175 HP / 攻撃5 | 300 HP / 攻撃6 |
| Eternal Starlight Starlight Golem | 220 HP / 攻撃倍率1.0 | 350 HP / 攻撃倍率1.2 |
| Eternal Starlight Permafrost | 120 HP / 攻撃倍率1.0 | 240 HP / 攻撃倍率1.2 |
| Eternal Starlight Lunar Monstrosity | 200 HP / 攻撃倍率1.0 | 350 HP / 攻撃倍率1.2 |
| Eternal Starlight Solar Creeper | 250 HP / 攻撃倍率1.0 | 400 HP / 攻撃倍率1.2 |

Twilight Forestは単独戦の基礎値を一律変更せず、複数人戦では参加人数に応じてBossの
体力とLootを同時に増加させます。Cataclysmの極端な終盤Boss設定は変更しません。

実装：
[irons_spellbooks-server.toml](payload/config/irons_spellbooks-server.toml)、
[eternal_starlight.json](payload/config/eternal_starlight.json)、
[twilightforest-common.toml](payload/config/twilightforest-common.toml)

### Cataclysm Wither Assault Shoulder Weapon

他のCataclysm武器と比べて突出していたミサイルだけを緩和します。Bossドロップとしての
強さは残し、CataclysmのBoss能力値と他の武器は変更しません。

| 設定 | 調整前 | 調整後 | Mod標準値 |
| --- | ---: | ---: | ---: |
| Missile Damage | 145 | 48 | 16 |
| Missile Cooldown | 8 tick | 16 tick | 40 tick |

実装：[cataclysm.toml](payload/config/cataclysm.toml)

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

## 戦闘時の回復・蘇生

装備や消耗品を準備してBossへ挑む価値は残し、継続回復や連続蘇生によって戦闘そのものを
飛ばせる要素だけを抑えます。

| 対象 | 調整前 | 調整後 |
| --- | ---: | ---: |
| Advanced AE Regeneration Card | 毎tick 1 HP（毎秒10ハート） | 毎tick 0.1 HP（毎秒1ハート） |
| Reliquary Angelheart Vial | 64個スタック、既存素材のみ | 1個スタック、不死のトーテムを追加要求 |
| RAR Vampiric Glove | 育成で吸血率が30%を超過可能 | 吸血率上限30% |

Angelheart VialはMilk Bucket、Infernal Claw、Fertile Essence、Glass Paneに加えて
Totem of Undyingを1個消費します。Phoenix Down、JDT Death Protection、Cursium
Chestplateなど、消費または長い再使用待ちを伴う死亡保険は変更しません。

実装：
[advanced_ae-common.toml](payload/config/advanced_ae-common.toml)、
[vampiric_glove.yaml](payload/config/artifacts/relics/vampiric_glove.yaml)、
[Reliquary startup Balance.js](payload/kubejs/startup_scripts/Mods/Reliquary/Balance.js)、
[Reliquary recipe Balance.js](payload/kubejs/server_scripts/Mods/Reliquary/Balance.js)

## 装備の入手時期と通常ダンジョン

装備完成品は危険度と進行段階に合わせ、通常ダンジョンは素材、Affix装備、Gem、固有品を
探す場所として終盤まで価値を残します。

### 段階の判定基準

構造物の名前やDimensionだけでは分類せず、次の4点から「そのLootを最初に現実的に取得できる
時期」を判定します。

1. 到達条件：無条件のOverworld探索か、Dimension開放、鍵、前段Bossなどを要求するか。
2. 想定装備：初見攻略時に鉄、ダイヤ、Netherite、Mod上位装備のどれを想定するか。
3. 戦闘密度：地表の小規模戦か、複数Spawner、Mini Boss、Boss、攻略ギミックを含むか。
4. 盗掘耐性：戦闘を完了せず、壁抜き、掘削、離脱などで箱だけ取得しやすいか。

建物全体の難度より実際の箱への到達難度を優先します。大型構造物でも外周の樽は序盤、
最深部のTreasure箱は中盤という分類があり得ます。反対に、通常箱という名前でも鍵やBoss
討伐が必須なら後半扱いにできます。戦闘を避けて容易に取得できるLootは、建物の最高難度では
なく取得経路の段階まで下げて評価します。

| 段階 | 到達・攻略の目安 | 完成品Lootの方針 |
| --- | --- | --- |
| 序盤 | Overworldで無条件に発見でき、鉄装備前後で到達・離脱可能 | 革・金・チェイン・鉄装備を維持。ダイヤは原則素材 |
| 中盤 | Nether到達や探索準備を要し、ダイヤ装備で大型構造物や複数Spawnerを攻略 | Treasure、Vault、Equipment箱のダイヤ完成品を維持 |
| 後半 | Dimension進行、鍵、前段Bossを要し、Netheriteや強化済み装備で固有Mob・Bossを攻略 | Netherite級、テーマ固有品、Boss固有装備を許可 |
| 終盤 | 複数の進行系統、最終Boss、最上位技術・素材を要求 | 最終Boss固有品と最終素材を許可。汎用最上位装備は通常Lootへ追加しない |

目安となる例は次の通りです。

| Loot源 | 判定 | 理由 |
| --- | --- | --- |
| Artifacts Campsite、Mushroom Villageの樽 | 序盤 | 地表で見つかり、低装備でも回収・離脱しやすい |
| Illager Windmillの通常樽 | 序盤から中盤 | 戦闘はあるが、最深部攻略を要求しない |
| Illager WindmillのTreasure箱、Dungeons Arise大型構造物の最深部 | 中盤 | 構造物攻略に対する明示的な報酬 |
| Bastion、Ancient City、Deeper Darker Temple | 後半 | 高密度の危険、特殊環境、進行準備を要求 |
| 進行条件付きDimensionの後半Boss、Cataclysm上位Boss | 終盤 | 前段進行と最上位戦闘準備を要求 |

MekaSuit、Advanced AE Quantum、MI Quantum、JDT上位装備は「終盤ダンジョン装備」ではなく
技術・素材進行の終盤装備です。ダンジョンTierとは別枠ですが、通常Lootから完成品を配布せず、
前段装備と対応する技術進行を要求する点を共通方針とします。

クエスト報酬表は確認時点で素材、Template、Upgrade、部品が中心で、終盤装備の完成品を
直接配布していないため変更しません。Cataclysm Black Steel、Iron's Spells Autoloader
Crossbow、SpectrumのCircletなど、テーマ構造物の固有完成品も探索の個性として維持します。

低危険度の地表Lootだけ、完成済みダイヤ装備を除外します。

| Loot | 除外する完成品 | 残る主な価値 |
| --- | --- | --- |
| Artifacts Campsite Chest | ダイヤの斧、ツルハシ、シャベル | 鉄・金装備、鉱石、ダイヤ、Artifact抽選 |
| Dungeons Arise Illager Windmill Barrel | ダイヤの剣 | 鉄装備、資材。Treasure箱のダイヤ剣は維持 |
| Dungeons Arise Mushroom Village Barrel | ダイヤの剣 | 食料、資材、村系Loot |

Apotheosis標準の通常チェスト向けAffix装備30％、Gem 20％の抽選は変更しません。これにより
通常ダンジョンには、上位装備を完成品で配らずとも厳選・分解・強化素材として再訪価値が
残ります。Boss Loot、Treasure、Vault、Equipment箱にはこの除外を適用しません。

実装：
[EquipmentProgression.js](payload/kubejs/server_scripts/Mods/Craftoria/EquipmentProgression.js)

## 意図的に維持している要素

- Mekanismの原子力系発電。
- Createの水車、風車、蒸気機関などの自然回転源。
- Energy Cube、Batteryなど蓄電設備の容量とLoot。
- Modern Industrialization Quarryと終盤Replicator。
- PneumaticCraft Pressurized Spawner。
- Industrial Foregoing Wither Builder。
- ボスの自然ドロップ、固有装備、Trophy、討伐クエスト。
- Apotheosisの通常Gem性能・抽選と、Apothic GatewayのGem報酬。
- Easy Villagers Trader、Incubator、Trade Cycling。

## 反映タイミング

- KubeJSのレシピ、Loot、Tag、生成データは、対応していれば `/reload` で反映できます。
- `config/` の値はModによってホットリロード対応が異なります。
- 確実に全変更を反映するには、Minecraftを完全に終了して再起動してください。
- マルチプレイではクライアントとサーバーへ同じオーバーレイを適用してください。
