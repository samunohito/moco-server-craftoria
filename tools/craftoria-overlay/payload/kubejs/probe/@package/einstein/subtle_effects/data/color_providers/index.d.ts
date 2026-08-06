import { $Level_ } from "@package/net/minecraft/world/level";
import { $Supplier_, $Supplier } from "@package/java/util/function";
import { $BlockPos_ } from "@package/net/minecraft/core";
import { $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { $Either } from "@package/com/mojang/datafixers/util";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Record } from "@package/java/lang";
import { $List, $Map, $List_ } from "@package/java/util";
import { $Vector3f } from "@package/org/joml";
import { $StringRepresentable, $RandomSource } from "@package/net/minecraft/util";

declare module "@package/einstein/subtle_effects/data/color_providers" {
    export class $Colorable {
        static tint(arg0: number, arg1: number[], arg2: $Vector3f): void;
    }
    export interface $Colorable {
        tinting(): ($Either<number, boolean>) | undefined;
        colorProvider(): $ColorProviderType$ColorProvider;
        getColorAndApplyTint(arg0: $Level_, arg1: $BlockPos_, arg2: $RandomSource): $Vector3f;
    }
    export class $BiomeColorProvider extends $Record implements $ColorProviderType$ColorProvider {
        getType(): $ColorProviderType<never>;
        provideColor(arg0: $Level_, arg1: $BlockPos_, arg2: $RandomSource): $Vector3f;
        colorType(): $BiomeColorProvider$ColorType;
        static CODEC: $MapCodec<$BiomeColorProvider>;
        constructor(colorType: $BiomeColorProvider$ColorType);
        get type(): $ColorProviderType<never>;
    }
    /**
     * Values that may be interpreted as {@link $BiomeColorProvider}.
     */
    export type $BiomeColorProvider_ = { colorType?: $BiomeColorProvider$ColorType,  } | [colorType?: $BiomeColorProvider$ColorType, ];
    export class $ColorProviderType<T extends $ColorProviderType$ColorProvider> extends $Record implements $StringRepresentable {
        static init(): void;
        registryName(): $ResourceLocation;
        getSerializedName(): string;
        codec(): $Supplier<$MapCodec<T>>;
        getRemappedEnumConstantName(): string;
        static TYPES: $Map<$ResourceLocation, $ColorProviderType<never>>;
        static REGISTRY_CODEC: $Codec<$ColorProviderType<$ColorProviderType$ColorProvider>>;
        static CODEC: $Codec<$ColorProviderType$ColorProvider>;
        static PRESET: $ColorProviderType<$PresetColorProvider>;
        static CONSTANT: $ColorProviderType<$ConstantColorProvider>;
        static BIOME_WATER: $ColorProviderType<$BiomeColorProvider>;
        static NONE: $ColorProviderType<$NoneColorProvider>;
        static LIST: $ColorProviderType<$ListColorProvider>;
        constructor(registryName: $ResourceLocation_, codec: $Supplier_<$MapCodec<T>>);
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $ColorProviderType}.
     */
    export type $ColorProviderType_<T> = { registryName?: $ResourceLocation_, codec?: $Supplier_<$MapCodec<$ColorProviderType$ColorProvider>>,  } | [registryName?: $ResourceLocation_, codec?: $Supplier_<$MapCodec<$ColorProviderType$ColorProvider>>, ];
    export class $PresetColorProvider extends $Record implements $ColorProviderType$ColorProvider {
        getType(): $ColorProviderType<never>;
        preset(): $PresetColorProvider$Preset;
        provideColor(arg0: $Level_, arg1: $BlockPos_, arg2: $RandomSource): $Vector3f;
        static CODEC: $MapCodec<$PresetColorProvider>;
        constructor(preset: $PresetColorProvider$Preset);
        get type(): $ColorProviderType<never>;
    }
    /**
     * Values that may be interpreted as {@link $PresetColorProvider}.
     */
    export type $PresetColorProvider_ = { preset?: $PresetColorProvider$Preset,  } | [preset?: $PresetColorProvider$Preset, ];
    export class $ColorProviderType$ColorProvider {
    }
    export interface $ColorProviderType$ColorProvider {
        getType(): $ColorProviderType<never>;
        provideColor(arg0: $Level_, arg1: $BlockPos_, arg2: $RandomSource): $Vector3f;
        get type(): $ColorProviderType<never>;
    }
    export class $ListColorProvider extends $Record implements $ColorProviderType$ColorProvider {
        getType(): $ColorProviderType<never>;
        providers(): $List<$ColorProviderType$ColorProvider>;
        provideColor(arg0: $Level_, arg1: $BlockPos_, arg2: $RandomSource): $Vector3f;
        static fromIntList(arg0: $List_<number>): $ListColorProvider;
        static CODEC: $MapCodec<$ListColorProvider>;
        constructor(providers: $List_<$ColorProviderType$ColorProvider>);
        get type(): $ColorProviderType<never>;
    }
    /**
     * Values that may be interpreted as {@link $ListColorProvider}.
     */
    export type $ListColorProvider_ = { providers?: $List_<$ColorProviderType$ColorProvider>,  } | [providers?: $List_<$ColorProviderType$ColorProvider>, ];
    export class $NoneColorProvider implements $ColorProviderType$ColorProvider {
        getType(): $ColorProviderType<never>;
        provideColor(arg0: $Level_, arg1: $BlockPos_, arg2: $RandomSource): $Vector3f;
        static CODEC: $MapCodec<$NoneColorProvider>;
        static INSTANCE: $NoneColorProvider;
        constructor();
        get type(): $ColorProviderType<never>;
    }
    export class $ConstantColorProvider extends $Record implements $ColorProviderType$ColorProvider {
        getType(): $ColorProviderType<never>;
        color(): number;
        provideColor(arg0: $Level_, arg1: $BlockPos_, arg2: $RandomSource): $Vector3f;
        static CODEC: $MapCodec<$ConstantColorProvider>;
        constructor(color: number);
        get type(): $ColorProviderType<never>;
    }
    /**
     * Values that may be interpreted as {@link $ConstantColorProvider}.
     */
    export type $ConstantColorProvider_ = { color?: number,  } | [color?: number, ];
}
