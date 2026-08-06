import { $GoalSelector, $Goal } from "@package/net/minecraft/world/entity/ai/goal";
import { $MapCodec_, $MapCodec } from "@package/com/mojang/serialization";
import { $Pair } from "@package/org/apache/commons/lang3/tuple";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $IEnergyStorage } from "@package/net/neoforged/neoforge/energy";
import { $IDroneDebugger } from "@package/me/desht/pneumaticcraft/api/drone/debug";
import { $UUID, $List, $List_ } from "@package/java/util";
import { $Supplier_ } from "@package/java/util/function";
import { $FakePlayer } from "@package/net/neoforged/neoforge/common/util";
import { $SoundEvent_, $SoundSource_ } from "@package/net/minecraft/sounds";
import { $BlockPos, $BlockPos_, $Direction_ } from "@package/net/minecraft/core";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $Enum, $Object } from "@package/java/lang";
import { $PNCUpgrade } from "@package/me/desht/pneumaticcraft/api/upgrade";
import { $Level } from "@package/net/minecraft/world/level";
import { $Event } from "@package/net/neoforged/bus/api";
import { $ItemStack_, $ItemStack, $DyeColor } from "@package/net/minecraft/world/item";
import { $Fluid_ } from "@package/net/minecraft/world/level/material";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $IItemHandlerModifiable } from "@package/net/neoforged/neoforge/items";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $ItemEntity } from "@package/net/minecraft/world/entity/item";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $FluidTank } from "@package/net/neoforged/neoforge/fluids/capability/templates";
import { $Vec3 } from "@package/net/minecraft/world/phys";
import { $StreamCodec_, $StreamCodec } from "@package/net/minecraft/network/codec";
export * as debug from "@package/me/desht/pneumaticcraft/api/drone/debug";
export * as area from "@package/me/desht/pneumaticcraft/api/drone/area";

declare module "@package/me/desht/pneumaticcraft/api/drone" {
    export class $IDrone {
    }
    export interface $IDrone {
        setName(arg0: $Component_): void;
        getOwner(): $Player;
        getLabel(): string;
        getOwnerUUID(): $UUID;
        getInv(): $IItemHandlerModifiable;
        getControllerPos(): $BlockPos;
        getFluidTank(): $FluidTank;
        dropItem(arg0: $ItemStack_): void;
        overload(arg0: string, ...arg1: $Object[]): void;
        getUpgrades(arg0: $PNCUpgrade): number;
        getEnergyStorage(): $IEnergyStorage;
        getFakePlayer(): $FakePlayer;
        playSound(arg0: $SoundEvent_, arg1: $SoundSource_, arg2: number, arg3: number): void;
        setEmittingRedstone(arg0: $Direction_, arg1: number): void;
        sendWireframeToClient(arg0: $BlockPos_): void;
        isBlockValidPathfindBlock(arg0: $BlockPos_): boolean;
        getTargetAI(): $GoalSelector;
        isAIOverridden(): boolean;
        addAirToDrone(arg0: number): void;
        canMoveIntoFluid(arg0: $Fluid_): boolean;
        getDronePressure(): number;
        getDroneName(): $Component;
        updateLabel(): void;
        onItemPickupEvent(arg0: $ItemEntity, arg1: number): void;
        setCarryingEntity(arg0: $Entity): void;
        storeTrackerData(arg0: $ItemStack_): void;
        getActiveWidget(): $IProgWidget;
        resetAttackCount(): void;
        setActiveProgram(arg0: $IProgWidget): void;
        getEmittingRedstone(arg0: $Direction_): number;
        isDroneStillValid(): boolean;
        getDebugger(): $IDroneDebugger;
        getDeployPos(): $BlockPos;
        onVariableChanged(arg0: string, arg1: boolean): void;
        getPathNavigator(): $IPathNavigator;
        getProgWidgets(): $List<$IProgWidget>;
        setDugBlock(arg0: $BlockPos_): void;
        setDugBlock(arg0: $BlockPos_, arg1: $Direction_): void;
        getDronePos(): $Vec3;
        getDroneLevel(): $Level;
        getCarryingEntities(): $List<$Entity>;
        getActiveWidgetIndex(): number;
        isProgramApplicable(arg0: $ProgWidgetType_<never>): boolean;
        set name(value: $Component_);
        get owner(): $Player;
        get label(): string;
        get ownerUUID(): $UUID;
        get inv(): $IItemHandlerModifiable;
        get controllerPos(): $BlockPos;
        get fluidTank(): $FluidTank;
        get energyStorage(): $IEnergyStorage;
        get fakePlayer(): $FakePlayer;
        get targetAI(): $GoalSelector;
        get AIOverridden(): boolean;
        get dronePressure(): number;
        get droneName(): $Component;
        set carryingEntity(value: $Entity);
        get activeWidget(): $IProgWidget;
        set activeProgram(value: $IProgWidget);
        get droneStillValid(): boolean;
        get debugger(): $IDroneDebugger;
        get deployPos(): $BlockPos;
        get pathNavigator(): $IPathNavigator;
        get progWidgets(): $List<$IProgWidget>;
        get dronePos(): $Vec3;
        get droneLevel(): $Level;
        get carryingEntities(): $List<$Entity>;
        get activeWidgetIndex(): number;
    }
    export interface $ProgWidgetType<P> extends RegistryMarked<RegistryTypes.PneumaticcraftProgWidgetsTag, RegistryTypes.PneumaticcraftProgWidgets> {}
    export class $SpecialVariableRetrievalEvent$ItemVariable$Drone extends $SpecialVariableRetrievalEvent$ItemVariable {
        specialVarName: string;
        drone: $IDrone;
        constructor(arg0: $IDrone, arg1: string);
    }
    export class $SpecialVariableRetrievalEvent$CoordinateVariable extends $SpecialVariableRetrievalEvent {
        getCoordinate(): $BlockPos;
        setCoordinate(arg0: $BlockPos_ | null): void;
        specialVarName: string;
    }
    export class $AmadronRetrievalEvent extends $Event {
        drone: $IDrone;
        constructor(arg0: $IDrone);
    }
    export class $ProgWidgetType<P extends $IProgWidget> {
        cast(arg0: $IProgWidget): P;
        create(): P;
        streamCodec(): $StreamCodec<$RegistryFriendlyByteBuf, $IProgWidget>;
        static createType<P extends $IProgWidget>(arg0: $Supplier_<P>, arg1: $MapCodec_<P>, arg2: $StreamCodec_<$RegistryFriendlyByteBuf, P>): $ProgWidgetType<P>;
        getTranslationKey(): string;
        codec(): $MapCodec<$IProgWidget>;
        get translationKey(): string;
    }
    /**
     * Values that may be interpreted as {@link $ProgWidgetType}.
     */
    export type $ProgWidgetType_<P> = RegistryTypes.PneumaticcraftProgWidgets;
    export class $IPathNavigator {
    }
    export interface $IPathNavigator {
        moveToXYZ(arg0: number, arg1: number, arg2: number): boolean;
        hasNoPath(): boolean;
        moveToEntity(arg0: $Entity): boolean;
        isGoingToTeleport(): boolean;
        get goingToTeleport(): boolean;
    }
    export class $SpecialVariableRetrievalEvent$ItemVariable extends $SpecialVariableRetrievalEvent {
        getItem(): $ItemStack;
        specialVarName: string;
        get item(): $ItemStack;
    }
    export class $DroneSuicideEvent extends $Event {
        drone: $IDrone;
        constructor(arg0: $IDrone);
    }
    export class $SpecialVariableRetrievalEvent extends $Event {
        specialVarName: string;
    }
    export class $DroneConstructingEvent extends $Event {
        drone: $IDrone;
        constructor(arg0: $IDrone);
    }
    export class $SpecialVariableRetrievalEvent$CoordinateVariable$Drone extends $SpecialVariableRetrievalEvent$CoordinateVariable {
        specialVarName: string;
        drone: $IDrone;
        constructor(arg0: $IDrone, arg1: string);
    }
    export class $IProgWidget {
        static create(arg0: $ProgWidgetType_<never>): $IProgWidget;
    }
    export interface $IProgWidget {
        getParameters(): $List<$ProgWidgetType<never>>;
        returnType(): $ProgWidgetType<never>;
        getParent(): $IProgWidget;
        getType(): $ProgWidgetType<never>;
        getWidth(): number;
        getHeight(): number;
        setParent(arg0: $IProgWidget): void;
        isAvailable(): boolean;
        getX(): number;
        getColor(): $DyeColor;
        setParameter(arg0: number, arg1: $IProgWidget): void;
        getY(): number;
        setY(arg0: number): void;
        setX(arg0: number): void;
        getTexture(): $ResourceLocation;
        copyWidget(): $IProgWidget;
        getTypeID(): $ResourceLocation;
        setPosition(arg0: number, arg1: number): void;
        getTooltip(arg0: $List_<$Component_>): void;
        getDifficulty(): $IProgWidget$WidgetDifficulty;
        getTranslationKey(): string;
        freeToUse(): boolean;
        getExtraStringInfo(): $List<$Component>;
        hasStepInput(): boolean;
        getWidgetAI(arg0: $IDrone, arg1: $IProgWidget): $Goal;
        canSetParameter(arg0: number): boolean;
        setOutputWidget(arg0: $IProgWidget): void;
        getWidgetTargetAI(arg0: $IDrone, arg1: $IProgWidget): $Goal;
        hasStepOutput(): boolean;
        addWarnings(arg0: $List_<$Component_>, arg1: $List_<$IProgWidget>): void;
        isDifficultyOK(arg0: $IProgWidget$WidgetDifficulty_): boolean;
        addErrors(arg0: $List_<$Component_>, arg1: $List_<$IProgWidget>): void;
        getMaxUV(): $Pair<number, number>;
        getOutputWidget(): $IProgWidget;
        getOutputWidget(arg0: $IDrone, arg1: $List_<$IProgWidget>): $IProgWidget;
        getConnectedParameters(): $IProgWidget[];
        canBeRunByComputers(arg0: $IDrone, arg1: $IProgWidget): boolean;
        get parameters(): $List<$ProgWidgetType<never>>;
        get type(): $ProgWidgetType<never>;
        get width(): number;
        get height(): number;
        get available(): boolean;
        get color(): $DyeColor;
        get texture(): $ResourceLocation;
        get typeID(): $ResourceLocation;
        get difficulty(): $IProgWidget$WidgetDifficulty;
        get translationKey(): string;
        get extraStringInfo(): $List<$Component>;
        get maxUV(): $Pair<number, number>;
        get connectedParameters(): $IProgWidget[];
    }
    export class $IProgWidget$WidgetDifficulty extends $Enum<$IProgWidget$WidgetDifficulty> {
        static values(): $IProgWidget$WidgetDifficulty[];
        static valueOf(arg0: string): $IProgWidget$WidgetDifficulty;
        getTranslationKey(): string;
        isNotMoreDifficult(arg0: $IProgWidget$WidgetDifficulty_): boolean;
        getTooltipTranslationKey(): string;
        static EASY: $IProgWidget$WidgetDifficulty;
        static MEDIUM: $IProgWidget$WidgetDifficulty;
        static ADVANCED: $IProgWidget$WidgetDifficulty;
        get translationKey(): string;
        get tooltipTranslationKey(): string;
    }
    /**
     * Values that may be interpreted as {@link $IProgWidget$WidgetDifficulty}.
     */
    export type $IProgWidget$WidgetDifficulty_ = "easy" | "medium" | "advanced";
}
