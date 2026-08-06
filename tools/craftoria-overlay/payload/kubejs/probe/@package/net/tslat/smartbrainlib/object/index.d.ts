import { $BehaviorControl } from "@package/net/minecraft/world/entity/ai/behavior";
import { $Activity, $Activity_ } from "@package/net/minecraft/world/entity/schedule";

declare module "@package/net/tslat/smartbrainlib/object" {
    export class $BrainBehaviourPredicate {
    }
    export interface $BrainBehaviourPredicate {
        isBehaviour(arg0: number, arg1: $Activity_, arg2: $BehaviorControl<never>, arg3: $BehaviorControl<never>): boolean;
    }
    /**
     * Values that may be interpreted as {@link $BrainBehaviourPredicate}.
     */
    export type $BrainBehaviourPredicate_ = ((arg0: number, arg1: $Activity, arg2: $BehaviorControl<never>, arg3: $BehaviorControl<never>) => boolean);
    export class $BrainBehaviourConsumer {
    }
    export interface $BrainBehaviourConsumer {
        consume(arg0: number, arg1: $Activity_, arg2: $BehaviorControl<never>, arg3: $BehaviorControl<never>): void;
    }
    /**
     * Values that may be interpreted as {@link $BrainBehaviourConsumer}.
     */
    export type $BrainBehaviourConsumer_ = ((arg0: number, arg1: $Activity, arg2: $BehaviorControl<never>, arg3: $BehaviorControl<never>) => void);
}
