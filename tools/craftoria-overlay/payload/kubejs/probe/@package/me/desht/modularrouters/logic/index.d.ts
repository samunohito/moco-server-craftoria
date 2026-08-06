import { $IFluidHandler } from "@package/net/neoforged/neoforge/fluids/capability";
import { $Level_ } from "@package/net/minecraft/world/level";
import { $BlockPos_, $Direction_, $Direction, $GlobalPos_, $GlobalPos } from "@package/net/minecraft/core";
import { $Codec } from "@package/com/mojang/serialization";
import { $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $Component } from "@package/net/minecraft/network/chat";
import { $IItemHandler } from "@package/net/neoforged/neoforge/items";
import { $IEnergyStorage } from "@package/net/neoforged/neoforge/energy";
import { $BlockCapability } from "@package/net/neoforged/neoforge/capabilities";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
export * as settings from "@package/me/desht/modularrouters/logic/settings";
export * as compiled from "@package/me/desht/modularrouters/logic/compiled";
export * as filter from "@package/me/desht/modularrouters/logic/filter";

declare module "@package/me/desht/modularrouters/logic" {
    export class $ModuleTarget {
        getCapability<T>(arg0: $BlockCapability<T, never>): (T) | undefined;
        hasItemHandler(arg0: $Level_): boolean;
        getEnergyHandler(): ($IEnergyStorage) | undefined;
        getFluidHandler(): ($IFluidHandler) | undefined;
        getTextComponent(): $Component;
        getItemHandler(): ($IItemHandler) | undefined;
        isSameWorld(arg0: $Level_ | null): boolean;
        isSameWorld(arg0: $ModuleTarget): boolean;
        blockTranslationKey: string;
        face: $Direction;
        static CODEC: $Codec<$ModuleTarget>;
        gPos: $GlobalPos;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ModuleTarget>;
        constructor(arg0: $GlobalPos_);
        constructor(arg0: $GlobalPos_, arg1: $Direction_);
        constructor(arg0: $Level_, arg1: $BlockPos_, arg2: $Direction_);
        constructor(arg0: $GlobalPos_, arg1: $Direction_, arg2: string);
        get energyHandler(): ($IEnergyStorage) | undefined;
        get fluidHandler(): ($IFluidHandler) | undefined;
        get textComponent(): $Component;
        get itemHandler(): ($IItemHandler) | undefined;
    }
}
