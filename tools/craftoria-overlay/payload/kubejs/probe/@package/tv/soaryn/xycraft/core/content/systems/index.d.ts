import { $Level_ } from "@package/net/minecraft/world/level";
import { RegistryTypes, RegistryMarked } from "@special/types";
import { $LevelTickEvent } from "@package/net/neoforged/neoforge/event/tick";

declare module "@package/tv/soaryn/xycraft/core/content/systems" {
    export interface $LevelSystemBase<T> extends RegistryMarked<RegistryTypes.XycraftSystemsTag, RegistryTypes.XycraftSystems> {}
    export class $LevelSystemBase<T extends $ISystemData> {
        getName(): string;
        getData(arg0: $Level_): T;
        preTick(arg0: $LevelTickEvent, arg1: T): void;
        postTick(arg0: $LevelTickEvent, arg1: T): void;
        overridesEnabledFlag(): boolean;
        get name(): string;
    }
    /**
     * Values that may be interpreted as {@link $LevelSystemBase}.
     */
    export type $LevelSystemBase_<T> = RegistryTypes.XycraftSystems;
    export class $ISystemData {
    }
    export interface $ISystemData {
        enabled(): boolean;
        frequency(): number;
        setEnabled(arg0: boolean): void;
        setFrequency(arg0: number): void;
    }
}
