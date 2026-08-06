import { $DeferredHolder } from "@package/net/neoforged/neoforge/registries";
import { $Level, $Level_ } from "@package/net/minecraft/world/level";
import { $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { $ItemStack_ } from "@package/net/minecraft/world/item";
import { $Component } from "@package/net/minecraft/network/chat";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $List, $Map_, $Map, $List_ } from "@package/java/util";
import { $StringRepresentable } from "@package/net/minecraft/util";
import { $Predicate } from "@package/java/util/function";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $FishProperties_, $FishProperties$Rarity_, $FishProperties$Rarity } from "@package/com/wdiscute/starcatcher/registry";
import { $Enum, $Record } from "@package/java/lang";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";

declare module "@package/com/wdiscute/starcatcher/registry/fishrestrictions" {
    export class $SeasonRestriction extends $AbstractFishRestriction {
        getSeasons(): $Map<$SeasonRestriction$Seasons, number>;
        getTranslationOverride(): string;
        static NOT_WINTER: $SeasonRestriction;
        static SPRING: $SeasonRestriction;
        static CODEC: $MapCodec<$SeasonRestriction>;
        static AUTUMN_WINTER: $SeasonRestriction;
        static SPRING_SUMMER: $SeasonRestriction;
        static SPRING_AUTUMN: $SeasonRestriction;
        static AROUND_WINTER: $SeasonRestriction;
        static AROUND_SUMMER: $SeasonRestriction;
        static NOT_AUTUMN: $SeasonRestriction;
        static AROUND_AUTUMN: $SeasonRestriction;
        static AROUND_SPRING: $SeasonRestriction;
        static AUTUMN: $SeasonRestriction;
        static ABSTRACT_PROCESSOR_CODEC: $Codec<$AbstractFishRestriction>;
        static NOT_SPRING: $SeasonRestriction;
        static WINTER: $SeasonRestriction;
        static SPRING_WINTER: $SeasonRestriction;
        static SUMMER: $SeasonRestriction;
        static SUMMER_AUTUMN: $SeasonRestriction;
        static NOT_SUMMER: $SeasonRestriction;
        constructor();
        constructor(arg0: $Map_<$SeasonRestriction$Seasons_, number>, arg1: string);
        get seasons(): $Map<$SeasonRestriction$Seasons, number>;
        get translationOverride(): string;
    }
    export class $WeatherRestriction extends $AbstractFishRestriction {
        getWeather(): $WeatherRestriction$Weather;
        getTranslationOverride(): string;
        static RAIN: $WeatherRestriction;
        static CODEC: $MapCodec<$WeatherRestriction>;
        static ABSTRACT_PROCESSOR_CODEC: $Codec<$AbstractFishRestriction>;
        static CLEAR: $WeatherRestriction;
        static THUNDER: $WeatherRestriction;
        constructor(arg0: $WeatherRestriction$Weather_, arg1: string);
        constructor(arg0: $WeatherRestriction$Weather_);
        constructor();
        get weather(): $WeatherRestriction$Weather;
        get translationOverride(): string;
    }
    export class $AbstractFishRestriction$Context extends $Enum<$AbstractFishRestriction$Context> {
        static values(): $AbstractFishRestriction$Context[];
        static valueOf(arg0: string): $AbstractFishRestriction$Context;
        isGuide(): boolean;
        static GUIDE_ENTRY: $AbstractFishRestriction$Context;
        static EMI: $AbstractFishRestriction$Context;
        static OTHER: $AbstractFishRestriction$Context;
        static FISHING: $AbstractFishRestriction$Context;
        static FISH_ENTITY: $AbstractFishRestriction$Context;
        static COMMAND: $AbstractFishRestriction$Context;
        static GUIDE_FISHES_IN_AREA: $AbstractFishRestriction$Context;
        static GUIDE_FISHES_HOVER: $AbstractFishRestriction$Context;
        get guide(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $AbstractFishRestriction$Context}.
     */
    export type $AbstractFishRestriction$Context_ = "command" | "fishing" | "guide_entry" | "guide_fishes_in_area" | "guide_fishes_hover" | "fish_entity" | "emi" | "other";
    export class $SeasonRestriction$Seasons extends $Enum<$SeasonRestriction$Seasons> implements $StringRepresentable {
        static values(): $SeasonRestriction$Seasons[];
        static valueOf(arg0: string): $SeasonRestriction$Seasons;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static EARLY_WINTER: $SeasonRestriction$Seasons;
        static ALL: $SeasonRestriction$Seasons;
        static LATE_WINTER: $SeasonRestriction$Seasons;
        static CODEC: $Codec<$SeasonRestriction$Seasons>;
        static MID_WINTER: $SeasonRestriction$Seasons;
        static MID_SUMMER: $SeasonRestriction$Seasons;
        static MID_SPRING: $SeasonRestriction$Seasons;
        static LATE_AUTUMN: $SeasonRestriction$Seasons;
        static EARLY_AUTUMN: $SeasonRestriction$Seasons;
        static LATE_SPRING: $SeasonRestriction$Seasons;
        static MID_AUTUMN: $SeasonRestriction$Seasons;
        static EARLY_SPRING: $SeasonRestriction$Seasons;
        static LATE_SUMMER: $SeasonRestriction$Seasons;
        static EARLY_SUMMER: $SeasonRestriction$Seasons;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $SeasonRestriction$Seasons}.
     */
    export type $SeasonRestriction$Seasons_ = "all" | "early_spring" | "mid_spring" | "late_spring" | "early_summer" | "mid_summer" | "late_summer" | "early_autumn" | "mid_autumn" | "late_autumn" | "early_winter" | "mid_winter" | "late_winter";
    export class $RarityCountRestriction$RarityCount$CountType extends $Enum<$RarityCountRestriction$RarityCount$CountType> implements $StringRepresentable {
        static values(): $RarityCountRestriction$RarityCount$CountType[];
        static valueOf(arg0: string): $RarityCountRestriction$RarityCount$CountType;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static TOTAL: $RarityCountRestriction$RarityCount$CountType;
        static ALL: $RarityCountRestriction$RarityCount$CountType;
        static CODEC: $Codec<$RarityCountRestriction$RarityCount$CountType>;
        static UNIQUE: $RarityCountRestriction$RarityCount$CountType;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $RarityCountRestriction$RarityCount$CountType}.
     */
    export type $RarityCountRestriction$RarityCount$CountType_ = "all" | "unique" | "total";
    export class $WeatherRestriction$Weather extends $Enum<$WeatherRestriction$Weather> implements $StringRepresentable {
        static values(): $WeatherRestriction$Weather[];
        static valueOf(arg0: string): $WeatherRestriction$Weather;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static RAIN_OR_THUNDER: $WeatherRestriction$Weather;
        static RAIN: $WeatherRestriction$Weather;
        static CODEC: $Codec<$WeatherRestriction$Weather>;
        static CLEAR_OR_RAIN: $WeatherRestriction$Weather;
        static CLEAR_OR_THUNDER: $WeatherRestriction$Weather;
        static CLEAR: $WeatherRestriction$Weather;
        static THUNDER: $WeatherRestriction$Weather;
        isCorrect: $Predicate<$Level>;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $WeatherRestriction$Weather}.
     */
    export type $WeatherRestriction$Weather_ = "clear" | "rain" | "thunder" | "clear_or_rain" | "clear_or_thunder" | "rain_or_thunder";
    export class $DaytimeRestriction extends $AbstractFishRestriction {
        getRanges(): $List<$DaytimeRestriction$Duo>;
        getTranslationOverride(): string;
        static CODEC: $MapCodec<$DaytimeRestriction>;
        static NOON: $DaytimeRestriction;
        static NIGHT: $DaytimeRestriction;
        static ABSTRACT_PROCESSOR_CODEC: $Codec<$AbstractFishRestriction>;
        static MIDNIGHT: $DaytimeRestriction;
        static DAY: $DaytimeRestriction;
        constructor();
        constructor(arg0: $List_<$DaytimeRestriction$Duo_>, arg1: string);
        get ranges(): $List<$DaytimeRestriction$Duo>;
        get translationOverride(): string;
    }
    export class $DaytimeRestriction$Duo extends $Record {
        first(): number;
        second(): number;
        static CODEC: $Codec<$DaytimeRestriction$Duo>;
        constructor(first: number, second: number);
    }
    /**
     * Values that may be interpreted as {@link $DaytimeRestriction$Duo}.
     */
    export type $DaytimeRestriction$Duo_ = { first?: number, second?: number,  } | [first?: number, second?: number, ];
    export interface $AbstractFishRestriction extends RegistryMarked<RegistryTypes.StarcatcherFishRestrictionsTag, RegistryTypes.StarcatcherFishRestrictions> {}
    export class $RarityCountRestriction$RarityCount extends $Record {
        count(): number;
        rarity(): $FishProperties$Rarity;
        countType(): $RarityCountRestriction$RarityCount$CountType;
        static CODEC: $Codec<$RarityCountRestriction$RarityCount>;
        constructor(rarity: $FishProperties$Rarity_, count: number, countType: $RarityCountRestriction$RarityCount$CountType_);
    }
    /**
     * Values that may be interpreted as {@link $RarityCountRestriction$RarityCount}.
     */
    export type $RarityCountRestriction$RarityCount_ = { rarity?: $FishProperties$Rarity_, countType?: $RarityCountRestriction$RarityCount$CountType_, count?: number,  } | [rarity?: $FishProperties$Rarity_, countType?: $RarityCountRestriction$RarityCount$CountType_, count?: number, ];
    export class $AbstractFishRestriction {
        isEnabled(): boolean;
        getDescription(arg0: $Level_, arg1: $FishProperties_, arg2: $Player, arg3: $AbstractFishRestriction$Context_): $Component;
        getRegistryHolder(): $DeferredHolder<$AbstractFishRestriction, $AbstractFishRestriction>;
        getCodecOrThrow(): $MapCodec<$AbstractFishRestriction>;
        render(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number, arg4: number, arg5: $AbstractFishRestriction$Context_): void;
        getRegistryHolderOrThrow(): $DeferredHolder<$AbstractFishRestriction, $AbstractFishRestriction>;
        getHover(arg0: $Level_, arg1: $FishProperties_, arg2: $Player, arg3: $AbstractFishRestriction$Context_): $List<$Component>;
        getFishChance(arg0: number, arg1: $Level_, arg2: $FishProperties_, arg3: $Entity, arg4: $ItemStack_, arg5: $AbstractFishRestriction$Context_): number;
        getIndexHover(arg0: $Level_, arg1: $FishProperties_, arg2: $Player, arg3: $AbstractFishRestriction$Context_): $List<$Component>;
        getBlacklist(arg0: $Level_, arg1: $FishProperties_, arg2: $Player, arg3: $AbstractFishRestriction$Context_): $List<$Component>;
        codec(): $MapCodec<$AbstractFishRestriction>;
        static ABSTRACT_PROCESSOR_CODEC: $Codec<$AbstractFishRestriction>;
        constructor();
        get enabled(): boolean;
        get registryHolder(): $DeferredHolder<$AbstractFishRestriction, $AbstractFishRestriction>;
        get codecOrThrow(): $MapCodec<$AbstractFishRestriction>;
        get registryHolderOrThrow(): $DeferredHolder<$AbstractFishRestriction, $AbstractFishRestriction>;
    }
    /**
     * Values that may be interpreted as {@link $AbstractFishRestriction}.
     */
    export type $AbstractFishRestriction_ = RegistryTypes.StarcatcherFishRestrictions;
}
