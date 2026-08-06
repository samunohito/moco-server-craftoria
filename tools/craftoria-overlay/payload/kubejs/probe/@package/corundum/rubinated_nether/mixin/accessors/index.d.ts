import { $Level_ } from "@package/net/minecraft/world/level";
import { $EntityRenderer } from "@package/net/minecraft/client/renderer/entity";
import { $ItemStack, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $AbstractCookingRecipe, $RecipeManager$CachedCheck, $RecipeHolder_, $SingleRecipeInput } from "@package/net/minecraft/world/item/crafting";
import { $EntityType, $EntityType_, $Entity } from "@package/net/minecraft/world/entity";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $Map_, $Map } from "@package/java/util";
import { $BlockPos_, $RegistryAccess, $NonNullList } from "@package/net/minecraft/core";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $LevelEntityGetter } from "@package/net/minecraft/world/level/entity";
import { $AbstractFurnaceBlockEntity } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/corundum/rubinated_nether/mixin/accessors" {
    export class $EntityRenderDispatcherAccessor {
    }
    export interface $EntityRenderDispatcherAccessor {
        getRenderers(): $Map<$EntityType<never>, $EntityRenderer<never>>;
        setRenderers(arg0: $Map_<$EntityType_<never>, $EntityRenderer<never>>): void;
    }
    export class $LevelAccessor {
    }
    export interface $LevelAccessor {
        invokeGetEntities(): $LevelEntityGetter<$Entity>;
    }
    /**
     * Values that may be interpreted as {@link $LevelAccessor}.
     */
    export type $LevelAccessor_ = (() => $LevelEntityGetter<$Entity>);
    export class $DoublePlantBlockAccessor {
        static invokePreventDropFromBottomPart(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: $Player): void;
    }
    export interface $DoublePlantBlockAccessor {
    }
    export class $GuiAccessor {
    }
    export interface $GuiAccessor {
        invokeRenderTextureOverlay(arg0: $GuiGraphics, arg1: $ResourceLocation_, arg2: number): void;
    }
    /**
     * Values that may be interpreted as {@link $GuiAccessor}.
     */
    export type $GuiAccessor_ = ((arg0: $GuiGraphics, arg1: $ResourceLocation, arg2: number) => void);
    export class $AbstractFurnaceBlockEntityAccessor {
        static callGetTotalCookTime(arg0: $Level_, arg1: $AbstractFurnaceBlockEntity): number;
    }
    export interface $AbstractFurnaceBlockEntityAccessor {
        callCanBurn(arg0: $RegistryAccess, arg1: $RecipeHolder_<never>, arg2: $NonNullList<$ItemStack_>, arg3: number, arg4: $AbstractFurnaceBlockEntity): boolean;
        rubinatedNether$getLitTime(): number;
        callGetBurnDuration(arg0: $ItemStack_): number;
        rubinatedNether$setLitTime(arg0: number): void;
        rubinatedNether$getItems(): $NonNullList<$ItemStack>;
        rubinatedNether$getCookingTotalTime(): number;
        rubinatedNether$setCookingTotalTime(arg0: number): void;
        rubinatedNether$getCookingProgress(): number;
        rubinatedNether$setCookingProgress(arg0: number): void;
        rubinatedNether$getQuickCheck(): $RecipeManager$CachedCheck<$SingleRecipeInput, $AbstractCookingRecipe>;
        rubinatedNether$setLitDuration(arg0: number): void;
        callIsLit(): boolean;
    }
}
