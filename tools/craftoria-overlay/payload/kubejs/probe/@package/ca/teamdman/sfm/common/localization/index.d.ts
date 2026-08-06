import { $Supplier, $Supplier_ } from "@package/java/util/function";
import { $MutableComponent } from "@package/net/minecraft/network/chat";
import { $Object, $Record } from "@package/java/lang";
import { $TranslatableContents } from "@package/net/minecraft/network/chat/contents";

declare module "@package/ca/teamdman/sfm/common/localization" {
    export class $LocalizationEntry extends $Record {
        get(): $TranslatableContents;
        get(...arg0: $Object[]): $TranslatableContents;
        value(): $Supplier<string>;
        key(): $Supplier<string>;
        getString(): string;
        getString(...arg0: $Object[]): string;
        getStub(): string;
        getComponent(): $MutableComponent;
        getComponent(...arg0: $Object[]): $MutableComponent;
        constructor(arg0: string, arg1: string);
        constructor(key: $Supplier_<string>, value: $Supplier_<string>);
        get stub(): string;
    }
    /**
     * Values that may be interpreted as {@link $LocalizationEntry}.
     */
    export type $LocalizationEntry_ = { key?: $Supplier_<string>, value?: $Supplier_<string>,  } | [key?: $Supplier_<string>, value?: $Supplier_<string>, ];
}
