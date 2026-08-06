import { $Function_ } from "@package/java/util/function";
import { $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $Material, $BakedModel, $ModelState, $ModelBaker } from "@package/net/minecraft/client/resources/model";
import { $TextureAtlasSprite } from "@package/net/minecraft/client/renderer/texture";
import { $List_, $Collection } from "@package/java/util";

declare module "@package/org/cyclops/integrateddynamics/api/client/model" {
    export class $IVariableModelProvider<B extends $IVariableModelProvider$BakedModelProvider> {
    }
    export interface $IVariableModelProvider<B extends $IVariableModelProvider$BakedModelProvider> {
        getDependencies(): $Collection<$ResourceLocation>;
        loadModels(arg0: $List_<$ResourceLocation_>): void;
        bakeOverlayModels(arg0: $ModelBaker, arg1: $Function_<$Material, $TextureAtlasSprite>, arg2: $ModelState, arg3: $ResourceLocation_): B;
        get dependencies(): $Collection<$ResourceLocation>;
    }
    export class $IVariableModelBaked {
    }
    export interface $IVariableModelBaked extends $BakedModel {
        getSubModels<B extends $IVariableModelProvider$BakedModelProvider>(arg0: $IVariableModelProvider<B>): B;
        setSubModels<B extends $IVariableModelProvider$BakedModelProvider>(arg0: $IVariableModelProvider<B>, arg1: B): void;
    }
    export class $IVariableModelProvider$BakedModelProvider {
    }
    export interface $IVariableModelProvider$BakedModelProvider {
    }
}
