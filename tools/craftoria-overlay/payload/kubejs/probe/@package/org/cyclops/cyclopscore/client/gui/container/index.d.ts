import { $ItemStack } from "@package/net/minecraft/world/item";
import { $IValueNotifiable } from "@package/org/cyclops/cyclopscore/inventory";
import { $PanoramaRenderer } from "@package/net/minecraft/client/renderer";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $NarratableEntry } from "@package/net/minecraft/client/gui/narration";
import { $Component, $Component_ } from "@package/net/minecraft/network/chat";
import { $Renderable } from "@package/net/minecraft/client/gui/components";
import { $Inventory } from "@package/net/minecraft/world/entity/player";
import { $List, $List_ } from "@package/java/util";
import { $AbstractContainerScreen } from "@package/net/minecraft/client/gui/screens/inventory";
import { $Screen$DeferredTooltipRendering } from "@package/net/minecraft/client/gui/screens";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $Point, $Rectangle } from "@package/java/awt";
import { $Slot, $MenuType } from "@package/net/minecraft/world/inventory";
import { $ContainerExtended } from "@package/org/cyclops/cyclopscore/inventory/container";
import { $Font } from "@package/net/minecraft/client/gui";

declare module "@package/org/cyclops/cyclopscore/client/gui/container" {
    /**
     * @deprecated
     */
    export class $ContainerScreenExtended<T extends $ContainerExtended> extends $AbstractContainerScreen<T> implements $IValueNotifiable {
        init(): void;
        isPointInRegion(arg0: $Rectangle, arg1: $Point): boolean;
        drawTooltip(arg0: $List_<$Component_>, arg1: $PoseStack, arg2: number, arg3: number): void;
        getGuiTexture(): $ResourceLocation;
        onUpdate(arg0: number, arg1: $CompoundTag_): void;
        isHovering(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): boolean;
        getValueNotifiableType(): $MenuType<never>;
        getGuiLeftTotal(): number;
        getGuiTopTotal(): number;
        leftPos: number;
        static MENU_BACKGROUND: $ResourceLocation;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        clickedSlot: $Slot;
        title: $Component;
        snapbackStartY: number;
        renderables: $List<$Renderable>;
        hoveredSlot: $Slot;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        isSplittingStack: boolean;
        snapbackItem: $ItemStack;
        static PANORAMA: $PanoramaRenderer;
        snapbackStartX: number;
        static INVENTORY_LOCATION: $ResourceLocation;
        snapbackTime: number;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        imageWidth: number;
        snapbackEnd: $Slot;
        draggingItem: $ItemStack;
        static SLOT_ITEM_BLIT_OFFSET: number;
        quickCraftingRemainder: number;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        skipNextRelease: boolean;
        static FOOTER_SEPARATOR: $ResourceLocation;
        imageHeight: number;
        quickCraftingType: number;
        narratables: $List<$NarratableEntry>;
        width: number;
        topPos: number;
        font: $Font;
        constructor(arg0: T, arg1: $Inventory, arg2: $Component_);
        get guiTexture(): $ResourceLocation;
        get valueNotifiableType(): $MenuType<never>;
        get guiLeftTotal(): number;
        get guiTopTotal(): number;
    }
}
