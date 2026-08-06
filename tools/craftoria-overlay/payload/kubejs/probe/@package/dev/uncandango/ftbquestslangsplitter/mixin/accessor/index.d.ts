import { $TranslationTable } from "@package/dev/ftb/mods/ftbquests/quest/translation";
import { $ListTag } from "@package/net/minecraft/nbt";
import { $Either } from "@package/com/mojang/datafixers/util";
import { $List_, $Map_, $Map, $List } from "@package/java/util";

declare module "@package/dev/uncandango/ftbquestslangsplitter/mixin/accessor" {
    export class $TranslationTableAccessor {
        static langsplitter$listOfStr(arg0: $List_<string>): $ListTag;
    }
    export interface $TranslationTableAccessor {
        langsplitter$setSaveNeeded(arg0: boolean): void;
        langsplitter$getMap(): $Map<string, $Either<string, $List<string>>>;
        langsplitter$isSaveNeeded(): boolean;
    }
    export class $TranslationManagerAccessor {
    }
    export interface $TranslationManagerAccessor {
        langsplitter$getMap(): $Map<string, $TranslationTable>;
    }
    /**
     * Values that may be interpreted as {@link $TranslationManagerAccessor}.
     */
    export type $TranslationManagerAccessor_ = (() => $Map_<string, $TranslationTable>);
}
