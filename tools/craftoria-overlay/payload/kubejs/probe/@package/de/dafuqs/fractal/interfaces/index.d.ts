import { $List } from "@package/java/util";
import { $CreativeSubTab } from "@package/de/dafuqs/fractal/api";

declare module "@package/de/dafuqs/fractal/interfaces" {
    export class $ICreativeTabParent {
    }
    export interface $ICreativeTabParent {
        fractal$getSelectedChild(): $CreativeSubTab;
        fractal$getTabOffset(): number;
        fractal$getChildren(): $List<$CreativeSubTab>;
        fractal$setSelectedChild(arg0: $CreativeSubTab): void;
        fractal$getTextB(): number;
        fractal$getTextR(): number;
        fractal$getTextG(): number;
    }
    export class $ISubTabLocation {
    }
    export interface $ISubTabLocation {
        fractal$getX2(): number;
        fractal$getY(): number;
        fractal$getX(): number;
        fractal$getH2(): number;
        fractal$getH(): number;
    }
}
