import { $GameRules$BooleanValue, $GameRules$Key, $GameRules$Category_, $GameRules$Value, $GameRules$Type } from "@package/net/minecraft/world/level";

declare module "@package/net/puffish/skillsmod/mixin" {
    export class $GameRulesInvoker {
        static invokeRegister<T extends $GameRules$Value<T>>(name: string, category: $GameRules$Category_, type: $GameRules$Type<T>): $GameRules$Key<T>;
    }
    export interface $GameRulesInvoker {
    }
    export class $BooleanRuleInvoker {
        static invokeCreate(initialValue: boolean): $GameRules$Type<$GameRules$BooleanValue>;
    }
    export interface $BooleanRuleInvoker {
    }
}
