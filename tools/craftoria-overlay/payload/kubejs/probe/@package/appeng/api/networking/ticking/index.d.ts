import { $IGridNode, $IGridService } from "@package/appeng/api/networking";

declare module "@package/appeng/api/networking/ticking" {
    export class $ITickManager {
    }
    export interface $ITickManager extends $IGridService {
        sleepDevice(arg0: $IGridNode): boolean;
        alertDevice(arg0: $IGridNode): boolean;
        wakeDevice(arg0: $IGridNode): boolean;
    }
}
