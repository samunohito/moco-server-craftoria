import { $HolderLookup$Provider, $BlockPos_, $Direction } from "@package/net/minecraft/core";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $INBTProvider } from "@package/org/cyclops/cyclopscore/persist/nbt";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $IDirtyMarkListener } from "@package/org/cyclops/cyclopscore/persist";
import { $BlockEntityType_, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/org/cyclops/cyclopscore/blockentity" {
    export class $IBlockEntityDelayedTickable {
    }
    export interface $IBlockEntityDelayedTickable {
        reduceUpdateBackoff(): void;
        sendImmediateUpdate(): void;
        getUpdateBackoffTicks(): number;
        sendUpdate(): void;
        unsetSendUpdate(): void;
        setUpdateBackoff(arg0: number): void;
        getUpdateBackoff(): number;
        shouldSendUpdate(): boolean;
        get updateBackoffTicks(): number;
    }
    /**
     * @deprecated
     */
    export class $CyclopsBlockEntity extends $CyclopsBlockEntityCommon {
        onUpdateReceived(): void;
        static ATTACHMENTS_NBT_KEY: string;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
    }
    export class $CyclopsBlockEntityCommon extends $BlockEntity implements $INBTProvider, $IDirtyMarkListener, $IBlockEntityDelayedTickable {
        read(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        writeToItemStack(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): $CompoundTag;
        readGeneratedFieldsFromNBT(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        getUpdateBackoffTicks(): number;
        writeGeneratedFieldsToNBT(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        saveAdditional(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        loadAdditional(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        getRotation(): $Direction;
        onDirty(): void;
        sendUpdate(): void;
        canInteractWith(arg0: $Player): boolean;
        unsetSendUpdate(): void;
        setUpdateBackoff(arg0: number): void;
        getUpdateBackoff(): number;
        shouldSendUpdate(): boolean;
        reduceUpdateBackoff(): void;
        sendImmediateUpdate(): void;
        static ATTACHMENTS_NBT_KEY: string;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
        get updateBackoffTicks(): number;
        get rotation(): $Direction;
    }
}
