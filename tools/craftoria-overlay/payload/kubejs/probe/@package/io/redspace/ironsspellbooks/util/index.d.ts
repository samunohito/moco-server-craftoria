import { $BiConsumer_ } from "@package/java/util/function";
import { $Holder_, $Holder } from "@package/net/minecraft/core";
import { $ItemStack_ } from "@package/net/minecraft/world/item";
import { $ItemAttributeModifiers$Entry_ } from "@package/net/minecraft/world/item/component";
import { $EquipmentSlot, $EquipmentSlot_ } from "@package/net/minecraft/world/entity";
import { $UpgradeData_ } from "@package/io/redspace/ironsspellbooks/api/item";
import { $ParticleOptions } from "@package/net/minecraft/core/particles";
import { $Attribute, $AttributeModifier, $AttributeModifier$Operation_ } from "@package/net/minecraft/world/entity/ai/attributes";
import { $UUID, $List_, $Map } from "@package/java/util";

declare module "@package/io/redspace/ironsspellbooks/util" {
    export class $ParticleHelper {
        static SUNBEAM: $ParticleOptions;
        static BLOOD_GROUND: $ParticleOptions;
        static ROOT_FOG: $ParticleOptions;
        static SNOW_DUST: $ParticleOptions;
        static WISP: $ParticleOptions;
        static FOG_CAMPFIRE_SMOKE: $ParticleOptions;
        static PORTAL_FRAME: $ParticleOptions;
        static UNSTABLE_ENDER: $ParticleOptions;
        static ICY_FOG: $ParticleOptions;
        static FIERY_SMOKE: $ParticleOptions;
        static ENDER_SPARKS: $ParticleOptions;
        static POISON_CLOUD: $ParticleOptions;
        static FIRE: $ParticleOptions;
        static CLEANSE_PARTICLE: $ParticleOptions;
        static BLOOD: $ParticleOptions;
        static FOG: $ParticleOptions;
        static COMET_FOG: $ParticleOptions;
        static SIPHON: $ParticleOptions;
        static ACID: $ParticleOptions;
        static FOG_THUNDER_DARK: $ParticleOptions;
        static FIERY_SPARKS: $ParticleOptions;
        static FIRE_EMITTER: $ParticleOptions;
        static ACID_BUBBLE: $ParticleOptions;
        static VOID_TENTACLE_FOG: $ParticleOptions;
        static FOG_THUNDER_LIGHT: $ParticleOptions;
        static FIREFLY: $ParticleOptions;
        static EMBERS: $ParticleOptions;
        static SNOWFLAKE: $ParticleOptions;
        static ELECTRICITY: $ParticleOptions;
        static ELECTRIC_SPARKS: $ParticleOptions;
        constructor();
    }
    export class $UpgradeUtils {
        static handleAttributeEvent(arg0: $List_<$ItemAttributeModifiers$Entry_>, arg1: $UpgradeData_, arg2: $BiConsumer_<$Holder<$Attribute>, $AttributeModifier>, arg3: $BiConsumer_<$Holder<$Attribute>, $AttributeModifier>, arg4: string): void;
        static getRelevantEquipmentSlot(arg0: $ItemStack_): string;
        static UUIDForSlot(arg0: $EquipmentSlot_): $UUID;
        static collectAndRemovePreexistingAttribute(arg0: $List_<$ItemAttributeModifiers$Entry_>, arg1: $Holder_<$Attribute>, arg2: $AttributeModifier$Operation_, arg3: $BiConsumer_<$Holder<$Attribute>, $AttributeModifier>): number;
        static UPGRADE_UUIDS_BY_SLOT: $Map<$EquipmentSlot, $UUID>;
        constructor();
    }
}
