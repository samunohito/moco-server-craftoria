import { $Predicate } from "@package/java/util/function";
import { $Component } from "@package/net/minecraft/network/chat";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $IStageType } from "@package/tv/soaryn/xycraft/core/content/stages";
export * as capabilities from "@package/tv/soaryn/xycraft/api/content/capabilities";

declare module "@package/tv/soaryn/xycraft/api/content" {
    export class $IStage {
    }
    export interface $IStage extends $Predicate<$Player> {
        getType(): $IStageType<never>;
        lockIcon(): $ResourceLocation;
        markCompleted(arg0: $Player, arg1: boolean): void;
        presentedLabel(): $Component;
        unlockedIcon(): $ResourceLocation;
        get type(): $IStageType<never>;
    }
}
