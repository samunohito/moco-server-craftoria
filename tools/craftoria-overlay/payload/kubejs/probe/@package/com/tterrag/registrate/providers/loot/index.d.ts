import { $ItemLike_ } from "@package/net/minecraft/world/level";
import { $AbstractRegistrate } from "@package/com/tterrag/registrate";
import { $CompletableFuture } from "@package/java/util/concurrent";
import { $EntityType_, $EntityType } from "@package/net/minecraft/world/entity";
import { $List, $Map } from "@package/java/util";
import { $LogicalSide } from "@package/net/neoforged/fml";
import { $NonNullConsumer_ } from "@package/com/tterrag/registrate/util/nullness";
import { $PackOutput } from "@package/net/minecraft/data";
import { $FrogVariant } from "@package/net/minecraft/world/entity/animal";
import { $Consumer_, $BiConsumer, $Consumer } from "@package/java/util/function";
import { $HolderLookup$Provider, $WritableRegistry, $Holder } from "@package/net/minecraft/core";
import { $ResourceKey_, $ResourceKey } from "@package/net/minecraft/resources";
import { $LootTableSubProvider, $LootTableProvider, $LootTableProvider$SubProviderEntry } from "@package/net/minecraft/data/loot";
import { $RegistrateProvider } from "@package/com/tterrag/registrate/providers";
import { $LootItemCondition$Builder } from "@package/net/minecraft/world/level/storage/loot/predicates";
import { $Block_ } from "@package/net/minecraft/world/level/block";
import { $VanillaBlockLoot, $VanillaEntityLoot } from "@package/net/minecraft/data/loot/packs";
import { $LootContextParamSet } from "@package/net/minecraft/world/level/storage/loot/parameters";
import { $LootTable, $ValidationContext, $LootTable$Builder } from "@package/net/minecraft/world/level/storage/loot";
import { $TriFunction_ } from "@package/org/apache/commons/lang3/function";

declare module "@package/com/tterrag/registrate/providers/loot" {
    export class $RegistrateEntityLootTables extends $VanillaEntityLoot implements $RegistrateLootTables {
        add(arg0: $EntityType_<never>, arg1: $LootTable$Builder): void;
        add(arg0: $EntityType_<never>, arg1: $ResourceKey_<$LootTable>, arg2: $LootTable$Builder): void;
        getRegistries(): $HolderLookup$Provider;
        static createSheepTable(arg0: $ItemLike_): $LootTable$Builder;
        canHaveLootTable(arg0: $EntityType_<never>): boolean;
        killedByFrogVariant(arg0: $ResourceKey_<$FrogVariant>): $LootItemCondition$Builder;
        validate(arg0: $WritableRegistry<$LootTable>, arg1: $ValidationContext): void;
        map: $Map<$EntityType<never>, $Map<$ResourceKey<$LootTable>, $LootTable$Builder>>;
        constructor(arg0: $HolderLookup$Provider, arg1: $AbstractRegistrate<never>, arg2: $Consumer_<$RegistrateEntityLootTables>);
        get registries(): $HolderLookup$Provider;
    }
    export class $RegistrateBlockLootTables extends $VanillaBlockLoot implements $RegistrateLootTables {
        add(arg0: $Block_, arg1: $LootTable$Builder): void;
        dropSelf(arg0: $Block_): void;
        dropOther(arg0: $Block_, arg1: $ItemLike_): void;
        getRegistries(): $HolderLookup$Provider;
        addNetherVinesDropTable(arg0: $Block_, arg1: $Block_): void;
        dropWhenSilkTouch(arg0: $Block_): void;
        dropPottedContents(arg0: $Block_): void;
        otherWhenSilkTouch(arg0: $Block_, arg1: $Block_): void;
        validate(arg0: $WritableRegistry<$LootTable>, arg1: $ValidationContext): void;
        static NORMAL_LEAVES_STICK_CHANCES: number[];
        registries: $HolderLookup$Provider;
        map: $Map<$ResourceKey<$LootTable>, $LootTable$Builder>;
        static NORMAL_LEAVES_SAPLING_CHANCES: number[];
        constructor(arg0: $HolderLookup$Provider, arg1: $AbstractRegistrate<never>, arg2: $Consumer_<$RegistrateBlockLootTables>);
    }
    export class $RegistrateLootTableProvider$LootType<T extends $RegistrateLootTables> {
        static register<T extends $RegistrateLootTables>(arg0: string, arg1: $LootContextParamSet, arg2: $TriFunction_<$HolderLookup$Provider, $AbstractRegistrate<any>, $Consumer<T>, T>): $RegistrateLootTableProvider$LootType<T>;
        static ENTITY: $RegistrateLootTableProvider$LootType<$RegistrateEntityLootTables>;
        static BLOCK: $RegistrateLootTableProvider$LootType<$RegistrateBlockLootTables>;
    }
    export interface $RegistrateLootTableProvider$LootType<T extends $RegistrateLootTables> {
        getLootCreator(arg0: $HolderLookup$Provider, arg1: $AbstractRegistrate<never>, arg2: $Consumer_<T>): T;
        getLootSet(): $LootContextParamSet;
        get lootSet(): $LootContextParamSet;
    }
    export class $RegistrateLootTables {
    }
    export interface $RegistrateLootTables extends $LootTableSubProvider {
        validate(arg0: $WritableRegistry<$LootTable>, arg1: $ValidationContext): void;
    }
    /**
     * Values that may be interpreted as {@link $RegistrateLootTables}.
     */
    export type $RegistrateLootTables_ = (() => void);
    export class $RegistrateLootTableProvider extends $LootTableProvider implements $RegistrateProvider {
        resolve<T>(arg0: $ResourceKey_<T>): $Holder<T>;
        getProvider(): $HolderLookup$Provider;
        getSide(): $LogicalSide;
        addLootAction<T extends $RegistrateLootTables>(arg0: $RegistrateLootTableProvider$LootType<T>, arg1: $NonNullConsumer_<T>): void;
        addLootAction(arg0: $LootContextParamSet, arg1: $Consumer_<$BiConsumer<$ResourceKey<$LootTable>, $LootTable$Builder>>): void;
        subProviders: $List<$LootTableProvider$SubProviderEntry>;
        constructor(arg0: $AbstractRegistrate<never>, arg1: $PackOutput, arg2: $CompletableFuture<$HolderLookup$Provider>);
        get provider(): $HolderLookup$Provider;
        get side(): $LogicalSide;
    }
}
