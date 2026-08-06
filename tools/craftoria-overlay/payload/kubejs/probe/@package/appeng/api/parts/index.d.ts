import { $MultiBufferSource_ } from "@package/net/minecraft/client/renderer";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Entity, $LivingEntity } from "@package/net/minecraft/world/entity";
import { $SettingsFrom_ } from "@package/appeng/util";
import { $VoxelShape, $CollisionContext } from "@package/net/minecraft/world/phys/shapes";
import { $List, $List_ } from "@package/java/util";
import { $RandomSource } from "@package/net/minecraft/util";
import { $Function_ } from "@package/java/util/function";
import { $Clearable, $InteractionHand_ } from "@package/net/minecraft/world";
import { $CrashReportCategory } from "@package/net/minecraft";
import { $HolderLookup$Provider, $BlockPos_, $Direction_, $Direction } from "@package/net/minecraft/core";
import { $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $DataComponentMap_, $DataComponentMap$Builder } from "@package/net/minecraft/core/component";
import { $Enum, $Class } from "@package/java/lang";
import { $IModBusEvent } from "@package/net/neoforged/fml/event";
import { $ItemLike, $BlockGetter, $Level_ } from "@package/net/minecraft/world/level";
import { $Event } from "@package/net/neoforged/bus/api";
import { $Item, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $IGridNode } from "@package/appeng/api/networking";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $AECableType_, $AEColor, $AECableType, $DimensionalBlockPos } from "@package/appeng/api/util";
import { $ModelData } from "@package/net/neoforged/neoforge/client/model/data";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $Vec3_ } from "@package/net/minecraft/world/phys";
import { $BlockEntityType_, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $ICapabilityProvider_, $BlockCapability } from "@package/net/neoforged/neoforge/capabilities";

declare module "@package/appeng/api/parts" {
    export class $IPartCollisionHelper {
    }
    export interface $IPartCollisionHelper {
        getWorldZ(): $Direction;
        getWorldX(): $Direction;
        getWorldY(): $Direction;
        addBox(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        isBBCollision(): boolean;
        get worldZ(): $Direction;
        get worldX(): $Direction;
        get worldY(): $Direction;
        get BBCollision(): boolean;
    }
    export class $IPartItem<P extends $IPart> {
        static getId(arg0: $IPartItem<never>): $ResourceLocation;
        static byId(arg0: $ResourceLocation_): $IPartItem<never>;
        static byNetworkId(arg0: number): $IPartItem<never>;
        static getNetworkId(arg0: $IPartItem<never>): number;
    }
    export interface $IPartItem<P extends $IPart> extends $ItemLike {
        getPartClass(): $Class<P>;
        createPart(): P;
        get partClass(): $Class<P>;
    }
    export class $IPart {
    }
    export interface $IPart extends $ICustomCableConnection, $Clearable {
        readFromNBT(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        writeToNBT(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        addAdditionalDrops(arg0: $List_<$ItemStack_>, arg1: boolean): void;
        isSolid(): boolean;
        isLadder(arg0: $LivingEntity): boolean;
        animateTick(arg0: $Level_, arg1: $BlockPos_, arg2: $RandomSource): void;
        getModelData(): $ModelData;
        canBePlacedOn(arg0: $BusSupport_): boolean;
        getLightLevel(): number;
        canConnectRedstone(): boolean;
        onEntityCollision(arg0: $Entity): void;
        clearContent(): void;
        onClicked(arg0: $Player, arg1: $Vec3_): boolean;
        onNeighborChanged(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $BlockPos_): void;
        getBoxes(arg0: $IPartCollisionHelper): void;
        writeToStream(arg0: $RegistryFriendlyByteBuf): void;
        readFromStream(arg0: $RegistryFriendlyByteBuf): boolean;
        getPartItem(): $IPartItem<never>;
        getStaticModels(): $IPartModel;
        readVisualStateFromNBT(arg0: $CompoundTag_): void;
        writeVisualStateToNBT(arg0: $CompoundTag_): void;
        importSettings(arg0: $SettingsFrom_, arg1: $DataComponentMap_, arg2: $Player): void;
        onUseItemOn(arg0: $ItemStack_, arg1: $Player, arg2: $InteractionHand_, arg3: $Vec3_): boolean;
        exportSettings(arg0: $SettingsFrom_, arg1: $DataComponentMap$Builder): void;
        renderDynamic(arg0: number, arg1: $PoseStack, arg2: $MultiBufferSource_, arg3: number, arg4: number): void;
        onUpdateShape(arg0: $Direction_): void;
        onUseWithoutItem(arg0: $Player, arg1: $Vec3_): boolean;
        onShiftClicked(arg0: $Player, arg1: $Vec3_): boolean;
        addPartDrop(arg0: $List_<$ItemStack_>, arg1: boolean): void;
        addToWorld(): void;
        getGridNode(): $IGridNode;
        requireDynamicRender(): boolean;
        getCableConnectionLength(arg0: $AECableType_): number;
        getExternalFacingNode(): $IGridNode;
        isProvidingWeakPower(): number;
        isProvidingStrongPower(): number;
        getDesiredConnectionType(): $AECableType;
        onPlacement(arg0: $Player): void;
        getExternalCableConnectionType(): $AECableType;
        setPartHostInfo(arg0: $Direction_, arg1: $IPartHost, arg2: $BlockEntity): void;
        removeFromWorld(): void;
        addEntityCrashInfo(arg0: $CrashReportCategory): void;
        get solid(): boolean;
        get modelData(): $ModelData;
        get lightLevel(): number;
        get partItem(): $IPartItem<never>;
        get staticModels(): $IPartModel;
        get gridNode(): $IGridNode;
        get externalFacingNode(): $IGridNode;
        get providingWeakPower(): number;
        get providingStrongPower(): number;
        get desiredConnectionType(): $AECableType;
        get externalCableConnectionType(): $AECableType;
    }
    export class $SelectedPart {
        side: $Direction;
        part: $IPart;
        facade: $IFacadePart;
        constructor();
        constructor(arg0: $IPart, arg1: $Direction_);
        constructor(arg0: $IFacadePart, arg1: $Direction_);
    }
    export class $ICustomCableConnection {
    }
    export interface $ICustomCableConnection {
        getCableConnectionLength(arg0: $AECableType_): number;
    }
    /**
     * Values that may be interpreted as {@link $ICustomCableConnection}.
     */
    export type $ICustomCableConnection_ = ((arg0: $AECableType) => number);
    export class $IFacadeContainer {
    }
    export interface $IFacadeContainer {
        isEmpty(): boolean;
        readFromNBT(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        writeToNBT(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        removeFacade(arg0: $IPartHost, arg1: $Direction_): void;
        writeToStream(arg0: $RegistryFriendlyByteBuf): void;
        readFromStream(arg0: $RegistryFriendlyByteBuf): boolean;
        addFacade(arg0: $IFacadePart): boolean;
        getFacade(arg0: $Direction_): $IFacadePart;
        canAddFacade(arg0: $IFacadePart): boolean;
        get empty(): boolean;
    }
    export class $IPartHost {
    }
    export interface $IPartHost extends $ICustomCableConnection {
        isEmpty(): boolean;
        getLocation(): $DimensionalBlockPos;
        cleanup(): void;
        notifyNeighbors(): void;
        markForUpdate(): void;
        hasRedstone(): boolean;
        getColor(): $AEColor;
        isBlocked(arg0: $Direction_): boolean;
        clearContainer(): void;
        getBlockEntity(): $BlockEntity;
        getCollisionShape(arg0: $CollisionContext): $VoxelShape;
        isInWorld(): boolean;
        getPart(arg0: $Direction_): $IPart;
        replacePart<T extends $IPart>(arg0: $IPartItem<T>, arg1: $Direction_, arg2: $Player, arg3: $InteractionHand_): T;
        markForSave(): void;
        canAddPart(arg0: $ItemStack_, arg1: $Direction_): boolean;
        removePart(arg0: $IPart): boolean;
        addPart<T extends $IPart>(arg0: $IPartItem<T>, arg1: $Direction_, arg2: $Player): T;
        removePartFromSide(arg0: $Direction_): void;
        selectPartLocal(arg0: $Vec3_): $SelectedPart;
        selectPartWorld(arg0: $Vec3_): $SelectedPart;
        partChanged(): void;
        getFacadeContainer(): $IFacadeContainer;
        notifyNeighborNow(arg0: $Direction_): void;
        get empty(): boolean;
        get location(): $DimensionalBlockPos;
        get color(): $AEColor;
        get blockEntity(): $BlockEntity;
        get inWorld(): boolean;
        get facadeContainer(): $IFacadeContainer;
    }
    export class $BusSupport extends $Enum<$BusSupport> {
        static values(): $BusSupport[];
        static valueOf(arg0: string): $BusSupport;
        static DENSE_CABLE: $BusSupport;
        static CABLE: $BusSupport;
    }
    /**
     * Values that may be interpreted as {@link $BusSupport}.
     */
    export type $BusSupport_ = "cable" | "dense_cable";
    export class $IPartModel {
    }
    export interface $IPartModel {
        getModels(): $List<$ResourceLocation>;
        requireCableConnection(): boolean;
        get models(): $List<$ResourceLocation>;
    }
    export class $IFacadePart {
    }
    export interface $IFacadePart {
        getItem(): $Item;
        getSide(): $Direction;
        getItemStack(): $ItemStack;
        getBlockState(): $BlockState;
        onClicked(arg0: $Player, arg1: $Vec3_): boolean;
        getBoxes(arg0: $IPartCollisionHelper, arg1: boolean): void;
        onUseItemOn(arg0: $ItemStack_, arg1: $Player, arg2: $InteractionHand_, arg3: $Vec3_): boolean;
        getTextureItem(): $ItemStack;
        get item(): $Item;
        get side(): $Direction;
        get itemStack(): $ItemStack;
        get blockState(): $BlockState;
        get textureItem(): $ItemStack;
    }
    export class $RegisterPartCapabilitiesEvent extends $Event implements $IModBusEvent {
        register<T, C, P extends $IPart>(arg0: $BlockCapability<T, C>, arg1: $ICapabilityProvider_<P, C, T>, arg2: $Class<P>): void;
        addHostType<T extends $BlockEntity>(arg0: $BlockEntityType_<T>): void;
        registerContext<T, C>(arg0: $BlockCapability<T, C>, arg1: $Function_<C, $Direction>): void;
        constructor();
    }
}
