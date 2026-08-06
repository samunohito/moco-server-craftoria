import { $AnimationDefinition_ } from "@package/net/minecraft/client/animation";
import { $ModelPart } from "@package/net/minecraft/client/model/geom";
import { $AnimationState } from "@package/net/minecraft/world/entity";
import { $Vector3f } from "@package/org/joml";

declare module "@package/cn/leolezury/eternalstarlight/common/client/model/animation" {
    export class $AnimatedModel {
        static ANIMATION_VECTOR_CACHE: $Vector3f;
    }
    export interface $AnimatedModel {
        root(): $ModelPart;
        getAnyDescendantWithName(name: string): ($ModelPart) | undefined;
        animateWalk(definition: $AnimationDefinition_, swing: number, swingAmount: number, speed: number, scale: number): void;
        animate(state: $AnimationState, definition: $AnimationDefinition_, tickCount: number, speed: number, scale: number): void;
        animate(state: $AnimationState, definition: $AnimationDefinition_, tickCount: number): void;
    }
    /**
     * Values that may be interpreted as {@link $AnimatedModel}.
     */
    export type $AnimatedModel_ = (() => $ModelPart);
}
