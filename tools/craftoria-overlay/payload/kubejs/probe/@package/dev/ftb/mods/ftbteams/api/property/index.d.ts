import { $ConfigValue, $ConfigGroup, $NameMap } from "@package/dev/ftb/mods/ftblibrary/config";
import { $BigInteger } from "@package/java/math";
import { $BiConsumer_, $Predicate_, $Supplier_ } from "@package/java/util/function";
import { $Tag_, $Tag } from "@package/net/minecraft/nbt";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Color4I } from "@package/dev/ftb/mods/ftblibrary/icon";
import { $Enum } from "@package/java/lang";
import { $List, $Map, $Set } from "@package/java/util";
import { $StringRepresentable } from "@package/net/minecraft/util";

declare module "@package/dev/ftb/mods/ftbteams/api/property" {
    export class $TeamPropertyCollection {
    }
    export interface $TeamPropertyCollection {
        size(): number;
        get<T>(arg0: $TeamProperty<T>): T;
        set<T>(arg0: $TeamProperty<T>, arg1: T): void;
        forEach<T>(arg0: $BiConsumer_<$TeamProperty<T>, $TeamPropertyValue<T>>): void;
        copy(): $TeamPropertyCollection;
        updateFrom(arg0: $TeamPropertyCollection): void;
        copyIf(arg0: $Predicate_<$TeamProperty<never>>): $TeamPropertyCollection;
    }
    export class $PrivacyMode extends $Enum<$PrivacyMode> implements $StringRepresentable {
        static values(): $PrivacyMode[];
        static valueOf(name: string): $PrivacyMode;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static NAME_MAP: $NameMap<$PrivacyMode>;
        static PUBLIC: $PrivacyMode;
        static VALUES: $PrivacyMode[];
        static ALLIES: $PrivacyMode;
        static PRIVATE: $PrivacyMode;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $PrivacyMode}.
     */
    export type $PrivacyMode_ = "allies" | "private" | "public";
    export class $TeamPropertyType<T> {
        static register<Y>(id: $ResourceLocation_, deserializer: $TeamPropertyType$FromNet_<Y>): $TeamPropertyType<Y>;
        static write(buf: $RegistryFriendlyByteBuf, prop: $TeamProperty<never>): void;
        static read(buf: $RegistryFriendlyByteBuf): $TeamProperty<never>;
        static STRING_LIST: $TeamPropertyType<$List<string>>;
        static INT_MAP: $TeamPropertyType<$Map<string, number>>;
        static ENUM: $TeamPropertyType<string>;
        static BOOL_MAP: $TeamPropertyType<$Map<string, boolean>>;
        static PRIVACY_MODE: $TeamPropertyType<$PrivacyMode>;
        static BIG_INTEGER: $TeamPropertyType<$BigInteger>;
        static BOOLEAN: $TeamPropertyType<boolean>;
        static STRING_SET: $TeamPropertyType<$Set<string>>;
        static INT: $TeamPropertyType<number>;
        static STRING_MAP: $TeamPropertyType<$Map<string, string>>;
        static COLOR: $TeamPropertyType<$Color4I>;
        static STRING: $TeamPropertyType<string>;
        static DOUBLE: $TeamPropertyType<number>;
    }
    export class $TeamPropertyType$FromNet<Y> {
    }
    export interface $TeamPropertyType$FromNet<Y> {
        apply(arg0: $ResourceLocation_, arg1: $RegistryFriendlyByteBuf): $TeamProperty<Y>;
    }
    /**
     * Values that may be interpreted as {@link $TeamPropertyType$FromNet}.
     */
    export type $TeamPropertyType$FromNet_<Y> = ((arg0: $ResourceLocation, arg1: $RegistryFriendlyByteBuf) => $TeamProperty<Y>);
    export class $TeamProperty<T> {
        getDefaultValue(): T;
        toString(value: T): string;
        isHidden(): boolean;
        write(arg0: $RegistryFriendlyByteBuf): void;
        getId(): $ResourceLocation;
        getType(): $TeamPropertyType<T>;
        config(config: $ConfigGroup, value: $TeamPropertyValue<T>): $ConfigValue<never>;
        readValue(buf: $RegistryFriendlyByteBuf): T;
        fromString(arg0: string): (T) | undefined;
        fromNBT(tag: $Tag_): (T) | undefined;
        writeValue(buf: $RegistryFriendlyByteBuf, value: T): void;
        hidden(): $TeamProperty<T>;
        toNBT(value: T): $Tag;
        getTranslationKey(prefix: string): string;
        /**
         * @deprecated
         */
        createDefaultValue(): $TeamPropertyValue<T>;
        syncToAll(): $TeamProperty<T>;
        /**
         * @deprecated
         */
        createValueFromNBT(tag: $Tag_): $TeamPropertyValue<T>;
        shouldSyncToAll(): boolean;
        isPlayerEditable(): boolean;
        notPlayerEditable(): $TeamProperty<T>;
        /**
         * @deprecated
         */
        createValueFromNetwork(buf: $RegistryFriendlyByteBuf): $TeamPropertyValue<T>;
        get defaultValue(): T;
        get id(): $ResourceLocation;
        get type(): $TeamPropertyType<T>;
        get playerEditable(): boolean;
    }
    export class $PrivacyProperty extends $TeamProperty<$PrivacyMode> {
        toString(value: $PrivacyMode_): string;
        constructor(id: $ResourceLocation_, def: $Supplier_<$PrivacyMode>);
        constructor(id: $ResourceLocation_, def: $PrivacyMode_);
    }
    export class $TeamPropertyValue<T> {
        getProperty(): $TeamProperty<T>;
        getValue(): T;
        setValue(value: T): void;
        copy(): $TeamPropertyValue<T>;
        static fromNBT<X>(property: $TeamProperty<X>, tag: $Tag_): $TeamPropertyValue<X>;
        static fromNetwork<X>(property: $TeamProperty<X>, buf: $RegistryFriendlyByteBuf): $TeamPropertyValue<X>;
        static createDefaultValue<X>(property: $TeamProperty<X>): $TeamPropertyValue<X>;
        constructor(property: $TeamProperty<T>, value: T);
        constructor(property: $TeamProperty<T>);
        get property(): $TeamProperty<T>;
    }
}
