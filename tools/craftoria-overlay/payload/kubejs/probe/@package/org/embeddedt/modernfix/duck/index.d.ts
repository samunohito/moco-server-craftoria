import { $ReentrantLock } from "@package/java/util/concurrent/locks";
import { $BakedModel, $ModelResourceLocation, $UnbakedModel, $ModelResourceLocation_ } from "@package/net/minecraft/client/resources/model";
export * as suspend_integrated_server_during_load from "@package/org/embeddedt/modernfix/duck/suspend_integrated_server_during_load";

declare module "@package/org/embeddedt/modernfix/duck" {
    export class $IProfilingServerFunctionManager {
    }
    export interface $IProfilingServerFunctionManager {
        mfix$getProfilingResults(): string;
    }
    /**
     * Values that may be interpreted as {@link $IProfilingServerFunctionManager}.
     */
    export type $IProfilingServerFunctionManager_ = (() => string);
    export class $IBlockStateModelLoader {
    }
    export interface $IBlockStateModelLoader {
        loadSpecificBlock(arg0: $ModelResourceLocation_): void;
    }
    /**
     * Values that may be interpreted as {@link $IBlockStateModelLoader}.
     */
    export type $IBlockStateModelLoader_ = ((arg0: $ModelResourceLocation) => void);
    export class $IExtendedModelManager {
    }
    export interface $IExtendedModelManager {
        mfix$tick(): void;
    }
    /**
     * Values that may be interpreted as {@link $IExtendedModelManager}.
     */
    export type $IExtendedModelManager_ = (() => void);
    export class $IModelHoldingBlockState {
    }
    export interface $IModelHoldingBlockState {
        mfix$getModel(): $BakedModel;
        mfix$setModel(arg0: $BakedModel): void;
    }
    export class $IExtendedModelBakery {
    }
    export interface $IExtendedModelBakery {
        mfix$tick(): void;
        mfix$getMissingModel(): $UnbakedModel;
        mfix$loadUnbakedModelDynamic(arg0: $ModelResourceLocation_): $UnbakedModel;
        mfix$finishLoading(): void;
        mfix$getLock(): $ReentrantLock;
    }
    export class $IBlockState {
    }
    export interface $IBlockState {
        clearCache(): void;
        isCacheInvalid(): boolean;
        get cacheInvalid(): boolean;
    }
    export class $ITimeTrackingServer {
    }
    export interface $ITimeTrackingServer {
        mfix$getLastTickStartTime(): number;
    }
    /**
     * Values that may be interpreted as {@link $ITimeTrackingServer}.
     */
    export type $ITimeTrackingServer_ = (() => number);
}
