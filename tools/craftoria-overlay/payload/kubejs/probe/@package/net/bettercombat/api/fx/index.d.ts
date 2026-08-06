import { $ItemStack_ } from "@package/net/minecraft/world/item";
import { $Record } from "@package/java/lang";
import { $LinkedHashMap } from "@package/java/util";

declare module "@package/net/bettercombat/api/fx" {
    export class $ParticlePlacement extends $Record {
        particle_type(): string;
        x_addition(): number;
        z_addition(): number;
        roll_set(): number;
        y_addition(): number;
        local_yaw(): number;
        pitch_addition(): number;
        static DEFAULT: $ParticlePlacement;
        constructor(particle_type: string, x_addition: number, y_addition: number, z_addition: number, local_yaw: number, pitch_addition: number, roll_set: number);
    }
    /**
     * Values that may be interpreted as {@link $ParticlePlacement}.
     */
    export type $ParticlePlacement_ = { pitch_addition?: number, z_addition?: number, y_addition?: number, x_addition?: number, roll_set?: number, particle_type?: string, local_yaw?: number,  } | [pitch_addition?: number, z_addition?: number, y_addition?: number, x_addition?: number, roll_set?: number, particle_type?: string, local_yaw?: number, ];
    export class $TrailAppearance {
        secondary: $TrailAppearance$Part;
        static DEFAULT: $TrailAppearance;
        primary: $TrailAppearance$Part;
        constructor();
        constructor(primary: $TrailAppearance$Part_, secondary: $TrailAppearance$Part_);
    }
    export class $TrailAppearance$Part extends $Record {
        color_rgba(): number;
        glows(): boolean;
        static DEFAULT_PRIMARY: $TrailAppearance$Part;
        static DEFAULT_SECONDARY: $TrailAppearance$Part;
        constructor(color_rgba: number, glows: boolean);
    }
    /**
     * Values that may be interpreted as {@link $TrailAppearance$Part}.
     */
    export type $TrailAppearance$Part_ = { color_rgba?: number, glows?: boolean,  } | [color_rgba?: number, glows?: boolean, ];
    export class $ConditionalTrailAppearance extends $Record {
        merge(override: $ConditionalTrailAppearance_): $ConditionalTrailAppearance;
        resolve(itemStack: $ItemStack_): $TrailAppearance;
        conditional(): $LinkedHashMap<string, $TrailAppearance>;
        default_appearance(): $TrailAppearance;
        constructor(default_appearance: $TrailAppearance, conditional: $LinkedHashMap<string, $TrailAppearance>);
        constructor();
        constructor(default_appearance: $TrailAppearance);
    }
    /**
     * Values that may be interpreted as {@link $ConditionalTrailAppearance}.
     */
    export type $ConditionalTrailAppearance_ = { default_appearance?: $TrailAppearance, conditional?: $LinkedHashMap<string, $TrailAppearance>,  } | [default_appearance?: $TrailAppearance, conditional?: $LinkedHashMap<string, $TrailAppearance>, ];
}
