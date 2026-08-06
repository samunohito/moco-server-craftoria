import { $CapePoint, $Vector3 } from "@package/dev/tr7zw/waveycapes/versionless/util";
import { $List } from "@package/java/util";

declare module "@package/dev/tr7zw/waveycapes/versionless/sim" {
    export class $BasicSimulation {
    }
    export interface $BasicSimulation {
        empty(): boolean;
        init(arg0: number): boolean;
        setGravityDirection(arg0: $Vector3): void;
        simulate(): void;
        setGravity(arg0: number): void;
        isSneaking(): boolean;
        getGravity(): number;
        applyMovement(arg0: $Vector3): void;
        setSneaking(arg0: boolean): void;
        getPoints(): $List<$CapePoint>;
        set gravityDirection(value: $Vector3);
        get points(): $List<$CapePoint>;
    }
}
