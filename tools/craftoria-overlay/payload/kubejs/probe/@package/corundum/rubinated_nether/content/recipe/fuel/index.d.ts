import { $Codec } from "@package/com/mojang/serialization";
import { RegistryTypes, RegistryMarked } from "@special/types";
import { $Record } from "@package/java/lang";

declare module "@package/corundum/rubinated_nether/content/recipe/fuel" {
    export class $FreezerFuel extends $Record {
        item(): string;
        freezeTime(): number;
        static FREEZER_FUEL_CODEC: $Codec<$FreezerFuel>;
        constructor(item: string, freezeTime: number);
    }
    /**
     * Values that may be interpreted as {@link $FreezerFuel}.
     */
    export type $FreezerFuel_ = RegistryTypes.RubinatedNetherFreezerFuel | { freezeTime?: number, item?: string,  } | [freezeTime?: number, item?: string, ];
    export interface $FreezerFuel extends RegistryMarked<RegistryTypes.RubinatedNetherFreezerFuelTag, RegistryTypes.RubinatedNetherFreezerFuel> {}
}
