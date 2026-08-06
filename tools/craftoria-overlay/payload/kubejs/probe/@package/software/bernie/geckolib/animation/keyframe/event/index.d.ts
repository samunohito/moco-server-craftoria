import { $SoundKeyframeData, $ParticleKeyframeData, $CustomInstructionKeyframeData } from "@package/software/bernie/geckolib/animation/keyframe/event/data";
import { $GeoAnimatable } from "@package/software/bernie/geckolib/animatable";
import { $AnimationController } from "@package/software/bernie/geckolib/animation";
export * as data from "@package/software/bernie/geckolib/animation/keyframe/event/data";

declare module "@package/software/bernie/geckolib/animation/keyframe/event" {
    export class $ParticleKeyframeEvent<T extends $GeoAnimatable> extends $KeyFrameEvent<T, $ParticleKeyframeData> {
        getKeyframeData(): $ParticleKeyframeData;
        constructor(arg0: T, arg1: number, arg2: $AnimationController<T>, arg3: $ParticleKeyframeData);
        get keyframeData(): $ParticleKeyframeData;
    }
    export class $CustomInstructionKeyframeEvent<T extends $GeoAnimatable> extends $KeyFrameEvent<T, $CustomInstructionKeyframeData> {
        getKeyframeData(): $CustomInstructionKeyframeData;
        constructor(arg0: T, arg1: number, arg2: $AnimationController<T>, arg3: $CustomInstructionKeyframeData);
        get keyframeData(): $CustomInstructionKeyframeData;
    }
    export class $SoundKeyframeEvent<T extends $GeoAnimatable> extends $KeyFrameEvent<T, $SoundKeyframeData> {
        getKeyframeData(): $SoundKeyframeData;
        constructor(arg0: T, arg1: number, arg2: $AnimationController<T>, arg3: $SoundKeyframeData);
        get keyframeData(): $SoundKeyframeData;
    }
}
