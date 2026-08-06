import { $Sniffer } from "@package/net/minecraft/world/entity/animal/sniffer";
import { $JsonDeserializationContext_, $JsonDeserializer, $JsonElement_ } from "@package/com/google/gson";
import { $CompletableFuture } from "@package/java/util/concurrent";
import { $BiomeManager } from "@package/net/minecraft/world/level/biome";
import { $LocalPlayer } from "@package/net/minecraft/client/player";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $List, $List_ } from "@package/java/util";
import { $RandomSource } from "@package/net/minecraft/util";
import { $Bee } from "@package/net/minecraft/world/entity/animal";
import { $BiomeAmbienceInterface } from "@package/net/irisshaders/iris/mixinterface";
import { $Holder_, $BlockPos_ } from "@package/net/minecraft/core";
import { $SoundEvent_, $SoundEvent, $SoundSource, $SoundSource_ } from "@package/net/minecraft/sounds";
import { $SoundBufferLibrary, $SoundEngine, $Weighted, $WeighedSoundEvents, $AudioStream, $SoundManager } from "@package/net/minecraft/client/sounds";
import { $SampledFloat_, $SampledFloat } from "@package/net/minecraft/util/valueproviders";
import { $ResourceLocation_, $ResourceLocation, $FileToIdConverter } from "@package/net/minecraft/resources";
import { $Type } from "@package/java/lang/reflect";
import { $Guardian } from "@package/net/minecraft/world/entity/monster";
import { $Enum } from "@package/java/lang";
import { $Vec3_ } from "@package/net/minecraft/world/phys";
import { $AbstractMinecart } from "@package/net/minecraft/world/entity/vehicle";

declare module "@package/net/minecraft/client/resources/sounds" {
    export class $TickableSoundInstance {
    }
    export interface $TickableSoundInstance extends $SoundInstance {
        isStopped(): boolean;
        tick(): void;
        get stopped(): boolean;
    }
    export class $SoundEventRegistrationSerializer implements $JsonDeserializer<$SoundEventRegistration> {
        deserialize(arg0: $JsonElement_, arg1: $Type, arg2: $JsonDeserializationContext_): $SoundEventRegistration;
        constructor();
    }
    export class $Sound implements $Weighted<$Sound> {
        getLocation(): $ResourceLocation;
        getType(): $Sound$Type;
        getPath(): $ResourceLocation;
        /**
         * @return The weight of the element
         */
        getWeight(): number;
        getPitch(): $SampledFloat;
        getVolume(): $SampledFloat;
        shouldStream(): boolean;
        /**
         * Preloads the sound if required by the sound engine.
         * This method is called to preload the sound associated with the element into the sound engine, ensuring it is ready for playback.
         */
        preloadIfRequired(engine: $SoundEngine): void;
        shouldPreload(): boolean;
        /**
         * @return The weight of the element
         */
        getAttenuationDistance(): number;
        /**
         * Retrieves the sound associated with the element.
         * The sound is obtained using the provided random source.
         * 
         * @return The sound associated with the element
         */
        getSound(randomSource: $RandomSource): $Sound;
        static SOUND_LISTER: $FileToIdConverter;
        constructor(location: $ResourceLocation_, volume: $SampledFloat_, pitch: $SampledFloat_, weight: number, type: $Sound$Type_, stream: boolean, preload: boolean, attenuationDistance: number);
        get location(): $ResourceLocation;
        get type(): $Sound$Type;
        get path(): $ResourceLocation;
        get weight(): number;
        get pitch(): $SampledFloat;
        get volume(): $SampledFloat;
        get attenuationDistance(): number;
    }
    export class $AbstractSoundInstance implements $SoundInstance {
        getLocation(): $ResourceLocation;
        resolve(handler: $SoundManager): $WeighedSoundEvents;
        /**
         * True if the sound is not tied to a particular position in world (e.g. BGM)
         */
        isRelative(): boolean;
        getSource(): $SoundSource;
        getZ(): number;
        getX(): number;
        getY(): number;
        getDelay(): number;
        getPitch(): number;
        getVolume(): number;
        /**
         * True if the sound is not tied to a particular position in world (e.g. BGM)
         */
        isLooping(): boolean;
        getSound(): $Sound;
        getAttenuation(): $SoundInstance$Attenuation;
        getStream(arg0: $SoundBufferLibrary, arg1: $Sound, arg2: boolean): $CompletableFuture<$AudioStream>;
        /**
         * True if the sound is not tied to a particular position in world (e.g. BGM)
         */
        canPlaySound(): boolean;
        /**
         * True if the sound is not tied to a particular position in world (e.g. BGM)
         */
        canStartSilent(): boolean;
        get location(): $ResourceLocation;
        get relative(): boolean;
        get source(): $SoundSource;
        get z(): number;
        get x(): number;
        get y(): number;
        get delay(): number;
        get pitch(): number;
        get volume(): number;
        get looping(): boolean;
        get sound(): $Sound;
        get attenuation(): $SoundInstance$Attenuation;
    }
    export class $EntityBoundSoundInstance extends $AbstractTickableSoundInstance {
        stopped: boolean;
        constructor(soundEvent: $SoundEvent_, source: $SoundSource_, volume: number, pitch: number, entity: $Entity, seed: number);
    }
    export class $BiomeAmbientSoundsHandler implements $AmbientSoundHandler, $BiomeAmbienceInterface {
        getMoodiness(): number;
        getConstantMood(): number;
        tick(): void;
        constructor(player: $LocalPlayer, soundManager: $SoundManager, biomeManager: $BiomeManager);
        get moodiness(): number;
        get constantMood(): number;
    }
    export class $SimpleSoundInstance extends $AbstractSoundInstance {
        static forLocalAmbience(sound: $SoundEvent_, volume: number, pitch: number): $SimpleSoundInstance;
        static forJukeboxSong(sound: $SoundEvent_, pos: $Vec3_): $SimpleSoundInstance;
        static forUI(sound: $SoundEvent_, pitch: number): $SimpleSoundInstance;
        static forUI(sound: $SoundEvent_, volume: number, pitch: number): $SimpleSoundInstance;
        static forUI(soundHolder: $Holder_<$SoundEvent>, pitch: number): $SimpleSoundInstance;
        static forMusic(sound: $SoundEvent_): $SimpleSoundInstance;
        static forAmbientMood(soundEvent: $SoundEvent_, random: $RandomSource, x: number, arg3: number, y: number): $SimpleSoundInstance;
        static forAmbientAddition(sound: $SoundEvent_): $SimpleSoundInstance;
        constructor(soundEvent: $SoundEvent_, source: $SoundSource_, volume: number, pitch: number, random: $RandomSource, x: number, arg6: number, y: number);
        constructor(location: $ResourceLocation_, source: $SoundSource_, volume: number, pitch: number, random: $RandomSource, looping: boolean, delay: number, attenuation: $SoundInstance$Attenuation_, x: number, arg9: number, y: number, arg11: boolean);
        constructor(soundEvent: $SoundEvent_, source: $SoundSource_, volume: number, pitch: number, random: $RandomSource, entity: $BlockPos_);
    }
    export class $UnderwaterAmbientSoundInstances {
        constructor();
    }
    export class $BeeSoundInstance extends $AbstractTickableSoundInstance {
        stopped: boolean;
        constructor(bee: $Bee, soundEvent: $SoundEvent_, source: $SoundSource_);
    }
    export class $Sound$Type extends $Enum<$Sound$Type> {
        static values(): $Sound$Type[];
        static valueOf(name: string): $Sound$Type;
        static getByName(name: string): $Sound$Type;
        static SOUND_EVENT: $Sound$Type;
        static FILE: $Sound$Type;
    }
    /**
     * Values that may be interpreted as {@link $Sound$Type}.
     */
    export type $Sound$Type_ = "file" | "sound_event";
    export class $MinecartSoundInstance extends $AbstractTickableSoundInstance {
        stopped: boolean;
        constructor(minecart: $AbstractMinecart);
    }
    export class $SoundEventRegistration {
        isReplace(): boolean;
        getSounds(): $List<$Sound>;
        getSubtitle(): string;
        constructor(sounds: $List_<$Sound>, replace: boolean, subtitle: string | null);
        get replace(): boolean;
        get sounds(): $List<$Sound>;
        get subtitle(): string;
    }
    export class $UnderwaterAmbientSoundInstances$UnderwaterAmbientSoundInstance extends $AbstractTickableSoundInstance {
        stopped: boolean;
        static FADE_DURATION: number;
        constructor(player: $LocalPlayer);
    }
    export class $BubbleColumnAmbientSoundHandler implements $AmbientSoundHandler {
        tick(): void;
        constructor(player: $LocalPlayer);
    }
    export class $AmbientSoundHandler {
    }
    export interface $AmbientSoundHandler {
        tick(): void;
    }
    /**
     * Values that may be interpreted as {@link $AmbientSoundHandler}.
     */
    export type $AmbientSoundHandler_ = (() => void);
    export class $UnderwaterAmbientSoundHandler implements $AmbientSoundHandler {
        tick(): void;
        static CHANCE_PER_TICK: number;
        static ULTRA_RARE_CHANCE_PER_TICK: number;
        static RARE_CHANCE_PER_TICK: number;
        constructor(player: $LocalPlayer, soundManager: $SoundManager);
    }
    export class $BiomeAmbientSoundsHandler$LoopSoundInstance extends $AbstractTickableSoundInstance {
        fadeIn(): void;
        fadeOut(): void;
        stopped: boolean;
        constructor(soundEvent: $SoundEvent_);
    }
    export class $AbstractTickableSoundInstance extends $AbstractSoundInstance implements $TickableSoundInstance {
        isStopped(): boolean;
        stopped: boolean;
    }
    export class $GuardianAttackSoundInstance extends $AbstractTickableSoundInstance {
        stopped: boolean;
        constructor(guardian: $Guardian);
    }
    export class $RidingMinecartSoundInstance extends $AbstractTickableSoundInstance {
        stopped: boolean;
        constructor(player: $Player, minecart: $AbstractMinecart, underwaterSound: boolean);
    }
    export class $SoundInstance {
        static createUnseededRandom(): $RandomSource;
    }
    export interface $SoundInstance {
        getLocation(): $ResourceLocation;
        resolve(manager: $SoundManager): $WeighedSoundEvents;
        /**
         * True if the sound is not tied to a particular position in world (e.g. BGM)
         */
        isRelative(): boolean;
        getSource(): $SoundSource;
        getZ(): number;
        getX(): number;
        getStream(arg0: $SoundBufferLibrary, arg1: $Sound, arg2: boolean): $CompletableFuture<$AudioStream>;
        getY(): number;
        getDelay(): number;
        getPitch(): number;
        getVolume(): number;
        /**
         * True if the sound is not tied to a particular position in world (e.g. BGM)
         */
        isLooping(): boolean;
        getSound(): $Sound;
        /**
         * True if the sound is not tied to a particular position in world (e.g. BGM)
         */
        canPlaySound(): boolean;
        getAttenuation(): $SoundInstance$Attenuation;
        /**
         * True if the sound is not tied to a particular position in world (e.g. BGM)
         */
        canStartSilent(): boolean;
        get location(): $ResourceLocation;
        get relative(): boolean;
        get source(): $SoundSource;
        get z(): number;
        get x(): number;
        get y(): number;
        get delay(): number;
        get pitch(): number;
        get volume(): number;
        get looping(): boolean;
        get sound(): $Sound;
        get attenuation(): $SoundInstance$Attenuation;
    }
    export class $BeeFlyingSoundInstance extends $BeeSoundInstance {
        stopped: boolean;
        constructor(bee: $Bee);
    }
    export class $SoundInstance$Attenuation extends $Enum<$SoundInstance$Attenuation> {
        static values(): $SoundInstance$Attenuation[];
        static valueOf(arg0: string): $SoundInstance$Attenuation;
        static NONE: $SoundInstance$Attenuation;
        static LINEAR: $SoundInstance$Attenuation;
    }
    /**
     * Values that may be interpreted as {@link $SoundInstance$Attenuation}.
     */
    export type $SoundInstance$Attenuation_ = "none" | "linear";
    export class $ElytraOnPlayerSoundInstance extends $AbstractTickableSoundInstance {
        stopped: boolean;
        static DELAY: number;
        constructor(player: $LocalPlayer);
    }
    export class $BeeAggressiveSoundInstance extends $BeeSoundInstance {
        stopped: boolean;
        constructor(bee: $Bee);
    }
    export class $UnderwaterAmbientSoundInstances$SubSound extends $AbstractTickableSoundInstance {
        stopped: boolean;
    }
    export class $SnifferSoundInstance extends $AbstractTickableSoundInstance {
        stopped: boolean;
        constructor(sniffer: $Sniffer);
    }
}
