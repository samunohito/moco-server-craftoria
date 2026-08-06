import { $BlockAndTintGetter, $Level_, $BlockGetter } from "@package/net/minecraft/world/level";
import { $BlockPos, $BlockPos_, $Vec3i } from "@package/net/minecraft/core";
import { $Pair } from "@package/com/mojang/datafixers/util";
import { $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Rotation, $Rotation_ } from "@package/net/minecraft/world/level/block";
import { $Collection } from "@package/java/util";

declare module "@package/com/klikli_dev/modonomicon/api/multiblock" {
    export class $StateMatcher {
    }
    export interface $StateMatcher {
        getType(): $ResourceLocation;
        toNetwork(arg0: $FriendlyByteBuf): void;
        getStatePredicate(): $TriPredicate<$BlockGetter, $BlockPos, $BlockState>;
        getDisplayedState(arg0: number): $BlockState;
        countsTowardsTotalBlocks(): boolean;
        get type(): $ResourceLocation;
        get statePredicate(): $TriPredicate<$BlockGetter, $BlockPos, $BlockState>;
    }
    export class $Multiblock$SimulateResult {
    }
    export interface $Multiblock$SimulateResult {
        test(arg0: $Level_, arg1: $Rotation_): boolean;
        getStateMatcher(): $StateMatcher;
        getCharacter(): string;
        getWorldPosition(): $BlockPos;
        get stateMatcher(): $StateMatcher;
        get character(): string;
        get worldPosition(): $BlockPos;
    }
    export class $TriPredicate<A, B, C> {
    }
    export interface $TriPredicate<A, B, C> {
        test(arg0: A, arg1: B, arg2: C): boolean;
    }
    /**
     * Values that may be interpreted as {@link $TriPredicate}.
     */
    export type $TriPredicate_<A, B, C> = ((arg0: A, arg1: B, arg2: C) => boolean);
    export class $Multiblock {
    }
    export interface $Multiblock extends $BlockAndTintGetter {
        getSize(): $Vec3i;
        test(arg0: $Level_, arg1: $BlockPos_, arg2: number, arg3: number, arg4: number, arg5: $Rotation_): boolean;
        offset(arg0: number, arg1: number, arg2: number): $Multiblock;
        validate(arg0: $Level_, arg1: $BlockPos_, arg2: $Rotation_): boolean;
        validate(arg0: $Level_, arg1: $BlockPos_): $Rotation;
        getId(): $ResourceLocation;
        getType(): $ResourceLocation;
        getOffset(): $Vec3i;
        setLevel(arg0: $Level_): void;
        toNetwork(arg0: $FriendlyByteBuf): void;
        place(arg0: $Level_, arg1: $BlockPos_, arg2: $Rotation_): void;
        setId(arg0: $ResourceLocation_): $Multiblock;
        simulate(arg0: $Level_, arg1: $BlockPos_, arg2: $Rotation_, arg3: boolean, arg4: boolean): $Pair<$BlockPos, $Collection<$Multiblock$SimulateResult>>;
        offsetView(arg0: number, arg1: number, arg2: number): $Multiblock;
        isSymmetrical(): boolean;
        getViewOffset(): $Vec3i;
        setSymmetrical(arg0: boolean): $Multiblock;
        get size(): $Vec3i;
        get type(): $ResourceLocation;
        set level(value: $Level_);
        get viewOffset(): $Vec3i;
    }
}
