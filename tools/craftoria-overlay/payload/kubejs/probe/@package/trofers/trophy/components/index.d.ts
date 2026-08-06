import { $Level_ } from "@package/net/minecraft/world/level";
import { $Codec } from "@package/com/mojang/serialization";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $ResourceLocation_, $ResourceKey_, $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $MobEffect_, $MobEffectInstance, $MobEffect } from "@package/net/minecraft/world/effect";
import { $Enum, $Record } from "@package/java/lang";
import { $Vec3_, $Vec3 } from "@package/net/minecraft/world/phys";
import { $LootTable } from "@package/net/minecraft/world/level/storage/loot";
import { $StringRepresentable } from "@package/net/minecraft/util";

declare module "@package/trofers/trophy/components" {
    export class $EffectInfo$SoundInfo extends $Record {
        volume(): number;
        soundEvent(): $ResourceLocation;
        pitch(): number;
        static CODEC: $Codec<$EffectInfo$SoundInfo>;
        constructor(soundEvent: $ResourceLocation_, volume: number, pitch: number);
    }
    /**
     * Values that may be interpreted as {@link $EffectInfo$SoundInfo}.
     */
    export type $EffectInfo$SoundInfo_ = { volume?: number, pitch?: number, soundEvent?: $ResourceLocation_,  } | [volume?: number, pitch?: number, soundEvent?: $ResourceLocation_, ];
    export class $ColorInfo extends $Record {
        base(): number;
        accent(): number;
        static CODEC: $Codec<$ColorInfo>;
        static NONE: $ColorInfo;
        constructor(base: number, accent: number);
    }
    /**
     * Values that may be interpreted as {@link $ColorInfo}.
     */
    export type $ColorInfo_ = { accent?: number, base?: number,  } | [accent?: number, base?: number, ];
    export class $Animation extends $Record {
        type(): $Animation$Type;
        speed(): number;
        static TYPE_CODEC: $Codec<$Animation$Type>;
        static CODEC: $Codec<$Animation>;
        static STATIC: $Animation;
        constructor(type: $Animation$Type_, speed: number);
    }
    /**
     * Values that may be interpreted as {@link $Animation}.
     */
    export type $Animation_ = { speed?: number, type?: $Animation$Type_,  } | [speed?: number, type?: $Animation$Type_, ];
    export class $EffectInfo$MobEffectInfo extends $Record {
        duration(): number;
        createInstance(): $MobEffectInstance;
        showParticles(): boolean;
        showIcon(): boolean;
        mobEffect(): $MobEffect;
        amplifier(): number;
        ambient(): boolean;
        constructor(mobEffect: $MobEffect_, amplifier: number, duration: number, ambient: boolean, showParticles: boolean, showIcon: boolean);
    }
    /**
     * Values that may be interpreted as {@link $EffectInfo$MobEffectInfo}.
     */
    export type $EffectInfo$MobEffectInfo_ = { amplifier?: number, mobEffect?: $MobEffect_, duration?: number, ambient?: boolean, showParticles?: boolean, showIcon?: boolean,  } | [amplifier?: number, mobEffect?: $MobEffect_, duration?: number, ambient?: boolean, showParticles?: boolean, showIcon?: boolean, ];
    export class $EffectInfo$RewardInfo extends $Record {
        lootTable(): ($ResourceKey<$LootTable>) | undefined;
        mobEffect(): ($EffectInfo$MobEffectInfo) | undefined;
        cooldown(): number;
        static CODEC: $Codec<$EffectInfo$RewardInfo>;
        static NONE: $EffectInfo$RewardInfo;
        constructor(lootTable: ($ResourceKey_<$LootTable>) | undefined, mobEffect: ($EffectInfo$MobEffectInfo_) | undefined, cooldown: number);
    }
    /**
     * Values that may be interpreted as {@link $EffectInfo$RewardInfo}.
     */
    export type $EffectInfo$RewardInfo_ = { cooldown?: number, lootTable?: ($ResourceKey_<$LootTable>) | undefined, mobEffect?: ($EffectInfo$MobEffectInfo_) | undefined,  } | [cooldown?: number, lootTable?: ($ResourceKey_<$LootTable>) | undefined, mobEffect?: ($EffectInfo$MobEffectInfo_) | undefined, ];
    export class $EffectInfo extends $Record {
        sound(): ($EffectInfo$SoundInfo) | undefined;
        rewards(): $EffectInfo$RewardInfo;
        static CODEC: $Codec<$EffectInfo>;
        static NONE: $EffectInfo;
        constructor(sound: ($EffectInfo$SoundInfo_) | undefined, rewards: $EffectInfo$RewardInfo_);
    }
    /**
     * Values that may be interpreted as {@link $EffectInfo}.
     */
    export type $EffectInfo_ = { rewards?: $EffectInfo$RewardInfo_, sound?: ($EffectInfo$SoundInfo_) | undefined,  } | [rewards?: $EffectInfo$RewardInfo_, sound?: ($EffectInfo$SoundInfo_) | undefined, ];
    export class $DisplayInfo extends $Record {
        scale(): number;
        offset(): $Vec3;
        rotation(): $Vec3;
        static CODEC: $Codec<$DisplayInfo>;
        static NONE: $DisplayInfo;
        constructor(offset: $Vec3_, rotation: $Vec3_, scale: number);
    }
    /**
     * Values that may be interpreted as {@link $DisplayInfo}.
     */
    export type $DisplayInfo_ = { rotation?: $Vec3_, scale?: number, offset?: $Vec3_,  } | [rotation?: $Vec3_, scale?: number, offset?: $Vec3_, ];
    export class $EntityInfo {
        id(): $ResourceLocation;
        tag(): $CompoundTag;
        getOrCreateEntity(level: $Level_): $Entity;
        static CODEC: $Codec<$EntityInfo>;
        constructor(id: $ResourceLocation_, tag: $CompoundTag_);
    }
    export class $Animation$Type extends $Enum<$Animation$Type> implements $StringRepresentable {
        static values(): $Animation$Type[];
        static valueOf(name: string): $Animation$Type;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static SPINNING: $Animation$Type;
        static TUMBLING: $Animation$Type;
        static FIXED: $Animation$Type;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $Animation$Type}.
     */
    export type $Animation$Type_ = "fixed" | "spinning" | "tumbling";
}
