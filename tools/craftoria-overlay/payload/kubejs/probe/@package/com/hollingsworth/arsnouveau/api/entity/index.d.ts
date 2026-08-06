import { $Level_ } from "@package/net/minecraft/world/level";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $OwnableEntity, $LivingEntity, $Entity } from "@package/net/minecraft/world/entity";
import { $UUID_ } from "@package/java/util";
import { $DamageSource_ } from "@package/net/minecraft/world/damagesource";

declare module "@package/com/hollingsworth/arsnouveau/api/entity" {
    export class $ISummon {
    }
    export interface $ISummon extends $OwnableEntity {
        writeOwner(arg0: $CompoundTag_): void;
        readOwner(arg0: $ServerLevel, arg1: $CompoundTag_): $Entity;
        getOwnerAlt(): $LivingEntity;
        onSummonDeath(arg0: $Level_, arg1: $DamageSource_ | null, arg2: boolean): void;
        getTicksLeft(): number;
        getLivingEntity(): $LivingEntity;
        setOwnerID(arg0: $UUID_): void;
        setTicksLeft(arg0: number): void;
        get ownerAlt(): $LivingEntity;
        get livingEntity(): $LivingEntity;
        set ownerID(value: $UUID_);
    }
}
