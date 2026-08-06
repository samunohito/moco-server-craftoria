import { $IntUnaryOperator, $Supplier_, $Function_, $Function, $Supplier } from "@package/java/util/function";
import { $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $PalettedPermutationsAccessor } from "@package/com/yungnickyoung/minecraft/yungscavebiomes/mixin/lost_caves/client/accessor";
import { $SpriteContents } from "@package/net/minecraft/client/renderer/texture";
import { $ResourceManager, $Resource } from "@package/net/minecraft/server/packs/resources";
import { $SpriteSourceListMixin$PalettedPermutationsAccessor } from "@package/cn/leolezury/eternalstarlight/common/mixin/client";
import { $NativeImage } from "@package/com/mojang/blaze3d/platform";
import { $Record } from "@package/java/lang";
import { $List, $Map_, $Map, $List_ } from "@package/java/util";
import { $SpriteSource$SpriteSupplier, $SpriteResourceLoader, $SpriteSource$Output, $SpriteSourceType, $SpriteResourceLoader_, $SpriteSource } from "@package/net/minecraft/client/renderer/texture/atlas";
import { $ResourceLocationPattern } from "@package/net/minecraft/util";

declare module "@package/net/minecraft/client/renderer/texture/atlas/sources" {
    export class $SingleFile implements $SpriteSource {
        run(resourceManager: $ResourceManager, output: $SpriteSource$Output): void;
        type(): $SpriteSourceType;
        static CODEC: $MapCodec<$SingleFile>;
        constructor(resourceId: $ResourceLocation_, spriteId: ($ResourceLocation_) | undefined);
    }
    export class $PalettedPermutations implements $SpriteSource, $SpriteSourceListMixin$PalettedPermutationsAccessor, $PalettedPermutationsAccessor {
        run(resourceManager: $ResourceManager, output: $SpriteSource$Output): void;
        type(): $SpriteSourceType;
        static loadPaletteEntryFromImage(resourceMananger: $ResourceManager, palette: $ResourceLocation_): number[];
        setPermutations(arg0: $Map_<any, any>): void;
        getPermutations(): $Map<any, any>;
        getTextures(): $List<$ResourceLocation>;
        getPaletteKey(): $ResourceLocation;
        setTextures(arg0: $List_<$ResourceLocation_>): void;
        static CODEC: $MapCodec<$PalettedPermutations>;
        textures: $List<$ResourceLocation>;
        permutations: $Map<string, $ResourceLocation>;
        constructor(textures: $List_<$ResourceLocation_>, paletteKey: $ResourceLocation_, permutations: $Map_<string, $ResourceLocation_>);
        get paletteKey(): $ResourceLocation;
    }
    export class $LazyLoadedImage {
        get(): $NativeImage;
        release(): void;
        constructor(id: $ResourceLocation_, resource: $Resource, referenceCount: number);
    }
    export class $Unstitcher$RegionInstance implements $SpriteSource$SpriteSupplier {
        apply(arg0: $SpriteResourceLoader_): $SpriteContents;
        discard(): void;
        compose<V>(arg0: $Function_<V, $SpriteResourceLoader>): $Function<V, $SpriteContents>;
        andThen<V>(arg0: $Function_<$SpriteContents, V>): $Function<$SpriteResourceLoader, V>;
        constructor(image: $LazyLoadedImage, region: $Unstitcher$Region_, xDivisor: number, arg3: number);
    }
    export class $Unstitcher implements $SpriteSource {
        run(resourceManager: $ResourceManager, output: $SpriteSource$Output): void;
        type(): $SpriteSourceType;
        static CODEC: $MapCodec<$Unstitcher>;
        constructor(resource: $ResourceLocation_, regions: $List_<$Unstitcher$Region_>, xDivisor: number, arg3: number);
    }
    export class $DirectoryLister implements $SpriteSource {
        run(resourceManager: $ResourceManager, output: $SpriteSource$Output): void;
        type(): $SpriteSourceType;
        static CODEC: $MapCodec<$DirectoryLister>;
        constructor(sourcePath: string, idPrefix: string);
    }
    export class $SourceFilter implements $SpriteSource {
        run(resourceManager: $ResourceManager, output: $SpriteSource$Output): void;
        type(): $SpriteSourceType;
        static CODEC: $MapCodec<$SourceFilter>;
        constructor(filter: $ResourceLocationPattern);
    }
    export class $PalettedPermutations$PalettedSpriteSupplier extends $Record implements $SpriteSource$SpriteSupplier {
        apply(arg0: $SpriteResourceLoader_): $SpriteContents;
        discard(): void;
        palette(): $Supplier<$IntUnaryOperator>;
        baseImage(): $LazyLoadedImage;
        permutationLocation(): $ResourceLocation;
        compose<V>(arg0: $Function_<V, $SpriteResourceLoader>): $Function<V, $SpriteContents>;
        andThen<V>(arg0: $Function_<$SpriteContents, V>): $Function<$SpriteResourceLoader, V>;
        constructor(arg0: $LazyLoadedImage, arg1: $Supplier_<$IntUnaryOperator>, arg2: $ResourceLocation_);
    }
    /**
     * Values that may be interpreted as {@link $PalettedPermutations$PalettedSpriteSupplier}.
     */
    export type $PalettedPermutations$PalettedSpriteSupplier_ = { permutationLocation?: $ResourceLocation_, baseImage?: $LazyLoadedImage, palette?: $Supplier_<$IntUnaryOperator>,  } | [permutationLocation?: $ResourceLocation_, baseImage?: $LazyLoadedImage, palette?: $Supplier_<$IntUnaryOperator>, ];
    export class $Unstitcher$Region extends $Record {
        x(): number;
        y(): number;
        width(): number;
        height(): number;
        sprite(): $ResourceLocation;
        static CODEC: $Codec<$Unstitcher$Region>;
        constructor(arg0: $ResourceLocation_, arg1: number, arg2: number, arg3: number, arg4: number);
    }
    /**
     * Values that may be interpreted as {@link $Unstitcher$Region}.
     */
    export type $Unstitcher$Region_ = { y?: number, x?: number, height?: number, sprite?: $ResourceLocation_, width?: number,  } | [y?: number, x?: number, height?: number, sprite?: $ResourceLocation_, width?: number, ];
}
