import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $Codec } from "@package/com/mojang/serialization";
import { $ItemStack, $ItemStack_ } from "@package/net/minecraft/world/item";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $Biome_ } from "@package/net/minecraft/world/level/biome";
import { $ResourceLocation_, $ResourceKey_, $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $TriConsumer_, $TriConsumer } from "@package/org/apache/logging/log4j/util";
import { $Record } from "@package/java/lang";
import { $List, $List_ } from "@package/java/util";
import { $Structure } from "@package/net/minecraft/world/level/levelgen/structure";
export * as iterators from "@package/twilightforest/util/iterators";
export * as woods from "@package/twilightforest/util/woods";

declare module "@package/twilightforest/util" {
    export interface $Restriction extends RegistryMarked<RegistryTypes.TwilightRestrictionsTag, RegistryTypes.TwilightRestrictions> {}
    export class $Enforcement extends $Record {
        consumer(): $TriConsumer<$Player, $ServerLevel, $Restriction>;
        static enforceBiomeProgression(arg0: $Player, arg1: $ServerLevel): void;
        constructor(consumer: $TriConsumer_<$Player, $ServerLevel, $Restriction>);
    }
    /**
     * Values that may be interpreted as {@link $Enforcement}.
     */
    export type $Enforcement_ = RegistryTypes.TwilightforestEnforcement | { consumer?: $TriConsumer_<$Player, $ServerLevel, $Restriction>,  } | [consumer?: $TriConsumer_<$Player, $ServerLevel, $Restriction>, ];
    export interface $Enforcement extends RegistryMarked<RegistryTypes.TwilightforestEnforcementTag, RegistryTypes.TwilightforestEnforcement> {}
    export class $Restriction extends $Record {
        multiplier(): number;
        advancements(): $List<$ResourceLocation>;
        lockedBiomeToast(): $ItemStack;
        hintStructureKey(): $ResourceKey<$Structure>;
        static isBiomeSafeFor(arg0: $Biome_, arg1: $Entity): boolean;
        static getRestrictionForBiome(arg0: $Biome_, arg1: $Entity): ($Restriction) | undefined;
        enforcement(): $ResourceKey<$Enforcement>;
        static CODEC: $Codec<$Restriction>;
        constructor(hintStructureKey: $ResourceKey_<$Structure> | null, enforcement: $ResourceKey_<$Enforcement>, multiplier: number, lockedBiomeToast: $ItemStack_ | null, advancements: $List_<$ResourceLocation_>);
    }
    /**
     * Values that may be interpreted as {@link $Restriction}.
     */
    export type $Restriction_ = RegistryTypes.TwilightRestrictions | { multiplier?: number, hintStructureKey?: $ResourceKey_<$Structure>, lockedBiomeToast?: $ItemStack_, advancements?: $List_<$ResourceLocation_>, enforcement?: $ResourceKey_<$Enforcement>,  } | [multiplier?: number, hintStructureKey?: $ResourceKey_<$Structure>, lockedBiomeToast?: $ItemStack_, advancements?: $List_<$ResourceLocation_>, enforcement?: $ResourceKey_<$Enforcement>, ];
}
