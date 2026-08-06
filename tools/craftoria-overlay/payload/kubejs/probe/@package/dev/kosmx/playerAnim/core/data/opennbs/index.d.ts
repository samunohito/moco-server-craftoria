import { $Header, $CustomInstrument, $Layer } from "@package/dev/kosmx/playerAnim/core/data/opennbs/format";
import { $ArrayList } from "@package/java/util";
export * as format from "@package/dev/kosmx/playerAnim/core/data/opennbs/format";

declare module "@package/dev/kosmx/playerAnim/core/data/opennbs" {
    export class $NBS {
        getLength(): number;
        setLength(length: number): void;
        getLayers(): $ArrayList<$Layer>;
        header: $Header;
        constructor(header: $Header, layers: $ArrayList<$Layer>, customInstruments: $ArrayList<$CustomInstrument>);
        get layers(): $ArrayList<$Layer>;
    }
}
