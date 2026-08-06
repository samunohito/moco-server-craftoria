import { $Supplier } from "@package/java/util/function";
import { $EmotePlayer } from "@package/io/github/kosmx/emotes/main/emotePlay";
import { $IEmotePlayerEntity } from "@package/io/github/kosmx/emotes/executor/emotePlayer";
import { $UUID_ } from "@package/java/util";

declare module "@package/io/github/kosmx/emotes/main/mixinFunctions" {
    export class $IPlayerEntity {
        static FPPerspective: number;
        static TPBPerspective: $Supplier<number>;
    }
    export interface $IPlayerEntity extends $IEmotePlayerEntity {
        emoteTick(): void;
        stopEmote(emoteID: $UUID_): void;
        stopEmote(): void;
        initEmotePlay(): void;
        isMainPlayer(): boolean;
        emotes_getAge(): number;
        isPlayingEmote(): boolean;
        emotes_getAndIncreaseAge(): number;
        emotecraft$voidEmote(): void;
        emotecraft$getEmote(): $EmotePlayer;
        initEmotePerspective(emotePlayer: $EmotePlayer): void;
        emotecraft$playerEntersInvalidPose(): void;
        get mainPlayer(): boolean;
        get playingEmote(): boolean;
    }
}
