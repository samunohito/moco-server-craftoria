import { $ExtraData } from "@package/io/github/mortuusars/exposure/util";
import { $CaptureParameters, $CaptureParameters_ } from "@package/io/github/mortuusars/exposure/world/camera/capture";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $Event } from "@package/net/neoforged/bus/api";
import { $ItemStack, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $Frame_, $Frame } from "@package/io/github/mortuusars/exposure/world/camera/frame";
import { $CameraHolder } from "@package/io/github/mortuusars/exposure/world/entity";
import { $LivingEntity, $Entity } from "@package/net/minecraft/world/entity";
import { $List, $List_ } from "@package/java/util";

declare module "@package/io/github/mortuusars/exposure/neoforge/api/event" {
    export class $FrameAddedEvent extends $Event {
        getEntitiesInFrame(): $List<$LivingEntity>;
        getCameraHolder(): $CameraHolder;
        getCameraHolderEntity(): $Entity;
        getPositionsInFrame(): $List<$BlockPos>;
        getCamera(): $ItemStack;
        getFrame(): $Frame;
        constructor(cameraHolder: $CameraHolder, camera: $ItemStack_, frame: $Frame_, positionsInFrame: $List_<$BlockPos_>, entitiesInFrame: $List_<$LivingEntity>);
        get entitiesInFrame(): $List<$LivingEntity>;
        get cameraHolder(): $CameraHolder;
        get cameraHolderEntity(): $Entity;
        get positionsInFrame(): $List<$BlockPos>;
        get camera(): $ItemStack;
        get frame(): $Frame;
    }
    export class $ModifyFrameExtraDataEvent extends $Event {
        getData(): $ExtraData;
        getEntitiesInFrame(): $List<$LivingEntity>;
        getCameraHolder(): $CameraHolder;
        getCameraHolderEntity(): $Entity;
        getCaptureProperties(): $CaptureParameters;
        getPositionsInFrame(): $List<$BlockPos>;
        getCamera(): $ItemStack;
        constructor(cameraHolder: $CameraHolder, stack: $ItemStack_, captureParameters: $CaptureParameters_, positionsInFrame: $List_<$BlockPos_>, entitiesInFrame: $List_<$LivingEntity>, data: $ExtraData);
        get data(): $ExtraData;
        get entitiesInFrame(): $List<$LivingEntity>;
        get cameraHolder(): $CameraHolder;
        get cameraHolderEntity(): $Entity;
        get captureProperties(): $CaptureParameters;
        get positionsInFrame(): $List<$BlockPos>;
        get camera(): $ItemStack;
    }
    export class $ModifyEntityInFrameDataEvent extends $Event {
        getData(): $ExtraData;
        getEntityInFrame(): $LivingEntity;
        getCameraHolder(): $CameraHolder;
        getCameraHolderEntity(): $Entity;
        getCamera(): $ItemStack;
        constructor(cameraHolder: $CameraHolder, camera: $ItemStack_, entityInFrame: $LivingEntity, data: $ExtraData);
        get data(): $ExtraData;
        get entityInFrame(): $LivingEntity;
        get cameraHolder(): $CameraHolder;
        get cameraHolderEntity(): $Entity;
        get camera(): $ItemStack;
    }
}
