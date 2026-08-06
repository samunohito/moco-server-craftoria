import { $ConfiguredSpellSound } from "@package/com/hollingsworth/arsnouveau/api/sound";
import { $Supplier_ } from "@package/java/util/function";
import { $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $Component } from "@package/net/minecraft/network/chat";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $ParticleColor } from "@package/com/hollingsworth/arsnouveau/client/particle";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $ParticleConfigWidgetProvider } from "@package/com/hollingsworth/arsnouveau/api/particle/configurations";
import { $Runnable_, $Object, $Runnable } from "@package/java/lang";
import { $List, $Map_, $Map, $Set_ } from "@package/java/util";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/com/hollingsworth/arsnouveau/api/particle/configurations/properties" {
    export class $BaseProperty<T extends $BaseProperty<T>> {
        getName(): $Component;
        getId(): $ResourceLocation;
        getType(): $IPropertyType<T>;
        buildWidgets(arg0: number, arg1: number, arg2: number, arg3: number): $ParticleConfigWidgetProvider;
        subProperties(): $List<$BaseProperty<never>>;
        setChangedListener(arg0: $Runnable_): void;
        survivesMotionChange(): boolean;
        onDependenciesChanged: $Runnable;
        propertyHolder: $PropMap;
        constructor();
        constructor(arg0: $PropMap);
        get name(): $Component;
        get id(): $ResourceLocation;
        get type(): $IPropertyType<T>;
        set changedListener(value: $Runnable_);
    }
    export class $PropMap {
        get<T extends $BaseProperty<any>>(arg0: $Supplier_<$IPropertyType<T>>): T;
        get<T extends $BaseProperty<any>>(arg0: $IPropertyType_<T>): T;
        set<T extends $BaseProperty<any>>(arg0: $IPropertyType_<T>, arg1: T): void;
        getOrDefault<T extends $BaseProperty<any>>(arg0: $IPropertyType_<T>, arg1: T): T;
        has(arg0: $IPropertyType_<never>): boolean;
        getOrCreate<T extends $BaseProperty<any>>(arg0: $IPropertyType_<T>, arg1: $Supplier_<T>): T;
        getOptional<T extends $BaseProperty<any>>(arg0: $IPropertyType_<T>): (T) | undefined;
        removePropsOnMotionChange(arg0: $Set_<$PropMap>): void;
        removePropsOnMotionChange(): void;
        getParticleColor(): $ParticleColor;
        createIfMissing<T extends $BaseProperty<any>>(arg0: T): T;
        static CODEC: $Codec<$PropMap>;
        static VALUE_MAP_CODEC: $Codec<$Map<$IPropertyType<never>, $Object>>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $PropMap>;
        constructor(arg0: $Map_<$IPropertyType_<never>, $Object>);
        constructor();
        get particleColor(): $ParticleColor;
    }
    export interface $IPropertyType<T> extends RegistryMarked<RegistryTypes.ArsNouveauParticlePropertiesTag, RegistryTypes.ArsNouveauParticleProperties> {}
    export class $IPropertyType<T extends $BaseProperty<any>> {
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $IPropertyType<never>>;
    }
    export interface $IPropertyType<T extends $BaseProperty<any>> {
        getString(): string;
        streamCodec(): $StreamCodec<$RegistryFriendlyByteBuf, T>;
        codec(): $MapCodec<T>;
        normalCodec(): $Codec<T>;
        get string(): string;
    }
    /**
     * Values that may be interpreted as {@link $IPropertyType}.
     */
    export type $IPropertyType_<T> = RegistryTypes.ArsNouveauParticleProperties;
    export class $SoundProperty extends $BaseProperty<$SoundProperty> {
        static CODEC: $MapCodec<$SoundProperty>;
        sound: $ConfiguredSpellSound;
        onDependenciesChanged: $Runnable;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $SoundProperty>;
        propertyHolder: $PropMap;
        constructor(arg0: $ConfiguredSpellSound);
        constructor();
    }
    export class $ColorProperty extends $BaseProperty<$ColorProperty> {
        color(): $ParticleColor;
        isTintDisabled(): boolean;
        static CODEC: $MapCodec<$ColorProperty>;
        particleColor: $ParticleColor;
        onDependenciesChanged: $Runnable;
        isLegacyRGB: boolean;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ColorProperty>;
        propertyHolder: $PropMap;
        constructor(arg0: $ParticleColor, arg1: boolean);
        constructor();
        get tintDisabled(): boolean;
    }
}
