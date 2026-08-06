import { $ItemLike_ } from "@package/net/minecraft/world/level";
import { $AdvancementHolder_ } from "@package/net/minecraft/advancements";
import { $Consumer_ } from "@package/java/util/function";
import { $ItemStack, $Item_, $Item } from "@package/net/minecraft/world/item";
import { $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $LootItemCondition } from "@package/net/minecraft/world/level/storage/loot/predicates";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $List, $List_, $Map_ } from "@package/java/util";
import { $LootContext } from "@package/net/minecraft/world/level/storage/loot";

declare module "@package/trofers/data" {
    export interface $AdvancementDrops extends RegistryMarked<RegistryTypes.TrofersAdvancementDropsTag, RegistryTypes.TrofersAdvancementDrops> {}
    export interface $EntityDrops extends RegistryMarked<RegistryTypes.TrofersEntityDropsTag, RegistryTypes.TrofersEntityDrops> {}
    export class $EntityDrops extends $ConditionalTrophyDrops {
        apply(generatedLoot: $Consumer_<$ItemStack>, context: $LootContext): void;
        static create(conditions: $List_<$LootItemCondition>, trophyBase: $ItemLike_, trophies: $Map_<$ResourceLocation_, $ResourceLocation_>): $EntityDrops;
        static create(conditions: $List_<$LootItemCondition>, trophyBase: $ItemLike_, trophies: $Map_<$ResourceLocation_, $ResourceLocation_>, validate: boolean): $EntityDrops;
        static CODEC: $Codec<$EntityDrops>;
        static MAP_CODEC: $MapCodec<$EntityDrops>;
        static NONE: $EntityDrops;
        conditions: $List<$LootItemCondition>;
        trophyBase: $Item;
    }
    /**
     * Values that may be interpreted as {@link $EntityDrops}.
     */
    export type $EntityDrops_ = RegistryTypes.TrofersEntityDrops;
    export class $AdvancementDrops extends $ConditionalTrophyDrops {
        static onAdvancementAwarded(player: $Player, advancement: $AdvancementHolder_): void;
        static CODEC: $Codec<$AdvancementDrops>;
        static MAP_CODEC: $MapCodec<$AdvancementDrops>;
        static NONE: $AdvancementDrops;
        conditions: $List<$LootItemCondition>;
        trophyBase: $Item;
        constructor(conditions: $List_<$LootItemCondition>, trophyBase: $ItemLike_, trophies: $Map_<$ResourceLocation_, $ResourceLocation_>);
    }
    /**
     * Values that may be interpreted as {@link $AdvancementDrops}.
     */
    export type $AdvancementDrops_ = RegistryTypes.TrofersAdvancementDrops;
    export class $ConditionalTrophyDrops {
        matchesConditions(lootContext: $LootContext): boolean;
        awardTrophy(trophyId: $ResourceLocation_, consumer: $Consumer_<$ItemStack>): void;
        conditions: $List<$LootItemCondition>;
        trophyBase: $Item;
        constructor(conditions: $List_<$LootItemCondition>, trophyBase: $Item_);
    }
}
