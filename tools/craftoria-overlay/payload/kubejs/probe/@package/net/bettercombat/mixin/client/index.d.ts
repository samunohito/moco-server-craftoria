import { $EntityRenderDispatcher } from "@package/net/minecraft/client/renderer/entity";

declare module "@package/net/bettercombat/mixin/client" {
    export class $MinecraftClientAccessor {
    }
    export interface $MinecraftClientAccessor {
        setAttackCooldown(arg0: number): void;
        getMissTime(): number;
        getEntityRenderDispatcher(): $EntityRenderDispatcher;
        set attackCooldown(value: number);
        get missTime(): number;
        get entityRenderDispatcher(): $EntityRenderDispatcher;
    }
}
