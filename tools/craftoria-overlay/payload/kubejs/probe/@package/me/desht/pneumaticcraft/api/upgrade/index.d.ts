import { $Item, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $ResourceLocation } from "@package/net/minecraft/resources";

declare module "@package/me/desht/pneumaticcraft/api/upgrade" {
    export class $PNCUpgrade {
        static from(arg0: $ItemStack_): $PNCUpgrade;
    }
    export interface $PNCUpgrade {
        getId(): $ResourceLocation;
        getItem(arg0: number): $Item;
        getItem(): $Item;
        getMaxTier(): number;
        getItemStack(): $ItemStack;
        getItemStack(arg0: number): $ItemStack;
        getItemRegistryName(): $ResourceLocation;
        getItemRegistryName(arg0: number): $ResourceLocation;
        isDependencyLoaded(): boolean;
        getCacheId(): number;
        get id(): $ResourceLocation;
        get maxTier(): number;
        get dependencyLoaded(): boolean;
        get cacheId(): number;
    }
}
