import { $TransformType_ } from "@package/dev/kosmx/playerAnim/api";
import { $HashMap } from "@package/java/util";
import { $FirstPersonMode, $FirstPersonMode_, $FirstPersonConfiguration } from "@package/dev/kosmx/playerAnim/api/firstPerson";
import { $Pair, $Vec3f } from "@package/dev/kosmx/playerAnim/core/util";
import { $KeyframeAnimation, $KeyframeAnimation$StateCollection, $KeyframeAnimation$StateCollection$State } from "@package/dev/kosmx/playerAnim/core/data";

declare module "@package/dev/kosmx/playerAnim/api/layered" {
    export class $KeyframeAnimationPlayer$Axis {
        getValueAtCurrentTick(currentValue: number): number;
        constructor(this$0: $KeyframeAnimationPlayer, keyframes: $KeyframeAnimation$StateCollection$State);
    }
    export class $KeyframeAnimationPlayer implements $IActualAnimation<$KeyframeAnimationPlayer> {
        isInfinite(): boolean;
        stop(): void;
        isActive(): boolean;
        getData(): $KeyframeAnimation;
        tick(): void;
        isLoopStarted(): boolean;
        getFirstPersonConfiguration(tickDelta: number): $FirstPersonConfiguration;
        setupAnim(tickDelta: number): void;
        getTick(): number;
        getCurrentTick(): number;
        get3DTransform(modelName: string, type: $TransformType_, tickDelta: number, value0: $Vec3f): $Vec3f;
        getFirstPersonMode(tickDelta: number): $FirstPersonMode;
        setFirstPersonConfiguration(firstPersonConfiguration: $FirstPersonConfiguration): $KeyframeAnimationPlayer;
        getPart(string: string): $KeyframeAnimationPlayer$BodyPart;
        getStopTick(): number;
        setFirstPersonMode(arg0: $FirstPersonMode_): $KeyframeAnimationPlayer;
        perspective: number;
        bodyParts: $HashMap<string, $KeyframeAnimationPlayer$BodyPart>;
        constructor(animation: $KeyframeAnimation, t: number);
        constructor(animation: $KeyframeAnimation, t: number, mutable: boolean);
        constructor(animation: $KeyframeAnimation);
        get infinite(): boolean;
        get active(): boolean;
        get data(): $KeyframeAnimation;
        get loopStarted(): boolean;
        set upAnim(value: number);
        get currentTick(): number;
        get stopTick(): number;
    }
    export class $AnimationStack implements $IAnimation {
        isActive(): boolean;
        tick(): void;
        getFirstPersonConfiguration(tickDelta: number): $FirstPersonConfiguration;
        setupAnim(tickDelta: number): void;
        get3DTransform(modelName: string, type: $TransformType_, tickDelta: number, value0: $Vec3f): $Vec3f;
        getFirstPersonMode(tickDelta: number): $FirstPersonMode;
        addAnimLayer(priority: number, layer: $IAnimation): void;
        removeLayer(layerLevel: number): boolean;
        removeLayer(layer: $IAnimation): boolean;
        constructor();
        get active(): boolean;
        set upAnim(value: number);
    }
    export class $KeyframeAnimationPlayer$BodyPart {
        getBend(value0: $Pair<number, number>): $Pair<number, number>;
        getScale(value0: $Vec3f): $Vec3f;
        getBodyRotation(value0: $Vec3f): $Vec3f;
        getBodyOffset(value0: $Vec3f): $Vec3f;
        scaleX: $KeyframeAnimationPlayer$Axis;
        scaleY: $KeyframeAnimationPlayer$Axis;
        bendAxis: $KeyframeAnimationPlayer$RotationAxis;
        part: $KeyframeAnimation$StateCollection;
        bend: $KeyframeAnimationPlayer$RotationAxis;
        x: $KeyframeAnimationPlayer$Axis;
        roll: $KeyframeAnimationPlayer$RotationAxis;
        y: $KeyframeAnimationPlayer$Axis;
        z: $KeyframeAnimationPlayer$Axis;
        pitch: $KeyframeAnimationPlayer$RotationAxis;
        yaw: $KeyframeAnimationPlayer$RotationAxis;
        scaleZ: $KeyframeAnimationPlayer$Axis;
        constructor(this$0: $KeyframeAnimationPlayer, part: $KeyframeAnimation$StateCollection);
    }
    export class $IAnimation {
    }
    export interface $IAnimation {
        isActive(): boolean;
        tick(): void;
        getFirstPersonConfiguration(tickDelta: number): $FirstPersonConfiguration;
        setupAnim(arg0: number): void;
        get3DTransform(arg0: string, arg1: $TransformType_, arg2: number, arg3: $Vec3f): $Vec3f;
        getFirstPersonMode(tickDelta: number): $FirstPersonMode;
        get active(): boolean;
        set upAnim(value: number);
    }
    export class $IActualAnimation<T extends $IActualAnimation<T>> {
    }
    export interface $IActualAnimation<T extends $IActualAnimation<T>> extends $IAnimation {
        setFirstPersonMode(arg0: $FirstPersonMode_): T;
        setFirstPersonConfiguration(arg0: $FirstPersonConfiguration): T;
        set firstPersonMode(value: $FirstPersonMode_);
        set firstPersonConfiguration(value: $FirstPersonConfiguration);
    }
    export class $KeyframeAnimationPlayer$RotationAxis extends $KeyframeAnimationPlayer$Axis {
        constructor(this$0: $KeyframeAnimationPlayer, keyframes: $KeyframeAnimation$StateCollection$State);
    }
}
