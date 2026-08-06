import { $Level_, $Level } from "@package/net/minecraft/world/level";
import { $InteractionResult, $InteractionResult_ } from "@package/net/minecraft/world";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $Item_, $Item } from "@package/net/minecraft/world/item";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $Record } from "@package/java/lang";
import { $List_ } from "@package/java/util";

declare module "@package/de/dafuqs/spectrum/api/pastel_network" {
    export class $PastelUpgradeable {
    }
    export interface $PastelUpgradeable {
        apply(arg0: $PastelUpgradeSignature_, arg1: $List_<$PastelUpgradeSignature_>): void;
        markTriggerTransfer(): void;
        markTriggered(): void;
        applySimple(arg0: $PastelUpgradeSignature_): void;
        notifySensor(): void;
        applyCompounding(arg0: $PastelUpgradeSignature_): void;
        applySlotUpgrade(arg0: $PastelUpgradeSignature_): void;
        upgradePriority(): void;
        isTriggerTransfer(): boolean;
        markLit(): void;
        markSensor(): void;
        isSensor(): boolean;
        markLamp(): void;
        get triggerTransfer(): boolean;
        get sensor(): boolean;
    }
    export class $PastelUpgradeSignature {
        static builder(arg0: $Item_, arg1: $PastelUpgradeSignature$Category, arg2: string): $PastelUpgradeSignature$Builder;
        outerRing(): $ResourceLocation;
        innerRing(): $ResourceLocation;
        speedMult: number;
        stack: number;
        stackMult: number;
        upgradeItem: $Item;
        lamp: boolean;
        slotRows: number;
        priority: boolean;
        speed: number;
        static INNER_RING_BASE_PATH: string;
        static REDSTONE_RING_BASE_PATH: string;
        triggerTransfer: boolean;
        static OUTER_RING_BASE_PATH: string;
        preProcessor: $PastelUpgradeSignature$RedstoneStateModifier;
        light: boolean;
        name: string;
        sensor: boolean;
        category: $PastelUpgradeSignature$Category;
        postProcessor: $PastelUpgradeSignature$RedstoneStateModifier;
    }
    /**
     * Values that may be interpreted as {@link $PastelUpgradeSignature}.
     */
    export type $PastelUpgradeSignature_ = RegistryTypes.SpectrumPastelUpgrade;
    export class $PastelUpgradeSignature$RedstoneStateModifier {
        static PASS: $PastelUpgradeSignature$RedstoneStateModifier;
    }
    export interface $PastelUpgradeSignature$RedstoneStateModifier {
        apply(arg0: $PastelUpgradeSignature$RedstoneContext_): $InteractionResult;
    }
    /**
     * Values that may be interpreted as {@link $PastelUpgradeSignature$RedstoneStateModifier}.
     */
    export type $PastelUpgradeSignature$RedstoneStateModifier_ = ((arg0: $PastelUpgradeSignature$RedstoneContext) => $InteractionResult_);
    export class $PastelUpgradeSignature$RedstoneContext extends $Record {
        pos(): $BlockPos;
        world(): $Level;
        active(): boolean;
        upgradeable(): $PastelUpgradeable;
        constructor(upgradeable: $PastelUpgradeable, world: $Level_, pos: $BlockPos_, active: boolean);
    }
    /**
     * Values that may be interpreted as {@link $PastelUpgradeSignature$RedstoneContext}.
     */
    export type $PastelUpgradeSignature$RedstoneContext_ = { active?: boolean, upgradeable?: $PastelUpgradeable, pos?: $BlockPos_, world?: $Level_,  } | [active?: boolean, upgradeable?: $PastelUpgradeable, pos?: $BlockPos_, world?: $Level_, ];
    export class $PastelUpgradeSignature$Category {
        static redstone(): $PastelUpgradeSignature$Category;
        static simple(): $PastelUpgradeSignature$Category;
        isRedstone(): boolean;
        static nonCompounding(): $PastelUpgradeSignature$Category;
        compoundsWith(arg0: $PastelUpgradeSignature$Category): boolean;
        constructor();
    }
    export interface $PastelUpgradeSignature extends RegistryMarked<RegistryTypes.SpectrumPastelUpgradeTag, RegistryTypes.SpectrumPastelUpgrade> {}
    export class $PastelUpgradeSignature$Builder {
        name(arg0: string): $PastelUpgradeSignature$Builder;
        priority(arg0: boolean): $PastelUpgradeSignature$Builder;
        build(): $PastelUpgradeSignature;
        speedMod(arg0: number): $PastelUpgradeSignature$Builder;
        named(arg0: string): $PastelUpgradeSignature$Builder;
        light(arg0: boolean): $PastelUpgradeSignature$Builder;
        sensor(arg0: boolean): $PastelUpgradeSignature$Builder;
        redstone(arg0: string): $PastelUpgradeSignature$Builder;
        lamp(arg0: boolean): $PastelUpgradeSignature$Builder;
        redstonePostProcess(arg0: $PastelUpgradeSignature$RedstoneStateModifier_): $PastelUpgradeSignature$Builder;
        redstonePreProcess(arg0: $PastelUpgradeSignature$RedstoneStateModifier_): $PastelUpgradeSignature$Builder;
        buildRedstone(): $PastelUpgradeSignature;
        triggerTransfer(arg0: boolean): $PastelUpgradeSignature$Builder;
        stackMult(arg0: number): $PastelUpgradeSignature$Builder;
        speedMult(arg0: number): $PastelUpgradeSignature$Builder;
        outerRing(arg0: string): $PastelUpgradeSignature$Builder;
        slotRowMod(arg0: number): $PastelUpgradeSignature$Builder;
        innerRing(arg0: string): $PastelUpgradeSignature$Builder;
        stackMod(arg0: number): $PastelUpgradeSignature$Builder;
        constructor(arg0: $Item_, arg1: $PastelUpgradeSignature$Category, arg2: string);
    }
}
