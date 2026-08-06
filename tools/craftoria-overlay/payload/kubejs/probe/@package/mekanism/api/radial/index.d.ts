import { $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $IRadialMode, $INestedRadialMode } from "@package/mekanism/api/radial/mode";
import { $List_, $List } from "@package/java/util";
export * as mode from "@package/mekanism/api/radial/mode";

declare module "@package/mekanism/api/radial" {
    export class $RadialData<MODE extends $IRadialMode> {
        index(arg0: $List_<MODE>, arg1: MODE): number;
        getIdentifier(): $ResourceLocation;
        getNetworkRepresentation(arg0: MODE): number;
        fromNetworkRepresentation(arg0: number): MODE;
        getModes(): $List<MODE>;
        getDefaultMode(arg0: $List_<MODE>): MODE;
        fromIdentifier(arg0: $ResourceLocation_): $INestedRadialMode;
        indexNullable(arg0: $List_<MODE>, arg1: MODE): number;
        tryGetNetworkRepresentation(arg0: $IRadialMode): number;
        get identifier(): $ResourceLocation;
        get modes(): $List<MODE>;
    }
}
