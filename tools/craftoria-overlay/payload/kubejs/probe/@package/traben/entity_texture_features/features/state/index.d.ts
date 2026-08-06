import { $Level } from "@package/net/minecraft/world/level";
import { $ETFEntity } from "@package/traben/entity_texture_features/utils";
import { $BlockPos } from "@package/net/minecraft/core";
import { $ItemStack } from "@package/net/minecraft/world/item";
import { $CompoundTag } from "@package/net/minecraft/nbt";
import { $Component } from "@package/net/minecraft/network/chat";
import { $EntityType, $Entity, $Pose } from "@package/net/minecraft/world/entity";
import { $Team } from "@package/net/minecraft/world/scores";
import { $UUID } from "@package/java/util";
import { $Iterable } from "@package/java/lang";
import { $Vec3 } from "@package/net/minecraft/world/phys";

declare module "@package/traben/entity_texture_features/features/state" {
    export class $ETFEntityRenderState$ETFRenderStateInit {
    }
    export interface $ETFEntityRenderState$ETFRenderStateInit {
        make(arg0: $ETFEntity): $ETFEntityRenderState;
    }
    /**
     * Values that may be interpreted as {@link $ETFEntityRenderState$ETFRenderStateInit}.
     */
    export type $ETFEntityRenderState$ETFRenderStateInit_ = ((arg0: $ETFEntity) => $ETFEntityRenderState);
    export class $ETFEntityRenderState {
        static setEtfRenderStateConstructor(reason: string, init: $ETFEntityRenderState$ETFRenderStateInit_): void;
        static forEntity(entity: $ETFEntity): $ETFEntityRenderState;
    }
    export interface $ETFEntityRenderState {
        /**
         * @deprecated
         */
        entity(): $ETFEntity;
        world(): $Level;
        /**
         * @deprecated
         */
        pose(): $Pose;
        uuid(): $UUID;
        customName(): $Component;
        blockPos(): $BlockPos;
        scoreboardTeam(): $Team;
        itemsEquipped(): $Iterable<$ItemStack>;
        hasCustomName(): boolean;
        optifineVehicleId(): number;
        canRenderBright(): boolean;
        isBlockEntity(): boolean;
        blockY(): number;
        entityType(): $EntityType<never>;
        armorItems(): $Iterable<$ItemStack>;
        distanceTo(arg0: $Entity): number;
        optifineId(): number;
        entityKey(): string;
        velocity(): $Vec3;
        handItems(): $Iterable<$ItemStack>;
        nbt(): $CompoundTag;
        get blockEntity(): boolean;
    }
}
