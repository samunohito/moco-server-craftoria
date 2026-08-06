import { $ICancellableEvent } from "@package/net/neoforged/bus/api";
import { $Component, $Component_ } from "@package/net/minecraft/network/chat";
import { $GameProfile } from "@package/com/mojang/authlib";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $EntityEvent } from "@package/net/neoforged/neoforge/event/entity";
import { $TimedoorEntity } from "@package/earth/terrarium/tempad/common/entity";
import { $UUID_, $UUID } from "@package/java/util";
import { $SyncableContext } from "@package/earth/terrarium/tempad/api/context";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/earth/terrarium/tempad/api/event" {
    export class $TimedoorEvent$Exit extends $TimedoorEvent {
        getTeleportee(): $Entity;
        constructor(arg0: $TimedoorEntity, arg1: $Entity);
        get teleportee(): $Entity;
    }
    export class $TimedoorEvent$OpenWithItem extends $TimedoorEvent$Open {
        getTempadCtx(): $SyncableContext<never>;
        constructor(arg0: $TimedoorEntity, arg1: $GameProfile, arg2: $SyncableContext<never>, arg3: $ResourceLocation_, arg4: $UUID_);
        get tempadCtx(): $SyncableContext<never>;
    }
    export class $TimedoorEvent$Enter extends $TimedoorEvent implements $ICancellableEvent {
        getTeleportee(): $Entity;
        isCanceled(): boolean;
        setCanceled(arg0: boolean): void;
        constructor(arg0: $TimedoorEntity, arg1: $Entity);
        get teleportee(): $Entity;
    }
    export class $TimedoorEvent$Open extends $TimedoorEvent implements $ICancellableEvent {
        fail(arg0: $Component_): void;
        getErrorMessage(): $Component;
        getProvider(): $ResourceLocation;
        getLocationId(): $UUID;
        setErrorMessage(arg0: $Component_): void;
        getOpener(): $GameProfile;
        isCanceled(): boolean;
        setCanceled(arg0: boolean): void;
        constructor(arg0: $TimedoorEntity, arg1: $ResourceLocation_, arg2: $UUID_, arg3: $GameProfile);
        get provider(): $ResourceLocation;
        get locationId(): $UUID;
        get opener(): $GameProfile;
    }
    export class $TimedoorEvent$Close extends $TimedoorEvent {
        constructor(arg0: $TimedoorEntity);
    }
    export class $TimedoorEvent$OpenWithBlock extends $TimedoorEvent$Open {
        getBlock(): $BlockEntity;
        constructor(arg0: $TimedoorEntity, arg1: $GameProfile, arg2: $BlockEntity, arg3: $ResourceLocation_, arg4: $UUID_);
        get block(): $BlockEntity;
    }
    export class $TimedoorEvent extends $EntityEvent {
        getEntity(): $TimedoorEntity;
        constructor(arg0: $TimedoorEntity);
        get entity(): $TimedoorEntity;
    }
}
