import { $Item } from "@package/net/minecraft/world/item";
import { RegistryTypes, RegistryMarked } from "@special/types";
import { $StringRepresentable } from "@package/net/minecraft/util";

declare module "@package/de/dafuqs/spectrum/api/item" {
    export class $GemstoneColor {
    }
    export interface $GemstoneColor extends $StringRepresentable {
        getColor(): number;
        getGemstonePowderItem(): $Item;
        get color(): number;
        get gemstonePowderItem(): $Item;
    }
    /**
     * Values that may be interpreted as {@link $GemstoneColor}.
     */
    export type $GemstoneColor_ = RegistryTypes.SpectrumGemstoneColor;
    export interface $GemstoneColor extends RegistryMarked<RegistryTypes.SpectrumGemstoneColorTag, RegistryTypes.SpectrumGemstoneColor> {}
}
