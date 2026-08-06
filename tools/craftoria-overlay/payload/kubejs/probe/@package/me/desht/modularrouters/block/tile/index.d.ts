import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $IEnergyStorage } from "@package/net/neoforged/neoforge/energy";
import { $List, $UUID_, $Set_, $Map } from "@package/java/util";
import { $IFluidHandlerItem } from "@package/net/neoforged/neoforge/fluids/capability";
import { $MenuProvider } from "@package/net/minecraft/world";
import { $SoundEvent_, $SoundSource_ } from "@package/net/minecraft/sounds";
import { $HolderLookup$Provider, $GlobalPos, $BlockPos_, $Direction_, $Direction } from "@package/net/minecraft/core";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $GameProfile } from "@package/com/mojang/authlib";
import { $TransferDirection_, $RedstoneBehaviour_, $RedstoneBehaviour, $RelativeDirection_ } from "@package/me/desht/modularrouters/logic/settings";
import { $UpgradeItem } from "@package/me/desht/modularrouters/item/upgrade";
import { $ContainerData, $AbstractContainerMenu } from "@package/net/minecraft/world/inventory";
import { $Enum } from "@package/java/lang";
import { $Level } from "@package/net/minecraft/world/level";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Component } from "@package/net/minecraft/network/chat";
import { $IItemHandlerModifiable, $IItemHandler } from "@package/net/neoforged/neoforge/items";
import { $Player, $Inventory } from "@package/net/minecraft/world/entity/player";
import { $BeamData, $TranslatableEnum } from "@package/me/desht/modularrouters/util";
import { $DetectorModule$SignalType_ } from "@package/me/desht/modularrouters/item/module";
import { $RouterFakePlayer } from "@package/me/desht/modularrouters/util/fake_player";
import { $AABB } from "@package/net/minecraft/world/phys";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $ItemCapability } from "@package/net/neoforged/neoforge/capabilities";

declare module "@package/me/desht/modularrouters/block/tile" {
    export class $ModularRouterBlockEntity$EnergyDirection extends $Enum<$ModularRouterBlockEntity$EnergyDirection> implements $TranslatableEnum {
        static values(): $ModularRouterBlockEntity$EnergyDirection[];
        static valueOf(arg0: string): $ModularRouterBlockEntity$EnergyDirection;
        static forValue(arg0: string): $ModularRouterBlockEntity$EnergyDirection;
        getTranslationKey(): string;
        static TO_ROUTER: $ModularRouterBlockEntity$EnergyDirection;
        static FROM_ROUTER: $ModularRouterBlockEntity$EnergyDirection;
        static NONE: $ModularRouterBlockEntity$EnergyDirection;
        get translationKey(): string;
    }
    /**
     * Values that may be interpreted as {@link $ModularRouterBlockEntity$EnergyDirection}.
     */
    export type $ModularRouterBlockEntity$EnergyDirection_ = "from_router" | "to_router" | "none";
    export class $ModularRouterBlockEntity$RecompileFlag extends $Enum<$ModularRouterBlockEntity$RecompileFlag> {
        static values(): $ModularRouterBlockEntity$RecompileFlag[];
        static valueOf(arg0: string): $ModularRouterBlockEntity$RecompileFlag;
        static MODULES: $ModularRouterBlockEntity$RecompileFlag;
        static UPGRADES: $ModularRouterBlockEntity$RecompileFlag;
    }
    /**
     * Values that may be interpreted as {@link $ModularRouterBlockEntity$RecompileFlag}.
     */
    export type $ModularRouterBlockEntity$RecompileFlag_ = "modules" | "upgrades";
    export class $ModularRouterBlockEntity$TrackedEnergy implements $ContainerData {
        get(arg0: number): number;
        set(arg0: number, arg1: number): void;
        getCount(): number;
        constructor(arg0: $ModularRouterBlockEntity);
        get count(): number;
    }
    export class $ICamouflageable {
    }
    export interface $ICamouflageable {
        getCamouflage(): $BlockState;
        extendedMimic(): boolean;
        get camouflage(): $BlockState;
    }
    /**
     * Values that may be interpreted as {@link $ICamouflageable}.
     */
    export type $ICamouflageable_ = (() => $BlockState_);
    export class $ModularRouterBlockEntity extends $BlockEntity implements $ICamouflageable, $MenuProvider {
        setOwner(arg0: $Player): void;
        getDisplayName(): $Component;
        getBuffer(): $IItemHandler;
        getRenderBoundingBox(): $AABB;
        clientTick(): void;
        peekBuffer(arg0: number): $ItemStack;
        getModules(): $IItemHandlerModifiable;
        getUpgrades(): $IItemHandler;
        getModuleCount(): number;
        getEnergyStorage(): $IEnergyStorage;
        getBufferCapability<T>(arg0: $ItemCapability<T, void>): T;
        saveAdditional(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        loadAdditional(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        getTickRate(): number;
        isPermitted(arg0: $Player): boolean;
        getRedstoneBehaviour(): $RedstoneBehaviour;
        getFluidHandler(): $IFluidHandlerItem;
        getFakePlayer(): $RouterFakePlayer;
        getAllUpgrades(): $Map<$UpgradeItem, number>;
        createMenu(arg0: number, arg1: $Inventory, arg2: $Player): $AbstractContainerMenu;
        serverTick(): void;
        getRedstoneLevel(arg0: $Direction_, arg1: boolean): number;
        setEcoMode(arg0: boolean): void;
        getEcoMode(): boolean;
        getCamouflage(): $BlockState;
        playSound(arg0: $Player, arg1: $BlockPos_, arg2: $SoundEvent_, arg3: $SoundSource_, arg4: number, arg5: number): void;
        getEnergyCapacity(): number;
        setCamouflage(arg0: $BlockState_): void;
        emitRedstone(arg0: $RelativeDirection_, arg1: number, arg2: $DetectorModule$SignalType_): void;
        addItemBeam(arg0: $BeamData): void;
        getUpgradeCount(arg0: $UpgradeItem): number;
        getFluidTransferRate(): number;
        getGlobalPos(): $GlobalPos;
        getEnergyXferRate(): number;
        recompileNeeded(arg0: $ModularRouterBlockEntity$RecompileFlag_): void;
        notifyModules(): void;
        addPermittedIds(arg0: $Set_<$UUID_>): void;
        setTunedSyncValue(arg0: number): void;
        getItemsPerTick(): number;
        nonNullLevel(): $Level;
        checkForRedstonePulse(): void;
        getUpgradeSlotCount(): number;
        getModuleSlotCount(): number;
        sendBlockUpdateIfNeeded(): void;
        getAbsoluteFacing(arg0: $RelativeDirection_): $Direction;
        getRedstonePower(): number;
        getExtensionData(): $CompoundTag;
        setRedstoneBehaviour(arg0: $RedstoneBehaviour_): void;
        caresAboutItemAttributes(): boolean;
        getCurrentFluidTransferAllowance(arg0: $TransferDirection_): number;
        insertBuffer(arg0: $ItemStack_): $ItemStack;
        transferredFluid(arg0: number, arg1: $TransferDirection_): void;
        getBufferItemStack(): $ItemStack;
        setBufferItemStack(arg0: $ItemStack_): void;
        isBufferFull(): boolean;
        extractBuffer(arg0: number): $ItemStack;
        setHasPulsedModules(arg0: boolean): void;
        setAllowRedstoneEmission(arg0: boolean): void;
        getBufferSlotCount(): number;
        setUpgradesFrom(arg0: $IItemHandler): void;
        getEnergyDirection(): $ModularRouterBlockEntity$EnergyDirection;
        isBufferEmpty(): boolean;
        setEnergyDirection(arg0: $ModularRouterBlockEntity$EnergyDirection_): void;
        extendedMimic(): boolean;
        writeClientSideData(arg0: $AbstractContainerMenu, arg1: $RegistryFriendlyByteBuf): void;
        shouldTriggerClientSideContainerClosingOnOpen(): boolean;
        beams: $List<$BeamData>;
        static DEFAULT_FAKEPLAYER_PROFILE: $GameProfile;
        static NBT_UPGRADES: string;
        trackedEnergy: $ModularRouterBlockEntity$TrackedEnergy;
        pendingBeams: $List<$BeamData>;
        static NBT_REDSTONE_MODE: string;
        static ATTACHMENTS_NBT_KEY: string;
        static NBT_MODULES: string;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        set owner(value: $Player);
        get displayName(): $Component;
        get buffer(): $IItemHandler;
        get renderBoundingBox(): $AABB;
        get modules(): $IItemHandlerModifiable;
        get upgrades(): $IItemHandler;
        get moduleCount(): number;
        get energyStorage(): $IEnergyStorage;
        get tickRate(): number;
        get fluidHandler(): $IFluidHandlerItem;
        get fakePlayer(): $RouterFakePlayer;
        get allUpgrades(): $Map<$UpgradeItem, number>;
        get energyCapacity(): number;
        get fluidTransferRate(): number;
        get globalPos(): $GlobalPos;
        get energyXferRate(): number;
        set tunedSyncValue(value: number);
        get itemsPerTick(): number;
        get upgradeSlotCount(): number;
        get moduleSlotCount(): number;
        get redstonePower(): number;
        get extensionData(): $CompoundTag;
        get bufferFull(): boolean;
        set hasPulsedModules(value: boolean);
        set allowRedstoneEmission(value: boolean);
        get bufferSlotCount(): number;
        set upgradesFrom(value: $IItemHandler);
        get bufferEmpty(): boolean;
    }
}
