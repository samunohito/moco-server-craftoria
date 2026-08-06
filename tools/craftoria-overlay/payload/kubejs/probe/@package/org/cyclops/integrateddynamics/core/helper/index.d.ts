import { $IPartType, $IPartState } from "@package/org/cyclops/integrateddynamics/api/part";

declare module "@package/org/cyclops/integrateddynamics/core/helper" {
    export class $PartHelpers$IPartStateHolderCallback {
    }
    export interface $PartHelpers$IPartStateHolderCallback {
        onSet(arg0: $PartHelpers$PartStateHolder<never, never>): void;
    }
    /**
     * Values that may be interpreted as {@link $PartHelpers$IPartStateHolderCallback}.
     */
    export type $PartHelpers$IPartStateHolderCallback_ = ((arg0: $PartHelpers$PartStateHolder<never, never>) => void);
    export class $PartHelpers$PartStateHolder<P extends $IPartType<P, S>, S extends $IPartState<P>> {
        static of(arg0: $IPartType<any, any>, arg1: $IPartState<any>): $PartHelpers$PartStateHolder<never, never>;
        getState(): S;
        getPart(): $IPartType<P, S>;
        constructor(arg0: $IPartType<P, S>, arg1: S);
        get state(): S;
        get part(): $IPartType<P, S>;
    }
}
