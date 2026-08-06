import { $IMixinClientLanguage as $IMixinClientLanguage$1 } from "@package/de/keksuccino/fancymenu/mixin/mixins/common/client";
import { $Codec } from "@package/com/mojang/serialization";
import { $ProfilerFiller } from "@package/net/minecraft/util/profiling";
import { $Component, $FormattedText } from "@package/net/minecraft/network/chat";
import { $CompletableFuture, $Executor_ } from "@package/java/util/concurrent";
import { $Language } from "@package/net/minecraft/locale";
import { $IMixinClientLanguage } from "@package/de/keksuccino/konkrete/mixin/mixins/client";
import { $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $ResourceManager, $ResourceManagerReloadListener, $PreparableReloadListener$PreparationBarrier_ } from "@package/net/minecraft/server/packs/resources";
import { $SortedMap, $List_, $Locale, $Map } from "@package/java/util";
import { $FormattedCharSequence } from "@package/net/minecraft/util";
import { $Consumer_ } from "@package/java/util/function";
import { $Object, $Record } from "@package/java/lang";

declare module "@package/net/minecraft/client/resources/language" {
    export class $I18n {
        /**
         * Translates the given string and then formats it. Equivalent to `String.format(translate(key), parameters)`.
         */
        static get(translateKey: string, ...parameters: $Object[]): string;
        static exists(key: string): boolean;
    }
    export class $LanguageManager implements $ResourceManagerReloadListener {
        getLanguage(code: string): $LanguageInfo;
        onResourceManagerReload(resourceManager: $ResourceManager): void;
        getSelected(): string;
        setSelected(selected: string): void;
        getJavaLocale(): $Locale;
        getLanguages(): $SortedMap<string, $LanguageInfo>;
        reload(preparationBarrier: $PreparableReloadListener$PreparationBarrier_, resourceManager: $ResourceManager, preparationsProfiler: $ProfilerFiller, reloadProfiler: $ProfilerFiller, backgroundExecutor: $Executor_, gameExecutor: $Executor_): $CompletableFuture<void>;
        getName(): string;
        constructor(currentCode: string, reloadFallback: $Consumer_<$ClientLanguage>);
        get javaLocale(): $Locale;
        get languages(): $SortedMap<string, $LanguageInfo>;
        get name(): string;
    }
    export class $ClientLanguage extends $Language implements $IMixinClientLanguage, $IMixinClientLanguage$1 {
        static loadFrom(resourceManager: $ResourceManager, filenames: $List_<string>, defaultRightToLeft: boolean): $ClientLanguage;
        handler$dbg000$bookshelf$getOrDefault(arg0: string, arg1: string, arg2: $CallbackInfoReturnable<any>): void;
        handler$dbg000$bookshelf$has(arg0: string, arg1: $CallbackInfoReturnable<any>): void;
        getStorageKonkrete(): $Map<string, string>;
        getStorageFancyMenu(): $Map<string, string>;
        storage: $Map<string, string>;
        static DEFAULT: string;
        get storageKonkrete(): $Map<string, string>;
        get storageFancyMenu(): $Map<string, string>;
    }
    export class $FormattedBidiReorder {
        static reorder(text: $FormattedText, defaultRightToLeft: boolean): $FormattedCharSequence;
        constructor();
    }
    export class $LanguageInfo extends $Record {
        name(): string;
        region(): string;
        toComponent(): $Component;
        bidirectional(): boolean;
        static CODEC: $Codec<$LanguageInfo>;
        constructor(arg0: string, arg1: string, arg2: boolean);
    }
    /**
     * Values that may be interpreted as {@link $LanguageInfo}.
     */
    export type $LanguageInfo_ = { region?: string, name?: string, bidirectional?: boolean,  } | [region?: string, name?: string, bidirectional?: boolean, ];
}
