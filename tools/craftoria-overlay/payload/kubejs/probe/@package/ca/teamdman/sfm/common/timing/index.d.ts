import { $Instant } from "@package/org/apache/logging/log4j/core/time";
import { $Duration } from "@package/java/time";
import { $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $Comparable, $Record } from "@package/java/lang";

declare module "@package/ca/teamdman/sfm/common/timing" {
    export class $SFMEpochInstant extends $Record implements $Comparable<$SFMEpochInstant> {
        compareTo(arg0: $SFMEpochInstant_): number;
        write(arg0: $FriendlyByteBuf): void;
        static read(arg0: $FriendlyByteBuf): $SFMEpochInstant;
        static zero(): $SFMEpochInstant;
        elapsed(): $Duration;
        static now(): $SFMEpochInstant;
        instant(): $Instant;
        constructor(instant: $Instant);
    }
    /**
     * Values that may be interpreted as {@link $SFMEpochInstant}.
     */
    export type $SFMEpochInstant_ = { instant?: $Instant,  } | [instant?: $Instant, ];
}
