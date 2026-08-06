import { $IStorageProvider_, $MEStorage } from "@package/appeng/api/storage";
import { $IGridNode, $IGridService } from "@package/appeng/api/networking";
import { $KeyCounter } from "@package/appeng/api/stacks";

declare module "@package/appeng/api/networking/storage" {
    export class $IStorageService {
    }
    export interface $IStorageService extends $IGridService {
        invalidateCache(): void;
        getInventory(): $MEStorage;
        refreshNodeStorageProvider(arg0: $IGridNode): void;
        getCachedInventory(): $KeyCounter;
        removeGlobalStorageProvider(arg0: $IStorageProvider_): void;
        refreshGlobalStorageProvider(arg0: $IStorageProvider_): void;
        addGlobalStorageProvider(arg0: $IStorageProvider_): void;
        get inventory(): $MEStorage;
        get cachedInventory(): $KeyCounter;
    }
}
