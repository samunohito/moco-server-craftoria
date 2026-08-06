import { $TransmissionType, $DynamicBufferedNetwork, $ConnectionType_, $TransmissionType_, $CompatibleTransmitterValidator, $ConnectionType, $DynamicNetwork } from "@package/mekanism/common/lib/transmitter";
import { $IChemicalTracker } from "@package/mekanism/common/capabilities/chemical";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $BasicEnergyContainer } from "@package/mekanism/common/capabilities/energy";
import { $FluidStack_, $FluidStack } from "@package/net/neoforged/neoforge/fluids";
import { $ITileWrapper } from "@package/mekanism/common/tile/interfaces";
import { $List, $UUID_, $Collection_, $Set } from "@package/java/util";
import { $IFluidHandler$FluidAction_, $IFluidHandler } from "@package/net/neoforged/neoforge/fluids/capability";
import { $InteractionResult } from "@package/net/minecraft/world";
import { $IChemicalHandler, $IChemicalTank, $ChemicalStack } from "@package/mekanism/api/chemical";
import { $HolderLookup$Provider, $BlockPos, $Holder_, $GlobalPos, $Direction_, $Direction } from "@package/net/minecraft/core";
import { $BasicFluidTank } from "@package/mekanism/common/capabilities/fluid";
import { $AbstractAcceptorCache, $AcceptorCache } from "@package/mekanism/common/lib/transmitter/acceptor";
import { $Level } from "@package/net/minecraft/world/level";
import { $IExtendedFluidTank, $IMekanismFluidHandler } from "@package/mekanism/api/fluid";
import { $TransmitterUpgradeData, $PressurizedTubeUpgradeData, $MechanicalPipeUpgradeData, $UniversalCableUpgradeData } from "@package/mekanism/common/upgrade/transmitter";
import { $FluidNetwork, $EnergyNetwork, $ChemicalNetwork } from "@package/mekanism/common/content/network";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $Action_, $Chunk3D } from "@package/mekanism/api";
import { $IAlloyTier_, $ITier } from "@package/mekanism/api/tier";
import { $TileEntityTransmitter } from "@package/mekanism/common/tile/transmitter";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $IEnergyContainer, $IStrictEnergyHandler, $IMekanismStrictEnergyHandler } from "@package/mekanism/api/energy";
import { $TubeTier, $PipeTier, $CableTier } from "@package/mekanism/common/tier";

declare module "@package/mekanism/common/content/network/transmitter" {
    export class $PressurizedTube extends $BufferedTransmitter<$IChemicalHandler, $ChemicalNetwork, $ChemicalStack, $PressurizedTube> implements $IChemicalTracker, $IUpgradeableTransmitter<$PressurizedTubeUpgradeData> {
        getChemicalTanks(side: $Direction_): $List<$IChemicalTank>;
        pullFromAcceptors(): void;
        releaseShare(): $ChemicalStack;
        getChemicalTank(): $IChemicalTank;
        parseUpgradeData(data: $PressurizedTubeUpgradeData): void;
        getAcceptorCache(): $AcceptorCache<$IChemicalHandler>;
        dataTypeMatches(data: $TransmitterUpgradeData): boolean;
        createNetworkByMerging(toMerge: $Collection_<$ChemicalNetwork>): $ChemicalNetwork;
        onContentsChanged(): void;
        canUpgrade(alloyTier: $IAlloyTier_): boolean;
        getUpgradeData(): $PressurizedTubeUpgradeData;
        getTier(): $ITier;
        chemicalTank: $IChemicalTank;
        tier: $TubeTier;
        saveShare: $ChemicalStack;
        currentTransmitterConnections: number;
        constructor(blockProvider: $Holder_<$Block>, tile: $TileEntityTransmitter);
        get acceptorCache(): $AcceptorCache<$IChemicalHandler>;
        get upgradeData(): $PressurizedTubeUpgradeData;
    }
    export class $BufferedTransmitter<ACCEPTOR, NETWORK extends $DynamicBufferedNetwork<ACCEPTOR, NETWORK, BUFFER, TRANSMITTER>, BUFFER, TRANSMITTER extends $BufferedTransmitter<ACCEPTOR, NETWORK, BUFFER, TRANSMITTER>> extends $Transmitter<ACCEPTOR, NETWORK, TRANSMITTER> {
        getCapacity(): number;
        getShare(): BUFFER;
        releaseShare(): BUFFER;
        noBufferOrFallback(): boolean;
        getBufferWithFallback(): BUFFER;
        currentTransmitterConnections: number;
        constructor(tile: $TileEntityTransmitter, ...transmissionTypes: $TransmissionType_[]);
        get capacity(): number;
        get share(): BUFFER;
        get bufferWithFallback(): BUFFER;
    }
    export class $MechanicalPipe extends $BufferedTransmitter<$IFluidHandler, $FluidNetwork, $FluidStack, $MechanicalPipe> implements $IMekanismFluidHandler, $IUpgradeableTransmitter<$MechanicalPipeUpgradeData> {
        takeFluid(fluid: $FluidStack_, action: $Action_): $FluidStack;
        getShare(): $FluidStack;
        getUpgradeData(): $MechanicalPipeUpgradeData;
        getTier(): $PipeTier;
        pullFromAcceptors(): void;
        releaseShare(): $FluidStack;
        getFluidTanks(side: $Direction_): $List<$IExtendedFluidTank>;
        parseUpgradeData(data: $MechanicalPipeUpgradeData): void;
        dataTypeMatches(data: $TransmitterUpgradeData): boolean;
        createNetworkByMerging(networks: $Collection_<$FluidNetwork>): $FluidNetwork;
        getBufferWithFallback(): $FluidStack;
        onContentsChanged(): void;
        getTanks(arg0: $Direction_): number;
        getFluidInTank(arg0: number, arg1: $Direction_): $FluidStack;
        getFluidTank(arg0: number, arg1: $Direction_): $IExtendedFluidTank;
        getTankCapacity(arg0: number, arg1: $Direction_): number;
        isFluidValid(arg0: number, arg1: $FluidStack_, arg2: $Direction_): boolean;
        canHandleFluid(): boolean;
        extractFluid(arg0: number, arg1: $Direction_, arg2: $Action_): $FluidStack;
        extractFluid(arg0: $FluidStack_, arg1: $Direction_, arg2: $Action_): $FluidStack;
        extractFluid(arg0: number, arg1: number, arg2: $Direction_, arg3: $Action_): $FluidStack;
        setFluidInTank(arg0: number, arg1: $FluidStack_, arg2: $Direction_): void;
        insertFluid(arg0: number, arg1: $FluidStack_, arg2: $Direction_, arg3: $Action_): $FluidStack;
        insertFluid(arg0: $FluidStack_, arg1: $Direction_, arg2: $Action_): $FluidStack;
        canUpgrade(alloyTier: $IAlloyTier_): boolean;
        getTanks(): number;
        getFluidInTank(arg0: number): $FluidStack;
        getTankCapacity(arg0: number): number;
        isFluidValid(arg0: number, arg1: $FluidStack_): boolean;
        getFluidSideFor(): $Direction;
        extractFluid(arg0: number, arg1: number, arg2: $Action_): $FluidStack;
        setFluidInTank(arg0: number, arg1: $FluidStack_): void;
        insertFluid(arg0: number, arg1: $FluidStack_, arg2: $Action_): $FluidStack;
        /**
         * @deprecated
         */
        fill(arg0: $FluidStack_, arg1: $IFluidHandler$FluidAction_): number;
        /**
         * @deprecated
         */
        drain(arg0: number, arg1: $IFluidHandler$FluidAction_): $FluidStack;
        /**
         * @deprecated
         */
        drain(arg0: $FluidStack_, arg1: $IFluidHandler$FluidAction_): $FluidStack;
        extractFluid(arg0: $FluidStack_, arg1: $Action_): $FluidStack;
        extractFluid(arg0: number, arg1: $Action_): $FluidStack;
        insertFluid(arg0: $FluidStack_, arg1: $Action_): $FluidStack;
        tier: $PipeTier;
        saveShare: $FluidStack;
        buffer: $BasicFluidTank;
        currentTransmitterConnections: number;
        constructor(blockProvider: $Holder_<$Block>, tile: $TileEntityTransmitter);
        get share(): $FluidStack;
        get upgradeData(): $MechanicalPipeUpgradeData;
        get bufferWithFallback(): $FluidStack;
        get fluidSideFor(): $Direction;
    }
    export class $Transmitter<ACCEPTOR, NETWORK extends $DynamicNetwork<ACCEPTOR, NETWORK, TRANSMITTER>, TRANSMITTER extends $Transmitter<ACCEPTOR, NETWORK, TRANSMITTER>> implements $ITileWrapper {
        remove(): void;
        write(provider: $HolderLookup$Provider, nbtTags: $CompoundTag_): $CompoundTag;
        read(provider: $HolderLookup$Provider, nbtTags: $CompoundTag_): void;
        isValid(): boolean;
        isRemote(): boolean;
        getLevel(): $Level;
        canConnect(side: $Direction_): boolean;
        isOrphan(): boolean;
        takeShare(): void;
        setOrphan(nowOrphaned: boolean): void;
        getWorldPositionLong(): number;
        getReducedUpdateTag(provider: $HolderLookup$Provider, updateTag: $CompoundTag_): $CompoundTag;
        isRedstoneActivated(): boolean;
        getConnectionType(side: $Direction_): $ConnectionType;
        handleUpdateTag(tag: $CompoundTag_, provider: $HolderLookup$Provider): boolean;
        isUpgrading(): boolean;
        getBlockPos(): $BlockPos;
        onRightClick(player: $Player, side: $Direction_): $InteractionResult;
        requestsUpdate(): void;
        handlesRedstone(): boolean;
        canConnectMutual(side: $Direction_, cachedTransmitter: TRANSMITTER): boolean;
        canConnectMutual(side: $Direction_, cachedTile: $BlockEntity): boolean;
        markDirtyAcceptor(side: $Direction_): void;
        isValidTransmitter(transmitter: $TileEntityTransmitter, side: $Direction_): boolean;
        isConnectionType(side: $Direction_, typeToCheck: $ConnectionType_): boolean;
        setConnectionTypeRaw(side: $Direction_, type: $ConnectionType_): void;
        getTransmitterNetwork(): NETWORK;
        hasTransmitterNetwork(): boolean;
        getConnectionTypeRaw(side: $Direction_): $ConnectionType;
        validateAndTakeShare(): void;
        getAllCurrentConnections(): number;
        onNeighborBlockChange(side: $Direction_): void;
        static connectionMapContainsSide(connections: number, side: $Direction_): boolean;
        setTransmitterNetwork(network: NETWORK, requestNow: boolean): boolean;
        setTransmitterNetwork(network: NETWORK): void;
        getTileGlobalPos(): $GlobalPos;
        getTileChunk(): $Chunk3D;
        getSupportedTransmissionTypes(): $Set<$TransmissionType>;
        onConfigure(player: $Player, side: $Direction_): $InteractionResult;
        notifyTileChange(): void;
        getAcceptorCache(): $AbstractAcceptorCache<ACCEPTOR, never>;
        refreshConnections(): void;
        refreshConnections(side: $Direction_): void;
        onWorldSeparate(stillPresent: boolean): void;
        onModeChange(side: $Direction_): void;
        getTransmitterTile(): $TileEntityTransmitter;
        startUpgrading(): void;
        getAcceptor(side: $Direction_): ACCEPTOR;
        getPossibleTransmitterConnections(): number;
        getPossibleAcceptorConnections(): number;
        setConnectionTypesRaw(connectionTypes: $ConnectionType_[]): void;
        getNewOrphanValidator(): $CompatibleTransmitterValidator<ACCEPTOR, NETWORK, TRANSMITTER>;
        canConnectToAcceptor(side: $Direction_): boolean;
        createNetworkByMerging(toMerge: $Collection_<NETWORK>): NETWORK;
        isValidTransmitterBasic(transmitter: $TileEntityTransmitter, side: $Direction_): boolean;
        supportsTransmissionType(transmitter: $Transmitter<never, never, never>): boolean;
        supportsTransmissionType(transmitter: $TileEntityTransmitter): boolean;
        createEmptyNetworkWithID(networkID: $UUID_): NETWORK;
        refreshAcceptorConnections(side: $Direction_): void;
        getConnectionTypesRaw(): $ConnectionType[];
        currentTransmitterConnections: number;
        constructor(transmitterTile: $TileEntityTransmitter, ...transmissionTypes: $TransmissionType_[]);
        get valid(): boolean;
        get remote(): boolean;
        get level(): $Level;
        get worldPositionLong(): number;
        get redstoneActivated(): boolean;
        get upgrading(): boolean;
        get blockPos(): $BlockPos;
        get allCurrentConnections(): number;
        get tileGlobalPos(): $GlobalPos;
        get tileChunk(): $Chunk3D;
        get supportedTransmissionTypes(): $Set<$TransmissionType>;
        get acceptorCache(): $AbstractAcceptorCache<ACCEPTOR, never>;
        get transmitterTile(): $TileEntityTransmitter;
        get possibleTransmitterConnections(): number;
        get possibleAcceptorConnections(): number;
        get newOrphanValidator(): $CompatibleTransmitterValidator<ACCEPTOR, NETWORK, TRANSMITTER>;
    }
    export class $IUpgradeableTransmitter<DATA extends $TransmitterUpgradeData> {
    }
    export interface $IUpgradeableTransmitter<DATA extends $TransmitterUpgradeData> {
        getUpgradeData(): DATA;
        getTier(): $ITier;
        canUpgrade(alloyTier: $IAlloyTier_): boolean;
        parseUpgradeData(data: DATA): void;
        dataTypeMatches(data: $TransmitterUpgradeData): boolean;
        get upgradeData(): DATA;
        get tier(): $ITier;
    }
    export class $UniversalCable extends $BufferedTransmitter<$IStrictEnergyHandler, $EnergyNetwork, number, $UniversalCable> implements $IMekanismStrictEnergyHandler, $IUpgradeableTransmitter<$UniversalCableUpgradeData> {
        getEnergyContainers(side: $Direction_): $List<$IEnergyContainer>;
        pullFromAcceptors(): void;
        parseUpgradeData(data: $UniversalCableUpgradeData): void;
        dataTypeMatches(data: $TransmitterUpgradeData): boolean;
        createNetworkByMerging(networks: $Collection_<$EnergyNetwork>): $EnergyNetwork;
        getBufferWithFallback(): number;
        onContentsChanged(): void;
        extractEnergy(arg0: number, arg1: number, arg2: $Direction_, arg3: $Action_): number;
        extractEnergy(arg0: number, arg1: $Direction_, arg2: $Action_): number;
        getEnergyContainerCount(arg0: $Direction_): number;
        setEnergy(arg0: number, arg1: number, arg2: $Direction_): void;
        getEnergy(arg0: number, arg1: $Direction_): number;
        getMaxEnergy(arg0: number, arg1: $Direction_): number;
        getEnergyContainer(arg0: number, arg1: $Direction_): $IEnergyContainer;
        getNeededEnergy(arg0: number, arg1: $Direction_): number;
        insertEnergy(arg0: number, arg1: number, arg2: $Direction_, arg3: $Action_): number;
        insertEnergy(arg0: number, arg1: $Direction_, arg2: $Action_): number;
        canHandleEnergy(): boolean;
        canUpgrade(alloyTier: $IAlloyTier_): boolean;
        extractEnergy(arg0: number, arg1: number, arg2: $Action_): number;
        getEnergyContainerCount(): number;
        setEnergy(arg0: number, arg1: number): void;
        getEnergy(arg0: number): number;
        getMaxEnergy(arg0: number): number;
        getNeededEnergy(arg0: number): number;
        insertEnergy(arg0: number, arg1: number, arg2: $Action_): number;
        getEnergySideFor(): $Direction;
        extractEnergy(arg0: number, arg1: $Action_): number;
        insertEnergy(arg0: number, arg1: $Action_): number;
        getUpgradeData(): $UniversalCableUpgradeData;
        getTier(): $ITier;
        tier: $CableTier;
        lastWrite: number;
        buffer: $BasicEnergyContainer;
        currentTransmitterConnections: number;
        constructor(blockProvider: $Holder_<$Block>, tile: $TileEntityTransmitter);
        get bufferWithFallback(): number;
        get energySideFor(): $Direction;
        get upgradeData(): $UniversalCableUpgradeData;
    }
}
