import { $Predicate_, $BiPredicate_, $BiConsumer_ } from "@package/java/util/function";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $ItemStack_ } from "@package/net/minecraft/world/item";
import { $LocalizationEntry } from "@package/ca/teamdman/sfm/common/localization";
import { $MapCodec } from "@package/com/mojang/serialization";
import { $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $Component } from "@package/net/minecraft/network/chat";
import { $Record } from "@package/java/lang";
import { $Collection_, $List, $Map_, $Map, $Set } from "@package/java/util";
import { $BlockPosIterator, $BlockPosSet } from "@package/ca/teamdman/sfm/common/util";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/ca/teamdman/sfm/common/label" {
    export class $LabelPositionHolder extends $Record {
        remove(arg0: string, arg1: number): $LabelPositionHolder;
        remove(arg0: string, arg1: $BlockPos_): $LabelPositionHolder;
        static clear(arg0: $ItemStack_): void;
        clear(): $LabelPositionHolder;
        static decode(arg0: $FriendlyByteBuf): $LabelPositionHolder;
        static encode(arg0: $LabelPositionHolder_, arg1: $FriendlyByteBuf): void;
        isEmpty(): boolean;
        add(arg0: string, arg1: $BlockPos_): $LabelPositionHolder;
        contains(arg0: string, arg1: $BlockPos_): boolean;
        static from(arg0: $ItemStack_): $LabelPositionHolder;
        addAll(arg0: string, arg1: $BlockPosIterator): $LabelPositionHolder;
        addAll(arg0: string, arg1: $Collection_<$BlockPos_>): $LabelPositionHolder;
        static empty(): $LabelPositionHolder;
        forEach(arg0: $BiConsumer_<string, $BlockPos>): $LabelPositionHolder;
        save(arg0: $ItemStack_): $LabelPositionHolder;
        removeAll(arg0: number): $LabelPositionHolder;
        removeAll(arg0: $BlockPos_): $LabelPositionHolder;
        removeIf(arg0: $Predicate_<string>): $LabelPositionHolder;
        removeIf(arg0: $BiPredicate_<string, $BlockPos>): $LabelPositionHolder;
        labels(): $Map<string, $BlockPosSet>;
        getLabels(arg0: number): $Set<string>;
        getLabels(arg0: $BlockPos_): $Set<string>;
        toOwned(): $LabelPositionHolder;
        getPositions(arg0: string): $BlockPosSet;
        prune(): $LabelPositionHolder;
        asHoverText(): $List<$Component>;
        addReferencedLabel(arg0: string): $LabelPositionHolder;
        getPositionsMut(arg0: string): $BlockPosSet;
        toDebugString(): string;
        static CODEC: $MapCodec<$LabelPositionHolder>;
        static DISK_ITEM_TOOLTIP_LABEL: $LocalizationEntry;
        static DISK_ITEM_TOOLTIP_LABEL_HEADER: $LocalizationEntry;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $LabelPositionHolder>;
        constructor(labels: $Map_<string, $BlockPosSet>);
    }
    /**
     * Values that may be interpreted as {@link $LabelPositionHolder}.
     */
    export type $LabelPositionHolder_ = { labels?: $Map_<string, $BlockPosSet>,  } | [labels?: $Map_<string, $BlockPosSet>, ];
}
