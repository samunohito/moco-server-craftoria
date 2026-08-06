
declare module "@package/dev/worldgen/tectonic/mixin" {
    export class $DimensionTypeAccessor {
    }
    export interface $DimensionTypeAccessor {
        setHeight(i: number): void;
        setMinY(i: number): void;
        setLogicalHeight(i: number): void;
        set height(value: number);
        set minY(value: number);
        set logicalHeight(value: number);
    }
    export class $NoiseSettingsAccessor {
    }
    export interface $NoiseSettingsAccessor {
        setHeight(i: number): void;
        setMinY(i: number): void;
        set height(value: number);
        set minY(value: number);
    }
}
