import { $Function } from "@package/java/util/function";
import { $ItemStack } from "@package/net/minecraft/world/item";
import { RegistryTypes, RegistryMarked } from "@special/types";
import { $LivingEntity } from "@package/net/minecraft/world/entity";
import { $List } from "@package/java/util";
import { $AbilityReference } from "@package/it/hurts/sskirillss/relics/system/casts/abilities";

declare module "@package/it/hurts/sskirillss/relics/items/relics/base/data/cast/containers/base" {
    export interface $RelicContainer extends RegistryMarked<RegistryTypes.RelicsRelicContainersTag, RegistryTypes.RelicsRelicContainers> {}
    export class $RelicContainer {
        /**
         * @deprecated
         */
        gatherAbilities(): $Function<$LivingEntity, $List<$AbilityReference>>;
        gatherRelics(): $Function<$LivingEntity, $List<$ItemStack>>;
        constructor();
    }
    /**
     * Values that may be interpreted as {@link $RelicContainer}.
     */
    export type $RelicContainer_ = RegistryTypes.RelicsRelicContainers;
}
