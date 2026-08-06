import { $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $List_, $List } from "@package/java/util";

declare module "@package/com/yungnickyoung/minecraft/yungscavebiomes/mixin/lost_caves/client/accessor" {
    export class $PalettedPermutationsAccessor {
    }
    export interface $PalettedPermutationsAccessor {
        getTextures(): $List<$ResourceLocation>;
        getPaletteKey(): $ResourceLocation;
        setTextures(arg0: $List_<$ResourceLocation_>): void;
        get paletteKey(): $ResourceLocation;
    }
}
