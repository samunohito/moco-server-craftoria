import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $Record } from "@package/java/lang";
import { $Collection } from "@package/java/util";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/me/desht/pneumaticcraft/api/drone/debug" {
    export class $DroneDebugEntry extends $Record {
        message(): string;
        static create(arg0: string, arg1: $BlockPos_, arg2: number): $DroneDebugEntry;
        pos(): ($BlockPos) | undefined;
        hasPos(): boolean;
        getPos(): $BlockPos;
        receivedTime(): number;
        progWidgetIndex(): number;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $DroneDebugEntry>;
        constructor(progWidgetIndex: number, message: string, pos: ($BlockPos_) | undefined, receivedTime: number);
    }
    /**
     * Values that may be interpreted as {@link $DroneDebugEntry}.
     */
    export type $DroneDebugEntry_ = { message?: string, receivedTime?: number, pos?: ($BlockPos_) | undefined, progWidgetIndex?: number,  } | [message?: string, receivedTime?: number, pos?: ($BlockPos_) | undefined, progWidgetIndex?: number, ];
    export class $IDroneDebugger {
    }
    export interface $IDroneDebugger {
        addEntry(arg0: $DroneDebugEntry_): void;
        addEntry(arg0: string, arg1: $BlockPos_): void;
        addEntry(arg0: string): void;
        getDebuggingPlayers(): $Collection<$ServerPlayer>;
        getDebugEntry(arg0: number): $DroneDebugEntry;
        trackAsDebugged(arg0: $ServerPlayer): void;
        get debuggingPlayers(): $Collection<$ServerPlayer>;
    }
}
