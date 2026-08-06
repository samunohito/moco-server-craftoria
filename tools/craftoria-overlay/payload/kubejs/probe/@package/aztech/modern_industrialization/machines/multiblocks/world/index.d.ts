import { $BlockPos_ } from "@package/net/minecraft/core";

declare module "@package/aztech/modern_industrialization/machines/multiblocks/world" {
    export class $ChunkEventListener {
    }
    export interface $ChunkEventListener {
        onLoad(): void;
        onBlockUpdate(arg0: $BlockPos_): void;
        onUnload(): void;
    }
}
