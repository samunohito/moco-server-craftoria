import { $ItemRenderer } from "@package/net/minecraft/client/renderer/entity";
import { $Event, $ICancellableEvent } from "@package/net/neoforged/bus/api";
import { $MultiBufferSource_, $MultiBufferSource } from "@package/net/minecraft/client/renderer";
import { $ItemDisplayContext, $ItemStack_, $ItemDisplayContext_, $ItemStack } from "@package/net/minecraft/world/item";
import { $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $LivingEntity } from "@package/net/minecraft/world/entity";

declare module "@package/it/hurts/octostudios/reliquified_twilight_forest/client/event" {
    export class $RenderItemInHandEvent extends $Event implements $ICancellableEvent {
        getEntity(): $LivingEntity;
        getItemRenderer(): $ItemRenderer;
        getItemStack(): $ItemStack;
        setItemStack(arg0: $ItemStack_): void;
        getMultiBufferSource(): $MultiBufferSource;
        isLeftHand(): boolean;
        getPoseStack(): $PoseStack;
        getPackedLight(): number;
        getPackedOverlay(): number;
        getDisplayContext(): $ItemDisplayContext;
        setMultiBufferSource(arg0: $MultiBufferSource_): void;
        setPackedOverlay(arg0: number): void;
        setDisplayContext(arg0: $ItemDisplayContext_): void;
        setPoseStack(arg0: $PoseStack): void;
        setPackedLight(arg0: number): void;
        setLeftHand(arg0: boolean): void;
        isCanceled(): boolean;
        setCanceled(arg0: boolean): void;
        constructor(arg0: $ItemRenderer, arg1: $LivingEntity, arg2: $ItemStack_, arg3: $ItemDisplayContext_, arg4: boolean, arg5: $PoseStack, arg6: $MultiBufferSource_, arg7: number, arg8: number);
        get entity(): $LivingEntity;
        get itemRenderer(): $ItemRenderer;
    }
}
