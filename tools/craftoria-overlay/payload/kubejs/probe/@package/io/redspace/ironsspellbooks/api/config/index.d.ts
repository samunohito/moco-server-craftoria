import { $JsonObject, $Gson } from "@package/com/google/gson";
import { $Supplier_, $Consumer_, $Supplier } from "@package/java/util/function";
import { $Event } from "@package/net/neoforged/bus/api";
import { $Codec_, $Codec } from "@package/com/mojang/serialization";
import { $SpellRarity_, $SchoolType, $SpellRarity, $AbstractSpell, $AbstractSpell_ } from "@package/io/redspace/ironsspellbooks/api/spells";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Record } from "@package/java/lang";

declare module "@package/io/redspace/ironsspellbooks/api/config" {
    export class $SpellConfigHolder {
        isDefault<T>(arg0: $SpellConfigParameter_<T>): boolean;
        getDefaultValue<T>(arg0: $SpellConfigParameter_<T>): (T) | undefined;
        get<T>(arg0: $SpellConfigParameter_<T>): T;
        set<T>(arg0: $SpellConfigParameter_<T>, arg1: T): void;
        toJson<T>(arg0: $Gson): $JsonObject;
        setDefaultValue<T>(arg0: $SpellConfigParameter_<T>, arg1: T): void;
        constructor();
    }
    export class $DefaultConfig {
        build(): $DefaultConfig;
        setDeprecated(arg0: boolean): $DefaultConfig;
        setAllowCrafting(arg0: boolean): $DefaultConfig;
        setCooldownSeconds(arg0: number): $DefaultConfig;
        setMaxLevel(arg0: number): $DefaultConfig;
        setSchoolResource(arg0: $ResourceLocation_): $DefaultConfig;
        setMinRarity(arg0: $SpellRarity_): $DefaultConfig;
        maxLevel: number;
        allowCrafting: boolean;
        minRarity: $SpellRarity;
        schoolResource: $ResourceLocation;
        enabled: boolean;
        cooldownInSeconds: number;
        constructor(arg0: $Consumer_<$DefaultConfig>);
        constructor();
        set deprecated(value: boolean);
        set cooldownSeconds(value: number);
    }
    export class $RegisterConfigParametersEvent extends $Event {
        register(arg0: $SpellConfigParameter_<never>): void;
        constructor(arg0: $Consumer_<$SpellConfigParameter<never>>);
    }
    export class $SpellConfigParameter<T> extends $Record {
        key(): $ResourceLocation;
        defaultValue(): $Supplier<T>;
        datatype(): $Codec<T>;
        static SCHOOL: $SpellConfigParameter<$SchoolType>;
        static COOLDOWN_IN_SECONDS: $SpellConfigParameter<number>;
        static ALLOW_CRAFTING: $SpellConfigParameter<boolean>;
        static MIN_RARITY: $SpellConfigParameter<$SpellRarity>;
        static POWER_MULTIPLIER: $SpellConfigParameter<number>;
        static ENABLED: $SpellConfigParameter<boolean>;
        static MAX_LEVEL: $SpellConfigParameter<number>;
        static MANA_MULTIPLIER: $SpellConfigParameter<number>;
        constructor(arg0: $ResourceLocation_, arg1: $Codec_<T>, arg2: T);
        constructor(key: $ResourceLocation_, datatype: $Codec_<T>, defaultValue: $Supplier_<T>);
    }
    /**
     * Values that may be interpreted as {@link $SpellConfigParameter}.
     */
    export type $SpellConfigParameter_<T> = { key?: $ResourceLocation_, defaultValue?: $Supplier_<any>, datatype?: $Codec_<any>,  } | [key?: $ResourceLocation_, defaultValue?: $Supplier_<any>, datatype?: $Codec_<any>, ];
    export class $ModifyDefaultConfigValuesEvent extends $Event {
        setDefaultValue<T>(arg0: $SpellConfigParameter_<T>, arg1: T): void;
        getSpell(): $AbstractSpell;
        constructor(arg0: $AbstractSpell_, arg1: $SpellConfigHolder);
        get spell(): $AbstractSpell;
    }
}
