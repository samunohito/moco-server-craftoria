import { $Level_, $LevelReader } from "@package/net/minecraft/world/level";
import { $ItemStack } from "@package/net/minecraft/world/item";
import { $SmartBlockEntity } from "@package/com/simibubi/create/foundation/blockEntity";
import { $SequencedGearshiftBlockEntity$SequenceContext } from "@package/com/simibubi/create/content/kinetics/transmission/sequencer";
import { $Component_ } from "@package/net/minecraft/network/chat";
import { $LangBuilder } from "@package/net/createmod/catnip/lang";
import { $List, $List_ } from "@package/java/util";
import { $IFluidHandler } from "@package/net/neoforged/neoforge/fluids/capability";
import { $ChatFormatting } from "@package/net/minecraft";
import { $BlockPos, $BlockPos_, $Direction_, $Direction$Axis, $Direction$Axis_ } from "@package/net/minecraft/core";
import { $IWrenchable } from "@package/com/simibubi/create/content/equipment/wrench";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $IHaveGoggleInformation, $IHaveHoveringInformation } from "@package/com/simibubi/create/api/equipment/goggles";
import { $KineticNetwork } from "@package/com/simibubi/create/content/kinetics";
import { $Enum } from "@package/java/lang";
import { $BlockEntityType_ } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/com/simibubi/create/content/kinetics/base" {
    export class $IRotate {
    }
    export interface $IRotate extends $IWrenchable {
        getRotationAxis(arg0: $BlockState_): $Direction$Axis;
        showCapacityWithAnnotation(): boolean;
        getMinimumRequiredSpeedLevel(): $IRotate$SpeedLevel;
        hideStressImpact(): boolean;
        hasShaftTowards(arg0: $LevelReader, arg1: $BlockPos_, arg2: $BlockState_, arg3: $Direction_): boolean;
        get minimumRequiredSpeedLevel(): $IRotate$SpeedLevel;
    }
    export class $IRotate$SpeedLevel extends $Enum<$IRotate$SpeedLevel> {
        static values(): $IRotate$SpeedLevel[];
        static valueOf(arg0: string): $IRotate$SpeedLevel;
        static of(arg0: number): $IRotate$SpeedLevel;
        getTextColor(): $ChatFormatting;
        static getFormattedSpeedText(arg0: number, arg1: boolean): $LangBuilder;
        getColor(): number;
        getSpeedValue(): number;
        getParticleSpeed(): number;
        static MEDIUM: $IRotate$SpeedLevel;
        static SLOW: $IRotate$SpeedLevel;
        static NONE: $IRotate$SpeedLevel;
        static FAST: $IRotate$SpeedLevel;
        get textColor(): $ChatFormatting;
        get color(): number;
        get speedValue(): number;
        get particleSpeed(): number;
    }
    /**
     * Values that may be interpreted as {@link $IRotate$SpeedLevel}.
     */
    export type $IRotate$SpeedLevel_ = "none" | "slow" | "medium" | "fast";
    export class $KineticBlockEntity extends $SmartBlockEntity implements $IHaveGoggleInformation, $IHaveHoveringInformation {
        isSpeedRequirementFulfilled(): boolean;
        getGeneratedSpeed(): number;
        isOverStressed(): boolean;
        addToGoggleTooltip(arg0: $List_<$Component_>, arg1: boolean): boolean;
        detachKinetics(): void;
        attachKinetics(): void;
        getOrCreateNetwork(): $KineticNetwork;
        removeSource(): void;
        setSource(arg0: $BlockPos_): void;
        static convertToDirection(arg0: number, arg1: $Direction_): number;
        onSpeedChanged(arg0: number): void;
        addToTooltip(arg0: $List_<$Component_>, arg1: boolean): boolean;
        clearKineticInformation(): void;
        calculateAddedStressCapacity(): number;
        warnOfMovement(): void;
        setSpeed(arg0: number): void;
        getSpeed(): number;
        getTheoreticalSpeed(): number;
        calculateStressApplied(): number;
        isSource(): boolean;
        setNetwork(arg0: number): void;
        hasNetwork(): boolean;
        getRotationAngleOffset(arg0: $Direction$Axis_): number;
        addPropagationLocations(arg0: $IRotate, arg1: $BlockState_, arg2: $List_<$BlockPos_>): $List<$BlockPos>;
        propagateRotationTo(arg0: $KineticBlockEntity, arg1: $BlockState_, arg2: $BlockState_, arg3: $BlockPos_, arg4: boolean, arg5: boolean): number;
        hasSource(): boolean;
        static switchToBlockState(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_): void;
        tickAudio(): void;
        needsSpeedUpdate(): boolean;
        getFlickerScore(): number;
        isCustomConnection(arg0: $KineticBlockEntity, arg1: $BlockState_, arg2: $BlockState_): boolean;
        static convertToLinear(arg0: number): number;
        static convertToAngular(arg0: number): number;
        updateFromNetwork(arg0: number, arg1: number, arg2: number): void;
        containedFluidTooltip(arg0: $List_<$Component_>, arg1: boolean, arg2: $IFluidHandler): boolean;
        getIcon(arg0: boolean): $ItemStack;
        sequenceContext: $SequencedGearshiftBlockEntity$SequenceContext;
        networkDirty: boolean;
        updateSpeed: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        source: $BlockPos;
        preventSpeedUpdate: number;
        network: number;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
        get speedRequirementFulfilled(): boolean;
        get generatedSpeed(): number;
        get overStressed(): boolean;
        get orCreateNetwork(): $KineticNetwork;
        get theoreticalSpeed(): number;
        get flickerScore(): number;
    }
}
