import { $Level_ } from "@package/net/minecraft/world/level";
import { $SoundEvent } from "@package/net/minecraft/sounds";
import { $Holder_, $Holder } from "@package/net/minecraft/core";
import { $MapCodec } from "@package/com/mojang/serialization";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $Component, $Component_ } from "@package/net/minecraft/network/chat";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Cloneable } from "@package/java/lang";
import { $Vec3_ } from "@package/net/minecraft/world/phys";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/com/hollingsworth/arsnouveau/api/sound" {
    export class $SpellSound {
        getId(): $ResourceLocation;
        getSoundEvent(): $Holder<$SoundEvent>;
        getTexturePath(): $ResourceLocation;
        withSortNum(arg0: number): $SpellSound;
        getSoundName(): $Component;
        sortNum(): number;
        static CODEC: $MapCodec<$SpellSound>;
        static STREAM: $StreamCodec<$RegistryFriendlyByteBuf, $SpellSound>;
        constructor(arg0: $Holder_<$SoundEvent>, arg1: $Component_, arg2: $ResourceLocation_);
        get id(): $ResourceLocation;
        get soundEvent(): $Holder<$SoundEvent>;
        get texturePath(): $ResourceLocation;
        get soundName(): $Component;
    }
    export class $ConfiguredSpellSound implements $Cloneable {
        clone(): $ConfiguredSpellSound;
        getPitch(): number;
        getVolume(): number;
        getSound(): $SpellSound;
        playSound(arg0: $Level_, arg1: $Vec3_): void;
        playSound(arg0: $Level_, arg1: number, arg2: number, arg3: number): void;
        static CODEC: $MapCodec<$ConfiguredSpellSound>;
        static STREAM: $StreamCodec<$RegistryFriendlyByteBuf, $ConfiguredSpellSound>;
        static EMPTY: $ConfiguredSpellSound;
        static DEFAULT: $ConfiguredSpellSound;
        constructor(arg0: $SpellSound);
        constructor(arg0: $SpellSound | null, arg1: number, arg2: number);
        get pitch(): number;
        get volume(): number;
        get sound(): $SpellSound;
    }
}
