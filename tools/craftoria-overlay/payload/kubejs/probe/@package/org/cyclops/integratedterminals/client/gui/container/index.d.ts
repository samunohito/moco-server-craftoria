import { $ItemStack } from "@package/net/minecraft/world/item";
import { $PanoramaRenderer, $Rect2i } from "@package/net/minecraft/client/renderer";
import { $ITerminalStorageTabClient } from "@package/org/cyclops/integratedterminals/api/terminalstorage";
import { $NarratableEntry } from "@package/net/minecraft/client/gui/narration";
import { $Component, $Component_ } from "@package/net/minecraft/network/chat";
import { $Renderable } from "@package/net/minecraft/client/gui/components";
import { $Inventory } from "@package/net/minecraft/world/entity/player";
import { $ContainerScreenExtended } from "@package/org/cyclops/cyclopscore/client/gui/container";
import { $List } from "@package/java/util";
import { $ContainerTerminalStorageBase } from "@package/org/cyclops/integratedterminals/inventory/container";
import { $Screen$DeferredTooltipRendering } from "@package/net/minecraft/client/gui/screens";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $WidgetTextFieldExtended } from "@package/org/cyclops/cyclopscore/client/gui/component/input";
import { $Slot } from "@package/net/minecraft/world/inventory";
import { $Enum } from "@package/java/lang";
import { $Font, $GuiGraphics } from "@package/net/minecraft/client/gui";

declare module "@package/org/cyclops/integratedterminals/client/gui/container" {
    export class $ContainerScreenTerminalStorage<L, C extends $ContainerTerminalStorageBase<L>> extends $ContainerScreenExtended<C> {
        getMenu(): C;
        containerTick(): void;
        getSelectedClientTab(): ($ITerminalStorageTabClient<never>) | undefined;
        getFieldSearch(): $WidgetTextFieldExtended;
        getStorageSlotIndexAtPosition(arg0: number, arg1: number): number;
        getBaseXSize(): number;
        getGridXSize(): number;
        getGridYSize(): number;
        getBaseYSize(): number;
        getScrollHeight(): number;
        getSearchWidth(): number;
        getStorageSlotRect(arg0: number): $Rect2i;
        static blitRescalable(arg0: $GuiGraphics, arg1: $ResourceLocation_, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number, arg12: number): void;
        repositionInventorySlots(): void;
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
        constructor(arg0: C, arg1: $Inventory, arg2: $Component_);
        get menu(): C;
        get selectedClientTab(): ($ITerminalStorageTabClient<never>) | undefined;
        get fieldSearch(): $WidgetTextFieldExtended;
        get baseXSize(): number;
        get gridXSize(): number;
        get gridYSize(): number;
        get baseYSize(): number;
        get scrollHeight(): number;
        get searchWidth(): number;
    }
    export class $ContainerScreenTerminalStorage$DrawLayer extends $Enum<$ContainerScreenTerminalStorage$DrawLayer> {
        static values(): $ContainerScreenTerminalStorage$DrawLayer[];
        static valueOf(arg0: string): $ContainerScreenTerminalStorage$DrawLayer;
        static FOREGROUND: $ContainerScreenTerminalStorage$DrawLayer;
        static BACKGROUND: $ContainerScreenTerminalStorage$DrawLayer;
    }
    /**
     * Values that may be interpreted as {@link $ContainerScreenTerminalStorage$DrawLayer}.
     */
    export type $ContainerScreenTerminalStorage$DrawLayer_ = "background" | "foreground";
}
