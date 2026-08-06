import { $GatewayEntity } from "@package/dev/shadowsoffire/gateways/entity";
import { $LivingEntity } from "@package/net/minecraft/world/entity";
import { $EntityEvent } from "@package/net/neoforged/neoforge/event/entity";

declare module "@package/dev/shadowsoffire/gateways/event" {
    export class $GateEvent$Opened extends $GateEvent {
        constructor(arg0: $GatewayEntity);
    }
    export class $GateEvent$WaveEntitySpawned extends $GateEvent {
        getWaveEntity(): $LivingEntity;
        constructor(arg0: $GatewayEntity, arg1: $LivingEntity);
        get waveEntity(): $LivingEntity;
    }
    export class $GateEvent$WaveStarted extends $GateEvent {
        constructor(arg0: $GatewayEntity);
    }
    export class $GateEvent$WaveEnd extends $GateEvent {
        constructor(arg0: $GatewayEntity);
    }
    export class $GateEvent$Failed extends $GateEvent {
        constructor(arg0: $GatewayEntity);
    }
    export class $GateEvent$Completed extends $GateEvent {
        constructor(arg0: $GatewayEntity);
    }
    export class $GateEvent extends $EntityEvent {
        getEntity(): $GatewayEntity;
        constructor(arg0: $GatewayEntity);
        get entity(): $GatewayEntity;
    }
}
