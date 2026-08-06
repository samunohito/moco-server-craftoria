import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $LivingEntity, $EquipmentSlot, $EquipmentSlot_ } from "@package/net/minecraft/world/entity";
import { $Vec3 } from "@package/net/minecraft/world/phys";

declare module "@package/io/redspace/ironslib/game/client" {
    export class $CapeData {
        calculateRotationsDegrees(arg0: $LivingEntity, arg1: number): $Vec3;
        renderUpdate(arg0: $LivingEntity): void;
        xCloak: number;
        lastTick: number;
        xCloakO: number;
        yCloakO: number;
        zCloak: number;
        bob: number;
        oBob: number;
        yCloak: number;
        zCloakO: number;
        constructor();
    }
    export class $ICapeDataProvider {
    }
    export interface $ICapeDataProvider {
        irons_lib$getCapeData(): $CapeData;
    }
    /**
     * Values that may be interpreted as {@link $ICapeDataProvider}.
     */
    export type $ICapeDataProvider_ = (() => $CapeData);
    export class $ISupportTransmog {
    }
    export interface $ISupportTransmog {
        irons_lib$getArmorBySlotRaw(arg0: $EquipmentSlot_): $ItemStack;
    }
    /**
     * Values that may be interpreted as {@link $ISupportTransmog}.
     */
    export type $ISupportTransmog_ = ((arg0: $EquipmentSlot) => $ItemStack_);
}
