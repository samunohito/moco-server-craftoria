import { $ManagerBlockEntity } from "@package/ca/teamdman/sfm/common/blockentity";
import { $Pair } from "@package/com/mojang/datafixers/util";
import { $LabelPositionHolder_ } from "@package/ca/teamdman/sfm/common/label";
import { $Set_, $ArrayList, $Set, $List, $Collection_, $List_ } from "@package/java/util";
import { $LimitedInputSlot, $IOutputResourceTracker, $ProgramContext, $LimitedOutputSlot, $IInputResourceTracker } from "@package/ca/teamdman/sfm/common/program";
import { $Consumer_, $Predicate_, $Predicate, $BiPredicate, $BiPredicate_ } from "@package/java/util/function";
import { $BlockPos, $Direction_, $Direction } from "@package/net/minecraft/core";
import { $Stream } from "@package/java/util/stream";
import { $LocalizationEntry } from "@package/ca/teamdman/sfm/common/localization";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $ResourceType, $ResourceType_ } from "@package/ca/teamdman/sfm/common/resourcetype";
import { $ResourceKey_, $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $ParserRuleContext } from "@package/org/antlr/v4/runtime";
import { $Enum, $Record, $Object } from "@package/java/lang";
import { $SFMLParser$WithParenContext, $SFMLParser$TimerTriggerContext, $SFMLParser$TagMatcherContext, $SFMLParser$OutputStatementContext, $SFMLParser$StringLabelContext, $SFMLParser$IntervalNoSpaceContext, $SFMLParser$StringResourceContext, $SFMLBaseVisitor, $SFMLParser$ProgramContext, $SFMLParser$WithContext, $SFMLParser$WithDisjunctionContext, $SFMLParser$ResourceContext, $SFMLParser$SideContext, $SFMLParser$SetOpContext, $SFMLParser$ResourceLimitListContext, $SFMLParser$IntervalSpaceContext, $SFMLParser$QuantityContext, $SFMLParser$BooleanParenContext, $SFMLParser$BooleanFalseContext, $SFMLParser$LabelAccessContext, $SFMLParser$BooleanNegationContext, $SFMLParser$ForgetStatementContext, $SFMLParser$InputStatementContext, $SFMLParser$WithTagContext, $SFMLParser$BooleanHasContext } from "@package/ca/teamdman/langs";

declare module "@package/ca/teamdman/sfml/ast" {
    export class $ASTBuilder extends $SFMLBaseVisitor<$ASTNode> {
        getLineColumnForNode(arg0: $ASTNode): string;
        getNodeAtIndex(arg0: number): ($ASTNode) | undefined;
        visitSetOp(arg0: $SFMLParser$SetOpContext): $SetOperator;
        visitWith(arg0: $SFMLParser$WithContext): $ASTNode;
        visitSide(arg0: $SFMLParser$SideContext): $Side;
        visitForgetStatement(arg0: $SFMLParser$ForgetStatementContext): $ForgetStatement;
        visitWithDisjunction(arg0: $SFMLParser$WithDisjunctionContext): $WithDisjunction;
        visitBooleanNegation(arg0: $SFMLParser$BooleanNegationContext): $BoolExpr;
        visitResourceLimitList(arg0: $SFMLParser$ResourceLimitListContext): $ResourceLimits;
        visitOutputStatement(arg0: $SFMLParser$OutputStatementContext): $OutputStatement;
        visitStringResource(arg0: $SFMLParser$StringResourceContext): $ResourceIdentifier<never, never, never>;
        visitInputStatement(arg0: $SFMLParser$InputStatementContext): $InputStatement;
        visitIntervalNoSpace(arg0: $SFMLParser$IntervalNoSpaceContext): $ASTNode;
        getNodesUnderCursor(arg0: number): $List<$Pair<$ASTNode, $ParserRuleContext>>;
        setLocationFromOtherNode(arg0: $ASTNode, arg1: $ASTNode): void;
        visitTimerTrigger(arg0: $SFMLParser$TimerTriggerContext): $ASTNode;
        visitQuantity(arg0: $SFMLParser$QuantityContext): $ResourceQuantity;
        visitProgram(arg0: $SFMLParser$ProgramContext): $Program;
        visitIntervalSpace(arg0: $SFMLParser$IntervalSpaceContext): $ASTNode;
        visitResource(arg0: $SFMLParser$ResourceContext): $ASTNode;
        visitLabelAccess(arg0: $SFMLParser$LabelAccessContext): $LabelAccess;
        visitTagMatcher(arg0: $SFMLParser$TagMatcherContext): $TagMatcher;
        visitBooleanParen(arg0: $SFMLParser$BooleanParenContext): $BoolExpr;
        visitStringLabel(arg0: $SFMLParser$StringLabelContext): $Label;
        visitBooleanFalse(arg0: $SFMLParser$BooleanFalseContext): $BoolExpr;
        visitWithParen(arg0: $SFMLParser$WithParenContext): $WithParen;
        visitWithTag(arg0: $SFMLParser$WithTagContext): $WithTag;
        visitBooleanHas(arg0: $SFMLParser$BooleanHasContext): $BoolExpr;
        getIndexForNode(arg0: $ASTNode): number;
        getContextForNode(arg0: $ASTNode): ($ParserRuleContext) | undefined;
        constructor();
    }
    export class $Block extends $Record implements $Statement {
        tick(arg0: $ProgramContext): void;
        getStatements(): $List<$Statement>;
        statements(): $List<$Statement>;
        getReferencedIOResourceIds(): $Stream<$ResourceIdentifier<never, never, never>>;
        getDescendantStatements(): $Stream<$Statement>;
        static PROGRAM_TICK_STATEMENT_TIME_MS: $LocalizationEntry;
        constructor(statements: $List_<$Statement_>);
        get referencedIOResourceIds(): $Stream<$ResourceIdentifier<never, never, never>>;
        get descendantStatements(): $Stream<$Statement>;
    }
    /**
     * Values that may be interpreted as {@link $Block}.
     */
    export type $Block_ = { statements?: $List_<$Statement_>,  } | [statements?: $List_<$Statement_>, ];
    export class $IOStatement {
        static LOG_PROGRAM_TICK_IO_STATEMENT_GATHER_SLOTS_RANGE: $LocalizationEntry;
        static LOG_PROGRAM_TICK_IO_STATEMENT_GATHER_SLOTS_SLOT_SHOULD_NOT_CREATE: $LocalizationEntry;
        static LOG_PROGRAM_TICK_IO_STATEMENT_GATHER_SLOTS_EACH: $LocalizationEntry;
        static LOG_PROGRAM_TICK_IO_STATEMENT_GATHER_SLOTS_NOT_EACH: $LocalizationEntry;
        static LOG_PROGRAM_TICK_IO_STATEMENT_GATHER_SLOTS_FOR_RESOURCE_TYPE: $LocalizationEntry;
        static LOG_PROGRAM_TICK_IO_STATEMENT_GATHER_SLOTS_SLOT_NOT_IN_RANGE: $LocalizationEntry;
        static LOG_PROGRAM_TICK_IO_STATEMENT_GATHER_SLOTS: $LocalizationEntry;
        static LOG_PROGRAM_TICK_IO_STATEMENT_GATHER_SLOTS_SLOT_CREATED: $LocalizationEntry;
    }
    export interface $IOStatement extends $Statement, $ToStringPretty {
        each(): boolean;
        resourceLimits(): $ResourceLimits;
        labelAccess(): $LabelAccess;
    }
    export class $WithParen extends $Record implements $ASTNode, $WithClause, $ToStringPretty {
        inner(): $WithClause;
        matchesStack<STACK>(arg0: $ResourceType_<STACK, never, never>, arg1: STACK): boolean;
        getStatements(): $List<$Statement>;
        getReferencedIOResourceIds(): $Stream<$ResourceIdentifier<never, never, never>>;
        getDescendantStatements(): $Stream<$Statement>;
        toStringPretty(): string;
        constructor(inner: $WithClause_);
        get statements(): $List<$Statement>;
        get referencedIOResourceIds(): $Stream<$ResourceIdentifier<never, never, never>>;
        get descendantStatements(): $Stream<$Statement>;
    }
    /**
     * Values that may be interpreted as {@link $WithParen}.
     */
    export type $WithParen_ = { inner?: $WithClause_,  } | [inner?: $WithClause_, ];
    export class $ToStringCondensed {
    }
    export interface $ToStringCondensed {
        toStringCondensed(): string;
    }
    /**
     * Values that may be interpreted as {@link $ToStringCondensed}.
     */
    export type $ToStringCondensed_ = (() => string);
    export class $BoolExpr {
        static from(arg0: string): $BoolExpr;
    }
    export interface $BoolExpr extends $Predicate<$ProgramContext>, $ASTNode, $ToStringPretty {
        collectPositions(arg0: $ProgramContext, arg1: $Consumer_<$BlockPos>): void;
    }
    /**
     * Values that may be interpreted as {@link $BoolExpr}.
     */
    export type $BoolExpr_ = (() => void);
    export class $Limit extends $Record implements $ASTNode {
        retention(): $ResourceQuantity;
        quantity(): $ResourceQuantity;
        toStringCondensed(arg0: $Limit_): string;
        withDefaults(arg0: $Limit_): $Limit;
        getStatements(): $List<$Statement>;
        getReferencedIOResourceIds(): $Stream<$ResourceIdentifier<never, never, never>>;
        getDescendantStatements(): $Stream<$Statement>;
        static MAX_QUANTITY_MAX_RETENTION: $Limit;
        static MAX_QUANTITY_NO_RETENTION: $Limit;
        static UNSET: $Limit;
        constructor(quantity: $ResourceQuantity_, retention: $ResourceQuantity_);
        get statements(): $List<$Statement>;
        get referencedIOResourceIds(): $Stream<$ResourceIdentifier<never, never, never>>;
        get descendantStatements(): $Stream<$Statement>;
    }
    /**
     * Values that may be interpreted as {@link $Limit}.
     */
    export type $Limit_ = { quantity?: $ResourceQuantity_, retention?: $ResourceQuantity_,  } | [quantity?: $ResourceQuantity_, retention?: $ResourceQuantity_, ];
    export class $RoundRobin$Behaviour extends $Enum<$RoundRobin$Behaviour> {
        static values(): $RoundRobin$Behaviour[];
        static valueOf(arg0: string): $RoundRobin$Behaviour;
        static UNMODIFIED: $RoundRobin$Behaviour;
        static BY_LABEL: $RoundRobin$Behaviour;
        static BY_BLOCK: $RoundRobin$Behaviour;
    }
    /**
     * Values that may be interpreted as {@link $RoundRobin$Behaviour}.
     */
    export type $RoundRobin$Behaviour_ = "unmodified" | "by_block" | "by_label";
    export class $Program extends $Record implements $Statement {
        name(): string;
        referencedLabels(): $Set<string>;
        tick(arg0: $ProgramContext): void;
        tick(arg0: $ManagerBlockEntity): boolean;
        getStatements(): $List<$Statement>;
        referencedResources(): $Set<$ResourceIdentifier<never, never, never>>;
        astBuilder(): $ASTBuilder;
        replaceOutputStatement(arg0: $OutputStatement, arg1: $OutputStatement): void;
        triggers(): $List<$Trigger>;
        getConditionIndex(arg0: $IfStatement_): number;
        getReferencedIOResourceIds(): $Stream<$ResourceIdentifier<never, never, never>>;
        getDescendantStatements(): $Stream<$Statement>;
        static MAX_LABEL_LENGTH: number;
        static PROGRAM_WARNING_TOO_MANY_CONDITIONS: $LocalizationEntry;
        static LOG_LABEL_POSITION_HOLDER_DETAILS_BODY: $LocalizationEntry;
        static LOG_CABLE_NETWORK_DETAILS_HEADER_3: $LocalizationEntry;
        static LOG_CABLE_NETWORK_DETAILS_HEADER_2: $LocalizationEntry;
        static LOG_CABLE_NETWORK_DETAILS_HEADER_1: $LocalizationEntry;
        static LOG_LABEL_POSITION_HOLDER_DETAILS_FOOTER: $LocalizationEntry;
        static LOG_PROGRAM_CONTEXT: $LocalizationEntry;
        static LOG_CABLE_NETWORK_DETAILS_BODY: $LocalizationEntry;
        static LOG_PROGRAM_TICK_TRIGGER_STATEMENT: $LocalizationEntry;
        static MAX_PROGRAM_LENGTH: number;
        static LOG_PROGRAM_TICK_WITH_REDSTONE_COUNT: $LocalizationEntry;
        static PROGRAM_TICK_TRIGGER_TIME_MS: $LocalizationEntry;
        static LOG_CABLE_NETWORK_DETAILS_FOOTER: $LocalizationEntry;
        static LOG_PROGRAM_TICK: $LocalizationEntry;
        static LOG_LABEL_POSITION_HOLDER_DETAILS_HEADER: $LocalizationEntry;
        constructor(astBuilder: $ASTBuilder, name: string, triggers: $List_<$Trigger>, referencedLabels: $Set_<string>, referencedResources: $Set_<$ResourceIdentifier<never, never, never>>);
        get statements(): $List<$Statement>;
        get referencedIOResourceIds(): $Stream<$ResourceIdentifier<never, never, never>>;
        get descendantStatements(): $Stream<$Statement>;
    }
    /**
     * Values that may be interpreted as {@link $Program}.
     */
    export type $Program_ = { triggers?: $List_<$Trigger>, astBuilder?: $ASTBuilder, name?: string, referencedLabels?: $Set_<string>, referencedResources?: $Set_<$ResourceIdentifier<never, never, never>>,  } | [triggers?: $List_<$Trigger>, astBuilder?: $ASTBuilder, name?: string, referencedLabels?: $Set_<string>, referencedResources?: $Set_<$ResourceIdentifier<never, never, never>>, ];
    export class $Side extends $Enum<$Side> implements $ASTNode {
        static values(): $Side[];
        static valueOf(arg0: string): $Side;
        resolve(arg0: $BlockState_): $Direction;
        static fromDirection(arg0: $Direction_): $Side;
        getStatements(): $List<$Statement>;
        getReferencedIOResourceIds(): $Stream<$ResourceIdentifier<never, never, never>>;
        getDescendantStatements(): $Stream<$Statement>;
        static NULL: $Side;
        static TOP: $Side;
        static LEFT: $Side;
        static NORTH: $Side;
        static WEST: $Side;
        static RIGHT: $Side;
        static FRONT: $Side;
        static BACK: $Side;
        static BOTTOM: $Side;
        static SOUTH: $Side;
        static EAST: $Side;
        get statements(): $List<$Statement>;
        get referencedIOResourceIds(): $Stream<$ResourceIdentifier<never, never, never>>;
        get descendantStatements(): $Stream<$Statement>;
    }
    /**
     * Values that may be interpreted as {@link $Side}.
     */
    export type $Side_ = "top" | "bottom" | "north" | "south" | "east" | "west" | "left" | "right" | "front" | "back" | "null";
    export class $ResourceLimits implements $ASTNode, $ToStringPretty {
        resourceLimitList(): $List<$ResourceLimit>;
        getReferencedResourceTypes(): $ResourceType<never, never, never>[];
        toStringCondensed(arg0: $Limit_): string;
        exclusions(): $ResourceIdSet;
        createOutputTrackers(): $List<$IOutputResourceTracker>;
        createInputTrackers(): $List<$IInputResourceTracker>;
        withDefaultLimit(arg0: $Limit_): $ResourceLimits;
        withExclusions(arg0: $ResourceIdSet): $ResourceLimits;
        getStatements(): $List<$Statement>;
        getReferencedIOResourceIds(): $Stream<$ResourceIdentifier<never, never, never>>;
        getDescendantStatements(): $Stream<$Statement>;
        toStringPretty(): string;
        constructor(arg0: $List_<$ResourceLimit_>, arg1: $ResourceIdSet);
        get referencedResourceTypes(): $ResourceType<never, never, never>[];
        get statements(): $List<$Statement>;
        get referencedIOResourceIds(): $Stream<$ResourceIdentifier<never, never, never>>;
        get descendantStatements(): $Stream<$Statement>;
    }
    export class $ResourceQuantity extends $Record implements $ASTNode {
        add(arg0: $ResourceQuantity_): $ResourceQuantity;
        number(): $Number;
        idExpansionBehaviour(): $ResourceQuantity$IdExpansionBehaviour;
        getStatements(): $List<$Statement>;
        getReferencedIOResourceIds(): $Stream<$ResourceIdentifier<never, never, never>>;
        getDescendantStatements(): $Stream<$Statement>;
        static MAX_QUANTITY: $ResourceQuantity;
        static UNSET: $ResourceQuantity;
        constructor(number: $Number_, idExpansionBehaviour: $ResourceQuantity$IdExpansionBehaviour_);
        get statements(): $List<$Statement>;
        get referencedIOResourceIds(): $Stream<$ResourceIdentifier<never, never, never>>;
        get descendantStatements(): $Stream<$Statement>;
    }
    /**
     * Values that may be interpreted as {@link $ResourceQuantity}.
     */
    export type $ResourceQuantity_ = { idExpansionBehaviour?: $ResourceQuantity$IdExpansionBehaviour_, number?: $Number_,  } | [idExpansionBehaviour?: $ResourceQuantity$IdExpansionBehaviour_, number?: $Number_, ];
    export class $RoundRobin implements $ASTNode {
        next(arg0: number): number;
        isEnabled(): boolean;
        static disabled(): $RoundRobin;
        getBehaviour(): $RoundRobin$Behaviour;
        getPositionsForLabels(arg0: $List_<$Label_>, arg1: $LabelPositionHolder_): $ArrayList<$Pair<$Label, $BlockPos>>;
        getStatements(): $List<$Statement>;
        getReferencedIOResourceIds(): $Stream<$ResourceIdentifier<never, never, never>>;
        getDescendantStatements(): $Stream<$Statement>;
        constructor(arg0: $RoundRobin$Behaviour_);
        get enabled(): boolean;
        get behaviour(): $RoundRobin$Behaviour;
        get statements(): $List<$Statement>;
        get referencedIOResourceIds(): $Stream<$ResourceIdentifier<never, never, never>>;
        get descendantStatements(): $Stream<$Statement>;
    }
    export class $WithDisjunction extends $Record implements $ASTNode, $WithClause, $ToStringPretty {
        left(): $WithClause;
        right(): $WithClause;
        matchesStack<STACK>(arg0: $ResourceType_<STACK, never, never>, arg1: STACK): boolean;
        getStatements(): $List<$Statement>;
        getReferencedIOResourceIds(): $Stream<$ResourceIdentifier<never, never, never>>;
        getDescendantStatements(): $Stream<$Statement>;
        toStringPretty(): string;
        constructor(left: $WithClause_, right: $WithClause_);
        get statements(): $List<$Statement>;
        get referencedIOResourceIds(): $Stream<$ResourceIdentifier<never, never, never>>;
        get descendantStatements(): $Stream<$Statement>;
    }
    /**
     * Values that may be interpreted as {@link $WithDisjunction}.
     */
    export type $WithDisjunction_ = { right?: $WithClause_, left?: $WithClause_,  } | [right?: $WithClause_, left?: $WithClause_, ];
    export class $InputStatement implements $IOStatement {
        each(): boolean;
        tick(arg0: $ProgramContext): void;
        resourceLimits(): $ResourceLimits;
        toStringPretty(): string;
        freeSlots(): void;
        labelAccess(): $LabelAccess;
        gatherSlots(arg0: $ProgramContext, arg1: $Consumer_<$LimitedInputSlot<never, never, never>>): void;
        transferSlotsTo(arg0: $InputStatement): void;
        freeSlotsIf(arg0: $Predicate_<$LimitedInputSlot<never, never, never>>): void;
        getStatements(): $List<$Statement>;
        getReferencedIOResourceIds(): $Stream<$ResourceIdentifier<never, never, never>>;
        getDescendantStatements(): $Stream<$Statement>;
        static LOG_PROGRAM_TICK_IO_STATEMENT_GATHER_SLOTS_CACHE_MISS: $LocalizationEntry;
        static LOG_PROGRAM_TICK_IO_STATEMENT_GATHER_SLOTS_CACHE_HIT: $LocalizationEntry;
        static LOG_PROGRAM_TICK_INPUT_STATEMENT: $LocalizationEntry;
        constructor(arg0: $LabelAccess_, arg1: $ResourceLimits, arg2: boolean);
        get statements(): $List<$Statement>;
        get referencedIOResourceIds(): $Stream<$ResourceIdentifier<never, never, never>>;
        get descendantStatements(): $Stream<$Statement>;
    }
    export class $Number extends $Record implements $ASTNode {
        value(): number;
        add(arg0: $Number_): $Number;
        getStatements(): $List<$Statement>;
        getReferencedIOResourceIds(): $Stream<$ResourceIdentifier<never, never, never>>;
        getDescendantStatements(): $Stream<$Statement>;
        constructor(value: number);
        get statements(): $List<$Statement>;
        get referencedIOResourceIds(): $Stream<$ResourceIdentifier<never, never, never>>;
        get descendantStatements(): $Stream<$Statement>;
    }
    /**
     * Values that may be interpreted as {@link $Number}.
     */
    export type $Number_ = { value?: number,  } | [value?: number, ];
    export class $ToStringPretty {
    }
    export interface $ToStringPretty {
        toStringPretty(): string;
    }
    export class $ResourceQuantity$IdExpansionBehaviour extends $Enum<$ResourceQuantity$IdExpansionBehaviour> {
        static values(): $ResourceQuantity$IdExpansionBehaviour[];
        static valueOf(arg0: string): $ResourceQuantity$IdExpansionBehaviour;
        static EXPAND: $ResourceQuantity$IdExpansionBehaviour;
        static NO_EXPAND: $ResourceQuantity$IdExpansionBehaviour;
    }
    /**
     * Values that may be interpreted as {@link $ResourceQuantity$IdExpansionBehaviour}.
     */
    export type $ResourceQuantity$IdExpansionBehaviour_ = "expand" | "no_expand";
    export class $With extends $Record implements $WithClause, $ToStringPretty {
        mode(): $With$WithMode;
        condition(): $WithClause;
        matchesStack<STACK>(arg0: $ResourceType_<STACK, never, never>, arg1: STACK): boolean;
        toStringPretty(): string;
        getStatements(): $List<$Statement>;
        getReferencedIOResourceIds(): $Stream<$ResourceIdentifier<never, never, never>>;
        getDescendantStatements(): $Stream<$Statement>;
        static ALWAYS_TRUE: $With;
        constructor(condition: $WithClause_, mode: $With$WithMode);
        get statements(): $List<$Statement>;
        get referencedIOResourceIds(): $Stream<$ResourceIdentifier<never, never, never>>;
        get descendantStatements(): $Stream<$Statement>;
    }
    /**
     * Values that may be interpreted as {@link $With}.
     */
    export type $With_ = { condition?: $WithClause_, mode?: $With$WithMode,  } | [condition?: $WithClause_, mode?: $With$WithMode, ];
    export class $Statement {
    }
    export interface $Statement extends $ASTNode {
        tick(arg0: $ProgramContext): void;
    }
    /**
     * Values that may be interpreted as {@link $Statement}.
     */
    export type $Statement_ = ((arg0: $ProgramContext) => void);
    export class $Trigger {
    }
    export interface $Trigger extends $Statement {
        getBlock(): $Block;
        getStatements(): $List<$Statement>;
        shouldTick(arg0: $ProgramContext): boolean;
        getConditionCount(): number;
        getConditionIndex(arg0: $IfStatement_): number;
        get block(): $Block;
        get statements(): $List<$Statement>;
        get conditionCount(): number;
    }
    export class $NumberRangeSet extends $Record implements $ASTNode {
        contains(arg0: number): boolean;
        ranges(): $NumberRange[];
        getStatements(): $List<$Statement>;
        getReferencedIOResourceIds(): $Stream<$ResourceIdentifier<never, never, never>>;
        getDescendantStatements(): $Stream<$Statement>;
        static MAX_RANGE: $NumberRangeSet;
        constructor(ranges: $NumberRange_[]);
        get statements(): $List<$Statement>;
        get referencedIOResourceIds(): $Stream<$ResourceIdentifier<never, never, never>>;
        get descendantStatements(): $Stream<$Statement>;
    }
    /**
     * Values that may be interpreted as {@link $NumberRangeSet}.
     */
    export type $NumberRangeSet_ = { ranges?: $NumberRange_[],  } | [ranges?: $NumberRange_[], ];
    export class $ASTNode {
    }
    export interface $ASTNode {
        getStatements(): $List<$Statement>;
        getReferencedIOResourceIds(): $Stream<$ResourceIdentifier<never, never, never>>;
        getDescendantStatements(): $Stream<$Statement>;
        get statements(): $List<$Statement>;
        get referencedIOResourceIds(): $Stream<$ResourceIdentifier<never, never, never>>;
        get descendantStatements(): $Stream<$Statement>;
    }
    export class $SetOperator extends $Enum<$SetOperator> implements $ASTNode, $BiPredicate<boolean, $List<boolean>>, $ToStringPretty {
        static values(): $SetOperator[];
        test(arg0: boolean, arg1: $List_<boolean>): boolean;
        static valueOf(arg0: string): $SetOperator;
        static from(arg0: string): $SetOperator;
        getStatements(): $List<$Statement>;
        getReferencedIOResourceIds(): $Stream<$ResourceIdentifier<never, never, never>>;
        getDescendantStatements(): $Stream<$Statement>;
        or(arg0: $BiPredicate_<boolean, $List<boolean>>): $BiPredicate<boolean, $List<boolean>>;
        negate(): $BiPredicate<boolean, $List<boolean>>;
        and(arg0: $BiPredicate_<boolean, $List<boolean>>): $BiPredicate<boolean, $List<boolean>>;
        toStringPretty(): string;
        static OVERALL: $SetOperator;
        static SOME: $SetOperator;
        static ONE: $SetOperator;
        static LONE: $SetOperator;
        static EVERY: $SetOperator;
        get statements(): $List<$Statement>;
        get referencedIOResourceIds(): $Stream<$ResourceIdentifier<never, never, never>>;
        get descendantStatements(): $Stream<$Statement>;
    }
    /**
     * Values that may be interpreted as {@link $SetOperator}.
     */
    export type $SetOperator_ = "overall" | "some" | "every" | "one" | "lone";
    export class $OutputStatement implements $IOStatement {
        each(): boolean;
        tick(arg0: $ProgramContext): void;
        resourceLimits(): $ResourceLimits;
        toStringPretty(): string;
        labelAccess(): $LabelAccess;
        static moveTo<STACK, ITEM, CAP>(arg0: $ProgramContext, arg1: $LimitedInputSlot<STACK, ITEM, CAP>, arg2: $LimitedOutputSlot<STACK, ITEM, CAP>): void;
        gatherSlots(arg0: $ProgramContext, arg1: $Consumer_<$LimitedOutputSlot<never, never, never>>): void;
        emptySlotsOnly(): boolean;
        getStatements(): $List<$Statement>;
        getReferencedIOResourceIds(): $Stream<$ResourceIdentifier<never, never, never>>;
        getDescendantStatements(): $Stream<$Statement>;
        static LOG_PROGRAM_TICK_OUTPUT_STATEMENT_DISCOVERED_INPUT_SLOT_COUNT: $LocalizationEntry;
        static LOG_PROGRAM_TICK_IO_STATEMENT_MOVE_TO_STACK_LIMIT_NEW_TO_MOVE: $LocalizationEntry;
        static LOG_PROGRAM_TICK_OUTPUT_STATEMENT_SHORT_CIRCUIT_NO_OUTPUT_SLOTS: $LocalizationEntry;
        static LOG_PROGRAM_TICK_IO_STATEMENT_MOVE_TO_RETENTION_OBLIGATION: $LocalizationEntry;
        static LOG_PROGRAM_VOIDED_RESOURCES: $LocalizationEntry;
        static LOG_PROGRAM_TICK_OUTPUT_STATEMENT_DISCOVERED_OUTPUT_SLOT_COUNT: $LocalizationEntry;
        static LOG_PROGRAM_TICK_OUTPUT_STATEMENT: $LocalizationEntry;
        static LOG_PROGRAM_TICK_IO_STATEMENT_MOVE_TO_DESTINATION_TRACKER_REJECT: $LocalizationEntry;
        static LOG_PROGRAM_TICK_IO_STATEMENT_MOVE_TO_EXTRACTED_NOTHING: $LocalizationEntry;
        static LOG_PROGRAM_TICK_IO_STATEMENT_MOVE_TO_BEGIN: $LocalizationEntry;
        static LOG_PROGRAM_TICK_IO_STATEMENT_MOVE_TO_END: $LocalizationEntry;
        static LOG_PROGRAM_TICK_IO_STATEMENT_MOVE_TO_ZERO_TO_MOVE: $LocalizationEntry;
        static LOG_PROGRAM_TICK_IO_STATEMENT_MOVE_TO_TYPE_MISMATCH: $LocalizationEntry;
        static LOG_PROGRAM_TICK_IO_STATEMENT_MOVE_TO_RETENTION_OBLIGATION_NO_MOVE: $LocalizationEntry;
        static LOG_PROGRAM_TICK_IO_STATEMENT_MOVE_TO_EXTRACTED: $LocalizationEntry;
        static LOG_PROGRAM_TICK_OUTPUT_STATEMENT_SHORT_CIRCUIT_NO_INPUT_SLOTS: $LocalizationEntry;
        static LOG_PROGRAM_TICK_IO_STATEMENT_MOVE_TO_ZERO_SIMULATED_MOVEMENT: $LocalizationEntry;
        constructor(arg0: $LabelAccess_, arg1: $ResourceLimits, arg2: boolean, arg3: boolean);
        get statements(): $List<$Statement>;
        get referencedIOResourceIds(): $Stream<$ResourceIdentifier<never, never, never>>;
        get descendantStatements(): $Stream<$Statement>;
    }
    export class $ResourceIdentifier<STACK, ITEM, CAP> implements $ASTNode, $ToStringCondensed {
        expand(): $List<$ResourceIdentifier<STACK, ITEM, CAP>>;
        getLocation(): ($ResourceLocation) | undefined;
        static fromString<STACK, ITEM, CAP>(arg0: string): $ResourceIdentifier<STACK, ITEM, CAP>;
        matchesStack(arg0: $Object): boolean;
        getResourceType(): $ResourceType<STACK, ITEM, CAP>;
        usesRegex(): boolean;
        matchesResourceLocation(arg0: $ResourceLocation_): boolean;
        assertValid(): void;
        toStringCondensed(): string;
        setResourceTypeCache(arg0: $ResourceType_<STACK, ITEM, CAP>): void;
        getResourceTypeId(): $ResourceLocation;
        getStatements(): $List<$Statement>;
        getReferencedIOResourceIds(): $Stream<$ResourceIdentifier<never, never, never>>;
        getDescendantStatements(): $Stream<$Statement>;
        static MATCH_ALL: $ResourceIdentifier<never, never, never>;
        resourceTypeNamespace: string;
        resourceNamespace: string;
        resourceName: string;
        resourceTypeName: string;
        constructor(arg0: $ResourceKey_<$ResourceType<STACK, ITEM, CAP>>, arg1: $ResourceKey_<never>);
        constructor(arg0: string);
        constructor(arg0: string, arg1: string);
        constructor(arg0: string, arg1: string, arg2: string);
        constructor(arg0: string, arg1: string, arg2: string, arg3: string);
        constructor(arg0: $ResourceLocation_, arg1: $ResourceLocation_);
        constructor(arg0: $ResourceKey_<$ResourceType<STACK, ITEM, CAP>>, arg1: $ResourceLocation_);
        get location(): ($ResourceLocation) | undefined;
        get resourceType(): $ResourceType<STACK, ITEM, CAP>;
        set resourceTypeCache(value: $ResourceType_<STACK, ITEM, CAP>);
        get resourceTypeId(): $ResourceLocation;
        get statements(): $List<$Statement>;
        get referencedIOResourceIds(): $Stream<$ResourceIdentifier<never, never, never>>;
        get descendantStatements(): $Stream<$Statement>;
    }
    export class $IfStatement extends $Record implements $ASTNode, $Statement, $ToStringCondensed {
        condition(): $BoolExpr;
        tick(arg0: $ProgramContext): void;
        getStatements(): $List<$Statement>;
        toStringCondensed(): string;
        falseBlock(): $Block;
        trueBlock(): $Block;
        getReferencedIOResourceIds(): $Stream<$ResourceIdentifier<never, never, never>>;
        getDescendantStatements(): $Stream<$Statement>;
        static LOG_PROGRAM_TICK_IF_STATEMENT_WAS_FALSE: $LocalizationEntry;
        static LOG_PROGRAM_TICK_IF_STATEMENT_WAS_TRUE: $LocalizationEntry;
        constructor(condition: $BoolExpr_, trueBlock: $Block_, falseBlock: $Block_);
        get statements(): $List<$Statement>;
        get referencedIOResourceIds(): $Stream<$ResourceIdentifier<never, never, never>>;
        get descendantStatements(): $Stream<$Statement>;
    }
    /**
     * Values that may be interpreted as {@link $IfStatement}.
     */
    export type $IfStatement_ = { falseBlock?: $Block_, trueBlock?: $Block_, condition?: $BoolExpr_,  } | [falseBlock?: $Block_, trueBlock?: $Block_, condition?: $BoolExpr_, ];
    export class $ForgetStatement extends $Record implements $Statement {
        tick(arg0: $ProgramContext): void;
        labelToForget(): $Set<$Label>;
        getStatements(): $List<$Statement>;
        getReferencedIOResourceIds(): $Stream<$ResourceIdentifier<never, never, never>>;
        getDescendantStatements(): $Stream<$Statement>;
        static LOG_PROGRAM_TICK_FORGET_STATEMENT: $LocalizationEntry;
        constructor(labelToForget: $Set_<$Label_>);
        get statements(): $List<$Statement>;
        get referencedIOResourceIds(): $Stream<$ResourceIdentifier<never, never, never>>;
        get descendantStatements(): $Stream<$Statement>;
    }
    /**
     * Values that may be interpreted as {@link $ForgetStatement}.
     */
    export type $ForgetStatement_ = { labelToForget?: $Set_<$Label_>,  } | [labelToForget?: $Set_<$Label_>, ];
    export class $NumberRange extends $Record implements $ASTNode {
        end(): number;
        contains(arg0: number): boolean;
        start(): number;
        getStatements(): $List<$Statement>;
        getReferencedIOResourceIds(): $Stream<$ResourceIdentifier<never, never, never>>;
        getDescendantStatements(): $Stream<$Statement>;
        static MAX_RANGE: $NumberRange;
        constructor(start: number, end: number);
        get statements(): $List<$Statement>;
        get referencedIOResourceIds(): $Stream<$ResourceIdentifier<never, never, never>>;
        get descendantStatements(): $Stream<$Statement>;
    }
    /**
     * Values that may be interpreted as {@link $NumberRange}.
     */
    export type $NumberRange_ = { end?: number, start?: number,  } | [end?: number, start?: number, ];
    export class $TagMatcher implements $Predicate<$Object>, $ASTNode {
        test(arg0: $Object): boolean;
        static fromPath(arg0: $Collection_<string>): $TagMatcher;
        testString(arg0: string): boolean;
        static fromNamespaceAndPath(arg0: string, arg1: $Collection_<string>): $TagMatcher;
        testResourceLocation(arg0: $ResourceLocation_): boolean;
        or(arg0: $Predicate_<$Object>): $Predicate<$Object>;
        negate(): $Predicate<$Object>;
        and(arg0: $Predicate_<$Object>): $Predicate<$Object>;
        getStatements(): $List<$Statement>;
        getReferencedIOResourceIds(): $Stream<$ResourceIdentifier<never, never, never>>;
        getDescendantStatements(): $Stream<$Statement>;
        namespacePattern: string;
        pathElementPatterns: $List<string>;
        get statements(): $List<$Statement>;
        get referencedIOResourceIds(): $Stream<$ResourceIdentifier<never, never, never>>;
        get descendantStatements(): $Stream<$Statement>;
    }
    export class $ResourceLimit extends $Record implements $ASTNode {
        limit(): $Limit;
        "with"(): $With;
        matchesStack(arg0: $Object): boolean;
        resourceIds(): $ResourceIdSet;
        withLimit(arg0: $Limit_): $ResourceLimit;
        toStringCondensed(arg0: $Limit_): string;
        createOutputTracker(arg0: $ResourceIdSet): $IOutputResourceTracker;
        withDefaultLimit(arg0: $Limit_): $ResourceLimit;
        createInputTracker(arg0: $ResourceIdSet): $IInputResourceTracker;
        getStatements(): $List<$Statement>;
        getReferencedIOResourceIds(): $Stream<$ResourceIdentifier<never, never, never>>;
        getDescendantStatements(): $Stream<$Statement>;
        static TAKE_ALL_LEAVE_NONE: $ResourceLimit;
        static ACCEPT_ALL_WITHOUT_RESTRAINT: $ResourceLimit;
        constructor(resourceIds: $ResourceIdSet, limit: $Limit_, arg2: $With_);
        get statements(): $List<$Statement>;
        get referencedIOResourceIds(): $Stream<$ResourceIdentifier<never, never, never>>;
        get descendantStatements(): $Stream<$Statement>;
    }
    /**
     * Values that may be interpreted as {@link $ResourceLimit}.
     */
    export type $ResourceLimit_ = { with?: $With_, limit?: $Limit_, resourceIds?: $ResourceIdSet,  } | [withClause?: $With_, limit?: $Limit_, resourceIds?: $ResourceIdSet, ];
    export class $WithClause {
    }
    export interface $WithClause extends $ASTNode, $ToStringPretty {
        matchesStack<STACK>(arg0: $ResourceType_<STACK, never, never>, arg1: STACK): boolean;
    }
    /**
     * Values that may be interpreted as {@link $WithClause}.
     */
    export type $WithClause_ = ((arg0: $ResourceType<any, never, never>, arg1: any) => boolean);
    export class $LabelAccess extends $Record implements $ASTNode {
        slots(): $NumberRangeSet;
        labels(): $List<$Label>;
        sides(): $SideQualifier;
        roundRobin(): $RoundRobin;
        getLabelledPositions(arg0: $LabelPositionHolder_): $ArrayList<$Pair<$Label, $BlockPos>>;
        getStatements(): $List<$Statement>;
        getReferencedIOResourceIds(): $Stream<$ResourceIdentifier<never, never, never>>;
        getDescendantStatements(): $Stream<$Statement>;
        constructor(labels: $List_<$Label_>, sides: $SideQualifier_, slots: $NumberRangeSet_, roundRobin: $RoundRobin);
        get statements(): $List<$Statement>;
        get referencedIOResourceIds(): $Stream<$ResourceIdentifier<never, never, never>>;
        get descendantStatements(): $Stream<$Statement>;
    }
    /**
     * Values that may be interpreted as {@link $LabelAccess}.
     */
    export type $LabelAccess_ = { labels?: $List_<$Label_>, roundRobin?: $RoundRobin, slots?: $NumberRangeSet_, sides?: $SideQualifier_,  } | [labels?: $List_<$Label_>, roundRobin?: $RoundRobin, slots?: $NumberRangeSet_, sides?: $SideQualifier_, ];
    export class $WithTag extends $Record implements $ASTNode, $WithClause, $ToStringPretty {
        matchesStack<STACK>(arg0: $ResourceType_<STACK, never, never>, arg1: STACK): boolean;
        tagMatcher(): $TagMatcher;
        getStatements(): $List<$Statement>;
        getReferencedIOResourceIds(): $Stream<$ResourceIdentifier<never, never, never>>;
        getDescendantStatements(): $Stream<$Statement>;
        toStringPretty(): string;
        constructor(tagMatcher: $TagMatcher);
        get statements(): $List<$Statement>;
        get referencedIOResourceIds(): $Stream<$ResourceIdentifier<never, never, never>>;
        get descendantStatements(): $Stream<$Statement>;
    }
    /**
     * Values that may be interpreted as {@link $WithTag}.
     */
    export type $WithTag_ = { tagMatcher?: $TagMatcher,  } | [tagMatcher?: $TagMatcher, ];
    export class $ResourceIdSet implements $ASTNode {
        size(): number;
        isEmpty(): boolean;
        stream(): $Stream<$ResourceIdentifier<never, never, never>>;
        noneMatchStack(arg0: $Object): boolean;
        getReferencedResourceTypes(): $ResourceType<never, never, never>[];
        couldMatchMoreThanOne(): boolean;
        toStringCondensed(): string;
        anyMatchResourceLocation(arg0: $ResourceLocation_): boolean;
        getMatchingFromStack(arg0: $Object): $ResourceIdentifier<never, never, never>;
        getStatements(): $List<$Statement>;
        getReferencedIOResourceIds(): $Stream<$ResourceIdentifier<never, never, never>>;
        getDescendantStatements(): $Stream<$Statement>;
        static MATCH_ALL: $ResourceIdSet;
        static EMPTY: $ResourceIdSet;
        constructor(arg0: $ResourceIdentifier<never, never, never>[]);
        constructor(arg0: $Collection_<$ResourceIdentifier<never, never, never>>);
        get empty(): boolean;
        get referencedResourceTypes(): $ResourceType<never, never, never>[];
        get statements(): $List<$Statement>;
        get referencedIOResourceIds(): $Stream<$ResourceIdentifier<never, never, never>>;
        get descendantStatements(): $Stream<$Statement>;
    }
    export class $Label extends $Record implements $ASTNode {
        name(): string;
        static needsQuotes(arg0: string): boolean;
        getStatements(): $List<$Statement>;
        getReferencedIOResourceIds(): $Stream<$ResourceIdentifier<never, never, never>>;
        getDescendantStatements(): $Stream<$Statement>;
        constructor(name: string);
        get statements(): $List<$Statement>;
        get referencedIOResourceIds(): $Stream<$ResourceIdentifier<never, never, never>>;
        get descendantStatements(): $Stream<$Statement>;
    }
    /**
     * Values that may be interpreted as {@link $Label}.
     */
    export type $Label_ = { name?: string,  } | [name?: string, ];
    export class $SideQualifier extends $Record implements $ASTNode {
        resolve(arg0: $BlockState_): $ArrayList<$Direction>;
        sides(): $List<$Side>;
        getNonNullDirection(arg0: $BlockState_): $Direction;
        getStatements(): $List<$Statement>;
        getReferencedIOResourceIds(): $Stream<$ResourceIdentifier<never, never, never>>;
        getDescendantStatements(): $Stream<$Statement>;
        static ALL: $SideQualifier;
        static NULL: $SideQualifier;
        static DEFAULT: $SideQualifier;
        constructor(sides: $List_<$Side_>);
        get statements(): $List<$Statement>;
        get referencedIOResourceIds(): $Stream<$ResourceIdentifier<never, never, never>>;
        get descendantStatements(): $Stream<$Statement>;
    }
    /**
     * Values that may be interpreted as {@link $SideQualifier}.
     */
    export type $SideQualifier_ = { sides?: $List_<$Side_>,  } | [sides?: $List_<$Side_>, ];
}
