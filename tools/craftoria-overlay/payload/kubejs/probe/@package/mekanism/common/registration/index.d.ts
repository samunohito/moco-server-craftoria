import { $DeferredHolder, $DeferredRegister } from "@package/net/neoforged/neoforge/registries";
import { $Function_ } from "@package/java/util/function";
import { $Registry, $Holder_ } from "@package/net/minecraft/core";
import { $ResourceLocation, $ResourceLocation_, $ResourceKey_, $ResourceKey } from "@package/net/minecraft/resources";
export * as impl from "@package/mekanism/common/registration/impl";

declare module "@package/mekanism/common/registration" {
    export class $MekanismDeferredRegister<T> extends $DeferredRegister<T> {
        constructor(registryKey: $ResourceKey_<$Registry<T>>, namespace: string);
        constructor(registryKey: $ResourceKey_<$Registry<T>>, namespace: string, holderCreator: $Function_<$ResourceKey<T>, $MekanismDeferredHolder<T, T>>);
    }
    export class $MekanismDeferredHolder<R, T extends R> extends $DeferredHolder<R, T> implements $INamedEntry {
        getName(): string;
        is(other: R): boolean;
        keyMatches(holder: $Holder_<R>): boolean;
        constructor(registryKey: $ResourceKey_<$Registry<R>>, valueName: $ResourceLocation_);
        constructor(key: $ResourceKey_<R>);
        get name(): string;
    }
    export class $DoubleWrappedRegistryObject<PRIMARY_REGISTRY, PRIMARY extends PRIMARY_REGISTRY, SECONDARY_REGISTRY, SECONDARY extends SECONDARY_REGISTRY> extends $MekanismDeferredHolder<PRIMARY_REGISTRY, PRIMARY> {
        secondaryKeyMatches(holder: $Holder_<SECONDARY_REGISTRY>): boolean;
        getSecondary(): SECONDARY;
        isSecondary(other: SECONDARY_REGISTRY): boolean;
        constructor(primaryKey: $DeferredHolder<PRIMARY_REGISTRY, PRIMARY>, secondaryRO: $DeferredHolder<SECONDARY_REGISTRY, SECONDARY>);
        constructor(primaryKey: $ResourceKey_<PRIMARY_REGISTRY>, secondaryRO: $DeferredHolder<SECONDARY_REGISTRY, SECONDARY>);
    }
    export class $INamedEntry {
    }
    export interface $INamedEntry {
        getName(): string;
        getId(): $ResourceLocation;
        get name(): string;
        get id(): $ResourceLocation;
    }
    /**
     * Values that may be interpreted as {@link $INamedEntry}.
     */
    export type $INamedEntry_ = (() => $ResourceLocation_);
}
