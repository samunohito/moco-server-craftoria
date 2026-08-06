import { $Level } from "@package/net/minecraft/world/level";
import { $ItemStack } from "@package/net/minecraft/world/item";
import { $RenderType, $MultiBufferSource_, $MultiBufferSource } from "@package/net/minecraft/client/renderer";
import { $CompoundTag } from "@package/net/minecraft/nbt";
import { $Component } from "@package/net/minecraft/network/chat";
import { $EntityType, $Entity, $Pose } from "@package/net/minecraft/world/entity";
import { $UUID, $LinkedHashMap } from "@package/java/util";
import { $ETFEntityRenderState } from "@package/traben/entity_texture_features/features/state";
import { $ETFTexture } from "@package/traben/entity_texture_features/features/texture_handlers";
import { $BlockPos } from "@package/net/minecraft/core";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Team } from "@package/net/minecraft/world/scores";
import { $Iterable } from "@package/java/lang";
import { $Vec3 } from "@package/net/minecraft/world/phys";

declare module "@package/traben/entity_texture_features/utils" {
    export class $ETFLruCache$UUIDInteger extends $ETFLruCache<$UUID, number> {
        constructor();
        constructor(capacity: number);
    }
    export class $ETFRenderLayerWithTexture {
    }
    export interface $ETFRenderLayerWithTexture {
        etf$getId(): ($ResourceLocation) | undefined;
    }
    /**
     * Values that may be interpreted as {@link $ETFRenderLayerWithTexture}.
     */
    export type $ETFRenderLayerWithTexture_ = (() => ($ResourceLocation_) | undefined);
    export class $ETFLruCache<X, Y> extends $LinkedHashMap<X, Y> {
        removeEntryOnly(key: X): void;
        defaultReturnValue(value: Y): void;
        constructor();
        constructor(capacity: number);
    }
    export class $ETFEntity {
    }
    export interface $ETFEntity {
        etf$getArmorItems(): $Iterable<$ItemStack>;
        etf$getVelocity(): $Vec3;
        etf$getCustomName(): $Component;
        /**
         * @deprecated
         */
        etf$getPose(): $Pose;
        etf$getOptifineId(): number;
        etf$getEntityKey(): string;
        etf$getBlockY(): number;
        etf$canBeBright(): boolean;
        etf$distanceTo(arg0: $Entity): number;
        etf$getType(): $EntityType<never>;
        etf$getHandItems(): $Iterable<$ItemStack>;
        etf$isBlockEntity(): boolean;
        etf$getWorld(): $Level;
        etf$hasCustomName(): boolean;
        etf$getUuid(): $UUID;
        etf$getBlockPos(): $BlockPos;
        etf$getNbt(): $CompoundTag;
        etf$getETFRenderState(): $ETFEntityRenderState;
        etf$getScoreboardTeam(): $Team;
        etf$getItemsEquipped(): $Iterable<$ItemStack>;
        etf$getOptifineVehicleId(): number;
    }
    export class $ETFVertexConsumer {
    }
    export interface $ETFVertexConsumer {
        etf$getETFTexture(): $ETFTexture;
        etf$getProvider(): $MultiBufferSource;
        etf$getRenderLayer(): $RenderType;
        etf$initETFVertexConsumer(arg0: $MultiBufferSource_, arg1: $RenderType): void;
    }
}
