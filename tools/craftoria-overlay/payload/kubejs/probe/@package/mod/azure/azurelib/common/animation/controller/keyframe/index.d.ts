import { $AzBoneAnimationQueueCache, $AzBoneSnapshotCache, $AzAnimationController } from "@package/mod/azure/azurelib/common/animation/controller";
import { $AzBoneSnapshot, $AzBone } from "@package/mod/azure/azurelib/common/model";
import { $AzCustomKeyframeHandler, $AzParticleKeyframeHandler, $AzSoundKeyframeHandler } from "@package/mod/azure/azurelib/common/animation/controller/keyframe/handler";
import { $AzQueuedAnimation_ } from "@package/mod/azure/azurelib/common/animation/primitive";
import { $AzEasingType } from "@package/mod/azure/azurelib/common/animation/easing";
import { $Record } from "@package/java/lang";
import { $Queue, $List, $Map_, $List_ } from "@package/java/util";
import { $IValue_, $IValue } from "@package/mod/azure/azurelib/core/math";

declare module "@package/mod/azure/azurelib/common/animation/controller/keyframe" {
    export class $AzKeyframe<T extends $IValue> extends $Record {
        length(): number;
        endValue(): T;
        startValue(): T;
        easingType(): $AzEasingType;
        easingArgs(): $List<T>;
        constructor(length: number, startValue: T, endValue: T, easingType: $AzEasingType, easingArgs: $List_<T>);
        constructor(arg0: number, arg1: T, arg2: T, arg3: $AzEasingType);
        constructor(arg0: number, arg1: T, arg2: T);
    }
    /**
     * Values that may be interpreted as {@link $AzKeyframe}.
     */
    export type $AzKeyframe_<T> = { easingType?: $AzEasingType, endValue?: $IValue_, length?: number, startValue?: $IValue_, easingArgs?: $List_<$IValue_>,  } | [easingType?: $AzEasingType, endValue?: $IValue_, length?: number, startValue?: $IValue_, easingArgs?: $List_<$IValue_>, ];
    export class $AzKeyframeExecutor<T> extends $AzAbstractKeyframeExecutor {
        execute(arg0: $AzQueuedAnimation_, arg1: T, arg2: boolean): void;
        constructor(arg0: $AzAnimationController<T>, arg1: $AzBoneAnimationQueueCache<T>);
    }
    export class $AzKeyframeCallbacks<T> {
        static builder<T>(): $AzKeyframeCallbacks$Builder<T>;
        static noop<T>(): $AzKeyframeCallbacks<T>;
        customKeyframeHandler(): $AzCustomKeyframeHandler<T>;
        particleKeyframeHandler(): $AzParticleKeyframeHandler<T>;
        soundKeyframeHandler(): $AzSoundKeyframeHandler<T>;
    }
    export class $AzKeyframeStack<T extends $AzKeyframe<never>> extends $Record {
        static from<F extends $AzKeyframe<never>>(arg0: $AzKeyframeStack_<F>): $AzKeyframeStack<F>;
        xKeyframes(): $List<T>;
        yKeyframes(): $List<T>;
        zKeyframes(): $List<T>;
        getLastKeyframeTime(): number;
        constructor();
        constructor(xKeyframes: $List_<T>, yKeyframes: $List_<T>, zKeyframes: $List_<T>);
        get lastKeyframeTime(): number;
    }
    /**
     * Values that may be interpreted as {@link $AzKeyframeStack}.
     */
    export type $AzKeyframeStack_<T> = { yKeyframes?: $List_<$AzKeyframe_<never>>, xKeyframes?: $List_<$AzKeyframe_<never>>, zKeyframes?: $List_<$AzKeyframe_<never>>,  } | [yKeyframes?: $List_<$AzKeyframe_<never>>, xKeyframes?: $List_<$AzKeyframe_<never>>, zKeyframes?: $List_<$AzKeyframe_<never>>, ];
    export class $AzBoneAnimationQueue extends $Record {
        addScales(arg0: $AzAnimationPoint_, arg1: $AzAnimationPoint_, arg2: $AzAnimationPoint_): void;
        bone(): $AzBone;
        scaleYQueue(): $Queue<$AzAnimationPoint>;
        positionXQueue(): $Queue<$AzAnimationPoint>;
        positionYQueue(): $Queue<$AzAnimationPoint>;
        scaleXQueue(): $Queue<$AzAnimationPoint>;
        scaleZQueue(): $Queue<$AzAnimationPoint>;
        rotationZQueue(): $Queue<$AzAnimationPoint>;
        rotationXQueue(): $Queue<$AzAnimationPoint>;
        positionZQueue(): $Queue<$AzAnimationPoint>;
        rotationYQueue(): $Queue<$AzAnimationPoint>;
        addNextRotation(arg0: $AzKeyframe_<never>, arg1: number, arg2: number, arg3: $AzBoneSnapshot, arg4: $AzBoneSnapshot, arg5: $AzAnimationPoint_, arg6: $AzAnimationPoint_, arg7: $AzAnimationPoint_): void;
        addNextPosition(arg0: $AzKeyframe_<never>, arg1: number, arg2: number, arg3: $AzBoneSnapshot, arg4: $AzAnimationPoint_, arg5: $AzAnimationPoint_, arg6: $AzAnimationPoint_): void;
        addNextScale(arg0: $AzKeyframe_<never>, arg1: number, arg2: number, arg3: $AzBoneSnapshot, arg4: $AzAnimationPoint_, arg5: $AzAnimationPoint_, arg6: $AzAnimationPoint_): void;
        addPositions(arg0: $AzAnimationPoint_, arg1: $AzAnimationPoint_, arg2: $AzAnimationPoint_): void;
        addRotations(arg0: $AzAnimationPoint_, arg1: $AzAnimationPoint_, arg2: $AzAnimationPoint_): void;
        addPosZPoint(arg0: $AzKeyframe_<never>, arg1: number, arg2: number, arg3: number, arg4: number): void;
        addScaleXPoint(arg0: $AzKeyframe_<never>, arg1: number, arg2: number, arg3: number, arg4: number): void;
        addRotationYPoint(arg0: $AzKeyframe_<never>, arg1: number, arg2: number, arg3: number, arg4: number): void;
        addRotationZPoint(arg0: $AzKeyframe_<never>, arg1: number, arg2: number, arg3: number, arg4: number): void;
        addRotationXPoint(arg0: $AzKeyframe_<never>, arg1: number, arg2: number, arg3: number, arg4: number): void;
        addScaleZPoint(arg0: $AzKeyframe_<never>, arg1: number, arg2: number, arg3: number, arg4: number): void;
        addScaleYPoint(arg0: $AzKeyframe_<never>, arg1: number, arg2: number, arg3: number, arg4: number): void;
        addPosXPoint(arg0: $AzKeyframe_<never>, arg1: number, arg2: number, arg3: number, arg4: number): void;
        addPosYPoint(arg0: $AzKeyframe_<never>, arg1: number, arg2: number, arg3: number, arg4: number): void;
        constructor(arg0: $AzBone);
        constructor(bone: $AzBone, rotationXQueue: $Queue<$AzAnimationPoint_>, rotationYQueue: $Queue<$AzAnimationPoint_>, rotationZQueue: $Queue<$AzAnimationPoint_>, positionXQueue: $Queue<$AzAnimationPoint_>, positionYQueue: $Queue<$AzAnimationPoint_>, positionZQueue: $Queue<$AzAnimationPoint_>, scaleXQueue: $Queue<$AzAnimationPoint_>, scaleYQueue: $Queue<$AzAnimationPoint_>, scaleZQueue: $Queue<$AzAnimationPoint_>);
    }
    /**
     * Values that may be interpreted as {@link $AzBoneAnimationQueue}.
     */
    export type $AzBoneAnimationQueue_ = { scaleXQueue?: $Queue<$AzAnimationPoint_>, rotationXQueue?: $Queue<$AzAnimationPoint_>, positionYQueue?: $Queue<$AzAnimationPoint_>, bone?: $AzBone, rotationYQueue?: $Queue<$AzAnimationPoint_>, scaleYQueue?: $Queue<$AzAnimationPoint_>, positionZQueue?: $Queue<$AzAnimationPoint_>, positionXQueue?: $Queue<$AzAnimationPoint_>, rotationZQueue?: $Queue<$AzAnimationPoint_>, scaleZQueue?: $Queue<$AzAnimationPoint_>,  } | [scaleXQueue?: $Queue<$AzAnimationPoint_>, rotationXQueue?: $Queue<$AzAnimationPoint_>, positionYQueue?: $Queue<$AzAnimationPoint_>, bone?: $AzBone, rotationYQueue?: $Queue<$AzAnimationPoint_>, scaleYQueue?: $Queue<$AzAnimationPoint_>, positionZQueue?: $Queue<$AzAnimationPoint_>, positionXQueue?: $Queue<$AzAnimationPoint_>, rotationZQueue?: $Queue<$AzAnimationPoint_>, scaleZQueue?: $Queue<$AzAnimationPoint_>, ];
    export class $AzKeyframeTransitioner<T> extends $AzAbstractKeyframeExecutor {
        transition(arg0: $Map_<string, $AzBone>, arg1: boolean, arg2: number): void;
        constructor(arg0: $AzAnimationController<T>, arg1: $AzBoneAnimationQueueCache<T>, arg2: $AzBoneSnapshotCache);
    }
    export class $AzBoneAnimation extends $Record {
        boneName(): string;
        rotationKeyframes(): $AzKeyframeStack<$AzKeyframe<$IValue>>;
        scaleKeyframes(): $AzKeyframeStack<$AzKeyframe<$IValue>>;
        positionKeyframes(): $AzKeyframeStack<$AzKeyframe<$IValue>>;
        constructor(boneName: string, rotationKeyframes: $AzKeyframeStack_<$AzKeyframe_<$IValue_>>, positionKeyframes: $AzKeyframeStack_<$AzKeyframe_<$IValue_>>, scaleKeyframes: $AzKeyframeStack_<$AzKeyframe_<$IValue_>>);
    }
    /**
     * Values that may be interpreted as {@link $AzBoneAnimation}.
     */
    export type $AzBoneAnimation_ = { boneName?: string, rotationKeyframes?: $AzKeyframeStack_<$AzKeyframe_<$IValue_>>, positionKeyframes?: $AzKeyframeStack_<$AzKeyframe_<$IValue_>>, scaleKeyframes?: $AzKeyframeStack_<$AzKeyframe_<$IValue_>>,  } | [boneName?: string, rotationKeyframes?: $AzKeyframeStack_<$AzKeyframe_<$IValue_>>, positionKeyframes?: $AzKeyframeStack_<$AzKeyframe_<$IValue_>>, scaleKeyframes?: $AzKeyframeStack_<$AzKeyframe_<$IValue_>>, ];
    export class $AzKeyframeCallbackHandler<T> {
        reset(): void;
        handle(arg0: T, arg1: number): void;
        constructor(arg0: $AzAnimationController<T>, arg1: $AzKeyframeCallbacks<T>);
    }
    export class $AzKeyframeManager<T> {
        keyframeTransitioner(): $AzKeyframeTransitioner<T>;
        keyframeCallbackHandler(): $AzKeyframeCallbackHandler<T>;
        keyframeExecutor(): $AzKeyframeExecutor<T>;
        constructor(arg0: $AzAnimationController<T>, arg1: $AzBoneAnimationQueueCache<T>, arg2: $AzBoneSnapshotCache, arg3: $AzKeyframeCallbacks<T>);
    }
}
