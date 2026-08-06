import { $SpriteShiftEntry } from "@package/net/createmod/catnip/render";
import { $ResourceLocation } from "@package/net/minecraft/resources";

declare module "@package/com/simibubi/create/foundation/block/connected" {
    export class $CTSpriteShiftEntry extends $SpriteShiftEntry {
        getType(): $CTType;
        getTargetU(arg0: number, arg1: number): number;
        getTargetV(arg0: number, arg1: number): number;
        constructor(arg0: $CTType);
        get type(): $CTType;
    }
    export class $CTType {
    }
    export interface $CTType {
        getId(): $ResourceLocation;
        getContextRequirement(): $ConnectedTextureBehaviour$ContextRequirement;
        getSheetSize(): number;
        getTextureIndex(arg0: $ConnectedTextureBehaviour$CTContext): number;
        get id(): $ResourceLocation;
        get contextRequirement(): $ConnectedTextureBehaviour$ContextRequirement;
        get sheetSize(): number;
    }
    export class $ConnectedTextureBehaviour$ContextRequirement$Builder {
        left(): $ConnectedTextureBehaviour$ContextRequirement$Builder;
        right(): $ConnectedTextureBehaviour$ContextRequirement$Builder;
        build(): $ConnectedTextureBehaviour$ContextRequirement;
        all(): $ConnectedTextureBehaviour$ContextRequirement$Builder;
        up(): $ConnectedTextureBehaviour$ContextRequirement$Builder;
        down(): $ConnectedTextureBehaviour$ContextRequirement$Builder;
        corners(): $ConnectedTextureBehaviour$ContextRequirement$Builder;
        horizontal(): $ConnectedTextureBehaviour$ContextRequirement$Builder;
        topLeft(): $ConnectedTextureBehaviour$ContextRequirement$Builder;
        bottomLeft(): $ConnectedTextureBehaviour$ContextRequirement$Builder;
        topRight(): $ConnectedTextureBehaviour$ContextRequirement$Builder;
        vertical(): $ConnectedTextureBehaviour$ContextRequirement$Builder;
        bottomRight(): $ConnectedTextureBehaviour$ContextRequirement$Builder;
        axisAligned(): $ConnectedTextureBehaviour$ContextRequirement$Builder;
        constructor();
    }
    export class $ConnectedTextureBehaviour$CTContext {
        bottomLeft: boolean;
        left: boolean;
        bottomRight: boolean;
        topLeft: boolean;
        topRight: boolean;
        up: boolean;
        right: boolean;
        static EMPTY: $ConnectedTextureBehaviour$CTContext;
        down: boolean;
        constructor();
    }
    export class $ConnectedTextureBehaviour$ContextRequirement {
        static builder(): $ConnectedTextureBehaviour$ContextRequirement$Builder;
        bottomLeft: boolean;
        left: boolean;
        bottomRight: boolean;
        topLeft: boolean;
        topRight: boolean;
        up: boolean;
        right: boolean;
        down: boolean;
        constructor(arg0: boolean, arg1: boolean, arg2: boolean, arg3: boolean, arg4: boolean, arg5: boolean, arg6: boolean, arg7: boolean);
    }
}
