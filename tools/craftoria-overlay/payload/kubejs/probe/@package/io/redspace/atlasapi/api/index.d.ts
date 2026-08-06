import { $ClientLevel } from "@package/net/minecraft/client/multiplayer";
import { $ItemStack_ } from "@package/net/minecraft/world/item";
import { RegistryTypes, RegistryMarked } from "@special/types";
import { $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $LivingEntity } from "@package/net/minecraft/world/entity";
import { $TextureAtlasSprite } from "@package/net/minecraft/client/renderer/texture";
import { $List } from "@package/java/util";
import { $BakingPreparations } from "@package/io/redspace/atlasapi/api/data";
import { $SpriteSource } from "@package/net/minecraft/client/renderer/texture/atlas";
export * as data from "@package/io/redspace/atlasapi/api/data";

declare module "@package/io/redspace/atlasapi/api" {
    export class $AssetHandler {
        getSprite(arg0: $ResourceLocation_): $TextureAtlasSprite;
        modelId(arg0: $ItemStack_, arg1: $ClientLevel | null, arg2: $LivingEntity | null, arg3: number): number;
        getAtlasLocation(): $ResourceLocation;
        makeBakedModelPreparations(arg0: $ItemStack_, arg1: $ClientLevel | null, arg2: $LivingEntity | null, arg3: number): $BakingPreparations;
        buildSpriteSources(): $List<$SpriteSource>;
        constructor();
        get atlasLocation(): $ResourceLocation;
    }
    /**
     * Values that may be interpreted as {@link $AssetHandler}.
     */
    export type $AssetHandler_ = RegistryTypes.AtlasApiAssetHandler;
    export interface $AssetHandler extends RegistryMarked<RegistryTypes.AtlasApiAssetHandlerTag, RegistryTypes.AtlasApiAssetHandler> {}
}
