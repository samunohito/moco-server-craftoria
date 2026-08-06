import { $Logger } from "@package/org/apache/logging/log4j";
import { $ConfigBuilder, $PolyConfig } from "@package/net/creeperhost/polylib/config";
export * as config from "@package/net/creeperhost/polylib/config";

declare module "@package/net/creeperhost/polylib" {
    export class $PolyLib {
        static init(): void;
        static initPolyItemData(): void;
        static configData: $PolyConfig;
        static MOD_ID: string;
        static configBuilder: $ConfigBuilder;
        static LOGGER: $Logger;
        constructor();
    }
}
