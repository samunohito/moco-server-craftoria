import { $SlotGroup_ } from "@package/aztech/modern_industrialization/inventory";
import { $RegistryFriendlyByteBuf, $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Slot } from "@package/net/minecraft/world/inventory";
import { $Record } from "@package/java/lang";
import { $StreamCodec_, $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/aztech/modern_industrialization/machines/gui" {
    export class $GuiComponentServer<P, D> {
    }
    export interface $GuiComponentServer<P, D> extends $GuiComponent {
        getType(): $GuiComponentServer$Type<P, D>;
        getParams(): P;
        extractData(): D;
        get type(): $GuiComponentServer$Type<P, D>;
        get params(): P;
    }
    export class $GuiComponent {
    }
    export interface $GuiComponent {
        setupMenu(arg0: $GuiComponent$MenuFacade): void;
        set upMenu(value: $GuiComponent$MenuFacade);
    }
    export class $GuiComponent$MenuFacade {
    }
    export interface $GuiComponent$MenuFacade {
        getGuiParams(): $MachineGuiParameters;
        addSlotToMenu(arg0: $Slot, arg1: $SlotGroup_): void;
        get guiParams(): $MachineGuiParameters;
    }
    export class $GuiComponentServer$Type<P, D> extends $Record {
        id(): $ResourceLocation;
        paramsCodec(): $StreamCodec<$RegistryFriendlyByteBuf, P>;
        dataCodec(): $StreamCodec<$RegistryFriendlyByteBuf, D>;
        constructor(id: $ResourceLocation_, paramsCodec: $StreamCodec_<$RegistryFriendlyByteBuf, P>, dataCodec: $StreamCodec_<$RegistryFriendlyByteBuf, D>);
    }
    /**
     * Values that may be interpreted as {@link $GuiComponentServer$Type}.
     */
    export type $GuiComponentServer$Type_<P, D> = { dataCodec?: $StreamCodec_<$RegistryFriendlyByteBuf, any>, paramsCodec?: $StreamCodec_<$RegistryFriendlyByteBuf, any>, id?: $ResourceLocation_,  } | [dataCodec?: $StreamCodec_<$RegistryFriendlyByteBuf, any>, paramsCodec?: $StreamCodec_<$RegistryFriendlyByteBuf, any>, id?: $ResourceLocation_, ];
    export class $MachineGuiParameters {
        write(arg0: $FriendlyByteBuf): void;
        static read(arg0: $FriendlyByteBuf): $MachineGuiParameters;
        blockId: $ResourceLocation;
        playerInventoryX: number;
        playerInventoryY: number;
        lockButton: boolean;
        backgroundHeight: number;
        backgroundWidth: number;
    }
}
