import { $ItemStack } from "@package/net/minecraft/world/item";
import { $AbstractSpell_ } from "@package/io/redspace/ironsspellbooks/api/spells";
import { $EquipmentSlot_ } from "@package/net/minecraft/world/entity";
import { $SyncedSpellData } from "@package/io/redspace/ironsspellbooks/capabilities/magic";
import { $Projectile } from "@package/net/minecraft/world/entity/projectile";
import { $MagicData } from "@package/io/redspace/ironsspellbooks/api/magic";

declare module "@package/io/redspace/ironsspellbooks/api/entity" {
    export class $IMagicEntity {
    }
    export interface $IMagicEntity {
        isDrinkingPotion(): boolean;
        getMagicData(): $MagicData;
        castComplete(): void;
        setSyncedSpellData(arg0: $SyncedSpellData): void;
        initiateCastSpell(arg0: $AbstractSpell_, arg1: number): void;
        notifyDangerousProjectile(arg0: $Projectile): void;
        startDrinkingPotion(): void;
        getHasUsedSingleAttack(): boolean;
        setHasUsedSingleAttack(arg0: boolean): void;
        /**
         * @deprecated
         */
        getItemBySlot(arg0: $EquipmentSlot_): $ItemStack;
        setTeleportLocationBehindTarget(arg0: number): boolean;
        setBurningDashDirectionData(): void;
        isCasting(): boolean;
        cancelCast(): void;
        get drinkingPotion(): boolean;
        get magicData(): $MagicData;
        set syncedSpellData(value: $SyncedSpellData);
        set teleportLocationBehindTarget(value: number);
        get casting(): boolean;
    }
}
