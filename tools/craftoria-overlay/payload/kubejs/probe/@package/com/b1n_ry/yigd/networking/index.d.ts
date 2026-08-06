import { $Level } from "@package/net/minecraft/world/level";
import { $HolderLookup$Provider, $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $GraveStatus, $GraveStatus_ } from "@package/com/b1n_ry/yigd/data";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Component, $Component_ } from "@package/net/minecraft/network/chat";
import { $ResourceKey_, $ResourceKey } from "@package/net/minecraft/resources";
import { $Record } from "@package/java/lang";
import { $UUID_, $UUID } from "@package/java/util";

declare module "@package/com/b1n_ry/yigd/networking" {
    export class $LightGraveData extends $Record {
        id(): $UUID;
        status(): $GraveStatus;
        pos(): $BlockPos;
        deathMessage(): $Component;
        registryKey(): $ResourceKey<$Level>;
        static fromNbt(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): $LightGraveData;
        toNbt(arg0: $HolderLookup$Provider): $CompoundTag;
        xpPoints(): number;
        itemCount(): number;
        constructor(itemCount: number, pos: $BlockPos_, xpPoints: number, registryKey: $ResourceKey_<$Level>, deathMessage: $Component_, id: $UUID_, status: $GraveStatus_);
    }
    /**
     * Values that may be interpreted as {@link $LightGraveData}.
     */
    export type $LightGraveData_ = { deathMessage?: $Component_, pos?: $BlockPos_, status?: $GraveStatus_, registryKey?: $ResourceKey_<$Level>, id?: $UUID_, itemCount?: number, xpPoints?: number,  } | [deathMessage?: $Component_, pos?: $BlockPos_, status?: $GraveStatus_, registryKey?: $ResourceKey_<$Level>, id?: $UUID_, itemCount?: number, xpPoints?: number, ];
}
