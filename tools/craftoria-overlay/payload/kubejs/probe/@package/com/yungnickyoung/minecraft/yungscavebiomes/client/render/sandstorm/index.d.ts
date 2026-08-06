import { $ClientLevel } from "@package/net/minecraft/client/multiplayer";
import { $BlockPos$MutableBlockPos } from "@package/net/minecraft/core";
import { $Vector3f } from "@package/org/joml";
import { $RandomSource } from "@package/net/minecraft/util";

declare module "@package/com/yungnickyoung/minecraft/yungscavebiomes/client/render/sandstorm" {
    export class $ISandstormClientDataProvider {
    }
    export interface $ISandstormClientDataProvider {
        getSandstormClientData(): $SandstormClientData;
        get sandstormClientData(): $SandstormClientData;
    }
    /**
     * Values that may be interpreted as {@link $ISandstormClientDataProvider}.
     */
    export type $ISandstormClientDataProvider_ = (() => $SandstormClientData);
    export class $SandstormClientData {
        tick(): void;
        getSandstormParticleSpeedVector(arg0: number, arg1: number, arg2: number, arg3: $Vector3f): $Vector3f;
        addExtraSandstormParticles(arg0: $ClientLevel, arg1: number, arg2: number, arg3: number): void;
        addSandstormParticles(arg0: $ClientLevel, arg1: number, arg2: number, arg3: number, arg4: number, arg5: $RandomSource, arg6: $BlockPos$MutableBlockPos): void;
        isSandstormActive(): boolean;
        setSandstormSeed(arg0: number): void;
        setSandstormTime(arg0: number): void;
        setSandstormActive(arg0: boolean): void;
        setTotalSandstormDuration(arg0: number): void;
        constructor();
        set sandstormSeed(value: number);
        set sandstormTime(value: number);
        set totalSandstormDuration(value: number);
    }
}
