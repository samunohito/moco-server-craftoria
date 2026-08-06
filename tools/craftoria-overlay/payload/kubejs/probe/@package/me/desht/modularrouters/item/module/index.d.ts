import { $Level_ } from "@package/net/minecraft/world/level";
import { $IItemMatcher } from "@package/me/desht/modularrouters/api/matching";
import { $Item$Properties, $Item, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $MutableComponent } from "@package/net/minecraft/network/chat";
import { $ModItems$ITintable } from "@package/me/desht/modularrouters/core";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $Map } from "@package/java/util";
import { $BiFunction_ } from "@package/java/util/function";
import { $InteractionResultHolder, $InteractionHand_ } from "@package/net/minecraft/world";
import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $RelativeDirection_, $RedstoneBehaviour, $ModuleSettings } from "@package/me/desht/modularrouters/logic/settings";
import { $CompiledModule } from "@package/me/desht/modularrouters/logic/compiled";
import { $ModularRouterBlockEntity } from "@package/me/desht/modularrouters/block/tile";
import { $ModuleMenu } from "@package/me/desht/modularrouters/container";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $MenuType } from "@package/net/minecraft/world/inventory";
import { $Enum } from "@package/java/lang";
import { $TintColor } from "@package/me/desht/modularrouters/client/util";
import { $MRBaseItem } from "@package/me/desht/modularrouters/item";

declare module "@package/me/desht/modularrouters/item/module" {
    export class $ModuleItem extends $MRBaseItem implements $ModItems$ITintable {
        compile(arg0: $ModularRouterBlockEntity, arg1: $ItemStack_): $CompiledModule;
        getItemTint(): $TintColor;
        getEnergyCost(arg0: $ItemStack_): number;
        static setRoundRobinCounter(arg0: $ItemStack_, arg1: number): void;
        static getRoundRobinCounter(arg0: $ItemStack_): number;
        static getRedstoneBehaviour(arg0: $ItemStack_): $RedstoneBehaviour;
        isItemValidForFilter(arg0: $ItemStack_): boolean;
        isDirectional(): boolean;
        getRegulatorTranslationKey(arg0: $ItemStack_): string;
        getFilterItemMatcher(arg0: $ItemStack_): $IItemMatcher;
        getDirectionString(arg0: $RelativeDirection_): $MutableComponent;
        onSneakRightClick(arg0: $ItemStack_, arg1: $Level_, arg2: $Player, arg3: $InteractionHand_): $InteractionResultHolder<$ItemStack>;
        doModuleValidation(arg0: $ItemStack_, arg1: $ServerPlayer): void;
        static getCommonSettings(arg0: $ItemStack_): $ModuleSettings;
        isOmniDirectional(): boolean;
        getMenuType(): $MenuType<$ModuleMenu>;
        isFluidModule(): boolean;
        static getRangeModifier(arg0: $ItemStack_): number;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        craftingRemainingItem: $Item;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $Item$Properties, arg1: $BiFunction_<$ModularRouterBlockEntity, $ItemStack, $CompiledModule>);
        get itemTint(): $TintColor;
        get directional(): boolean;
        get omniDirectional(): boolean;
        get menuType(): $MenuType<$ModuleMenu>;
        get fluidModule(): boolean;
    }
    export class $DetectorModule$SignalType extends $Enum<$DetectorModule$SignalType> {
        static values(): $DetectorModule$SignalType[];
        static valueOf(arg0: string): $DetectorModule$SignalType;
        static getType(arg0: boolean): $DetectorModule$SignalType;
        static WEAK: $DetectorModule$SignalType;
        static NONE: $DetectorModule$SignalType;
        static STRONG: $DetectorModule$SignalType;
    }
    /**
     * Values that may be interpreted as {@link $DetectorModule$SignalType}.
     */
    export type $DetectorModule$SignalType_ = "none" | "weak" | "strong";
}
