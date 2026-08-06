import { $Function, $Function_ } from "@package/java/util/function";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $IModelBuilder } from "@package/net/neoforged/neoforge/client/model";
import { $IGeometryBakingContext } from "@package/net/neoforged/neoforge/client/model/geometry";
import { $Material, $ModelBaker, $ModelState } from "@package/net/minecraft/client/resources/model";
import { $TextureAtlasSprite } from "@package/net/minecraft/client/renderer/texture";

declare module "@package/commoble/morered/mixin" {
    export class $MultiPlayerGameModeAccess {
    }
    export interface $MultiPlayerGameModeAccess {
        setDestroyProgress(arg0: number): void;
        setIsDestroying(arg0: boolean): void;
        setDestroyTicks(arg0: number): void;
        getDestroyBlockPos(): $BlockPos;
        setDestroyDelay(arg0: number): void;
        callSameDestroyTarget(arg0: $BlockPos_): boolean;
        set destroyProgress(value: number);
        set isDestroying(value: boolean);
        set destroyTicks(value: number);
        get destroyBlockPos(): $BlockPos;
        set destroyDelay(value: number);
    }
    export class $ClientElementsModelAccess {
    }
    export interface $ClientElementsModelAccess {
        callAddQuads(arg0: $IGeometryBakingContext, arg1: $IModelBuilder<never>, arg2: $ModelBaker, arg3: $Function_<$Material, $TextureAtlasSprite>, arg4: $ModelState): void;
    }
    /**
     * Values that may be interpreted as {@link $ClientElementsModelAccess}.
     */
    export type $ClientElementsModelAccess_ = ((arg0: $IGeometryBakingContext, arg1: $IModelBuilder<never>, arg2: $ModelBaker, arg3: $Function<$Material, $TextureAtlasSprite>, arg4: $ModelState) => void);
}
