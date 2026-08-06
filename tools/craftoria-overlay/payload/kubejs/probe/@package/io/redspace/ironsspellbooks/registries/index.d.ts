import { $UpgradeOrbType_, $UpgradeOrbType } from "@package/io/redspace/ironsspellbooks/item/armor";
import { $DataPackRegistryEvent$NewRegistry, $DeferredHolder, $DeferredRegister } from "@package/net/neoforged/neoforge/registries";
import { $RegisterBrewingRecipesEvent } from "@package/net/neoforged/neoforge/event/brewing";
import { $BootstrapContext } from "@package/net/minecraft/data/worldgen";
import { $Holder, $RegistryAccess, $Registry } from "@package/net/minecraft/core";
import { $Codec } from "@package/com/mojang/serialization";
import { $IEventBus } from "@package/net/neoforged/bus/api";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $Potion } from "@package/net/minecraft/world/item/alchemy";
import { $ResourceKey } from "@package/net/minecraft/resources";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/io/redspace/ironsspellbooks/registries" {
    export class $PotionRegistry {
        static register(arg0: $IEventBus): void;
        static addRecipes(arg0: $RegisterBrewingRecipesEvent): void;
        static POTIONS: $DeferredRegister<$Potion>;
        static INSTANT_MANA_ONE: $DeferredHolder<$Potion, $Potion>;
        static INSTANT_MANA_TWO: $DeferredHolder<$Potion, $Potion>;
        static INSTANT_MANA_FOUR: $DeferredHolder<$Potion, $Potion>;
        static INSTANT_MANA_THREE: $DeferredHolder<$Potion, $Potion>;
        constructor();
    }
    export class $UpgradeOrbTypeRegistry {
        static bootstrap(arg0: $BootstrapContext<$UpgradeOrbType_>): void;
        static upgradeTypeRegistry(arg0: $RegistryAccess): $Registry<$UpgradeOrbType>;
        static registerDatapackRegistries(arg0: $DataPackRegistryEvent$NewRegistry): void;
        static UPGRADE_ORB_REGISTRY_STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $Holder<$UpgradeOrbType>>;
        static UPGRADE_ORB_REGISTRY_KEY: $ResourceKey<$Registry<$UpgradeOrbType>>;
        static ENDER_SPELL_POWER: $ResourceKey<$UpgradeOrbType>;
        static MANA: $ResourceKey<$UpgradeOrbType>;
        static ATTACK_SPEED: $ResourceKey<$UpgradeOrbType>;
        static EVOCATION_SPELL_POWER: $ResourceKey<$UpgradeOrbType>;
        static FIRE_SPELL_POWER: $ResourceKey<$UpgradeOrbType>;
        static BLOOD_SPELL_POWER: $ResourceKey<$UpgradeOrbType>;
        static LIGHTNING_SPELL_POWER: $ResourceKey<$UpgradeOrbType>;
        static NATURE_SPELL_POWER: $ResourceKey<$UpgradeOrbType>;
        static COOLDOWN: $ResourceKey<$UpgradeOrbType>;
        static SPELL_RESISTANCE: $ResourceKey<$UpgradeOrbType>;
        static HOLY_SPELL_POWER: $ResourceKey<$UpgradeOrbType>;
        static ATTACK_DAMAGE: $ResourceKey<$UpgradeOrbType>;
        static UPGRADE_ORB_REGISTRY_CODEC: $Codec<$Holder<$UpgradeOrbType>>;
        static ICE_SPELL_POWER: $ResourceKey<$UpgradeOrbType>;
        static HEALTH: $ResourceKey<$UpgradeOrbType>;
        constructor();
    }
}
