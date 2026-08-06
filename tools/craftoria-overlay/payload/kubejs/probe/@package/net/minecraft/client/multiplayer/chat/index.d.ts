import { $Instant } from "@package/java/time";
import { $BooleanSupplier, $BooleanSupplier_ } from "@package/java/util/function";
import { $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { $MessageSignature_, $Component_, $PlayerChatMessage, $ChatType$Bound_, $Component, $PlayerChatMessage_ } from "@package/net/minecraft/network/chat";
import { $GameProfile } from "@package/com/mojang/authlib";
import { $CallbackInfo, $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $Minecraft, $GuiMessageTag } from "@package/net/minecraft/client";
import { $Enum, $Record } from "@package/java/lang";
import { $UUID, $UUID_ } from "@package/java/util";
import { $StringRepresentable } from "@package/net/minecraft/util";
export * as report from "@package/net/minecraft/client/multiplayer/chat/report";

declare module "@package/net/minecraft/client/multiplayer/chat" {
    export class $LoggedChatMessage$Player extends $Record implements $LoggedChatMessage {
        type(): $LoggedChatEvent$Type;
        profile(): $GameProfile;
        message(): $PlayerChatMessage;
        profileId(): $UUID;
        canReport(uuid: $UUID_): boolean;
        toNarrationComponent(): $Component;
        trustLevel(): $ChatTrustLevel;
        toHeadingComponent(): $Component;
        toContentComponent(): $Component;
        static CODEC: $MapCodec<$LoggedChatMessage$Player>;
        constructor(arg0: $GameProfile, arg1: $PlayerChatMessage_, arg2: $ChatTrustLevel_);
    }
    /**
     * Values that may be interpreted as {@link $LoggedChatMessage$Player}.
     */
    export type $LoggedChatMessage$Player_ = { trustLevel?: $ChatTrustLevel_, profile?: $GameProfile, message?: $PlayerChatMessage_,  } | [trustLevel?: $ChatTrustLevel_, profile?: $GameProfile, message?: $PlayerChatMessage_, ];
    export class $LoggedChatEvent$Type extends $Enum<$LoggedChatEvent$Type> implements $StringRepresentable {
        static values(): $LoggedChatEvent$Type[];
        static valueOf(arg0: string): $LoggedChatEvent$Type;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static PLAYER: $LoggedChatEvent$Type;
        static SYSTEM: $LoggedChatEvent$Type;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $LoggedChatEvent$Type}.
     */
    export type $LoggedChatEvent$Type_ = "player" | "system";
    export class $ChatTrustLevel extends $Enum<$ChatTrustLevel> implements $StringRepresentable {
        static values(): $ChatTrustLevel[];
        static valueOf(arg0: string): $ChatTrustLevel;
        static evaluate(chatMessage: $PlayerChatMessage_, decoratedServerContent: $Component_, timestamp: $Instant): $ChatTrustLevel;
        createTag(chatMessage: $PlayerChatMessage_): $GuiMessageTag;
        getSerializedName(): string;
        isNotSecure(): boolean;
        getRemappedEnumConstantName(): string;
        static CODEC: $Codec<$ChatTrustLevel>;
        static SECURE: $ChatTrustLevel;
        static MODIFIED: $ChatTrustLevel;
        static NOT_SECURE: $ChatTrustLevel;
        get serializedName(): string;
        get notSecure(): boolean;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $ChatTrustLevel}.
     */
    export type $ChatTrustLevel_ = "secure" | "modified" | "not_secure";
    export class $ChatListener {
        queueSize(): number;
        tick(): void;
        acceptNextDelayedMessage(): void;
        setMessageDelay(delaySeconds: number): void;
        handleSystemMessage(message: $Component_, isOverlay: boolean): void;
        clearQueue(): void;
        handleChatMessageError(sender: $UUID_, boundChatType: $ChatType$Bound_): void;
        handleDisguisedChatMessage(message: $Component_, boundChatType: $ChatType$Bound_): void;
        handlePlayerChatMessage(chatMessage: $PlayerChatMessage_, gameProfile: $GameProfile, boundChatType: $ChatType$Bound_): void;
        handler$hec001$xaeroworldmap$onHandleSystemChat(arg0: $Component_, arg1: boolean, arg2: $CallbackInfo): void;
        handler$ghg000$xaerominimap$onHandleSystemChat(arg0: $Component_, arg1: boolean, arg2: $CallbackInfo): void;
        removeFromDelayedMessageQueue(signature: $MessageSignature_): boolean;
        handler$ghg000$xaerominimap$onHandleDisguisedChatMessag(arg0: $Component_, arg1: $ChatType$Bound_, arg2: $CallbackInfo): void;
        handler$hec001$xaeroworldmap$onHandleDisguisedChatMessag(arg0: $Component_, arg1: $ChatType$Bound_, arg2: $CallbackInfo): void;
        handler$fef000$chat_heads$chatheads$handleAddedSystemMessage(message: $Component_, bl: boolean, ci: $CallbackInfo): void;
        modify$feo000$chat_heads$chatheads$handleAddedDisguisedMessage(original: $BooleanSupplier_, undecoratedMessage: $Component_, bound: $ChatType$Bound_): $BooleanSupplier;
        handler$fef000$chat_heads$chatheads$handleAddedPlayerMessage(bound: $ChatType$Bound_, playerChatMessage: $PlayerChatMessage_, message: $Component_, gameProfile: $GameProfile, bl: boolean, instant: $Instant, cir: $CallbackInfoReturnable<any>): void;
        constructor(minecraft: $Minecraft);
        set messageDelay(value: number);
    }
    export class $LoggedChatMessage {
        static system(message: $Component_, timestamp: $Instant): $LoggedChatMessage$System;
        static player(profile: $GameProfile, message: $PlayerChatMessage_, trustLevel: $ChatTrustLevel_): $LoggedChatMessage$Player;
    }
    export interface $LoggedChatMessage extends $LoggedChatEvent {
        canReport(uuid: $UUID_): boolean;
        toNarrationComponent(): $Component;
        toContentComponent(): $Component;
    }
    export class $ChatListener$Message extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $ChatListener$Message}.
     */
    export type $ChatListener$Message_ = { signature?: $MessageSignature_, handler?: $BooleanSupplier_,  } | [signature?: $MessageSignature_, handler?: $BooleanSupplier_, ];
    export class $LoggedChatMessage$System extends $Record implements $LoggedChatMessage {
        type(): $LoggedChatEvent$Type;
        message(): $Component;
        timeStamp(): $Instant;
        canReport(uuid: $UUID_): boolean;
        toContentComponent(): $Component;
        toNarrationComponent(): $Component;
        static CODEC: $MapCodec<$LoggedChatMessage$System>;
        constructor(arg0: $Component_, arg1: $Instant);
    }
    /**
     * Values that may be interpreted as {@link $LoggedChatMessage$System}.
     */
    export type $LoggedChatMessage$System_ = { message?: $Component_, timeStamp?: $Instant,  } | [message?: $Component_, timeStamp?: $Instant, ];
    export class $LoggedChatEvent {
        static CODEC: $Codec<$LoggedChatEvent>;
    }
    export interface $LoggedChatEvent {
        type(): $LoggedChatEvent$Type;
    }
    /**
     * Values that may be interpreted as {@link $LoggedChatEvent}.
     */
    export type $LoggedChatEvent_ = (() => $LoggedChatEvent$Type_);
    export class $ChatLog {
        end(): number;
        lookup(id: number): $LoggedChatEvent;
        start(): number;
        push(event: $LoggedChatEvent_): void;
        static codec(size: number): $Codec<$ChatLog>;
        constructor(size: number);
    }
}
