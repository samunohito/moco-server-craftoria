import { $Level } from "@package/net/minecraft/world/level";
import { $ManagerBlockEntity } from "@package/ca/teamdman/sfm/common/blockentity";
import { $Trigger, $OutputStatement, $Program_, $IfStatement, $Program, $ResourceIdSet, $Label, $ResourceLimit, $Label_, $ASTNode, $IfStatement_, $InputStatement } from "@package/ca/teamdman/sfml/ast";
import { $CableNetwork } from "@package/ca/teamdman/sfm/common/block_network";
import { $LabelPositionHolder_, $LabelPositionHolder } from "@package/ca/teamdman/sfm/common/label";
import { $List, $List_ } from "@package/java/util";
import { $Duration_ } from "@package/java/time";
import { $BigInteger } from "@package/java/math";
import { $BlockPos, $BlockPos_, $Direction_, $Direction } from "@package/net/minecraft/core";
import { $Stream } from "@package/java/util/stream";
import { $AtomicReference } from "@package/java/util/concurrent/atomic";
import { $ResourceType, $ResourceType_ } from "@package/ca/teamdman/sfm/common/resourcetype";
import { $TranslatableLogger } from "@package/ca/teamdman/sfm/common/logging";
import { $Record, $Object } from "@package/java/lang";
export * as linting from "@package/ca/teamdman/sfm/common/program/linting";

declare module "@package/ca/teamdman/sfm/common/program" {
    export class $LimitedInputSlot<STACK, ITEM, CAP> implements $LimitedSlot<STACK, ITEM, CAP> {
        getSlot(): number;
        extract(arg0: number): STACK;
        init(arg0: CAP, arg1: $Label_, arg2: $BlockPos_, arg3: $Direction_, arg4: number, arg5: $IInputResourceTracker, arg6: STACK, arg7: $ResourceType_<STACK, ITEM, CAP>): void;
        isDone(): boolean;
        getType(): $ResourceType<STACK, ITEM, CAP>;
        getHandler(): CAP;
        setDone(): void;
        peekStackInSlot(): STACK;
        getLabel(): $Label;
        getPos(): $BlockPos;
        getDirection(): $Direction;
        handler: CAP;
        pos: $BlockPos;
        tracker: $IInputResourceTracker;
        freed: boolean;
        label: $Label;
        slot: number;
        type: $ResourceType<STACK, ITEM, CAP>;
        direction: $Direction;
        constructor(arg0: $Label_, arg1: $BlockPos_, arg2: $Direction_, arg3: number, arg4: CAP, arg5: $IInputResourceTracker, arg6: STACK, arg7: $ResourceType_<STACK, ITEM, CAP>);
    }
    export class $IOutputResourceTracker {
    }
    export interface $IOutputResourceTracker {
        isDone<STACK, CAP, ITEM>(arg0: $ResourceType_<STACK, ITEM, CAP>, arg1: STACK): boolean;
        getResourceLimit(): $ResourceLimit;
        getExclusions(): $ResourceIdSet;
        getMaxTransferable<STACK, ITEM, CAP>(arg0: $ResourceType_<STACK, ITEM, CAP>, arg1: STACK): number;
        trackTransfer<STACK, ITEM, CAP>(arg0: $ResourceType_<STACK, ITEM, CAP>, arg1: STACK, arg2: number): void;
        matchesStack(arg0: $Object): boolean;
        matchesCapabilityType(arg0: $Object): boolean;
        updateRetentionObservation<STACK, ITEM, CAP>(arg0: $ResourceType_<STACK, ITEM, CAP>, arg1: STACK): void;
        get resourceLimit(): $ResourceLimit;
        get exclusions(): $ResourceIdSet;
    }
    export class $SimulateExploreAllPathsProgramBehaviour implements $ProgramBehaviour {
        fork(): $ProgramBehaviour;
        onInputStatementForgetTransform(arg0: $ProgramContext, arg1: $InputStatement, arg2: $InputStatement): void;
        getSeenIOStatementCountForEachPath(): number[];
        onInputStatementDropped(arg0: $ProgramContext, arg1: $InputStatement): void;
        getPathElementForNode(arg0: $ASTNode): $SimulateExploreAllPathsProgramBehaviour$ExecutionPathElement;
        onOutputStatementExecution(arg0: $ProgramContext, arg1: $OutputStatement): void;
        getLatestPathElement(): $SimulateExploreAllPathsProgramBehaviour$ExecutionPathElement;
        getTriggerPathCount(): $BigInteger;
        terminatePathAndBeginAnew(): void;
        onInputStatementExecution(arg0: $ProgramContext, arg1: $InputStatement): void;
        pushPathElement(arg0: $SimulateExploreAllPathsProgramBehaviour$ExecutionPathElement): void;
        onTriggerDropped(arg0: $ProgramContext, arg1: $Trigger): void;
        getCurrentPath(): $SimulateExploreAllPathsProgramBehaviour$ExecutionPath;
        onProgramFinished(arg0: $ProgramContext, arg1: $Program_): void;
        getSeenPaths(): $List<$SimulateExploreAllPathsProgramBehaviour$ExecutionPath>;
        prepareNextTrigger(): void;
        constructor();
        constructor(arg0: $List_<$SimulateExploreAllPathsProgramBehaviour$ExecutionPath_>, arg1: $SimulateExploreAllPathsProgramBehaviour$ExecutionPath_, arg2: $AtomicReference<$BigInteger>);
        get seenIOStatementCountForEachPath(): number[];
        get latestPathElement(): $SimulateExploreAllPathsProgramBehaviour$ExecutionPathElement;
        get triggerPathCount(): $BigInteger;
        get currentPath(): $SimulateExploreAllPathsProgramBehaviour$ExecutionPath;
        get seenPaths(): $List<$SimulateExploreAllPathsProgramBehaviour$ExecutionPath>;
    }
    export class $IInputResourceTracker {
    }
    export interface $IInputResourceTracker {
        isDone<STACK, CAP, ITEM>(arg0: $ResourceType_<STACK, ITEM, CAP>, arg1: STACK): boolean;
        getResourceLimit(): $ResourceLimit;
        getExclusions(): $ResourceIdSet;
        getMaxTransferable<STACK, ITEM, CAP>(arg0: $ResourceType_<STACK, ITEM, CAP>, arg1: STACK): number;
        trackTransfer<STACK, ITEM, CAP>(arg0: $ResourceType_<STACK, ITEM, CAP>, arg1: STACK, arg2: number): void;
        matchesStack(arg0: $Object): boolean;
        trackRetentionObligation<STACK, ITEM, CAP>(arg0: $ResourceType_<STACK, ITEM, CAP>, arg1: STACK, arg2: number, arg3: $BlockPos_, arg4: number): void;
        matchesCapabilityType(arg0: $Object): boolean;
        getRemainingRetentionObligation<STACK, ITEM, CAP>(arg0: $ResourceType_<STACK, ITEM, CAP>, arg1: STACK): number;
        getRetentionObligationForSlot<STACK, ITEM, CAP>(arg0: $ResourceType_<STACK, ITEM, CAP>, arg1: STACK, arg2: $BlockPos_, arg3: number): number;
        get resourceLimit(): $ResourceLimit;
        get exclusions(): $ResourceIdSet;
    }
    export class $SimulateExploreAllPathsProgramBehaviour$ExecutionPath extends $Record {
        stream(): $Stream<$SimulateExploreAllPathsProgramBehaviour$ExecutionPathElement>;
        fork(): $SimulateExploreAllPathsProgramBehaviour$ExecutionPath;
        history(): $List<$SimulateExploreAllPathsProgramBehaviour$ExecutionPathElement>;
        streamBranches(): $Stream<$SimulateExploreAllPathsProgramBehaviour$Branch>;
        constructor();
        constructor(history: $List_<$SimulateExploreAllPathsProgramBehaviour$ExecutionPathElement>);
    }
    /**
     * Values that may be interpreted as {@link $SimulateExploreAllPathsProgramBehaviour$ExecutionPath}.
     */
    export type $SimulateExploreAllPathsProgramBehaviour$ExecutionPath_ = { history?: $List_<$SimulateExploreAllPathsProgramBehaviour$ExecutionPathElement>,  } | [history?: $List_<$SimulateExploreAllPathsProgramBehaviour$ExecutionPathElement>, ];
    export class $CapabilityConsumer<T> {
    }
    export interface $CapabilityConsumer<T> {
        accept(arg0: $Label_, arg1: $BlockPos_, arg2: $Direction_, arg3: T): void;
    }
    /**
     * Values that may be interpreted as {@link $CapabilityConsumer}.
     */
    export type $CapabilityConsumer_<T> = ((arg0: $Label, arg1: $BlockPos, arg2: $Direction, arg3: T) => void);
    export class $LimitedOutputSlot<STACK, ITEM, CAP> implements $LimitedSlot<STACK, ITEM, CAP> {
        getSlot(): number;
        insert(arg0: STACK, arg1: boolean): STACK;
        init(arg0: CAP, arg1: $Label_, arg2: $BlockPos_, arg3: $Direction_, arg4: number, arg5: $IOutputResourceTracker, arg6: STACK, arg7: $ResourceType_<STACK, ITEM, CAP>): void;
        isDone(): boolean;
        getType(): $ResourceType<STACK, ITEM, CAP>;
        getHandler(): CAP;
        getLabel(): $Label;
        getStackInSlot(): STACK;
        getPos(): $BlockPos;
        getDirection(): $Direction;
        handler: CAP;
        pos: $BlockPos;
        tracker: $IOutputResourceTracker;
        freed: boolean;
        label: $Label;
        slot: number;
        type: $ResourceType<STACK, ITEM, CAP>;
        direction: $Direction;
        constructor(arg0: $Label_, arg1: $BlockPos_, arg2: $Direction_, arg3: number, arg4: CAP, arg5: $IOutputResourceTracker, arg6: STACK, arg7: $ResourceType_<STACK, ITEM, CAP>);
        get done(): boolean;
        get stackInSlot(): STACK;
    }
    export class $SimulateExploreAllPathsProgramBehaviour$Branch extends $Record implements $SimulateExploreAllPathsProgramBehaviour$ExecutionPathElement {
        ifStatement(): $IfStatement;
        wasTrue(): boolean;
        constructor(ifStatement: $IfStatement_, wasTrue: boolean);
    }
    /**
     * Values that may be interpreted as {@link $SimulateExploreAllPathsProgramBehaviour$Branch}.
     */
    export type $SimulateExploreAllPathsProgramBehaviour$Branch_ = { wasTrue?: boolean, ifStatement?: $IfStatement_,  } | [wasTrue?: boolean, ifStatement?: $IfStatement_, ];
    export class $SimulateExploreAllPathsProgramBehaviour$ExecutionPathElement {
    }
    export interface $SimulateExploreAllPathsProgramBehaviour$ExecutionPathElement {
    }
    export class $ProgramContext {
        getLogger(): $TranslatableLogger;
        free(): void;
        fork(): $ProgramContext;
        getLevel(): $Level;
        didSomething(): boolean;
        getInputs(): $List<$InputStatement>;
        getProgram(): $Program;
        getManager(): $ManagerBlockEntity;
        getNetwork(): $CableNetwork;
        static createSimulationContext(arg0: $Program_, arg1: $LabelPositionHolder_, arg2: number, arg3: $SimulateExploreAllPathsProgramBehaviour): $ProgramContext;
        static createSimulationContext(arg0: $Program_, arg1: $ManagerBlockEntity, arg2: $CableNetwork, arg3: $LabelPositionHolder_, arg4: number, arg5: $SimulateExploreAllPathsProgramBehaviour): $ProgramContext;
        getLabelPositionHolder(): $LabelPositionHolder;
        getBehaviour(): $ProgramBehaviour;
        addInput(arg0: $InputStatement): void;
        getRedstonePulses(): number;
        setDidSomething(arg0: boolean): void;
        constructor(arg0: $Program_, arg1: $ManagerBlockEntity, arg2: $ProgramBehaviour_);
        get logger(): $TranslatableLogger;
        get level(): $Level;
        get inputs(): $List<$InputStatement>;
        get program(): $Program;
        get manager(): $ManagerBlockEntity;
        get network(): $CableNetwork;
        get labelPositionHolder(): $LabelPositionHolder;
        get behaviour(): $ProgramBehaviour;
        get redstonePulses(): number;
    }
    export class $LimitedSlot<STACK, ITEM, CAP> {
    }
    export interface $LimitedSlot<STACK, ITEM, CAP> {
        getSlot(): number;
        getType(): $ResourceType<STACK, ITEM, CAP>;
        getHandler(): CAP;
        getLabel(): $Label;
        getPos(): $BlockPos;
        getDirection(): $Direction;
        get slot(): number;
        get type(): $ResourceType<STACK, ITEM, CAP>;
        get handler(): CAP;
        get label(): $Label;
        get pos(): $BlockPos;
        get direction(): $Direction;
    }
    export class $ProgramBehaviour {
    }
    export interface $ProgramBehaviour {
        fork(): $ProgramBehaviour;
    }
    /**
     * Values that may be interpreted as {@link $ProgramBehaviour}.
     */
    export type $ProgramBehaviour_ = (() => $ProgramBehaviour);
    export class $IProgramHooks {
    }
    export interface $IProgramHooks {
        onProgramDidSomething(arg0: $Duration_): void;
    }
}
