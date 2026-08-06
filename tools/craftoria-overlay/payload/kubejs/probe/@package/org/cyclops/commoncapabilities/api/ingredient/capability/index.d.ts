import { $ItemStack_ } from "@package/net/minecraft/world/item";
import { $Event } from "@package/net/neoforged/bus/api";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $List } from "@package/java/util";
import { $BlockPos_ } from "@package/net/minecraft/core";
import { $ILevelExtension } from "@package/net/neoforged/neoforge/common/extensions";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $IngredientComponent, $IngredientComponent_ } from "@package/org/cyclops/commoncapabilities/api/ingredient";
import { $Class } from "@package/java/lang";
import { $IModBusEvent } from "@package/net/neoforged/fml/event";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $ICapabilityProvider_, $BaseCapability } from "@package/net/neoforged/neoforge/capabilities";

declare module "@package/org/cyclops/commoncapabilities/api/ingredient/capability" {
    export class $AttachCapabilitiesEventIngredientComponent<T, M> extends $Event implements $IModBusEvent {
        isRegistered(arg0: $IngredientComponentCapability<never, never>, arg1: $IngredientComponent_<never, never>): boolean;
        register<T, C>(arg0: $IngredientComponentCapability<T, C>, arg1: $IngredientComponent_<never, never>, arg2: $ICapabilityProvider_<$IngredientComponent<never, never>, C, T>): void;
        getIngredientComponent(): $IngredientComponent<T, M>;
        constructor(arg0: $IngredientComponent_<T, M>);
        get ingredientComponent(): $IngredientComponent<T, M>;
    }
    export class $ICapabilityGetter<C> {
        static forBlock<C>(arg0: $ILevelExtension, arg1: $BlockPos_, arg2: $BlockState_ | null, arg3: $BlockEntity | null): $ICapabilityGetter<C>;
        static forItem<C>(arg0: $ItemStack_): $ICapabilityGetter<C>;
        static forEntity<C>(arg0: $Entity): $ICapabilityGetter<C>;
        static forBlockEntity<C>(arg0: $BlockEntity): $ICapabilityGetter<C>;
    }
    export interface $ICapabilityGetter<C> {
        getCapability<T>(arg0: $BaseCapability<T, C>, arg1: C | null): T;
        canHandleCapabilityType(arg0: $BaseCapability<never, never>): boolean;
    }
    export class $IngredientComponentCapability<T, C> extends $BaseCapability<T, C> {
        static create<T, C>(arg0: $ResourceLocation_, arg1: $Class<T>, arg2: $Class<C>): $IngredientComponentCapability<T, C>;
        getCapability(arg0: $IngredientComponent_<never, never>, arg1: C): T;
        static getAll(): $List<$IngredientComponentCapability<never, never>>;
        static createVoid<T>(arg0: $ResourceLocation_, arg1: $Class<T>): $IngredientComponentCapability<T, void>;
        static get all(): $List<$IngredientComponentCapability<never, never>>;
    }
}
