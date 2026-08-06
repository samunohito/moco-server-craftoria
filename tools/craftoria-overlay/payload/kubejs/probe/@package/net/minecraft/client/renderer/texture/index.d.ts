import { $SpriteContentsAnimatedTextureAccessor, $SpriteContentsTickerAccessor, $SpriteContentsAccessor as $SpriteContentsAccessor$1, $TextureAtlasAccessor, $SimpleTextureAccessor, $SpriteContentsFrameInfoAccessor } from "@package/net/irisshaders/iris/mixin/texture";
import { $TextureMetadataSection } from "@package/net/minecraft/client/resources/metadata/texture";
import { $FrameSize_ } from "@package/net/minecraft/client/resources/metadata/animation";
import { $Executor_, $CompletableFuture } from "@package/java/util/concurrent";
import { $CallbackInfo } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $ResourceManager, $ResourceMetadata_, $PreparableReloadListener, $PreparableReloadListener$PreparationBarrier_, $ResourceMetadata } from "@package/net/minecraft/server/packs/resources";
import { $List, $Map_, $Collection_, $List_, $Collection, $Map, $Set } from "@package/java/util";
import { $SpriteResourceLoader, $SpriteResourceLoader_ } from "@package/net/minecraft/client/renderer/texture/atlas";
import { $TextureType } from "@package/com/supermartijn642/fusion/api/texture";
import { $MetadataSectionSerializer } from "@package/net/minecraft/server/packs/metadata";
import { $SpriteContentsAnimationFrameAccessor, $SpriteContentsAnimationAccessor as $SpriteContentsAnimationAccessor$1, $SpriteContentsAccessor, $SpriteContentsAnimatorImplAccessor } from "@package/org/embeddedt/embeddium/impl/mixin/features/textures/animations/upload";
import { $Function_ } from "@package/java/util/function";
import { $Operation_ as $Operation_$1 } from "@package/com/llamalad7/mixinextras/injector/wrapoperation";
import { $Path, $Path_ } from "@package/java/nio/file";
import { $SpriteContentsInvoker } from "@package/org/embeddedt/embeddium/impl/mixin/features/textures";
import { $Operation_ } from "@package/nolijium/mixinextras/injector/wrapoperation";
import { $PBRSpriteHolder, $SpriteContentsExtension, $PBRAtlasHolder, $TextureAtlasExtension } from "@package/net/irisshaders/iris/pbr/texture";
import { $SpriteFinderImpl$SpriteFinderAccess as $SpriteFinderImpl$SpriteFinderAccess$2 } from "@package/appeng/thirdparty/fabric";
import { $Record, $RuntimeException, $AutoCloseable, $Runnable_ } from "@package/java/lang";
import { $SpriteTransparencyLevel, $SpriteTransparencyLevelHolder } from "@package/org/embeddedt/embeddium/impl/render/chunk/sprite";
import { $TextureLocationSettable } from "@package/dzwdz/chat_heads/mixininterface";
import { $File, $IOException, $File_, $Closeable } from "@package/java/io";
import { $SpriteContentsExtension as $SpriteContentsExtension$1 } from "@package/net/irisshaders/iris/pbr";
import { $TextureAtlasSpriteExtension, $SpriteContentsExtension as $SpriteContentsExtension$2 } from "@package/com/supermartijn642/fusion/extensions";
import { $ProfilerFiller } from "@package/net/minecraft/util/profiling";
import { $IMixinDynamicTexture } from "@package/de/keksuccino/konkrete/mixin/mixins/client";
import { $SpriteContentsExtended } from "@package/org/embeddedt/embeddium/impl/render/texture";
import { $NativeImage } from "@package/com/mojang/blaze3d/platform";
import { $SpriteContentsAnimationAccessor, $SpriteContentsAnimationFrameAccessor as $SpriteContentsAnimationFrameAccessor$1 } from "@package/org/embeddedt/embeddium/impl/mixin/features/textures/animations/tracking";
import { $SpriteFinderImpl$SpriteFinderAccess as $SpriteFinderImpl$SpriteFinderAccess$1, $SpriteFinderImpl } from "@package/net/fabricmc/fabric/impl/renderer";
import { $IntStream } from "@package/java/util/stream";
import { $IExtendedSimpleTexture } from "@package/io/redspace/ironsspellbooks/render";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $VertexConsumer } from "@package/com/mojang/blaze3d/vertex";
import { $Pair } from "@package/com/supermartijn642/fusion/api/util";
import { $SpriteFinderImpl$SpriteFinderAccess } from "@package/dev/technici4n/moderndynamics/thirdparty/fabric";
export * as atlas from "@package/net/minecraft/client/renderer/texture/atlas";

declare module "@package/net/minecraft/client/renderer/texture" {
    export class $StitcherException extends $RuntimeException {
        getAllSprites(): $Collection<$Stitcher$Entry>;
        constructor(entry: $Stitcher$Entry, allSprites: $Collection_<$Stitcher$Entry>);
        get allSprites(): $Collection<$Stitcher$Entry>;
    }
    export class $Stitcher<T extends $Stitcher$Entry> {
        getWidth(): number;
        getHeight(): number;
        stitch(): void;
        registerSprite(stitcherEntry: T): void;
        gatherSprites(loader: $Stitcher$SpriteLoader_<T>): void;
        constructor(maxWidth: number, maxHeight: number, mipLevel: number);
        get width(): number;
        get height(): number;
    }
    export class $SpriteTicker {
    }
    export interface $SpriteTicker extends $AutoCloseable {
        close(): void;
        tickAndUpload(x: number, y: number): void;
    }
    export class $AbstractTexture implements $AutoCloseable {
        reset(textureManager: $TextureManager, resourceManager: $ResourceManager, path: $ResourceLocation_, executor: $Executor_): void;
        load(resourceManager: $ResourceManager): void;
        getId(): number;
        close(): void;
        bind(): void;
        setFilter(blur: boolean, mipmap: boolean): void;
        releaseId(): void;
        setBlurMipmap(blur: boolean, mipmap: boolean): void;
        restoreLastBlurMipmap(): void;
        static NOT_ASSIGNED: number;
        mipmap: boolean;
        blur: boolean;
        constructor();
        get id(): number;
    }
    export class $OverlayTexture implements $AutoCloseable {
        static v(hurt: boolean): number;
        close(): void;
        static u(u: number): number;
        teardownOverlayColor(): void;
        static pack(u: number, hurt: boolean): number;
        static pack(u: number, v: number): number;
        setupOverlayColor(): void;
        static NO_WHITE_U: number;
        static WHITE_OVERLAY_V: number;
        static NO_OVERLAY: number;
        static RED_OVERLAY_V: number;
        constructor();
    }
    export class $Dumpable {
    }
    export interface $Dumpable {
        dumpContents(resourceLocation: $ResourceLocation_, path: $Path_): void;
    }
    /**
     * Values that may be interpreted as {@link $Dumpable}.
     */
    export type $Dumpable_ = ((arg0: $ResourceLocation, arg1: $Path) => void);
    export class $HttpTexture extends $SimpleTexture implements $TextureLocationSettable {
        chatheads$setTextureLocation(location: $ResourceLocation_): void;
        handler$fem000$chat_heads$chatheads$registerBlendedHeadTexture(image: $NativeImage, ci: $CallbackInfo): void;
        processLegacySkin(image: $NativeImage): $NativeImage;
        static NOT_ASSIGNED: number;
        file: $File;
        mipmap: boolean;
        blur: boolean;
        constructor(file: $File_ | null, urlString: string, location: $ResourceLocation_, processLegacySkin: boolean, onDownloaded: $Runnable_ | null);
    }
    export class $SpriteContents$InterpolationData implements $AutoCloseable {
        close(): void;
        handler$bih000$embeddium$assignParent(arg0: $SpriteContents, arg1: $CallbackInfo): void;
    }
    export class $SpriteLoader$Preparations extends $Record {
        width(): number;
        height(): number;
        regions(): $Map<$ResourceLocation, $TextureAtlasSprite>;
        missing(): $TextureAtlasSprite;
        mipLevel(): number;
        waitForUpload(): $CompletableFuture<$SpriteLoader$Preparations>;
        readyForUpload(): $CompletableFuture<void>;
        constructor(width: number, height: number, mipLevel: number, missing: $TextureAtlasSprite, regions: $Map_<$ResourceLocation_, $TextureAtlasSprite>, readyForUpload: $CompletableFuture<void>);
    }
    /**
     * Values that may be interpreted as {@link $SpriteLoader$Preparations}.
     */
    export type $SpriteLoader$Preparations_ = { height?: number, missing?: $TextureAtlasSprite, width?: number, readyForUpload?: $CompletableFuture<void>, mipLevel?: number, regions?: $Map_<$ResourceLocation_, $TextureAtlasSprite>,  } | [height?: number, missing?: $TextureAtlasSprite, width?: number, readyForUpload?: $CompletableFuture<void>, mipLevel?: number, regions?: $Map_<$ResourceLocation_, $TextureAtlasSprite>, ];
    export class $Tickable {
    }
    export interface $Tickable {
        tick(): void;
    }
    /**
     * Values that may be interpreted as {@link $Tickable}.
     */
    export type $Tickable_ = (() => void);
    export class $Stitcher$Holder<T extends $Stitcher$Entry> extends $Record {
        entry(): T;
        width(): number;
        height(): number;
        constructor(entry: T, mipLevel: number);
    }
    /**
     * Values that may be interpreted as {@link $Stitcher$Holder}.
     */
    export type $Stitcher$Holder_<T> = { height?: number, width?: number, entry?: $Stitcher$Entry,  } | [height?: number, width?: number, entry?: $Stitcher$Entry, ];
    export class $SpriteLoader {
        static create(atlas: $TextureAtlas): $SpriteLoader;
        stitch(contents: $List_<$SpriteContents>, mipLevel: number, executor: $Executor_): $SpriteLoader$Preparations;
        static runSpriteSuppliers(spriteResourceLoader: $SpriteResourceLoader_, factories: $List_<$Function_<$SpriteResourceLoader, $SpriteContents>>, executor: $Executor_): $CompletableFuture<$List<$SpriteContents>>;
        loadAndStitch(resourceManager: $ResourceManager, location: $ResourceLocation_, mipLevel: number, executor: $Executor_, sectionSerializers: $Collection_<$MetadataSectionSerializer<never>>): $CompletableFuture<$SpriteLoader$Preparations>;
        loadAndStitch(resouceManager: $ResourceManager, location: $ResourceLocation_, mipLevel: number, executor: $Executor_): $CompletableFuture<$SpriteLoader$Preparations>;
        static DEFAULT_METADATA_SECTIONS: $Set<$MetadataSectionSerializer<never>>;
        constructor(location: $ResourceLocation_, maxSupportedTextureSize: number, minWidth: number, minHeight: number);
    }
    export class $Stitcher$SpriteLoader<T extends $Stitcher$Entry> {
    }
    export interface $Stitcher$SpriteLoader<T extends $Stitcher$Entry> {
        load(entry: T, x: number, y: number): void;
    }
    /**
     * Values that may be interpreted as {@link $Stitcher$SpriteLoader}.
     */
    export type $Stitcher$SpriteLoader_<T> = ((arg0: T, arg1: number, arg2: number) => void);
    export class $MissingTextureAtlasSprite {
        static getLocation(): $ResourceLocation;
        static create(): $SpriteContents;
        static getTexture(): $DynamicTexture;
        constructor();
        static get location(): $ResourceLocation;
        static get texture(): $DynamicTexture;
    }
    export class $SpriteContents$FrameInfo implements $SpriteContentsFrameInfoAccessor, $SpriteContentsAnimationFrameAccessor$1, $SpriteContentsAnimationFrameAccessor {
        getIndex(): number;
        getTime(): number;
        index: number;
        time: number;
    }
    export class $Stitcher$Entry {
    }
    export interface $Stitcher$Entry {
        name(): $ResourceLocation;
        width(): number;
        height(): number;
    }
    export class $PreloadedTexture extends $SimpleTexture {
        getFuture(): $CompletableFuture<void>;
        static NOT_ASSIGNED: number;
        mipmap: boolean;
        blur: boolean;
        constructor(resourceManager: $ResourceManager, location: $ResourceLocation_, backgroundExecutor: $Executor_);
        get future(): $CompletableFuture<void>;
    }
    export class $SpriteContents$Ticker implements $SpriteTicker, $SpriteContentsTickerAccessor, $SpriteContentsAnimatorImplAccessor {
        close(): void;
        tickAndUpload(x: number, y: number): void;
        handler$bgj000$embeddium$assignParent(arg0: $SpriteContents, arg1: $SpriteContents$AnimatedTexture, arg2: $SpriteContents$InterpolationData, arg3: $CallbackInfo): void;
        getFrameIndex(): number;
        setFrame(arg0: number): void;
        getFrame(): number;
        getSubFrame(): number;
        setSubFrame(arg0: number): void;
        getAnimationInfo(): $SpriteContents$AnimatedTexture;
        getFrameTicks(): number;
        get frameIndex(): number;
        get animationInfo(): $SpriteContents$AnimatedTexture;
        get frameTicks(): number;
    }
    export class $SpriteContents implements $Stitcher$Entry, $AutoCloseable, $SpriteContentsExtension$1, $SpriteContentsAccessor$1, $SpriteContentsExtension, $SpriteContentsExtension$2, $SpriteContentsAccessor, $SpriteTransparencyLevelHolder, $SpriteContentsExtended, $SpriteContentsInvoker {
        name(): $ResourceLocation;
        close(): void;
        width(): number;
        height(): number;
        metadata(): $ResourceMetadata;
        getOrCreatePBRHolder(): $PBRSpriteHolder;
        isTransparent(frame: number, x: number, y: number): boolean;
        getFrameCount(): number;
        getCreatedTicker(): $SpriteContents$Ticker;
        getUniqueFrames(): $IntStream;
        increaseMipLevel(mipLevel: number): void;
        sodium$isActive(): boolean;
        sodium$setActive(arg0: boolean): void;
        upload(x: number, y: number, frameX: number, frameY: number, atlasData: $NativeImage[]): void;
        fusionTextureMetadata(): $Pair<any, any>;
        clearFusionTextureMetadata(): void;
        sodium$hasAnimation(): boolean;
        createTicker(): $SpriteTicker;
        getPBRHolder(): $PBRSpriteHolder;
        uploadFirstFrame(x: number, y: number): void;
        embeddium$getTransparencyLevel(): $SpriteTransparencyLevel;
        getOriginalImage(): $NativeImage;
        getAnimatedTexture(): $SpriteContents$AnimatedTexture;
        invokeUpload(x: number, y: number, frameX: number, frameY: number, atlasData: $NativeImage[]): void;
        getImages(): $NativeImage[];
        animatedTexture: $SpriteContents$AnimatedTexture;
        byMipLevel: $NativeImage[];
        originalImage: $NativeImage;
        constructor(name: $ResourceLocation_, frameSize: $FrameSize_, originalImage: $NativeImage, metadata: $ResourceMetadata_);
        get orCreatePBRHolder(): $PBRSpriteHolder;
        get frameCount(): number;
        get createdTicker(): $SpriteContents$Ticker;
        get uniqueFrames(): $IntStream;
        get PBRHolder(): $PBRSpriteHolder;
        get images(): $NativeImage[];
    }
    export class $DynamicTexture extends $AbstractTexture implements $Dumpable, $IMixinDynamicTexture {
        getPixels(): $NativeImage;
        setPixels(pixels: $NativeImage): void;
        upload(): void;
        wrapOperation$jjd000$moonlight$forceMipMap(arg0: number, arg1: number, arg2: number, arg3: $Operation_$1<any>): void;
        wrapOperation$jjd000$moonlight$forceMipMap(arg0: $NativeImage, arg1: number, arg2: number, arg3: number, arg4: boolean, arg5: $Operation_$1<any>): void;
        dumpContents(resourceLocation: $ResourceLocation_, path: $Path_): void;
        setPixelsKonkrete(pixels: $NativeImage): void;
        getPixelsKonkrete(): $NativeImage;
        static NOT_ASSIGNED: number;
        mipmap: boolean;
        blur: boolean;
        constructor(pixels: $NativeImage);
        constructor(width: number, height: number, useCalloc: boolean);
    }
    export class $SpriteContents$AnimatedTexture implements $SpriteContentsAnimatedTextureAccessor, $SpriteContentsAnimationAccessor, $SpriteContentsAnimationAccessor$1 {
        getUniqueFrames(): $IntStream;
        getFrameX(frameIndex: number): number;
        getFrameY(frameIndex: number): number;
        createTicker(): $SpriteTicker;
        uploadFirstFrame(x: number, y: number): void;
        uploadFrame(x: number, y: number, frameIndex: number): void;
        getFrameRowSize(): number;
        invokeUploadFrame(x: number, y: number, frameIndex: number): void;
        getFrames(): $List<$SpriteContents$FrameInfo>;
        frames: $List<$SpriteContents$FrameInfo>;
        frameRowSize: number;
        interpolateFrames: boolean;
        get uniqueFrames(): $IntStream;
    }
    export class $TextureAtlas extends $AbstractTexture implements $Dumpable, $Tickable, $TextureAtlasAccessor, $TextureAtlasExtension, $SpriteFinderImpl$SpriteFinderAccess$1, $SpriteFinderImpl$SpriteFinderAccess, $SpriteFinderImpl$SpriteFinderAccess$2 {
        location(): $ResourceLocation;
        getWidth(): number;
        getHeight(): number;
        getOrCreatePBRHolder(): $PBRAtlasHolder;
        fabric_spriteFinder(): $SpriteFinderImpl;
        cycleAnimationFrames(): void;
        tick(): void;
        upload(preparations: $SpriteLoader$Preparations_): void;
        getSprite(name: $ResourceLocation_): $TextureAtlasSprite;
        wrapOperation$chf000$nolijium$a(arg0: $TextureAtlas, arg1: $Operation_): $List<any>;
        dumpContents(resourceLocation: $ResourceLocation_, path: $Path_): void;
        maxSupportedTextureSize(): number;
        getPBRHolder(): $PBRAtlasHolder;
        updateFilter(preparations: $SpriteLoader$Preparations_): void;
        getTextures(): $Map<$ResourceLocation, $TextureAtlasSprite>;
        clearTextureData(): void;
        getMipLevel(): number;
        getTexturesByName(): $Map<$ResourceLocation, $TextureAtlasSprite>;
        callGetWidth(): number;
        callGetHeight(): number;
        static NOT_ASSIGNED: number;
        /**
         * @deprecated
         */
        static LOCATION_BLOCKS: $ResourceLocation;
        mipmap: boolean;
        /**
         * @deprecated
         */
        static LOCATION_PARTICLES: $ResourceLocation;
        texturesByName: $Map<$ResourceLocation, $TextureAtlasSprite>;
        blur: boolean;
        sprites: $List<$SpriteContents>;
        constructor(location: $ResourceLocation_);
        get width(): number;
        get height(): number;
        get orCreatePBRHolder(): $PBRAtlasHolder;
        get PBRHolder(): $PBRAtlasHolder;
        get textures(): $Map<$ResourceLocation, $TextureAtlasSprite>;
        get mipLevel(): number;
    }
    export class $Stitcher$Region<T extends $Stitcher$Entry> {
        walk(spriteLoader: $Stitcher$SpriteLoader_<T>): void;
        add(holder: $Stitcher$Holder_<T>): boolean;
        getX(): number;
        getY(): number;
        constructor(originX: number, originY: number, width: number, height: number);
        get x(): number;
        get y(): number;
    }
    export class $SimpleTexture extends $AbstractTexture implements $SimpleTextureAccessor, $IExtendedSimpleTexture {
        irons_spellbooks$isRectangular(): boolean;
        getLocation(): $ResourceLocation;
        static NOT_ASSIGNED: number;
        mipmap: boolean;
        blur: boolean;
        constructor(location: $ResourceLocation_);
        get location(): $ResourceLocation;
    }
    export class $TextureManager implements $PreparableReloadListener, $Tickable, $AutoCloseable {
        register(path: $ResourceLocation_, texture: $AbstractTexture): void;
        register(name: string, texture: $DynamicTexture): $ResourceLocation;
        close(): void;
        release(path: $ResourceLocation_): void;
        reload(stage: $PreparableReloadListener$PreparationBarrier_, resourceManager: $ResourceManager, preparationsProfiler: $ProfilerFiller, reloadProfiler: $ProfilerFiller, backgroundExecutor: $Executor_, gameExecutor: $Executor_): $CompletableFuture<void>;
        tick(): void;
        preload(path: $ResourceLocation_, backgroundExecutor: $Executor_): $CompletableFuture<void>;
        getTexture(path: $ResourceLocation_): $AbstractTexture;
        getTexture(path: $ResourceLocation_, defaultTexture: $AbstractTexture): $AbstractTexture;
        dumpAllSheets(path: $Path_): void;
        bindForSetup(path: $ResourceLocation_): void;
        getName(): string;
        byPath: $Map<$ResourceLocation, $AbstractTexture>;
        static INTENTIONAL_MISSING_TEXTURE: $ResourceLocation;
        constructor(resourceManager: $ResourceManager);
        get name(): string;
    }
    export class $TextureAtlasSprite implements $TextureAtlasSpriteExtension {
        wrap(consumer: $VertexConsumer): $VertexConsumer;
        contents(): $SpriteContents;
        getX(): number;
        /**
         * @return the minimum U coordinate to use when rendering this sprite
         */
        getU0(): number;
        getV(u: number): number;
        getU(u: number): number;
        /**
         * @return the minimum U coordinate to use when rendering this sprite
         */
        getV1(): number;
        /**
         * @return the minimum U coordinate to use when rendering this sprite
         */
        getU1(): number;
        /**
         * @return the minimum U coordinate to use when rendering this sprite
         */
        getV0(): number;
        getVOffset(u: number): number;
        getUOffset(u: number): number;
        setFusionTextureType(type: $TextureType<any>): void;
        getFusionTextureType(): $TextureType<any>;
        getY(): number;
        atlasLocation(): $ResourceLocation;
        getPixelRGBA(arg0: number, arg1: number, arg2: number): number;
        createTicker(): $TextureAtlasSprite$Ticker;
        uploadFirstFrame(): void;
        /**
         * @return the minimum U coordinate to use when rendering this sprite
         */
        uvShrinkRatio(): number;
        v0: number;
        u0: number;
        v1: number;
        u1: number;
        constructor(atlasLocation: $ResourceLocation_, contents: $SpriteContents, originX: number, originY: number, x: number, y: number);
        get x(): number;
        get y(): number;
    }
    export class $SimpleTexture$TextureImage implements $Closeable {
        static load(resourceManager: $ResourceManager, location: $ResourceLocation_): $SimpleTexture$TextureImage;
        close(): void;
        getImage(): $NativeImage;
        throwIfError(): void;
        getTextureMetadata(): $TextureMetadataSection;
        constructor(exception: $IOException);
        constructor(metadata: $TextureMetadataSection | null, image: $NativeImage);
        get image(): $NativeImage;
        get textureMetadata(): $TextureMetadataSection;
    }
    export class $MipmapGenerator {
        static generateMipLevels(images: $NativeImage[], mipLevel: number): $NativeImage[];
    }
    export class $TextureAtlasSprite$Ticker {
    }
    export interface $TextureAtlasSprite$Ticker extends $AutoCloseable {
        close(): void;
        tickAndUpload(): void;
    }
}
