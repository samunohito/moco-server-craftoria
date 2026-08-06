import { $Predicate } from "@package/java/util/function";
import { $MapCodec_, $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $Component_ } from "@package/net/minecraft/network/chat";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $Record } from "@package/java/lang";
import { $List_ } from "@package/java/util";
import { $StreamCodec_, $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/me/desht/pneumaticcraft/api/misc" {
    export interface $IPlayerMatcher$MatcherType<P> extends RegistryMarked<RegistryTypes.PneumaticcraftPlayerMatchersTag, RegistryTypes.PneumaticcraftPlayerMatchers> {}
    export class $IPlayerMatcher$MatcherType<P extends $IPlayerMatcher> extends $Record {
        streamCodec(): $StreamCodec<$RegistryFriendlyByteBuf, P>;
        codec(): $MapCodec<P>;
        constructor(codec: $MapCodec_<P>, streamCodec: $StreamCodec_<$RegistryFriendlyByteBuf, P>);
    }
    /**
     * Values that may be interpreted as {@link $IPlayerMatcher$MatcherType}.
     */
    export type $IPlayerMatcher$MatcherType_<P> = RegistryTypes.PneumaticcraftPlayerMatchers | { streamCodec?: $StreamCodec_<$RegistryFriendlyByteBuf, $IPlayerMatcher>, codec?: $MapCodec_<$IPlayerMatcher>,  } | [streamCodec?: $StreamCodec_<$RegistryFriendlyByteBuf, $IPlayerMatcher>, codec?: $MapCodec_<$IPlayerMatcher>, ];
    export class $IPlayerMatcher {
        static CODEC: $Codec<$IPlayerMatcher>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $IPlayerMatcher>;
    }
    export interface $IPlayerMatcher extends $Predicate<$Player> {
        type(): $IPlayerMatcher$MatcherType<$IPlayerMatcher>;
        standardTooltip(arg0: $Player, arg1: $List_<$Component_>, arg2: $Component_, arg3: $List_<$Component_>): void;
        addDescription(arg0: $Player, arg1: $List_<$Component_>): void;
    }
}
