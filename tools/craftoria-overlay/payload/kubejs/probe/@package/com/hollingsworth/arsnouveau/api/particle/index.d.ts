import { $Level_ } from "@package/net/minecraft/world/level";
import { $PropMap, $SoundProperty, $ColorProperty } from "@package/com/hollingsworth/arsnouveau/api/particle/configurations/properties";
import { $MapCodec } from "@package/com/mojang/serialization";
import { $ParticleColor } from "@package/com/hollingsworth/arsnouveau/client/particle";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $ParticleMotion } from "@package/com/hollingsworth/arsnouveau/api/particle/configurations";
import { $ParticleType_, $ParticleOptions_, $ParticleOptions, $ParticleType } from "@package/net/minecraft/core/particles";
import { $TimelineEntryData } from "@package/com/hollingsworth/arsnouveau/api/particle/timelines";
import { $Supplier_, $Supplier } from "@package/java/util/function";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $ITagSerializable } from "@package/com/hollingsworth/arsnouveau/api/nbt";
import { $Cloneable } from "@package/java/lang";
import { $Vec3_, $Vec3, $Vec2 } from "@package/net/minecraft/world/phys";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
export * as timelines from "@package/com/hollingsworth/arsnouveau/api/particle/timelines";
export * as configurations from "@package/com/hollingsworth/arsnouveau/api/particle/configurations";

declare module "@package/com/hollingsworth/arsnouveau/api/particle" {
    export class $PropertyParticleOptions implements $ParticleOptions {
        getType(): $ParticleType<never>;
        static toNetwork(arg0: $RegistryFriendlyByteBuf, arg1: $PropertyParticleOptions): void;
        static fromNetwork(arg0: $RegistryFriendlyByteBuf): $PropertyParticleOptions;
        soundProperty(): $SoundProperty;
        colorProp(): $ColorProperty;
        static CODEC: $MapCodec<$PropertyParticleOptions>;
        map: $PropMap;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $PropertyParticleOptions>;
        constructor();
        constructor(arg0: $ParticleType_<never>);
        constructor(arg0: $PropMap);
        get type(): $ParticleType<never>;
    }
    export class $ParticleEmitter {
        getPosition(): $Vec3;
        tick(arg0: $Level_): void;
        getPositionOffset(): $Vec3;
        getRotation(): $Vec2;
        setPosition(arg0: $Vec3_): void;
        setPositionOffset(arg0: number, arg1: number, arg2: number): void;
        setPositionOffset(arg0: $Vec3_): void;
        getAdjustedPosition(): $Vec3;
        getAdjustedRotation(): $Vec2;
        setRotationOffset(arg0: number, arg1: number): void;
        setRotationOffset(arg0: $Vec2): void;
        particleOptions: $PropertyParticleOptions;
        particleConfig: $ParticleMotion;
        offset: $Vec3;
        rotation: $Supplier<$Vec2>;
        static STREAM: $StreamCodec<$RegistryFriendlyByteBuf, $ParticleEmitter>;
        rand1: number;
        rand2: number;
        rand3: number;
        position: $Supplier<$Vec3>;
        previousPosition: $Vec3;
        age: number;
        rotationOffset: $Vec2;
        constructor(arg0: $Entity, arg1: $TimelineEntryData);
        constructor(arg0: $Supplier_<$Vec3>, arg1: $Supplier_<$Vec2>, arg2: $TimelineEntryData);
        constructor(arg0: $Supplier_<$Vec3>, arg1: $Supplier_<$Vec2>, arg2: $ParticleMotion, arg3: $ParticleOptions_);
        get adjustedPosition(): $Vec3;
        get adjustedRotation(): $Vec2;
    }
    export class $IParticleColor {
    }
    export interface $IParticleColor extends $ITagSerializable, $Cloneable {
        transition(arg0: number): $ParticleColor;
        getColor(): number;
        getRegistryName(): $ResourceLocation;
        getRed(): number;
        getBlue(): number;
        getGreen(): number;
        nextColor(arg0: number): $ParticleColor;
        getGreenInt(): number;
        getBlueInt(): number;
        getRedInt(): number;
        get color(): number;
        get registryName(): $ResourceLocation;
        get red(): number;
        get blue(): number;
        get green(): number;
        get greenInt(): number;
        get blueInt(): number;
        get redInt(): number;
    }
}
