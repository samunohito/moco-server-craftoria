import { $Consumer_, $Consumer } from "@package/java/util/function";
import { $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $Level } from "@package/org/apache/logging/log4j";
import { $Record } from "@package/java/lang";
import { $ArrayDeque, $Collection_ } from "@package/java/util";
import { $TranslatableContents } from "@package/net/minecraft/network/chat/contents";
import { $SFMEpochInstant, $SFMEpochInstant_ } from "@package/ca/teamdman/sfm/common/timing";

declare module "@package/ca/teamdman/sfm/common/logging" {
    export class $TranslatableLogEvent extends $Record {
        static decode(arg0: $FriendlyByteBuf): $TranslatableLogEvent;
        encode(arg0: $FriendlyByteBuf): void;
        level(): $Level;
        instant(): $SFMEpochInstant;
        contents(): $TranslatableContents;
        constructor(level: $Level, instant: $SFMEpochInstant_, contents: $TranslatableContents);
    }
    /**
     * Values that may be interpreted as {@link $TranslatableLogEvent}.
     */
    export type $TranslatableLogEvent_ = { contents?: $TranslatableContents, instant?: $SFMEpochInstant_, level?: $Level,  } | [contents?: $TranslatableContents, instant?: $SFMEpochInstant_, level?: $Level, ];
    export class $TranslatableLogger {
        clear(): void;
        static decode(arg0: $FriendlyByteBuf): $ArrayDeque<$TranslatableLogEvent>;
        info(arg0: $Consumer_<$Consumer<$TranslatableContents>>): void;
        info(arg0: $TranslatableContents): void;
        trace(arg0: $Consumer_<$Consumer<$TranslatableContents>>): void;
        trace(arg0: $TranslatableContents): void;
        debug(arg0: $Consumer_<$Consumer<$TranslatableContents>>): void;
        debug(arg0: $TranslatableContents): void;
        error(arg0: $TranslatableContents): void;
        error(arg0: $Consumer_<$Consumer<$TranslatableContents>>): void;
        warn(arg0: $Consumer_<$Consumer<$TranslatableContents>>): void;
        warn(arg0: $TranslatableContents): void;
        getLogsAfter(arg0: $SFMEpochInstant_): $ArrayDeque<$TranslatableLogEvent>;
        setLogLevel(arg0: $Level): void;
        getLogLevel(): $Level;
        pruneSoWeDontEatAllTheRam(): void;
        static encodeAndDrain(arg0: $Collection_<$TranslatableLogEvent_>, arg1: $FriendlyByteBuf): void;
        getLogs(): $ArrayDeque<$TranslatableLogEvent>;
        constructor(arg0: string);
        get logs(): $ArrayDeque<$TranslatableLogEvent>;
    }
}
