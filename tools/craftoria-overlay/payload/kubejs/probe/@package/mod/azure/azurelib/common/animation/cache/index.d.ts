import { $AzBakedModel, $AzBoneSnapshot } from "@package/mod/azure/azurelib/common/model";
import { $AzAnimationContext } from "@package/mod/azure/azurelib/common/animation";
import { $Map } from "@package/java/util";

declare module "@package/mod/azure/azurelib/common/animation/cache" {
    export class $AzBoneCache {
        update(arg0: $AzAnimationContext<never>): void;
        isEmpty(): boolean;
        getBakedModel(): $AzBakedModel;
        getBoneSnapshotsByName(): $Map<string, $AzBoneSnapshot>;
        setActiveModel(arg0: $AzBakedModel): boolean;
        setBakedModel(arg0: $AzBakedModel): void;
        getTemplateModel(): $AzBakedModel;
        constructor();
        get empty(): boolean;
        get boneSnapshotsByName(): $Map<string, $AzBoneSnapshot>;
        set activeModel(value: $AzBakedModel);
        get templateModel(): $AzBakedModel;
    }
}
