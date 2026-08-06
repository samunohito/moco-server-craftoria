import { $LevelAccessor } from "@package/net/minecraft/world/level";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $BlockPos_, $Direction_, $Direction } from "@package/net/minecraft/core";
import { $ResourceType } from "@package/ca/teamdman/sfm/common/resourcetype";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $Record } from "@package/java/lang";
import { $Set_, $Set } from "@package/java/util";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $ICapabilityInvalidationListener, $ICapabilityInvalidationListener_, $IBlockCapabilityProvider, $BlockCapability } from "@package/net/neoforged/neoforge/capabilities";

declare module "@package/ca/teamdman/sfm/common/capability" {
    export interface $SFMBlockCapabilityProvider<CAP> extends RegistryMarked<RegistryTypes.SfmCapabilityProviderMappersTag, RegistryTypes.SfmCapabilityProviderMappers> {}
    export class $SFMBlockCapabilityResult<CAP> extends $Record {
        inner(): CAP;
        static of<CAP>(arg0: CAP): $SFMBlockCapabilityResult<CAP>;
        static empty<CAP>(): $SFMBlockCapabilityResult<CAP>;
        isPresent(): boolean;
        unwrap(): CAP;
        listeners(): $Set<$ICapabilityInvalidationListener>;
        addInvalidationListener(arg0: $ICapabilityInvalidationListener_, arg1: $ServerLevel, arg2: $BlockPos_): void;
        constructor(inner: CAP, listeners: $Set_<$ICapabilityInvalidationListener_>);
        get present(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $SFMBlockCapabilityResult}.
     */
    export type $SFMBlockCapabilityResult_<CAP> = { listeners?: $Set_<$ICapabilityInvalidationListener_>, inner?: any,  } | [listeners?: $Set_<$ICapabilityInvalidationListener_>, inner?: any, ];
    export class $SFMBlockCapabilityProvider<CAP> {
    }
    export interface $SFMBlockCapabilityProvider<CAP> {
        priority(): number;
        getCapability(arg0: $SFMBlockCapabilityKind_<CAP>, arg1: $LevelAccessor, arg2: $BlockPos_, arg3: $BlockState_, arg4: $BlockEntity, arg5: $Direction_): $SFMBlockCapabilityResult<CAP>;
        matchesCapabilityKind(arg0: $SFMBlockCapabilityKind_<never>): boolean;
        specialize(arg0: $SFMBlockCapabilityKind_<CAP>): $IBlockCapabilityProvider<CAP, $Direction>;
    }
    /**
     * Values that may be interpreted as {@link $SFMBlockCapabilityProvider}.
     */
    export type $SFMBlockCapabilityProvider_<CAP> = RegistryTypes.SfmCapabilityProviderMappers;
    export class $SFMBlockCapabilityKind<CAP> extends $Record {
        getName(): string;
        capabilityKind(): $BlockCapability<CAP, $Direction>;
        getResourceType<STACK, ITEM>(): $ResourceType<STACK, ITEM, CAP>;
        constructor(capabilityKind: $BlockCapability<CAP, $Direction_>);
        get name(): string;
        get resourceType(): $ResourceType<STACK, ITEM, CAP>;
    }
    /**
     * Values that may be interpreted as {@link $SFMBlockCapabilityKind}.
     */
    export type $SFMBlockCapabilityKind_<CAP> = { capabilityKind?: $BlockCapability<any, $Direction_>,  } | [capabilityKind?: $BlockCapability<any, $Direction_>, ];
}
