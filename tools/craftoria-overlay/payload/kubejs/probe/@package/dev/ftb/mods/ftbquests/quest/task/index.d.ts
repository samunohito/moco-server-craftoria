import { $ItemStack_ } from "@package/net/minecraft/world/item";
import { $CompoundTag } from "@package/net/minecraft/nbt";
import { $MutableComponent, $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $TooltipList } from "@package/dev/ftb/mods/ftblibrary/util";
import { $Widget, $Button, $Panel } from "@package/dev/ftb/mods/ftblibrary/ui";
import { $PositionedIngredient } from "@package/dev/ftb/mods/ftblibrary/util/client";
import { $Predicate, $BiConsumer, $BiConsumer_ } from "@package/java/util/function";
import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $Icon } from "@package/dev/ftb/mods/ftblibrary/icon";
import { $Record } from "@package/java/lang";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $QuestObjectBase, $TeamData, $Quest, $QuestObject } from "@package/dev/ftb/mods/ftbquests/quest";

declare module "@package/dev/ftb/mods/ftbquests/quest/task" {
    export class $TaskType {
        getDisplayName(): $Component;
        setDisplayName(name: $Component_): $TaskType;
        getTypeId(): $ResourceLocation;
        getIconSupplier(): $Icon;
        getTypeForNBT(): string;
        createTask(id: number, quest: $Quest): $Task;
        static createTask(id: number, quest: $Quest, typeId: string): $Task;
        setGuiProvider(p: $TaskType$GuiProvider_): $TaskType;
        makeExtraNBT(): $CompoundTag;
        getGuiProvider(): $TaskType$GuiProvider;
        internalId: number;
        get typeId(): $ResourceLocation;
        get iconSupplier(): $Icon;
        get typeForNBT(): string;
    }
    export class $CustomTask$Check {
    }
    export interface $CustomTask$Check {
        check(arg0: $CustomTask$Data_, arg1: $ServerPlayer): void;
    }
    /**
     * Values that may be interpreted as {@link $CustomTask$Check}.
     */
    export type $CustomTask$Check_ = ((arg0: $CustomTask$Data, arg1: $ServerPlayer) => void);
    export class $CustomTask$Data extends $Record {
        task(): $CustomTask;
        getProgress(): number;
        setProgress(l: number): void;
        addProgress(l: number): void;
        teamData(): $TeamData;
        constructor(task: $CustomTask, teamData: $TeamData);
    }
    /**
     * Values that may be interpreted as {@link $CustomTask$Data}.
     */
    export type $CustomTask$Data_ = { teamData?: $TeamData, task?: $CustomTask,  } | [teamData?: $TeamData, task?: $CustomTask, ];
    export class $CustomTask extends $Task {
        setMaxProgress(maxProgress: number): void;
        setCheck(check: $CustomTask$Check_): void;
        setCheckTimer(checkTimer: number): void;
        setEnableButton(enableButton: boolean): void;
        static PREDICATE: $Predicate<$QuestObjectBase>;
        id: number;
        constructor(id: number, quest: $Quest);
        set maxProgress(value: number);
        set check(value: $CustomTask$Check_);
        set checkTimer(value: number);
        set enableButton(value: boolean);
    }
    export class $TaskType$GuiProvider {
    }
    export interface $TaskType$GuiProvider {
        openCreationGui(arg0: $Panel, arg1: $Quest, arg2: $BiConsumer_<$Task, $CompoundTag>): void;
    }
    /**
     * Values that may be interpreted as {@link $TaskType$GuiProvider}.
     */
    export type $TaskType$GuiProvider_ = ((arg0: $Panel, arg1: $Quest, arg2: $BiConsumer<$Task, $CompoundTag>) => void);
    export class $Task extends $QuestObject {
        getType(): $TaskType;
        getIngredient(widget: $Widget): ($PositionedIngredient) | undefined;
        getMaxProgress(): number;
        onButtonClicked(button: $Button, canClick: boolean): void;
        getButtonText(): $MutableComponent;
        canInsertItem(): boolean;
        getQuest(): $Quest;
        addMouseOverHeader(list: $TooltipList, teamData: $TeamData, advanced: boolean): void;
        formatMaxProgress(): string;
        consumesResources(): boolean;
        formatProgress(teamData: $TeamData, progress: number): string;
        checkOnLogin(): boolean;
        addMouseOverText(list: $TooltipList, teamData: $TeamData): void;
        autoSubmitOnPlayerTick(): number;
        addTitleInMouseOverText(): boolean;
        hideProgressNumbers(): boolean;
        drawGUI(teamData: $TeamData, graphics: $GuiGraphics, x: number, y: number, w: number, h: number): void;
        submitTask(teamData: $TeamData, player: $ServerPlayer): void;
        submitTask(teamData: $TeamData, player: $ServerPlayer, craftedItem: $ItemStack_): void;
        submitItemsOnInventoryChange(): boolean;
        id: number;
        constructor(id: number, quest: $Quest);
        get type(): $TaskType;
        get maxProgress(): number;
        get buttonText(): $MutableComponent;
        get quest(): $Quest;
    }
}
