import { $Level_, $Level } from "@package/net/minecraft/world/level";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $Event } from "@package/net/neoforged/bus/api";
import { $BlockState, $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $ResourceManager } from "@package/net/minecraft/server/packs/resources";
import { $FallingBlockEntity } from "@package/net/minecraft/world/entity/item";
import { $LogicalSide, $LogicalSide_ } from "@package/net/neoforged/fml";

declare module "@package/dev/shadowsoffire/placebo/events" {
    export class $ResourceReloadEvent extends $Event {
        getSide(): $LogicalSide;
        getResourceManager(): $ResourceManager;
        constructor(arg0: $ResourceManager, arg1: $LogicalSide_);
        get side(): $LogicalSide;
        get resourceManager(): $ResourceManager;
    }
    export class $AnvilLandEvent extends $Event {
        getLevel(): $Level;
        getNewState(): $BlockState;
        getOldState(): $BlockState;
        getPos(): $BlockPos;
        getEntity(): $FallingBlockEntity;
        constructor(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: $BlockState_, arg4: $FallingBlockEntity);
        get level(): $Level;
        get newState(): $BlockState;
        get oldState(): $BlockState;
        get pos(): $BlockPos;
        get entity(): $FallingBlockEntity;
    }
}
