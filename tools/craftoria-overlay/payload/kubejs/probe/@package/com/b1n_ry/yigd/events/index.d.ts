import { $BlockPos, $BlockPos_, $Direction_, $Direction } from "@package/net/minecraft/core";
import { $ServerPlayer, $ServerLevel } from "@package/net/minecraft/server/level";
import { $Event, $ICancellableEvent } from "@package/net/neoforged/bus/api";
import { $ItemStack, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $DropRule_, $DropRule } from "@package/com/b1n_ry/yigd/util";
import { $DeathContext_, $DeathContext } from "@package/com/b1n_ry/yigd/data";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $LocalPlayer } from "@package/net/minecraft/client/player";
import { $InventoryComponent, $RespawnComponent, $GraveComponent } from "@package/com/b1n_ry/yigd/components";
import { $List_ } from "@package/java/util";
import { $InvModCompat } from "@package/com/b1n_ry/yigd/compat";
import { $GraveBlockEntity } from "@package/com/b1n_ry/yigd/block/entity";

declare module "@package/com/b1n_ry/yigd/events" {
    export class $YigdEvents$DropItemEvent extends $Event implements $ICancellableEvent {
        getStack(): $ItemStack;
        getLevel(): $ServerLevel;
        getZ(): number;
        getX(): number;
        getY(): number;
        setShouldDrop(arg0: boolean): void;
        shouldDrop(): boolean;
        isCanceled(): boolean;
        setCanceled(arg0: boolean): void;
        constructor(arg0: $ItemStack_, arg1: number, arg2: number, arg3: number, arg4: $ServerLevel);
        get stack(): $ItemStack;
        get level(): $ServerLevel;
        get z(): number;
        get x(): number;
        get y(): number;
    }
    export class $YigdEvents$DelayGraveGenerationEvent extends $Event {
        getCaller(): string;
        getDirection(): $Direction;
        getGrave(): $GraveComponent;
        getRespawnComponent(): $RespawnComponent;
        getDeathContext(): $DeathContext;
        setDelayGeneration(arg0: boolean): void;
        generationIsDelayed(): boolean;
        constructor(arg0: $GraveComponent, arg1: $Direction_, arg2: $DeathContext_, arg3: $RespawnComponent, arg4: string);
        get caller(): string;
        get direction(): $Direction;
        get grave(): $GraveComponent;
        get respawnComponent(): $RespawnComponent;
        get deathContext(): $DeathContext;
        set delayGeneration(value: boolean);
    }
    export class $YigdEvents$RenderGlowingGraveEvent extends $Event {
        getPlayer(): $LocalPlayer;
        getGrave(): $GraveBlockEntity;
        setRenderGlowing(arg0: boolean): void;
        isRenderGlowing(): boolean;
        constructor(arg0: $GraveBlockEntity, arg1: $LocalPlayer);
        get player(): $LocalPlayer;
        get grave(): $GraveBlockEntity;
    }
    export class $YigdEvents$AllowBlockUnderGraveGenerationEvent extends $Event {
        getGrave(): $GraveComponent;
        isPlacementAllowed(): boolean;
        setAllowPlacement(arg0: boolean): void;
        getBlockUnder(): $BlockState;
        constructor(arg0: $GraveComponent, arg1: $BlockState_);
        get grave(): $GraveComponent;
        get placementAllowed(): boolean;
        set allowPlacement(value: boolean);
        get blockUnder(): $BlockState;
    }
    export class $YigdEvents$BeforeSoulboundEvent extends $Event {
        getOldPlayer(): $ServerPlayer;
        getNewPlayer(): $ServerPlayer;
        constructor(arg0: $ServerPlayer, arg1: $ServerPlayer);
        get oldPlayer(): $ServerPlayer;
        get newPlayer(): $ServerPlayer;
    }
    export class $YigdEvents$DropRuleEvent extends $Event implements $ICancellableEvent {
        getSlot(): number;
        getStack(): $ItemStack;
        getDropRule(): $DropRule;
        isModify(): boolean;
        getDeathContext(): $DeathContext;
        setDropRule(arg0: $DropRule_): void;
        isCanceled(): boolean;
        setCanceled(arg0: boolean): void;
        constructor(arg0: $ItemStack_, arg1: number, arg2: $DeathContext_, arg3: boolean);
        get slot(): number;
        get stack(): $ItemStack;
        get modify(): boolean;
        get deathContext(): $DeathContext;
    }
    export class $YigdEvents$AllowGraveGenerationEvent extends $Event {
        getGrave(): $GraveComponent;
        getDeathContext(): $DeathContext;
        setAllowGeneration(arg0: boolean): void;
        isGenerationAllowed(): boolean;
        constructor(arg0: $DeathContext_, arg1: $GraveComponent);
        get grave(): $GraveComponent;
        get deathContext(): $DeathContext;
        set allowGeneration(value: boolean);
        get generationAllowed(): boolean;
    }
    export class $YigdEvents$GraveClaimEvent extends $Event implements $ICancellableEvent {
        getTool(): $ItemStack;
        getLevel(): $ServerLevel;
        getPlayer(): $ServerPlayer;
        getPos(): $BlockPos;
        getGrave(): $GraveComponent;
        allowClaim(): boolean;
        setCanClaim(arg0: boolean): void;
        isCanceled(): boolean;
        setCanceled(arg0: boolean): void;
        constructor(arg0: $ServerPlayer, arg1: $ServerLevel, arg2: $BlockPos_, arg3: $GraveComponent, arg4: $ItemStack_);
        get tool(): $ItemStack;
        get level(): $ServerLevel;
        get player(): $ServerPlayer;
        get pos(): $BlockPos;
        get grave(): $GraveComponent;
        set canClaim(value: boolean);
    }
    export class $YigdEvents$GraveGenerationEvent extends $Event {
        getLevel(): $ServerLevel;
        getPos(): $BlockPos;
        canGenerate(): boolean;
        setCanGenerate(arg0: boolean): void;
        getNthTry(): number;
        constructor(arg0: $ServerLevel, arg1: $BlockPos_, arg2: number);
        get level(): $ServerLevel;
        get pos(): $BlockPos;
        get nthTry(): number;
    }
    export class $YigdEvents$LoadModCompatEvent extends $Event {
        addModCompat(arg0: $InvModCompat<never>): void;
        constructor(arg0: $List_<$InvModCompat<never>>);
    }
    export class $YigdEvents$AdjustDropRuleEvent extends $Event {
        getDeathContext(): $DeathContext;
        getInventoryComponent(): $InventoryComponent;
        constructor(arg0: $InventoryComponent, arg1: $DeathContext_);
        get deathContext(): $DeathContext;
        get inventoryComponent(): $InventoryComponent;
    }
}
