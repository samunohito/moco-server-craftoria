import { $IGuiInputElement, $ISubGuiBox, $IGuiInputElementValueType } from "@package/org/cyclops/integrateddynamics/api/client/gui/subgui";
import { $Container } from "@package/net/minecraft/world";
import { $ItemStack, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $IValueType, $IValue } from "@package/org/cyclops/integrateddynamics/api/evaluate/variable";
import { $Screen } from "@package/net/minecraft/client/gui/screens";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $IVariableFacade } from "@package/org/cyclops/integrateddynamics/api/item";
import { $Slot, $AbstractContainerMenu, $ClickType_ } from "@package/net/minecraft/world/inventory";
import { $List } from "@package/java/util";

declare module "@package/org/cyclops/integrateddynamics/api/logicprogrammer" {
    export class $ILogicProgrammerElementType<E extends $ILogicProgrammerElement<any, any, any>> {
    }
    export interface $ILogicProgrammerElementType<E extends $ILogicProgrammerElement<any, any, any>> {
        getName(arg0: E): $ResourceLocation;
        getByName(arg0: $ResourceLocation_): E;
        getUniqueName(): $ResourceLocation;
        createElements(): $List<E>;
        get uniqueName(): $ResourceLocation;
    }
    export class $IValueTypeLogicProgrammerElement<S extends $ISubGuiBox, G extends $Screen, C extends $AbstractContainerMenu> {
    }
    export interface $IValueTypeLogicProgrammerElement<S extends $ISubGuiBox, G extends $Screen, C extends $AbstractContainerMenu> extends $ILogicProgrammerElement<S, G, C> {
        getValue(): $IValue;
        setValue(arg0: $IValue): void;
        getValueType(): $IValueType<never>;
        createInnerGuiElement<G2 extends $Screen, C2 extends $AbstractContainerMenu>(): $IGuiInputElementValueType<never, G2, C2>;
        get valueType(): $IValueType<never>;
    }
    export class $ILogicProgrammerElement<S extends $ISubGuiBox, G extends $Screen, C extends $AbstractContainerMenu> {
        static createSlotDefault(arg0: $ILogicProgrammerElement<any, any, any>, arg1: $Container, arg2: number, arg3: number, arg4: number): $Slot;
    }
    export interface $ILogicProgrammerElement<S extends $ISubGuiBox, G extends $Screen, C extends $AbstractContainerMenu> extends $IGuiInputElement<S, G, C> {
        getType(): $ILogicProgrammerElementType<any>;
        createSlot(arg0: $Container, arg1: number, arg2: number, arg3: number): $Slot;
        setFocused(arg0: S, arg1: boolean): void;
        isFocused(arg0: S): boolean;
        isFor(arg0: $IVariableFacade): boolean;
        isItemValidForSlot(arg0: number, arg1: $ItemStack_): boolean;
        writeElement(arg0: $Player, arg1: $ItemStack_): $ItemStack;
        loadElement(arg0: $IVariableFacade): void;
        slotClick(arg0: number, arg1: $Slot, arg2: number, arg3: $ClickType_, arg4: $Player): boolean;
        canCurrentlyReadFromOtherItem(): boolean;
        matchesOutput(arg0: $IValueType<never>): boolean;
        onInputSlotUpdated(arg0: $Player, arg1: number, arg2: $ItemStack_): void;
        setValueInGui(arg0: S): void;
        getMatchString(): string;
        canWriteElementPre(): boolean;
        matchesInput(arg0: $IValueType<never>): boolean;
        setValueInContainer(arg0: C): void;
        getItemStackSizeLimit(): number;
        get type(): $ILogicProgrammerElementType<any>;
        set valueInGui(value: S);
        get matchString(): string;
        set valueInContainer(value: C);
        get itemStackSizeLimit(): number;
    }
}
