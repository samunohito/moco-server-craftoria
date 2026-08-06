import { $ParticlePlacement_, $TrailAppearance } from "@package/net/bettercombat/api/fx";
import { $List_ } from "@package/java/util";
import { $AnimatedHand_ } from "@package/net/bettercombat/logic";

declare module "@package/net/bettercombat/client/animation" {
    export class $PlayerAttackAnimatable {
    }
    export interface $PlayerAttackAnimatable {
        updateAnimationsOnTick(): void;
        stopAttackAnimation(arg0: number): void;
        playAttackAnimation(arg0: string, arg1: $AnimatedHand_, arg2: number, arg3: number): void;
        playAttackParticles(arg0: boolean, arg1: number, arg2: number, arg3: $List_<$ParticlePlacement_>, arg4: $TrailAppearance): void;
    }
}
