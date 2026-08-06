import { $ClientChunkCache$Storage } from "@package/net/minecraft/client/multiplayer";

declare module "@package/com/hollingsworth/arsnouveau/common/camera" {
    export class $ANIChunkStorageProvider {
    }
    export interface $ANIChunkStorageProvider {
        ANnewStorage(arg0: number): $ClientChunkCache$Storage;
    }
}
