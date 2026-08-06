import { $Direction_, $Direction } from "@package/net/minecraft/core";
import { $IModuleFlags } from "@package/me/desht/modularrouters/api/matching";
import { $Codec } from "@package/com/mojang/serialization";
import { $ItemStack_ } from "@package/net/minecraft/world/item";
import { $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $TranslatableEnum } from "@package/me/desht/modularrouters/util";
import { $Enum, $Record } from "@package/java/lang";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $StringRepresentable } from "@package/net/minecraft/util";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/me/desht/modularrouters/logic/settings" {
    export class $ModuleSettings extends $Record {
        flags(): $ModuleFlags;
        termination(): $ModuleTermination;
        facing(): $RelativeDirection;
        redstoneBehaviour(): $RedstoneBehaviour;
        regulatorAmount(): number;
        static CODEC: $Codec<$ModuleSettings>;
        static DEFAULT: $ModuleSettings;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ModuleSettings>;
        constructor(flags: $ModuleFlags_, facing: $RelativeDirection_, termination: $ModuleTermination_, redstoneBehaviour: $RedstoneBehaviour_, regulatorAmount: number);
    }
    /**
     * Values that may be interpreted as {@link $ModuleSettings}.
     */
    export type $ModuleSettings_ = { facing?: $RelativeDirection_, redstoneBehaviour?: $RedstoneBehaviour_, regulatorAmount?: number, flags?: $ModuleFlags_, termination?: $ModuleTermination_,  } | [facing?: $RelativeDirection_, redstoneBehaviour?: $RedstoneBehaviour_, regulatorAmount?: number, flags?: $ModuleFlags_, termination?: $ModuleTermination_, ];
    export class $ModuleTermination extends $Enum<$ModuleTermination> implements $TranslatableEnum, $StringRepresentable {
        static values(): $ModuleTermination[];
        static valueOf(arg0: string): $ModuleTermination;
        getSerializedName(): string;
        getTranslationKey(): string;
        getRemappedEnumConstantName(): string;
        static NOT_RAN: $ModuleTermination;
        static NONE: $ModuleTermination;
        static RAN: $ModuleTermination;
        get serializedName(): string;
        get translationKey(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $ModuleTermination}.
     */
    export type $ModuleTermination_ = "none" | "ran" | "not_ran";
    export class $ModuleFlags extends $Record implements $IModuleFlags {
        matchComponents(): boolean;
        whiteList(): boolean;
        static forItem(arg0: $ItemStack_): $ModuleFlags;
        matchAllItems(): boolean;
        matchItemTags(): boolean;
        matchDamage(): boolean;
        static CODEC: $Codec<$ModuleFlags>;
        static DEFAULT: $ModuleFlags;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $ModuleFlags>;
        constructor(whiteList: boolean, matchDamage: boolean, matchComponents: boolean, matchItemTags: boolean, matchAllItems: boolean);
    }
    /**
     * Values that may be interpreted as {@link $ModuleFlags}.
     */
    export type $ModuleFlags_ = { matchItemTags?: boolean, matchComponents?: boolean, whiteList?: boolean, matchAllItems?: boolean, matchDamage?: boolean,  } | [matchItemTags?: boolean, matchComponents?: boolean, whiteList?: boolean, matchAllItems?: boolean, matchDamage?: boolean, ];
    export class $RelativeDirection extends $Enum<$RelativeDirection> implements $StringRepresentable, $TranslatableEnum {
        static values(): $RelativeDirection[];
        static valueOf(arg0: string): $RelativeDirection;
        getSymbol(): string;
        toAbsolute(arg0: $Direction_): $Direction;
        getSerializedName(): string;
        getTranslationKey(): string;
        getTextureY(): number;
        getTextureX(arg0: boolean): number;
        getRemappedEnumConstantName(): string;
        static DOWN: $RelativeDirection;
        static LEFT: $RelativeDirection;
        static RIGHT: $RelativeDirection;
        static FRONT: $RelativeDirection;
        static BACK: $RelativeDirection;
        static UP: $RelativeDirection;
        static NONE: $RelativeDirection;
        get symbol(): string;
        get serializedName(): string;
        get translationKey(): string;
        get textureY(): number;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $RelativeDirection}.
     */
    export type $RelativeDirection_ = "none" | "down" | "up" | "left" | "right" | "front" | "back";
    export class $RedstoneBehaviour extends $Enum<$RedstoneBehaviour> implements $TranslatableEnum, $StringRepresentable {
        static values(): $RedstoneBehaviour[];
        static valueOf(arg0: string): $RedstoneBehaviour;
        shouldRun(arg0: boolean, arg1: boolean): boolean;
        static forValue(arg0: string): $RedstoneBehaviour;
        getSerializedName(): string;
        getTranslationKey(): string;
        getRemappedEnumConstantName(): string;
        static HIGH: $RedstoneBehaviour;
        static LOW: $RedstoneBehaviour;
        static PULSE: $RedstoneBehaviour;
        static NEVER: $RedstoneBehaviour;
        static ALWAYS: $RedstoneBehaviour;
        get serializedName(): string;
        get translationKey(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $RedstoneBehaviour}.
     */
    export type $RedstoneBehaviour_ = "always" | "low" | "high" | "never" | "pulse";
    export class $TransferDirection extends $Enum<$TransferDirection> implements $TranslatableEnum, $StringRepresentable {
        static values(): $TransferDirection[];
        static valueOf(arg0: string): $TransferDirection;
        getSymbol(): string;
        getSerializedName(): string;
        getTranslationKey(): string;
        getRemappedEnumConstantName(): string;
        static TO_ROUTER: $TransferDirection;
        static FROM_ROUTER: $TransferDirection;
        get symbol(): string;
        get serializedName(): string;
        get translationKey(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $TransferDirection}.
     */
    export type $TransferDirection_ = "to_router" | "from_router";
}
