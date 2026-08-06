import { $DeferredHolder } from "@package/net/neoforged/neoforge/registries";
import { $ItemStack_ } from "@package/net/minecraft/world/item";
import { $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { RegistryTypes, RegistryMarked } from "@special/types";
import { $Component } from "@package/net/minecraft/network/chat";
import { $SBDataMaps$ItemValue } from "@package/com/wdiscute/sellingbin/registry";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $List } from "@package/java/util";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/com/wdiscute/sellingbin/processors" {
    export class $AbstractProcessor {
        create(arg0: number): $SBDataMaps$ItemValue;
        static createEmpty(): $SBDataMaps$ItemValue;
        static createEmpty(arg0: number): $SBDataMaps$ItemValue;
        getDescription(): $List<$Component>;
        getRegistryHolder(): $DeferredHolder<$AbstractProcessor, $AbstractProcessor>;
        getCodecOrThrow(): $MapCodec<$AbstractProcessor>;
        shouldCancelShrink(arg0: $ItemStack_): boolean;
        onSellStart(arg0: $ItemStack_): void;
        onSellComplete(arg0: $ItemStack_): void;
        addValue(arg0: number, arg1: number, arg2: $ItemStack_, arg3: $BlockEntity, arg4: $Player): number;
        showDescriptionOnEmi(): boolean;
        getRegistryHolderOrThrow(): $DeferredHolder<$AbstractProcessor, $AbstractProcessor>;
        canSell(arg0: $ItemStack_, arg1: $BlockEntity | null, arg2: $Player | null): boolean;
        codec(): $MapCodec<$AbstractProcessor>;
        static ABSTRACT_PROCESSOR_CODEC: $Codec<$AbstractProcessor>;
        static ABSTRACT_PROCESSOR_CODEC_LIST: $Codec<$List<$AbstractProcessor>>;
        constructor();
        get description(): $List<$Component>;
        get registryHolder(): $DeferredHolder<$AbstractProcessor, $AbstractProcessor>;
        get codecOrThrow(): $MapCodec<$AbstractProcessor>;
        get registryHolderOrThrow(): $DeferredHolder<$AbstractProcessor, $AbstractProcessor>;
    }
    /**
     * Values that may be interpreted as {@link $AbstractProcessor}.
     */
    export type $AbstractProcessor_ = RegistryTypes.SellingBinSellingBin;
    export interface $AbstractProcessor extends RegistryMarked<RegistryTypes.SellingBinSellingBinTag, RegistryTypes.SellingBinSellingBin> {}
}
