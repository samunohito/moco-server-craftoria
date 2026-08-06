import { $IPlayable } from "@package/dev/kosmx/playerAnim/api";
import { $NBS } from "@package/dev/kosmx/playerAnim/core/data/opennbs";
import { $Object, $Enum } from "@package/java/lang";
import { $UUID_, $HashMap, $UUID, $List, $Map } from "@package/java/util";
import { $ByteBuffer } from "@package/java/nio";
import { $KeyframeAnimationPlayer, $IActualAnimation } from "@package/dev/kosmx/playerAnim/api/layered";
import { $Ease, $Ease_ } from "@package/dev/kosmx/playerAnim/core/util";
export * as opennbs from "@package/dev/kosmx/playerAnim/core/data/opennbs";

declare module "@package/dev/kosmx/playerAnim/core/data" {
    /**
     * @deprecated
     */
    export class $AnimationFormat extends $Enum<$AnimationFormat> {
        static values(): $AnimationFormat[];
        static valueOf(name: string): $AnimationFormat;
        /**
         * @deprecated
         */
        getExtension(): string;
        /**
         * @deprecated
         */
        static byExtension(extension: string): $AnimationFormat;
        /**
         * @deprecated
         */
        static byFileName(fileName: string): $AnimationFormat;
        static JSON_MC_ANIM: $AnimationFormat;
        static SERVER: $AnimationFormat;
        static BINARY: $AnimationFormat;
        static QUARK: $AnimationFormat;
        static UNKNOWN: $AnimationFormat;
        static JSON_EMOTECRAFT: $AnimationFormat;
        get extension(): string;
    }
    /**
     * Values that may be interpreted as {@link $AnimationFormat}.
     */
    export type $AnimationFormat_ = "json_emotecraft" | "json_mc_anim" | "quark" | "binary" | "server" | "unknown";
    export class $KeyframeAnimation$StateCollection {
        isEnabled(): boolean;
        copy(): $KeyframeAnimation$StateCollection;
        setEnabled(enabled: boolean): void;
        fullyEnablePart(always: boolean): void;
        verifyAndLock(maxLength: number): void;
        isBendable(): boolean;
        isScalable(): boolean;
        bendDirection: $KeyframeAnimation$StateCollection$State;
        roll: $KeyframeAnimation$StateCollection$State;
        yaw: $KeyframeAnimation$StateCollection$State;
        scaleZ: $KeyframeAnimation$StateCollection$State;
        scaleX: $KeyframeAnimation$StateCollection$State;
        scaleY: $KeyframeAnimation$StateCollection$State;
        bend: $KeyframeAnimation$StateCollection$State;
        x: $KeyframeAnimation$StateCollection$State;
        y: $KeyframeAnimation$StateCollection$State;
        z: $KeyframeAnimation$StateCollection$State;
        pitch: $KeyframeAnimation$StateCollection$State;
        constructor(threshold: number);
        constructor(x: number, y: number, z: number, pitch: number, yaw: number, roll: number, threshold: number, bendable: boolean);
        constructor(stateCollection: $KeyframeAnimation$StateCollection);
        constructor(x: number, y: number, z: number, pitch: number, yaw: number, roll: number, scaleX: number, scaleY: number, scaleZ: number, translationThreshold: number, bendable: boolean, scalable: boolean);
        get bendable(): boolean;
        get scalable(): boolean;
    }
    export class $KeyframeAnimation$StateCollection$State {
        length(): number;
        replace(keyFrame: $KeyframeAnimation$KeyFrame, pos: number): void;
        isEnabled(): boolean;
        copy(): $KeyframeAnimation$StateCollection$State;
        addKeyFrame(tick: number, value: number, ease: $Ease_, easingArg: number): boolean;
        addKeyFrame(tick: number, value: number, ease: $Ease_, rotate: number, degrees: boolean): boolean;
        addKeyFrame(tick: number, value: number, ease: $Ease_, rotate: number, degrees: boolean, easingArg: number): boolean;
        addKeyFrame(tick: number, value: number, ease: $Ease_): boolean;
        setEnabled(newValue: boolean): void;
        getKeyFrames(): $List<$KeyframeAnimation$KeyFrame>;
        findAtTick(tick: number): number;
        replaceEase(pos: number, ease: $Ease_): void;
        lockAndVerify(maxLength: number): void;
        defaultValue: number;
        name: string;
        threshold: number;
        constructor(state: $KeyframeAnimation$StateCollection$State);
        get keyFrames(): $List<$KeyframeAnimation$KeyFrame>;
    }
    export class $KeyframeAnimation implements $IPlayable {
        getName(): string;
        get(): $UUID;
        isInfinite(): boolean;
        getLength(): number;
        copy(): $KeyframeAnimation;
        playAnimation(): $IActualAnimation<$KeyframeAnimationPlayer>;
        getBodyParts(): $Map<string, $KeyframeAnimation$StateCollection>;
        mutableCopy(): $KeyframeAnimation$AnimationBuilder;
        getUuid(): $UUID;
        getPart(partID: string): $KeyframeAnimation$StateCollection;
        isPlayingAt(tick: number): boolean;
        getPartOptional(id: string): ($KeyframeAnimation$StateCollection) | undefined;
        nsfw: boolean;
        extraData: $HashMap<string, $Object>;
        isUUIDGenerated: boolean;
        stopTick: number;
        returnToTick: number;
        isEasingBefore: boolean;
        beginTick: number;
        endTick: number;
        animationFormat: $AnimationFormat;
        static EMPTY_STATE: $KeyframeAnimation$StateCollection$State;
        get name(): string;
        get infinite(): boolean;
        get length(): number;
        get bodyParts(): $Map<string, $KeyframeAnimation$StateCollection>;
        get uuid(): $UUID;
    }
    export class $KeyframeAnimation$AnimationBuilder {
        setName(s: string): $KeyframeAnimation$AnimationBuilder;
        build(): $KeyframeAnimation;
        getOrCreatePart(name: string): $KeyframeAnimation$StateCollection;
        optimizeEmote(): $KeyframeAnimation$AnimationBuilder;
        getBodyParts(): $HashMap<string, $KeyframeAnimation$StateCollection>;
        setAuthor(s: string): $KeyframeAnimation$AnimationBuilder;
        setUuid(uuid: $UUID_): $KeyframeAnimation$AnimationBuilder;
        getOrCreateNewPart(name: string, x: number, y: number, z: number, pitch: number, yaw: number, roll: number, scaleX: number, scaleY: number, scaleZ: number, bendable: boolean, scalable: boolean): $KeyframeAnimation$StateCollection;
        getOrCreateNewPart(name: string, x: number, y: number, z: number, pitch: number, yaw: number, roll: number, bendable: boolean): $KeyframeAnimation$StateCollection;
        fullyEnableParts(): $KeyframeAnimation$AnimationBuilder;
        setDescription(s: string): $KeyframeAnimation$AnimationBuilder;
        getPart(name: string): $KeyframeAnimation$StateCollection;
        song: $NBS;
        static staticThreshold: number;
        torso: $KeyframeAnimation$StateCollection;
        nsfw: boolean;
        isLooped: boolean;
        extraData: $HashMap<string, $Object>;
        rightArm: $KeyframeAnimation$StateCollection;
        author: string;
        description: string;
        leftLeg: $KeyframeAnimation$StateCollection;
        stopTick: number;
        beginTick: number;
        endTick: number;
        body: $KeyframeAnimation$StateCollection;
        uuid: $UUID;
        head: $KeyframeAnimation$StateCollection;
        leftItem: $KeyframeAnimation$StateCollection;
        rightLeg: $KeyframeAnimation$StateCollection;
        leftArm: $KeyframeAnimation$StateCollection;
        name: string;
        isEasingBefore: boolean;
        rightItem: $KeyframeAnimation$StateCollection;
        returnTick: number;
        iconData: $ByteBuffer;
        constructor(validationThreshold: number, emoteFormat: $AnimationFormat_);
        constructor(source: $AnimationFormat_);
        get bodyParts(): $HashMap<string, $KeyframeAnimation$StateCollection>;
    }
    export class $KeyframeAnimation$KeyFrame {
        ease: $Ease;
        easingArg: number;
        tick: number;
        value: number;
        constructor(tick: number, value: number);
        constructor(tick: number, value: number, ease: $Ease_);
        constructor(tick: number, value: number, ease: $Ease_, easingArg: number);
    }
}
