import { $Level, $Level_ } from "@package/net/minecraft/world/level";
import { $Container } from "@package/net/minecraft/world";
import { $UpgradeType, $UpgradeBase, $UpgradeData_, $UpgradeData } from "@package/dan200/computercraft/api/upgrades";
import { $BlockPos, $BlockPos_, $Direction_, $Registry, $Direction } from "@package/net/minecraft/core";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $GameProfile } from "@package/com/mojang/authlib";
import { $ResourceLocation_, $ResourceKey } from "@package/net/minecraft/resources";
import { $DataComponentPatch_, $DataComponentPatch } from "@package/net/minecraft/core/component";
import { $Enum, $Object } from "@package/java/lang";
import { $MethodResult } from "@package/dan200/computercraft/api/lua";
import { $IPeripheral } from "@package/dan200/computercraft/api/peripheral";

declare module "@package/dan200/computercraft/api/turtle" {
    export class $TurtleCommand {
    }
    export interface $TurtleCommand {
        execute(arg0: $ITurtleAccess): $TurtleCommandResult;
    }
    /**
     * Values that may be interpreted as {@link $TurtleCommand}.
     */
    export type $TurtleCommand_ = ((arg0: $ITurtleAccess) => $TurtleCommandResult);
    export class $TurtleVerb extends $Enum<$TurtleVerb> {
        static values(): $TurtleVerb[];
        static valueOf(arg0: string): $TurtleVerb;
        static DIG: $TurtleVerb;
        static ATTACK: $TurtleVerb;
    }
    /**
     * Values that may be interpreted as {@link $TurtleVerb}.
     */
    export type $TurtleVerb_ = "dig" | "attack";
    export class $ITurtleAccess {
    }
    export interface $ITurtleAccess {
        getLevel(): $Level;
        playAnimation(arg0: $TurtleAnimation_): void;
        getPosition(): $BlockPos;
        executeCommand(arg0: $TurtleCommand_): $MethodResult;
        isRemoved(): boolean;
        getInventory(): $Container;
        setSelectedSlot(arg0: number): void;
        getDirection(): $Direction;
        setDirection(arg0: $Direction_): void;
        teleportTo(arg0: $Level_, arg1: $BlockPos_): boolean;
        getUpgradeData(arg0: $TurtleSide_): $DataComponentPatch;
        consumeFuel(arg0: number): boolean;
        getUpgrade(arg0: $TurtleSide_): $ITurtleUpgrade;
        setUpgrade(arg0: $TurtleSide_, arg1: $UpgradeData_<$ITurtleUpgrade_>): void;
        getColour(): number;
        getPeripheral(arg0: $TurtleSide_): $IPeripheral;
        addFuel(arg0: number): void;
        getSelectedSlot(): number;
        isFuelNeeded(): boolean;
        getOwningPlayer(): $GameProfile;
        setFuelLevel(arg0: number): void;
        getUpgradeWithData(arg0: $TurtleSide_): $UpgradeData<$ITurtleUpgrade>;
        getFuelLevel(): number;
        getFuelLimit(): number;
        setUpgradeData(arg0: $TurtleSide_, arg1: $DataComponentPatch_): void;
        setColour(arg0: number): void;
        get level(): $Level;
        get position(): $BlockPos;
        get removed(): boolean;
        get inventory(): $Container;
        get fuelNeeded(): boolean;
        get owningPlayer(): $GameProfile;
        get fuelLimit(): number;
    }
    export interface $ITurtleUpgrade extends RegistryMarked<RegistryTypes.ComputercraftTurtleUpgradeTag, RegistryTypes.ComputercraftTurtleUpgrade> {}
    export class $TurtleSide extends $Enum<$TurtleSide> {
        static values(): $TurtleSide[];
        static valueOf(arg0: string): $TurtleSide;
        static LEFT: $TurtleSide;
        static RIGHT: $TurtleSide;
    }
    /**
     * Values that may be interpreted as {@link $TurtleSide}.
     */
    export type $TurtleSide_ = "left" | "right";
    export class $ITurtleUpgrade {
        static createKey(arg0: $ResourceLocation_): $ResourceKey<$ITurtleUpgrade>;
        static typeRegistry(): $ResourceKey<$Registry<$UpgradeType<$ITurtleUpgrade>>>;
        static REGISTRY: $ResourceKey<$Registry<$ITurtleUpgrade>>;
    }
    export interface $ITurtleUpgrade extends $UpgradeBase {
        update(arg0: $ITurtleAccess, arg1: $TurtleSide_): void;
        getType(): $UpgradeType<$ITurtleUpgrade>;
        createPeripheral(arg0: $ITurtleAccess, arg1: $TurtleSide_): $IPeripheral;
        getPersistedData(arg0: $DataComponentPatch_): $DataComponentPatch;
        useTool(arg0: $ITurtleAccess, arg1: $TurtleSide_, arg2: $TurtleVerb_, arg3: $Direction_): $TurtleCommandResult;
        getUpgradeType(): $TurtleUpgradeType;
        get type(): $UpgradeType<$ITurtleUpgrade>;
        get upgradeType(): $TurtleUpgradeType;
    }
    /**
     * Values that may be interpreted as {@link $ITurtleUpgrade}.
     */
    export type $ITurtleUpgrade_ = RegistryTypes.ComputercraftTurtleUpgrade;
    export class $TurtleCommandResult {
        static failure(): $TurtleCommandResult;
        static failure(arg0: string): $TurtleCommandResult;
        getErrorMessage(): string;
        static success(): $TurtleCommandResult;
        static success(arg0: $Object[]): $TurtleCommandResult;
        getResults(): $Object[];
        isSuccess(): boolean;
        get errorMessage(): string;
        get results(): $Object[];
    }
    export class $TurtleUpgradeType extends $Enum<$TurtleUpgradeType> {
        static values(): $TurtleUpgradeType[];
        static valueOf(arg0: string): $TurtleUpgradeType;
        isPeripheral(): boolean;
        isTool(): boolean;
        static PERIPHERAL: $TurtleUpgradeType;
        static BOTH: $TurtleUpgradeType;
        static TOOL: $TurtleUpgradeType;
        get peripheral(): boolean;
        get tool(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $TurtleUpgradeType}.
     */
    export type $TurtleUpgradeType_ = "tool" | "peripheral" | "both";
    export class $TurtleAnimation extends $Enum<$TurtleAnimation> {
        static values(): $TurtleAnimation[];
        static valueOf(arg0: string): $TurtleAnimation;
        static TURN_RIGHT: $TurtleAnimation;
        static SWING_LEFT_TOOL: $TurtleAnimation;
        static MOVE_UP: $TurtleAnimation;
        static MOVE_DOWN: $TurtleAnimation;
        static TURN_LEFT: $TurtleAnimation;
        static MOVE_BACK: $TurtleAnimation;
        static MOVE_FORWARD: $TurtleAnimation;
        static NONE: $TurtleAnimation;
        static SWING_RIGHT_TOOL: $TurtleAnimation;
        static WAIT: $TurtleAnimation;
        static SHORT_WAIT: $TurtleAnimation;
    }
    /**
     * Values that may be interpreted as {@link $TurtleAnimation}.
     */
    export type $TurtleAnimation_ = "none" | "move_forward" | "move_back" | "move_up" | "move_down" | "turn_left" | "turn_right" | "swing_left_tool" | "swing_right_tool" | "wait" | "short_wait";
}
