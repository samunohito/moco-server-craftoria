import { $DataHolder } from "@package/dev/tr7zw/notenoughanimations/versionless/animations";
import { $Supplier_ } from "@package/java/util/function";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Pose, $Pose_ } from "@package/net/minecraft/world/entity";

declare module "@package/dev/tr7zw/notenoughanimations/access" {
    export class $PlayerData {
    }
    export interface $PlayerData {
        getData<T>(arg0: $DataHolder<T>, arg1: $Supplier_<T>): T;
        setItemSwapAnimationTimer(arg0: number): void;
        getLastAnimationSwapTick(): number;
        setRotateBodyToHead(arg0: boolean): void;
        setLastAnimationSwapTick(arg0: number): void;
        getItemSwapAnimationTimer(): number;
        isUpdated(arg0: number): number;
        setUpdated(arg0: number): void;
        isRotateBodyToHead(): boolean;
        setSideSword(arg0: $ItemStack_): void;
        getPoseOverwrite(): $Pose;
        setPoseOverwrite(arg0: $Pose_): void;
        getLastHeldItems(): $ItemStack[];
        getLastRotations(): number[];
        getSideSword(): $ItemStack;
        setDisableBodyRotation(arg0: boolean): void;
        isDisableBodyRotation(): boolean;
        get lastHeldItems(): $ItemStack[];
        get lastRotations(): number[];
    }
}
