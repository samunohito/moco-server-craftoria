import { $DeferredHolder } from "@package/net/neoforged/neoforge/registries";
import { $Supplier } from "@package/java/util/function";
import { $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $List } from "@package/java/util";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $FishingMinigameScreen, $ActiveSweetSpot } from "@package/com/wdiscute/starcatcher/minigame";

declare module "@package/com/wdiscute/starcatcher/registry/minigamemodifiers" {
    export class $AbstractMinigameModifier {
        getRegistryHolder(): $DeferredHolder<$Supplier<$AbstractMinigameModifier>, $Supplier<$AbstractMinigameModifier>>;
        getCodecOrThrow(): $MapCodec<$AbstractMinigameModifier>;
        toSupplier(): $Supplier<$AbstractMinigameModifier>;
        tick(): void;
        onRemove(): void;
        getRegistryHolderOrThrow(): $DeferredHolder<$Supplier<$AbstractMinigameModifier>, $Supplier<$AbstractMinigameModifier>>;
        onMiss(): void;
        disableSweetSpotRendering(arg0: $ActiveSweetSpot): boolean;
        skipRenderingKimbeMarker(): boolean;
        disablePointerRendering(): boolean;
        onKeyPress(arg0: number, arg1: number, arg2: number): void;
        onKeyReleased(arg0: number, arg1: number, arg2: number): void;
        onHit(arg0: $ActiveSweetSpot): boolean;
        renderBackground(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number): void;
        renderForeground(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number): void;
        skipMissSound(): boolean;
        skipHitSound(): boolean;
        toDoubleSup(): $Supplier<$Supplier<$AbstractMinigameModifier>>;
        forceAwardTreasure(): boolean;
        onSpotAdded(arg0: $ActiveSweetSpot): $ActiveSweetSpot;
        skipHitParticles(): boolean;
        renderOnPointer(arg0: $GuiGraphics, arg1: $PoseStack, arg2: number): void;
        renderOnSweetSpot(arg0: $GuiGraphics, arg1: $PoseStack, arg2: $ActiveSweetSpot, arg3: number): void;
        codec(): $MapCodec<$AbstractMinigameModifier>;
        onAdd(arg0: $FishingMinigameScreen): void;
        static MINIGAME_MODIFIER_CODEC: $Codec<$AbstractMinigameModifier>;
        static DOUBLE_SUP_LIST_CODEC: $Codec<$List<$Supplier<$Supplier<$AbstractMinigameModifier>>>>;
        tickCount: number;
        removed: boolean;
        constructor();
        get registryHolder(): $DeferredHolder<$Supplier<$AbstractMinigameModifier>, $Supplier<$AbstractMinigameModifier>>;
        get codecOrThrow(): $MapCodec<$AbstractMinigameModifier>;
        get registryHolderOrThrow(): $DeferredHolder<$Supplier<$AbstractMinigameModifier>, $Supplier<$AbstractMinigameModifier>>;
    }
}
