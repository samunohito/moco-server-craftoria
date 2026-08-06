import { $Supplier } from "@package/java/util/function";
import { $UUID } from "@package/java/util";
import { $Enum } from "@package/java/lang";
import { $AnimationStack, $IActualAnimation } from "@package/dev/kosmx/playerAnim/api/layered";
export * as layered from "@package/dev/kosmx/playerAnim/api/layered";
export * as firstPerson from "@package/dev/kosmx/playerAnim/api/firstPerson";

declare module "@package/dev/kosmx/playerAnim/api" {
    export class $IPlayer {
    }
    export interface $IPlayer {
        getAnimationStack(): $AnimationStack;
        get animationStack(): $AnimationStack;
    }
    /**
     * Values that may be interpreted as {@link $IPlayer}.
     */
    export type $IPlayer_ = (() => $AnimationStack);
    export class $IPlayable {
    }
    export interface $IPlayable extends $Supplier<$UUID> {
        getName(): string;
        playAnimation(): $IActualAnimation<never>;
        get name(): string;
    }
    export class $TransformType extends $Enum<$TransformType> {
        static values(): $TransformType[];
        static valueOf(name: string): $TransformType;
        static ROTATION: $TransformType;
        static POSITION: $TransformType;
        static BEND: $TransformType;
        static SCALE: $TransformType;
    }
    /**
     * Values that may be interpreted as {@link $TransformType}.
     */
    export type $TransformType_ = "position" | "rotation" | "bend" | "scale";
}
