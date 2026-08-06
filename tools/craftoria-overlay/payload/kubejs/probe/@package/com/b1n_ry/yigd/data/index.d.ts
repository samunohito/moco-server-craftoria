import { $LocalDateTime } from "@package/java/time";
import { $BlockPos, $BlockPos_, $Direction_, $Vec3i, $Direction } from "@package/net/minecraft/core";
import { $ServerPlayer, $ServerLevel } from "@package/net/minecraft/server/level";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $DropRule, $DropRule_ } from "@package/com/b1n_ry/yigd/util";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $Enum, $Record } from "@package/java/lang";
import { $List } from "@package/java/util";
import { $Vec3_, $Vec3 } from "@package/net/minecraft/world/phys";
import { $DamageSource_, $DamageSource } from "@package/net/minecraft/world/damagesource";

declare module "@package/com/b1n_ry/yigd/data" {
    export class $GraveyardData {
        handlePoint2Point(): void;
        point2point: boolean;
        dimensionId: $ResourceLocation;
        useClosest: boolean;
        graveLocations: $List<$GraveyardData$GraveLocation>;
        constructor();
    }
    export class $GraveStatus extends $Enum<$GraveStatus> {
        static values(): $GraveStatus[];
        static valueOf(arg0: string): $GraveStatus;
        getTransparentColor(): number;
        static CLAIMED: $GraveStatus;
        static DESTROYED: $GraveStatus;
        static UNCLAIMED: $GraveStatus;
        get transparentColor(): number;
    }
    /**
     * Values that may be interpreted as {@link $GraveStatus}.
     */
    export type $GraveStatus_ = "unclaimed" | "claimed" | "destroyed";
    export class $DirectionalPos extends $Record {
        pos(): $BlockPos;
        dir(): $Direction;
        getSquaredDistance(arg0: $Vec3i): number;
        constructor(arg0: number, arg1: number, arg2: number, arg3: $Direction_);
        constructor(pos: $BlockPos_, dir: $Direction_);
    }
    /**
     * Values that may be interpreted as {@link $DirectionalPos}.
     */
    export type $DirectionalPos_ = { pos?: $BlockPos_, dir?: $Direction_,  } | [pos?: $BlockPos_, dir?: $Direction_, ];
    export class $DeathContext extends $Record {
        player(): $ServerPlayer;
        world(): $ServerLevel;
        deathPos(): $Vec3;
        deathSource(): $DamageSource;
        constructor(player: $ServerPlayer, world: $ServerLevel, deathPos: $Vec3_, deathSource: $DamageSource_);
    }
    /**
     * Values that may be interpreted as {@link $DeathContext}.
     */
    export type $DeathContext_ = { player?: $ServerPlayer, deathPos?: $Vec3_, deathSource?: $DamageSource_, world?: $ServerLevel,  } | [player?: $ServerPlayer, deathPos?: $Vec3_, deathSource?: $DamageSource_, world?: $ServerLevel, ];
    export class $GraveyardData$GraveLocation {
        x: number;
        y: number;
        z: number;
        forPlayer: string;
        direction: $Direction;
        constructor(arg0: number, arg1: number, arg2: number);
    }
    export class $GraveItem {
        copy(): $GraveItem;
        stack: $ItemStack;
        dropRule: $DropRule;
        constructor(arg0: $ItemStack_, arg1: $DropRule_);
    }
    export class $TimePoint {
        getTime(): number;
        getDate(): number;
        getDay(): number;
        getYear(): number;
        getHour(arg0: boolean): number;
        getMinute(): number;
        static fromNbt(arg0: $CompoundTag_): $TimePoint;
        toNbt(): $CompoundTag;
        getMonthName(): string;
        getTimePostfix(arg0: boolean): string;
        constructor(arg0: $ServerLevel);
        constructor(arg0: number, arg1: number, arg2: $LocalDateTime);
        get time(): number;
        get date(): number;
        get day(): number;
        get year(): number;
        get minute(): number;
        get monthName(): string;
    }
}
