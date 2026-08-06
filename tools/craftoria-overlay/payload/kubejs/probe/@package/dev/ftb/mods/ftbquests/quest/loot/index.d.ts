import { $ConfigGroup } from "@package/dev/ftb/mods/ftblibrary/config";
import { $ItemStack, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $Component, $Component_ } from "@package/net/minecraft/network/chat";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $Color4I } from "@package/dev/ftb/mods/ftblibrary/icon";
import { $TooltipList } from "@package/dev/ftb/mods/ftblibrary/util";
import { $List, $Map, $Collection } from "@package/java/util";
import { $Comparable } from "@package/java/lang";
import { $Reward } from "@package/dev/ftb/mods/ftbquests/quest/reward";
import { $RandomSource } from "@package/net/minecraft/util";
import { $BaseQuestFile, $QuestObjectBase, $Quest } from "@package/dev/ftb/mods/ftbquests/quest";

declare module "@package/dev/ftb/mods/ftbquests/quest/loot" {
    export class $LootCrate {
        getTable(): $RewardTable;
        isGlow(): boolean;
        getColor(): $Color4I;
        getDrops(): $EntityWeight;
        writeData(nbt: $CompoundTag_): void;
        createStack(): $ItemStack;
        getItemName(): string;
        readData(nbt: $CompoundTag_): void;
        fillConfigGroup(config: $ConfigGroup): void;
        readNetData(data: $FriendlyByteBuf): void;
        static allCrateStacks(isClientSide: boolean): $Collection<$ItemStack>;
        writeNetData(data: $FriendlyByteBuf): void;
        static getLootCrates(isClient: boolean): $Map<string, $LootCrate>;
        getStringID(): string;
        initFromTable(): void;
        constructor(table: $RewardTable, initFromTable: boolean);
        get table(): $RewardTable;
        get glow(): boolean;
        get color(): $Color4I;
        get drops(): $EntityWeight;
        get itemName(): string;
        get stringID(): string;
    }
    export class $EntityWeight {
        getWeight(entity: $Entity): number;
        writeData(nbt: $CompoundTag_): void;
        readData(nbt: $CompoundTag_): void;
        readNetData(data: $FriendlyByteBuf): void;
        writeNetData(data: $FriendlyByteBuf): void;
        boss: number;
        passive: number;
        monster: number;
        constructor();
    }
    export class $RewardTable extends $QuestObjectBase {
        copy(): $RewardTable;
        getFile(): $BaseQuestFile;
        getFilename(): string;
        addReward(weightedReward: $WeightedReward): void;
        getTotalWeight(includeEmpty: boolean): number;
        shouldShowTooltip(): boolean;
        getWeightedRewards(): $List<$WeightedReward>;
        static isFakeQuestId(id: number): boolean;
        getLootCrate(): $LootCrate;
        addMouseOverText(list: $TooltipList, includeWeight: boolean, includeEmpty: boolean): void;
        removeReward(weightedReward: $WeightedReward): void;
        getTitleOrElse(def: $Component_): $Component;
        getFakeQuest(): $Quest;
        toggleLootCrate(): $LootCrate;
        makeWeightedItemReward(stack: $ItemStack_, weight: number): $WeightedReward;
        static createRewardForTable(id: number, type: string, file: $BaseQuestFile): $QuestObjectBase;
        generateWeightedRandomRewards(random: $RandomSource, nAttempts: number, includeEmpty: boolean): $Collection<$WeightedReward>;
        id: number;
        constructor(id: number, file: $BaseQuestFile);
        constructor(id: number, file: $BaseQuestFile, filename: string);
        get file(): $BaseQuestFile;
        get filename(): string;
        get weightedRewards(): $List<$WeightedReward>;
        get lootCrate(): $LootCrate;
        get fakeQuest(): $Quest;
    }
    export class $WeightedReward implements $Comparable<$WeightedReward> {
        compareTo(o: $WeightedReward): number;
        copy(): $WeightedReward;
        setWeight(weight: number): void;
        getWeight(): number;
        getReward(): $Reward;
        static chanceString(weight: number, totalWeight: number, empty: boolean): string;
        static chanceString(weight: number, totalWeight: number): string;
        constructor(reward: $Reward, weight: number);
        get reward(): $Reward;
    }
}
