import { $Level_ } from "@package/net/minecraft/world/level";
import { $BlockPos_ } from "@package/net/minecraft/core";
import { $BlockState, $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $ResolvableProfile_, $ResolvableProfile } from "@package/net/minecraft/world/item/component";
import { $GraveComponent } from "@package/com/b1n_ry/yigd/components";
import { $UUID } from "@package/java/util";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/com/b1n_ry/yigd/block/entity" {
    export class $GraveBlockEntity extends $BlockEntity {
        static tick(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: $GraveBlockEntity): void;
        getComponent(): $GraveComponent;
        setComponent(arg0: $GraveComponent): void;
        onBroken(): void;
        setClaimed(arg0: boolean): void;
        setGraveText(arg0: $Component_): void;
        getPreviousState(): $BlockState;
        setGraveSkull(arg0: $ResolvableProfile_): void;
        isUnclaimed(): boolean;
        setPreviousState(arg0: $BlockState_): void;
        getGraveText(): $Component;
        getGraveSkull(): $ResolvableProfile;
        getGraveId(): $UUID;
        static ATTACHMENTS_NBT_KEY: string;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        set claimed(value: boolean);
        get unclaimed(): boolean;
        get graveId(): $UUID;
    }
}
