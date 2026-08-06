import { $TagKey } from "@package/net/minecraft/tags";
import { $Codec } from "@package/com/mojang/serialization";
import { $Item } from "@package/net/minecraft/world/item";
import { $LivingEntity } from "@package/net/minecraft/world/entity";
import { $Player, $Inventory } from "@package/net/minecraft/world/entity/player";
import { $Enum, $Record } from "@package/java/lang";
import { $List, $List_ } from "@package/java/util";
import { $StringRepresentable } from "@package/net/minecraft/util";

declare module "@package/cn/leolezury/eternalstarlight/common/spell" {
    export class $ManaType extends $Enum<$ManaType> implements $StringRepresentable {
        static values(): $ManaType[];
        static valueOf(name: string): $ManaType;
        getColor(): number;
        getSerializedName(): string;
        getCrystalsTag(): $TagKey<$Item>;
        getRemappedEnumConstantName(): string;
        static TERRA: $ManaType;
        static WIND: $ManaType;
        static LUNAR: $ManaType;
        static CODEC: $Codec<$ManaType>;
        static BLAZE: $ManaType;
        static LIGHT: $ManaType;
        static EMPTY: $ManaType;
        static WATER: $ManaType;
        get color(): number;
        get serializedName(): string;
        get crystalsTag(): $TagKey<$Item>;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $ManaType}.
     */
    export type $ManaType_ = "empty" | "terra" | "wind" | "water" | "lunar" | "blaze" | "light";
    export class $AbstractSpell {
        start(entity: $LivingEntity, damageCrystal: boolean): void;
        start(entity: $LivingEntity, strength: number, damageCrystal: boolean): void;
        onStart(arg0: $LivingEntity): void;
        stop(entity: $LivingEntity, ticks: number): void;
        tick(entity: $LivingEntity, ticks: number): void;
        checkExtraConditionsToContinue(arg0: $LivingEntity, arg1: number): boolean;
        checkExtraConditions(arg0: $LivingEntity): boolean;
        onStop(arg0: $LivingEntity, arg1: number): void;
        canCast(entity: $LivingEntity, checkCrystal: boolean): boolean;
        spellProperties(): $AbstractSpell$Properties;
        onSpellTick(arg0: $LivingEntity, arg1: number): void;
        canContinueToCast(entity: $LivingEntity, totalTicks: number): boolean;
        damageCrystal(player: $Player): void;
        hasNeededCrystal(inventory: $Inventory): boolean;
        onPreparationTick(arg0: $LivingEntity, arg1: number): void;
        constructor(properties: $AbstractSpell$Properties_);
    }
    export class $AbstractSpell$Properties extends $Record {
        types(): $List<$ManaType>;
        cooldownTicks(): number;
        spellTicks(): number;
        totalTicks(): number;
        preparationTicks(): number;
        constructor(types: $List_<$ManaType_>, preparationTicks: number, spellTicks: number, cooldownTicks: number);
    }
    /**
     * Values that may be interpreted as {@link $AbstractSpell$Properties}.
     */
    export type $AbstractSpell$Properties_ = { types?: $List_<$ManaType_>, preparationTicks?: number, spellTicks?: number, cooldownTicks?: number,  } | [types?: $List_<$ManaType_>, preparationTicks?: number, spellTicks?: number, cooldownTicks?: number, ];
}
