import { $ItemStack_, $ItemStack, $TooltipFlag } from "@package/net/minecraft/world/item";
import { $ValueDeseralizationContext_ } from "@package/org/cyclops/integrateddynamics/api/evaluate/variable";
import { $Pair } from "@package/org/apache/commons/lang3/tuple";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $Button } from "@package/net/minecraft/client/gui/components";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $List, $Set_, $List_ } from "@package/java/util";
import { $ContainerScreenTerminalStorage, $ContainerScreenTerminalStorage$DrawLayer_, $ContainerScreenTerminalStorage$DrawLayer } from "@package/org/cyclops/integratedterminals/client/gui/container";
import { $Container } from "@package/net/minecraft/world";
import { $HolderLookup$Provider, $NonNullList } from "@package/net/minecraft/core";
import { $AbstractContainerScreen } from "@package/net/minecraft/client/gui/screens/inventory";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Slot, $AbstractContainerMenu } from "@package/net/minecraft/world/inventory";
import { $Record } from "@package/java/lang";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";
export * as event from "@package/org/cyclops/integratedterminals/api/terminalstorage/event";
export * as crafting from "@package/org/cyclops/integratedterminals/api/terminalstorage/crafting";
export * as location from "@package/org/cyclops/integratedterminals/api/terminalstorage/location";

declare module "@package/org/cyclops/integratedterminals/api/terminalstorage" {
    export class $ITerminalButton<C extends $ITerminalStorageTabClient<any>, O extends $ITerminalStorageTabCommon, B extends $Button> {
    }
    export interface $ITerminalButton<C extends $ITerminalStorageTabClient<any>, O extends $ITerminalStorageTabCommon, B extends $Button> {
        getX(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): number;
        getY(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): number;
        getTooltip(arg0: $Player, arg1: $TooltipFlag, arg2: $List_<$Component_>): void;
        createButton(arg0: number, arg1: number): B;
        onClick(arg0: C, arg1: O | null, arg2: B, arg3: number, arg4: number): void;
        getTranslationKey(): string;
        isInLeftColumn(): boolean;
        reloadFromState(): void;
        get translationKey(): string;
        get inLeftColumn(): boolean;
    }
    export class $ITerminalStorageTabCommon {
    }
    export interface $ITerminalStorageTabCommon {
        getName(): $ResourceLocation;
        onUpdate(arg0: $AbstractContainerMenu, arg1: $Player, arg2: ($ITerminalStorageTabCommon$IVariableInventory) | undefined): void;
        loadSlots(arg0: $AbstractContainerMenu, arg1: number, arg2: $Player, arg3: ($ITerminalStorageTabCommon$IVariableInventory) | undefined, arg4: $ValueDeseralizationContext_): $List<$Pair<$Slot, $ITerminalStorageTabCommon$ISlotPositionCallback>>;
        get name(): $ResourceLocation;
    }
    /**
     * Values that may be interpreted as {@link $ITerminalStorageTabCommon}.
     */
    export type $ITerminalStorageTabCommon_ = (() => $ResourceLocation_);
    export class $ITerminalStorageTabCommon$SlotPositionFactors extends $Record {
        offsetY(): number;
        offsetX(): number;
        playerInventoryOffsetX(): number;
        playerInventoryOffsetY(): number;
        gridXSize(): number;
        gridYSize(): number;
        constructor(offsetX: number, offsetY: number, gridXSize: number, gridYSize: number, playerInventoryOffsetX: number, playerInventoryOffsetY: number);
    }
    /**
     * Values that may be interpreted as {@link $ITerminalStorageTabCommon$SlotPositionFactors}.
     */
    export type $ITerminalStorageTabCommon$SlotPositionFactors_ = { playerInventoryOffsetX?: number, offsetY?: number, offsetX?: number, gridYSize?: number, gridXSize?: number, playerInventoryOffsetY?: number,  } | [playerInventoryOffsetX?: number, offsetY?: number, offsetX?: number, gridYSize?: number, gridXSize?: number, playerInventoryOffsetY?: number, ];
    export class $ITerminalRowColumnProvider {
    }
    export interface $ITerminalRowColumnProvider {
        getRowsAndColumns(): $ITerminalRowColumnProvider$RowsAndColumns;
        get rowsAndColumns(): $ITerminalRowColumnProvider$RowsAndColumns;
    }
    /**
     * Values that may be interpreted as {@link $ITerminalRowColumnProvider}.
     */
    export type $ITerminalRowColumnProvider_ = (() => $ITerminalRowColumnProvider$RowsAndColumns_);
    export class $ITerminalStorageTabClient<S extends $ITerminalStorageSlot> {
        static DEFAULT_SLOT_OFFSET_Y: number;
        static DEFAULT_SLOT_VISIBLE_ROWS: number;
        static DEFAULT_SLOT_OFFSET_X: number;
        static DEFAULT_SLOT_ROW_LENGTH: number;
    }
    export interface $ITerminalStorageTabClient<S extends $ITerminalStorageSlot> {
        getName(): $ResourceLocation;
        isEnabled(): boolean;
        getIcon(): $ItemStack;
        onSelect(arg0: number): void;
        getStatus(arg0: number): string;
        getBackgroundTexture(): $ResourceLocation;
        onDeselect(arg0: number): void;
        getSlots(arg0: number, arg1: number, arg2: number): $List<S>;
        getTooltip(): $List<$Component>;
        getChannels(): number[];
        handleClick(arg0: $AbstractContainerMenu, arg1: number, arg2: number, arg3: number, arg4: boolean, arg5: boolean, arg6: number, arg7: boolean): boolean;
        getButtons(): $List<$ITerminalButton<never, never, never>>;
        getSlotCount(arg0: number): number;
        setInstanceFilter(arg0: number, arg1: string): void;
        getSlotOffsetY(): number;
        getSlotOffsetX(): number;
        getTabSettingsName(): $ResourceLocation;
        getSlotRowLength(): number;
        getSlotVisibleRows(): number;
        getInstanceFilter(arg0: number): string;
        dragIntoSlot(arg0: $AbstractContainerMenu, arg1: number, arg2: $Slot, arg3: number, arg4: boolean): number;
        resetActiveSlot(): void;
        handleScroll(arg0: $AbstractContainerMenu, arg1: number, arg2: number, arg3: number, arg4: boolean, arg5: boolean, arg6: number): boolean;
        getActiveSlotId(): number;
        onCommonSlotRender(arg0: $AbstractContainerScreen<any>, arg1: $GuiGraphics, arg2: $ContainerScreenTerminalStorage$DrawLayer_, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: $ITerminalStorageTabCommon_): void;
        isQuickMovePrevented(arg0: $Slot): boolean;
        isQuickMovePrevented(arg0: number): boolean;
        getActiveSlotQuantity(): number;
        computeDraggingQuantity(arg0: $Set_<$Slot>, arg1: number, arg2: $ItemStack_, arg3: number): number;
        isSlotValidForDraggingInto(arg0: number, arg1: $Slot): boolean;
        getPlayerInventoryOffsetX(): number;
        getPlayerInventoryOffsetY(): number;
        setActiveSlotQuantity(arg0: number): void;
        getRowColumnProvider(): $ITerminalRowColumnProvider;
        onTabBackgroundRender(arg0: $ContainerScreenTerminalStorage<never, never>, arg1: $GuiGraphics, arg2: number, arg3: number, arg4: number): void;
        get name(): $ResourceLocation;
        get enabled(): boolean;
        get icon(): $ItemStack;
        get backgroundTexture(): $ResourceLocation;
        get tooltip(): $List<$Component>;
        get channels(): number[];
        get buttons(): $List<$ITerminalButton<never, never, never>>;
        get slotOffsetY(): number;
        get slotOffsetX(): number;
        get tabSettingsName(): $ResourceLocation;
        get slotRowLength(): number;
        get slotVisibleRows(): number;
        get activeSlotId(): number;
        get playerInventoryOffsetX(): number;
        get playerInventoryOffsetY(): number;
        get rowColumnProvider(): $ITerminalRowColumnProvider;
    }
    export class $ITerminalStorageTabCommon$IVariableInventory {
    }
    export interface $ITerminalStorageTabCommon$IVariableInventory {
        getNamedInventory(arg0: string, arg1: $HolderLookup$Provider): $NonNullList<$ItemStack>;
        loadNamedInventory(arg0: string, arg1: $Container, arg2: $HolderLookup$Provider): void;
        saveNamedInventory(arg0: string, arg1: $Container, arg2: $HolderLookup$Provider): void;
        setNamedInventory(arg0: string, arg1: $NonNullList<$ItemStack_>, arg2: $HolderLookup$Provider): void;
    }
    export class $ITerminalStorageTabServer {
    }
    export interface $ITerminalStorageTabServer {
        getName(): $ResourceLocation;
        init(): void;
        updateActive(): void;
        deInit(): void;
        get name(): $ResourceLocation;
    }
    export class $ITerminalStorageTabCommon$ISlotPositionCallback {
    }
    export interface $ITerminalStorageTabCommon$ISlotPositionCallback {
        getSlotPosition(arg0: $ITerminalStorageTabCommon$SlotPositionFactors_): $Pair<number, number>;
    }
    /**
     * Values that may be interpreted as {@link $ITerminalStorageTabCommon$ISlotPositionCallback}.
     */
    export type $ITerminalStorageTabCommon$ISlotPositionCallback_ = ((arg0: $ITerminalStorageTabCommon$SlotPositionFactors) => $Pair<number, number>);
    export class $ITerminalRowColumnProvider$RowsAndColumns extends $Record {
        rows(): number;
        columns(): number;
        constructor(rows: number, columns: number);
    }
    /**
     * Values that may be interpreted as {@link $ITerminalRowColumnProvider$RowsAndColumns}.
     */
    export type $ITerminalRowColumnProvider$RowsAndColumns_ = { rows?: number, columns?: number,  } | [rows?: number, columns?: number, ];
    export class $ITerminalStorageSlot {
    }
    export interface $ITerminalStorageSlot {
        drawGuiContainerLayer(arg0: $AbstractContainerScreen<any>, arg1: $GuiGraphics, arg2: $ContainerScreenTerminalStorage$DrawLayer_, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: $ITerminalStorageTabClient<any>, arg9: number, arg10: string | null): void;
    }
    /**
     * Values that may be interpreted as {@link $ITerminalStorageSlot}.
     */
    export type $ITerminalStorageSlot_ = ((arg0: $AbstractContainerScreen<any>, arg1: $GuiGraphics, arg2: $ContainerScreenTerminalStorage$DrawLayer, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: $ITerminalStorageTabClient<any>, arg9: number, arg10: string) => void);
}
