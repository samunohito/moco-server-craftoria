import { $StructureTemplatePoolAccess } from "@package/me/desht/pneumaticcraft/mixin/accessors";
import { $SinglePoolElementAccessor as $SinglePoolElementAccessor$3, $StructureTemplatePoolAccessor as $StructureTemplatePoolAccessor$2, $ListPoolElementAccessor as $ListPoolElementAccessor$1, $FeaturePoolElementAccessor as $FeaturePoolElementAccessor$1 } from "@package/com/yungnickyoung/minecraft/yungsapi/mixin/accessor";
import { $StructurePoolAccessor, $SinglePoolElementAccessor as $SinglePoolElementAccessor$2 } from "@package/com/telepathicgrunt/the_bumblezone/mixin/world";
import { $StructurePoolAccess } from "@package/dev/worldgen/lithostitched/duck";
import { $MapCodec_, $DynamicOps, $Codec, $Dynamic, $MapCodec } from "@package/com/mojang/serialization";
import { $Pair, $Either } from "@package/com/mojang/datafixers/util";
import { $StructureTemplatePoolAccessor as $StructureTemplatePoolAccessor$1, $SinglePoolElementAccessor } from "@package/dev/worldgen/lithostitched/mixin/common";
import { $CallbackInfo, $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $VoxelShape } from "@package/net/minecraft/world/phys/shapes";
import { $PoolAliasLookup_ } from "@package/net/minecraft/world/level/levelgen/structure/pools/alias";
import { $List, $List_ } from "@package/java/util";
import { $StructureTemplatePoolAccessor as $StructureTemplatePoolAccessor$3 } from "@package/net/blay09/mods/waystones/mixin";
import { $StringRepresentable, $RandomSource, $StringRepresentable$EnumCodec } from "@package/net/minecraft/util";
import { $Function_, $Function } from "@package/java/util/function";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $ObjectArrayList } from "@package/it/unimi/dsi/fastutil/objects";
import { $Holder_, $Holder, $BlockPos_, $Vec3i } from "@package/net/minecraft/core";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $StructureTemplatePoolAccessor, $ListPoolElementAccessor, $SinglePoolElementAccessor as $SinglePoolElementAccessor$1, $FeaturePoolElementAccessor } from "@package/com/github/L_Ender/cataclysm/mixin/accessor";
import { $LithostitchedTemplates } from "@package/dev/worldgen/lithostitched/worldgen/structure";
import { $Enum, $Record } from "@package/java/lang";
import { $PoolElementStructurePiece, $BoundingBox, $Structure$GenerationStub, $Structure$GenerationContext_ } from "@package/net/minecraft/world/level/levelgen/structure";
import { $Heightmap$Types_, $RandomState } from "@package/net/minecraft/world/level/levelgen";
import { $LevelAccessor, $WorldGenLevel, $LevelHeightAccessor, $StructureManager } from "@package/net/minecraft/world/level";
import { $StructureTemplate$StructureBlockInfo, $StructureProcessorList, $StructureTemplate$StructureBlockInfo_, $StructureProcessor, $LiquidSettings_, $StructureTemplateManager, $StructureTemplate } from "@package/net/minecraft/world/level/levelgen/structure/templatesystem";
import { $ChunkGenerator } from "@package/net/minecraft/world/level/chunk";
import { $ImmutableList } from "@package/com/google/common/collect";
import { $PlacedFeature } from "@package/net/minecraft/world/level/levelgen/placement";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $WaystoneStructurePoolElement } from "@package/net/blay09/mods/waystones/worldgen";
import { $MutableObject } from "@package/org/apache/commons/lang3/mutable";
import { $Rotation_ } from "@package/net/minecraft/world/level/block";
export * as alias from "@package/net/minecraft/world/level/levelgen/structure/pools/alias";

declare module "@package/net/minecraft/world/level/levelgen/structure/pools" {
    export class $StructurePoolElement {
        getSize(structureTemplateManager: $StructureTemplateManager, rotation: $Rotation_): $Vec3i;
        static list(elements: $List_<$Function_<$StructureTemplatePool$Projection, $StructurePoolElement>>): $Function<$StructureTemplatePool$Projection, $ListPoolElement>;
        static single(id: string): $Function<$StructureTemplatePool$Projection, $SinglePoolElement>;
        static single(id: string, processors: $Holder_<$StructureProcessorList>): $Function<$StructureTemplatePool$Projection, $SinglePoolElement>;
        static single(id: string, processors: $Holder_<$StructureProcessorList>, liquidSettings: $LiquidSettings_): $Function<$StructureTemplatePool$Projection, $SinglePoolElement>;
        static single(id: string, liquidSettings: $LiquidSettings_): $Function<$StructureTemplatePool$Projection, $SinglePoolElement>;
        static empty(): $Function<$StructureTemplatePool$Projection, $EmptyPoolElement>;
        static feature(feature: $Holder_<$PlacedFeature>): $Function<$StructureTemplatePool$Projection, $FeaturePoolElement>;
        getType(): $StructurePoolElementType<never>;
        static legacy(id: string): $Function<$StructureTemplatePool$Projection, $LegacySinglePoolElement>;
        static legacy(id: string, processors: $Holder_<$StructureProcessorList>): $Function<$StructureTemplatePool$Projection, $LegacySinglePoolElement>;
        getGroundLevelDelta(): number;
        getShuffledJigsawBlocks(structureTemplateManager: $StructureTemplateManager, pos: $BlockPos_, rotation: $Rotation_, random: $RandomSource): $List<$StructureTemplate$StructureBlockInfo>;
        place(structureTemplateManager: $StructureTemplateManager, level: $WorldGenLevel, structureManager: $StructureManager, generator: $ChunkGenerator, offset: $BlockPos_, pos: $BlockPos_, rotation: $Rotation_, box: $BoundingBox, random: $RandomSource, liquidSettings: $LiquidSettings_, keepJigsaws: boolean): boolean;
        handleDataMarker(level: $LevelAccessor, blockInfo: $StructureTemplate$StructureBlockInfo_, pos: $BlockPos_, rotation: $Rotation_, random: $RandomSource, box: $BoundingBox): void;
        getProjection(): $StructureTemplatePool$Projection;
        setProjection(projection: $StructureTemplatePool$Projection_): $StructurePoolElement;
        getBoundingBox(structureTemplateManager: $StructureTemplateManager, pos: $BlockPos_, rotation: $Rotation_): $BoundingBox;
        static CODEC: $Codec<$StructurePoolElement>;
        get type(): $StructurePoolElementType<never>;
        get groundLevelDelta(): number;
    }
    export class $JigsawPlacement$Placer {
        handler$jho000$moonlight$ml$AddSpawnBoxPieces(arg0: $PoolElementStructurePiece, arg1: $MutableObject<any>, arg2: number, arg3: boolean, arg4: $LevelHeightAccessor, arg5: $RandomState, arg6: $PoolAliasLookup_, arg7: $LiquidSettings_, arg8: $CallbackInfo): void;
    }
    export class $JigsawPlacement$PieceState extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $JigsawPlacement$PieceState}.
     */
    export type $JigsawPlacement$PieceState_ = { depth?: number, free?: $MutableObject<$VoxelShape>, piece?: $PoolElementStructurePiece,  } | [depth?: number, free?: $MutableObject<$VoxelShape>, piece?: $PoolElementStructurePiece, ];
    export class $JigsawPlacement {
        static addPieces(context: $Structure$GenerationContext_, startPool: $Holder_<$StructureTemplatePool>, startJigsawName: ($ResourceLocation_) | undefined, maxDepth: number, pos: $BlockPos_, useExpansionHack: boolean, projectStartToHeightmap: ($Heightmap$Types_) | undefined, maxDistanceFromCenter: number, aliasLookup: $PoolAliasLookup_, dimensionPadding: $DimensionPadding_, liquidSettings: $LiquidSettings_): ($Structure$GenerationStub) | undefined;
        static generateJigsaw(level: $ServerLevel, startPool: $Holder_<$StructureTemplatePool>, startJigsawName: $ResourceLocation_, maxDepth: number, pos: $BlockPos_, keepJigsaws: boolean): boolean;
        constructor();
    }
    export class $SinglePoolElement extends $StructurePoolElement implements $SinglePoolElementAccessor$3, $SinglePoolElementAccessor$2, $SinglePoolElementAccessor$1, $SinglePoolElementAccessor, $WaystoneStructurePoolElement {
        handler$jea001$waystones$place(arg0: $StructureTemplateManager, arg1: $WorldGenLevel, arg2: $StructureManager, arg3: $ChunkGenerator, arg4: $BlockPos_, arg5: $BlockPos_, arg6: $Rotation_, arg7: $BoundingBox, arg8: $RandomSource, arg9: $LiquidSettings_, arg10: boolean, arg11: $CallbackInfoReturnable<any>): void;
        getTemplate(structureTemplateManager: $StructureTemplateManager): $StructureTemplate;
        getDataMarkers(structureTemplateManager: $StructureTemplateManager, pos: $BlockPos_, rotation: $Rotation_, relativePosition: boolean): $List<$StructureTemplate$StructureBlockInfo>;
        handler$fdg000$guardvillagers$place(arg0: $StructureTemplateManager, arg1: $WorldGenLevel, arg2: $StructureManager, arg3: $ChunkGenerator, arg4: $BlockPos_, arg5: $BlockPos_, arg6: $Rotation_, arg7: $BoundingBox, arg8: $RandomSource, arg9: $LiquidSettings_, arg10: boolean, arg11: $CallbackInfoReturnable<any>): void;
        waystones$isWaystone(): boolean;
        waystones$setIsWaystone(arg0: boolean): void;
        static sortBySelectionPriority(structureBlockInfos: $List_<$StructureTemplate$StructureBlockInfo_>): void;
        getProcessors(): $Holder<$StructureProcessorList>;
        setProcessors(holder: $Holder_<$StructureProcessorList>): void;
        getTemplate(): $Either<$ResourceLocation, $StructureTemplate>;
        callGetTemplate(structureTemplateManager: $StructureTemplateManager): $StructureTemplate;
        bumblezone$getTemplate(): $Either<$ResourceLocation, $StructureTemplate>;
        static CODEC: $MapCodec<$SinglePoolElement>;
    }
    export class $ListPoolElement extends $StructurePoolElement implements $ListPoolElementAccessor$1, $ListPoolElementAccessor {
        getElements(): $List<$StructurePoolElement>;
        static CODEC: $MapCodec<$ListPoolElement>;
        elements: $List<$StructurePoolElement>;
        constructor(elements: $List_<$StructurePoolElement>, projection: $StructureTemplatePool$Projection_);
    }
    export interface $StructureTemplatePool extends RegistryMarked<RegistryTypes.WorldgenTemplatePoolTag, RegistryTypes.WorldgenTemplatePool> {}
    export class $EmptyPoolElement extends $StructurePoolElement {
        static CODEC: $MapCodec<$EmptyPoolElement>;
        static INSTANCE: $EmptyPoolElement;
    }
    export class $FeaturePoolElement extends $StructurePoolElement implements $FeaturePoolElementAccessor$1, $FeaturePoolElementAccessor {
        getFeature(): $Holder<$PlacedFeature>;
        static CODEC: $MapCodec<$FeaturePoolElement>;
    }
    export class $StructurePoolElementType<P extends $StructurePoolElement> {
        static register<P extends $StructurePoolElement>(name: string, codec: $MapCodec_<P>): $StructurePoolElementType<P>;
        static SINGLE: $StructurePoolElementType<$SinglePoolElement>;
        static LEGACY: $StructurePoolElementType<$LegacySinglePoolElement>;
        static FEATURE: $StructurePoolElementType<$FeaturePoolElement>;
        static LIST: $StructurePoolElementType<$ListPoolElement>;
        static EMPTY: $StructurePoolElementType<$EmptyPoolElement>;
    }
    export interface $StructurePoolElementType<P extends $StructurePoolElement> {
        codec(): $MapCodec<P>;
    }
    /**
     * Values that may be interpreted as {@link $StructurePoolElementType}.
     */
    export type $StructurePoolElementType_<P> = RegistryTypes.WorldgenStructurePoolElement | (() => $MapCodec_<P>);
    export class $DimensionPadding extends $Record {
        bottom(): number;
        top(): number;
        hasEqualTopAndBottom(): boolean;
        static ZERO: $DimensionPadding;
        static CODEC: $Codec<$DimensionPadding>;
        constructor(padding: number);
        constructor(arg0: number, arg1: number);
    }
    /**
     * Values that may be interpreted as {@link $DimensionPadding}.
     */
    export type $DimensionPadding_ = { bottom?: number, top?: number,  } | [bottom?: number, top?: number, ];
    export class $LegacySinglePoolElement extends $SinglePoolElement {
        static CODEC: $MapCodec<$LegacySinglePoolElement>;
    }
    export interface $StructurePoolElementType<P> extends RegistryMarked<RegistryTypes.WorldgenStructurePoolElementTag, RegistryTypes.WorldgenStructurePoolElement> {}
    export class $JigsawJunction {
        serialize<T>(ops: $DynamicOps<T>): $Dynamic<T>;
        static deserialize<T>(dynamic: $Dynamic<T>): $JigsawJunction;
        getDeltaY(): number;
        getSourceX(): number;
        getSourceZ(): number;
        getDestProjection(): $StructureTemplatePool$Projection;
        getSourceGroundY(): number;
        constructor(sourceX: number, sourceGroundY: number, sourceZ: number, deltaY: number, destProjection: $StructureTemplatePool$Projection_);
        get deltaY(): number;
        get sourceX(): number;
        get sourceZ(): number;
        get destProjection(): $StructureTemplatePool$Projection;
        get sourceGroundY(): number;
    }
    export class $StructureTemplatePool implements $StructureTemplatePoolAccessor$2, $StructurePoolAccessor, $StructureTemplatePoolAccessor, $StructureTemplatePoolAccessor$1, $StructurePoolAccess, $StructureTemplatePoolAccess, $StructureTemplatePoolAccessor$3 {
        size(): number;
        getMaxSize(structureTemplateManager: $StructureTemplateManager): number;
        getLithostitchedTemplates(): $LithostitchedTemplates;
        compileRawTemplates(): void;
        getShuffledTemplates(random: $RandomSource): $List<$StructurePoolElement>;
        getFallback(): $Holder<$StructureTemplatePool>;
        getRandomTemplate(random: $RandomSource): $StructurePoolElement;
        setVanillaTemplates(objectArrayList: $ObjectArrayList<$StructurePoolElement>): void;
        getVanillaTemplates(): $ObjectArrayList<$StructurePoolElement>;
        bumblezone$getRawTemplates(): $List<$Pair<$StructurePoolElement, number>>;
        getTemplates(): $ObjectArrayList<$StructurePoolElement>;
        setRawTemplates(list: $List_<$Pair<$StructurePoolElement, number>>): void;
        setTemplates(arg0: $ObjectArrayList<$StructurePoolElement>): void;
        getRawTemplates(): $List<$Pair<$StructurePoolElement, number>>;
        static CODEC: $Codec<$Holder<$StructureTemplatePool>>;
        rawTemplates: $List<$Pair<$StructurePoolElement, number>>;
        templates: $ObjectArrayList<$StructurePoolElement>;
        static DIRECT_CODEC: $Codec<$StructureTemplatePool>;
        constructor(fallback: $Holder_<$StructureTemplatePool>, rawTemplates: $List_<$Pair<$StructurePoolElement, number>>);
        constructor(fallback: $Holder_<$StructureTemplatePool>, rawTemplateFactories: $List_<$Pair<$Function_<$StructureTemplatePool$Projection, $StructurePoolElement>, number>>, projection: $StructureTemplatePool$Projection_);
        get lithostitchedTemplates(): $LithostitchedTemplates;
        get fallback(): $Holder<$StructureTemplatePool>;
    }
    /**
     * Values that may be interpreted as {@link $StructureTemplatePool}.
     */
    export type $StructureTemplatePool_ = RegistryTypes.WorldgenTemplatePool;
    export class $StructureTemplatePool$Projection extends $Enum<$StructureTemplatePool$Projection> implements $StringRepresentable {
        getName(): string;
        static values(): $StructureTemplatePool$Projection[];
        static valueOf(name: string): $StructureTemplatePool$Projection;
        getProcessors(): $ImmutableList<$StructureProcessor>;
        static byName(name: string): $StructureTemplatePool$Projection;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static CODEC: $StringRepresentable$EnumCodec<$StructureTemplatePool$Projection>;
        static TERRAIN_MATCHING: $StructureTemplatePool$Projection;
        static RIGID: $StructureTemplatePool$Projection;
        get processors(): $ImmutableList<$StructureProcessor>;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $StructureTemplatePool$Projection}.
     */
    export type $StructureTemplatePool$Projection_ = "terrain_matching" | "rigid";
}
