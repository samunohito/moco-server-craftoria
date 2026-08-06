import { $InteractionHand_ } from "@package/net/minecraft/world";
import { $Holder_, $Holder, $Registry } from "@package/net/minecraft/core";
import { $ItemStack, $Item } from "@package/net/minecraft/world/item";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $IQuiverEntity } from "@package/net/mehvahdjukaar/supplementaries/common/entities";
import { $ResourceKey } from "@package/net/minecraft/resources";
import { $LivingEntity, $EquipmentSlot_ } from "@package/net/minecraft/world/entity";
import { $Record } from "@package/java/lang";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $MLMapDecorationType } from "@package/net/mehvahdjukaar/moonlight/api/map/decoration";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/net/mehvahdjukaar/supplementaries/common/utils" {
    export class $SlotReference$Empty extends $Record implements $SlotReference {
        get(arg0: $LivingEntity): $ItemStack;
        getCodec(): $StreamCodec<$ByteBuf, $SlotReference$Empty>;
        isEmpty(): boolean;
        getItem(arg0: $LivingEntity): $Item;
        static CODEC: $StreamCodec<$ByteBuf, $SlotReference$Empty>;
        constructor();
        get codec(): $StreamCodec<$ByteBuf, $SlotReference$Empty>;
        get empty(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $SlotReference$Empty}.
     */
    export type $SlotReference$Empty_ = {  } | [];
    export class $IExplorationFunctionExtension {
    }
    export interface $IExplorationFunctionExtension {
        supplementaries$setCustomDecoration(arg0: $Holder_<$MLMapDecorationType<never, never>>): void;
        supplementaries$getCustomDecoration(): $Holder<$MLMapDecorationType<never, never>>;
    }
    export class $IQuiverPlayer {
    }
    export interface $IQuiverPlayer extends $IQuiverEntity {
        supplementaries$setQuiverSlot(arg0: $SlotReference): void;
        supplementaries$getQuiverSlot(): $SlotReference;
    }
    export class $SlotReference {
        static slot(arg0: $EquipmentSlot_): $SlotReference;
        static inv(arg0: number): $SlotReference;
        static hand(arg0: $InteractionHand_): $SlotReference;
        static quiver(arg0: $IQuiverEntity): $SlotReference;
        static TYPE_REGISTRY_KEY: $ResourceKey<$Registry<$StreamCodec<$ByteBuf, $SlotReference>>>;
        static TYPE_REGISTRY: $Registry<$StreamCodec<$ByteBuf, $SlotReference>>;
        static EMPTY: $SlotReference$Empty;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $SlotReference>;
    }
    export interface $SlotReference {
        get(arg0: $LivingEntity): $ItemStack;
        isEmpty(): boolean;
        getItem(arg0: $LivingEntity): $Item;
        getCodec(): $StreamCodec<$RegistryFriendlyByteBuf, $SlotReference>;
        get empty(): boolean;
        get codec(): $StreamCodec<$RegistryFriendlyByteBuf, $SlotReference>;
    }
}
