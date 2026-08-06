import { $LevelReader } from "@package/net/minecraft/world/level";
import { $BlockPos_, $Holder_, $Holder } from "@package/net/minecraft/core";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $Enchantment } from "@package/net/minecraft/world/item/enchantment";
import { $Record } from "@package/java/lang";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $Set_, $Set } from "@package/java/util";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/dev/shadowsoffire/apothic_enchanting/table" {
    export class $EnchantmentTableStats$Builder {
        build(): $EnchantmentTableStats;
        setAllowsTreasure(arg0: boolean): void;
        setStable(arg0: boolean): void;
        blacklistEnchant(arg0: $Holder_<$Enchantment>): void;
        addQuanta(arg0: number): void;
        addArcana(arg0: number): void;
        addClues(arg0: number): void;
        addEterna(arg0: number, arg1: number): void;
        constructor(arg0: number);
        set allowsTreasure(value: boolean);
        set stable(value: boolean);
    }
    export class $ApothEnchantmentScreen$SuperRender {
    }
    export interface $ApothEnchantmentScreen$SuperRender {
        apoth_superRender(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number): void;
    }
    /**
     * Values that may be interpreted as {@link $ApothEnchantmentScreen$SuperRender}.
     */
    export type $ApothEnchantmentScreen$SuperRender_ = ((arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number) => void);
    export class $EnchantmentTableStats extends $Record {
        static vanilla(arg0: number): $EnchantmentTableStats;
        static canReadStatsFrom(arg0: $LevelReader, arg1: $BlockPos_, arg2: $BlockPos_): boolean;
        stable(): boolean;
        static gatherStats(arg0: $EnchantmentTableStats$Builder, arg1: $LevelReader, arg2: $BlockPos_): void;
        static gatherStats(arg0: $LevelReader, arg1: $BlockPos_, arg2: number): $EnchantmentTableStats;
        eterna(): number;
        quanta(): number;
        arcana(): number;
        clues(): number;
        treasure(): boolean;
        blacklist(): $Set<$Holder<$Enchantment>>;
        static INVALID: $EnchantmentTableStats;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $EnchantmentTableStats>;
        constructor(eterna: number, quanta: number, arcana: number, clues: number, blacklist: $Set_<$Holder_<$Enchantment>>, treasure: boolean, stable: boolean);
    }
    /**
     * Values that may be interpreted as {@link $EnchantmentTableStats}.
     */
    export type $EnchantmentTableStats_ = { clues?: number, treasure?: boolean, arcana?: number, quanta?: number, blacklist?: $Set_<$Holder_<$Enchantment>>, eterna?: number, stable?: boolean,  } | [clues?: number, treasure?: boolean, arcana?: number, quanta?: number, blacklist?: $Set_<$Holder_<$Enchantment>>, eterna?: number, stable?: boolean, ];
}
