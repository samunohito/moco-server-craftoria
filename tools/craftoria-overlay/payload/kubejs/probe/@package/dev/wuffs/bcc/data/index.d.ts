import { $Codec } from "@package/com/mojang/serialization";
import { $Record } from "@package/java/lang";

declare module "@package/dev/wuffs/bcc/data" {
    export class $BetterStatus extends $Record {
        name(): string;
        version(): string;
        isMetaData(): boolean;
        static CODEC: $Codec<$BetterStatus>;
        constructor(name: string, version: string, isMetaData: boolean);
        get metaData(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $BetterStatus}.
     */
    export type $BetterStatus_ = { name?: string, version?: string, isMetaData?: boolean,  } | [name?: string, version?: string, isMetaData?: boolean, ];
    export class $ServerDataExtension {
    }
    export interface $ServerDataExtension {
        setBetterData(arg0: $BetterStatus_): void;
        getBetterData(): $BetterStatus;
    }
    export class $ExtendedServerStatus {
    }
    export interface $ExtendedServerStatus {
        setBetterData(arg0: $BetterStatus_): void;
        getBetterData(): ($BetterStatus) | undefined;
    }
}
