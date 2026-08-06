import { $Consumer_, $Function_ } from "@package/java/util/function";
import { $Sensor, $SensorType } from "@package/net/minecraft/world/entity/ai/sensing";
import { $LivingEntity } from "@package/net/minecraft/world/entity";
import { $List } from "@package/java/util";
import { $MemoryModuleType } from "@package/net/minecraft/world/entity/ai/memory";
import { $RandomSource } from "@package/net/minecraft/util";

declare module "@package/net/tslat/smartbrainlib/api/core/sensor" {
    export class $ExtendedSensor<E extends $LivingEntity> extends $Sensor<E> {
        type(): $SensorType<$ExtendedSensor<never>>;
        memoriesUsed(): $List<$MemoryModuleType<never>>;
        setScanRate(arg0: $Function_<E, number>): $ExtendedSensor<E>;
        afterScanning(arg0: $Consumer_<E>): $ExtendedSensor<E>;
        static RANDOM: $RandomSource;
        scanRate: number;
        constructor();
    }
}
