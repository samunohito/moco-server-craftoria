import { $Codec } from "@package/com/mojang/serialization";
import { $Component } from "@package/net/minecraft/network/chat";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $Enum } from "@package/java/lang";
import { $StringRepresentable } from "@package/net/minecraft/util";

declare module "@package/com/glodblock/github/appflux/common/me/key/type" {
    export class $EnergyType extends $Enum<$EnergyType> implements $StringRepresentable {
        static values(): $EnergyType[];
        static valueOf(arg0: string): $EnergyType;
        from(): string;
        id(): $ResourceLocation;
        getIcon(): $ResourceLocation;
        translate(): $Component;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static CODEC: $Codec<$EnergyType>;
        static GTEU: $EnergyType;
        static FE: $EnergyType;
        get icon(): $ResourceLocation;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $EnergyType}.
     */
    export type $EnergyType_ = "fe" | "gteu";
}
