import { $IngredientComponent } from "@package/org/cyclops/commoncapabilities/api/ingredient";
import { $Iterator } from "@package/java/util";
import { $Iterable } from "@package/java/lang";
import { $ICapabilityGetter } from "@package/org/cyclops/commoncapabilities/api/ingredient/capability";

declare module "@package/org/cyclops/commoncapabilities/api/ingredient/storage" {
    export class $IIngredientComponentStorage<T, M> {
        [Symbol.iterator](): Iterator<T>
    }
    export interface $IIngredientComponentStorage<T, M> extends $Iterable<T> {
        extract(arg0: number, arg1: boolean): T;
        extract(arg0: T, arg1: M, arg2: boolean): T;
        insert(arg0: T, arg1: boolean): T;
        iterator(): $Iterator<T>;
        iterator(arg0: T, arg1: M): $Iterator<T>;
        getComponent(): $IngredientComponent<T, M>;
        getMaxQuantity(): number;
        [Symbol.iterator](): Iterator<T>
        get component(): $IngredientComponent<T, M>;
        get maxQuantity(): number;
    }
    export class $IIngredientComponentStorageWrapperHandler<T, M, S, C> {
    }
    export interface $IIngredientComponentStorageWrapperHandler<T, M, S, C> {
        getComponent(): $IngredientComponent<T, M>;
        wrapStorage(arg0: $IIngredientComponentStorage<T, M>): S;
        getStorage(arg0: $ICapabilityGetter<C>, arg1: C): (S) | undefined;
        wrapComponentStorage(arg0: S): $IIngredientComponentStorage<T, M>;
        getComponentStorage(arg0: $ICapabilityGetter<C>, arg1: C): $IIngredientComponentStorage<T, M>;
        get component(): $IngredientComponent<T, M>;
    }
}
