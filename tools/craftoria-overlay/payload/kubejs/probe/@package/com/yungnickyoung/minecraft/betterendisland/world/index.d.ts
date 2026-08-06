import { $EndCrystal } from "@package/net/minecraft/world/entity/boss/enderdragon";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $Codec } from "@package/com/mojang/serialization";
import { $Enum } from "@package/java/lang";
import { $List_ } from "@package/java/util";
import { $EndDragonFight } from "@package/net/minecraft/world/level/dimension/end";
import { $StringRepresentable$EnumCodec, $StringRepresentable } from "@package/net/minecraft/util";

declare module "@package/com/yungnickyoung/minecraft/betterendisland/world" {
    export class $DragonRespawnStage extends $Enum<$DragonRespawnStage> implements $StringRepresentable {
        static values(): $DragonRespawnStage[];
        static valueOf(arg0: string): $DragonRespawnStage;
        onStart(arg0: $ServerLevel, arg1: $IBetterDragonFight): void;
        tick(arg0: $ServerLevel, arg1: $EndDragonFight, arg2: $List_<$EndCrystal>, arg3: number): void;
        static byName(arg0: string | null): $DragonRespawnStage;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static CODEC: $StringRepresentable$EnumCodec<$DragonRespawnStage>;
        static SUMMONING_PILLARS: $DragonRespawnStage;
        static START: $DragonRespawnStage;
        static END: $DragonRespawnStage;
        static PREPARING_TO_SUMMON_PILLARS: $DragonRespawnStage;
        static SUMMONING_DRAGON: $DragonRespawnStage;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $DragonRespawnStage}.
     */
    export type $DragonRespawnStage_ = "start" | "preparing_to_summon_pillars" | "summoning_pillars" | "summoning_dragon" | "end";
    export class $IBetterDragonFight {
    }
    export interface $IBetterDragonFight {
        reset(arg0: boolean): void;
        tickBellSound(): void;
        hasDragonEverSpawned(): boolean;
        getDragonRespawnStage(): $DragonRespawnStage;
        setIsFirstExitPortalSpawn(arg0: boolean): void;
        getNumTimesDragonKilled(): number;
        isFirstExitPortalSpawn(): boolean;
        setHasDragonEverSpawned(arg0: boolean): void;
        doInitialDragonSpawn(): void;
        setNumTimesDragonKilled(arg0: number): void;
        setDragonRespawnStage(arg0: $DragonRespawnStage_): void;
        advanceRespawnStage(arg0: $DragonRespawnStage_): void;
        get firstExitPortalSpawn(): boolean;
    }
    export class $IEndSpike {
    }
    export interface $IEndSpike {
        getCrystalYOffset(): number;
        setCrystalYOffsetFromPillarHeight(arg0: number): void;
        get crystalYOffset(): number;
        set crystalYOffsetFromPillarHeight(value: number);
    }
    export class $ExtraFightData {
        hasDragonEverSpawned(): boolean;
        firstExitPortalSpawn(): boolean;
        numTimesDragonKilled(): number;
        setHasDragonEverSpawned(arg0: boolean): void;
        setNumTimesDragonKilled(arg0: number): void;
        setFirstExitPortalSpawn(arg0: boolean): void;
        static CODEC: $Codec<$ExtraFightData>;
        static DEFAULT: $ExtraFightData;
        constructor(arg0: boolean, arg1: boolean, arg2: number);
    }
    export class $IPrimaryLevelData {
    }
    export interface $IPrimaryLevelData {
        getExtraEndDragonFightData(): $ExtraFightData;
        setExtraEndDragonFightData(arg0: $ExtraFightData): void;
    }
}
