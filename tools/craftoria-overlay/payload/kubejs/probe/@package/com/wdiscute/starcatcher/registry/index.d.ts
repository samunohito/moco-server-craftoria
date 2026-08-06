import { $Level_ } from "@package/net/minecraft/world/level";
import { $Codec } from "@package/com/mojang/serialization";
import { $AbstractFishRestriction$Context_, $RarityCountRestriction$RarityCount_, $AbstractFishRestriction_, $DaytimeRestriction, $SeasonRestriction, $AbstractFishRestriction, $WeatherRestriction } from "@package/com/wdiscute/starcatcher/registry/fishrestrictions";
import { $Item, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Style, $Component } from "@package/net/minecraft/network/chat";
import { $AbstractMinigameModifier } from "@package/com/wdiscute/starcatcher/registry/minigamemodifiers";
import { $EntityType, $Entity } from "@package/net/minecraft/world/entity";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $List, $List_ } from "@package/java/util";
import { $StringRepresentable } from "@package/net/minecraft/util";
import { $Supplier_, $Supplier } from "@package/java/util/function";
import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $Holder_, $Holder, $RegistryAccess, $Registry } from "@package/net/minecraft/core";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $RegistryFriendlyByteBuf, $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $Enum, $Record } from "@package/java/lang";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
export * as fishrestrictions from "@package/com/wdiscute/starcatcher/registry/fishrestrictions";
export * as minigamemodifiers from "@package/com/wdiscute/starcatcher/registry/minigamemodifiers";
export * as tackleskin from "@package/com/wdiscute/starcatcher/registry/tackleskin";
export * as sweetspotbehaviour from "@package/com/wdiscute/starcatcher/registry/sweetspotbehaviour";

declare module "@package/com/wdiscute/starcatcher/registry" {
    export class $FishProperties$SizeAndWeight extends $Record {
        static getRandomWeight(arg0: $FishProperties_, arg1: number): number;
        static getRandomSize(arg0: $FishProperties_, arg1: number): number;
        sizeDeviation(): number;
        goldenChance(): number;
        sizeAverage(): number;
        weightAverage(): number;
        weightDeviation(): number;
        static CODEC: $Codec<$FishProperties$SizeAndWeight>;
        static NONE: $FishProperties$SizeAndWeight;
        static DEFAULT: $FishProperties$SizeAndWeight;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $FishProperties$SizeAndWeight>;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number);
        constructor(sizeAverage: number, sizeDeviation: number, weightAverage: number, weightDeviation: number, goldenChance: number);
    }
    /**
     * Values that may be interpreted as {@link $FishProperties$SizeAndWeight}.
     */
    export type $FishProperties$SizeAndWeight_ = { weightDeviation?: number, weightAverage?: number, sizeDeviation?: number, goldenChance?: number, sizeAverage?: number,  } | [weightDeviation?: number, weightAverage?: number, sizeDeviation?: number, goldenChance?: number, sizeAverage?: number, ];
    export class $FishProperties$Rarity extends $Enum<$FishProperties$Rarity> implements $StringRepresentable {
        static values(): $FishProperties$Rarity[];
        static valueOf(arg0: string): $FishProperties$Rarity;
        getId(): number;
        getXp(): number;
        wrapWithRarityMarkdown(arg0: string): $Component;
        static isGolden(arg0: $ItemStack_): boolean;
        getStyle(): $Style;
        getSerializedName(): string;
        getStoneHookGraceTicks(): number;
        wrapWithRarityMarkdownAsString(arg0: string): string;
        getRemappedEnumConstantName(): string;
        static CODEC: $Codec<$FishProperties$Rarity>;
        static RARE: $FishProperties$Rarity;
        static EPIC: $FishProperties$Rarity;
        static UNCOMMON: $FishProperties$Rarity;
        static COMMON: $FishProperties$Rarity;
        static NONE: $FishProperties$Rarity;
        static TRASH: $FishProperties$Rarity;
        static GOLDEN: $FishProperties$Rarity;
        static LEGENDARY: $FishProperties$Rarity;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $FishProperties$Rarity>;
        get id(): number;
        get xp(): number;
        get style(): $Style;
        get serializedName(): string;
        get stoneHookGraceTicks(): number;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $FishProperties$Rarity}.
     */
    export type $FishProperties$Rarity_ = "none" | "trash" | "common" | "uncommon" | "rare" | "epic" | "legendary" | "golden";
    export class $FishProperties$Star extends $Record {
        name(): string;
        x(): number;
        static transform(arg0: number): number;
        y(): number;
        connections(): $List<string>;
        debugColor(): number;
        static fromRaAndDec(arg0: string, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, ...arg6: string[]): $FishProperties$Star;
        static fromRaAndDec(arg0: string, arg1: number, arg2: number, arg3: number, ...arg4: string[]): $FishProperties$Star;
        static CODEC: $Codec<$FishProperties$Star>;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $FishProperties$Star>;
        static DEFAULT: $FishProperties$Star;
        constructor(name: string, x: number, y: number, connections: $List_<string>, debugColor: number);
    }
    /**
     * Values that may be interpreted as {@link $FishProperties$Star}.
     */
    export type $FishProperties$Star_ = { x?: number, debugColor?: number, name?: string, connections?: $List_<string>, y?: number,  } | [x?: number, debugColor?: number, name?: string, connections?: $List_<string>, y?: number, ];
    export class $FishProperties$CatchInfo$FishEntryType extends $Enum<$FishProperties$CatchInfo$FishEntryType> implements $StringRepresentable {
        static values(): $FishProperties$CatchInfo$FishEntryType[];
        static valueOf(arg0: string): $FishProperties$CatchInfo$FishEntryType;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static CODEC: $Codec<$FishProperties$CatchInfo$FishEntryType>;
        static EXTRA: $FishProperties$CatchInfo$FishEntryType;
        static FISH: $FishProperties$CatchInfo$FishEntryType;
        static SECRET: $FishProperties$CatchInfo$FishEntryType;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $FishProperties$CatchInfo$FishEntryType>;
        static TROPHY: $FishProperties$CatchInfo$FishEntryType;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $FishProperties$CatchInfo$FishEntryType}.
     */
    export type $FishProperties$CatchInfo$FishEntryType_ = "fish" | "trophy" | "secret" | "extra";
    export class $FishProperties extends $Record {
        static builder(): $FishProperties$Builder;
        static getKey(arg0: $Level_, arg1: $FishProperties_): $ResourceLocation;
        dif(): $FishProperties$Difficulty;
        getDisplayName(): $Component;
        catchInfo(): $FishProperties$CatchInfo;
        static getFP(arg0: $Level_, arg1: $ResourceLocation_): $FishProperties;
        static getFP(arg0: $RegistryAccess, arg1: $ResourceLocation_): $FishProperties;
        sizeWeight(): $FishProperties$SizeAndWeight;
        static sizeWeight(arg0: number, arg1: number, arg2: number, arg3: number): $FishProperties$SizeAndWeight;
        restrictions(): $List<$AbstractFishRestriction>;
        static getBiomesBlacklistAsList(arg0: $List_<$ResourceLocation_>, arg1: $List_<$ResourceLocation_>, arg2: $Level_): $List<$ResourceLocation>;
        star(): $FishProperties$Star;
        static getAllFPs(arg0: $RegistryAccess): $List<$FishProperties>;
        static getAllFPs(arg0: $Level_): $List<$FishProperties>;
        static getSecrets(arg0: $Level_): $List<$FishProperties>;
        static getSecrets(arg0: $RegistryAccess): $List<$FishProperties>;
        toLoc(arg0: $Level_): $ResourceLocation;
        rarity(): $FishProperties$Rarity;
        static getFishes(arg0: $RegistryAccess): $List<$FishProperties>;
        static getFishes(arg0: $Level_): $List<$FishProperties>;
        static getRegistry(arg0: $Level_): $Registry<$FishProperties>;
        static spawnFishFromPlayerFishing(arg0: $ServerPlayer, arg1: number, arg2: boolean, arg3: boolean, arg4: number): void;
        static getTrophies(arg0: $Level_): $List<$FishProperties>;
        static getTrophies(arg0: $RegistryAccess): $List<$FishProperties>;
        hasGuideEntry(): boolean;
        calculateChance(arg0: $Entity, arg1: $Level_, arg2: $ItemStack_, arg3: $AbstractFishRestriction$Context_): number;
        static getNonFishes(arg0: $RegistryAccess): $List<$FishProperties>;
        static getNonFishes(arg0: $Level_): $List<$FishProperties>;
        skipMinigame(): boolean;
        loadTreasure(arg0: $ServerPlayer): $FishProperties;
        withHideCatch(): $FishProperties;
        baseChance(): number;
        static getBiomesAsListFromTags(arg0: $List_<$ResourceLocation_>, arg1: $List_<$ResourceLocation_>, arg2: $Level_): $List<$ResourceLocation>;
        static makeItemStack(arg0: $ItemStack_, arg1: $FishProperties_, arg2: number, arg3: number, arg4: number, arg5: boolean, arg6: $Player, arg7: boolean): $ItemStack;
        static VANILLA_FISH: $FishProperties;
        static CODEC: $Codec<$FishProperties>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $FishProperties>;
        /**
         * @deprecated
         */
        static DEFAULT: $FishProperties;
        constructor(catchInfo: $FishProperties$CatchInfo_, star: $FishProperties$Star_, baseChance: number, sizeWeight: $FishProperties$SizeAndWeight_, rarity: $FishProperties$Rarity_, restrictions: $List_<$AbstractFishRestriction_>, dif: $FishProperties$Difficulty_, skipMinigame: boolean, hasGuideEntry: boolean);
        get displayName(): $Component;
    }
    /**
     * Values that may be interpreted as {@link $FishProperties}.
     */
    export type $FishProperties_ = RegistryTypes.StarcatcherFish | { catchInfo?: $FishProperties$CatchInfo_, star?: $FishProperties$Star_, rarity?: $FishProperties$Rarity_, skipMinigame?: boolean, restrictions?: $List_<$AbstractFishRestriction_>, hasGuideEntry?: boolean, dif?: $FishProperties$Difficulty_, baseChance?: number, sizeWeight?: $FishProperties$SizeAndWeight_,  } | [catchInfo?: $FishProperties$CatchInfo_, star?: $FishProperties$Star_, rarity?: $FishProperties$Rarity_, skipMinigame?: boolean, restrictions?: $List_<$AbstractFishRestriction_>, hasGuideEntry?: boolean, dif?: $FishProperties$Difficulty_, baseChance?: number, sizeWeight?: $FishProperties$SizeAndWeight_, ];
    export class $FishProperties$SweetSpot extends $Record {
        size(): number;
        flip(): $FishProperties$SweetSpot;
        vanishing(arg0: number): $FishProperties$SweetSpot;
        texturePath(): $ResourceLocation;
        movingRate(): number;
        withModifiers(...arg0: $Supplier_<$Supplier<$AbstractMinigameModifier>>[]): $FishProperties$SweetSpot;
        moving(arg0: number): $FishProperties$SweetSpot;
        reward(): number;
        vanishingRate(): number;
        isFlip(): boolean;
        particleColor(): number;
        sweetSpotType(): $ResourceLocation;
        onHitModifiers(): $List<$Supplier<$Supplier<$AbstractMinigameModifier>>>;
        static FREEZE: $FishProperties$SweetSpot;
        static END_CRAB_CLAW: $FishProperties$SweetSpot;
        static STONE_5: $FishProperties$SweetSpot;
        static NORMAL_HEAVY: $FishProperties$SweetSpot;
        static DEEPSLATE_CRAB_LEG: $FishProperties$SweetSpot;
        static NORMAL_STEADY: $FishProperties$SweetSpot;
        static NETHER_CRAB_LEG: $FishProperties$SweetSpot;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $FishProperties$SweetSpot>;
        static WITHER: $FishProperties$SweetSpot;
        static CREEPER: $FishProperties$SweetSpot;
        static NETHER_CRAB_CLAW: $FishProperties$SweetSpot;
        static LIST_CODEC: $Codec<$List<$FishProperties$SweetSpot>>;
        static TNT: $FishProperties$SweetSpot;
        static THIN_STEADY: $FishProperties$SweetSpot;
        static TRASH: $FishProperties$SweetSpot;
        static END_CRAB_LEG: $FishProperties$SweetSpot;
        static WITHER_BIG: $FishProperties$SweetSpot;
        static AQUA: $FishProperties$SweetSpot;
        static CODEC: $Codec<$FishProperties$SweetSpot>;
        static DEEPSLATE_CRAB_CLAW: $FishProperties$SweetSpot;
        static LIST_STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $List<$FishProperties$SweetSpot>>;
        static TREASURE: $FishProperties$SweetSpot;
        static WITHER_REVERSED: $FishProperties$SweetSpot;
        static STONE: $FishProperties$SweetSpot;
        static LEAF: $FishProperties$SweetSpot;
        static NORMAL: $FishProperties$SweetSpot;
        static THIN: $FishProperties$SweetSpot;
        static THIN_STEADY_MOSSY: $FishProperties$SweetSpot;
        static OBSIDIAN_CRAB_CLAW: $FishProperties$SweetSpot;
        static OBSIDIAN_CRAB_LEG: $FishProperties$SweetSpot;
        constructor(sweetSpotType: $ResourceLocation_, texturePath: $ResourceLocation_, size: number, reward: number, isFlip: boolean, vanishingRate: number, movingRate: number, particleColor: number, onHitModifiers: $List_<$Supplier_<$Supplier<$AbstractMinigameModifier>>>);
        constructor(arg0: $ResourceLocation_, arg1: $ResourceLocation_, arg2: number, arg3: number, arg4: boolean, arg5: number, arg6: number, arg7: number);
        constructor(arg0: $ResourceLocation_, arg1: $ResourceLocation_, arg2: number, arg3: number, arg4: number);
        constructor(arg0: $ResourceLocation_, arg1: $ResourceLocation_, arg2: number, arg3: number, arg4: number, arg5: $List_<$Supplier_<$Supplier<$AbstractMinigameModifier>>>);
    }
    /**
     * Values that may be interpreted as {@link $FishProperties$SweetSpot}.
     */
    export type $FishProperties$SweetSpot_ = { onHitModifiers?: $List_<$Supplier_<$Supplier<$AbstractMinigameModifier>>>, particleColor?: number, movingRate?: number, size?: number, texturePath?: $ResourceLocation_, sweetSpotType?: $ResourceLocation_, isFlip?: boolean, vanishingRate?: number, reward?: number,  } | [onHitModifiers?: $List_<$Supplier_<$Supplier<$AbstractMinigameModifier>>>, particleColor?: number, movingRate?: number, size?: number, texturePath?: $ResourceLocation_, sweetSpotType?: $ResourceLocation_, isFlip?: boolean, vanishingRate?: number, reward?: number, ];
    export class $FishProperties$CatchInfo$Builder {
        extra(): $FishProperties$CatchInfo$Builder;
        build(): $FishProperties$CatchInfo;
        withFish(arg0: $Holder_<$Item>): $FishProperties$CatchInfo$Builder;
        secret(): $FishProperties$CatchInfo$Builder;
        trophy(): $FishProperties$CatchInfo$Builder;
        withAlwaysSpawnEntity(arg0: boolean): $FishProperties$CatchInfo$Builder;
        withEntityToSpawn(arg0: $Holder_<$EntityType<never>>): $FishProperties$CatchInfo$Builder;
        withBucketedFish(arg0: $Holder_<$Item>): $FishProperties$CatchInfo$Builder;
        withTreasure(arg0: $ItemStack_): $FishProperties$CatchInfo$Builder;
        withTreasure(arg0: $ResourceLocation_): $FishProperties$CatchInfo$Builder;
        withOverrideMinigameWith(arg0: $Holder_<$Item>): $FishProperties$CatchInfo$Builder;
        withFishEntryType(arg0: $FishProperties$CatchInfo$FishEntryType_): $FishProperties$CatchInfo$Builder;
        constructor();
    }
    export class $FishProperties$Builder {
        extra(): $FishProperties$Builder;
        build(): $FishProperties;
        withItemToOverrideWith(arg0: $Holder_<$Item>): $FishProperties$Builder;
        withFish(arg0: $Holder_<$Item>): $FishProperties$Builder;
        secret(): $FishProperties$Builder;
        addModifier(arg0: $List_<$Supplier_<$Supplier<$AbstractMinigameModifier>>>): $FishProperties$Builder;
        addModifier(arg0: $Supplier_<$Supplier<$AbstractMinigameModifier>>): $FishProperties$Builder;
        trophy(): $FishProperties$Builder;
        withRarity(arg0: $FishProperties$Rarity_): $FishProperties$Builder;
        withAlwaysSpawnEntity(arg0: boolean): $FishProperties$Builder;
        withAlwaysSpawnEntity(): $FishProperties$Builder;
        withStar(arg0: $FishProperties$Star_): $FishProperties$Builder;
        withSkipMinigame(arg0: boolean): $FishProperties$Builder;
        withEntityToSpawn(arg0: $Holder_<$EntityType<never>>): $FishProperties$Builder;
        withBucketedFish(arg0: $Holder_<$Item>): $FishProperties$Builder;
        withBaseChance(arg0: number): $FishProperties$Builder;
        withCatchInfo(arg0: $FishProperties$CatchInfo$Builder): $FishProperties$Builder;
        addRestrictions(arg0: $List_<$AbstractFishRestriction_>): $FishProperties$Builder;
        addRestrictions(...arg0: $AbstractFishRestriction_[]): $FishProperties$Builder;
        withTreasure(arg0: $ResourceLocation_): $FishProperties$Builder;
        withSizeAndWeight(arg0: $FishProperties$SizeAndWeight_): $FishProperties$Builder;
        withMaxLimit(arg0: number, arg1: string): $FishProperties$Builder;
        withMaxLimit(arg0: number): $FishProperties$Builder;
        withSeasons(arg0: $SeasonRestriction): $FishProperties$Builder;
        withWeather(arg0: $WeatherRestriction): $FishProperties$Builder;
        withHasGuideEntry(arg0: boolean): $FishProperties$Builder;
        withTreasureHardCoded(arg0: $ItemStack_): $FishProperties$Builder;
        addRarityRestriction(...arg0: $RarityCountRestriction$RarityCount_[]): $FishProperties$Builder;
        withDaytimeRestriction(arg0: $DaytimeRestriction): $FishProperties$Builder;
        withPercentageChance(arg0: number): $FishProperties$Builder;
        withDifficulty(arg0: $FishProperties$Difficulty_): $FishProperties$Builder;
        constructor();
    }
    export class $FishProperties$Difficulty extends $Record {
        modifiers(): $List<$Supplier<$Supplier<$AbstractMinigameModifier>>>;
        flip(): $FishProperties$Difficulty;
        vanishing(arg0: number): $FishProperties$Difficulty;
        vanishing(): $FishProperties$Difficulty;
        sweetSpots(): $List<$FishProperties$SweetSpot>;
        decay(): number;
        moving(): $FishProperties$Difficulty;
        moving(arg0: number): $FishProperties$Difficulty;
        hp(): number;
        penalty(): number;
        speed(): number;
        addModifiers(arg0: $List_<$Supplier_<$Supplier<$AbstractMinigameModifier>>>): $FishProperties$Difficulty;
        static FOUR_STONE_SPOTS: $FishProperties$Difficulty;
        static HEAVY_FIVE_NORMAL: $FishProperties$Difficulty;
        static SINGLE_AQUA: $FishProperties$Difficulty;
        static FOUR_THIN_VANISHING: $FishProperties$Difficulty;
        static NON_STOP_ACTION_THREE_BIG: $FishProperties$Difficulty;
        static JOEL: $FishProperties$Difficulty;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $FishProperties$Difficulty>;
        static SINGLE_BIG_FAST: $FishProperties$Difficulty;
        static EASY_VANISHING: $FishProperties$Difficulty;
        static EIGHT_THIN_VANISHING: $FishProperties$Difficulty;
        static CERBERAY: $FishProperties$Difficulty;
        static MEDIUM_MOVING: $FishProperties$Difficulty;
        static FOUR_BIG: $FishProperties$Difficulty;
        static SINGLE_AQUA_MOVING: $FishProperties$Difficulty;
        static TWO_THIN: $FishProperties$Difficulty;
        static EASY: $FishProperties$Difficulty;
        static CODEC: $Codec<$FishProperties$Difficulty>;
        static MEDIUM: $FishProperties$Difficulty;
        static EIGHT_STONE_SPOTS: $FishProperties$Difficulty;
        static TWO_AQUA: $FishProperties$Difficulty;
        static HARD_MOVING: $FishProperties$Difficulty;
        static VOIDBITER: $FishProperties$Difficulty;
        static OBSIDIAN_CRAB: $FishProperties$Difficulty;
        static EASY_MOVING: $FishProperties$Difficulty;
        static HARD_VANISHING: $FishProperties$Difficulty;
        static THIN_NO_DECAY_NOT_FORGIVING: $FishProperties$Difficulty;
        static FOUR_BIG_MOVING: $FishProperties$Difficulty;
        static THREE_BIG_TWO_THIN_VANISHING: $FishProperties$Difficulty;
        static SINGLE_BIG_FAST_VANISHING: $FishProperties$Difficulty;
        static STONEFISH: $FishProperties$Difficulty;
        static SINGLE_THIN_FAST: $FishProperties$Difficulty;
        static DEEPSLATE_CRAB: $FishProperties$Difficulty;
        static TWO_AQUA_ONE_THIN: $FishProperties$Difficulty;
        static TWO_THIN_NO_DECAY: $FishProperties$Difficulty;
        static HARD: $FishProperties$Difficulty;
        static EIGHT_THIN_MOVING: $FishProperties$Difficulty;
        static NETHER_CRAB: $FishProperties$Difficulty;
        static MEDIUM_VANISHING_MOVING: $FishProperties$Difficulty;
        static FOUR_THIN_MOVING: $FishProperties$Difficulty;
        static WITHER: $FishProperties$Difficulty;
        static EIGHT_THIN: $FishProperties$Difficulty;
        static SINGLE_BIG_FAST_MOVING: $FishProperties$Difficulty;
        static CREEPER: $FishProperties$Difficulty;
        static NON_STOP_ACTION_AQUA: $FishProperties$Difficulty;
        static TRASH: $FishProperties$Difficulty;
        static FOUR_AQUA: $FishProperties$Difficulty;
        static AURORA: $FishProperties$Difficulty;
        static EIGHT_THIN_MOVING_VANISHING: $FishProperties$Difficulty;
        static FOUR_THIN: $FishProperties$Difficulty;
        static FOUR_BIG_VANISHING: $FishProperties$Difficulty;
        static NO_SWEET_SPOTS: $FishProperties$Difficulty;
        static TWO_AQUA_ONE_THIN_VANISHING: $FishProperties$Difficulty;
        static HEAVY_EIGHT_AQUA_MOVING: $FishProperties$Difficulty;
        static THREE_BIG_TWO_THIN: $FishProperties$Difficulty;
        static END_CRAB: $FishProperties$Difficulty;
        static TWO_STONE_SPOTS_EASY: $FishProperties$Difficulty;
        static HEAVY_EIGHT_AQUA: $FishProperties$Difficulty;
        static MEDIUM_VANISHING: $FishProperties$Difficulty;
        static EASY_FAST_FISH: $FishProperties$Difficulty;
        constructor(hp: number, speed: number, penalty: number, decay: number, modifiers: $List_<$Supplier_<$Supplier<$AbstractMinigameModifier>>>, sweetSpots: $List_<$FishProperties$SweetSpot_>);
        constructor(arg0: number, arg1: number, arg2: number, arg3: $List_<$Supplier_<$Supplier<$AbstractMinigameModifier>>>, ...arg4: $FishProperties$SweetSpot_[]);
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $List_<$Supplier_<$Supplier<$AbstractMinigameModifier>>>, ...arg5: $FishProperties$SweetSpot_[]);
    }
    /**
     * Values that may be interpreted as {@link $FishProperties$Difficulty}.
     */
    export type $FishProperties$Difficulty_ = { decay?: number, hp?: number, penalty?: number, sweetSpots?: $List_<$FishProperties$SweetSpot_>, speed?: number, modifiers?: $List_<$Supplier_<$Supplier<$AbstractMinigameModifier>>>,  } | [decay?: number, hp?: number, penalty?: number, sweetSpots?: $List_<$FishProperties$SweetSpot_>, speed?: number, modifiers?: $List_<$Supplier_<$Supplier<$AbstractMinigameModifier>>>, ];
    export class $FishProperties$CatchInfo extends $Record {
        fish(): $Holder<$Item>;
        treasureIs(): $ItemStack;
        withItemToOverrideWith(arg0: $Holder_<$Item>): $FishProperties$CatchInfo;
        overrideMinigameWith(): $Holder<$Item>;
        fishEntryType(): $FishProperties$CatchInfo$FishEntryType;
        entityToSpawn(): $Holder<$EntityType<never>>;
        alwaysSpawnEntity(): boolean;
        bucketedFish(): $Holder<$Item>;
        static CODEC: $Codec<$FishProperties$CatchInfo>;
        static VANILLA: $FishProperties$CatchInfo;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $FishProperties$CatchInfo>;
        static DEFAULT: $FishProperties$CatchInfo;
        constructor(fish: $Holder_<$Item>, bucketedFish: $Holder_<$Item>, entityToSpawn: $Holder_<$EntityType<never>>, alwaysSpawnEntity: boolean, overrideMinigameWith: $Holder_<$Item>, treasureIs: $ItemStack_, fishEntryType: $FishProperties$CatchInfo$FishEntryType_);
    }
    /**
     * Values that may be interpreted as {@link $FishProperties$CatchInfo}.
     */
    export type $FishProperties$CatchInfo_ = { overrideMinigameWith?: $Holder_<$Item>, fishEntryType?: $FishProperties$CatchInfo$FishEntryType_, entityToSpawn?: $Holder_<$EntityType<never>>, treasureIs?: $ItemStack_, bucketedFish?: $Holder_<$Item>, fish?: $Holder_<$Item>, alwaysSpawnEntity?: boolean,  } | [overrideMinigameWith?: $Holder_<$Item>, fishEntryType?: $FishProperties$CatchInfo$FishEntryType_, entityToSpawn?: $Holder_<$EntityType<never>>, treasureIs?: $ItemStack_, bucketedFish?: $Holder_<$Item>, fish?: $Holder_<$Item>, alwaysSpawnEntity?: boolean, ];
    export interface $FishProperties extends RegistryMarked<RegistryTypes.StarcatcherFishTag, RegistryTypes.StarcatcherFish> {}
}
