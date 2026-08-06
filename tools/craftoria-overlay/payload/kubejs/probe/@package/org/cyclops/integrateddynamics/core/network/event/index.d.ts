import { $Level_, $Level } from "@package/net/minecraft/world/level";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $Event } from "@package/net/neoforged/bus/api";
import { $INetwork } from "@package/org/cyclops/integrateddynamics/api/network";
import { $LivingEntity } from "@package/net/minecraft/world/entity";

declare module "@package/org/cyclops/integrateddynamics/core/network/event" {
    export class $NetworkInitializedEvent extends $Event {
        getLevel(): $Level;
        getPos(): $BlockPos;
        getPlacer(): $LivingEntity;
        getNetwork(): $INetwork;
        constructor(arg0: $INetwork, arg1: $Level_, arg2: $BlockPos_, arg3: $LivingEntity | null);
        get level(): $Level;
        get pos(): $BlockPos;
        get placer(): $LivingEntity;
        get network(): $INetwork;
    }
}
