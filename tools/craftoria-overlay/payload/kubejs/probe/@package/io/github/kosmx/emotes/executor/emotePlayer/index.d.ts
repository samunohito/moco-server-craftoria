import { $UUID_, $UUID } from "@package/java/util";
import { $KeyframeAnimation } from "@package/dev/kosmx/playerAnim/core/data";
import { $Vec3d } from "@package/dev/kosmx/playerAnim/core/util";

declare module "@package/io/github/kosmx/emotes/executor/emotePlayer" {
    export class $IEmotePlayerEntity {
    }
    export interface $IEmotePlayerEntity {
        emoteTick(): void;
        stopEmote(): void;
        stopEmote(arg0: $UUID_): void;
        emoteTickCallback(): void;
        isMainPlayer(): boolean;
        emotes_getUUID(): $UUID;
        isPlayingEmote(): boolean;
        emotecraft$playEmote(arg0: $KeyframeAnimation, arg1: number, arg2: boolean): void;
        emotecraft$getEmote(): $IEmotePlayer;
        emotecraft$emotesGetPos(): $Vec3d;
        emotecraft$getPrevPos(): $Vec3d;
        emotecraft$isNotStanding(): boolean;
        emotecraft$setBodyYaw(arg0: number): void;
        emotecraft$getBodyYaw(): number;
        emotecraft$getViewYaw(): number;
        emotecraft$isForcedEmote(): boolean;
        emoteStartPlayCallback(): void;
        emotecraft$playerEntersInvalidPose(): void;
        get mainPlayer(): boolean;
        get playingEmote(): boolean;
    }
    export class $IEmotePlayer {
        static isRunningEmote(emotePlayer: $IEmotePlayer): boolean;
    }
    export interface $IEmotePlayer {
        getData(): $KeyframeAnimation;
        tick(): void;
        isLoopStarted(): boolean;
        isRunning(): boolean;
        getTick(): number;
        get data(): $KeyframeAnimation;
        get loopStarted(): boolean;
        get running(): boolean;
    }
}
