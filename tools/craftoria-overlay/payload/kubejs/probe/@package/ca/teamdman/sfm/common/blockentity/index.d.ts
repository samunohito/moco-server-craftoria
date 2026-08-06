import { $Level_ } from "@package/net/minecraft/world/level";
import { $Program } from "@package/ca/teamdman/sfml/ast";
import { $SFMBlockCapabilityResult } from "@package/ca/teamdman/sfm/common/capability";
import { $ItemStack } from "@package/net/minecraft/world/item";
import { $Component } from "@package/net/minecraft/network/chat";
import { $IItemHandler } from "@package/net/neoforged/neoforge/items";
import { $IProgramHooks } from "@package/ca/teamdman/sfm/common/program";
import { $Set } from "@package/java/util";
import { $Duration } from "@package/java/time";
import { $LockCode } from "@package/net/minecraft/world";
import { $ChatFormatting } from "@package/net/minecraft";
import { $BlockPos_ } from "@package/net/minecraft/core";
import { $LocalizationEntry } from "@package/ca/teamdman/sfm/common/localization";
import { $ResourceType_ } from "@package/ca/teamdman/sfm/common/resourcetype";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $TranslatableLogger } from "@package/ca/teamdman/sfm/common/logging";
import { $Level } from "@package/org/apache/logging/log4j";
import { $Enum } from "@package/java/lang";
import { $BufferBlock$ContainedResource, $BufferBlockTier, $BufferBlockTier_ } from "@package/ca/teamdman/sfm/common/block";
import { $BaseContainerBlockEntity, $BlockEntityType_ } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/ca/teamdman/sfm/common/blockentity" {
    export class $ManagerBlockEntity$State extends $Enum<$ManagerBlockEntity$State> {
        static values(): $ManagerBlockEntity$State[];
        static valueOf(arg0: string): $ManagerBlockEntity$State;
        LOC: $LocalizationEntry;
        static NO_DISK: $ManagerBlockEntity$State;
        static RUNNING: $ManagerBlockEntity$State;
        COLOR: $ChatFormatting;
        static INVALID_PROGRAM: $ManagerBlockEntity$State;
        static NO_PROGRAM: $ManagerBlockEntity$State;
    }
    /**
     * Values that may be interpreted as {@link $ManagerBlockEntity$State}.
     */
    export type $ManagerBlockEntity$State_ = "no_program" | "no_disk" | "running" | "invalid_program";
    export class $ManagerBlockEntity extends $BaseContainerBlockEntity {
        reset(): void;
        getState(): $ManagerBlockEntity$State;
        setLogLevel(arg0: $Level): void;
        addProgramHooks(arg0: $IProgramHooks): void;
        getTickTimes(): $Duration[];
        sendUpdatePacket(): void;
        trackRedstonePulseUnprocessed(): void;
        getProgram(): $Program;
        setProgram(arg0: string): void;
        getDisk(): $ItemStack;
        getTick(): number;
        getReferencedLabels(): $Set<string>;
        shouldRebuildWarnings(): boolean;
        clearRedstonePulseQueue(): void;
        ensureRebuildWarnings(): void;
        static serverTick(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: $ManagerBlockEntity): void;
        getProgramString(): string;
        rebuildProgramAndUpdateDisk(): void;
        getProgramStringOrEmptyIfNull(): string;
        getUnprocessedRedstonePulseCount(): number;
        decrementRebuildWarningsCooldown(): void;
        incrementRebuildWarningsCooldown(): void;
        invWrapper: $IItemHandler;
        static MANAGER_GUI_STATE_NO_PROGRAM: $LocalizationEntry;
        logger: $TranslatableLogger;
        static ATTACHMENTS_NBT_KEY: string;
        static TICK_TIME_HISTORY_SIZE: number;
        static PROGRAM_TICK_TIME_MS: $LocalizationEntry;
        static MANAGER_GUI_STATE_RUNNING: $LocalizationEntry;
        static MANAGER_CONTAINER: $LocalizationEntry;
        static LOG_LEVEL_UPDATED: $LocalizationEntry;
        name: $Component;
        static MANAGER_GUI_STATE_INVALID_PROGRAM: $LocalizationEntry;
        lockKey: $LockCode;
        static MANAGER_GUI_STATE_NO_DISK: $LocalizationEntry;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
        get state(): $ManagerBlockEntity$State;
        set logLevel(value: $Level);
        get tickTimes(): $Duration[];
        get disk(): $ItemStack;
        get tick(): number;
        get referencedLabels(): $Set<string>;
        get programString(): string;
        get programStringOrEmptyIfNull(): string;
        get unprocessedRedstonePulseCount(): number;
    }
    export class $BufferBlockEntityContents {
        isEmpty(): boolean;
        getCapability<CAP>(arg0: $ResourceType_<never, never, CAP>): $SFMBlockCapabilityResult<CAP>;
        allowInsertion(arg0: $ResourceType_<never, never, never>): boolean;
        getBlockIconType(): $BufferBlock$ContainedResource;
        lastUsedResource: $BufferBlock$ContainedResource;
        tier: $BufferBlockTier;
        constructor(arg0: $BufferBlockTier_);
        get empty(): boolean;
        get blockIconType(): $BufferBlock$ContainedResource;
    }
}
