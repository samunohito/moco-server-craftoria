import { $ConfigContext } from "@package/net/puffish/skillsmod/api/config";
import { $JsonElement } from "@package/net/puffish/skillsmod/api/json";
import { $Record } from "@package/java/lang";
import { $Result, $Problem } from "@package/net/puffish/skillsmod/api/util";

declare module "@package/net/puffish/skillsmod/experience/source/builtin/util" {
    export class $AntiFarmingPerChunk$State {
        tryIncrement(antiFarming: $AntiFarmingPerChunk_): boolean;
        removeOutdated(): void;
        constructor();
    }
    export class $AntiFarmingPerChunk extends $Record {
        static parse(rootElement: $JsonElement, context: $ConfigContext): $Result<($AntiFarmingPerChunk) | undefined, $Problem>;
        limitPerChunk(): number;
        resetAfterSeconds(): number;
        constructor(limitPerChunk: number, resetAfterSeconds: number);
    }
    /**
     * Values that may be interpreted as {@link $AntiFarmingPerChunk}.
     */
    export type $AntiFarmingPerChunk_ = { limitPerChunk?: number, resetAfterSeconds?: number,  } | [limitPerChunk?: number, resetAfterSeconds?: number, ];
}
