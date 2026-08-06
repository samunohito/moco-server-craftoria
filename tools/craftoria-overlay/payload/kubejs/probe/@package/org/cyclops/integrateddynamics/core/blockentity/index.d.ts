import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $PartHelpers$IPartStateHolderCallback, $PartHelpers$PartStateHolder } from "@package/org/cyclops/integrateddynamics/core/helper";
import { $PartContainerTileMultipartTicking } from "@package/org/cyclops/integrateddynamics/capability/partcontainer";
import { $CableTileMultipartTicking } from "@package/org/cyclops/integrateddynamics/capability/cable";
import { $PartCapability } from "@package/org/cyclops/integrateddynamics/api/part";
import { $CyclopsBlockEntity } from "@package/org/cyclops/cyclopscore/blockentity";
import { $ModelData } from "@package/net/neoforged/neoforge/client/model/data";
import { $BlockPos_, $Direction_ } from "@package/net/minecraft/core";
import { $INetworkCarrier, $INetwork } from "@package/org/cyclops/integrateddynamics/api/network";
import { $EnumFacingMap } from "@package/org/cyclops/cyclopscore/datastructure";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $BlockEntityType_ } from "@package/net/minecraft/world/level/block/entity";
import { $RegisterCapabilitiesEvent, $BlockCapability } from "@package/net/neoforged/neoforge/capabilities";
import { $ICableFakeable } from "@package/org/cyclops/integrateddynamics/api/block/cable";

declare module "@package/org/cyclops/integrateddynamics/core/blockentity" {
    export class $BlockEntityMultipartTicking extends $CyclopsBlockEntity implements $PartHelpers$IPartStateHolderCallback {
        getNetwork(): $INetwork;
        getCable(): $CableTileMultipartTicking;
        onSet(arg0: $PartHelpers$PartStateHolder<never, never>): void;
        getConnectionState(): $ModelData;
        getConnected(): $EnumFacingMap<boolean>;
        getNetworkCarrier(): $INetworkCarrier;
        static registerMultipartTickingCapabilities(arg0: $RegisterCapabilitiesEvent, arg1: $BlockEntityType_<$BlockEntityMultipartTicking>): void;
        getScheduledPulseRemaining(): $EnumFacingMap<number>;
        getPartContainer(): $PartContainerTileMultipartTicking;
        getCableFakeable(): $ICableFakeable;
        static registerPartCapabilityAsBlockCapability<T>(arg0: $RegisterCapabilitiesEvent, arg1: $BlockEntityType_<$BlockEntityMultipartTicking>, arg2: $BlockCapability<T, $Direction_>, arg3: $PartCapability<T>): void;
        setForceDisconnected(arg0: $EnumFacingMap<boolean>): void;
        getLastRedstonePulses(): $EnumFacingMap<number>;
        setForceLightCheckAtClient(arg0: boolean): void;
        updateScheduledPulses(): void;
        getForceDisconnected(): $EnumFacingMap<boolean>;
        updateLightInfo(): void;
        setFacadeBlockTag(arg0: $CompoundTag_): void;
        getLightLevels(): $EnumFacingMap<number>;
        getRedstoneStrong(): $EnumFacingMap<boolean>;
        getRedstoneInputs(): $EnumFacingMap<boolean>;
        getRedstoneLevels(): $EnumFacingMap<number>;
        updateRedstoneInfo(arg0: $Direction_, arg1: boolean): void;
        getFacadeBlockTag(): $CompoundTag;
        static ATTACHMENTS_NBT_KEY: string;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get network(): $INetwork;
        get cable(): $CableTileMultipartTicking;
        get connectionState(): $ModelData;
        get connected(): $EnumFacingMap<boolean>;
        get networkCarrier(): $INetworkCarrier;
        get scheduledPulseRemaining(): $EnumFacingMap<number>;
        get partContainer(): $PartContainerTileMultipartTicking;
        get cableFakeable(): $ICableFakeable;
        get lastRedstonePulses(): $EnumFacingMap<number>;
        set forceLightCheckAtClient(value: boolean);
        get lightLevels(): $EnumFacingMap<number>;
        get redstoneStrong(): $EnumFacingMap<boolean>;
        get redstoneInputs(): $EnumFacingMap<boolean>;
        get redstoneLevels(): $EnumFacingMap<number>;
    }
}
