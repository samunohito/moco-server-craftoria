import { $NameMap } from "@package/dev/ftb/mods/ftblibrary/config";
import { $TranslationManagerAccessor, $TranslationTableAccessor } from "@package/dev/uncandango/ftbquestslangsplitter/mixin/accessor";
import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $Either } from "@package/com/mojang/datafixers/util";
import { $ListTag, $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Path_ } from "@package/java/nio/file";
import { $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $Enum } from "@package/java/lang";
import { $List, $List_, $Map } from "@package/java/util";
import { $BaseQuestFile, $QuestObjectBase } from "@package/dev/ftb/mods/ftbquests/quest";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/dev/ftb/mods/ftbquests/quest/translation" {
    export class $TranslationKey extends $Enum<$TranslationKey> {
        getName(): string;
        static values(): $TranslationKey[];
        static valueOf(name: string): $TranslationKey;
        validate(either: $Either<string, $List_<string>>): $Either<string, $List<string>>;
        getTranslationKey(): string;
        isListVal(): boolean;
        static QUEST_DESC: $TranslationKey;
        static NAME_MAP: $NameMap<$TranslationKey>;
        static TITLE: $TranslationKey;
        static QUEST_SUBTITLE: $TranslationKey;
        static CHAPTER_SUBTITLE: $TranslationKey;
        get translationKey(): string;
        get listVal(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $TranslationKey}.
     */
    export type $TranslationKey_ = "title" | "quest_subtitle" | "quest_desc" | "chapter_subtitle";
    export class $TranslationTable implements $TranslationTableAccessor {
        remove(key: string): void;
        size(): number;
        put(key: string, message: $List_<string>): void;
        put(key: string, message: string): void;
        contains(key: string): boolean;
        static fromNBT(tag: $CompoundTag_): $TranslationTable;
        saveToNBT(): $CompoundTag;
        getStringTranslation(key: string): (string) | undefined;
        getStringListTranslation(key: string): ($List<string>) | undefined;
        static langsplitter$listOfStr$ftbquestslangsplitter_$md$f87c94$0(arg0: $List_<any>): $ListTag;
        langsplitter$setSaveNeeded(arg0: boolean): void;
        langsplitter$getMap(): $Map<string, $Either<string, $List<string>>>;
        langsplitter$isSaveNeeded(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $TranslationTable>;
        constructor();
    }
    export class $TranslationManager implements $TranslationManagerAccessor {
        saveToNBT(langFolder: $Path_, force: boolean): void;
        static syncTable(player: $ServerPlayer, language: string): void;
        addTranslation(object: $QuestObjectBase, locale: string, subKey: $TranslationKey_, message: $List_<string>): void;
        addTranslation(object: $QuestObjectBase, locale: string, subKey: $TranslationKey_, message: string): void;
        loadFromNBT(arg0: $BaseQuestFile, arg1: $Path_): void;
        getStringTranslation(object: $QuestObjectBase, locale: string, subKey: $TranslationKey_): (string) | undefined;
        getStringListTranslation(object: $QuestObjectBase, locale: string, subKey: $TranslationKey_): ($List<string>) | undefined;
        removeAllTranslations(obj: $QuestObjectBase): void;
        sendTranslationsToPlayer(player: $ServerPlayer): void;
        syncTableFromServer(locale: string, table: $TranslationTable): void;
        processInitialTranslation(extra: $CompoundTag_, object: $QuestObjectBase): void;
        sendTableToPlayer(player: $ServerPlayer, locale: string): void;
        addInitialTranslation(extra: $CompoundTag_, locale: string, translationKey: $TranslationKey_, value: string): void;
        hasMissingTranslation(object: $QuestObjectBase, key: $TranslationKey_): boolean;
        langsplitter$getMap(): $Map<string, $TranslationTable>;
        static DEFAULT_FALLBACK_LOCALE: string;
        constructor();
    }
}
