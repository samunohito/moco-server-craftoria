import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $ExcludeListMode } from "@package/xaero/hud/category/rule";
import { $ListFactory, $MapFactory } from "@package/xaero/common/misc";
import { $Iterator, $Map$Entry } from "@package/java/util";
import { $Object } from "@package/java/lang";

declare module "@package/xaero/hud/category/serialization/data" {
    export class $ObjectCategoryDataSerializer<D extends $ObjectCategoryData<D>, S> {
        serialize(arg0: D): S;
        deserialize(arg0: S): D;
    }
    export class $ObjectCategoryDataNbtSerializer<D extends $ObjectCategoryData<D>, DB extends $ObjectCategoryData$Builder<D, DB>> extends $ObjectCategoryDataSerializer<D, $CompoundTag> {
        deserialize(arg0: $CompoundTag_): D;
    }
    export class $FilterObjectCategoryData<D extends $FilterObjectCategoryData<D>> extends $ObjectCategoryData<D> {
        getHardInclude(): string;
        getExcludeMode(): $ExcludeListMode;
        getIncludeListInSuperCategory(): boolean;
        getExcludeListIterator(): $Iterator<string>;
        getIncludeListIterator(): $Iterator<string>;
        get hardInclude(): string;
        get excludeMode(): $ExcludeListMode;
        get includeListInSuperCategory(): boolean;
        get excludeListIterator(): $Iterator<string>;
        get includeListIterator(): $Iterator<string>;
    }
    export class $FilterObjectCategoryData$Builder<D extends $FilterObjectCategoryData<D>, B extends $FilterObjectCategoryData$Builder<D, B>> extends $ObjectCategoryData$Builder<D, B> {
        build(): D;
        addToIncludeList(arg0: string): B;
        setExcludeMode(arg0: $ExcludeListMode): void;
        addToExcludeList(arg0: string): B;
        setHardInclude(arg0: string): void;
        setIncludeListInSuperCategory(arg0: boolean): B;
        constructor(arg0: $ListFactory, arg1: $MapFactory);
        set excludeMode(value: $ExcludeListMode);
        set hardInclude(value: string);
        set includeListInSuperCategory(value: boolean);
    }
    export class $ObjectCategoryData<D extends $ObjectCategoryData<D>> {
        getName(): string;
        getProtection(): boolean;
        getSubCategoryIterator(): $Iterator<D>;
        getSettingOverrideIterator(): $Iterator<$Map$Entry<string, $Object>>;
        get name(): string;
        get protection(): boolean;
        get subCategoryIterator(): $Iterator<D>;
        get settingOverrideIterator(): $Iterator<$Map$Entry<string, $Object>>;
    }
    export class $ObjectCategoryDataGsonSerializer<D extends $ObjectCategoryData<D>> extends $ObjectCategoryDataSerializer<D, string> {
        deserialize(arg0: string): D;
    }
}
