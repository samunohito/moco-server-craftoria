import { $BiomeDensitySource } from "@package/twilightforest/world/components/layer";
import { $RecipeScaling } from "@package/de/dafuqs/spectrum/recipe";
import { $PackagePortTargetType } from "@package/com/simibubi/create/content/logistics/packagePort";
import { $AbstractSpell, $SchoolType } from "@package/io/redspace/ironsspellbooks/api/spells";
import { $IParticleMotionType } from "@package/com/hollingsworth/arsnouveau/api/particle/configurations";
import { $ItemPredicate_, $ItemCraftedKubeEvent, $ItemDroppedKubeEvent, $ItemDestroyedKubeEvent, $ItemPickedUpKubeEvent, $ItemSmeltedKubeEvent, $ItemEntityInteractedKubeEvent, $ItemClickedKubeEvent, $ModifyItemTooltipsKubeEvent, $FoodEatenKubeEvent } from "@package/dev/latvian/mods/kubejs/item";
import { $AEKeyType } from "@package/appeng/api/stacks";
import { $HeightProviderType } from "@package/net/minecraft/world/level/levelgen/heightproviders";
import { $Chemical } from "@package/mekanism/api/chemical";
import { $Trophy } from "@package/trofers/trophy";
import { $CustomConditionEventJS } from "@package/aztech/modern_industrialization/compat/kubejs/recipe";
import { $AbstractProcessor } from "@package/com/wdiscute/sellingbin/processors";
import { $StructurePlacementType } from "@package/net/minecraft/world/level/levelgen/structure/placement";
import { $IngredientType } from "@package/net/neoforged/neoforge/common/crafting";
import { PaintingVariant, JukeboxSong } from "@side-only/server/events/registry";
import { $FusionShrineRecipeWorldEffect } from "@package/de/dafuqs/spectrum/api/recipe";
import { $Enforcement, $Restriction } from "@package/twilightforest/util";
import { $ContraptionType } from "@package/com/simibubi/create/api/contraption";
import { $BlockStateProviderType } from "@package/net/minecraft/world/level/levelgen/feature/stateproviders";
import { $AstralGolemMaterial } from "@package/cn/leolezury/eternalstarlight/common/entity/living/npc/boarwarf/golem";
import { $WeaponTrait } from "@package/org/xiyu/spartanweaponryunofficial/api/trait";
import { $IRuleType } from "@package/tv/soaryn/xycraft/core/utils/rules";
import { $PlacedFeature, $PlacementModifierType } from "@package/net/minecraft/world/level/levelgen/placement";
import { $StructurePieceType } from "@package/net/minecraft/world/level/levelgen/structure/pieces";
import { $FishProperties } from "@package/com/wdiscute/starcatcher/registry";
import { $RecipeFunction$Type } from "@package/dan200/computercraft/shared/recipe/function";
import { $TravellersModifier } from "@package/twilightforest/item/travellers_gear/modifiers";
import { $FastNoiseConfig } from "@package/dev/worldgen/lithostitched/api/worldgen/densityfunction/fastnoise";
import { $AdvancementDrops, $EntityDrops } from "@package/trofers/data";
import { $BookType } from "@package/net/mehvahdjukaar/supplementaries/common/block/placeable_book";
import { $GameEvent, $PositionSourceType } from "@package/net/minecraft/world/level/gameevent";
import { $KindlingVariant, $LizardHornVariant, $LizardFrillVariant } from "@package/de/dafuqs/spectrum/entity/variants";
import { $RootPlacerType } from "@package/net/minecraft/world/level/levelgen/feature/rootplacers";
import { $PaintingVariant } from "@package/net/minecraft/world/entity/decoration";
import { $FluidIngredient_, $FluidIngredientType } from "@package/net/neoforged/neoforge/fluids/crafting";
import { $DataSyncSerializer } from "@package/earth/terrarium/common_storage_lib/data/sync";
import { $TurtleOverlay } from "@package/dan200/computercraft/shared/turtle";
import { $HolderSetType } from "@package/net/neoforged/neoforge/registries/holdersets";
import { $BlockEntityTickKubeEvent } from "@package/dev/latvian/mods/kubejs/block/entity";
import { $Fluid } from "@package/net/minecraft/world/level/material";
import { $SpawnerStat } from "@package/dev/shadowsoffire/apothic_spawners/stats";
import { $TagWrapper, $TagKubeEvent } from "@package/dev/latvian/mods/kubejs/server/tag";
import { $GetChunkOilAmountEventJS as $GetChunkOilAmountEventJS$1 } from "@package/com/jesz/createdieselgenerators/compat/kubejs";
import { $TemplateList } from "@package/dev/worldgen/lithostitched/worldgen/modifier/template";
import { $MagicPaintingVariant } from "@package/twilightforest/entity";
import { $ProgWidgetType } from "@package/me/desht/pneumaticcraft/api/drone";
import { $EntitySpawnedKubeEvent, $AfterLivingEntityHurtKubeEvent, $LivingEntityDeathKubeEvent, $CheckLivingEntitySpawnKubeEvent, $LivingEntityDropsKubeEvent, $BeforeLivingEntityHurtKubeEvent } from "@package/dev/latvian/mods/kubejs/entity";
import { $ItemSubPredicate$Type } from "@package/net/minecraft/advancements/critereon";
import { $LevelSystemBase } from "@package/tv/soaryn/xycraft/core/content/systems";
import { $LootNbtProviderType } from "@package/net/minecraft/world/level/storage/loot/providers/nbt";
import { $EntityDataSerializer } from "@package/net/minecraft/network/syncher";
import { $LootCategory } from "@package/dev/shadowsoffire/apotheosis/loot";
import { $BiomeLayerType, $BiomeLayerFactory } from "@package/twilightforest/world/components/layer/vanillalegacy";
import { $AddEntriesKubeEvent, $RegisterSubtypesKubeEvent, $RemoveEntriesKubeEvent, $AddInformationKubeEvent, $RemoveRecipesKubeEvent, $GroupEntriesKubeEvent } from "@package/dev/latvian/mods/kubejs/recipe/viewer";
import { $LootItemConditionType } from "@package/net/minecraft/world/level/storage/loot/predicates";
import { $PastelUpgradeSignature } from "@package/de/dafuqs/spectrum/api/pastel_network";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
import { $DamageType } from "@package/net/minecraft/world/damagesource";
import { $EntityFunctionEntry } from "@package/lv/id/bonne/animalpen/processing/function/wrapper";
import { $StructureTemplatePool, $StructurePoolElementType } from "@package/net/minecraft/world/level/levelgen/structure/pools";
import { $RecipeSerializer, $RecipeType } from "@package/net/minecraft/world/item/crafting";
import { $WorldPreset } from "@package/net/minecraft/world/level/levelgen/presets";
import { $ExplosionKubeEvent$Before, $SimpleLevelKubeEvent, $ExplosionKubeEvent$After } from "@package/dev/latvian/mods/kubejs/level";
import { $CriterionTrigger } from "@package/net/minecraft/advancements";
import { $AfterEventJS, $BeforeEventJS } from "@package/dev/ftb/mods/ftbxmodcompat/neoforge/ftbchunks/kubejs";
import { $SoundEvent } from "@package/net/minecraft/sounds";
import { $Feature, $ConfiguredFeature } from "@package/net/minecraft/world/level/levelgen/feature";
import { $TrimPattern, $TrimMaterial } from "@package/net/minecraft/world/item/armortrim";
import { $ModuleData } from "@package/mekanism/api/gear";
import { $LootScoreProviderType } from "@package/net/minecraft/world/level/storage/loot/providers/score";
import { $BiomeData } from "@package/cn/leolezury/eternalstarlight/common/world/gen/biome";
import { $MultiNoiseBiomeSourceParameterList, $Biome } from "@package/net/minecraft/world/level/biome";
import { $TemplateMarkerHandler, $TemplateMarkerHandlerType } from "@package/twilightforest/world/components/structures/markerhandler";
import { $UpgradeOrbType } from "@package/io/redspace/ironsspellbooks/item/armor";
import { $CompostableRecipesKubeEvent, $ModifyCraftingItemKubeEvent, $AfterRecipesLoadedKubeEvent, $RecipesKubeEvent } from "@package/dev/latvian/mods/kubejs/recipe";
import { $SeedsLauncherAmmoType } from "@package/cn/leolezury/eternalstarlight/common/item/combat";
import { $InkColor } from "@package/de/dafuqs/spectrum/api/energy/color";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $ITextEditAction } from "@package/ca/teamdman/sfm/client/text_editor/action";
import { $Region } from "@package/dev/worldgen/lithostitched/impl/worldgen/biomeinjector/region";
import { $FoliagePlacerType } from "@package/net/minecraft/world/level/levelgen/feature/foliageplacers";
import { $ChestKubeEvent, $PlayerClonedKubeEvent, $StageChangedEvent, $SimplePlayerKubeEvent, $PlayerAdvancementKubeEvent, $PlayerRespawnedKubeEvent, $PlayerChatReceivedKubeEvent, $InventoryChangedKubeEvent, $InventoryKubeEvent } from "@package/dev/latvian/mods/kubejs/player";
import { $UpgradeType } from "@package/dan200/computercraft/api/upgrades";
import { $EntityEquipmentSlot, $EntitySlotGroup } from "@package/dev/shadowsoffire/apothic_attributes/modifiers";
import { $AuxBlueprintData$Type } from "@package/xfacthd/framedblocks/api/blueprint";
import { $MapDecorationType } from "@package/net/minecraft/world/level/saveddata/maps";
import { $RelicContainer } from "@package/it/hurts/sskirillss/relics/items/relics/base/data/cast/containers/base";
import { $SoftFluid } from "@package/net/mehvahdjukaar/moonlight/api/fluids";
import { $DensityFunction, $SurfaceRules$RuleSource, $NoiseGeneratorSettings } from "@package/net/minecraft/world/level/levelgen";
import { $CommandRegistryKubeEvent } from "@package/dev/latvian/mods/kubejs/command";
import { $FeatureSizeType } from "@package/net/minecraft/world/level/levelgen/feature/featuresize";
import { $TreeDecoratorType } from "@package/net/minecraft/world/level/levelgen/feature/treedecorators";
import { $SFMBlockCapabilityProvider } from "@package/ca/teamdman/sfm/common/capability";
import { $BlockDropsKubeEvent, $BlockPlacedKubeEvent, $BlockRightClickedKubeEvent, $BlockPickedKubeEvent, $DetectorBlockKubeEvent, $RandomTickKubeEvent, $FarmlandTrampledKubeEvent, $BlockStoppedFallingKubeEvent, $BlockBrokenKubeEvent, $BlockLeftClickedKubeEvent, $BlockStartedFallingKubeEvent } from "@package/dev/latvian/mods/kubejs/block";
import { $RecipeResultType } from "@package/com/klikli_dev/theurgy/content/recipe/result";
import { $AbstractFishRestriction } from "@package/com/wdiscute/starcatcher/registry/fishrestrictions";
import { $RobitSkin } from "@package/mekanism/api/robit";
import { $WorldgenModifier } from "@package/dev/worldgen/lithostitched/api/worldgen/modifier";
import { $SpiritJobFactory } from "@package/com/klikli_dev/occultism/common/entity/job";
import { $Potion } from "@package/net/minecraft/world/item/alchemy";
import { $EnchantmentProvider } from "@package/net/minecraft/world/item/enchantment/providers";
import { $IngredientComponent } from "@package/org/cyclops/commoncapabilities/api/ingredient";
import { $BiomeInjector } from "@package/dev/worldgen/lithostitched/api/worldgen/biomeinjector";
import { $SensorType } from "@package/net/minecraft/world/entity/ai/sensing";
import { $EntityType } from "@package/net/minecraft/world/entity";
import { $IPocketUpgrade } from "@package/dan200/computercraft/api/pocket";
import { $BoarwarfType } from "@package/cn/leolezury/eternalstarlight/common/entity/living/npc/boarwarf";
import { $ParticleType } from "@package/net/minecraft/core/particles";
import { $IStageType } from "@package/tv/soaryn/xycraft/core/content/stages";
import { $Schedule, $Activity } from "@package/net/minecraft/world/entity/schedule";
import { $ResonanceProcessor } from "@package/de/dafuqs/spectrum/api/interaction";
import { $CatVariant, $FrogVariant, $WolfVariant } from "@package/net/minecraft/world/entity/animal";
import { $AttachmentType } from "@package/net/neoforged/neoforge/attachment";
import { $WorldCarver, $ConfiguredWorldCarver } from "@package/net/minecraft/world/level/levelgen/carver";
import { $StructureType, $Structure, $StructureSet } from "@package/net/minecraft/world/level/levelgen/structure";
import { $KubeDataGenerator } from "@package/dev/latvian/mods/kubejs/generator";
import { $ChatType } from "@package/net/minecraft/network/chat";
import { $MobEffect } from "@package/net/minecraft/world/effect";
import { $ISFMTextEditorRegistration } from "@package/ca/teamdman/sfm/client/text_editor";
import { $BlockPredicateType } from "@package/net/minecraft/world/level/levelgen/blockpredicates";
import { $SpellOnCastEventJS, $SpellPostCastEventJS, $SpellPreCastEventJS, $ChangeManaEventJS } from "@package/com/squoshi/irons_spells_js/event";
import { $ShimmerLacewingVariant, $EntVariant } from "@package/cn/leolezury/eternalstarlight/common/entity/living/animal";
import { $DimensionType } from "@package/net/minecraft/world/level/dimension";
import { $IPlayerMatcher$MatcherType } from "@package/me/desht/pneumaticcraft/api/misc";
import { $StatType } from "@package/net/minecraft/stats";
import { $RuleBlockEntityModifierType } from "@package/net/minecraft/world/level/levelgen/structure/templatesystem/rule/blockentity";
import { $DwarfRabbitVariant, $TinyBirdVariant } from "@package/twilightforest/entity/passive";
import { $NormalNoise$NoiseParameters } from "@package/net/minecraft/world/level/levelgen/synth";
import { $SeekerVariant } from "@package/cn/leolezury/eternalstarlight/common/entity/living/monster";
import { $LootPoolEntryType } from "@package/net/minecraft/world/level/storage/loot/entries";
import { $IMatterType } from "@package/com/buuz135/replication/api";
import { $Attribute } from "@package/net/minecraft/world/entity/ai/attributes";
import { $NetworkKubeEvent } from "@package/dev/latvian/mods/kubejs/net";
import { $Filter, $ColorPalette, $Lens } from "@package/io/github/mortuusars/exposure/data";
import { $CustomFilterKubeEvent } from "@package/dev/ftb/mods/ftbxmodcompat/neoforge/ftbfiltersystem/kubejs";
import { $RoomTemplate } from "@package/dev/compactmods/machines/api/room/template";
import { $Enchantment } from "@package/net/minecraft/world/item/enchantment";
import { $LootModificationEventJS, $LootTableEventJS } from "@package/com/almostreliable/lootjs/kube";
import { $FuelType } from "@package/com/jesz/createdieselgenerators/fuel_type";
import { $RecipeMappingRegistry, $RecipeSchemaRegistry } from "@package/dev/latvian/mods/kubejs/recipe/schema";
import { $Level } from "@package/net/minecraft/world/level";
import { $ChunkBlanketProcessor, $ChunkBlanketType } from "@package/twilightforest/world/components/chunkblanketing";
import { $MaterialDefinition, $PatternDefinition, $JewelryType, $PartDefinition } from "@package/io/redspace/ironsjewelry/core/data";
import { $PlayerTeamKubeEvent } from "@package/dev/ftb/mods/ftbxmodcompat/neoforge/ftbteams/kubejs";
import { $PaintbrushPalette } from "@package/com/kekecreations/arts_and_crafts/common/item/palette";
import { $ArmInteractionPointType } from "@package/com/simibubi/create/content/kinetics/mechanicalArm";
import { $BonusType } from "@package/io/redspace/ironsjewelry/core/bonuses";
import { $StructureSpeleothemConfig } from "@package/twilightforest/world/components/structures";
import { $ResourceLocation_, $ResourceKey_ } from "@package/net/minecraft/resources";
import { $AbstractBadge } from "@package/it/hurts/sskirillss/relics/badges/base";
import { $HarvestHandler, $HoeHandler } from "@package/me/desht/pneumaticcraft/api/harvesting";
import { $RecipeResultType as $RecipeResultType$1 } from "@package/com/klikli_dev/occultism/crafting/recipe/result";
import { $ItemAttributeType } from "@package/com/simibubi/create/content/logistics/item/filter/attribute";
import { $StructureModifier, $BiomeModifier } from "@package/net/neoforged/neoforge/common/world";
import { $TemplateMarkerHandlerList } from "@package/twilightforest/world/components/structures/util";
import { $MountedItemStorageType } from "@package/com/simibubi/create/api/contraption/storage/item";
import { $OilEffect } from "@package/org/xiyu/spartanweaponryunofficial/api/oil";
import { $Codec, $MapCodec } from "@package/com/mojang/serialization";
import { $SnifferVariant } from "@package/cy/jdkdigital/sussysniffers/common";
import { $RemoteWidgetType } from "@package/me/desht/pneumaticcraft/api/remote";
import { $FluidType, $FluidStack_ } from "@package/net/neoforged/neoforge/fluids";
import { $ITurtleUpgrade } from "@package/dan200/computercraft/api/turtle";
import { $GetChunkOilAmountEventJS } from "@package/dev/bluephs/dgjs/oil";
import { $NumberFormatType } from "@package/net/minecraft/network/chat/numbers";
import { $IParticleTimelineType } from "@package/com/hollingsworth/arsnouveau/api/particle/timelines";
import { $IBonusParameterType } from "@package/io/redspace/ironsjewelry/core/parameters";
import { $MountedFluidStorageType } from "@package/com/simibubi/create/api/contraption/storage/fluid";
import { RegistryTypes } from "@special/types";
import { $FreezerFuel } from "@package/corundum/rubinated_nether/content/recipe/fuel";
import { $SpecialRecipeSerializerManager } from "@package/dev/latvian/mods/kubejs/recipe/special";
import { $MenuType } from "@package/net/minecraft/world/inventory";
import { $DataComponentType } from "@package/net/minecraft/core/component";
import { $FanProcessingType } from "@package/com/simibubi/create/content/kinetics/fan/processing";
import { $CustomMapData$Type } from "@package/net/mehvahdjukaar/moonlight/api/map";
import { $PotatoCannonProjectileType } from "@package/com/simibubi/create/api/equipment/potatoCannon";
import { $AbstractWeather } from "@package/cn/leolezury/eternalstarlight/common/weather";
import { $Item, $CreativeModeTab, $JukeboxSong, $ArmorMaterial, $ItemStack_, $Instrument } from "@package/net/minecraft/world/item";
import { $Crest } from "@package/cn/leolezury/eternalstarlight/common/crest";
import { $TrunkPlacerType } from "@package/net/minecraft/world/level/levelgen/feature/trunkplacers";
import { $Bandlands } from "@package/dev/worldgen/lithostitched/impl/worldgen/bandlands";
import { $EmpowerEvent } from "@package/com/almostreliable/kubeaa/event";
import { $FlatLevelGeneratorPreset } from "@package/net/minecraft/world/level/levelgen/flat";
import { $StructureProcessorList, $StructureProcessorType, $PosRuleTestType, $RuleTestType } from "@package/net/minecraft/world/level/levelgen/structure/templatesystem";
import { $FurnaceFuels, $Compostables } from "@package/com/kekecreations/jinxedlib/common/data";
import { $RitualFactory } from "@package/com/klikli_dev/occultism/common/ritual";
import { $ServerKubeEvent, $CommandKubeEvent, $BasicCommandKubeEvent } from "@package/dev/latvian/mods/kubejs/server";
import { $MemoryModuleType } from "@package/net/minecraft/world/entity/ai/memory";
import { $GeneratedDataStage_ } from "@package/dev/latvian/mods/kubejs/script/data";
import { $RoomUpgradeComponentType } from "@package/dev/compactmods/machines/api/room/upgrade";
import { $IntProviderType, $FloatProviderType } from "@package/net/minecraft/util/valueproviders";
import { $ModifyEntityInFrameExtraDataEventJS, $ModifyFrameExtraDataEventJS, $FrameAddedEventJS } from "@package/io/github/mortuusars/exposure/neoforge/integration/kubejs/event";
import { $ItemDisplayType } from "@package/twilightforest/item/travellers_gear/modifiers/display";
import { $AreaTypeSerializer } from "@package/me/desht/pneumaticcraft/api/drone/area";
import { $MLMapDecorationType } from "@package/net/mehvahdjukaar/moonlight/api/map/decoration";
import { $IPropertyType } from "@package/com/hollingsworth/arsnouveau/api/particle/configurations/properties";
import { $LootNumberProviderType } from "@package/net/minecraft/world/level/storage/loot/providers/number";
import { $PlantRecollectable } from "@package/com/buuz135/industrial/api/plant";
import { $WoodPalette } from "@package/twilightforest/util/woods";
import { $FuelTypeEventJS } from "@package/dev/bluephs/dgjs/fuel";
import { $GemstoneColor } from "@package/de/dafuqs/spectrum/api/item";
import { $Supplier } from "@package/java/util/function";
import { $ChunkStatus } from "@package/net/minecraft/world/level/chunk/status";
import { $WorldSavedDataType } from "@package/net/mehvahdjukaar/moonlight/api/misc";
import { $PoiType } from "@package/net/minecraft/world/entity/ai/village/poi";
import { $QuestObjectStartedKubeEvent, $QuestObjectCompletedKubeEvent, $CustomRewardKubeEvent, $CustomTaskKubeEvent } from "@package/dev/ftb/mods/ftbxmodcompat/neoforge/ftbquests/kubejs";
import { $LootItemFunctionType } from "@package/net/minecraft/world/level/storage/loot/functions";
import { $VillagerType, $VillagerProfession } from "@package/net/minecraft/world/entity/npc";
import { $GlassArrowVariant } from "@package/de/dafuqs/spectrum/items/tools";
import { $IModule } from "@package/tv/soaryn/xycraft/api/content/capabilities/modular";
import { $StrawHandler } from "@package/com/buuz135/industrial/api/straw";
import { $CamoContainerFactory } from "@package/xfacthd/framedblocks/api/camo";
import { $ResourceType } from "@package/ca/teamdman/sfm/common/resourcetype";
import { $AssetHandler } from "@package/io/redspace/atlasapi/api";
import { $DisplaySource, $DisplayTarget } from "@package/com/simibubi/create/api/behaviour/display";
import { $ArgumentTypeInfo } from "@package/net/minecraft/commands/synchronization";
import { $IProgramLinter } from "@package/ca/teamdman/sfm/common/program/linting";
import { $BannerPattern, $DecoratedPotPattern, $BlockEntityType } from "@package/net/minecraft/world/level/block/entity";
export * as recipes from "@side-only/server/events/recipes";
export * as registry from "@side-only/server/events/registry";

declare module "@side-only/server/events" {
    export class TagEvent<T> extends $TagKubeEvent {
        get(tag: RegistryTypes.ResolveTag<T>): TagWrapper<T>;
        removeAll(tag: RegistryTypes.ResolveTag<T>): TagWrapper<T>;
        add(tag: RegistryTypes.ResolveTag<T>, ...values: RegistryTypes.ResolveObject<T>[]): TagWrapper<T>;
        remove(tag: RegistryTypes.ResolveTag<T>, ...values: RegistryTypes.ResolveObject<T>[]): TagWrapper<T>;
        removeAllTagsFrom(...values: RegistryTypes.ResolveObject<T>[]): void;
    }
    export class TagWrapper<T> extends $TagWrapper {
        add(...values: RegistryTypes.ResolveObject<T>[]): T;
        remove(...values: RegistryTypes.ResolveObject<T>[]): T;
        removeAll(): void;
    }
}

export {};

declare global {
    namespace ServerEvents {
        function recipeMappingRegistry(handler: ((event: $RecipeMappingRegistry) => void)): void;
        function recipes(handler: ((event: $RecipesKubeEvent) => void)): void;
        function specialRecipeSerializers(handler: ((event: $SpecialRecipeSerializerManager) => void)): void;
        function compostableRecipes(handler: ((event: $CompostableRecipesKubeEvent) => void)): void;
        function recipeSchemaRegistry(handler: ((event: $RecipeSchemaRegistry) => void)): void;
        function modifyRecipeResult(extra: string, handler: ((event: $ModifyCraftingItemKubeEvent) => void)): void;
        function tick(handler: ((event: $ServerKubeEvent) => void)): void;
        function command(extra: string, handler: ((event: $CommandKubeEvent) => void)): void;
        function command(handler: ((event: $CommandKubeEvent) => void)): void;
        function loaded(handler: ((event: $ServerKubeEvent) => void)): void;
        function commandRegistry(handler: ((event: $CommandRegistryKubeEvent) => void)): void;
        function afterRecipes(handler: ((event: $AfterRecipesLoadedKubeEvent) => void)): void;
        function unloaded(handler: ((event: $ServerKubeEvent) => void)): void;
        function modifyRecipeIngredient(extra: string, handler: ((event: $ModifyCraftingItemKubeEvent) => void)): void;
        function basicCommand(extra: string, handler: ((event: $BasicCommandKubeEvent) => void)): void;
        function generateData(extra: $GeneratedDataStage_, handler: ((event: $KubeDataGenerator) => void)): void;
        function basicPublicCommand(extra: string, handler: ((event: $BasicCommandKubeEvent) => void)): void;
    }
    namespace ActuallyAdditionsEvents {
        function empower(handler: ((event: $EmpowerEvent) => void)): void;
    }
    namespace FTBTeamsEvents {
        function playerJoinedParty(handler: ((event: $PlayerTeamKubeEvent) => void)): void;
        function playerLeftParty(handler: ((event: $PlayerTeamKubeEvent) => void)): void;
    }
    namespace BlockEvents {
        /**
         * Invoked when a block is destroyed by a player.
         */
        function broken(extra: $ResourceKey_<$Block>, handler: ((event: $BlockBrokenKubeEvent) => void)): void;
        /**
         * Invoked when a block is destroyed by a player.
         */
        function broken(handler: ((event: $BlockBrokenKubeEvent) => void)): void;
        /**
         * Invoked when a block is placed.
         */
        function placed(extra: $ResourceKey_<$Block>, handler: ((event: $BlockPlacedKubeEvent) => void)): void;
        /**
         * Invoked when a block is placed.
         */
        function placed(handler: ((event: $BlockPlacedKubeEvent) => void)): void;
        /**
         * Invoked when a player left clicks on a block.
         */
        function leftClicked(extra: $ResourceKey_<$Block>, handler: ((event: $BlockLeftClickedKubeEvent) => void)): void;
        /**
         * Invoked when a player left clicks on a block.
         */
        function leftClicked(handler: ((event: $BlockLeftClickedKubeEvent) => void)): void;
        function randomTick(extra: $ResourceKey_<$Block>, handler: ((event: $RandomTickKubeEvent) => void)): void;
        /**
         * Invoked when a player right clicks on a block.
         */
        function rightClicked(extra: $ResourceKey_<$Block>, handler: ((event: $BlockRightClickedKubeEvent) => void)): void;
        /**
         * Invoked when a player right clicks on a block.
         */
        function rightClicked(handler: ((event: $BlockRightClickedKubeEvent) => void)): void;
        /**
         * Invoked when a falling block starts to fall.
         */
        function startedFalling(extra: $ResourceKey_<$Block>, handler: ((event: $BlockStartedFallingKubeEvent) => void)): void;
        /**
         * Invoked when a falling block starts to fall.
         */
        function startedFalling(handler: ((event: $BlockStartedFallingKubeEvent) => void)): void;
        /**
         * Invoked when a detector block registered in KubeJS receives a block update.
         * 
         * `Powered`/`Unpowered` event will be fired when the detector block is powered/unpowered.
         */
        function detectorPowered(extra: string, handler: ((event: $DetectorBlockKubeEvent) => void)): void;
        /**
         * Invoked when a detector block registered in KubeJS receives a block update.
         * 
         * `Powered`/`Unpowered` event will be fired when the detector block is powered/unpowered.
         */
        function detectorPowered(handler: ((event: $DetectorBlockKubeEvent) => void)): void;
        /**
         * Invoked when an entity attempts to trample farmland.
         */
        function farmlandTrampled(extra: $ResourceKey_<$Block>, handler: ((event: $FarmlandTrampledKubeEvent) => void)): void;
        /**
         * Invoked when an entity attempts to trample farmland.
         */
        function farmlandTrampled(handler: ((event: $FarmlandTrampledKubeEvent) => void)): void;
        /**
         * Invoked when a falling block finishes falling.
         */
        function stoppedFalling(extra: $ResourceKey_<$Block>, handler: ((event: $BlockStoppedFallingKubeEvent) => void)): void;
        /**
         * Invoked when a falling block finishes falling.
         */
        function stoppedFalling(handler: ((event: $BlockStoppedFallingKubeEvent) => void)): void;
        /**
         * Modify dropped items and xp from block.
         */
        function drops(extra: $ResourceKey_<$Block>, handler: ((event: $BlockDropsKubeEvent) => void)): void;
        /**
         * Modify dropped items and xp from block.
         */
        function drops(handler: ((event: $BlockDropsKubeEvent) => void)): void;
        /**
         * Invoked when a detector block registered in KubeJS receives a block update.
         * 
         * `Powered`/`Unpowered` event will be fired when the detector block is powered/unpowered.
         */
        function detectorUnpowered(extra: string, handler: ((event: $DetectorBlockKubeEvent) => void)): void;
        /**
         * Invoked when a detector block registered in KubeJS receives a block update.
         * 
         * `Powered`/`Unpowered` event will be fired when the detector block is powered/unpowered.
         */
        function detectorUnpowered(handler: ((event: $DetectorBlockKubeEvent) => void)): void;
        /**
         * Invoked when player middle-clicks on a block.
         */
        function picked(extra: $ResourceKey_<$Block>, handler: ((event: $BlockPickedKubeEvent) => void)): void;
        /**
         * Invoked when player middle-clicks on a block.
         */
        function picked(handler: ((event: $BlockPickedKubeEvent) => void)): void;
        /**
         * Invoked when a detector block registered in KubeJS receives a block update.
         * 
         * `Powered`/`Unpowered` event will be fired when the detector block is powered/unpowered.
         */
        function detectorChanged(extra: string, handler: ((event: $DetectorBlockKubeEvent) => void)): void;
        /**
         * Invoked when a detector block registered in KubeJS receives a block update.
         * 
         * `Powered`/`Unpowered` event will be fired when the detector block is powered/unpowered.
         */
        function detectorChanged(handler: ((event: $DetectorBlockKubeEvent) => void)): void;
        function blockEntityTick(extra: $ResourceKey_<$Block>, handler: ((event: $BlockEntityTickKubeEvent) => void)): void;
    }
    namespace LootJS {
        function lootTables(handler: ((event: $LootTableEventJS) => void)): void;
        function modifiers(handler: ((event: $LootModificationEventJS) => void)): void;
    }
    namespace CDGKJSEvents {
        function fuelTypes(handler: ((event: $FuelTypeEventJS) => void)): void;
        function fuel_type(handler: ((event: $FuelTypeEventJS) => void)): void;
        function oilAmount(handler: ((event: $GetChunkOilAmountEventJS) => void)): void;
    }
    namespace FTBFilterSystemEvents {
        function customFilter(extra: string, handler: ((event: $CustomFilterKubeEvent) => void)): void;
        function customFilter(handler: ((event: $CustomFilterKubeEvent) => void)): void;
    }
    namespace NetworkEvents {
        /**
         * Invoked when a network packet is received.
         * 
         * Note that the behaviour of this event is depending on the **script type**.
         * 
         * In `server_scripts`, this event is invoked on the server side when a packet is received from a client.
         * 
         * In `client_scripts`, this event is invoked on the client side when a packet is received from the server.
         */
        function dataReceived(extra: string, handler: ((event: $NetworkKubeEvent) => void)): void;
    }
    namespace ExposureEvents {
        function frameAdded(handler: ((event: $FrameAddedEventJS) => void)): void;
        function addEntityInFrameExtraData(handler: ((event: $ModifyEntityInFrameExtraDataEventJS) => void)): void;
        function modifyFrameExtraData(handler: ((event: $ModifyFrameExtraDataEventJS) => void)): void;
    }
    namespace ServerEvents {
        function registry(type: "painting_variant", handler: ((event: PaintingVariant) => void)): void;
        function registry(type: "jukebox_song", handler: ((event: JukeboxSong) => void)): void;
    }
    namespace ISSEvents {
        function spellPreCast(extra: $ResourceKey_<$EntityType<any>>, handler: ((event: $SpellPreCastEventJS) => void)): void;
        function spellPreCast(handler: ((event: $SpellPreCastEventJS) => void)): void;
        function spellOnCast(handler: ((event: $SpellOnCastEventJS) => void)): void;
        function changeMana(handler: ((event: $ChangeManaEventJS) => void)): void;
        function spellPostCast(extra: $ResourceKey_<$EntityType<any>>, handler: ((event: $SpellPostCastEventJS) => void)): void;
        function spellPostCast(handler: ((event: $SpellPostCastEventJS) => void)): void;
    }
    namespace EntityEvents {
        /**
         * Invoked after an entity is hurt by a damage source.
         */
        function afterHurt(extra: $ResourceKey_<$EntityType<any>>, handler: ((event: $AfterLivingEntityHurtKubeEvent) => void)): void;
        /**
         * Invoked after an entity is hurt by a damage source.
         */
        function afterHurt(handler: ((event: $AfterLivingEntityHurtKubeEvent) => void)): void;
        /**
         * Invoked when an entity is about to be added to the world.
         * 
         * This event also fires for existing entities when they are loaded from a save.
         */
        function spawned(extra: $ResourceKey_<$EntityType<any>>, handler: ((event: $EntitySpawnedKubeEvent) => void)): void;
        /**
         * Invoked when an entity is about to be added to the world.
         * 
         * This event also fires for existing entities when they are loaded from a save.
         */
        function spawned(handler: ((event: $EntitySpawnedKubeEvent) => void)): void;
        function drops(extra: $ResourceKey_<$EntityType<any>>, handler: ((event: $LivingEntityDropsKubeEvent) => void)): void;
        function drops(handler: ((event: $LivingEntityDropsKubeEvent) => void)): void;
        /**
         * Invoked before an entity is spawned into the world.
         * 
         * Only entities from a `BaseSpawner` or world generation will trigger this event.
         */
        function checkSpawn(extra: $ResourceKey_<$EntityType<any>>, handler: ((event: $CheckLivingEntitySpawnKubeEvent) => void)): void;
        /**
         * Invoked before an entity is spawned into the world.
         * 
         * Only entities from a `BaseSpawner` or world generation will trigger this event.
         */
        function checkSpawn(handler: ((event: $CheckLivingEntitySpawnKubeEvent) => void)): void;
        /**
         * Invoked before a living entity dies.
         * 
         * **NOTE**: You need to set hp to > 0 besides cancelling the event to prevent the entity from dying.
         */
        function death(extra: $ResourceKey_<$EntityType<any>>, handler: ((event: $LivingEntityDeathKubeEvent) => void)): void;
        /**
         * Invoked before a living entity dies.
         * 
         * **NOTE**: You need to set hp to > 0 besides cancelling the event to prevent the entity from dying.
         */
        function death(handler: ((event: $LivingEntityDeathKubeEvent) => void)): void;
        /**
         * Invoked before an entity is hurt by a damage source.
         */
        function beforeHurt(extra: $ResourceKey_<$EntityType<any>>, handler: ((event: $BeforeLivingEntityHurtKubeEvent) => void)): void;
        /**
         * Invoked before an entity is hurt by a damage source.
         */
        function beforeHurt(handler: ((event: $BeforeLivingEntityHurtKubeEvent) => void)): void;
    }
    namespace FTBQuestsEvents {
        function customReward(extra: string, handler: ((event: $CustomRewardKubeEvent) => void)): void;
        function customReward(handler: ((event: $CustomRewardKubeEvent) => void)): void;
        function started(extra: string, handler: ((event: $QuestObjectStartedKubeEvent) => void)): void;
        function started(handler: ((event: $QuestObjectStartedKubeEvent) => void)): void;
        function completed(extra: string, handler: ((event: $QuestObjectCompletedKubeEvent) => void)): void;
        function completed(handler: ((event: $QuestObjectCompletedKubeEvent) => void)): void;
        function customTask(extra: string, handler: ((event: $CustomTaskKubeEvent) => void)): void;
        function customTask(handler: ((event: $CustomTaskKubeEvent) => void)): void;
    }
    namespace CDGEvents {
        function oilAmount(handler: ((event: $GetChunkOilAmountEventJS$1) => void)): void;
    }
    namespace ServerEvents {
        function tags(type: "sfm:text_editor_action", handler: ((event: TagEvent<$ITextEditAction>) => void)): void;
        function tags(type: "create:contraption_type", handler: ((event: TagEvent<$ContraptionType>) => void)): void;
        function tags(type: "twilight:structure_speleothem_settings", handler: ((event: TagEvent<$StructureSpeleothemConfig>) => void)): void;
        function tags(type: "worldgen/processor_list", handler: ((event: TagEvent<$StructureProcessorList>) => void)): void;
        function tags(type: "create:potato_projectile/render_mode", handler: ((event: TagEvent<$MapCodec<any>>) => void)): void;
        function tags(type: "worldgen/placement_modifier_type", handler: ((event: TagEvent<$PlacementModifierType<any>>) => void)): void;
        function tags(type: "create:display_source", handler: ((event: TagEvent<$DisplaySource>) => void)): void;
        function tags(type: "trofers:advancement_drops", handler: ((event: TagEvent<$AdvancementDrops>) => void)): void;
        function tags(type: "jinxedlib:furnace_fuels", handler: ((event: TagEvent<$FurnaceFuels>) => void)): void;
        function tags(type: "spectrum:lizard_frill_variant", handler: ((event: TagEvent<$LizardFrillVariant>) => void)): void;
        function tags(type: "worldgen/material_rule", handler: ((event: TagEvent<$MapCodec<any>>) => void)): void;
        function tags(type: "worldgen/pool_alias_binding", handler: ((event: TagEvent<$MapCodec<any>>) => void)): void;
        function tags(type: "irons_jewelry:action", handler: ((event: TagEvent<$MapCodec<any>>) => void)): void;
        function tags(type: "irons_spellbooks:spells", handler: ((event: TagEvent<$AbstractSpell>) => void)): void;
        function tags(type: "apothic_attributes:entity_equipment_slot", handler: ((event: TagEvent<$EntityEquipmentSlot>) => void)): void;
        function tags(type: "enchantment_location_based_effect_type", handler: ((event: TagEvent<$MapCodec<any>>) => void)): void;
        function tags(type: "worldgen/material_condition", handler: ((event: TagEvent<$MapCodec<any>>) => void)): void;
        function tags(type: "worldgen/structure", handler: ((event: TagEvent<$Structure>) => void)): void;
        function tags(type: "irons_jewelry:pattern", handler: ((event: TagEvent<$PatternDefinition>) => void)): void;
        function tags(type: "jinxedlib:compostables", handler: ((event: TagEvent<$Compostables>) => void)): void;
        function tags(type: "starcatcher:minigame_modifiers", handler: ((event: TagEvent<$Supplier<any>>) => void)): void;
        function tags(type: "worldgen/structure_placement", handler: ((event: TagEvent<$StructurePlacementType<any>>) => void)): void;
        function tags(type: "occultism:recipe_result_type", handler: ((event: TagEvent<$RecipeResultType$1<any>>) => void)): void;
        function tags(type: "lithostitched:template_list", handler: ((event: TagEvent<$TemplateList>) => void)): void;
        function tags(type: "twilight:restrictions", handler: ((event: TagEvent<$Restriction>) => void)): void;
        function tags(type: "eternal_starlight:seeker_variant", handler: ((event: TagEvent<$SeekerVariant>) => void)): void;
        function tags(type: "worldgen/feature", handler: ((event: TagEvent<$Feature<any>>) => void)): void;
        function tags(type: "apotheosis:loot_category", handler: ((event: TagEvent<$LootCategory>) => void)): void;
        function tags(type: "moonlight:soft_fluid", handler: ((event: TagEvent<$SoftFluid>) => void)): void;
        function tags(type: "spectrum:resonance_processor_type", handler: ((event: TagEvent<$MapCodec<any>>) => void)): void;
        function tags(type: "starcatcher:fish", handler: ((event: TagEvent<$FishProperties>) => void)): void;
        function tags(type: "twilight:magic_paintings", handler: ((event: TagEvent<$MagicPaintingVariant>) => void)): void;
        function tags(type: "xycraft:systems", handler: ((event: TagEvent<$LevelSystemBase<any>>) => void)): void;
        function tags(type: "computercraft:recipe_function", handler: ((event: TagEvent<$RecipeFunction$Type<any>>) => void)): void;
        function tags(type: "mekanism:chemical", handler: ((event: TagEvent<$Chemical>) => void)): void;
        function tags(type: "eternal_starlight:boarwarf_type", handler: ((event: TagEvent<$BoarwarfType>) => void)): void;
        function tags(type: "enchantment_level_based_value_type", handler: ((event: TagEvent<$MapCodec<any>>) => void)): void;
        function tags(type: "starcatcher:fish_restrictions", handler: ((event: TagEvent<$AbstractFishRestriction>) => void)): void;
        function tags(type: "spectrum:pastel_upgrade", handler: ((event: TagEvent<$PastelUpgradeSignature>) => void)): void;
        function tags(type: "block_predicate_type", handler: ((event: TagEvent<$BlockPredicateType<any>>) => void)): void;
        function tags(type: "pneumaticcraft:prog_widgets", handler: ((event: TagEvent<$ProgWidgetType<any>>) => void)): void;
        function tags(type: "create:potato_projectile/type", handler: ((event: TagEvent<$PotatoCannonProjectileType>) => void)): void;
        function tags(type: "spartan_weaponry_unofficial:weapon_traits", handler: ((event: TagEvent<$WeaponTrait>) => void)): void;
        function tags(type: "lithostitched:processor_condition_type", handler: ((event: TagEvent<$MapCodec<any>>) => void)): void;
        function tags(type: "enchantment_effect_component_type", handler: ((event: TagEvent<$DataComponentType<any>>) => void)): void;
        function tags(type: "lithostitched:biome_injector", handler: ((event: TagEvent<$BiomeInjector>) => void)): void;
        function tags(type: "painting_variant", handler: ((event: TagEvent<$PaintingVariant>) => void)): void;
        function tags(type: "lithostitched:fast_noise_config_type", handler: ((event: TagEvent<$MapCodec<any>>) => void)): void;
        function tags(type: "worldgen/template_pool", handler: ((event: TagEvent<$StructureTemplatePool>) => void)): void;
        function tags(type: "lithostitched:region", handler: ((event: TagEvent<$Region>) => void)): void;
        function tags(type: "worldgen/noise", handler: ((event: TagEvent<$NormalNoise$NoiseParameters>) => void)): void;
        function tags(type: "industrialforegoing:straw", handler: ((event: TagEvent<$StrawHandler>) => void)): void;
        function tags(type: "loot_condition_type", handler: ((event: TagEvent<$LootItemConditionType>) => void)): void;
        function tags(type: "supplementaries:slot_reference_type", handler: ((event: TagEvent<$StreamCodec<any, any>>) => void)): void;
        function tags(type: "spectrum:kindling_variant", handler: ((event: TagEvent<$KindlingVariant>) => void)): void;
        function tags(type: "enchantment_provider_type", handler: ((event: TagEvent<$MapCodec<any>>) => void)): void;
        function tags(type: "exposure:lens", handler: ((event: TagEvent<$Lens>) => void)): void;
        function tags(type: "neoforge:global_loot_modifier_serializers", handler: ((event: TagEvent<$MapCodec<any>>) => void)): void;
        function tags(type: "particle_type", handler: ((event: TagEvent<$ParticleType<any>>) => void)): void;
        function tags(type: "relics:badges", handler: ((event: TagEvent<$AbstractBadge>) => void)): void;
        function tags(type: "eternal_starlight:astral_golem_material", handler: ((event: TagEvent<$AstralGolemMaterial>) => void)): void;
        function tags(type: "item", handler: ((event: TagEvent<$Item>) => void)): void;
        function tags(type: "data_component_type", handler: ((event: TagEvent<$DataComponentType<any>>) => void)): void;
        function tags(type: "create:mounted_item_storage_type", handler: ((event: TagEvent<$MountedItemStorageType<any>>) => void)): void;
        function tags(type: "lithostitched:load_predicate_type", handler: ((event: TagEvent<$MapCodec<any>>) => void)): void;
        function tags(type: "twilight:item_display_type", handler: ((event: TagEvent<$ItemDisplayType>) => void)): void;
        function tags(type: "lithostitched:biome_injector_type", handler: ((event: TagEvent<$MapCodec<any>>) => void)): void;
        function tags(type: "mob_effect", handler: ((event: TagEvent<$MobEffect>) => void)): void;
        function tags(type: "create:package_port_target_type", handler: ((event: TagEvent<$PackagePortTargetType>) => void)): void;
        function tags(type: "fluid", handler: ((event: TagEvent<$Fluid>) => void)): void;
        function tags(type: "spectrum:pastel_payload_type", handler: ((event: TagEvent<$MapCodec<any>>) => void)): void;
        function tags(type: "eternal_starlight:weather", handler: ((event: TagEvent<$AbstractWeather>) => void)): void;
        function tags(type: "neoforge:biome_modifier_serializers", handler: ((event: TagEvent<$MapCodec<any>>) => void)): void;
        function tags(type: "trigger_type", handler: ((event: TagEvent<$CriterionTrigger<any>>) => void)): void;
        function tags(type: "common_storage_lib_data:sync_serializers", handler: ((event: TagEvent<$DataSyncSerializer<any>>) => void)): void;
        function tags(type: "worldgen/configured_carver", handler: ((event: TagEvent<$ConfiguredWorldCarver<any>>) => void)): void;
        function tags(type: "potion", handler: ((event: TagEvent<$Potion>) => void)): void;
        function tags(type: "trim_pattern", handler: ((event: TagEvent<$TrimPattern>) => void)): void;
        function tags(type: "enchantment_provider", handler: ((event: TagEvent<$EnchantmentProvider>) => void)): void;
        function tags(type: "twilightforest:enforcement", handler: ((event: TagEvent<$Enforcement>) => void)): void;
        function tags(type: "starcatcher:catch_modifiers", handler: ((event: TagEvent<$Supplier<any>>) => void)): void;
        function tags(type: "memory_module_type", handler: ((event: TagEvent<$MemoryModuleType<any>>) => void)): void;
        function tags(type: "neoforge:structure_modifier_serializers", handler: ((event: TagEvent<$MapCodec<any>>) => void)): void;
        function tags(type: "number_format_type", handler: ((event: TagEvent<$NumberFormatType<any>>) => void)): void;
        function tags(type: "banner_pattern", handler: ((event: TagEvent<$BannerPattern>) => void)): void;
        function tags(type: "spectrum:resonance_processor", handler: ((event: TagEvent<$ResonanceProcessor>) => void)): void;
        function tags(type: "twilight:biome_layer_stack", handler: ((event: TagEvent<$BiomeLayerFactory>) => void)): void;
        function tags(type: "lithostitched:fast_noise_config", handler: ((event: TagEvent<$FastNoiseConfig>) => void)): void;
        function tags(type: "entity_type", handler: ((event: TagEvent<$EntityType<any>>) => void)): void;
        function tags(type: "lithostitched:surface_rule", handler: ((event: TagEvent<$SurfaceRules$RuleSource>) => void)): void;
        function tags(type: "neoforge:structure_modifier", handler: ((event: TagEvent<$StructureModifier>) => void)): void;
        function tags(type: "twilight:template_marker_handler", handler: ((event: TagEvent<$TemplateMarkerHandler>) => void)): void;
        function tags(type: "chunk_status", handler: ((event: TagEvent<$ChunkStatus>) => void)): void;
        function tags(type: "create:display_target", handler: ((event: TagEvent<$DisplayTarget>) => void)): void;
        function tags(type: "worldgen/noise_settings", handler: ((event: TagEvent<$NoiseGeneratorSettings>) => void)): void;
        function tags(type: "animal_pen:entity_function", handler: ((event: TagEvent<$EntityFunctionEntry>) => void)): void;
        function tags(type: "neoforge:entity_data_serializers", handler: ((event: TagEvent<$EntityDataSerializer<any>>) => void)): void;
        function tags(type: "float_provider_type", handler: ((event: TagEvent<$FloatProviderType<any>>) => void)): void;
        function tags(type: "block", handler: ((event: TagEvent<$Block>) => void)): void;
        function tags(type: "xycraft:rule", handler: ((event: TagEvent<$IRuleType<any>>) => void)): void;
        function tags(type: "game_event", handler: ((event: TagEvent<$GameEvent>) => void)): void;
        function tags(type: "villager_profession", handler: ((event: TagEvent<$VillagerProfession>) => void)): void;
        function tags(type: "pneumaticcraft:player_matchers", handler: ((event: TagEvent<$IPlayerMatcher$MatcherType<any>>) => void)): void;
        function tags(type: "sfm:capability_provider_mappers", handler: ((event: TagEvent<$SFMBlockCapabilityProvider<any>>) => void)): void;
        function tags(type: "relics:relic_containers", handler: ((event: TagEvent<$RelicContainer>) => void)): void;
        function tags(type: "create:potato_projectile/block_hit_action", handler: ((event: TagEvent<$MapCodec<any>>) => void)): void;
        function tags(type: "worldgen/configured_feature", handler: ((event: TagEvent<$ConfiguredFeature<any, any>>) => void)): void;
        function tags(type: "lithostitched:modifier_type", handler: ((event: TagEvent<$MapCodec<any>>) => void)): void;
        function tags(type: "worldgen/trunk_placer_type", handler: ((event: TagEvent<$TrunkPlacerType<any>>) => void)): void;
        function tags(type: "villager_type", handler: ((event: TagEvent<$VillagerType>) => void)): void;
        function tags(type: "trofers:trophies", handler: ((event: TagEvent<$Trophy>) => void)): void;
        function tags(type: "worldgen/biome", handler: ((event: TagEvent<$Biome>) => void)): void;
        function tags(type: "position_source_type", handler: ((event: TagEvent<$PositionSourceType<any>>) => void)): void;
        function tags(type: "ars_additions:mark_data", handler: ((event: TagEvent<$MapCodec<any>>) => void)): void;
        function tags(type: "recipe_type", handler: ((event: TagEvent<$RecipeType<any>>) => void)): void;
        function tags(type: "lithostitched:worldgen_modifier", handler: ((event: TagEvent<$WorldgenModifier>) => void)): void;
        function tags(type: "irons_spellbooks:upgrade_orb_type", handler: ((event: TagEvent<$UpgradeOrbType>) => void)): void;
        function tags(type: "worldgen/foliage_placer_type", handler: ((event: TagEvent<$FoliagePlacerType<any>>) => void)): void;
        function tags(type: "int_provider_type", handler: ((event: TagEvent<$IntProviderType<any>>) => void)): void;
        function tags(type: "neoforge:ingredient_serializer", handler: ((event: TagEvent<$IngredientType<any>>) => void)): void;
        function tags(type: "createdieselgenerators:fuel_type", handler: ((event: TagEvent<$FuelType>) => void)): void;
        function tags(type: "starcatcher:sweet_spot_behaviour", handler: ((event: TagEvent<$Supplier<any>>) => void)): void;
        function tags(type: "map_decoration_type", handler: ((event: TagEvent<$MapDecorationType>) => void)): void;
        function tags(type: "mekanism:robit_skin", handler: ((event: TagEvent<$RobitSkin>) => void)): void;
        function tags(type: "selling_bin:selling_bin", handler: ((event: TagEvent<$AbstractProcessor>) => void)): void;
        function tags(type: "sussysniffers:sniffer_variant", handler: ((event: TagEvent<$SnifferVariant>) => void)): void;
        function tags(type: "worldgen/placed_feature", handler: ((event: TagEvent<$PlacedFeature>) => void)): void;
        function tags(type: "schedule", handler: ((event: TagEvent<$Schedule>) => void)): void;
        function tags(type: "computercraft:turtle_overlay", handler: ((event: TagEvent<$TurtleOverlay>) => void)): void;
        function tags(type: "corgilib:condition", handler: ((event: TagEvent<$Codec<any>>) => void)): void;
        function tags(type: "create:fan_processing_type", handler: ((event: TagEvent<$FanProcessingType>) => void)): void;
        function tags(type: "worldgen/feature_size_type", handler: ((event: TagEvent<$FeatureSizeType<any>>) => void)): void;
        function tags(type: "framedblocks:aux_blueprint_data", handler: ((event: TagEvent<$AuxBlueprintData$Type<any>>) => void)): void;
        function tags(type: "loot_nbt_provider_type", handler: ((event: TagEvent<$LootNbtProviderType>) => void)): void;
        function tags(type: "starcatcher:bobber_skin", handler: ((event: TagEvent<$Supplier<any>>) => void)): void;
        function tags(type: "irons_jewelry:bonus_parameter_type", handler: ((event: TagEvent<$IBonusParameterType<any>>) => void)): void;
        function tags(type: "twilight:travellers_modifier_type", handler: ((event: TagEvent<$MapCodec<any>>) => void)): void;
        function tags(type: "command_argument_type", handler: ((event: TagEvent<$ArgumentTypeInfo<any, any>>) => void)): void;
        function tags(type: "eternal_starlight:shimmer_lacewing_variant", handler: ((event: TagEvent<$ShimmerLacewingVariant>) => void)): void;
        function tags(type: "computercraft:turtle_upgrade", handler: ((event: TagEvent<$ITurtleUpgrade>) => void)): void;
        function tags(type: "trim_material", handler: ((event: TagEvent<$TrimMaterial>) => void)): void;
        function tags(type: "computercraft:pocket_upgrade", handler: ((event: TagEvent<$IPocketUpgrade>) => void)): void;
        function tags(type: "supplementaries:placeable_books", handler: ((event: TagEvent<$BookType>) => void)): void;
        function tags(type: "worldgen/tree_decorator_type", handler: ((event: TagEvent<$TreeDecoratorType<any>>) => void)): void;
        function tags(type: "enchantment_entity_effect_type", handler: ((event: TagEvent<$MapCodec<any>>) => void)): void;
        function tags(type: "spectrum:ink_color", handler: ((event: TagEvent<$InkColor>) => void)): void;
        function tags(type: "moonlight:villager_trades", handler: ((event: TagEvent<$MapCodec<any>>) => void)): void;
        function tags(type: "twilightforest:chunk_blanket_type", handler: ((event: TagEvent<$ChunkBlanketType>) => void)): void;
        function tags(type: "twilight:biome_layer_type", handler: ((event: TagEvent<$BiomeLayerType>) => void)): void;
        function tags(type: "pneumaticcraft:prog_widget_area_types", handler: ((event: TagEvent<$AreaTypeSerializer<any>>) => void)): void;
        function tags(type: "pneumaticcraft:remote_widgets", handler: ((event: TagEvent<$RemoteWidgetType<any>>) => void)): void;
        function tags(type: "recipe_serializer", handler: ((event: TagEvent<$RecipeSerializer<any>>) => void)): void;
        function tags(type: "eternal_starlight:seeds_launcher_ammo_type", handler: ((event: TagEvent<$SeedsLauncherAmmoType>) => void)): void;
        function tags(type: "neoforge:attachment_types", handler: ((event: TagEvent<$AttachmentType<any>>) => void)): void;
        function tags(type: "stat_type", handler: ((event: TagEvent<$StatType<any>>) => void)): void;
        function tags(type: "instrument", handler: ((event: TagEvent<$Instrument>) => void)): void;
        function tags(type: "trofers:entity_drops", handler: ((event: TagEvent<$EntityDrops>) => void)): void;
        function tags(type: "activity", handler: ((event: TagEvent<$Activity>) => void)): void;
        function tags(type: "lithostitched:bandlands_band_type", handler: ((event: TagEvent<$MapCodec<any>>) => void)): void;
        function tags(type: "armor_material", handler: ((event: TagEvent<$ArmorMaterial>) => void)): void;
        function tags(type: "dimension", handler: ((event: TagEvent<$Level>) => void)): void;
        function tags(type: "computercraft:pocket_upgrade_type", handler: ((event: TagEvent<$UpgradeType<any>>) => void)): void;
        function tags(type: "mekanism:chemical_ingredient_type", handler: ((event: TagEvent<$MapCodec<any>>) => void)): void;
        function tags(type: "point_of_interest_type", handler: ((event: TagEvent<$PoiType>) => void)): void;
        function tags(type: "wolf_variant", handler: ((event: TagEvent<$WolfVariant>) => void)): void;
        function tags(type: "neoforge:holder_set_type", handler: ((event: TagEvent<$HolderSetType>) => void)): void;
        function tags(type: "spectrum:glass_arrow_variant", handler: ((event: TagEvent<$GlassArrowVariant>) => void)): void;
        function tags(type: "menu", handler: ((event: TagEvent<$MenuType<any>>) => void)): void;
        function tags(type: "replication:matter_types", handler: ((event: TagEvent<$IMatterType>) => void)): void;
        function tags(type: "pos_rule_test", handler: ((event: TagEvent<$PosRuleTestType<any>>) => void)): void;
        function tags(type: "ars_nouveau:particle_configs", handler: ((event: TagEvent<$IParticleMotionType<any>>) => void)): void;
        function tags(type: "worldgen/density_function", handler: ((event: TagEvent<$DensityFunction>) => void)): void;
        function tags(type: "exposure:color_palette", handler: ((event: TagEvent<$ColorPalette>) => void)): void;
        function tags(type: "eternal_starlight:biome_data", handler: ((event: TagEvent<$BiomeData>) => void)): void;
        function tags(type: "enchantment_value_effect_type", handler: ((event: TagEvent<$MapCodec<any>>) => void)): void;
        function tags(type: "lithostitched:bandlands", handler: ((event: TagEvent<$Bandlands>) => void)): void;
        function tags(type: "moonlight:world_saved_data_type", handler: ((event: TagEvent<$WorldSavedDataType<any>>) => void)): void;
        function tags(type: "attribute", handler: ((event: TagEvent<$Attribute>) => void)): void;
        function tags(type: "worldgen/biome_source", handler: ((event: TagEvent<$MapCodec<any>>) => void)): void;
        function tags(type: "worldgen/structure_set", handler: ((event: TagEvent<$StructureSet>) => void)): void;
        function tags(type: "create:arm_interaction_point_type", handler: ((event: TagEvent<$ArmInteractionPointType>) => void)): void;
        function tags(type: "pneumaticcraft:harvest_handlers", handler: ((event: TagEvent<$HarvestHandler>) => void)): void;
        function tags(type: "neoforge:condition_codecs", handler: ((event: TagEvent<$MapCodec<any>>) => void)): void;
        function tags(type: "functionalstorage:functional_upgrade_behavior", handler: ((event: TagEvent<$MapCodec<any>>) => void)): void;
        function tags(type: "damage_type", handler: ((event: TagEvent<$DamageType>) => void)): void;
        function tags(type: "ae2:keytypes", handler: ((event: TagEvent<$AEKeyType>) => void)): void;
        function tags(type: "rubinated_nether:freezer_fuel", handler: ((event: TagEvent<$FreezerFuel>) => void)): void;
        function tags(type: "create:potato_projectile/entity_hit_action", handler: ((event: TagEvent<$MapCodec<any>>) => void)): void;
        function tags(type: "worldgen/world_preset", handler: ((event: TagEvent<$WorldPreset>) => void)): void;
        function tags(type: "ars_nouveau:particle_properties", handler: ((event: TagEvent<$IPropertyType<any>>) => void)): void;
        function tags(type: "twilightforest:template_marker_handler_type", handler: ((event: TagEvent<$TemplateMarkerHandlerType>) => void)): void;
        function tags(type: "occultism:ritual_factories", handler: ((event: TagEvent<$RitualFactory>) => void)): void;
        function tags(type: "industrialforegoing:plant_recollectable", handler: ((event: TagEvent<$PlantRecollectable>) => void)): void;
        function tags(type: "spartan_weaponry_unofficial:oil_effects", handler: ((event: TagEvent<$OilEffect>) => void)): void;
        function tags(type: "neoforge:fluid_ingredient_type", handler: ((event: TagEvent<$FluidIngredientType<any>>) => void)): void;
        function tags(type: "eternal_starlight:crest", handler: ((event: TagEvent<$Crest>) => void)): void;
        function tags(type: "arts_and_crafts:paintbrush_palette", handler: ((event: TagEvent<$PaintbrushPalette>) => void)): void;
        function tags(type: "mekanism:module", handler: ((event: TagEvent<$ModuleData<any>>) => void)): void;
        function tags(type: "sfm:program_linters", handler: ((event: TagEvent<$IProgramLinter>) => void)): void;
        function tags(type: "spectrum:gemstone_color", handler: ((event: TagEvent<$GemstoneColor>) => void)): void;
        function tags(type: "height_provider_type", handler: ((event: TagEvent<$HeightProviderType<any>>) => void)): void;
        function tags(type: "worldgen/multi_noise_biome_source_parameter_list", handler: ((event: TagEvent<$MultiNoiseBiomeSourceParameterList>) => void)): void;
        function tags(type: "spectrum:recipe_scaling", handler: ((event: TagEvent<$RecipeScaling>) => void)): void;
        function tags(type: "twilight:travellers_modifiers", handler: ((event: TagEvent<$TravellersModifier>) => void)): void;
        function tags(type: "ars_additions:tag_modifiers", handler: ((event: TagEvent<$MapCodec<any>>) => void)): void;
        function tags(type: "ars_nouveau:particle_timelines", handler: ((event: TagEvent<$IParticleTimelineType<any>>) => void)): void;
        function tags(type: "neoforge:fluid_type", handler: ((event: TagEvent<$FluidType>) => void)): void;
        function tags(type: "mekanism:robit_skin_serializer", handler: ((event: TagEvent<$MapCodec<any>>) => void)): void;
        function tags(type: "compactmachines:room_templates", handler: ((event: TagEvent<$RoomTemplate>) => void)): void;
        function tags(type: "irons_jewelry:jewelry_type", handler: ((event: TagEvent<$JewelryType>) => void)): void;
        function tags(type: "item_sub_predicate_type", handler: ((event: TagEvent<$ItemSubPredicate$Type<any>>) => void)): void;
        function tags(type: "irons_jewelry:material", handler: ((event: TagEvent<$MaterialDefinition>) => void)): void;
        function tags(type: "xycraft:modules", handler: ((event: TagEvent<$IModule>) => void)): void;
        function tags(type: "worldgen/root_placer_type", handler: ((event: TagEvent<$RootPlacerType<any>>) => void)): void;
        function tags(type: "exposure:filter", handler: ((event: TagEvent<$Filter>) => void)): void;
        function tags(type: "sfm:text_editor", handler: ((event: TagEvent<$ISFMTextEditorRegistration>) => void)): void;
        function tags(type: "spectrum:world_effect", handler: ((event: TagEvent<$FusionShrineRecipeWorldEffect>) => void)): void;
        function tags(type: "block_type", handler: ((event: TagEvent<$MapCodec<any>>) => void)): void;
        function tags(type: "occultism:spirit_job_factories", handler: ((event: TagEvent<$SpiritJobFactory>) => void)): void;
        function tags(type: "create:mounted_fluid_storage_type", handler: ((event: TagEvent<$MountedFluidStorageType<any>>) => void)): void;
        function tags(type: "worldgen/structure_piece", handler: ((event: TagEvent<$StructurePieceType>) => void)): void;
        function tags(type: "twilight:biome_terrain_data", handler: ((event: TagEvent<$BiomeDensitySource>) => void)): void;
        function tags(type: "worldgen/density_function_type", handler: ((event: TagEvent<$MapCodec<any>>) => void)): void;
        function tags(type: "worldgen/flat_level_generator_preset", handler: ((event: TagEvent<$FlatLevelGeneratorPreset>) => void)): void;
        function tags(type: "twilight:wood_palettes", handler: ((event: TagEvent<$WoodPalette>) => void)): void;
        function tags(type: "block_entity_type", handler: ((event: TagEvent<$BlockEntityType<any>>) => void)): void;
        function tags(type: "worldgen/structure_processor", handler: ((event: TagEvent<$StructureProcessorType<any>>) => void)): void;
        function tags(type: "create:item_attribute_type", handler: ((event: TagEvent<$ItemAttributeType>) => void)): void;
        function tags(type: "worldgen/structure_type", handler: ((event: TagEvent<$StructureType<any>>) => void)): void;
        function tags(type: "eternal_starlight:ent_variant", handler: ((event: TagEvent<$EntVariant>) => void)): void;
        function tags(type: "apothic_attributes:entity_slot_group", handler: ((event: TagEvent<$EntitySlotGroup>) => void)): void;
        function tags(type: "frog_variant", handler: ((event: TagEvent<$FrogVariant>) => void)): void;
        function tags(type: "sensor_type", handler: ((event: TagEvent<$SensorType<any>>) => void)): void;
        function tags(type: "spectrum:lizard_horn_variant", handler: ((event: TagEvent<$LizardHornVariant>) => void)): void;
        function tags(type: "neoforge:biome_modifier", handler: ((event: TagEvent<$BiomeModifier>) => void)): void;
        function tags(type: "twilight:template_marker_handler_list", handler: ((event: TagEvent<$TemplateMarkerHandlerList>) => void)): void;
        function tags(type: "sound_event", handler: ((event: TagEvent<$SoundEvent>) => void)): void;
        function tags(type: "decorated_pot_pattern", handler: ((event: TagEvent<$DecoratedPotPattern>) => void)): void;
        function tags(type: "computercraft:turtle_upgrade_type", handler: ((event: TagEvent<$UpgradeType<any>>) => void)): void;
        function tags(type: "moonlight:custom_map_data_types", handler: ((event: TagEvent<$CustomMapData$Type<any, any>>) => void)): void;
        function tags(type: "enchantment", handler: ((event: TagEvent<$Enchantment>) => void)): void;
        function tags(type: "loot_function_type", handler: ((event: TagEvent<$LootItemFunctionType<any>>) => void)): void;
        function tags(type: "irons_jewelry:bonus_type", handler: ((event: TagEvent<$BonusType>) => void)): void;
        function tags(type: "twilight:tiny_bird_variant", handler: ((event: TagEvent<$TinyBirdVariant>) => void)): void;
        function tags(type: "loot_score_provider_type", handler: ((event: TagEvent<$LootScoreProviderType>) => void)): void;
        function tags(type: "corgilib:blending_function", handler: ((event: TagEvent<$Codec<any>>) => void)): void;
        function tags(type: "rule_block_entity_modifier", handler: ((event: TagEvent<$RuleBlockEntityModifierType<any>>) => void)): void;
        function tags(type: "moonlight:map_marker", handler: ((event: TagEvent<$MLMapDecorationType<any, any>>) => void)): void;
        function tags(type: "twilight:dwarf_rabbit_variant", handler: ((event: TagEvent<$DwarfRabbitVariant>) => void)): void;
        function tags(type: "worldgen/block_state_provider_type", handler: ((event: TagEvent<$BlockStateProviderType<any>>) => void)): void;
        function tags(type: "twilight:chunk_blanket_processors", handler: ((event: TagEvent<$ChunkBlanketProcessor>) => void)): void;
        function tags(type: "entity_sub_predicate_type", handler: ((event: TagEvent<$MapCodec<any>>) => void)): void;
        function tags(type: "loot_number_provider_type", handler: ((event: TagEvent<$LootNumberProviderType>) => void)): void;
        function tags(type: "irons_spellbooks:schools", handler: ((event: TagEvent<$SchoolType>) => void)): void;
        function tags(type: "pneumaticcraft:hoe_handlers", handler: ((event: TagEvent<$HoeHandler>) => void)): void;
        function tags(type: "irons_jewelry:part", handler: ((event: TagEvent<$PartDefinition>) => void)): void;
        function tags(type: "worldgen/structure_pool_element", handler: ((event: TagEvent<$StructurePoolElementType<any>>) => void)): void;
        function tags(type: "lithostitched:placement_condition_type", handler: ((event: TagEvent<$MapCodec<any>>) => void)): void;
        function tags(type: "dimension_type", handler: ((event: TagEvent<$DimensionType>) => void)): void;
        function tags(type: "framedblocks:camo_containers", handler: ((event: TagEvent<$CamoContainerFactory<any>>) => void)): void;
        function tags(type: "rule_test", handler: ((event: TagEvent<$RuleTestType<any>>) => void)): void;
        function tags(type: "apothic_spawners:spawner_stat", handler: ((event: TagEvent<$SpawnerStat<any>>) => void)): void;
        function tags(type: "worldgen/carver", handler: ((event: TagEvent<$WorldCarver<any>>) => void)): void;
        function tags(type: "commoncapabilities:ingredientcomponents", handler: ((event: TagEvent<$IngredientComponent<any, any>>) => void)): void;
        function tags(type: "atlas_api:asset_handler", handler: ((event: TagEvent<$AssetHandler>) => void)): void;
        function tags(type: "loot_pool_entry_type", handler: ((event: TagEvent<$LootPoolEntryType>) => void)): void;
        function tags(type: "worldgen/chunk_generator", handler: ((event: TagEvent<$MapCodec<any>>) => void)): void;
        function tags(type: "jukebox_song", handler: ((event: TagEvent<$JukeboxSong>) => void)): void;
        function tags(type: "cat_variant", handler: ((event: TagEvent<$CatVariant>) => void)): void;
        function tags(type: "chat_type", handler: ((event: TagEvent<$ChatType>) => void)): void;
        function tags(type: "theurgy:recipe_result_type", handler: ((event: TagEvent<$RecipeResultType<any>>) => void)): void;
        function tags(type: "xycraft:stages", handler: ((event: TagEvent<$IStageType<any>>) => void)): void;
        function tags(type: "compactmachines:room_upgrades", handler: ((event: TagEvent<$RoomUpgradeComponentType<any>>) => void)): void;
        function tags(type: "sfm:resource_type", handler: ((event: TagEvent<$ResourceType<any, any, any>>) => void)): void;
        function tags(type: "creative_mode_tab", handler: ((event: TagEvent<$CreativeModeTab>) => void)): void;
    }
    export namespace RecipeViewerEvents {
        function addEntries(extra: "item", handler: ((event: $AddEntriesKubeEvent<$ItemStack_>) => void)): void;
        function addInformation(extra: "item", handler: ((event: $AddInformationKubeEvent<$ItemPredicate_>) => void)): void;
        function groupEntries(extra: "item", handler: ((event: $GroupEntriesKubeEvent<$ItemPredicate_>) => void)): void;
        function registerSubtypes(extra: "item", handler: ((event: $RegisterSubtypesKubeEvent<$ItemPredicate_>) => void)): void;
        function removeEntries(extra: "item", handler: ((event: $RemoveEntriesKubeEvent<$ItemPredicate_>) => void)): void;
        function removeEntriesCompletely(extra: "item", handler: ((event: $RemoveEntriesKubeEvent<$ItemPredicate_>) => void)): void;
        function removeRecipes(extra: "item", handler: ((event: $RemoveRecipesKubeEvent) => void)): void;
        function addEntries(extra: "fluid", handler: ((event: $AddEntriesKubeEvent<$FluidStack_>) => void)): void;
        function addInformation(extra: "fluid", handler: ((event: $AddInformationKubeEvent<$FluidIngredient_>) => void)): void;
        function groupEntries(extra: "fluid", handler: ((event: $GroupEntriesKubeEvent<$FluidIngredient_>) => void)): void;
        function registerSubtypes(extra: "fluid", handler: ((event: $RegisterSubtypesKubeEvent<$FluidIngredient_>) => void)): void;
        function removeEntries(extra: "fluid", handler: ((event: $RemoveEntriesKubeEvent<$FluidIngredient_>) => void)): void;
        function removeEntriesCompletely(extra: "fluid", handler: ((event: $RemoveEntriesKubeEvent<$FluidIngredient_>) => void)): void;
        function removeRecipes(extra: "fluid", handler: ((event: $RemoveRecipesKubeEvent) => void)): void;
    }
    namespace FTBChunksEvents {
        function before(extra: string, handler: ((event: $BeforeEventJS) => void)): void;
        function after(extra: string, handler: ((event: $AfterEventJS) => void)): void;
    }
    namespace MIRecipeEvents {
        function customCondition(handler: ((event: $CustomConditionEventJS) => void)): void;
    }
    namespace LevelEvents {
        function loaded(extra: $ResourceKey_<$Level>, handler: ((event: $SimpleLevelKubeEvent) => void)): void;
        function loaded(handler: ((event: $SimpleLevelKubeEvent) => void)): void;
        function unloaded(extra: $ResourceKey_<$Level>, handler: ((event: $SimpleLevelKubeEvent) => void)): void;
        function unloaded(handler: ((event: $SimpleLevelKubeEvent) => void)): void;
        /**
         * Invoked right before an explosion happens.
         */
        function beforeExplosion(extra: $ResourceKey_<$Level>, handler: ((event: $ExplosionKubeEvent$Before) => void)): void;
        /**
         * Invoked right before an explosion happens.
         */
        function beforeExplosion(handler: ((event: $ExplosionKubeEvent$Before) => void)): void;
        function saved(extra: $ResourceKey_<$Level>, handler: ((event: $SimpleLevelKubeEvent) => void)): void;
        function saved(handler: ((event: $SimpleLevelKubeEvent) => void)): void;
        function tick(extra: $ResourceKey_<$Level>, handler: ((event: $SimpleLevelKubeEvent) => void)): void;
        function tick(handler: ((event: $SimpleLevelKubeEvent) => void)): void;
        /**
         * Invoked right after an explosion happens.
         */
        function afterExplosion(extra: $ResourceKey_<$Level>, handler: ((event: $ExplosionKubeEvent$After) => void)): void;
        /**
         * Invoked right after an explosion happens.
         */
        function afterExplosion(handler: ((event: $ExplosionKubeEvent$After) => void)): void;
    }
    namespace ItemEvents {
        /**
         * Invoked when a player right clicks with an item **without targeting anything**.
         * 
         * Not to be confused with `BlockEvents.rightClick` or `ItemEvents.entityInteracted`.
         */
        function rightClicked(extra: $ResourceKey_<$Item>, handler: ((event: $ItemClickedKubeEvent) => void)): void;
        /**
         * Invoked when a player right clicks with an item **without targeting anything**.
         * 
         * Not to be confused with `BlockEvents.rightClick` or `ItemEvents.entityInteracted`.
         */
        function rightClicked(handler: ((event: $ItemClickedKubeEvent) => void)): void;
        /**
         * Invoked when a player crafts an item.
         */
        function crafted(extra: $ResourceKey_<$Item>, handler: ((event: $ItemCraftedKubeEvent) => void)): void;
        /**
         * Invoked when a player crafts an item.
         */
        function crafted(handler: ((event: $ItemCraftedKubeEvent) => void)): void;
        /**
         * Invoked when a player drops an item.
         */
        function dropped(extra: $ResourceKey_<$Item>, handler: ((event: $ItemDroppedKubeEvent) => void)): void;
        /**
         * Invoked when a player drops an item.
         */
        function dropped(handler: ((event: $ItemDroppedKubeEvent) => void)): void;
        /**
         * Invoked when a player right clicks with an item **without targeting anything**.
         * 
         * Not to be confused with `BlockEvents.rightClick` or `ItemEvents.entityInteracted`.
         */
        function firstRightClicked(extra: $ResourceKey_<$Item>, handler: ((event: $ItemClickedKubeEvent) => void)): void;
        /**
         * Invoked when a player right clicks with an item **without targeting anything**.
         * 
         * Not to be confused with `BlockEvents.rightClick` or `ItemEvents.entityInteracted`.
         */
        function firstRightClicked(handler: ((event: $ItemClickedKubeEvent) => void)): void;
        /**
         * Invoked when a player picks up an item. Cancelling (in `ItemEvents.canPickUp`) will prevent the item from being picked up.
         */
        function pickedUp(extra: $ResourceKey_<$Item>, handler: ((event: $ItemPickedUpKubeEvent) => void)): void;
        /**
         * Invoked when a player picks up an item. Cancelling (in `ItemEvents.canPickUp`) will prevent the item from being picked up.
         */
        function pickedUp(handler: ((event: $ItemPickedUpKubeEvent) => void)): void;
        function destroyed(extra: $ResourceKey_<$Item>, handler: ((event: $ItemDestroyedKubeEvent) => void)): void;
        function destroyed(handler: ((event: $ItemDestroyedKubeEvent) => void)): void;
        /**
         * Invoked when a player right clicks on an entity.
         */
        function entityInteracted(extra: $ResourceKey_<$Item>, handler: ((event: $ItemEntityInteractedKubeEvent) => void)): void;
        /**
         * Invoked when a player right clicks on an entity.
         */
        function entityInteracted(handler: ((event: $ItemEntityInteractedKubeEvent) => void)): void;
        /**
         * Invoked when an entity eats food.
         */
        function foodEaten(extra: $ResourceKey_<$Item>, handler: ((event: $FoodEatenKubeEvent) => void)): void;
        /**
         * Invoked when an entity eats food.
         */
        function foodEaten(handler: ((event: $FoodEatenKubeEvent) => void)): void;
        /**
         * Invoked when a player right clicks with an item **without targeting anything**.
         * 
         * Not to be confused with `BlockEvents.rightClick` or `ItemEvents.entityInteracted`.
         */
        function firstLeftClicked(extra: $ResourceKey_<$Item>, handler: ((event: $ItemClickedKubeEvent) => void)): void;
        /**
         * Invoked when a player right clicks with an item **without targeting anything**.
         * 
         * Not to be confused with `BlockEvents.rightClick` or `ItemEvents.entityInteracted`.
         */
        function firstLeftClicked(handler: ((event: $ItemClickedKubeEvent) => void)): void;
        /**
         * Invoked when a player picks up an item. Cancelling (in `ItemEvents.canPickUp`) will prevent the item from being picked up.
         */
        function canPickUp(extra: $ResourceKey_<$Item>, handler: ((event: $ItemPickedUpKubeEvent) => void)): void;
        /**
         * Invoked when a player picks up an item. Cancelling (in `ItemEvents.canPickUp`) will prevent the item from being picked up.
         */
        function canPickUp(handler: ((event: $ItemPickedUpKubeEvent) => void)): void;
        /**
         * Invoked when an item is smelted by a player.
         */
        function smelted(extra: $ResourceKey_<$Item>, handler: ((event: $ItemSmeltedKubeEvent) => void)): void;
        /**
         * Invoked when an item is smelted by a player.
         */
        function smelted(handler: ((event: $ItemSmeltedKubeEvent) => void)): void;
        function modifyTooltips(handler: ((event: $ModifyItemTooltipsKubeEvent) => void)): void;
    }
    namespace PlayerEvents {
        /**
         * Invoked when a player opens a chest.
         * 
         * Same as `PlayerEvents.inventoryOpened`, but only for chests.
         */
        function chestOpened(extra: $ResourceKey_<$MenuType<any>>, handler: ((event: $ChestKubeEvent) => void)): void;
        /**
         * Invoked when a player opens a chest.
         * 
         * Same as `PlayerEvents.inventoryOpened`, but only for chests.
         */
        function chestOpened(handler: ((event: $ChestKubeEvent) => void)): void;
        function loggedOut(handler: ((event: $SimplePlayerKubeEvent) => void)): void;
        function tick(handler: ((event: $SimplePlayerKubeEvent) => void)): void;
        function stageRemoved(extra: string, handler: ((event: $StageChangedEvent) => void)): void;
        function stageRemoved(handler: ((event: $StageChangedEvent) => void)): void;
        /**
         * Invoked when a player respawns.
         * 
         * The reason of respawn can be either death or returning from the end.
         */
        function respawned(handler: ((event: $PlayerRespawnedKubeEvent) => void)): void;
        function decorateChat(handler: ((event: $PlayerChatReceivedKubeEvent) => void)): void;
        /**
         * Invoked when a player respawns.
         * 
         * The reason of respawn can be either death or returning from the end.
         */
        function cloned(handler: ((event: $PlayerClonedKubeEvent) => void)): void;
        function stageAdded(extra: string, handler: ((event: $StageChangedEvent) => void)): void;
        function stageAdded(handler: ((event: $StageChangedEvent) => void)): void;
        /**
         * Invoked when a player gets an advancement.
         */
        function advancement(extra: $ResourceLocation_, handler: ((event: $PlayerAdvancementKubeEvent) => void)): void;
        /**
         * Invoked when a player gets an advancement.
         */
        function advancement(handler: ((event: $PlayerAdvancementKubeEvent) => void)): void;
        function chat(handler: ((event: $PlayerChatReceivedKubeEvent) => void)): void;
        /**
         * Invoked when a player opens a chest.
         * 
         * Same as `PlayerEvents.inventoryOpened`, but only for chests.
         */
        function chestClosed(extra: $ResourceKey_<$MenuType<any>>, handler: ((event: $ChestKubeEvent) => void)): void;
        /**
         * Invoked when a player opens a chest.
         * 
         * Same as `PlayerEvents.inventoryOpened`, but only for chests.
         */
        function chestClosed(handler: ((event: $ChestKubeEvent) => void)): void;
        function loggedIn(handler: ((event: $SimplePlayerKubeEvent) => void)): void;
        /**
         * Invoked when a player opens or closes a container.
         */
        function inventoryClosed(extra: $ResourceKey_<$MenuType<any>>, handler: ((event: $InventoryKubeEvent) => void)): void;
        /**
         * Invoked when a player opens or closes a container.
         */
        function inventoryClosed(handler: ((event: $InventoryKubeEvent) => void)): void;
        /**
         * Invoked when a player's inventory changes.
         */
        function inventoryChanged(extra: $ResourceKey_<$Item>, handler: ((event: $InventoryChangedKubeEvent) => void)): void;
        /**
         * Invoked when a player's inventory changes.
         */
        function inventoryChanged(handler: ((event: $InventoryChangedKubeEvent) => void)): void;
        /**
         * Invoked when a player opens or closes a container.
         */
        function inventoryOpened(extra: $ResourceKey_<$MenuType<any>>, handler: ((event: $InventoryKubeEvent) => void)): void;
        /**
         * Invoked when a player opens or closes a container.
         */
        function inventoryOpened(handler: ((event: $InventoryKubeEvent) => void)): void;
    }
}
