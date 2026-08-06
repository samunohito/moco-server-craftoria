import { $ItemLike_ } from "@package/net/minecraft/world/level";
import { $ItemStack, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $Component, $Component_ } from "@package/net/minecraft/network/chat";
import { $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $Record } from "@package/java/lang";
import { $List, $List_ } from "@package/java/util";
import { $EffectInfo, $EntityInfo, $Animation_, $DisplayInfo_, $DisplayInfo, $ColorInfo, $ColorInfo_, $Animation, $EffectInfo_ } from "@package/trofers/trophy/components";
export * as components from "@package/trofers/trophy/components";

declare module "@package/trofers/trophy" {
    export interface $Trophy extends RegistryMarked<RegistryTypes.TrofersTrophiesTag, RegistryTypes.TrofersTrophies> {}
    export class $Trophy extends $Record {
        name(): ($Component) | undefined;
        isHidden(): boolean;
        display(): $DisplayInfo;
        item(): $ItemStack;
        entity(): ($EntityInfo) | undefined;
        static createItem(trophyBase: $ItemLike_, id: $ResourceLocation_): $ItemStack;
        animation(): $Animation;
        tooltip(): $List<$Component>;
        effects(): $EffectInfo;
        colors(): $ColorInfo;
        static getTrophy(stack: $ItemStack_): $Trophy;
        static CODEC: $Codec<$Trophy>;
        static MAP_CODEC: $MapCodec<$Trophy>;
        static EMPTY: $Trophy;
        constructor(name: ($Component_) | undefined, tooltip: $List_<$Component_>, display: $DisplayInfo_, animation: $Animation_, item: $ItemStack_, entity: ($EntityInfo) | undefined, colors: $ColorInfo_, effects: $EffectInfo_, isHidden: boolean);
        get hidden(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $Trophy}.
     */
    export type $Trophy_ = RegistryTypes.TrofersTrophies | { name?: ($Component_) | undefined, animation?: $Animation_, item?: $ItemStack_, display?: $DisplayInfo_, isHidden?: boolean, colors?: $ColorInfo_, tooltip?: $List_<$Component_>, effects?: $EffectInfo_, entity?: ($EntityInfo) | undefined,  } | [name?: ($Component_) | undefined, animation?: $Animation_, item?: $ItemStack_, display?: $DisplayInfo_, isHidden?: boolean, colors?: $ColorInfo_, tooltip?: $List_<$Component_>, effects?: $EffectInfo_, entity?: ($EntityInfo) | undefined, ];
}
