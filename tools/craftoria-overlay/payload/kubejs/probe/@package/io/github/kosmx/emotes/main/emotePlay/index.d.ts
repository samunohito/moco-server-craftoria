import { $Consumer_ } from "@package/java/util/function";
import { $Layer$Note } from "@package/dev/kosmx/playerAnim/core/data/opennbs/format";
import { $HashMap } from "@package/java/util";
import { $IEmotePlayer } from "@package/io/github/kosmx/emotes/executor/emotePlayer";
import { $KeyframeAnimation } from "@package/dev/kosmx/playerAnim/core/data";
import { $KeyframeAnimationPlayer, $KeyframeAnimationPlayer$BodyPart } from "@package/dev/kosmx/playerAnim/api/layered";

declare module "@package/io/github/kosmx/emotes/main/emotePlay" {
    export class $EmotePlayer extends $KeyframeAnimationPlayer implements $IEmotePlayer {
        isRunning(): boolean;
        static isRunningEmote(emote: $EmotePlayer | null): boolean;
        perspective: number;
        bodyParts: $HashMap<string, $KeyframeAnimationPlayer$BodyPart>;
        constructor(emote: $KeyframeAnimation, noteConsumer: $Consumer_<$Layer$Note>, t: number);
        get running(): boolean;
    }
}
