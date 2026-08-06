import { $Level_, $Level } from "@package/net/minecraft/world/level";
import { $UseOnContextAccessor as $UseOnContextAccessor$1 } from "@package/com/telepathicgrunt/the_bumblezone/mixin/neoforge/block";
import { $InteractionHand, $InteractionHand_ } from "@package/net/minecraft/world";
import { $BlockPos, $BlockPos_, $Direction_, $Direction } from "@package/net/minecraft/core";
import { $ItemStack, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $UseOnContextInvoker } from "@package/com/jesz/createdieselgenerators/mixins";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $UseOnContextAccessor } from "@package/com/simibubi/create/foundation/mixin/accessor";
import { $Vec3, $BlockHitResult } from "@package/net/minecraft/world/phys";

declare module "@package/net/minecraft/world/item/context" {
    export class $BlockPlaceContext extends $UseOnContext {
        static at(context: $BlockPlaceContext, pos: $BlockPos_, direction: $Direction_): $BlockPlaceContext;
        handler$jhj000$moonlight$fixNotAccountingForNullPlayer3(arg0: $CallbackInfoReturnable<any>): void;
        handler$jhj000$moonlight$fixNotAccountingForNullPlayer1(arg0: $CallbackInfoReturnable<any>): void;
        handler$jhj000$moonlight$fixNotAccountingForNullPlayer2(arg0: $CallbackInfoReturnable<any>): void;
        canPlace(): boolean;
        getNearestLookingDirection(): $Direction;
        replacingClickedOnBlock(): boolean;
        getNearestLookingDirections(): $Direction[];
        getNearestLookingVerticalDirection(): $Direction;
        replaceClicked: boolean;
        hitResult: $BlockHitResult;
        constructor(level: $Level_, player: $Player | null, hand: $InteractionHand_, itemStack: $ItemStack_, hitResult: $BlockHitResult);
        constructor(context: $UseOnContext);
        constructor(player: $Player, hand: $InteractionHand_, itemStack: $ItemStack_, hitResult: $BlockHitResult);
        get nearestLookingDirection(): $Direction;
        get nearestLookingDirections(): $Direction[];
        get nearestLookingVerticalDirection(): $Direction;
    }
    export class $DirectionalPlaceContext extends $BlockPlaceContext {
        replaceClicked: boolean;
        hitResult: $BlockHitResult;
        constructor(level: $Level_, pos: $BlockPos_, direction: $Direction_, itemStack: $ItemStack_, face: $Direction_);
    }
    export class $UseOnContext implements $UseOnContextAccessor$1, $UseOnContextAccessor, $UseOnContextInvoker {
        getLevel(): $Level;
        getPlayer(): $Player;
        isSecondaryUseActive(): boolean;
        getItemInHand(): $ItemStack;
        getRotation(): number;
        getClickedPos(): $BlockPos;
        getClickedFace(): $Direction;
        getHorizontalDirection(): $Direction;
        getHand(): $InteractionHand;
        isInside(): boolean;
        getHitResult(): $BlockHitResult;
        getClickLocation(): $Vec3;
        create$getHitResult(): $BlockHitResult;
        bumblezone$getHitResult(): $BlockHitResult;
        cdg_getHitResult(): $BlockHitResult;
        hitResult: $BlockHitResult;
        constructor(player: $Player, hand: $InteractionHand_, hitResult: $BlockHitResult);
        constructor(level: $Level_, player: $Player | null, hand: $InteractionHand_, itemStack: $ItemStack_, hitResult: $BlockHitResult);
        get level(): $Level;
        get player(): $Player;
        get secondaryUseActive(): boolean;
        get itemInHand(): $ItemStack;
        get rotation(): number;
        get clickedPos(): $BlockPos;
        get clickedFace(): $Direction;
        get horizontalDirection(): $Direction;
        get hand(): $InteractionHand;
        get inside(): boolean;
        get clickLocation(): $Vec3;
    }
}
