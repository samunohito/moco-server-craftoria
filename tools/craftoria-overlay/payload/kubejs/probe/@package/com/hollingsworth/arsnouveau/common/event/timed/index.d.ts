import { $CompoundTag_, $CompoundTag } from "@package/net/minecraft/nbt";
import { $ITimedEvent } from "@package/com/hollingsworth/arsnouveau/api/event";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $SpellContext } from "@package/com/hollingsworth/arsnouveau/api/spell";
import { $EntityTravelToDimensionEvent } from "@package/net/neoforged/neoforge/event/entity";
import { $RewindEntityData } from "@package/com/hollingsworth/arsnouveau/common/spell/rewind";
import { $Stack } from "@package/java/util";
import { $PlayerEvent$PlayerLoggedOutEvent } from "@package/net/neoforged/neoforge/event/entity/player";
import { $ServerTickEvent } from "@package/net/neoforged/neoforge/event/tick";

declare module "@package/com/hollingsworth/arsnouveau/common/event/timed" {
    export class $RewindEvent implements $ITimedEvent {
        stop(): void;
        tick(arg0: boolean): void;
        onServerStopping(): void;
        isExpired(): boolean;
        onChangeDimension(arg0: $EntityTravelToDimensionEvent): void;
        onEntityRemoved(arg0: $PlayerEvent$PlayerLoggedOutEvent): void;
        removeWeightlessness(): void;
        getID(): string;
        serialize(arg0: $CompoundTag_): $CompoundTag;
        tick(arg0: $ServerTickEvent): void;
        onPacketHandled(): void;
        doneRewinding: boolean;
        serverSide: boolean;
        startGameTime: number;
        rewindTicks: number;
        respectsGravity: boolean;
        context: $SpellContext;
        registeredEvents: boolean;
        ticksToRewind: number;
        entity: $Entity;
        constructor(arg0: $Entity | null, arg1: number, arg2: number, arg3: $SpellContext | null);
        constructor(arg0: $Entity | null, arg1: number, arg2: number);
        constructor(arg0: number, arg1: number, arg2: $SpellContext | null);
        get expired(): boolean;
        get ID(): string;
    }
    export class $IRewindable {
    }
    export interface $IRewindable {
        getMotions(): $Stack<$RewindEntityData>;
        isRewinding(): boolean;
        setRewinding(arg0: boolean): void;
        get motions(): $Stack<$RewindEntityData>;
    }
}
