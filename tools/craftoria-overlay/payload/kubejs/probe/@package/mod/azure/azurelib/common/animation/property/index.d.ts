import { $AzAnimationPropertiesCodec } from "@package/mod/azure/azurelib/common/animation/property/codec";
import { $AzEasingType } from "@package/mod/azure/azurelib/common/animation/easing";
export * as codec from "@package/mod/azure/azurelib/common/animation/property/codec";

declare module "@package/mod/azure/azurelib/common/animation/property" {
    export class $AzAnimationProperties {
        easingType(): $AzEasingType;
        transitionLength(): number;
        animationSpeed(): number;
        hasTransitionLength(): boolean;
        hasFreezeTickOffset(): boolean;
        withStartTickOffset(arg0: number): $AzAnimationProperties;
        withTransitionLength(arg0: number): $AzAnimationProperties;
        withFreezeTickOffset(arg0: number): $AzAnimationProperties;
        repeatXTimes(): number;
        startTickOffset(): number;
        freezeTickOffset(): number;
        isReversing(): boolean;
        withShouldReverse(arg0: boolean): $AzAnimationProperties;
        hasStartTickOffset(): boolean;
        withRepeatXTimes(arg0: number): $AzAnimationProperties;
        hasEasingType(): boolean;
        hasReversing(): boolean;
        withAnimationSpeed(arg0: number): $AzAnimationProperties;
        hasAnimationSpeed(): boolean;
        withEasingType(arg0: $AzEasingType): $AzAnimationProperties;
        hasRepeatXTimes(): boolean;
        static CODEC: $AzAnimationPropertiesCodec;
        static EMPTY: $AzAnimationProperties;
        static DEFAULT: $AzAnimationProperties;
        constructor(arg0: number, arg1: $AzEasingType, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean);
        get reversing(): boolean;
    }
}
