import { $FishingBobEntity } from "@package/com/wdiscute/starcatcher/bobberentity";
import { $EntityRendererProvider$Context } from "@package/net/minecraft/client/renderer/entity";
import { $MultiBufferSource_ } from "@package/net/minecraft/client/renderer";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $ModelLayerLocation } from "@package/net/minecraft/client/model/geom";
import { $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $Player } from "@package/net/minecraft/world/entity/player";

declare module "@package/com/wdiscute/starcatcher/registry/tackleskin" {
    export class $AbstractTackleSkin {
        getTexture(): $ResourceLocation;
        onRetrieve(arg0: $Player): void;
        onMissed(arg0: $Player): void;
        onCast(arg0: $Player): void;
        onSuccessfulMinigame(arg0: $Player): void;
        skipMissSound(): boolean;
        onFailedMinigame(arg0: $Player): void;
        getLayerLocation(): $ModelLayerLocation;
        renderTackle(arg0: $EntityRendererProvider$Context, arg1: $FishingBobEntity, arg2: number, arg3: number, arg4: $PoseStack, arg5: $MultiBufferSource_, arg6: number): void;
        skipSuccessSound(): boolean;
        constructor();
        get texture(): $ResourceLocation;
        get layerLocation(): $ModelLayerLocation;
    }
}
