import { $Level_ } from "@package/net/minecraft/world/level";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Ingredient, $RecipeHolder_, $RecipeHolder } from "@package/net/minecraft/world/item/crafting";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $LivingEntity } from "@package/net/minecraft/world/entity";
import { $ItemStackHandler } from "@package/net/neoforged/neoforge/items";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $UUID, $List, $Map } from "@package/java/util";
import { $PlayerInteractEvent$RightClickItem } from "@package/net/neoforged/neoforge/event/entity/player";
import { $Clearable, $InteractionHand_ } from "@package/net/minecraft/world";
import { $Consumer } from "@package/java/util/function";
import { $HolderLookup$Provider, $BlockPos, $BlockPos_, $Direction_ } from "@package/net/minecraft/core";
import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $Multiblock } from "@package/com/klikli_dev/modonomicon/api/multiblock";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $RitualRecipe } from "@package/com/klikli_dev/occultism/crafting/recipe";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $LivingDeathEvent } from "@package/net/neoforged/neoforge/event/entity/living";
import { $BlockEntityType_, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/com/klikli_dev/occultism/common/blockentity" {
    export class $NetworkedBlockEntity extends $BlockEntity {
        loadAdditional(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        loadNetwork(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        saveNetwork(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): $CompoundTag;
        markNetworkDirty(): void;
        static ATTACHMENTS_NBT_KEY: string;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
    }
    export class $SacrificialBowlBlockEntity extends $NetworkedBlockEntity implements $Clearable {
        clearContent(): void;
        itemStackHandler: $ItemStackHandler;
        lastChangeTime: number;
        static ATTACHMENTS_NBT_KEY: string;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
    }
    export class $GoldenSacrificialBowlBlockEntity extends $SacrificialBowlBlockEntity {
        tick(): void;
        stopRitual(arg0: boolean, arg1: boolean): void;
        stopRitual(arg0: boolean): void;
        onLivingDeath(arg0: $LivingDeathEvent): void;
        activate(arg0: $Level_, arg1: $BlockPos_, arg2: $Player, arg3: $InteractionHand_, arg4: $Direction_): boolean;
        getSignal(): number;
        static getDifference(arg0: $Multiblock, arg1: $Level_, arg2: $BlockPos_): $Map<$BlockPos, $Block>;
        getTier(arg0: $BlockState_): number;
        restoreCastingPlayer(): void;
        getCurrentRitualRecipe(): $RecipeHolder<$RitualRecipe>;
        startRitual(arg0: $ServerPlayer, arg1: $ItemStack_, arg2: $RecipeHolder_<$RitualRecipe>): boolean;
        onPlayerRightClickItem(arg0: $PlayerInteractEvent$RightClickItem): void;
        sacrificeFulfilled(): boolean;
        itemUseFulfilled(): boolean;
        notifySacrifice(arg0: $LivingEntity): void;
        notifyItemUse(arg0: $PlayerInteractEvent$RightClickItem): void;
        consumedIngredients: $List<$ItemStack>;
        itemStackHandler: $ItemStackHandler;
        itemUseProvided: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        currentRitualRecipe: $RecipeHolder<$RitualRecipe>;
        rightClickItemListener: $Consumer<$PlayerInteractEvent$RightClickItem>;
        currentTime: number;
        castingPlayer: $ServerPlayer;
        remainingAdditionalIngredients: $List<$Ingredient>;
        tier: number;
        currentRitualRecipeId: $ResourceLocation;
        ritualActive: boolean;
        lastChangeTime: number;
        sacrificeProvided: boolean;
        livingDeathEventListener: $Consumer<$LivingDeathEvent>;
        castingPlayerId: $UUID;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get signal(): number;
    }
}
