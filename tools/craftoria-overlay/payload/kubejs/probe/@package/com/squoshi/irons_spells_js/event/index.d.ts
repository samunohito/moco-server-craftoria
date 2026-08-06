import { $Level } from "@package/net/minecraft/world/level";
import { $RegistryAccess } from "@package/net/minecraft/core";
import { $Event, $ICancellableEvent } from "@package/net/neoforged/bus/api";
import { $MinecraftServer } from "@package/net/minecraft/server";
import { $SchoolType_, $CastSource, $SchoolType, $SpellData, $CastSource_, $AbstractSpell, $AbstractSpell_ } from "@package/io/redspace/ironsspellbooks/api/spells";
import { $LivingEntity, $Entity } from "@package/net/minecraft/world/entity";
import { $ChangeManaEvent, $SpellOnCastEvent } from "@package/io/redspace/ironsspellbooks/api/events";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $Object } from "@package/java/lang";
import { $KubePlayerEvent } from "@package/dev/latvian/mods/kubejs/player";
import { $SpellSelectionManager$SpellSelectionEvent, $SpellSelectionManager, $MagicData } from "@package/io/redspace/ironsspellbooks/api/magic";
import { $KubeEntityEvent } from "@package/dev/latvian/mods/kubejs/entity";

declare module "@package/com/squoshi/irons_spells_js/event" {
    export class $SpellSelectionEventJS implements $KubePlayerEvent {
        getManager(): $SpellSelectionManager;
        /**
         * Adds spell option to the end of a player's spell bar.
         */
        addSelectionOption(arg0: $SpellData, arg1: string, arg2: number, arg3: number): void;
        /**
         * Adds spell option to the end of a player's spell bar.
         */
        addSelectionOption(arg0: $SpellData, arg1: string, arg2: number): void;
        getPlayer(): $Player;
        getLevel(): $Level;
        getRegistries(): $RegistryAccess;
        getServer(): $MinecraftServer;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        getEntity(): $LivingEntity;
        constructor(arg0: $SpellSelectionManager$SpellSelectionEvent);
        get manager(): $SpellSelectionManager;
        get player(): $Player;
        get level(): $Level;
        get registries(): $RegistryAccess;
        get server(): $MinecraftServer;
        get entity(): $LivingEntity;
    }
    export class $SpellPreCastEventJS extends $Event implements $KubeEntityEvent, $ICancellableEvent {
        /**
         * Returns the new spell level of the spell that was cast.
         */
        getSpellLevel(): number;
        /**
         * Returns the cast source.
         */
        getCastSource(): $CastSource;
        /**
         * Returns the spell ID of the spell that was cast.
         */
        getSpellId(): string;
        /**
         * Returns the school type of the spell that was cast.
         */
        getSchoolType(): $SchoolType;
        getLevel(): $Level;
        getPlayer(): $Player;
        isCanceled(): boolean;
        setCanceled(arg0: boolean): void;
        getRegistries(): $RegistryAccess;
        getServer(): $MinecraftServer;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        getEntity(): $Entity;
        constructor(arg0: $LivingEntity, arg1: string, arg2: number, arg3: $SchoolType_, arg4: $CastSource_);
        get spellLevel(): number;
        get castSource(): $CastSource;
        get spellId(): string;
        get schoolType(): $SchoolType;
        get level(): $Level;
        get player(): $Player;
        get registries(): $RegistryAccess;
        get server(): $MinecraftServer;
        get entity(): $Entity;
    }
    export class $SpellPostCastEventJS implements $KubeEntityEvent {
        getLevel(): $Level;
        getMagicData(): $MagicData;
        getEntity(): $Entity;
        getSpellLevel(): number;
        getSpell(): $AbstractSpell;
        getPlayer(): $Player;
        getRegistries(): $RegistryAccess;
        getServer(): $MinecraftServer;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        constructor(arg0: $LivingEntity, arg1: $AbstractSpell_, arg2: number, arg3: $MagicData);
        get level(): $Level;
        get magicData(): $MagicData;
        get entity(): $Entity;
        get spellLevel(): number;
        get spell(): $AbstractSpell;
        get player(): $Player;
        get registries(): $RegistryAccess;
        get server(): $MinecraftServer;
    }
    export class $ChangeManaEventJS implements $KubePlayerEvent {
        /**
         * Returns the player's current MagicData.
         */
        getMagicData(): $MagicData;
        /**
         * Returns the float mana value that the value was before it was changed.
         */
        getOldMana(): number;
        /**
         * Returns the float mana value that the value changed to after it was changed.
         */
        getNewMana(): number;
        /**
         * Changes the value that the mana will change to during the event.
         */
        setNewMana(arg0: number): void;
        getPlayer(): $Player;
        getLevel(): $Level;
        getRegistries(): $RegistryAccess;
        getServer(): $MinecraftServer;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        getEntity(): $LivingEntity;
        constructor(arg0: $ChangeManaEvent);
        get magicData(): $MagicData;
        get oldMana(): number;
        get player(): $Player;
        get level(): $Level;
        get registries(): $RegistryAccess;
        get server(): $MinecraftServer;
        get entity(): $LivingEntity;
    }
    export class $SpellOnCastEventJS implements $KubePlayerEvent {
        /**
         * Sets the new spell level of the spell that was cast.
         */
        setSpellLevel(arg0: number): void;
        /**
         * Sets the new mana cost.
         */
        setManaCost(arg0: number): void;
        /**
         * Returns the original mana cost.
         */
        getOriginalManaCost(): number;
        /**
         * Returns the original spell level of the spell that was cast.
         */
        getOriginalSpellLevel(): number;
        /**
         * Returns the player that cast the spell.
         */
        getEntity(): $Player;
        /**
         * Returns the new spell level of the spell that was cast.
         */
        getSpellLevel(): number;
        /**
         * Returns the cast source.
         */
        getCastSource(): $CastSource;
        /**
         * Returns the new mana cost.
         */
        getManaCost(): number;
        /**
         * Returns the spell ID of the spell that was cast.
         */
        getSpellId(): string;
        /**
         * Returns the school type of the spell that was cast.
         */
        getSchoolType(): $SchoolType;
        getPlayer(): $Player;
        getLevel(): $Level;
        getRegistries(): $RegistryAccess;
        getServer(): $MinecraftServer;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        constructor(arg0: $SpellOnCastEvent);
        get originalManaCost(): number;
        get originalSpellLevel(): number;
        get entity(): $Player;
        get castSource(): $CastSource;
        get spellId(): string;
        get schoolType(): $SchoolType;
        get player(): $Player;
        get level(): $Level;
        get registries(): $RegistryAccess;
        get server(): $MinecraftServer;
    }
}
