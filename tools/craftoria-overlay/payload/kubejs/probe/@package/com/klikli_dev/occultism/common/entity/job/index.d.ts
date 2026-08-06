import { $BrainActivityGroup } from "@package/net/tslat/smartbrainlib/api/core";
import { $ExtendedSensor } from "@package/net/tslat/smartbrainlib/api/core/sensor";
import { $ItemStack_ } from "@package/net/minecraft/world/item";
import { $Ingredient } from "@package/net/minecraft/world/item/crafting";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $EntityDimensions_, $EntityDimensions, $Entity, $Pose_ } from "@package/net/minecraft/world/entity";
import { $ItemEntity } from "@package/net/minecraft/world/entity/item";
import { $List } from "@package/java/util";
import { $SpiritEntity } from "@package/com/klikli_dev/occultism/common/entity/spirit";
import { $Function_ } from "@package/java/util/function";
import { $ItemProcessingJobEvent } from "@package/com/klikli_dev/occultism/common/entity/job/event";
import { $INBTSerializable } from "@package/net/neoforged/neoforge/common/util";
import { $HolderLookup$Provider } from "@package/net/minecraft/core";
import { $Brain } from "@package/net/minecraft/world/entity/ai";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $SpiritJobClient } from "@package/com/klikli_dev/occultism/client/entities";
export * as event from "@package/com/klikli_dev/occultism/common/entity/job/event";

declare module "@package/com/klikli_dev/occultism/common/entity/job" {
    export class $SpiritJob implements $INBTSerializable<$CompoundTag> {
        update(): void;
        static from(arg0: $SpiritEntity, arg1: $CompoundTag_): $SpiritJob;
        init(): void;
        cleanup(): void;
        getDimensions(arg0: $Pose_, arg1: $EntityDimensions_): $EntityDimensions;
        getSensors(): $List<$ExtendedSensor<$SpiritEntity>>;
        deserializeNBT(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): void;
        handleAdditionalBrainSetup(arg0: $Brain<$SpiritEntity>): void;
        getItemsToPickUp(): $List<$Ingredient>;
        canPickupItem(arg0: $ItemEntity): boolean;
        writeJobToNBT(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): $CompoundTag;
        getCoreTasks(): $BrainActivityGroup<$SpiritEntity>;
        onChangeWorkArea(): void;
        getFactoryID(): $ResourceLocation;
        setFactoryId(arg0: $ResourceLocation_): void;
        getIdleTasks(): $BrainActivityGroup<$SpiritEntity>;
        readJobFromNBT(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        factoryId: $ResourceLocation;
        entity: $SpiritEntity;
        constructor(arg0: $SpiritEntity);
        get sensors(): $List<$ExtendedSensor<$SpiritEntity>>;
        get itemsToPickUp(): $List<$Ingredient>;
        get coreTasks(): $BrainActivityGroup<$SpiritEntity>;
        get factoryID(): $ResourceLocation;
        get idleTasks(): $BrainActivityGroup<$SpiritEntity>;
    }
    export class $TraderJob$TraderJobEvent extends $ItemProcessingJobEvent {
        constructor(arg0: $Entity, arg1: $ItemStack_, arg2: $ItemStack_);
    }
    export class $SmelterJob$SmelterJobEvent extends $ItemProcessingJobEvent {
        constructor(arg0: $Entity, arg1: $ItemStack_, arg2: $ItemStack_);
    }
    export interface $SpiritJobFactory extends RegistryMarked<RegistryTypes.OccultismSpiritJobFactoriesTag, RegistryTypes.OccultismSpiritJobFactories> {}
    export class $CrusherJob$CrusherJobEvent extends $ItemProcessingJobEvent {
        constructor(arg0: $Entity, arg1: $ItemStack_, arg2: $ItemStack_);
    }
    export class $SpiritJobFactory {
        create(arg0: $SpiritEntity): $SpiritJob;
        client(): $SpiritJobClient;
        constructor(arg0: $Function_<$SpiritEntity, $SpiritJob>, arg1: $SpiritJobClient);
    }
    /**
     * Values that may be interpreted as {@link $SpiritJobFactory}.
     */
    export type $SpiritJobFactory_ = RegistryTypes.OccultismSpiritJobFactories;
    export class $CrystallizerJob$CrystallizerJobEvent extends $ItemProcessingJobEvent {
        constructor(arg0: $Entity, arg1: $ItemStack_, arg2: $ItemStack_);
    }
}
