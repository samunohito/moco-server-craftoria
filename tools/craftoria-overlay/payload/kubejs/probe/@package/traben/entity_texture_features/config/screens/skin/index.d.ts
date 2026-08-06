import { $Component } from "@package/net/minecraft/network/chat";
import { $Enum } from "@package/java/lang";

declare module "@package/traben/entity_texture_features/config/screens/skin" {
    export class $ETFConfigScreenSkinTool$NoseType extends $Enum<$ETFConfigScreenSkinTool$NoseType> {
        static values(): $ETFConfigScreenSkinTool$NoseType[];
        static valueOf(name: string): $ETFConfigScreenSkinTool$NoseType;
        next(): $ETFConfigScreenSkinTool$NoseType;
        appliesTextureOverlay(): boolean;
        getNosePixelColour(): number;
        getButtonText(): $Component;
        getByColorId(id: number): $ETFConfigScreenSkinTool$NoseType;
        static TEXTURED_3: $ETFConfigScreenSkinTool$NoseType;
        static TEXTURED_2: $ETFConfigScreenSkinTool$NoseType;
        static VILLAGER_TEXTURED: $ETFConfigScreenSkinTool$NoseType;
        static TEXTURED_5: $ETFConfigScreenSkinTool$NoseType;
        static TEXTURED_4: $ETFConfigScreenSkinTool$NoseType;
        static TEXTURED_1: $ETFConfigScreenSkinTool$NoseType;
        static VILLAGER_REMOVE: $ETFConfigScreenSkinTool$NoseType;
        static VILLAGER_TEXTURED_REMOVE: $ETFConfigScreenSkinTool$NoseType;
        id: number;
        static NONE: $ETFConfigScreenSkinTool$NoseType;
        static VILLAGER: $ETFConfigScreenSkinTool$NoseType;
        get nosePixelColour(): number;
        get buttonText(): $Component;
    }
    /**
     * Values that may be interpreted as {@link $ETFConfigScreenSkinTool$NoseType}.
     */
    export type $ETFConfigScreenSkinTool$NoseType_ = "villager" | "villager_textured" | "villager_remove" | "villager_textured_remove" | "textured_1" | "textured_2" | "textured_3" | "textured_4" | "textured_5" | "none";
}
