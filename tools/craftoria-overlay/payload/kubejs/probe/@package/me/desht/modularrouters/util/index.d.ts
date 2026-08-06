import { $Level_ } from "@package/net/minecraft/world/level";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $InteractionHand, $InteractionHand_ } from "@package/net/minecraft/world";
import { $BlockSnapshot } from "@package/net/neoforged/neoforge/common/util";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $RegistryFriendlyByteBuf, $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $ModularRouterBlockEntity } from "@package/me/desht/modularrouters/block/tile";
import { $Enum, $Record } from "@package/java/lang";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $BlockEvent$EntityPlaceEvent } from "@package/net/neoforged/neoforge/event/level";
import { $Vec3_, $Vec3, $AABB } from "@package/net/minecraft/world/phys";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
export * as fake_player from "@package/me/desht/modularrouters/util/fake_player";

declare module "@package/me/desht/modularrouters/util" {
    export class $BeamData$ByteOffset extends $Record {
        offset(arg0: $Vec3_): $Vec3;
        x(): number;
        z(): number;
        y(): number;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $BeamData$ByteOffset>;
        constructor(x: number, y: number, z: number);
    }
    /**
     * Values that may be interpreted as {@link $BeamData$ByteOffset}.
     */
    export type $BeamData$ByteOffset_ = { x?: number, z?: number, y?: number,  } | [x?: number, z?: number, y?: number, ];
    export class $TranslatableEnum {
    }
    export interface $TranslatableEnum {
        getTranslationKey(): string;
        get translationKey(): string;
    }
    /**
     * Values that may be interpreted as {@link $TranslatableEnum}.
     */
    export type $TranslatableEnum_ = (() => string);
    export class $BeamData {
        stack(): $ItemStack;
        getRGB(): number[];
        tick(): void;
        getStart(arg0: $Vec3_): $Vec3;
        getEnd(arg0: $Vec3_): $Vec3;
        getProgress(arg0: number): number;
        getAABB(arg0: $BlockPos_): $AABB;
        isExpired(): boolean;
        fade(): boolean;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $BeamData>;
        constructor(arg0: $BeamData$ByteOffset_, arg1: number, arg2: number, arg3: $ItemStack_, arg4: boolean, arg5: boolean);
        get RGB(): number[];
        get expired(): boolean;
    }
    export class $MFLocator$ItemType extends $Enum<$MFLocator$ItemType> {
        static values(): $MFLocator$ItemType[];
        static valueOf(arg0: string): $MFLocator$ItemType;
        static MODULE: $MFLocator$ItemType;
        static FILTER: $MFLocator$ItemType;
    }
    /**
     * Values that may be interpreted as {@link $MFLocator$ItemType}.
     */
    export type $MFLocator$ItemType_ = "module" | "filter";
    export class $CustomEntityPlaceEvent extends $BlockEvent$EntityPlaceEvent {
        constructor(arg0: $BlockSnapshot, arg1: $BlockState_, arg2: $Entity, arg3: $BlockState_);
    }
    export class $MFLocator extends $Record {
        toNetwork(arg0: $RegistryFriendlyByteBuf): void;
        itemType(): $MFLocator$ItemType;
        routerSlot(): number;
        hand(): $InteractionHand;
        getRouter(arg0: $Level_): ($ModularRouterBlockEntity) | undefined;
        static fromNetwork(arg0: $FriendlyByteBuf): $MFLocator;
        static heldModule(arg0: $InteractionHand_): $MFLocator;
        getModuleStack(arg0: $Player): $ItemStack;
        getTargetItem(arg0: $Player): $ItemStack;
        static heldFilter(arg0: $InteractionHand_): $MFLocator;
        filterSlot(): number;
        routerPos(): $BlockPos;
        setFilterStack(arg0: $Player, arg1: $ItemStack_): void;
        static filterInInstalledModule(arg0: $BlockPos_, arg1: number, arg2: number): $MFLocator;
        static moduleInRouter(arg0: $BlockPos_, arg1: number): $MFLocator;
        static filterInHeldModule(arg0: $InteractionHand_, arg1: number): $MFLocator;
        setModuleStack(arg0: $Player, arg1: $ItemStack_): void;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $MFLocator>;
        constructor(hand: $InteractionHand_, routerPos: $BlockPos_, routerSlot: number, filterSlot: number, itemType: $MFLocator$ItemType_);
    }
    /**
     * Values that may be interpreted as {@link $MFLocator}.
     */
    export type $MFLocator_ = { routerSlot?: number, itemType?: $MFLocator$ItemType_, routerPos?: $BlockPos_, filterSlot?: number, hand?: $InteractionHand_,  } | [routerSlot?: number, itemType?: $MFLocator$ItemType_, routerPos?: $BlockPos_, filterSlot?: number, hand?: $InteractionHand_, ];
}
