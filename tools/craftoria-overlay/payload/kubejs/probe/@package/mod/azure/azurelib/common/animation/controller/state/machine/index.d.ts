import { $AzAnimationController } from "@package/mod/azure/azurelib/common/animation/controller";
import { $AzAnimationContext } from "@package/mod/azure/azurelib/common/animation";
import { $AzAnimationState } from "@package/mod/azure/azurelib/common/animation/controller/state";
import { $Record } from "@package/java/lang";
import { $AzAnimationPauseState, $AzAnimationPlayState, $AzAnimationStopState, $AzAnimationTransitionState } from "@package/mod/azure/azurelib/common/animation/controller/state/impl";
import { $StateMachine, $StateMachineContext } from "@package/mod/azure/azurelib/common/util/state";

declare module "@package/mod/azure/azurelib/common/animation/controller/state/machine" {
    export class $AzAnimationControllerStateMachine$Context<T> implements $StateMachineContext {
        animationController(): $AzAnimationController<T>;
        stateMachine(): $AzAnimationControllerStateMachine<T>;
        animationContext(): $AzAnimationContext<T>;
    }
    export class $AzAnimationControllerStateMachine<T> extends $StateMachine<$AzAnimationControllerStateMachine$Context<T>, $AzAnimationState<T>> {
        update(): void;
        stop(): void;
        transition(): void;
        isStopped(): boolean;
        play(): void;
        isPlaying(): boolean;
        pause(): void;
        isPaused(): boolean;
        createContext(): $StateMachineContext;
        isTransitioning(): boolean;
        constructor(arg0: $AzAnimationControllerStateMachine$StateHolder_<$AzAnimationState<T>>, arg1: $AzAnimationController<$AzAnimationState<T>>, arg2: $AzAnimationContext<$AzAnimationState<T>>);
        get stopped(): boolean;
        get playing(): boolean;
        get paused(): boolean;
        get transitioning(): boolean;
    }
    export class $AzAnimationControllerStateMachine$StateHolder<T> extends $Record {
        stopState(): $AzAnimationStopState<T>;
        playState(): $AzAnimationPlayState<T>;
        transitionState(): $AzAnimationTransitionState<T>;
        pauseState(): $AzAnimationPauseState<T>;
        constructor(playState: $AzAnimationPlayState<T>, pauseState: $AzAnimationPauseState<T>, stopState: $AzAnimationStopState<T>, transitionState: $AzAnimationTransitionState<T>);
    }
    /**
     * Values that may be interpreted as {@link $AzAnimationControllerStateMachine$StateHolder}.
     */
    export type $AzAnimationControllerStateMachine$StateHolder_<T> = { stopState?: $AzAnimationStopState<any>, playState?: $AzAnimationPlayState<any>, transitionState?: $AzAnimationTransitionState<any>, pauseState?: $AzAnimationPauseState<any>,  } | [stopState?: $AzAnimationStopState<any>, playState?: $AzAnimationPlayState<any>, transitionState?: $AzAnimationTransitionState<any>, pauseState?: $AzAnimationPauseState<any>, ];
}
