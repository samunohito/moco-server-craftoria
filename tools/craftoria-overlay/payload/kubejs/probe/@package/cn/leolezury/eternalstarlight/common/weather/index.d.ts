import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $BlockPos_ } from "@package/net/minecraft/core";
import { $IntProvider, $IntProvider_ } from "@package/net/minecraft/util/valueproviders";
import { RegistryTypes, RegistryMarked } from "@special/types";
import { $Component } from "@package/net/minecraft/network/chat";
import { $Record } from "@package/java/lang";

declare module "@package/cn/leolezury/eternalstarlight/common/weather" {
    export class $AbstractWeather {
        onStart(arg0: $ServerLevel): void;
        getDescription(): $Component;
        clientTick(): void;
        getDescriptionId(): string;
        canStart(arg0: $ServerLevel): boolean;
        tickBlock(arg0: $ServerLevel, arg1: number, arg2: $BlockPos_): void;
        serverTick(arg0: $ServerLevel, arg1: number): void;
        onStop(arg0: $ServerLevel, arg1: number): void;
        canContinue(arg0: $ServerLevel, arg1: number): boolean;
        weatherProperties(): $AbstractWeather$Properties;
        modifyRainLevel(arg0: number): number;
        constructor(properties: $AbstractWeather$Properties_);
        get description(): $Component;
        get descriptionId(): string;
    }
    /**
     * Values that may be interpreted as {@link $AbstractWeather}.
     */
    export type $AbstractWeather_ = RegistryTypes.EternalStarlightWeather;
    export interface $AbstractWeather extends RegistryMarked<RegistryTypes.EternalStarlightWeatherTag, RegistryTypes.EternalStarlightWeather> {}
    export class $AbstractWeather$Properties extends $Record {
        duration(): $IntProvider;
        interval(): $IntProvider;
        constructor(duration: $IntProvider_, interval: $IntProvider_);
    }
    /**
     * Values that may be interpreted as {@link $AbstractWeather$Properties}.
     */
    export type $AbstractWeather$Properties_ = { duration?: $IntProvider_, interval?: $IntProvider_,  } | [duration?: $IntProvider_, interval?: $IntProvider_, ];
}
