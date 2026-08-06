import { $Annotation } from "@package/java/lang/annotation";
import { $MinecraftServer, $MinecraftServer$ReloadableResources } from "@package/net/minecraft/server";
import { $CompletableFuture } from "@package/java/util/concurrent";
import { $CommandDispatcher, $StringReader } from "@package/com/mojang/brigadier";
import { $EntityType_, $LivingEntity, $Mob, $Entity } from "@package/net/minecraft/world/entity";
import { $GameTestHelperAccessor } from "@package/com/simibubi/create/foundation/mixin/accessor";
import { $Set_, $List, $Collection_, $Collection } from "@package/java/util";
import { $Supplier_, $Consumer_, $Predicate_, $Consumer, $IntPredicate_, $Function_ } from "@package/java/util/function";
import { $ServerLevel, $ServerPlayer } from "@package/net/minecraft/server/level";
import { $BlockPos, $BlockPos_, $Vec3i, $Holder_, $Direction_ } from "@package/net/minecraft/core";
import { $Suggestions, $SuggestionsBuilder } from "@package/com/mojang/brigadier/suggestion";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $GameProfile } from "@package/com/mojang/authlib";
import { $Method } from "@package/java/lang/reflect";
import { $CommandContext } from "@package/com/mojang/brigadier/context";
import { $RuntimeException, $Exception, $Comparable, $Thread, $Throwable, $Record, $Class, $Runnable_ } from "@package/java/lang";
import { $BoundingBox } from "@package/net/minecraft/world/level/levelgen/structure";
import { $Heightmap$Types_ } from "@package/net/minecraft/world/level/levelgen";
import { $File_ } from "@package/java/io";
import { $GameType_, $LevelSettings } from "@package/net/minecraft/world/level";
import { $Item_, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $Biome } from "@package/net/minecraft/world/level/biome";
import { $MobEffect } from "@package/net/minecraft/world/effect";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $ItemEntity } from "@package/net/minecraft/world/entity/item";
import { $LevelStorageSource$LevelStorageAccess, $PlayerDataStorage } from "@package/net/minecraft/world/level/storage";
import { $CommandSourceStack } from "@package/net/minecraft/commands";
import { $SampleLogger } from "@package/net/minecraft/util/debugchart";
import { $PackRepository } from "@package/net/minecraft/server/packs/repository";
import { $Property } from "@package/net/minecraft/world/level/block/state/properties";
import { $Stream } from "@package/java/util/stream";
import { $ResourceKey_ } from "@package/net/minecraft/resources";
import { $Block, $Rotation_, $Block_, $Rotation } from "@package/net/minecraft/world/level/block";
import { $AABB_, $Vec3, $AABB, $Vec3_, $BlockHitResult } from "@package/net/minecraft/world/phys";
import { $BlockEntity, $StructureBlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $ArgumentType } from "@package/com/mojang/brigadier/arguments";

declare module "@package/net/minecraft/gametest/framework" {
    export class $GameTestRunner$Builder {
        build(): $GameTestRunner;
        static fromInfo(batches: $Collection_<$GameTestInfo>, level: $ServerLevel): $GameTestRunner$Builder;
        newStructureSpawner(newStructureSpawner: $GameTestRunner$StructureSpawner_): $GameTestRunner$Builder;
        batcher(batcher: $GameTestRunner$GameTestBatcher_): $GameTestRunner$Builder;
        static fromBatches(batches: $Collection_<$GameTestBatch_>, level: $ServerLevel): $GameTestRunner$Builder;
        haltOnError(haltOnError: boolean): $GameTestRunner$Builder;
        existingStructureSpawner(existingStructureSpawner: $StructureGridSpawner): $GameTestRunner$Builder;
    }
    /**
     * Annotate a method with this annotation in order to have it run after the specified `#batch()`.
     */
    export class $AfterBatch implements $Annotation {
        batch(): string;
    }
    export class $GlobalTestReporter {
        static finish(): void;
        static replaceWith(testReporter: $TestReporter): void;
        static onTestFailed(testInfo: $GameTestInfo): void;
        static onTestSuccess(testInfo: $GameTestInfo): void;
        constructor();
    }
    export class $MultipleTestTracker {
        remove(testInfo: $GameTestInfo): void;
        isDone(): boolean;
        getProgressBar(): string;
        addListener(testListener: $GameTestListener): void;
        getTotalCount(): number;
        getFailedOptionalCount(): number;
        getFailedRequiredCount(): number;
        addTestToTrack(testInfo: $GameTestInfo): void;
        getDoneCount(): number;
        hasFailedRequired(): boolean;
        hasFailedOptional(): boolean;
        getFailedRequired(): $Collection<$GameTestInfo>;
        getFailedOptional(): $Collection<$GameTestInfo>;
        addFailureListener(onFail: $Consumer_<$GameTestInfo>): void;
        constructor();
        constructor(testInfos: $Collection_<$GameTestInfo>);
        get done(): boolean;
        get progressBar(): string;
        get totalCount(): number;
        get failedOptionalCount(): number;
        get failedRequiredCount(): number;
        get doneCount(): number;
        get failedRequired(): $Collection<$GameTestInfo>;
        get failedOptional(): $Collection<$GameTestInfo>;
    }
    export class $StructureUtils {
        static getStructureBounds(structureBlockEntity: $StructureBlockEntity): $AABB;
        static encaseStructure(bounds: $AABB_, level: $ServerLevel, placeBarriers: boolean): void;
        static getStructureBoundingBox(pos: $BlockPos_, offset: $Vec3i, rotation: $Rotation_): $BoundingBox;
        static getStructureBoundingBox(structureBlockEntity: $StructureBlockEntity): $BoundingBox;
        static prepareTestStructure(gameTestInfo: $GameTestInfo, pos: $BlockPos_, rotation: $Rotation_, level: $ServerLevel): $StructureBlockEntity;
        static getStructureOrigin(structureBlockEntity: $StructureBlockEntity): $BlockPos;
        static addCommandBlockAndButtonToStartTest(structureBlockPos: $BlockPos_, offset: $BlockPos_, rotation: $Rotation_, serverLevel: $ServerLevel): void;
        static clearSpaceForStructure(boundingBox: $BoundingBox, level: $ServerLevel): void;
        static findNearestStructureBlock(pos: $BlockPos_, radius: number, level: $ServerLevel): ($BlockPos) | undefined;
        static lookedAtStructureBlockPos(pos: $BlockPos_, entity: $Entity, level: $ServerLevel): $Stream<$BlockPos>;
        static findStructureBlocks(pos: $BlockPos_, radius: number, level: $ServerLevel): $Stream<$BlockPos>;
        static getTransformedFarCorner(pos: $BlockPos_, offset: $Vec3i, rotation: $Rotation_): $BlockPos;
        static createNewEmptyStructureBlock(structureName: string, pos: $BlockPos_, size: $Vec3i, rotation: $Rotation_, serverLevel: $ServerLevel): void;
        static getRotationForRotationSteps(rotationSteps: number): $Rotation;
        static findStructureBlockContainingPos(pos: $BlockPos_, radius: number, level: $ServerLevel): ($BlockPos) | undefined;
        static getRotationStepsForRotation(rotation: $Rotation_): number;
        static findStructureByTestFunction(pos: $BlockPos_, radius: number, level: $ServerLevel, testName: string): $Stream<$BlockPos>;
        static removeBarriers(bounds: $AABB_, level: $ServerLevel): void;
        static DEFAULT_TEST_STRUCTURES_DIR: string;
        static testStructuresDir: string;
        static DEFAULT_Y_SEARCH_RADIUS: number;
        constructor();
    }
    export class $StructureBlockPosFinder {
    }
    export interface $StructureBlockPosFinder {
        findStructureBlockPos(): $Stream<$BlockPos>;
    }
    /**
     * Values that may be interpreted as {@link $StructureBlockPosFinder}.
     */
    export type $StructureBlockPosFinder_ = (() => $Stream<$BlockPos_>);
    export class $GameTestAssertPosException extends $GameTestAssertException {
        getAbsolutePos(): $BlockPos;
        getRelativePos(): $BlockPos;
        getMessageToShowAtBlock(): string;
        constructor(exceptionMessage: string, absolutePos: $BlockPos_, relativePos: $BlockPos_, tick: number);
        get absolutePos(): $BlockPos;
        get relativePos(): $BlockPos;
        get messageToShowAtBlock(): string;
    }
    export class $TestCommand$TestBatchSummaryDisplayer extends $Record implements $GameTestBatchListener {
    }
    /**
     * Values that may be interpreted as {@link $TestCommand$TestBatchSummaryDisplayer}.
     */
    export type $TestCommand$TestBatchSummaryDisplayer_ = { source?: $CommandSourceStack,  } | [source?: $CommandSourceStack, ];
    export class $GameTestBatchListener {
    }
    export interface $GameTestBatchListener {
        testBatchStarting(batch: $GameTestBatch_): void;
        testBatchFinished(batch: $GameTestBatch_): void;
    }
    export class $RetryOptions extends $Record {
        static noRetries(): $RetryOptions;
        hasRetries(): boolean;
        unlimitedTries(): boolean;
        numberOfTries(): number;
        hasTriesLeft(attempts: number, successes: number): boolean;
        haltOnFailure(): boolean;
        constructor(arg0: number, arg1: boolean);
    }
    /**
     * Values that may be interpreted as {@link $RetryOptions}.
     */
    export type $RetryOptions_ = { haltOnFailure?: boolean, numberOfTries?: number,  } | [haltOnFailure?: boolean, numberOfTries?: number, ];
    export class $TestFinder<T> implements $StructureBlockPosFinder, $TestFunctionFinder {
        source(): $CommandSourceStack;
        findStructureBlockPos(): $Stream<$BlockPos>;
        findTestFunctions(): $Stream<$TestFunction>;
    }
    export class $JUnitLikeTestReporter implements $TestReporter {
        finish(): void;
        save(destination: $File_): void;
        onTestFailed(testInfo: $GameTestInfo): void;
        onTestSuccess(testInfo: $GameTestInfo): void;
        constructor(destination: $File_);
    }
    export class $GameTestServer extends $MinecraftServer {
        static create(serverThread: $Thread, storageSource: $LevelStorageSource$LevelStorageAccess, packRepository: $PackRepository, testBatches: $Collection_<$TestFunction_>, spawnPos: $BlockPos_): $GameTestServer;
        /**
         * Initialises the server and starts it.
         */
        initServer(): boolean;
        getTickTimeLogger(): $SampleLogger;
        /**
         * Directly calls System.exit(0), instantly killing the program.
         */
        waitUntilNextTick(): void;
        static VANILLA_BRAND: string;
        static ANONYMOUS_PLAYER_PROFILE: $GameProfile;
        resources: $MinecraftServer$ReloadableResources;
        storageSource: $LevelStorageSource$LevelStorageAccess;
        static ABSOLUTE_MAX_WORLD_SIZE: number;
        static DEMO_SETTINGS: $LevelSettings;
        playerDataStorage: $PlayerDataStorage;
        get tickTimeLogger(): $SampleLogger;
    }
    export class $GameTestRunner$StructureSpawner {
        static NOT_SET: $GameTestRunner$StructureSpawner;
        static IN_PLACE: $GameTestRunner$StructureSpawner;
    }
    export interface $GameTestRunner$StructureSpawner {
        spawnStructure(gameTestInfo: $GameTestInfo): ($GameTestInfo) | undefined;
        onBatchStart(level: $ServerLevel): void;
    }
    /**
     * Values that may be interpreted as {@link $GameTestRunner$StructureSpawner}.
     */
    export type $GameTestRunner$StructureSpawner_ = ((arg0: $GameTestInfo) => ($GameTestInfo) | undefined);
    export class $GameTest implements $Annotation {
        batch(): string;
        template(): string;
        timeoutTicks(): number;
        requiredSuccesses(): number;
        skyAccess(): boolean;
        setupTicks(): number;
        required(): boolean;
        attempts(): number;
        manualOnly(): boolean;
        rotationSteps(): number;
        templateNamespace(): string;
    }
    export class $GameTestTimeoutException extends $RuntimeException {
        constructor(exceptionMessage: string);
    }
    export class $GameTestEvent {
    }
    export class $TestCommand$TestSummaryDisplayer extends $Record implements $GameTestListener {
        level(): $ServerLevel;
        tracker(): $MultipleTestTracker;
        testStructureLoaded(testInfo: $GameTestInfo): void;
        testPassed(test: $GameTestInfo, runner: $GameTestRunner): void;
        testFailed(test: $GameTestInfo, runner: $GameTestRunner): void;
        testAddedForRerun(oldTest: $GameTestInfo, newTest: $GameTestInfo, runner: $GameTestRunner): void;
        constructor(level: $ServerLevel, tracker: $MultipleTestTracker);
    }
    /**
     * Values that may be interpreted as {@link $TestCommand$TestSummaryDisplayer}.
     */
    export type $TestCommand$TestSummaryDisplayer_ = { level?: $ServerLevel, tracker?: $MultipleTestTracker,  } | [level?: $ServerLevel, tracker?: $MultipleTestTracker, ];
    export class $TestClassNameArgument implements $ArgumentType<string> {
        parse(reader: $StringReader): string;
        getExamples(): $Collection<string>;
        static testClassName(): $TestClassNameArgument;
        listSuggestions<S>(context: $CommandContext<S>, builder: $SuggestionsBuilder): $CompletableFuture<$Suggestions>;
        static getTestClassName(context: $CommandContext<$CommandSourceStack>, argument: string): string;
        parse<S>(arg0: $StringReader, arg1: S): string;
        constructor();
        get examples(): $Collection<string>;
    }
    export class $TestReporter {
    }
    export interface $TestReporter {
        finish(): void;
        onTestFailed(testInfo: $GameTestInfo): void;
        onTestSuccess(testInfo: $GameTestInfo): void;
    }
    export class $ReportGameListener implements $GameTestListener {
    }
    export class $TestFinder$Builder<T> {
        nearest(context: $CommandContext<$CommandSourceStack>): T;
        createMultipleCopies(count: number): $TestFinder$Builder<T>;
        radius(context: $CommandContext<$CommandSourceStack>, radius: number): T;
        locateByName(context: $CommandContext<$CommandSourceStack>, className: string): T;
        allTestsInClass(context: $CommandContext<$CommandSourceStack>, className: string): T;
        failedTests(context: $CommandContext<$CommandSourceStack>, onlyRequired: boolean): T;
        failedTests(context: $CommandContext<$CommandSourceStack>): T;
        allTests(context: $CommandContext<$CommandSourceStack>): T;
        allNearby(context: $CommandContext<$CommandSourceStack>): T;
        lookedAt(context: $CommandContext<$CommandSourceStack>): T;
        byArgument(context: $CommandContext<$CommandSourceStack>, className: string): T;
        constructor(contextProvider: $Function_<$TestFinder<T>, T>);
    }
    export class $GameTestListener {
    }
    export interface $GameTestListener {
        testStructureLoaded(testInfo: $GameTestInfo): void;
        testPassed(test: $GameTestInfo, runner: $GameTestRunner): void;
        testFailed(test: $GameTestInfo, runner: $GameTestRunner): void;
        testAddedForRerun(oldTest: $GameTestInfo, newTest: $GameTestInfo, runner: $GameTestRunner): void;
    }
    export class $TestFunction extends $Record {
        run(gameTestHelper: $GameTestHelper): void;
        "function"(): $Consumer<$GameTestHelper>;
        requiredSuccesses(): number;
        rotation(): $Rotation;
        maxTicks(): number;
        batchName(): string;
        skyAccess(): boolean;
        setupTicks(): number;
        isFlaky(): boolean;
        testName(): string;
        required(): boolean;
        maxAttempts(): number;
        manualOnly(): boolean;
        structureName(): string;
        constructor(arg0: string, arg1: string, arg2: string, arg3: $Rotation_, arg4: number, arg5: number, arg6: boolean, arg7: boolean, arg8: number, arg9: number, arg10: boolean, arg11: $Consumer_<$GameTestHelper>);
        constructor(batchName: string, testName: string, structureName: string, rotation: $Rotation_, maxTicks: number, setupTicks: number, arg6: boolean, required: $Consumer_<$GameTestHelper>);
        constructor(batchName: string, testName: string, structureName: string, maxTicks: number, setupTicks: number, arg5: boolean, required: $Consumer_<$GameTestHelper>);
        get flaky(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $TestFunction}.
     */
    export type $TestFunction_ = { testName?: string, manualOnly?: boolean, maxAttempts?: number, setupTicks?: number, function?: $Consumer_<$GameTestHelper>, required?: boolean, structureName?: string, maxTicks?: number, skyAccess?: boolean, batchName?: string, requiredSuccesses?: number, rotation?: $Rotation_,  } | [testName?: string, manualOnly?: boolean, maxAttempts?: number, setupTicks?: number, function?: $Consumer_<$GameTestHelper>, required?: boolean, structureName?: string, maxTicks?: number, skyAccess?: boolean, batchName?: string, requiredSuccesses?: number, rotation?: $Rotation_, ];
    export class $GameTestInfo {
        isDone(): boolean;
        fail(error: $Throwable): void;
        isRequired(): boolean;
        getLevel(): $ServerLevel;
        placeStructure(): $GameTestInfo;
        getStructureBounds(): $AABB;
        getTestName(): string;
        getTimeoutTicks(): number;
        setNorthWestCorner(northWestCorner: $BlockPos_): void;
        retryOptions(): $RetryOptions;
        startExecution(delay: number): $GameTestInfo;
        requiredSuccesses(): number;
        setRunAtTickTime(tickTime: number, arg1: $Runnable_): void;
        hasSucceeded(): boolean;
        tick(runner: $GameTestRunner): void;
        isFlaky(): boolean;
        getError(): $Throwable;
        getListeners(): $Stream<$GameTestListener>;
        addListener(listener: $GameTestListener): void;
        maxAttempts(): number;
        getRotation(): $Rotation;
        prepareTestStructure(): $GameTestInfo;
        getStructureBlockPos(): $BlockPos;
        getStructureBlockEntity(): $StructureBlockEntity;
        isOptional(): boolean;
        getTestFunction(): $TestFunction;
        getStructureName(): string;
        hasStarted(): boolean;
        getRunTime(): number;
        copyReset(): $GameTestInfo;
        succeed(): void;
        hasFailed(): boolean;
        sequences: $Collection<$GameTestSequence>;
        constructor(testFunction: $TestFunction_, rotation: $Rotation_, level: $ServerLevel, retryOptions: $RetryOptions_);
        get done(): boolean;
        get required(): boolean;
        get level(): $ServerLevel;
        get structureBounds(): $AABB;
        get testName(): string;
        get timeoutTicks(): number;
        set northWestCorner(value: $BlockPos_);
        get flaky(): boolean;
        get error(): $Throwable;
        get listeners(): $Stream<$GameTestListener>;
        get rotation(): $Rotation;
        get structureBlockPos(): $BlockPos;
        get structureBlockEntity(): $StructureBlockEntity;
        get optional(): boolean;
        get testFunction(): $TestFunction;
        get structureName(): string;
        get runTime(): number;
    }
    export class $TestFunctionArgument implements $ArgumentType<$TestFunction> {
        parse(reader: $StringReader): $TestFunction;
        getExamples(): $Collection<string>;
        listSuggestions<S>(context: $CommandContext<S>, builder: $SuggestionsBuilder): $CompletableFuture<$Suggestions>;
        static getTestFunction(context: $CommandContext<$CommandSourceStack>, argument: string): $TestFunction;
        static testFunctionArgument(): $TestFunctionArgument;
        static suggestTestFunction<S>(context: $CommandContext<S>, builder: $SuggestionsBuilder): $CompletableFuture<$Suggestions>;
        parse<S>(arg0: $StringReader, arg1: S): $TestFunction;
        constructor();
        get examples(): $Collection<string>;
    }
    export class $GameTestGenerator implements $Annotation {
    }
    export class $StructureGridSpawner implements $GameTestRunner$StructureSpawner {
        spawnStructure(gameTestInfo: $GameTestInfo): ($GameTestInfo) | undefined;
        onBatchStart(level: $ServerLevel): void;
        constructor(northTestNorthWestCorner: $BlockPos_, testsPerRow: number, clearOnBatch: boolean);
    }
    export class $TestCommand {
        static register(dispatcher: $CommandDispatcher<$CommandSourceStack>): void;
        static STRUCTURE_BLOCK_NEARBY_SEARCH_RADIUS: number;
        static STRUCTURE_BLOCK_FULL_SEARCH_RADIUS: number;
        constructor();
    }
    export class $GameTestRegistry {
        /**
         * @deprecated
         */
        static register(testClass: $Class<never>): void;
        /**
         * @deprecated
         */
        static register(arg0: $Method, arg1: $Set_<string>): void;
        /**
         * @deprecated
         */
        static register(testMethod: $Method): void;
        static getLastFailedTests(): $Stream<$TestFunction>;
        static forgetFailedTests(): void;
        static getTestFunction(testName: string): $TestFunction;
        static findTestFunction(testName: string): ($TestFunction) | undefined;
        static isTestClass(className: string): boolean;
        static getAllTestFunctions(): $Collection<$TestFunction>;
        static getAllTestClassNames(): $Collection<string>;
        static rememberFailedTest(testFunction: $TestFunction_): void;
        static getAfterBatchFunction(functionName: string): $Consumer<$ServerLevel>;
        static getBeforeBatchFunction(functionName: string): $Consumer<$ServerLevel>;
        static getTestFunctionsForClassName(className: string): $Stream<$TestFunction>;
        constructor();
        static get lastFailedTests(): $Stream<$TestFunction>;
        static get allTestFunctions(): $Collection<$TestFunction>;
        static get allTestClassNames(): $Collection<string>;
    }
    export class $GameTestBatch extends $Record {
        name(): string;
        gameTestInfos(): $Collection<$GameTestInfo>;
        afterBatchFunction(): $Consumer<$ServerLevel>;
        beforeBatchFunction(): $Consumer<$ServerLevel>;
        static DEFAULT_BATCH_NAME: string;
        constructor(name: string, gameTestInfos: $Collection_<$GameTestInfo>, beforeBatchFunction: $Consumer_<$ServerLevel>, afterBatchFunction: $Consumer_<$ServerLevel>);
    }
    /**
     * Values that may be interpreted as {@link $GameTestBatch}.
     */
    export type $GameTestBatch_ = { gameTestInfos?: $Collection_<$GameTestInfo>, afterBatchFunction?: $Consumer_<$ServerLevel>, name?: string, beforeBatchFunction?: $Consumer_<$ServerLevel>,  } | [gameTestInfos?: $Collection_<$GameTestInfo>, afterBatchFunction?: $Consumer_<$ServerLevel>, name?: string, beforeBatchFunction?: $Consumer_<$ServerLevel>, ];
    export class $GameTestHelper implements $GameTestHelperAccessor {
        getBounds(): $AABB;
        fail(exceptionMessage: string, pos: $BlockPos_): void;
        fail(exceptionMessage: string): void;
        fail(exceptionMessage: string, entity: $Entity): void;
        getHeight(heightmapType: $Heightmap$Types_, x: number, z: number): number;
        useBlock(pos: $BlockPos_): void;
        useBlock(pos: $BlockPos_, player: $Player, result: $BlockHitResult): void;
        useBlock(pos: $BlockPos_, player: $Player): void;
        getLevel(): $ServerLevel;
        destroyBlock(pos: $BlockPos_): void;
        getEntities<T extends $Entity>(entityType: $EntityType_<T>, pos: $BlockPos_, radius: number): $List<T>;
        getEntities<T extends $Entity>(entityType: $EntityType_<T>): $List<T>;
        randomTick(pos: $BlockPos_): void;
        startSequence(): $GameTestSequence;
        getTick(): number;
        getBlockState(pos: $BlockPos_): $BlockState;
        getBlockEntity<T extends $BlockEntity>(pos: $BlockPos_): T;
        setBlock(pos: $BlockPos_, state: $BlockState_): void;
        setBlock(x: number, y: number, z: number, block: $Block_): void;
        setBlock(x: number, y: number, z: number, state: $BlockState_): void;
        setBlock(pos: $BlockPos_, block: $Block_): void;
        spawn<E extends $Entity>(type: $EntityType_<E>, pos: $Vec3_): E;
        spawn<E extends $Entity>(type: $EntityType_<E>, x: number, y: number, z: number): E;
        spawn<E extends $Entity>(type: $EntityType_<E>, x: number, y: number, z: number): E;
        spawn<E extends $Entity>(type: $EntityType_<E>, pos: $BlockPos_): E;
        placeAt(player: $Player, stack: $ItemStack_, pos: $BlockPos_, direction: $Direction_): void;
        relativePos(pos: $BlockPos_): $BlockPos;
        tickPrecipitation(pos: $BlockPos_): void;
        tickPrecipitation(): void;
        findEntities<E extends $Entity>(type: $EntityType_<E>, x: number, y: number, z: number, radius: number): $List<E>;
        findEntities<E extends $Entity>(type: $EntityType_<E>, pos: $Vec3_, radius: number): $List<E>;
        assertTrue(condition: boolean, failureMessage: string): void;
        setDayTime(time: number): void;
        succeed(): void;
        spawnItem(item: $Item_, x: number, y: number, z: number): $ItemEntity;
        spawnItem(item: $Item_, pos: $Vec3_): $ItemEntity;
        spawnItem(item: $Item_, pos: $BlockPos_): $ItemEntity;
        moveTo(mob: $Mob, x: number, y: number, z: number): void;
        assertContainerContains(pos: $BlockPos_, item: $Item_): void;
        assertContainerEmpty(pos: $BlockPos_): void;
        assertEntitiesPresent(entityType: $EntityType_<never>, count: number): void;
        assertEntitiesPresent(entityType: $EntityType_<never>, pos: $BlockPos_, count: number, radius: number): void;
        assertEntityNotPresent(type: $EntityType_<never>): void;
        assertEntityNotPresent(type: $EntityType_<never>, x: number, y: number, z: number): void;
        assertEntityNotPresent(type: $EntityType_<never>, pos: $BlockPos_): void;
        assertEntityNotPresent(type: $EntityType_<never>, from: $Vec3_, to: $Vec3_): void;
        assertBlockProperty<T extends $Comparable<T>>(pos: $BlockPos_, property: $Property<T>, predicate: $Predicate_<T>, exceptionMessage: string): void;
        assertBlockProperty<T extends $Comparable<T>>(pos: $BlockPos_, property: $Property<T>, value: T): void;
        assertEntityPresent(type: $EntityType_<never>): void;
        assertEntityPresent(type: $EntityType_<never>, x: number, y: number, z: number): void;
        assertEntityPresent(type: $EntityType_<never>, pos: $BlockPos_): void;
        assertEntityPresent(type: $EntityType_<never>, from: $Vec3_, to: $Vec3_): void;
        assertEntityPresent(type: $EntityType_<never>, pos: $BlockPos_, expansionAmount: number): void;
        assertBlockNotPresent(block: $Block_, x: number, y: number, z: number): void;
        assertBlockNotPresent(block: $Block_, pos: $BlockPos_): void;
        assertItemEntityPresent(item: $Item_): void;
        assertItemEntityPresent(item: $Item_, pos: $BlockPos_, radius: number): void;
        pressButton(x: number, y: number, z: number): void;
        pressButton(pos: $BlockPos_): void;
        setBiome(biome: $ResourceKey_<$Biome>): void;
        pullLever(pos: $BlockPos_): void;
        pullLever(x: number, y: number, z: number): void;
        assertBlockPresent(block: $Block_, pos: $BlockPos_): void;
        assertBlockPresent(block: $Block_, x: number, y: number, z: number): void;
        succeedWhen(criterion: $Runnable_): void;
        runAtTickTime(delay: number, arg1: $Runnable_): void;
        assertBlockState(pos: $BlockPos_, predicate: $Predicate_<$BlockState>, exceptionMessage: $Supplier_<string>): void;
        assertFalse(condition: boolean, failureMessage: string): void;
        runAfterDelay(delay: number, arg1: $Runnable_): void;
        absolutePos(pos: $BlockPos_): $BlockPos;
        makeMockPlayer(gameType: $GameType_): $Player;
        assertBlock(pos: $BlockPos_, predicate: $Predicate_<$Block>, exceptionMessage: $Supplier_<string>): void;
        assertBlock(pos: $BlockPos_, predicate: $Predicate_<$Block>, exceptionMessage: string): void;
        findClosestEntity<E extends $Entity>(type: $EntityType_<E>, x: number, y: number, z: number, radius: number): E;
        relativeVec(relativeVec3: $Vec3_): $Vec3;
        findOneEntity<E extends $Entity>(type: $EntityType_<E>): E;
        assertValueEqual<N>(actual: N, expected: N, valueName: string): void;
        pulseRedstone(pos: $BlockPos_, delay: number): void;
        makeAboutToDrown(entity: $LivingEntity): $LivingEntity;
        absoluteVec(relativeVec3: $Vec3_): $Vec3;
        succeedOnTickWhen(tick: number, criterion: $Runnable_): void;
        getTestRotation(): $Rotation;
        killAllEntities(): void;
        withLowHealth(entity: $LivingEntity): $LivingEntity;
        assertEntityData<E extends $Entity, T>(pos: $BlockPos_, type: $EntityType_<E>, entityDataGetter: $Function_<E, T>, testEntityData: T | null): void;
        assertItemEntityCountIs(item: $Item_, pos: $BlockPos_, expansionAmount: number, arg3: number): void;
        assertSameBlockState(testPos: $BlockPos_, comparisonPos: $BlockPos_): void;
        spawnWithNoFreeWill<E extends $Mob>(type: $EntityType_<E>, x: number, y: number, z: number): E;
        spawnWithNoFreeWill<E extends $Mob>(type: $EntityType_<E>, x: number, y: number, z: number): E;
        spawnWithNoFreeWill<E extends $Mob>(type: $EntityType_<E>, pos: $BlockPos_): E;
        spawnWithNoFreeWill<E extends $Mob>(type: $EntityType_<E>, pos: $Vec3_): E;
        forEveryBlockInStructure(consumer: $Consumer_<$BlockPos>): void;
        assertEntityIsHolding<E extends $LivingEntity>(pos: $BlockPos_, entityType: $EntityType_<E>, item: $Item_): void;
        assertBlockEntityData<T extends $BlockEntity>(pos: $BlockPos_, predicate: $Predicate_<T>, exceptionMessage: $Supplier_<string>): void;
        succeedWhenEntityPresent(type: $EntityType_<never>, pos: $BlockPos_): void;
        succeedWhenEntityPresent(type: $EntityType_<never>, x: number, y: number, z: number): void;
        killAllEntitiesOfClass(entityClass: $Class<any>): void;
        succeedWhenBlockPresent(block: $Block_, pos: $BlockPos_): void;
        succeedWhenBlockPresent(block: $Block_, x: number, y: number, z: number): void;
        assertEntityPosition(entity: $Entity, box: $AABB_, exceptionMessage: string): void;
        assertEntityNotTouching(type: $EntityType_<never>, x: number, arg2: number, y: number): void;
        assertEntityTouching(type: $EntityType_<never>, x: number, arg2: number, y: number): void;
        assertRedstoneSignal(pos: $BlockPos_, direction: $Direction_, signalStrengthPredicate: $IntPredicate_, exceptionMessage: $Supplier_<string>): void;
        assertItemEntityNotPresent(item: $Item_, pos: $BlockPos_, radius: number): void;
        assertItemEntityNotPresent(item: $Item_): void;
        assertSameBlockStates(boundingBox: $BoundingBox, pos: $BlockPos_): void;
        succeedWhenEntityData<E extends $Entity, T>(pos: $BlockPos_, type: $EntityType_<E>, entityDataGetter: $Function_<E, T>, testEntityData: T): void;
        assertEntityProperty<E extends $Entity, T>(entity: E, entityPropertyGetter: $Function_<E, T>, valueName: string, testEntityProperty: T): void;
        assertEntityProperty<E extends $Entity>(entity: E, predicate: $Predicate_<E>, name: string): void;
        succeedWhenEntityNotPresent(type: $EntityType_<never>, x: number, y: number, z: number): void;
        succeedWhenEntityNotPresent(type: $EntityType_<never>, pos: $BlockPos_): void;
        /**
         * @deprecated
         */
        makeMockServerPlayerInLevel(): $ServerPlayer;
        assertLivingEntityHasMobEffect(entity: $LivingEntity, effect: $Holder_<$MobEffect>, amplifier: number): void;
        assertEntityInstancePresent(entity: $Entity, x: number, y: number, z: number): void;
        assertEntityInstancePresent(entity: $Entity, pos: $BlockPos_): void;
        assertAtTickTimeContainerContains(tickTime: number, arg1: $BlockPos_, pos: $Item_): void;
        assertEntityInventoryContains<E extends $Entity>(pos: $BlockPos_, entityType: $EntityType_<E>, item: $Item_): void;
        assertAtTickTimeContainerEmpty(tickTime: number, arg1: $BlockPos_): void;
        walkTo(mob: $Mob, pos: $BlockPos_, speed: number): $GameTestSequence;
        setNight(): void;
        failIf(criterion: $Runnable_): void;
        succeedIf(criterion: $Runnable_): void;
        failIfEver(criterion: $Runnable_): void;
        onEachTick(criterion: $Runnable_): void;
        setFinalCheckAdded(arg0: boolean): void;
        getFinalCheckAdded(): boolean;
        getTestInfo(): $GameTestInfo;
        testInfo: $GameTestInfo;
        constructor(testInfo: $GameTestInfo);
        get bounds(): $AABB;
        get level(): $ServerLevel;
        get tick(): number;
        set dayTime(value: number);
        set biome(value: $ResourceKey_<$Biome>);
        get testRotation(): $Rotation;
    }
    export class $LogTestReporter implements $TestReporter {
        onTestFailed(arg0: $GameTestInfo): void;
        onTestSuccess(arg0: $GameTestInfo): void;
        finish(): void;
        constructor();
    }
    /**
     * Annotate a method with this annotation in order to have it run before the specified `#batch()`.
     */
    export class $BeforeBatch implements $Annotation {
        batch(): string;
    }
    export class $GameTestAssertException extends $RuntimeException {
        constructor(exceptionMessage: string);
    }
    export class $GameTestTicker {
        clear(): void;
        add(testInfo: $GameTestInfo): void;
        tick(): void;
        setRunner(runner: $GameTestRunner): void;
        static SINGLETON: $GameTestTicker;
        set runner(value: $GameTestRunner);
    }
    export class $TestFunctionFinder {
    }
    export interface $TestFunctionFinder {
        findTestFunctions(): $Stream<$TestFunction>;
    }
    /**
     * Values that may be interpreted as {@link $TestFunctionFinder}.
     */
    export type $TestFunctionFinder_ = (() => $Stream<$TestFunction_>);
    export class $GameTestSequence {
        tickAndContinue(tick: number): void;
        tickAndFailIfNotComplete(tick: number): void;
        thenTrigger(): $GameTestSequence$Condition;
        thenWaitUntil(task: $Runnable_): $GameTestSequence;
        thenWaitUntil(expectedDelay: number, arg1: $Runnable_): $GameTestSequence;
        thenSucceed(): void;
        thenExecute(task: $Runnable_): $GameTestSequence;
        thenExecuteFor(tick: number, task: $Runnable_): $GameTestSequence;
        thenExecuteAfter(tick: number, task: $Runnable_): $GameTestSequence;
        thenIdle(tick: number): $GameTestSequence;
        thenFail(exception: $Supplier_<$Exception>): void;
        constructor(testInfo: $GameTestInfo);
    }
    export class $GameTestBatchFactory {
        static toGameTestBatch(gameTestInfos: $Collection_<$GameTestInfo>, functionName: string, index: number): $GameTestBatch;
        static fromGameTestInfo(maxTests: number): $GameTestRunner$GameTestBatcher;
        static fromGameTestInfo(): $GameTestRunner$GameTestBatcher;
        static fromTestFunction(testFunctions: $Collection_<$TestFunction_>, level: $ServerLevel): $Collection<$GameTestBatch>;
        static toGameTestInfo(testFunction: $TestFunction_, rotationSteps: number, level: $ServerLevel): $GameTestInfo;
        constructor();
    }
    export class $ExhaustedAttemptsException extends $Throwable {
    }
    export class $GameTestRunner {
        start(): void;
        stop(): void;
        static clearMarkers(serverLevel: $ServerLevel): void;
        addListener(listener: $GameTestBatchListener): void;
        getTestInfos(): $List<$GameTestInfo>;
        rerunTest(test: $GameTestInfo): void;
        static DEFAULT_TESTS_PER_ROW: number;
        get testInfos(): $List<$GameTestInfo>;
    }
    export class $GameTestRunner$GameTestBatcher {
    }
    export interface $GameTestRunner$GameTestBatcher {
        batch(infos: $Collection_<$GameTestInfo>): $Collection<$GameTestBatch>;
    }
    /**
     * Values that may be interpreted as {@link $GameTestRunner$GameTestBatcher}.
     */
    export type $GameTestRunner$GameTestBatcher_ = ((arg0: $Collection<$GameTestInfo>) => $Collection_<$GameTestBatch_>);
    export class $TestCommand$Runner {
        run(rotationSteps: number): number;
        run(rotationSteps: number, testsPerRow: number): number;
        run(retryOptions: $RetryOptions_, rotationSteps: number, testsPerRow: number): number;
        run(retryOptions: $RetryOptions_, rotationSteps: number): number;
        run(retryOptions: $RetryOptions_): number;
        run(): number;
        reset(): number;
        clear(): number;
        "export"(): number;
        locate(): number;
        constructor(finder: $TestFinder<$TestCommand$Runner>);
    }
    export class $GameTestSequence$Condition {
        assertTriggeredThisTick(): void;
        constructor(arg0: $GameTestSequence);
    }
}
