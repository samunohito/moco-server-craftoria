import { $JsonObject_ } from "@package/com/google/gson";
import { $EntityDynamicLightSourceBehavior } from "@package/dev/lambdaurora/lambdynlights/engine/source";
import { $LongSet, $Long2ObjectMap } from "@package/it/unimi/dsi/fastutil/longs";
import { $FlyTowardsPositionParticleAccessor, $SpriteSetAccessor, $ParticleEngineAccessor as $ParticleEngineAccessor$1 } from "@package/einstein/subtle_effects/mixin/client/particle";
import { $RenderBuffers, $MultiBufferSource_, $LightTexture } from "@package/net/minecraft/client/renderer";
import { $Executor_, $CompletableFuture } from "@package/java/util/concurrent";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $CallbackInfo } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $ParticleType_, $SculkChargeParticleOptions, $ParticleGroup, $VibrationParticleOption, $BlockParticleOption, $ParticleOptions, $ColorParticleOption, $SimpleParticleType, $ScalableParticleOptionsBase, $DustParticleOptions, $SculkChargeParticleOptions_, $ParticleOptions_, $DustColorTransitionOptions, $ItemParticleOption, $ShriekParticleOption } from "@package/net/minecraft/core/particles";
import { $ResourceManager, $PreparableReloadListener$PreparationBarrier_, $PreparableReloadListener } from "@package/net/minecraft/server/packs/resources";
import { $Camera } from "@package/net/minecraft/client";
import { $Queue, $Map, $List, $List_ } from "@package/java/util";
import { $Frustum } from "@package/net/minecraft/client/renderer/culling";
import { $CellHasher } from "@package/dev/lambdaurora/lambdynlights/engine";
import { $ChunkRebuildStatus } from "@package/dev/lambdaurora/lambdynlights/engine/scheduler";
import { $RandomSource } from "@package/net/minecraft/util";
import { $ClientLevel } from "@package/net/minecraft/client/multiplayer";
import { $Consumer_, $Predicate_ } from "@package/java/util/function";
import { $BlockPos_, $Direction_ } from "@package/net/minecraft/core";
import { $ExtendedParticleManager } from "@package/de/dafuqs/spectrum/particle/render";
import { $ParticleManagerAccessor } from "@package/de/dafuqs/spectrum/mixin/client/accessors";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $Operation_ } from "@package/nolijium/mixinextras/injector/wrapoperation";
import { $TextureAtlasSprite, $TextureManager, $TextureAtlas } from "@package/net/minecraft/client/renderer/texture";
import { $Record } from "@package/java/lang";
import { $SpatialLookupEntry } from "@package/dev/lambdaurora/lambdynlights/engine/lookup";
import { $IntList } from "@package/it/unimi/dsi/fastutil/ints";
import { $EntityRenderDispatcher } from "@package/net/minecraft/client/renderer/entity";
import { $ProfilerFiller } from "@package/net/minecraft/util/profiling";
import { $Fluid_, $Fluid } from "@package/net/minecraft/world/level/material";
import { $FireworkExplosion_ } from "@package/net/minecraft/world/item/component";
import { $BubbleSetter, $ParticleAccessor as $ParticleAccessor$1, $DripParticleAccessor, $HeartParticleAccessor } from "@package/einstein/subtle_effects/util";
import { $ParticleEngineAccessor as $ParticleEngineAccessor$2 } from "@package/com/telepathicgrunt/the_bumblezone/mixin/client";
import { $ParticleEngineAccessor } from "@package/net/createmod/ponder/mixin/client/accessor";
import { $Stream } from "@package/java/util/stream";
import { $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $VertexConsumer, $BufferBuilder, $PoseStack, $Tesselator } from "@package/com/mojang/blaze3d/vertex";
import { $ParticleAccessor } from "@package/io/redspace/ironsspellbooks/mixin";
import { $AABB_, $Vec3, $AABB, $BlockHitResult } from "@package/net/minecraft/world/phys";
import { $Quaternionf } from "@package/org/joml";

declare module "@package/net/minecraft/client/particle" {
    export class $ParticleEngine$SpriteParticleRegistration<T extends $ParticleOptions> {
    }
    export interface $ParticleEngine$SpriteParticleRegistration<T extends $ParticleOptions> {
        create(sprites: $SpriteSet): $ParticleProvider<T>;
    }
    /**
     * Values that may be interpreted as {@link $ParticleEngine$SpriteParticleRegistration}.
     */
    export type $ParticleEngine$SpriteParticleRegistration_<T> = ((arg0: $SpriteSet) => $ParticleProvider<T>);
    export class $PortalParticle$Provider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprite: $SpriteSet);
    }
    export class $GlowParticle extends $TextureSheetParticle {
        getLightColor(partialTick: number): number;
        stoppedByCollision: boolean;
        bCol: number;
        zo: number;
        yo: number;
        gravity: number;
        gCol: number;
        xo: number;
        alpha: number;
        x: number;
        y: number;
        z: number;
        rCol: number;
        constructor(level: $ClientLevel, x: number, arg2: number, y: number, arg4: number, z: number, arg6: number, xSpeed: $SpriteSet);
    }
    export class $FallingDustParticle extends $TextureSheetParticle {
        stoppedByCollision: boolean;
        bCol: number;
        zo: number;
        yo: number;
        gravity: number;
        gCol: number;
        xo: number;
        alpha: number;
        x: number;
        y: number;
        z: number;
        rCol: number;
    }
    export class $DustPlumeParticle extends $BaseAshSmokeParticle {
        stoppedByCollision: boolean;
        bCol: number;
        zo: number;
        yo: number;
        gravity: number;
        gCol: number;
        xo: number;
        alpha: number;
        x: number;
        y: number;
        z: number;
        rCol: number;
    }
    export class $MobAppearanceParticle$Provider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor();
    }
    export class $DragonBreathParticle extends $TextureSheetParticle {
        stoppedByCollision: boolean;
        bCol: number;
        zo: number;
        yo: number;
        gravity: number;
        gCol: number;
        xo: number;
        alpha: number;
        x: number;
        y: number;
        z: number;
        rCol: number;
    }
    export class $FlyStraightTowardsParticle extends $TextureSheetParticle {
        getLightColor(partialTick: number): number;
        stoppedByCollision: boolean;
        bCol: number;
        zo: number;
        yo: number;
        gravity: number;
        gCol: number;
        xo: number;
        alpha: number;
        x: number;
        y: number;
        z: number;
        rCol: number;
    }
    export class $SpitParticle$Provider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $LavaParticle$Provider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $TotemParticle$Provider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $GustParticle$Provider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $FireworkParticles$Starter extends $NoRenderParticle {
        createParticle(x: number, arg1: number, y: number, arg3: number, z: number, arg5: number, xSpeed: $IntList, arg7: $IntList, ySpeed: boolean, arg9: boolean): void;
        createParticleBall(speed: number, arg1: number, radius: $IntList, colors: $IntList, fadeColors: boolean, trail: boolean): void;
        createParticleShape(speed: number, arg1: number[][], coords: $IntList, colors: $IntList, fadeColors: boolean, trail: boolean, twinkle: boolean): void;
        createParticleBurst(colors: $IntList, fadeColors: $IntList, trail: boolean, twinkle: boolean): void;
        stoppedByCollision: boolean;
        bCol: number;
        zo: number;
        yo: number;
        gravity: number;
        gCol: number;
        xo: number;
        alpha: number;
        x: number;
        y: number;
        z: number;
        rCol: number;
        constructor(level: $ClientLevel, x: number, arg2: number, y: number, arg4: number, z: number, arg6: number, xd: $ParticleEngine, arg8: $List_<$FireworkExplosion_>);
    }
    export class $ExplodeParticle$Provider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $TerrainParticle$DustPillarProvider implements $ParticleProvider<$BlockParticleOption> {
        createParticle(arg0: $BlockParticleOption, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $Particle;
        constructor();
    }
    export class $HeartParticle$Provider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $AshParticle$Provider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $SquidInkParticle$Provider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $SingleQuadParticle$FacingCameraMode {
        static LOOKAT_Y: $SingleQuadParticle$FacingCameraMode;
        static LOOKAT_XYZ: $SingleQuadParticle$FacingCameraMode;
    }
    export interface $SingleQuadParticle$FacingCameraMode {
        setRotation(quaternion: $Quaternionf, camera: $Camera, partialTick: number): void;
    }
    /**
     * Values that may be interpreted as {@link $SingleQuadParticle$FacingCameraMode}.
     */
    export type $SingleQuadParticle$FacingCameraMode_ = ((arg0: $Quaternionf, arg1: $Camera, arg2: number) => void);
    export class $CampfireSmokeParticle$SignalProvider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $SpellParticle extends $TextureSheetParticle {
        handler$dbj000$utilitarian$alterTransparency(arg0: $CallbackInfo): void;
        stoppedByCollision: boolean;
        bCol: number;
        zo: number;
        yo: number;
        gravity: number;
        gCol: number;
        xo: number;
        alpha: number;
        x: number;
        y: number;
        z: number;
        rCol: number;
    }
    export class $GustParticle extends $TextureSheetParticle {
        getLightColor(partialTick: number): number;
        stoppedByCollision: boolean;
        bCol: number;
        zo: number;
        yo: number;
        gravity: number;
        gCol: number;
        xo: number;
        alpha: number;
        x: number;
        y: number;
        z: number;
        rCol: number;
    }
    export class $HeartParticle$AngryVillagerProvider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $SculkChargePopParticle extends $TextureSheetParticle {
        getLightColor(partialTick: number): number;
        stoppedByCollision: boolean;
        bCol: number;
        zo: number;
        yo: number;
        gravity: number;
        gCol: number;
        xo: number;
        alpha: number;
        x: number;
        y: number;
        z: number;
        rCol: number;
    }
    export class $WhiteSmokeParticle extends $BaseAshSmokeParticle {
        stoppedByCollision: boolean;
        bCol: number;
        zo: number;
        yo: number;
        gravity: number;
        gCol: number;
        xo: number;
        alpha: number;
        x: number;
        y: number;
        z: number;
        rCol: number;
    }
    export class $PortalParticle extends $TextureSheetParticle {
        getLightColor(partialTick: number): number;
        stoppedByCollision: boolean;
        bCol: number;
        zo: number;
        yo: number;
        gravity: number;
        gCol: number;
        xo: number;
        alpha: number;
        x: number;
        y: number;
        z: number;
        rCol: number;
    }
    export class $SpellParticle$WitchProvider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $SimpleAnimatedParticle extends $TextureSheetParticle {
        setColor(color: number): void;
        setFadeColor(color: number): void;
        getLightColor(partialTick: number): number;
        stoppedByCollision: boolean;
        bCol: number;
        zo: number;
        yo: number;
        gravity: number;
        gCol: number;
        xo: number;
        alpha: number;
        x: number;
        y: number;
        z: number;
        rCol: number;
        set color(value: number);
        set fadeColor(value: number);
    }
    export class $DustPlumeParticle$Provider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $SmokeParticle extends $BaseAshSmokeParticle {
        stoppedByCollision: boolean;
        bCol: number;
        zo: number;
        yo: number;
        gravity: number;
        gCol: number;
        xo: number;
        alpha: number;
        x: number;
        y: number;
        z: number;
        rCol: number;
    }
    export class $FlameParticle extends $RisingParticle {
        getLightColor(partialTick: number): number;
        stoppedByCollision: boolean;
        bCol: number;
        zo: number;
        yo: number;
        gravity: number;
        gCol: number;
        xo: number;
        alpha: number;
        x: number;
        y: number;
        z: number;
        rCol: number;
    }
    export class $SuspendedTownParticle$HappyVillagerProvider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $ReversePortalParticle extends $PortalParticle {
        stoppedByCollision: boolean;
        bCol: number;
        zo: number;
        yo: number;
        gravity: number;
        gCol: number;
        xo: number;
        alpha: number;
        x: number;
        y: number;
        z: number;
        rCol: number;
    }
    export class $GlowParticle$WaxOffProvider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $SuspendedTownParticle extends $TextureSheetParticle {
        stoppedByCollision: boolean;
        bCol: number;
        zo: number;
        yo: number;
        gravity: number;
        gCol: number;
        xo: number;
        alpha: number;
        x: number;
        y: number;
        z: number;
        rCol: number;
        constructor(level: $ClientLevel, x: number, arg2: number, y: number, arg4: number, z: number, arg6: number);
    }
    export class $SonicBoomParticle extends $HugeExplosionParticle implements $EntityDynamicLightSourceBehavior {
        stoppedByCollision: boolean;
        bCol: number;
        zo: number;
        yo: number;
        gravity: number;
        gCol: number;
        xo: number;
        alpha: number;
        x: number;
        y: number;
        z: number;
        rCol: number;
    }
    export class $PlayerCloudParticle$SneezeProvider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $DustParticle extends $DustParticleBase<$DustParticleOptions> {
        stoppedByCollision: boolean;
        bCol: number;
        zo: number;
        yo: number;
        gravity: number;
        gCol: number;
        xo: number;
        alpha: number;
        x: number;
        y: number;
        z: number;
        rCol: number;
    }
    export class $WhiteAshParticle$Provider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $LavaParticle extends $TextureSheetParticle {
        getLightColor(partialTick: number): number;
        stoppedByCollision: boolean;
        bCol: number;
        zo: number;
        yo: number;
        gravity: number;
        gCol: number;
        xo: number;
        alpha: number;
        x: number;
        y: number;
        z: number;
        rCol: number;
    }
    export class $BreakingItemParticle$SnowballProvider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor();
    }
    export class $GustSeedParticle$Provider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(scale: number, arg1: number, lifetime: number);
    }
    export class $SquidInkParticle$GlowInkProvider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $SingleQuadParticle extends $Particle {
        getFacingCameraMode(): $SingleQuadParticle$FacingCameraMode;
        getQuadSize(scaleFactor: number): number;
        stoppedByCollision: boolean;
        bCol: number;
        zo: number;
        yo: number;
        gravity: number;
        gCol: number;
        xo: number;
        alpha: number;
        x: number;
        y: number;
        z: number;
        rCol: number;
        get facingCameraMode(): $SingleQuadParticle$FacingCameraMode;
    }
    export class $Particle$LifetimeAlpha extends $Record {
        isOpaque(): boolean;
        startAlpha(): number;
        currentAlphaForAge(age: number, lifetime: number, partialTick: number): number;
        startAtNormalizedAge(): number;
        endAlpha(): number;
        endAtNormalizedAge(): number;
        static ALWAYS_OPAQUE: $Particle$LifetimeAlpha;
        constructor(startAlpha: number, endAlpha: number, startAtNormalizedAge: number, endAtNormalizedAge: number);
        get opaque(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $Particle$LifetimeAlpha}.
     */
    export type $Particle$LifetimeAlpha_ = { startAlpha?: number, endAlpha?: number, startAtNormalizedAge?: number, endAtNormalizedAge?: number,  } | [startAlpha?: number, endAlpha?: number, startAtNormalizedAge?: number, endAtNormalizedAge?: number, ];
    export class $BlockMarker extends $TextureSheetParticle {
        stoppedByCollision: boolean;
        bCol: number;
        zo: number;
        yo: number;
        gravity: number;
        gCol: number;
        xo: number;
        alpha: number;
        x: number;
        y: number;
        z: number;
        rCol: number;
    }
    export class $ParticleRenderType {
        static NO_RENDER: $ParticleRenderType;
        static TERRAIN_SHEET: $ParticleRenderType;
        static PARTICLE_SHEET_LIT: $ParticleRenderType;
        static PARTICLE_SHEET_OPAQUE: $ParticleRenderType;
        static PARTICLE_SHEET_TRANSLUCENT: $ParticleRenderType;
        static CUSTOM: $ParticleRenderType;
    }
    export interface $ParticleRenderType {
        begin(tesselator: $Tesselator, textureManager: $TextureManager): $BufferBuilder;
        isTranslucent(): boolean;
        get translucent(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ParticleRenderType}.
     */
    export type $ParticleRenderType_ = ((arg0: $Tesselator, arg1: $TextureManager) => $BufferBuilder);
    export class $SuspendedTownParticle$DolphinSpeedProvider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $CritParticle$MagicProvider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $SoulParticle$EmissiveProvider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprite: $SpriteSet);
    }
    export class $FlyTowardsPositionParticle$VaultConnectionProvider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprite: $SpriteSet);
    }
    export class $WaterDropParticle$Provider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $BaseAshSmokeParticle extends $TextureSheetParticle {
        stoppedByCollision: boolean;
        bCol: number;
        zo: number;
        yo: number;
        gravity: number;
        gCol: number;
        xo: number;
        alpha: number;
        x: number;
        y: number;
        z: number;
        rCol: number;
    }
    export class $FlameParticle$SmallFlameProvider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $NoteParticle$Provider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $CherryParticle extends $TextureSheetParticle {
        stoppedByCollision: boolean;
        bCol: number;
        zo: number;
        yo: number;
        gravity: number;
        gCol: number;
        xo: number;
        alpha: number;
        x: number;
        y: number;
        z: number;
        rCol: number;
    }
    export class $AshParticle extends $BaseAshSmokeParticle {
        stoppedByCollision: boolean;
        bCol: number;
        zo: number;
        yo: number;
        gravity: number;
        gCol: number;
        xo: number;
        alpha: number;
        x: number;
        y: number;
        z: number;
        rCol: number;
    }
    export class $FireworkParticles$SparkParticle extends $SimpleAnimatedParticle {
        stoppedByCollision: boolean;
        bCol: number;
        zo: number;
        yo: number;
        gravity: number;
        gCol: number;
        xo: number;
        alpha: number;
        x: number;
        y: number;
        z: number;
        rCol: number;
    }
    export class $FlyTowardsPositionParticle$NautilusProvider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprite: $SpriteSet);
    }
    export class $CritParticle$DamageIndicatorProvider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $SculkChargeParticle$Provider extends $Record implements $ParticleProvider<$SculkChargeParticleOptions> {
        sprite(): $SpriteSet;
        createParticle(arg0: $SculkChargeParticleOptions_, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $Particle;
        constructor(arg0: $SpriteSet);
    }
    /**
     * Values that may be interpreted as {@link $SculkChargeParticle$Provider}.
     */
    export type $SculkChargeParticle$Provider_ = { sprite?: $SpriteSet,  } | [sprite?: $SpriteSet, ];
    export class $HugeExplosionParticle$Provider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $DripParticle extends $TextureSheetParticle implements $DripParticleAccessor {
        getType(): $Fluid;
        getLightColor(partialTick: number): number;
        static createObsidianTearLandParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $TextureSheetParticle;
        static createDripstoneWaterHangParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $TextureSheetParticle;
        static createDripstoneLavaFallParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $TextureSheetParticle;
        static createDripstoneWaterFallParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $TextureSheetParticle;
        static createSporeBlossomFallParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $TextureSheetParticle;
        static createObsidianTearHangParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $TextureSheetParticle;
        static createDripstoneLavaHangParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $TextureSheetParticle;
        static createObsidianTearFallParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $TextureSheetParticle;
        static createNectarFallParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $TextureSheetParticle;
        static createWaterHangParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $TextureSheetParticle;
        static createWaterFallParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $TextureSheetParticle;
        static createLavaHangParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $TextureSheetParticle;
        static createLavaFallParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $TextureSheetParticle;
        static createHoneyHangParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $TextureSheetParticle;
        static createLavaLandParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $TextureSheetParticle;
        static createHoneyFallParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $TextureSheetParticle;
        static createHoneyLandParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $TextureSheetParticle;
        /**
         * Returns `true` if this effect has not yet expired. "I feel happy! I feel happy!"
         */
        subtleEffects$isSilent(): boolean;
        /**
         * Called to indicate that this particle effect has expired and should be discontinued.
         */
        subtleEffects$setSilent(): void;
        stoppedByCollision: boolean;
        bCol: number;
        zo: number;
        yo: number;
        gravity: number;
        gCol: number;
        xo: number;
        alpha: number;
        x: number;
        y: number;
        z: number;
        rCol: number;
        constructor(level: $ClientLevel, x: number, arg2: number, y: number, arg4: $Fluid_);
        get type(): $Fluid;
    }
    export class $CampfireSmokeParticle extends $TextureSheetParticle {
        stoppedByCollision: boolean;
        bCol: number;
        zo: number;
        yo: number;
        gravity: number;
        gCol: number;
        xo: number;
        alpha: number;
        x: number;
        y: number;
        z: number;
        rCol: number;
    }
    export class $BreakingItemParticle$Provider implements $ParticleProvider<$ItemParticleOption> {
        createParticle(type: $ItemParticleOption, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor();
    }
    export class $WakeParticle$Provider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $PlayerCloudParticle$Provider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $FireworkParticles {
        constructor();
    }
    export class $ParticleEngine$MutableSpriteSet implements $SpriteSet, $SpriteSetAccessor {
        get(random: $RandomSource): $TextureAtlasSprite;
        get(particleAge: number, particleMaxAge: number): $TextureAtlasSprite;
        rebind(sprites: $List_<$TextureAtlasSprite>): void;
        getSprites(): $List<$TextureAtlasSprite>;
        sprites: $List<$TextureAtlasSprite>;
        constructor();
    }
    export class $GlowParticle$WaxOnProvider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $GlowParticle$GlowSquidProvider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $DripParticle$DripHangParticle extends $DripParticle {
        stoppedByCollision: boolean;
        bCol: number;
        zo: number;
        yo: number;
        gravity: number;
        gCol: number;
        xo: number;
        alpha: number;
        x: number;
        y: number;
        z: number;
        rCol: number;
        constructor(level: $ClientLevel, x: number, arg2: number, y: number, arg4: $Fluid_, z: $ParticleOptions_);
    }
    export class $ParticleProvider$Sprite<T extends $ParticleOptions> {
    }
    export interface $ParticleProvider$Sprite<T extends $ParticleOptions> {
        createParticle(type: T, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $TextureSheetParticle;
    }
    /**
     * Values that may be interpreted as {@link $ParticleProvider$Sprite}.
     */
    export type $ParticleProvider$Sprite_<T> = ((arg0: T, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number) => $TextureSheetParticle);
    export class $GlowParticle$ScrapeProvider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $SuspendedParticle$CrimsonSporeProvider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $DripParticle$FallAndLandParticle extends $DripParticle$FallingParticle implements $DripParticleAccessor {
        stoppedByCollision: boolean;
        bCol: number;
        zo: number;
        yo: number;
        gravity: number;
        gCol: number;
        xo: number;
        alpha: number;
        x: number;
        y: number;
        z: number;
        rCol: number;
        constructor(level: $ClientLevel, x: number, arg2: number, y: number, arg4: $Fluid_, z: $ParticleOptions_);
    }
    export class $BreakingItemParticle$SlimeProvider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor();
    }
    export class $SmokeParticle$Provider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $FireworkParticles$OverlayParticle extends $TextureSheetParticle {
        stoppedByCollision: boolean;
        bCol: number;
        zo: number;
        yo: number;
        gravity: number;
        gCol: number;
        xo: number;
        alpha: number;
        x: number;
        y: number;
        z: number;
        rCol: number;
    }
    export class $ShriekParticle$Provider implements $ParticleProvider<$ShriekParticleOption> {
        createParticle(type: $ShriekParticleOption, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprite: $SpriteSet);
    }
    export class $ExplodeParticle extends $TextureSheetParticle {
        stoppedByCollision: boolean;
        bCol: number;
        zo: number;
        yo: number;
        gravity: number;
        gCol: number;
        xo: number;
        alpha: number;
        x: number;
        y: number;
        z: number;
        rCol: number;
    }
    export class $SculkChargePopParticle$Provider extends $Record implements $ParticleProvider<$SimpleParticleType> {
        sprite(): $SpriteSet;
        createParticle(arg0: $SimpleParticleType, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $Particle;
        constructor(arg0: $SpriteSet);
    }
    /**
     * Values that may be interpreted as {@link $SculkChargePopParticle$Provider}.
     */
    export type $SculkChargePopParticle$Provider_ = { sprite?: $SpriteSet,  } | [sprite?: $SpriteSet, ];
    export class $SuspendedTownParticle$ComposterFillProvider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $NoRenderParticle extends $Particle {
        stoppedByCollision: boolean;
        bCol: number;
        zo: number;
        yo: number;
        gravity: number;
        gCol: number;
        xo: number;
        alpha: number;
        x: number;
        y: number;
        z: number;
        rCol: number;
    }
    export class $BubbleParticle extends $TextureSheetParticle implements $BubbleSetter {
        subtleEffects$setupBubble(arg0: $SpriteSet, arg1: boolean): void;
        stoppedByCollision: boolean;
        bCol: number;
        zo: number;
        yo: number;
        gravity: number;
        gCol: number;
        xo: number;
        alpha: number;
        x: number;
        y: number;
        z: number;
        rCol: number;
        constructor(level: $ClientLevel, x: number, arg2: number, y: number, arg4: number, z: number, arg6: number);
    }
    export class $SoulParticle extends $RisingParticle {
        getLightColor(partialTick: number): number;
        stoppedByCollision: boolean;
        bCol: number;
        zo: number;
        yo: number;
        gravity: number;
        gCol: number;
        xo: number;
        alpha: number;
        x: number;
        y: number;
        z: number;
        rCol: number;
    }
    export class $DripParticle$FallingParticle extends $DripParticle {
        stoppedByCollision: boolean;
        bCol: number;
        zo: number;
        yo: number;
        gravity: number;
        gCol: number;
        xo: number;
        alpha: number;
        x: number;
        y: number;
        z: number;
        rCol: number;
        constructor(level: $ClientLevel, x: number, arg2: number, y: number, arg4: $Fluid_);
        constructor(level: $ClientLevel, x: number, arg2: number, y: number, arg4: $Fluid_, z: number);
    }
    export class $ItemPickupParticle extends $Particle {
        stoppedByCollision: boolean;
        bCol: number;
        zo: number;
        yo: number;
        gravity: number;
        gCol: number;
        xo: number;
        alpha: number;
        x: number;
        y: number;
        z: number;
        rCol: number;
        constructor(entityRenderDispatcher: $EntityRenderDispatcher, buffers: $RenderBuffers, level: $ClientLevel, itemEntity: $Entity, target: $Entity);
    }
    export class $FireworkParticles$SparkProvider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $BlockMarker$Provider implements $ParticleProvider<$BlockParticleOption> {
        createParticle(arg0: $BlockParticleOption, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $Particle;
        constructor();
    }
    export class $DustParticleBase<T extends $ScalableParticleOptionsBase> extends $TextureSheetParticle {
        stoppedByCollision: boolean;
        bCol: number;
        zo: number;
        yo: number;
        gravity: number;
        gCol: number;
        xo: number;
        alpha: number;
        x: number;
        y: number;
        z: number;
        rCol: number;
    }
    export class $VibrationSignalParticle extends $TextureSheetParticle {
        getLightColor(partialTick: number): number;
        stoppedByCollision: boolean;
        bCol: number;
        zo: number;
        yo: number;
        gravity: number;
        gCol: number;
        xo: number;
        alpha: number;
        x: number;
        y: number;
        z: number;
        rCol: number;
    }
    export class $ParticleProvider<T extends $ParticleOptions> {
    }
    export interface $ParticleProvider<T extends $ParticleOptions> {
        createParticle(type: T, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
    }
    /**
     * Values that may be interpreted as {@link $ParticleProvider}.
     */
    export type $ParticleProvider_<T> = ((arg0: T, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number) => $Particle);
    export class $WaterCurrentDownParticle extends $TextureSheetParticle implements $BubbleSetter {
        subtleEffects$setupBubble(arg0: $SpriteSet, arg1: boolean): void;
        stoppedByCollision: boolean;
        bCol: number;
        zo: number;
        yo: number;
        gravity: number;
        gCol: number;
        xo: number;
        alpha: number;
        x: number;
        y: number;
        z: number;
        rCol: number;
    }
    export class $CampfireSmokeParticle$CosyProvider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $HugeExplosionSeedParticle$Provider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor();
    }
    export class $EndRodParticle extends $SimpleAnimatedParticle {
        stoppedByCollision: boolean;
        bCol: number;
        zo: number;
        yo: number;
        gravity: number;
        gCol: number;
        xo: number;
        alpha: number;
        x: number;
        y: number;
        z: number;
        rCol: number;
    }
    export class $TrialSpawnerDetectionParticle extends $TextureSheetParticle {
        getLightColor(partialTick: number): number;
        stoppedByCollision: boolean;
        bCol: number;
        zo: number;
        yo: number;
        gravity: number;
        gCol: number;
        xo: number;
        alpha: number;
        x: number;
        y: number;
        z: number;
        rCol: number;
    }
    export class $DripParticle$CoolingDripHangParticle extends $DripParticle$DripHangParticle {
        stoppedByCollision: boolean;
        bCol: number;
        zo: number;
        yo: number;
        gravity: number;
        gCol: number;
        xo: number;
        alpha: number;
        x: number;
        y: number;
        z: number;
        rCol: number;
    }
    export class $WaterCurrentDownParticle$Provider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $TotemParticle extends $SimpleAnimatedParticle {
        stoppedByCollision: boolean;
        bCol: number;
        zo: number;
        yo: number;
        gravity: number;
        gCol: number;
        xo: number;
        alpha: number;
        x: number;
        y: number;
        z: number;
        rCol: number;
    }
    export class $BubbleColumnUpParticle extends $TextureSheetParticle implements $BubbleSetter {
        subtleEffects$setupBubble(arg0: $SpriteSet, arg1: boolean): void;
        stoppedByCollision: boolean;
        bCol: number;
        zo: number;
        yo: number;
        gravity: number;
        gCol: number;
        xo: number;
        alpha: number;
        x: number;
        y: number;
        z: number;
        rCol: number;
    }
    export class $BreakingItemParticle extends $TextureSheetParticle {
        stoppedByCollision: boolean;
        bCol: number;
        zo: number;
        yo: number;
        gravity: number;
        gCol: number;
        xo: number;
        alpha: number;
        x: number;
        y: number;
        z: number;
        rCol: number;
    }
    export class $WhiteSmokeParticle$Provider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $SpellParticle$MobEffectProvider implements $ParticleProvider<$ColorParticleOption> {
        createParticle(type: $ColorParticleOption, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprite: $SpriteSet);
    }
    export class $CritParticle$Provider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $TrackingEmitter extends $NoRenderParticle {
        stoppedByCollision: boolean;
        bCol: number;
        zo: number;
        yo: number;
        gravity: number;
        gCol: number;
        xo: number;
        alpha: number;
        x: number;
        y: number;
        z: number;
        rCol: number;
        constructor(level: $ClientLevel, entity: $Entity, particleType: $ParticleOptions_, lifetime: number);
        constructor(level: $ClientLevel, entity: $Entity, particleType: $ParticleOptions_);
    }
    export class $SplashParticle extends $WaterDropParticle {
        stoppedByCollision: boolean;
        bCol: number;
        zo: number;
        yo: number;
        gravity: number;
        gCol: number;
        xo: number;
        alpha: number;
        x: number;
        y: number;
        z: number;
        rCol: number;
        constructor(arg0: $ClientLevel, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number);
    }
    export class $NoteParticle extends $TextureSheetParticle {
        stoppedByCollision: boolean;
        bCol: number;
        zo: number;
        yo: number;
        gravity: number;
        gCol: number;
        xo: number;
        alpha: number;
        x: number;
        y: number;
        z: number;
        rCol: number;
    }
    export class $TerrainParticle extends $TextureSheetParticle {
        getLightColor(partialTick: number): number;
        updateSprite(arg0: $BlockState_, arg1: $BlockPos_): $TerrainParticle;
        stoppedByCollision: boolean;
        bCol: number;
        zo: number;
        yo: number;
        gravity: number;
        gCol: number;
        xo: number;
        alpha: number;
        x: number;
        y: number;
        z: number;
        rCol: number;
        constructor(level: $ClientLevel, x: number, arg2: number, y: number, arg4: number, z: number, arg6: number, xSpeed: $BlockState_);
        constructor(level: $ClientLevel, x: number, arg2: number, y: number, arg4: number, z: number, arg6: number, xSpeed: $BlockState_, arg8: $BlockPos_);
    }
    export class $DustParticle$Provider implements $ParticleProvider<$DustParticleOptions> {
        createParticle(type: $DustParticleOptions, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $DripParticle$DripstoneFallAndLandParticle extends $DripParticle$FallAndLandParticle {
        stoppedByCollision: boolean;
        bCol: number;
        zo: number;
        yo: number;
        gravity: number;
        gCol: number;
        xo: number;
        alpha: number;
        x: number;
        y: number;
        z: number;
        rCol: number;
    }
    export class $WaterDropParticle extends $TextureSheetParticle {
        stoppedByCollision: boolean;
        bCol: number;
        zo: number;
        yo: number;
        gravity: number;
        gCol: number;
        xo: number;
        alpha: number;
        x: number;
        y: number;
        z: number;
        rCol: number;
    }
    export class $ParticleEngine$1ParticleDefinition extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $ParticleEngine$1ParticleDefinition}.
     */
    export type $ParticleEngine$1ParticleDefinition_ = { id?: $ResourceLocation_, sprites?: ($List_<$ResourceLocation_>) | undefined,  } | [id?: $ResourceLocation_, sprites?: ($List_<$ResourceLocation_>) | undefined, ];
    export class $SpitParticle extends $ExplodeParticle {
        stoppedByCollision: boolean;
        bCol: number;
        zo: number;
        yo: number;
        gravity: number;
        gCol: number;
        xo: number;
        alpha: number;
        x: number;
        y: number;
        z: number;
        rCol: number;
    }
    export class $BubbleColumnUpParticle$Provider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $BubblePopParticle$Provider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $LargeSmokeParticle$Provider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $CritParticle extends $TextureSheetParticle {
        stoppedByCollision: boolean;
        bCol: number;
        zo: number;
        yo: number;
        gravity: number;
        gCol: number;
        xo: number;
        alpha: number;
        x: number;
        y: number;
        z: number;
        rCol: number;
        constructor(level: $ClientLevel, x: number, arg2: number, y: number, arg4: number, z: number, arg6: number);
    }
    export class $Particle implements $ParticleAccessor, $ParticleAccessor$1, $EntityDynamicLightSourceBehavior {
        /**
         * Called to indicate that this particle effect has expired and should be discontinued.
         */
        remove(): void;
        scale(scale: number): $Particle;
        /**
         * Returns `true` if this effect has not yet expired. "I feel happy! I feel happy!"
         */
        isAlive(): boolean;
        move(x: number, arg1: number, y: number): void;
        setColor(particleRed: number, particleGreen: number, particleBlue: number): void;
        getRenderBoundingBox(arg0: number): $AABB;
        /**
         * Called to indicate that this particle effect has expired and should be discontinued.
         */
        subtleEffects$force(): void;
        /**
         * Called to indicate that this particle effect has expired and should be discontinued.
         */
        tick(): void;
        render(buffer: $VertexConsumer, camera: $Camera, partialTicks: number): void;
        getPos(): $Vec3;
        getDynamicLightId(): number;
        getDynamicLightX(): number;
        setBoundingBox(bb: $AABB_): void;
        /**
         * Returns `true` if this effect has not yet expired. "I feel happy! I feel happy!"
         */
        subtleEffects$wasForced(): boolean;
        setPower(scale: number): $Particle;
        lambdynlights$getTrackedLitChunkPos(): $LongSet;
        /**
         * Called to indicate that this particle effect has expired and should be discontinued.
         */
        updateDynamicLightPreviousCoordinates(): void;
        lambdynlights$setTrackedLitChunkPos(trackedLitChunkPos: $LongSet): void;
        setLuminance(particleLifeTime: number): void;
        getLuminance(): number;
        /**
         * Called to indicate that this particle effect has expired and should be discontinued.
         */
        dynamicLightTick(): void;
        setParticleSpeed(x: number, arg1: number, y: number): void;
        setLifetime(particleLifeTime: number): void;
        getLifetime(): number;
        getParticleGroup(): ($ParticleGroup) | undefined;
        /**
         * Returns `true` if this effect has not yet expired. "I feel happy! I feel happy!"
         */
        subtleEffects$shouldIgnoreCulling(): boolean;
        /**
         * Called to indicate that this particle effect has expired and should be discontinued.
         */
        subtleEffects$ignoresCulling(): void;
        setPos(x: number, arg1: number, y: number): void;
        getBoundingBox(): $AABB;
        getDynamicLightPrevY(): number;
        setLastDynamicLuminance(particleLifeTime: number): void;
        getLastDynamicLuminance(): number;
        getDynamicLightPrevZ(): number;
        getDynamicLightPrevX(): number;
        getDynamicLightY(): number;
        /**
         * Called to indicate that this particle effect has expired and should be discontinued.
         */
        resetDynamicLight(): void;
        getDynamicLightZ(): number;
        modifyReturnValue$fgd000$eternal_starlight$getRenderBoundingBox(original: $AABB_): $AABB;
        getRenderType(): $ParticleRenderType;
        setDynamicLightEnabled(enabled: boolean): void;
        getDynamicLightChunksToRebuild(forced: boolean): $Long2ObjectMap<$ChunkRebuildStatus>;
        splitIntoDynamicLightEntries(cellHasher: $CellHasher): $Stream<$SpatialLookupEntry>;
        /**
         * Returns `true` if this effect has not yet expired. "I feel happy! I feel happy!"
         */
        isDynamicLightEnabled(): boolean;
        getWidth(): number;
        getHeight(): number;
        getZ(): number;
        getX(): number;
        /**
         * Sets the particle alpha (float)
         */
        setGravity(alpha: number): void;
        /**
         * Sets the particle alpha (float)
         */
        setAlpha(alpha: number): void;
        getY(): number;
        irons_spellbooks$xo(arg0: number): void;
        irons_spellbooks$yo(arg0: number): void;
        irons_spellbooks$zo(arg0: number): void;
        /**
         * Sets the particle alpha (float)
         */
        irons_spellbooks$gravity(alpha: number): void;
        setHasPhysics(arg0: boolean): void;
        getAlpha(): number;
        setSizes(width: number, height: number): void;
        getOldY(): number;
        getOldX(): number;
        getOldZ(): number;
        irons_spellbooks$stoppedByCollision(arg0: boolean): void;
        stoppedByCollision: boolean;
        bCol: number;
        zo: number;
        yo: number;
        gravity: number;
        gCol: number;
        xo: number;
        alpha: number;
        x: number;
        y: number;
        z: number;
        rCol: number;
        constructor(level: $ClientLevel, x: number, arg2: number, y: number, arg4: number, z: number, arg6: number);
        get alive(): boolean;
        get dynamicLightId(): number;
        get dynamicLightX(): number;
        set power(value: number);
        get particleGroup(): ($ParticleGroup) | undefined;
        get dynamicLightPrevY(): number;
        get dynamicLightPrevZ(): number;
        get dynamicLightPrevX(): number;
        get dynamicLightY(): number;
        get dynamicLightZ(): number;
        get renderType(): $ParticleRenderType;
        get width(): number;
        get height(): number;
        set hasPhysics(value: boolean);
        get oldY(): number;
        get oldX(): number;
        get oldZ(): number;
    }
    export class $FlyTowardsPositionParticle$EnchantProvider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprite: $SpriteSet);
    }
    export class $SpellParticle$InstantProvider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $DustColorTransitionParticle extends $DustParticleBase<$DustColorTransitionOptions> {
        stoppedByCollision: boolean;
        bCol: number;
        zo: number;
        yo: number;
        gravity: number;
        gCol: number;
        xo: number;
        alpha: number;
        x: number;
        y: number;
        z: number;
        rCol: number;
    }
    export class $FallingDustParticle$Provider implements $ParticleProvider<$BlockParticleOption> {
        createParticle(type: $BlockParticleOption, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $ReversePortalParticle$ReversePortalProvider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $FlameParticle$Provider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $SpellParticle$Provider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $SuspendedParticle$UnderwaterProvider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $SuspendedParticle$WarpedSporeProvider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $SpriteSet {
    }
    export interface $SpriteSet {
        get(age: number, lifetime: number): $TextureAtlasSprite;
        get(random: $RandomSource): $TextureAtlasSprite;
    }
    export class $EndRodParticle$Provider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $GustParticle$SmallProvider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $FlyStraightTowardsParticle$OminousSpawnProvider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprite: $SpriteSet);
    }
    export class $ParticleDescription {
        static fromJson(json: $JsonObject_): $ParticleDescription;
        getTextures(): $List<$ResourceLocation>;
        get textures(): $List<$ResourceLocation>;
    }
    export class $BubblePopParticle extends $TextureSheetParticle {
        stoppedByCollision: boolean;
        bCol: number;
        zo: number;
        yo: number;
        gravity: number;
        gCol: number;
        xo: number;
        alpha: number;
        x: number;
        y: number;
        z: number;
        rCol: number;
        constructor(level: $ClientLevel, x: number, arg2: number, y: number, arg4: number, z: number, arg6: number, xSpeed: $SpriteSet);
    }
    export class $SuspendedParticle$SporeBlossomAirProvider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $BubbleParticle$Provider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $SuspendedParticle extends $TextureSheetParticle {
        stoppedByCollision: boolean;
        bCol: number;
        zo: number;
        yo: number;
        gravity: number;
        gCol: number;
        xo: number;
        alpha: number;
        x: number;
        y: number;
        z: number;
        rCol: number;
        constructor(level: $ClientLevel, sprites: $SpriteSet, x: number, arg3: number, y: number);
        constructor(level: $ClientLevel, sprites: $SpriteSet, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number);
    }
    export class $SplashParticle$Provider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $LargeSmokeParticle extends $SmokeParticle {
        stoppedByCollision: boolean;
        bCol: number;
        zo: number;
        yo: number;
        gravity: number;
        gCol: number;
        xo: number;
        alpha: number;
        x: number;
        y: number;
        z: number;
        rCol: number;
    }
    export class $GustSeedParticle extends $NoRenderParticle {
        stoppedByCollision: boolean;
        bCol: number;
        zo: number;
        yo: number;
        gravity: number;
        gCol: number;
        xo: number;
        alpha: number;
        x: number;
        y: number;
        z: number;
        rCol: number;
    }
    export class $WhiteAshParticle extends $BaseAshSmokeParticle {
        stoppedByCollision: boolean;
        bCol: number;
        zo: number;
        yo: number;
        gravity: number;
        gCol: number;
        xo: number;
        alpha: number;
        x: number;
        y: number;
        z: number;
        rCol: number;
    }
    export class $ParticleEngine implements $PreparableReloadListener, $ParticleEngineAccessor$2, $ParticleEngineAccessor$1, $ExtendedParticleManager, $ParticleManagerAccessor, $ParticleEngineAccessor {
        add(effect: $Particle): void;
        /**
         * @deprecated
         */
        register<T extends $ParticleOptions>(particleType: $ParticleType_<T>, particleFactory: $ParticleProvider_<T>): void;
        /**
         * @deprecated
         */
        register<T extends $ParticleOptions>(particleType: $ParticleType_<T>, particleMetaFactory: $ParticleEngine$SpriteParticleRegistration_<T>): void;
        /**
         * @deprecated
         */
        register<T extends $ParticleOptions>(particleType: $ParticleType_<T>, sprite: $ParticleProvider$Sprite_<T>): void;
        destroy(pos: $BlockPos_, state: $BlockState_): void;
        close(): void;
        reload(stage: $PreparableReloadListener$PreparationBarrier_, resourceManager: $ResourceManager, preparationsProfiler: $ProfilerFiller, reloadProfiler: $ProfilerFiller, backgroundExecutor: $Executor_, gameExecutor: $Executor_): $CompletableFuture<void>;
        setLevel(level: $ClientLevel | null): void;
        tick(): void;
        /**
         * @deprecated
         */
        render(lightTexture: $LightTexture, camera: $Camera, partialTick: number): void;
        render(arg0: $LightTexture, arg1: $Camera, arg2: number, arg3: $Frustum | null, arg4: $Predicate_<$ParticleRenderType>): void;
        render(arg0: $PoseStack, arg1: $MultiBufferSource_, arg2: $Camera, arg3: number): void;
        addBlockHitEffects(arg0: $BlockPos_, arg1: $BlockHitResult): void;
        /**
         * Adds block hit particles for the specified block
         */
        crack(pos: $BlockPos_, side: $Direction_): void;
        createParticle(particleData: $ParticleOptions_, x: number, arg2: number, y: number, arg4: number, z: number, arg6: number): $Particle;
        createTrackingEmitter(entity: $Entity, particleData: $ParticleOptions_): void;
        createTrackingEmitter(entity: $Entity, data: $ParticleOptions_, lifetime: number): void;
        iterateParticles(arg0: $Consumer_<$Particle>): void;
        wrapMethod$che000$nolijium$a(arg0: $ParticleOptions_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: $Operation_): $Particle;
        wrapMethod$che000$nolijium$a(arg0: $Particle, arg1: $Operation_): void;
        clearParticles(): void;
        countParticles(): string;
        handler$che001$nolijium$a(arg0: $CallbackInfo): void;
        static getRenderOrder$subtle_effects_$md$f87c94$2(): $List<any>;
        static setRenderOrder$subtle_effects_$md$f87c94$3(arg0: $List_<any>): void;
        getName(): string;
        getTextureAtlas(): $TextureAtlas;
        getParticles(): $Map<$ParticleRenderType, $Queue<$Particle>>;
        ponder$getProviders(): $Map<$ResourceLocation, $ParticleProvider<never>>;
        bumblezone$getTextureAtlas(): $TextureAtlas;
        getSpriteSets(): $Map<$ResourceLocation, $SpriteSet>;
        static RENDER_ORDER: $List<$ParticleRenderType>;
        random: $RandomSource;
        textureAtlas: $TextureAtlas;
        spriteSets: $Map<$ResourceLocation, $ParticleEngine$MutableSpriteSet>;
        constructor(level: $ClientLevel, textureManager: $TextureManager);
        set level(value: $ClientLevel | null);
        static get renderOrder$subtle_effects_$md$f87c94$2(): $List<any>;
        static set renderOrder$subtle_effects_$md$f87c94$3(value: $List_<any>);
        get name(): string;
        get particles(): $Map<$ParticleRenderType, $Queue<$Particle>>;
    }
    export class $DripParticle$DripLandParticle extends $DripParticle {
        stoppedByCollision: boolean;
        bCol: number;
        zo: number;
        yo: number;
        gravity: number;
        gCol: number;
        xo: number;
        alpha: number;
        x: number;
        y: number;
        z: number;
        rCol: number;
        constructor(arg0: $ClientLevel, arg1: number, arg2: number, arg3: number, arg4: $Fluid_);
    }
    export class $TrialSpawnerDetectionParticle$Provider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $RisingParticle extends $TextureSheetParticle {
        stoppedByCollision: boolean;
        bCol: number;
        zo: number;
        yo: number;
        gravity: number;
        gCol: number;
        xo: number;
        alpha: number;
        x: number;
        y: number;
        z: number;
        rCol: number;
    }
    export class $FlyTowardsPositionParticle extends $TextureSheetParticle implements $FlyTowardsPositionParticleAccessor {
        getLightColor(partialTick: number): number;
        setGlowing(arg0: boolean): void;
        setLifetimeAlpha(arg0: $Particle$LifetimeAlpha_): void;
        stoppedByCollision: boolean;
        bCol: number;
        zo: number;
        yo: number;
        gravity: number;
        gCol: number;
        xo: number;
        alpha: number;
        x: number;
        y: number;
        z: number;
        rCol: number;
        constructor(level: $ClientLevel, x: number, arg2: number, y: number, arg4: number, z: number, arg6: number);
        set glowing(value: boolean);
        set lifetimeAlpha(value: $Particle$LifetimeAlpha_);
    }
    export class $SnowflakeParticle extends $TextureSheetParticle {
        stoppedByCollision: boolean;
        bCol: number;
        zo: number;
        yo: number;
        gravity: number;
        gCol: number;
        xo: number;
        alpha: number;
        x: number;
        y: number;
        z: number;
        rCol: number;
    }
    export class $SonicBoomParticle$Provider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $MobAppearanceParticle extends $Particle {
        stoppedByCollision: boolean;
        bCol: number;
        zo: number;
        yo: number;
        gravity: number;
        gCol: number;
        xo: number;
        alpha: number;
        x: number;
        y: number;
        z: number;
        rCol: number;
    }
    export class $HugeExplosionParticle extends $TextureSheetParticle {
        getLightColor(partialTick: number): number;
        stoppedByCollision: boolean;
        bCol: number;
        zo: number;
        yo: number;
        gravity: number;
        gCol: number;
        xo: number;
        alpha: number;
        x: number;
        y: number;
        z: number;
        rCol: number;
    }
    export class $VibrationSignalParticle$Provider implements $ParticleProvider<$VibrationParticleOption> {
        createParticle(type: $VibrationParticleOption, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $BreakingItemParticle$CobwebProvider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(arg0: $SimpleParticleType, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $Particle;
        constructor();
    }
    export class $SuspendedTownParticle$EggCrackProvider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprite: $SpriteSet);
    }
    export class $DragonBreathParticle$Provider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $SquidInkParticle extends $SimpleAnimatedParticle {
        stoppedByCollision: boolean;
        bCol: number;
        zo: number;
        yo: number;
        gravity: number;
        gCol: number;
        xo: number;
        alpha: number;
        x: number;
        y: number;
        z: number;
        rCol: number;
        constructor(level: $ClientLevel, x: number, arg2: number, y: number, arg4: number, z: number, arg6: number, xSpeed: number, arg8: $SpriteSet);
    }
    export class $ShriekParticle extends $TextureSheetParticle {
        getLightColor(partialTick: number): number;
        stoppedByCollision: boolean;
        bCol: number;
        zo: number;
        yo: number;
        gravity: number;
        gCol: number;
        xo: number;
        alpha: number;
        x: number;
        y: number;
        z: number;
        rCol: number;
    }
    export class $HugeExplosionSeedParticle extends $NoRenderParticle {
        stoppedByCollision: boolean;
        bCol: number;
        zo: number;
        yo: number;
        gravity: number;
        gCol: number;
        xo: number;
        alpha: number;
        x: number;
        y: number;
        z: number;
        rCol: number;
    }
    export class $TextureSheetParticle extends $SingleQuadParticle {
        pickSprite(sprite: $SpriteSet): void;
        setSpriteFromAge(sprite: $SpriteSet): void;
        stoppedByCollision: boolean;
        bCol: number;
        zo: number;
        yo: number;
        gravity: number;
        gCol: number;
        xo: number;
        alpha: number;
        x: number;
        y: number;
        z: number;
        rCol: number;
        set spriteFromAge(value: $SpriteSet);
    }
    export class $DustColorTransitionParticle$Provider implements $ParticleProvider<$DustColorTransitionOptions> {
        createParticle(type: $DustColorTransitionOptions, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $AttackSweepParticle$Provider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $SculkChargeParticle extends $TextureSheetParticle {
        getLightColor(partialTick: number): number;
        stoppedByCollision: boolean;
        bCol: number;
        zo: number;
        yo: number;
        gravity: number;
        gCol: number;
        xo: number;
        alpha: number;
        x: number;
        y: number;
        z: number;
        rCol: number;
    }
    export class $SuspendedTownParticle$Provider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $SnowflakeParticle$Provider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $FireworkParticles$FlashProvider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $TerrainParticle$Provider implements $ParticleProvider<$BlockParticleOption> {
        createParticle(type: $BlockParticleOption, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor();
    }
    export class $PlayerCloudParticle extends $TextureSheetParticle {
        stoppedByCollision: boolean;
        bCol: number;
        zo: number;
        yo: number;
        gravity: number;
        gCol: number;
        xo: number;
        alpha: number;
        x: number;
        y: number;
        z: number;
        rCol: number;
    }
    export class $GlowParticle$ElectricSparkProvider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $SoulParticle$Provider implements $ParticleProvider<$SimpleParticleType> {
        createParticle(type: $SimpleParticleType, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
        constructor(sprites: $SpriteSet);
    }
    export class $DripParticle$HoneyFallAndLandParticle extends $DripParticle$FallAndLandParticle {
        stoppedByCollision: boolean;
        bCol: number;
        zo: number;
        yo: number;
        gravity: number;
        gCol: number;
        xo: number;
        alpha: number;
        x: number;
        y: number;
        z: number;
        rCol: number;
    }
    export class $AttackSweepParticle extends $TextureSheetParticle {
        getLightColor(partialTick: number): number;
        stoppedByCollision: boolean;
        bCol: number;
        zo: number;
        yo: number;
        gravity: number;
        gCol: number;
        xo: number;
        alpha: number;
        x: number;
        y: number;
        z: number;
        rCol: number;
    }
    export class $WakeParticle extends $TextureSheetParticle {
        stoppedByCollision: boolean;
        bCol: number;
        zo: number;
        yo: number;
        gravity: number;
        gCol: number;
        xo: number;
        alpha: number;
        x: number;
        y: number;
        z: number;
        rCol: number;
    }
    export class $HeartParticle extends $TextureSheetParticle implements $HeartParticleAccessor {
        /**
         * Called to indicate that this particle effect has expired and should be discontinued.
         */
        subtleEffects$setHeart(): void;
        stoppedByCollision: boolean;
        bCol: number;
        zo: number;
        yo: number;
        gravity: number;
        gCol: number;
        xo: number;
        alpha: number;
        x: number;
        y: number;
        z: number;
        rCol: number;
    }
}
