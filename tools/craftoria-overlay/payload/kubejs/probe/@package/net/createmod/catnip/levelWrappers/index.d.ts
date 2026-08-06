import { $EntityGetter, $Level_, $Level } from "@package/net/minecraft/world/level";
import { $BlockSnapshot } from "@package/net/neoforged/neoforge/common/util";
import { $Codec } from "@package/com/mojang/serialization";
import { $ResourceKey } from "@package/net/minecraft/resources";
import { $ChunkSource } from "@package/net/minecraft/world/level/chunk";
import { $Thread } from "@package/java/lang";
import { $ArrayList, $List } from "@package/java/util";
import { $TickingBlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $RandomSource } from "@package/net/minecraft/util";

declare module "@package/net/createmod/catnip/levelWrappers" {
    export class $WrappedLevel extends $Level {
        getLevel(): $Level;
        setChunkSource(arg0: $ChunkSource): void;
        self(): $EntityGetter;
        restoringBlockSnapshots: boolean;
        oThunderLevel: number;
        static LONG_PARTICLE_CLIP_RANGE: number;
        static ATTACHMENTS_NBT_KEY: string;
        thread: $Thread;
        thunderLevel: number;
        random: $RandomSource;
        capturedBlockSnapshots: $ArrayList<$BlockSnapshot>;
        static OVERWORLD: $ResourceKey<$Level>;
        static TICKS_PER_DAY: number;
        static MAX_ENTITY_SPAWN_Y: number;
        static NETHER: $ResourceKey<$Level>;
        oRainLevel: number;
        static RESOURCE_KEY_CODEC: $Codec<$ResourceKey<$Level>>;
        static MAX_BRIGHTNESS: number;
        static END: $ResourceKey<$Level>;
        static MAX_LEVEL_SIZE: number;
        static SHORT_PARTICLE_CLIP_RANGE: number;
        static MIN_ENTITY_SPAWN_Y: number;
        blockEntityTickers: $List<$TickingBlockEntity>;
        rainLevel: number;
        captureBlockSnapshots: boolean;
        constructor(arg0: $Level_);
        get level(): $Level;
        set chunkSource(value: $ChunkSource);
    }
}
