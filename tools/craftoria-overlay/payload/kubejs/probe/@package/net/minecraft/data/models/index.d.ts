import { $JsonElement } from "@package/com/google/gson";
import { $ArmorMaterial, $Item_, $Item } from "@package/net/minecraft/world/item";
import { $Pair } from "@package/com/mojang/datafixers/util";
import { $CompletableFuture } from "@package/java/util/concurrent";
import { $TexturedModel$Provider_, $ModelTemplate } from "@package/net/minecraft/data/models/model";
import { $ItemModelGeneratorsAccessor } from "@package/com/simibubi/create/foundation/mixin/accessor";
import { $BlockStateGenerator, $MultiVariantGenerator, $PropertyDispatch, $Variant } from "@package/net/minecraft/data/models/blockstates";
import { $List, $Map_, $Map } from "@package/java/util";
import { $CachedOutput_, $DataProvider, $PackOutput$PathProvider, $PackOutput } from "@package/net/minecraft/data";
import { $Consumer_, $BiConsumer, $Consumer, $BiConsumer_, $Function, $Supplier } from "@package/java/util/function";
import { $BooleanProperty } from "@package/net/minecraft/world/level/block/state/properties";
import { $Holder_, $Holder } from "@package/net/minecraft/core";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Block_ } from "@package/net/minecraft/world/level/block";
import { $Enum, $Record } from "@package/java/lang";
export * as blockstates from "@package/net/minecraft/data/models/blockstates";
export * as model from "@package/net/minecraft/data/models/model";

declare module "@package/net/minecraft/data/models" {
    export class $BlockModelGenerators$BlockStateGeneratorSupplier {
    }
    export interface $BlockModelGenerators$BlockStateGeneratorSupplier {
    }
    /**
     * Values that may be interpreted as {@link $BlockModelGenerators$BlockStateGeneratorSupplier}.
     */
    export type $BlockModelGenerators$BlockStateGeneratorSupplier_ = (() => void);
    export class $BlockModelGenerators$BlockFamilyProvider {
    }
    export class $BlockModelGenerators$TintState extends $Enum<$BlockModelGenerators$TintState> {
        static values(): $BlockModelGenerators$TintState[];
        static valueOf(arg0: string): $BlockModelGenerators$TintState;
        getCross(): $ModelTemplate;
        getCrossPot(): $ModelTemplate;
        static NOT_TINTED: $BlockModelGenerators$TintState;
        static TINTED: $BlockModelGenerators$TintState;
        get cross(): $ModelTemplate;
        get crossPot(): $ModelTemplate;
    }
    /**
     * Values that may be interpreted as {@link $BlockModelGenerators$TintState}.
     */
    export type $BlockModelGenerators$TintState_ = "tinted" | "not_tinted";
    export class $BlockModelGenerators {
        run(): void;
        static createRotatedPillarWithHorizontalVariant(buttonBlock: $Block_, unpoweredModelLocation: $ResourceLocation_, poweredModelLocation: $ResourceLocation_): $BlockStateGenerator;
        static createRotatedPillar(): $PropertyDispatch;
        createGenericCube(railBlock: $Block_): void;
        delegateItemModel(airLikeBlock: $Block_, particleTexture: $ResourceLocation_): void;
        delegateItemModel(item: $Item_, delegateModelLocation: $ResourceLocation_): void;
        static createSimpleBlock(block: $Block_, modelLocation: $ResourceLocation_): $MultiVariantGenerator;
        createTrivialBlock(axisAlignedPillarBlock: $Block_, provider: $TexturedModel$Provider_): void;
        createTrivialCube(railBlock: $Block_): void;
        createHangingSign(particleBlock: $Block_, hangingSignBlock: $Block_, wallHangingSignBlock: $Block_): void;
        createAxisAlignedPillarBlock(axisAlignedPillarBlock: $Block_, provider: $TexturedModel$Provider_): void;
        createHorizontallyRotatedBlock(axisAlignedPillarBlock: $Block_, provider: $TexturedModel$Provider_): void;
        static MULTIFACE_GENERATOR: $List<$Pair<$BooleanProperty, $Function<$ResourceLocation, $Variant>>>;
        blockStateOutput: $Consumer<$BlockStateGenerator>;
        modelOutput: $BiConsumer<$ResourceLocation, $Supplier<$JsonElement>>;
        constructor(blockStateOutput: $Consumer_<$BlockStateGenerator>, modelOutput: $BiConsumer_<$ResourceLocation, $Supplier<$JsonElement>>, skippedAutoModelsOutput: $Consumer_<$Item>);
    }
    export class $ModelProvider implements $DataProvider {
        /**
         * Gets a name for this provider, to use in logging.
         */
        getName(): string;
        run(output: $CachedOutput_): $CompletableFuture<never>;
        modelPathProvider: $PackOutput$PathProvider;
        blockStatePathProvider: $PackOutput$PathProvider;
        constructor(output: $PackOutput);
        get name(): string;
    }
    export class $ItemModelGenerators implements $ItemModelGeneratorsAccessor {
        run(): void;
        static getGENERATED_TRIM_MODELS$create_$md$f87c94$0(): $List<any>;
        generateFlatItem(item: $Item_, modelTemplate: $ModelTemplate): void;
        generateFlatItem(item: $Item_, modelLocationSuffix: string, modelTemplate: $ModelTemplate): void;
        output: $BiConsumer<$ResourceLocation, $Supplier<$JsonElement>>;
        static GENERATED_TRIM_MODELS: $List<$ItemModelGenerators$TrimModelData>;
        static TRIM_TYPE_PREDICATE_ID: $ResourceLocation;
        constructor(output: $BiConsumer_<$ResourceLocation, $Supplier<$JsonElement>>);
        static get GENERATED_TRIM_MODELS$create_$md$f87c94$0(): $List<any>;
    }
    export class $BlockModelGenerators$WoodProvider {
    }
    export class $ItemModelGenerators$TrimModelData extends $Record {
        name(): string;
        name(armorMaterial: $Holder_<$ArmorMaterial>): string;
        itemModelIndex(): number;
        overrideArmorMaterials(): $Map<$Holder<$ArmorMaterial>, string>;
        constructor(arg0: string, arg1: number, arg2: $Map_<$Holder_<$ArmorMaterial>, string>);
    }
    /**
     * Values that may be interpreted as {@link $ItemModelGenerators$TrimModelData}.
     */
    export type $ItemModelGenerators$TrimModelData_ = { name?: string, itemModelIndex?: number, overrideArmorMaterials?: $Map_<$Holder_<$ArmorMaterial>, string>,  } | [name?: string, itemModelIndex?: number, overrideArmorMaterials?: $Map_<$Holder_<$ArmorMaterial>, string>, ];
    export class $BlockModelGenerators$BlockEntityModelGenerator {
    }
    export class $BlockModelGenerators$BookSlotModelCacheKey extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $BlockModelGenerators$BookSlotModelCacheKey}.
     */
    export type $BlockModelGenerators$BookSlotModelCacheKey_ = { modelSuffix?: string, template?: $ModelTemplate,  } | [modelSuffix?: string, template?: $ModelTemplate, ];
}
