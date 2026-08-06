import { $FormattedCharSequence } from "@package/net/minecraft/util";

declare module "@package/net/bivrik/fancytoasts/client/gui" {
    export class $IClientTextTooltipAccessor {
    }
    export interface $IClientTextTooltipAccessor {
        getText(): $FormattedCharSequence;
        get text(): $FormattedCharSequence;
    }
    /**
     * Values that may be interpreted as {@link $IClientTextTooltipAccessor}.
     */
    export type $IClientTextTooltipAccessor_ = (() => $FormattedCharSequence);
}
