import { $ItemStack, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $ConditionalTrailAppearance, $ConditionalTrailAppearance_, $ParticlePlacement, $ParticlePlacement_ } from "@package/net/bettercombat/api/fx";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $Enum, $Record } from "@package/java/lang";
import { $List, $List_ } from "@package/java/util";
export * as fx from "@package/net/bettercombat/api/fx";

declare module "@package/net/bettercombat/api" {
    export class $WeaponAttributes$HitBoxShape extends $Enum<$WeaponAttributes$HitBoxShape> {
        static values(): $WeaponAttributes$HitBoxShape[];
        static valueOf(name: string): $WeaponAttributes$HitBoxShape;
        static FORWARD_BOX: $WeaponAttributes$HitBoxShape;
        static VERTICAL_PLANE: $WeaponAttributes$HitBoxShape;
        static HORIZONTAL_PLANE: $WeaponAttributes$HitBoxShape;
    }
    /**
     * Values that may be interpreted as {@link $WeaponAttributes$HitBoxShape}.
     */
    export type $WeaponAttributes$HitBoxShape_ = "forward_box" | "vertical_plane" | "horizontal_plane";
    export class $AttackHand extends $Record {
        attributes(): $WeaponAttributes;
        isOffHand(): boolean;
        itemStack(): $ItemStack;
        attack(): $WeaponAttributes$Attack;
        upswingRate(): number;
        combo(): $ComboState;
        constructor(attack: $WeaponAttributes$Attack, combo: $ComboState_, isOffHand: boolean, attributes: $WeaponAttributes, itemStack: $ItemStack_);
        get offHand(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $AttackHand}.
     */
    export type $AttackHand_ = { combo?: $ComboState_, attack?: $WeaponAttributes$Attack, attributes?: $WeaponAttributes, itemStack?: $ItemStack_, isOffHand?: boolean,  } | [combo?: $ComboState_, attack?: $WeaponAttributes$Attack, attributes?: $WeaponAttributes, itemStack?: $ItemStack_, isOffHand?: boolean, ];
    export class $WeaponAttributes {
        static empty(): $WeaponAttributes;
        category(): string;
        attacks(): $WeaponAttributes$Attack[];
        pose(): string;
        isTwoHanded(): boolean;
        attackRange(): number;
        trailAppearance(): $ConditionalTrailAppearance;
        offHandPose(): string;
        rangeBonus(): number;
        two_handed(): boolean;
        constructor(attack_range: number, range_bonus: number, pose: string, off_hand_pose: string, isTwoHanded: boolean, category: string, attacks: $WeaponAttributes$Attack[], trail_appearance: $ConditionalTrailAppearance_);
        get twoHanded(): boolean;
    }
    export class $WeaponAttributes$Attack {
        static empty(): $WeaponAttributes$Attack;
        swingSound(): $WeaponAttributes$Sound;
        animation(): string;
        angle(): number;
        conditions(): $WeaponAttributes$Condition[];
        damageMultiplier(): number;
        upswing(): number;
        rangeMultiplier(): number;
        hitbox(): $WeaponAttributes$HitBoxShape;
        trailParticles(): $List<$ParticlePlacement>;
        movementSpeedMultiplier(): number;
        impactSound(): $WeaponAttributes$Sound;
        constructor();
        constructor(conditions: $WeaponAttributes$Condition_[], hitbox: $WeaponAttributes$HitBoxShape_, damage_multiplier: number, movement_speed_multiplier: number, range_multiplier: number, angle: number, upswing: number, animation: string, swing_sound: $WeaponAttributes$Sound, impact_sound: $WeaponAttributes$Sound, trail_particles: $List_<$ParticlePlacement_>);
    }
    export class $MinecraftClient_BetterCombat {
    }
    export interface $MinecraftClient_BetterCombat {
        getCursorTarget(): $Entity;
        getUpswingTicks(): number;
        cancelUpswing(): void;
        hasTargetsInReach(): boolean;
        getComboCount(): number;
        getCurrentAttack(): $WeaponAttributes$Attack;
        getSwingProgress(): number;
        isWeaponSwingInProgress(): boolean;
        getCurrentAttackHand(): $AttackHand;
        get cursorTarget(): $Entity;
        get upswingTicks(): number;
        get comboCount(): number;
        get currentAttack(): $WeaponAttributes$Attack;
        get swingProgress(): number;
        get weaponSwingInProgress(): boolean;
        get currentAttackHand(): $AttackHand;
    }
    export class $WeaponAttributes$Condition extends $Enum<$WeaponAttributes$Condition> {
        static values(): $WeaponAttributes$Condition[];
        static valueOf(name: string): $WeaponAttributes$Condition;
        static NO_OFFHAND_ITEM: $WeaponAttributes$Condition;
        static NOT_MOUNTED: $WeaponAttributes$Condition;
        static NOT_DUAL_WIELDING: $WeaponAttributes$Condition;
        static DUAL_WIELDING_ANY: $WeaponAttributes$Condition;
        static DUAL_WIELDING_SAME_CATEGORY: $WeaponAttributes$Condition;
        static MOUNTED: $WeaponAttributes$Condition;
        static MAIN_HAND_ONLY: $WeaponAttributes$Condition;
        static OFF_HAND_ONLY: $WeaponAttributes$Condition;
        static DUAL_WIELDING_SAME: $WeaponAttributes$Condition;
        static OFF_HAND_SHIELD: $WeaponAttributes$Condition;
    }
    /**
     * Values that may be interpreted as {@link $WeaponAttributes$Condition}.
     */
    export type $WeaponAttributes$Condition_ = "not_dual_wielding" | "dual_wielding_any" | "dual_wielding_same" | "dual_wielding_same_category" | "no_offhand_item" | "off_hand_shield" | "main_hand_only" | "off_hand_only" | "mounted" | "not_mounted";
    export class $WeaponAttributes$Sound {
        id(): string;
        volume(): number;
        pitch(): number;
        randomness(): number;
        constructor();
        constructor(id: string);
    }
    export class $ComboState extends $Record {
        current(): number;
        total(): number;
        constructor(current: number, total: number);
    }
    /**
     * Values that may be interpreted as {@link $ComboState}.
     */
    export type $ComboState_ = { total?: number, current?: number,  } | [total?: number, current?: number, ];
    export class $EntityPlayer_BetterCombat {
    }
    export interface $EntityPlayer_BetterCombat {
        getMainHandIdleAnimation(): string;
        getOffHandIdleAnimation(): string;
        getCurrentAttack(): $AttackHand;
        setCombatFlags(arg0: number): void;
        getCombatFlags(): number;
        get mainHandIdleAnimation(): string;
        get offHandIdleAnimation(): string;
        get currentAttack(): $AttackHand;
    }
}
