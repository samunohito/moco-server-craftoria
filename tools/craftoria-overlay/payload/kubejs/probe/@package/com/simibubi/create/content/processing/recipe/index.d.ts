import { $BlazeBurnerBlock$HeatLevel, $BlazeBurnerBlock$HeatLevel_ } from "@package/com/simibubi/create/content/processing/burner";
import { $Codec } from "@package/com/mojang/serialization";
import { $ItemStack, $Item_, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $KubeCreateOutput } from "@package/dev/latvian/mods/kubejs/create/wrapper";
import { $RandomSource, $StringRepresentable } from "@package/net/minecraft/util";
import { $GeneratorsCreateOutput as $GeneratorsCreateOutput$1 } from "@package/dev/bluephs/dgjs/wrapper";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $GeneratorsCreateOutput } from "@package/dev/bluephs/createvintageneoforged/compat/kubejs/wrapper";
import { $DataComponentPatch_ } from "@package/net/minecraft/core/component";
import { $Enum } from "@package/java/lang";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/com/simibubi/create/content/processing/recipe" {
    export class $ProcessingOutput implements $GeneratorsCreateOutput$1, $GeneratorsCreateOutput, $KubeCreateOutput {
        getStack(): $ItemStack;
        getChance(): number;
        rollOutput(arg0: $RandomSource): $ItemStack;
        /**
         * @deprecated
         */
        static CODEC: $Codec<$ProcessingOutput>;
        /**
         * @deprecated
         */
        static CODEC_OLD: $Codec<$ProcessingOutput>;
        static EMPTY: $ProcessingOutput;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ProcessingOutput>;
        static CODEC_NEW: $Codec<$ProcessingOutput>;
        constructor(arg0: $ResourceLocation_, arg1: number, arg2: $DataComponentPatch_, arg3: number);
        constructor(arg0: $ResourceLocation_, arg1: number, arg2: number);
        constructor(arg0: $Item_, arg1: number, arg2: $DataComponentPatch_, arg3: number);
        constructor(arg0: $Item_, arg1: number, arg2: number);
        constructor(arg0: $ItemStack_, arg1: number);
        get stack(): $ItemStack;
        get chance(): number;
    }
    export class $HeatCondition extends $Enum<$HeatCondition> implements $StringRepresentable {
        static values(): $HeatCondition[];
        static valueOf(arg0: string): $HeatCondition;
        getColor(): number;
        getSerializedName(): string;
        testBlazeBurner(arg0: $BlazeBurnerBlock$HeatLevel_): boolean;
        getTranslationKey(): string;
        visualizeAsBlazeBurner(): $BlazeBurnerBlock$HeatLevel;
        getRemappedEnumConstantName(): string;
        static CODEC: $Codec<$HeatCondition>;
        static HEATED: $HeatCondition;
        static SUPERHEATED: $HeatCondition;
        static NONE: $HeatCondition;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $HeatCondition>;
        get color(): number;
        get serializedName(): string;
        get translationKey(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $HeatCondition}.
     */
    export type $HeatCondition_ = "none" | "heated" | "superheated";
}
