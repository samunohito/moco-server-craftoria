import { $ChunkPos } from "@package/net/minecraft/world/level";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $DynamicLike } from "@package/com/mojang/serialization";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $VoxelShape } from "@package/net/minecraft/world/phys/shapes";
import { $Enum } from "@package/java/lang";
import { $List } from "@package/java/util";
import { $Vec3_, $AABB_ } from "@package/net/minecraft/world/phys";

declare module "@package/net/minecraft/world/level/border" {
    export class $BorderChangeListener$DelegateBorderChangeListener implements $BorderChangeListener {
        onBorderCenterSet(border: $WorldBorder, x: number, arg2: number): void;
        onBorderSizeSet(border: $WorldBorder, newAmount: number): void;
        onBorderSetDamagePerBlock(border: $WorldBorder, newAmount: number): void;
        onBorderSetWarningBlocks(border: $WorldBorder, newDistance: number): void;
        onBorderSizeLerping(border: $WorldBorder, oldSize: number, arg2: number, newSize: number): void;
        onBorderSetWarningTime(border: $WorldBorder, newDistance: number): void;
        onBorderSetDamageSafeZOne(border: $WorldBorder, newAmount: number): void;
        worldBorder: $WorldBorder;
        constructor(worldBorder: $WorldBorder);
    }
    export class $WorldBorder$MovingBorderExtent implements $WorldBorder$BorderExtent {
    }
    export class $BorderStatus extends $Enum<$BorderStatus> {
        static values(): $BorderStatus[];
        static valueOf(arg0: string): $BorderStatus;
        /**
         * Retrieves the color that the border should be, while in this state.
         */
        getColor(): number;
        static GROWING: $BorderStatus;
        static SHRINKING: $BorderStatus;
        static STATIONARY: $BorderStatus;
        get color(): number;
    }
    /**
     * Values that may be interpreted as {@link $BorderStatus}.
     */
    export type $BorderStatus_ = "growing" | "shrinking" | "stationary";
    export class $BorderChangeListener {
    }
    export interface $BorderChangeListener {
        onBorderCenterSet(border: $WorldBorder, x: number, arg2: number): void;
        onBorderSizeSet(border: $WorldBorder, damagePerBlock: number): void;
        onBorderSetDamagePerBlock(border: $WorldBorder, damagePerBlock: number): void;
        onBorderSetWarningBlocks(border: $WorldBorder, warningBlocks: number): void;
        onBorderSizeLerping(border: $WorldBorder, oldSize: number, arg2: number, newSize: number): void;
        onBorderSetWarningTime(border: $WorldBorder, warningBlocks: number): void;
        onBorderSetDamageSafeZOne(border: $WorldBorder, damagePerBlock: number): void;
    }
    export class $WorldBorder$StaticBorderExtent implements $WorldBorder$BorderExtent {
    }
    export class $WorldBorder$Settings {
        getSize(): number;
        write(nbt: $CompoundTag_): void;
        static read(dynamic: $DynamicLike<never>, defaultValue: $WorldBorder$Settings): $WorldBorder$Settings;
        getWarningBlocks(): number;
        getWarningTime(): number;
        getSizeLerpTime(): number;
        getSizeLerpTarget(): number;
        getSafeZone(): number;
        getDamagePerBlock(): number;
        getCenterZ(): number;
        getCenterX(): number;
        get size(): number;
        get warningBlocks(): number;
        get warningTime(): number;
        get sizeLerpTime(): number;
        get sizeLerpTarget(): number;
        get safeZone(): number;
        get damagePerBlock(): number;
        get centerZ(): number;
        get centerX(): number;
    }
    export class $WorldBorder$BorderExtent {
    }
    export interface $WorldBorder$BorderExtent {
    }
    export class $WorldBorder {
        getSize(): number;
        setSize(damagePerBlock: number): void;
        getMinX(): number;
        getWarningBlocks(): number;
        setWarningBlocks(size: number): void;
        setDamageSafeZone(damagePerBlock: number): void;
        getAbsoluteMaxSize(): number;
        setDamagePerBlock(damagePerBlock: number): void;
        getLerpSpeed(): number;
        getWarningTime(): number;
        setWarningTime(size: number): void;
        tick(): void;
        getMaxX(): number;
        getMaxZ(): number;
        getMinZ(): number;
        setCenter(x: number, arg1: number): void;
        getLerpTarget(): number;
        lerpSizeBetween(oldSize: number, arg1: number, newSize: number): void;
        createSettings(): $WorldBorder$Settings;
        applySettings(serializer: $WorldBorder$Settings): void;
        getStatus(): $BorderStatus;
        getListeners(): $List<$BorderChangeListener>;
        removeListener(listener: $BorderChangeListener): void;
        addListener(listener: $BorderChangeListener): void;
        getDamagePerBlock(): number;
        getLerpRemainingTime(): number;
        isWithinBounds(x: number, arg1: number): boolean;
        isWithinBounds(x: number, arg1: number, z: number): boolean;
        isWithinBounds(pos: $Vec3_): boolean;
        isWithinBounds(box: $AABB_): boolean;
        isWithinBounds(chunkPos: $ChunkPos): boolean;
        isWithinBounds(pos: $BlockPos_): boolean;
        getCollisionShape(): $VoxelShape;
        getCenterZ(): number;
        getCenterX(): number;
        setAbsoluteMaxSize(size: number): void;
        getDistanceToBorder(entity: $Entity): number;
        getDistanceToBorder(x: number, arg1: number): number;
        clampToBounds(pos: $BlockPos_): $BlockPos;
        clampToBounds(x: number, arg1: number, y: number): $BlockPos;
        clampToBounds(pos: $Vec3_): $BlockPos;
        isInsideCloseToBorder(entity: $Entity, bounds: $AABB_): boolean;
        getDamageSafeZone(): number;
        listeners: $List<$BorderChangeListener>;
        static DEFAULT_SETTINGS: $WorldBorder$Settings;
        static MAX_SIZE: number;
        static MAX_CENTER_COORDINATE: number;
        constructor();
        get minX(): number;
        get lerpSpeed(): number;
        get maxX(): number;
        get maxZ(): number;
        get minZ(): number;
        get lerpTarget(): number;
        get status(): $BorderStatus;
        get lerpRemainingTime(): number;
        get collisionShape(): $VoxelShape;
        get centerZ(): number;
        get centerX(): number;
    }
}
