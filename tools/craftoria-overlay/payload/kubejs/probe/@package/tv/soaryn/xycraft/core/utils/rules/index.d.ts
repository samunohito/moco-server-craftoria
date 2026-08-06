import { $MapCodec_, $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { RegistryTypes, RegistryMarked } from "@special/types";
import { $BinarySerializer } from "@package/tv/soaryn/xycraft/core/utils/serialization";

declare module "@package/tv/soaryn/xycraft/core/utils/rules" {
    export class $IRule {
        static RULE_CODEC: $Codec<$IRule>;
        static SerDes: $BinarySerializer<$IRule>;
    }
    export interface $IRule {
        matches(arg0: $BlockState_): boolean;
        getType(): $IRuleType<never>;
        get type(): $IRuleType<never>;
    }
    export class $IRuleType<P extends $IRule> {
    }
    export interface $IRuleType<P extends $IRule> {
        codec(): $MapCodec<P>;
    }
    /**
     * Values that may be interpreted as {@link $IRuleType}.
     */
    export type $IRuleType_<P> = RegistryTypes.XycraftRule | (() => $MapCodec_<P>);
    export interface $IRuleType<P> extends RegistryMarked<RegistryTypes.XycraftRuleTag, RegistryTypes.XycraftRule> {}
}
