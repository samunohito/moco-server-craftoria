import { $MapCodec } from "@package/com/mojang/serialization";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $IParticleColor } from "@package/com/hollingsworth/arsnouveau/api/particle";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $Random, $List } from "@package/java/util";
import { $Object, $Cloneable } from "@package/java/lang";
import { $RandomSource } from "@package/net/minecraft/util";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/com/hollingsworth/arsnouveau/client/particle" {
    export class $ParticleColor implements $IParticleColor, $Cloneable {
        clone(): $Object;
        toWrapper(): $ParticleColor$IntWrapper;
        serialize(): $CompoundTag;
        getColor(): number;
        getRegistryName(): $ResourceLocation;
        getRed(): number;
        getBlue(): number;
        getGreen(): number;
        static fromHex(arg0: string): $ParticleColor;
        nextColor(arg0: number): $ParticleColor;
        static fromInt(arg0: number): $ParticleColor;
        static defaultParticleColor(): $ParticleColor;
        getGreenInt(): number;
        getOppositeColor(): $ParticleColor;
        toHex(): string;
        getBlueInt(): number;
        getRedInt(): number;
        euclideanDistance(arg0: $ParticleColor): number;
        static makeRandomColor(arg0: number, arg1: number, arg2: number, arg3: $RandomSource): $ParticleColor;
        transition(arg0: number): $ParticleColor;
        static WHITE: $ParticleColor;
        static GRAY: $ParticleColor;
        static CODEC: $MapCodec<$ParticleColor>;
        static BLUE: $ParticleColor;
        static STREAM: $StreamCodec<$RegistryFriendlyByteBuf, $ParticleColor>;
        static FROM_HIGHLIGHT: $ParticleColor;
        static PURPLE: $ParticleColor;
        static TO_HIGHLIGHT: $ParticleColor;
        static GREEN: $ParticleColor;
        static RED: $ParticleColor;
        static random: $Random;
        static PINK: $ParticleColor;
        static PRESET_COLORS: $List<$ParticleColor>;
        static LIGHT_GRAY: $ParticleColor;
        static LIGHT_BLUE: $ParticleColor;
        static LIME: $ParticleColor;
        static MAGENTA: $ParticleColor;
        static BLACK: $ParticleColor;
        static ID: $ResourceLocation;
        static YELLOW: $ParticleColor;
        static CYAN: $ParticleColor;
        static DEFAULT: $ParticleColor;
        static BROWN: $ParticleColor;
        static ORANGE: $ParticleColor;
        constructor(arg0: number, arg1: number, arg2: number);
        constructor(arg0: $CompoundTag_);
        constructor(arg0: number, arg1: number, arg2: number);
        constructor(arg0: number, arg1: number, arg2: number);
        get color(): number;
        get registryName(): $ResourceLocation;
        get red(): number;
        get blue(): number;
        get green(): number;
        get greenInt(): number;
        get oppositeColor(): $ParticleColor;
        get blueInt(): number;
        get redInt(): number;
    }
    /**
     * @deprecated
     */
    export class $ParticleColor$IntWrapper implements $Cloneable {
        clone(): $ParticleColor$IntWrapper;
        toParticleColor(): $ParticleColor;
        r: number;
        b: number;
        g: number;
        constructor(arg0: number, arg1: number, arg2: number);
        constructor(arg0: $ParticleColor);
    }
}
