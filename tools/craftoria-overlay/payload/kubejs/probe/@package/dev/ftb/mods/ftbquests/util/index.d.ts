import { $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $UUID_, $Date, $UUID } from "@package/java/util";
import { $QuestObjectBase } from "@package/dev/ftb/mods/ftbquests/quest";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/dev/ftb/mods/ftbquests/util" {
    export class $ProgressChange {
        getDate(): $Date;
        shouldNotify(): boolean;
        shouldReset(): boolean;
        getPlayerId(): $UUID;
        static createServerSide(origin: number, reset: boolean, playerId: $UUID_, notifications: boolean): $ProgressChange;
        withNotifications(): $ProgressChange;
        setReset(reset: boolean): $ProgressChange;
        maybeForceProgress(teamId: $UUID_): void;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ProgressChange>;
        constructor(origin: $QuestObjectBase, playerId: $UUID_);
        get date(): $Date;
        get playerId(): $UUID;
        set reset(value: boolean);
    }
}
