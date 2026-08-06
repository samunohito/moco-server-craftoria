import { $ProfilerFiller } from "@package/net/minecraft/util/profiling";
import { $Executor_, $CompletableFuture } from "@package/java/util/concurrent";
import { $SplashRenderer } from "@package/net/minecraft/client/gui/components";
import { $MobEffect } from "@package/net/minecraft/world/effect";
import { $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $User } from "@package/net/minecraft/client";
import { $ResourceManager, $SimplePreparableReloadListener, $PreparableReloadListener$PreparationBarrier_, $PreparableReloadListener } from "@package/net/minecraft/server/packs/resources";
import { $Splitter } from "@package/com/google/common/base";
import { $List, $UUID_, $Set_ } from "@package/java/util";
import { $PaintingVariant_ } from "@package/net/minecraft/world/entity/decoration";
import { $MetadataSectionSerializer } from "@package/net/minecraft/server/packs/metadata";
import { $Supplier } from "@package/java/util/function";
import { $BuiltInPackSource, $KnownPack } from "@package/net/minecraft/server/packs/repository";
import { $Holder_ } from "@package/net/minecraft/core";
import { $Path_, $Path } from "@package/java/nio/file";
import { $PackLocationInfo, $VanillaPackResources } from "@package/net/minecraft/server/packs";
import { $GameProfile } from "@package/com/mojang/authlib";
import { $TextureAtlasHolderInvoker } from "@package/moe/prwk/emiffect/mixin";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $MapDecoration_ } from "@package/net/minecraft/world/level/saveddata/maps";
import { $TextureAtlasSprite, $HttpTexture, $TextureManager } from "@package/net/minecraft/client/renderer/texture";
import { $Enum, $Record, $AutoCloseable } from "@package/java/lang";
import { $Property_ } from "@package/com/mojang/authlib/properties";
import { $MinecraftSessionService, $MinecraftProfileTexture } from "@package/com/mojang/authlib/minecraft";
import { $DirectoryValidator } from "@package/net/minecraft/world/level/validation";
export * as model from "@package/net/minecraft/client/resources/model";
export * as metadata from "@package/net/minecraft/client/resources/metadata";
export * as sounds from "@package/net/minecraft/client/resources/sounds";
export * as server from "@package/net/minecraft/client/resources/server";
export * as language from "@package/net/minecraft/client/resources/language";

declare module "@package/net/minecraft/client/resources" {
    export class $PlayerSkin$Model extends $Enum<$PlayerSkin$Model> {
        static values(): $PlayerSkin$Model[];
        static valueOf(name: string): $PlayerSkin$Model;
        id(): string;
        static byName(name: string | null): $PlayerSkin$Model;
        static SLIM: $PlayerSkin$Model;
        static WIDE: $PlayerSkin$Model;
    }
    /**
     * Values that may be interpreted as {@link $PlayerSkin$Model}.
     */
    export type $PlayerSkin$Model_ = "slim" | "wide";
    export class $SplashManager extends $SimplePreparableReloadListener<$List<string>> {
        getSplash(): $SplashRenderer;
        static SPLASHES_LOCATION: $ResourceLocation;
        constructor(user: $User);
        get splash(): $SplashRenderer;
    }
    export class $GrassColorReloadListener extends $SimplePreparableReloadListener<number[]> {
        constructor();
    }
    export class $TextureAtlasHolder implements $PreparableReloadListener, $AutoCloseable, $TextureAtlasHolderInvoker {
        close(): void;
        reload(preparationBarrier: $PreparableReloadListener$PreparationBarrier_, resourceManager: $ResourceManager, preparationsProfiler: $ProfilerFiller, reloadProfiler: $ProfilerFiller, backgroundExecutor: $Executor_, gameExecutor: $Executor_): $CompletableFuture<void>;
        /**
         * Gets a sprite associated with the passed resource location.
         */
        getSprite(location: $ResourceLocation_): $TextureAtlasSprite;
        getName(): string;
        /**
         * Gets a sprite associated with the passed resource location.
         */
        emiffect$invokeGetSprite(location: $ResourceLocation_): $TextureAtlasSprite;
        constructor(textureManager: $TextureManager, textureAtlasLocation: $ResourceLocation_, atlasInfoLocation: $ResourceLocation_);
        constructor(textureManager: $TextureManager, textureAtlasLocation: $ResourceLocation_, atlasInfoLocation: $ResourceLocation_, metadataSections: $Set_<$MetadataSectionSerializer<never>>);
        get name(): string;
    }
    export class $IndexedAssetSource {
        static createIndexFs(assetDirectory: $Path_, assetIndex: string): $Path;
        static PATH_SPLITTER: $Splitter;
        constructor();
    }
    export class $SkinManager$TextureCache {
        getOrLoad(texture: $MinecraftProfileTexture): $CompletableFuture<$ResourceLocation>;
        handler$fen000$chat_heads$chatheads$rememberTextureLocation(cir: $CallbackInfoReturnable<any>, id: $ResourceLocation_, httpTexture: $HttpTexture): void;
        textureManager: $TextureManager;
    }
    export class $MobEffectTextureManager extends $TextureAtlasHolder {
        get(effect: $Holder_<$MobEffect>): $TextureAtlasSprite;
        constructor(textureManager: $TextureManager);
    }
    export class $PaintingTextureManager extends $TextureAtlasHolder {
        get(paintingVariant: $PaintingVariant_): $TextureAtlasSprite;
        getBackSprite(): $TextureAtlasSprite;
        constructor(textureManager: $TextureManager);
        get backSprite(): $TextureAtlasSprite;
    }
    export class $FoliageColorReloadListener extends $SimplePreparableReloadListener<number[]> {
        constructor();
    }
    export class $LegacyStuffWrapper {
        /**
         * @deprecated
         */
        static getPixels(manager: $ResourceManager, location: $ResourceLocation_): number[];
        constructor();
    }
    export class $MapDecorationTextureManager extends $TextureAtlasHolder {
        get(mapDecoration: $MapDecoration_): $TextureAtlasSprite;
        constructor(textureManager: $TextureManager);
    }
    export class $SkinManager$CacheKey extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $SkinManager$CacheKey}.
     */
    export type $SkinManager$CacheKey_ = { packedTextures?: $Property_, profileId?: $UUID_,  } | [packedTextures?: $Property_, profileId?: $UUID_, ];
    export class $DefaultPlayerSkin {
        static get(profile: $GameProfile): $PlayerSkin;
        static get(uuid: $UUID_): $PlayerSkin;
        static getDefaultTexture(): $ResourceLocation;
        constructor();
        static get defaultTexture(): $ResourceLocation;
    }
    export class $PlayerSkin extends $Record {
        model(): $PlayerSkin$Model;
        secure(): boolean;
        texture(): $ResourceLocation;
        textureUrl(): string;
        elytraTexture(): $ResourceLocation;
        capeTexture(): $ResourceLocation;
        constructor(arg0: $ResourceLocation_, arg1: string | null, arg2: $ResourceLocation_ | null, arg3: $ResourceLocation_ | null, arg4: $PlayerSkin$Model_, arg5: boolean);
    }
    /**
     * Values that may be interpreted as {@link $PlayerSkin}.
     */
    export type $PlayerSkin_ = { elytraTexture?: $ResourceLocation_, model?: $PlayerSkin$Model_, secure?: boolean, textureUrl?: string, texture?: $ResourceLocation_, capeTexture?: $ResourceLocation_,  } | [elytraTexture?: $ResourceLocation_, model?: $PlayerSkin$Model_, secure?: boolean, textureUrl?: string, texture?: $ResourceLocation_, capeTexture?: $ResourceLocation_, ];
    export class $SkinManager {
        getOrLoad(profile: $GameProfile): $CompletableFuture<$PlayerSkin>;
        getInsecureSkin(profile: $GameProfile): $PlayerSkin;
        lookupInsecure(profile: $GameProfile): $Supplier<$PlayerSkin>;
        skinTextures: $SkinManager$TextureCache;
        constructor(textureManager: $TextureManager, root: $Path_, sessionService: $MinecraftSessionService, executor: $Executor_);
    }
    export class $ClientPackSource extends $BuiltInPackSource {
        static createVanillaPackSource(assetIndex: $Path_): $VanillaPackResources;
        static HIGH_CONTRAST_PACK: string;
        static VANILLA_PACK_INFO: $PackLocationInfo;
        static VANILLA_ID: string;
        static CORE_PACK_INFO: $KnownPack;
        constructor(assetIndex: $Path_, validator: $DirectoryValidator);
    }
}
