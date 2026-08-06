import { $HolderLookup$Provider } from "@package/net/minecraft/core";
import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $ItemStack, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $CastSource, $ICastData, $ICastData_, $CastType, $CastSource_, $SpellData, $AbstractSpell_ } from "@package/io/redspace/ironsspellbooks/api/spells";
import { $LivingEntity } from "@package/net/minecraft/world/entity";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $List } from "@package/java/util";
import { $SyncedSpellData, $PlayerCooldowns, $PlayerRecasts } from "@package/io/redspace/ironsspellbooks/capabilities/magic";
import { $PlayerEvent } from "@package/net/neoforged/neoforge/event/entity/player";
import { $SpellSelection } from "@package/io/redspace/ironsspellbooks/gui/overlays";

declare module "@package/io/redspace/ironsspellbooks/api/magic" {
    export class $MagicData {
        loadNBTData(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        handleCastDuration(): void;
        resetCastingState(): void;
        saveNBTData(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        getSyncedData(): $SyncedSpellData;
        getCastingSpell(): $SpellData;
        setSyncedData(arg0: $SyncedSpellData): void;
        getCastingSpellId(): string;
        initiateCast(arg0: $AbstractSpell_, arg1: number, arg2: number, arg3: $CastSource_, arg4: string): void;
        getCastingSpellLevel(): number;
        getCastDurationRemaining(): number;
        setAdditionalCastData(arg0: $ICastData_): void;
        getCastCompletionPercent(): number;
        getCastSource(): $CastSource;
        getPlayerCooldowns(): $PlayerCooldowns;
        getPlayerRecasts(): $PlayerRecasts;
        getCastType(): $CastType;
        getMana(): number;
        setMana(arg0: number): void;
        setPlayerCastingItem(arg0: $ItemStack_): void;
        getAdditionalCastData(): $ICastData;
        markPoisoned(): void;
        static getPlayerMagicData(arg0: $LivingEntity): $MagicData;
        getPlayerCastingItem(): $ItemStack;
        resetAdditionalCastData(): void;
        isCasting(): boolean;
        getCastingEquipmentSlot(): string;
        addMana(arg0: number): void;
        getCastDuration(): number;
        popMarkedPoison(): boolean;
        setPlayerRecasts(arg0: $PlayerRecasts): void;
        setServerPlayer(arg0: $ServerPlayer): void;
        static MANA: string;
        static COOLDOWNS: string;
        static RECASTS: string;
        constructor(arg0: $ServerPlayer);
        constructor();
        constructor(arg0: boolean);
        get castingSpell(): $SpellData;
        get castingSpellId(): string;
        get castingSpellLevel(): number;
        get castDurationRemaining(): number;
        get castCompletionPercent(): number;
        get castSource(): $CastSource;
        get playerCooldowns(): $PlayerCooldowns;
        get castType(): $CastType;
        get casting(): boolean;
        get castingEquipmentSlot(): string;
        get castDuration(): number;
        set serverPlayer(value: $ServerPlayer);
    }
    export class $SpellSelectionManager$SpellSelectionEvent extends $PlayerEvent {
        getManager(): $SpellSelectionManager;
        addSelectionOption(arg0: $SpellData, arg1: string, arg2: number): void;
        addSelectionOption(arg0: $SpellData, arg1: string, arg2: number, arg3: number): void;
        constructor(arg0: $Player, arg1: $SpellSelectionManager);
        get manager(): $SpellSelectionManager;
    }
    export class $SpellSelectionManager$SelectionOption {
        getCastSource(): $CastSource;
        globalIndex: number;
        spellData: $SpellData;
        slot: string;
        slotIndex: number;
        constructor(arg0: $SpellData, arg1: string, arg2: number, arg3: number);
        get castSource(): $CastSource;
    }
    export class $SpellSelectionManager {
        getSelectedSpellData(): $SpellData;
        getSpellData(arg0: number): $SpellData;
        getSelectionIndex(): number;
        getSpellSlot(arg0: number): $SpellSelectionManager$SelectionOption;
        getSelection(): $SpellSelectionManager$SelectionOption;
        getAllSpells(): $List<$SpellSelectionManager$SelectionOption>;
        getSpellCount(): number;
        makeSelection(arg0: number): void;
        getCurrentSelection(): $SpellSelection;
        getSpellsForSlot(arg0: string): $List<$SpellSelectionManager$SelectionOption>;
        getGlobalSelectionIndex(): number;
        getSpellForSlot(arg0: string, arg1: number): $SpellData;
        static OFFHAND: string;
        static MAINHAND: string;
        constructor(arg0: $Player);
        get selectedSpellData(): $SpellData;
        get selectionIndex(): number;
        get selection(): $SpellSelectionManager$SelectionOption;
        get allSpells(): $List<$SpellSelectionManager$SelectionOption>;
        get spellCount(): number;
        get currentSelection(): $SpellSelection;
        get globalSelectionIndex(): number;
    }
}
