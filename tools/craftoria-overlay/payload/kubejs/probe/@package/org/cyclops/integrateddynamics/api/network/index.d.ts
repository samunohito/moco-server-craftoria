import { $BlockGetter } from "@package/net/minecraft/world/level";
import { $ILazyExpressionValueCache } from "@package/org/cyclops/integrateddynamics/api/evaluate/expression";
import { $ItemStack_ } from "@package/net/minecraft/world/item";
import { $Event } from "@package/net/neoforged/bus/api";
import { $IVariable, $IValue } from "@package/org/cyclops/integrateddynamics/api/evaluate/variable";
import { $INBTSerializable } from "@package/org/cyclops/cyclopscore/persist/nbt";
import { $IVariableFacade } from "@package/org/cyclops/integrateddynamics/api/item";
import { $INetworkEvent_, $INetworkEventBus, $INetworkEvent } from "@package/org/cyclops/integrateddynamics/api/network/event";
import { $List, $Map_, $Map, $Set, $List_ } from "@package/java/util";
import { $PartTarget, $IPartContainer, $PartPos, $IPartType, $IPartState } from "@package/org/cyclops/integrateddynamics/api/part";
import { $BlockPos_, $Direction_, $Direction } from "@package/net/minecraft/core";
import { $DimPos } from "@package/org/cyclops/cyclopscore/datastructure";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $IAspectRead } from "@package/org/cyclops/integrateddynamics/api/part/aspect";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $ISidedPathElement, $IPathElement } from "@package/org/cyclops/integrateddynamics/api/path";
import { $Block_ } from "@package/net/minecraft/world/level/block";
import { $Comparable, $Class } from "@package/java/lang";
import { $IModBusEvent } from "@package/net/neoforged/fml/event";
import { $ICapabilityProvider, $ICapabilityProvider_, $BaseCapability } from "@package/net/neoforged/neoforge/capabilities";
export * as event from "@package/org/cyclops/integrateddynamics/api/network/event";

declare module "@package/org/cyclops/integrateddynamics/api/network" {
    export class $AttachCapabilitiesEventNetwork extends $Event implements $IModBusEvent {
        register<T>(arg0: $NetworkCapability<T>, arg1: $ICapabilityProvider_<$INetwork, void, T>): void;
        getProviders(): $Map<$NetworkCapability<never>, $List<$ICapabilityProvider<$INetwork, void, never>>>;
        addFullNetworkListener(arg0: $IFullNetworkListener): void;
        getFullNetworkListeners(): $List<$IFullNetworkListener>;
        getNetwork(): $INetwork;
        constructor(arg0: $INetwork);
        get providers(): $Map<$NetworkCapability<never>, $List<$ICapabilityProvider<$INetwork, void, never>>>;
        get fullNetworkListeners(): $List<$IFullNetworkListener>;
        get network(): $INetwork;
    }
    export class $INetwork {
    }
    export interface $INetwork extends $IFullNetworkListener, $INBTSerializable {
        isValid(arg0: $INetworkElement): boolean;
        getCapability<T>(arg0: $NetworkCapability<T>): (T) | undefined;
        getFullNetworkListeners(): $IFullNetworkListener[];
        setPriorityAndChannel(arg0: $INetworkElement, arg1: number, arg2: number): void;
        hasChanged(): boolean;
        isInitialized(): boolean;
        getElements(): $Set<$INetworkElement>;
        getEventBus(): $INetworkEventBus;
        isCrashed(): boolean;
        getCablesCount(): number;
        revalidateElement(arg0: $INetworkElement): void;
        invalidateElement(arg0: $INetworkElement): void;
        removeNetworkElementUpdateable(arg0: $INetworkElement): void;
        addNetworkElementUpdateable(arg0: $INetworkElement): void;
        killIfEmpty(): boolean;
        isKilled(): boolean;
        setCrashed(arg0: boolean): void;
        containsSidedPathElement(arg0: $ISidedPathElement): boolean;
        getLastSecondDuration(arg0: $INetworkElement): number;
        resetLastSecondDurations(): void;
        get fullNetworkListeners(): $IFullNetworkListener[];
        get initialized(): boolean;
        get elements(): $Set<$INetworkElement>;
        get eventBus(): $INetworkEventBus;
        get cablesCount(): number;
        get killed(): boolean;
    }
    export class $INetworkElement {
        static shouldTick(arg0: $DimPos): boolean;
    }
    export interface $INetworkElement extends $Comparable<$INetworkElement> {
        update(arg0: $INetwork): void;
        getPriority(): number;
        getChannel(): number;
        isLoaded(): boolean;
        afterNetworkReAlive(arg0: $INetwork): void;
        /**
         * @deprecated
         */
        setPriorityAndChannel(arg0: $INetwork, arg1: number, arg2: number): void;
        invalidate(arg0: $INetwork): void;
        revalidate(arg0: $INetwork): void;
        addDrops(arg0: $BlockState_, arg1: $List_<$ItemStack_>, arg2: boolean, arg3: boolean): void;
        /**
         * @deprecated
         */
        addDrops(arg0: $List_<$ItemStack_>, arg1: boolean, arg2: boolean): void;
        isUpdate(): boolean;
        /**
         * @deprecated
         */
        onNetworkRemoval(arg0: $INetwork): void;
        onNetworkRemoval(arg0: $INetwork, arg1: $BlockState_): void;
        afterNetworkAlive(arg0: $INetwork): void;
        onNetworkAddition(arg0: $INetwork): boolean;
        onPreRemoved(arg0: $INetwork): void;
        beforeNetworkKill(arg0: $INetwork, arg1: $BlockState_): void;
        /**
         * @deprecated
         */
        beforeNetworkKill(arg0: $INetwork): void;
        getUpdateInterval(): number;
        onPostRemoved(arg0: $INetwork): void;
        onNeighborBlockChange(arg0: $INetwork | null, arg1: $BlockGetter, arg2: $Block_, arg3: $BlockPos_): void;
        canRevalidate(arg0: $INetwork): boolean;
        get priority(): number;
        get channel(): number;
        get loaded(): boolean;
        get updateInterval(): number;
    }
    export class $IPositionedNetworkElement {
    }
    export interface $IPositionedNetworkElement extends $INetworkElement {
        getPosition(): $DimPos;
        get position(): $DimPos;
    }
    export class $INetworkEventListener<E> {
    }
    export interface $INetworkEventListener<E> {
        getSubscribedEvents(): $Set<$Class<$INetworkEvent>>;
        hasEventSubscriptions(): boolean;
        onEvent(arg0: $INetworkEvent_, arg1: E): void;
        get subscribedEvents(): $Set<$Class<$INetworkEvent>>;
    }
    export class $IPartNetwork {
    }
    export interface $IPartNetwork extends $ILazyExpressionValueCache {
        getProxy(arg0: number): $DimPos;
        addProxy(arg0: number, arg1: $DimPos): boolean;
        getVariableFacade(arg0: number): $IVariableFacade;
        getPartType(arg0: number): $IPartType<any, any>;
        hasPart(arg0: number): boolean;
        hasVariableFacade(arg0: number): boolean;
        removePart(arg0: number): void;
        addPart(arg0: number, arg1: $PartPos): boolean;
        getPartState(arg0: number): $IPartState<any>;
        getPartVariable<V extends $IValue>(arg0: number, arg1: $IAspectRead<V, never>): $IVariable<V>;
        hasPartVariable<V extends $IValue>(arg0: number, arg1: $IAspectRead<V, never>): boolean;
        removeVariableContainer(arg0: $DimPos): void;
        addVariableContainer(arg0: $DimPos): boolean;
        removeProxy(arg0: number): void;
        notifyPartsChanged(): void;
    }
    export class $IFullNetworkListener {
    }
    export interface $IFullNetworkListener {
        update(): void;
        kill(): void;
        postUpdate(arg0: $INetworkElement): void;
        canUpdate(arg0: $INetworkElement): boolean;
        afterServerLoad(): void;
        beforeServerStop(): void;
        removePathElement(arg0: $IPathElement, arg1: $Direction_, arg2: $BlockState_): boolean;
        addNetworkElement(arg0: $INetworkElement, arg1: boolean): boolean;
        revalidateElement(arg0: $INetworkElement): void;
        updateGuaranteed(): void;
        onSkipUpdate(arg0: $INetworkElement): void;
        invalidateElement(arg0: $INetworkElement): void;
        removeNetworkElementPre(arg0: $INetworkElement): boolean;
        removeNetworkElementPost(arg0: $INetworkElement, arg1: $BlockState_): void;
    }
    export class $NetworkCapability<T> extends $BaseCapability<T, void> {
        static create<T>(arg0: $ResourceLocation_, arg1: $Class<T>): $NetworkCapability<T>;
        getCapability(arg0: $Map_<$NetworkCapability<never>, $List_<$ICapabilityProvider_<$INetwork, void, never>>>, arg1: $INetwork): T;
        static getAll(): $List<$NetworkCapability<never>>;
        static get all(): $List<$NetworkCapability<never>>;
    }
    export class $IEventListenableNetworkElement<D extends $INetworkEventListener<never>> {
    }
    export interface $IEventListenableNetworkElement<D extends $INetworkEventListener<never>> extends $INetworkElement {
        getNetworkEventListener(): (D) | undefined;
        get networkEventListener(): (D) | undefined;
    }
    export class $IIdentifiableNetworkElement {
    }
    export interface $IIdentifiableNetworkElement {
        getId(): number;
        getGroup(): $ResourceLocation;
        get id(): number;
        get group(): $ResourceLocation;
    }
    export class $IPartNetworkElement<P extends $IPartType<P, S>, S extends $IPartState<P>> {
        static GROUP: $ResourceLocation;
    }
    export interface $IPartNetworkElement<P extends $IPartType<P, S>, S extends $IPartState<P>> extends $IEventListenableNetworkElement<P>, $IPositionedNetworkElement, $ISidedNetworkElement, $IIdentifiableNetworkElement {
        getTarget(): $PartTarget;
        isLoaded(): boolean;
        getPart(): P;
        getPartContainer(): $IPartContainer;
        getPartState(): S;
        get target(): $PartTarget;
        get loaded(): boolean;
        get part(): P;
        get partContainer(): $IPartContainer;
        get partState(): S;
    }
    export class $INetworkCarrier {
    }
    export interface $INetworkCarrier {
        getNetwork(): $INetwork;
        setNetwork(arg0: $INetwork | null): void;
    }
    export class $ISidedNetworkElement {
    }
    export interface $ISidedNetworkElement extends $INetworkElement {
        getSide(): $Direction;
        get side(): $Direction;
    }
}
