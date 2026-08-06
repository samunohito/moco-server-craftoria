import { $ESBiomeSource } from "@package/cn/leolezury/eternalstarlight/common/world/gen/biomesource";

declare module "@package/cn/leolezury/eternalstarlight/common/world/gen/chunkgenerator" {
    export class $StarlightSurfaceSystem {
    }
    export interface $StarlightSurfaceSystem {
        getStarlightBiomeSource(): $ESBiomeSource;
        setStarlightBiomeSource(arg0: $ESBiomeSource): void;
    }
}
