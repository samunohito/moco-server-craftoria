import { $PlayerModel } from "@package/net/minecraft/client/model";
import { $LivingEntityRenderer, $EntityRendererProvider$Context } from "@package/net/minecraft/client/renderer/entity";
import { $MultiBufferSource_ } from "@package/net/minecraft/client/renderer";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $AbstractClientPlayer } from "@package/net/minecraft/client/player";
import { $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $CallbackInfo } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $RenderLayer } from "@package/net/minecraft/client/renderer/entity/layers";
import { $List } from "@package/java/util";
import { $ETFPlayerSkinHolder, $ETFPlayerTexture } from "@package/traben/entity_texture_features/features/player";
import { $Vec3 } from "@package/net/minecraft/world/phys";

declare module "@package/net/minecraft/client/renderer/entity/player" {
    export class $PlayerRenderer extends $LivingEntityRenderer<$AbstractClientPlayer, $PlayerModel<$AbstractClientPlayer>> implements $ETFPlayerSkinHolder {
        scale(livingEntity: $AbstractClientPlayer, poseStack: $PoseStack, partialTickTime: number): void;
        renderRightHand(poseStack: $PoseStack, buffer: $MultiBufferSource_, combinedLight: number, player: $AbstractClientPlayer): void;
        setModelProperties(clientPlayer: $AbstractClientPlayer): void;
        renderLeftHand(poseStack: $PoseStack, buffer: $MultiBufferSource_, combinedLight: number, player: $AbstractClientPlayer): void;
        render(entity: $AbstractClientPlayer, entityYaw: number, partialTicks: number, poseStack: $PoseStack, buffer: $MultiBufferSource_, packedLight: number): void;
        etf$getETFPlayerTexture(): $ETFPlayerTexture;
        handler$cjj000$notenoughanimations$onCreate(info: $CallbackInfo): void;
        getRenderOffset(entity: $AbstractClientPlayer, partialTicks: number): $Vec3;
        handler$zbe000$doapi$onConstruct(ctx: $EntityRendererProvider$Context, bl: boolean, cbi: $CallbackInfo): void;
        handler$jgj001$waveycapes$onCreate(info: $CallbackInfo): void;
        /**
         * Returns the location of an entity's texture.
         */
        getTextureLocation(entity: $AbstractClientPlayer): $ResourceLocation;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        layers: $List<$RenderLayer<$AbstractClientPlayer, $PlayerModel<$AbstractClientPlayer>>>;
        model: $PlayerModel<$AbstractClientPlayer>;
        constructor(context: $EntityRendererProvider$Context, useSlimModel: boolean);
        set modelProperties(value: $AbstractClientPlayer);
    }
}
