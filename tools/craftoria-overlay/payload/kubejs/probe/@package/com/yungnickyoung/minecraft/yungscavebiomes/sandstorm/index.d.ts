import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $SavedData, $SavedData$Factory } from "@package/net/minecraft/world/level/saveddata";

declare module "@package/com/yungnickyoung/minecraft/yungscavebiomes/sandstorm" {
    export class $ISandstormServerDataProvider {
    }
    export interface $ISandstormServerDataProvider {
        getSandstormServerData(): $SandstormServerData;
        get sandstormServerData(): $SandstormServerData;
    }
    /**
     * Values that may be interpreted as {@link $ISandstormServerDataProvider}.
     */
    export type $ISandstormServerDataProvider_ = (() => $SandstormServerData);
    export class $SandstormServerData extends $SavedData {
        static factory(arg0: $ServerLevel): $SavedData$Factory<$SandstormServerData>;
        start(): void;
        stop(): void;
        getSeed(): number;
        tick(): void;
        getTotalSandstormDurationTicks(): number;
        isSandstormActive(): boolean;
        getServerLevel(): $ServerLevel;
        getCurrSandstormTicks(): number;
        constructor(arg0: $ServerLevel, arg1: $CompoundTag_);
        constructor(arg0: $ServerLevel);
        get seed(): number;
        get totalSandstormDurationTicks(): number;
        get sandstormActive(): boolean;
        get serverLevel(): $ServerLevel;
        get currSandstormTicks(): number;
    }
}
