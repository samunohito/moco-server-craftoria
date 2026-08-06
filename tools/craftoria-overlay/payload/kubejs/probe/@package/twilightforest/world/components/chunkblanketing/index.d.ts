import { $Function_ } from "@package/java/util/function";
import { $BlockPos, $Holder, $HolderSet } from "@package/net/minecraft/core";
import { $MapCodec_, $MapCodec } from "@package/com/mojang/serialization";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $Biome } from "@package/net/minecraft/world/level/biome";
import { $ChunkAccess } from "@package/net/minecraft/world/level/chunk";
import { $RandomSource } from "@package/net/minecraft/util";

declare module "@package/twilightforest/world/components/chunkblanketing" {
    export interface $ChunkBlanketProcessor extends RegistryMarked<RegistryTypes.TwilightChunkBlanketProcessorsTag, RegistryTypes.TwilightChunkBlanketProcessors> {}
    export interface $ChunkBlanketType extends RegistryMarked<RegistryTypes.TwilightforestChunkBlanketTypeTag, RegistryTypes.TwilightforestChunkBlanketType> {}
    export class $ChunkBlanketProcessor {
    }
    export interface $ChunkBlanketProcessor {
        getType(): $ChunkBlanketType;
        biomesForApplication(): $HolderSet<$Biome>;
        processChunk(arg0: $RandomSource, arg1: $Function_<$BlockPos, $Holder<$Biome>>, arg2: $ChunkAccess): void;
        get type(): $ChunkBlanketType;
    }
    /**
     * Values that may be interpreted as {@link $ChunkBlanketProcessor}.
     */
    export type $ChunkBlanketProcessor_ = RegistryTypes.TwilightChunkBlanketProcessors;
    export class $ChunkBlanketType {
    }
    export interface $ChunkBlanketType {
        getCodec(): $MapCodec<$ChunkBlanketProcessor>;
        get codec(): $MapCodec<$ChunkBlanketProcessor>;
    }
    /**
     * Values that may be interpreted as {@link $ChunkBlanketType}.
     */
    export type $ChunkBlanketType_ = RegistryTypes.TwilightforestChunkBlanketType | (() => $MapCodec_<$ChunkBlanketProcessor_>);
}
