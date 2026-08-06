import { $Consumer_ } from "@package/java/util/function";
import { $AtomicReference } from "@package/java/util/concurrent/atomic";
import { $CompletableFuture, $CompletionStage, $Executor } from "@package/java/util/concurrent";
import { $Object, $IllegalStateException, $Throwable, $Runnable_, $Runnable } from "@package/java/lang";
import { $Completable, $Scheduler } from "@package/io/reactivex/rxjava3/core";

declare module "@package/com/ishland/flowsched/scheduler" {
    export class $ItemHolder<K, V, Ctx, UserData> {
        isOpen(): boolean;
        getKey(): K;
        getItem(): $AtomicReference<V>;
        getFlags(): number;
        getUserData(): $AtomicReference<UserData>;
        isBusy(): boolean;
        getStatus(): $ItemStatus<K, V, Ctx>;
        getDependencies(status: $ItemStatus<K, V, Ctx>): $KeyStatusPair<K, V, Ctx>[];
        clearFlag(flag: number): void;
        setFlag(flag: number): void;
        setStatus(status: $ItemStatus<K, V, Ctx>, isCancellation: boolean): boolean;
        removeTicket(ticket: $ItemTicket<K, V, Ctx>): void;
        markDirty(scheduler: $StatusAdvancingScheduler<K, V, Ctx, UserData>): void;
        addTicket(ticket: $ItemTicket<K, V, Ctx>): void;
        setDependencies(status: $ItemStatus<K, V, Ctx>, dependencies: $KeyStatusPair<K, V, Ctx>[]): void;
        getFutureForStatus(status: $ItemStatus<K, V, Ctx>): $CompletableFuture<void>;
        getTargetStatus(): $ItemStatus<K, V, Ctx>;
        subscribeOp(op: $Completable): void;
        tryMarkDirty(scheduler: $StatusAdvancingScheduler<K, V, Ctx, UserData>): boolean;
        holdsDependency(): boolean;
        upgradingStatusTo(): $ItemStatus<K, V, Ctx>;
        isDependencyDirty(): boolean;
        executeCriticalSectionAndBusy(command: $Runnable_): void;
        submitUpgradeAction(signaller: $CancellationSignaller, status: $ItemStatus<K, V, Ctx>): void;
        consolidateMarkDirty(scheduler: $StatusAdvancingScheduler<K, V, Ctx, UserData>): void;
        getCriticalSectionExecutor(): $Executor;
        tryCancelUpgradeAction(): void;
        removeDependencyTicket(key: K, status: $ItemStatus<K, V, Ctx>): void;
        cleanupDependencies(scheduler: $StatusAdvancingScheduler<K, V, Ctx, never>): void;
        addDependencyTicket(scheduler: $StatusAdvancingScheduler<K, V, Ctx, never>, key: K, status: $ItemStatus<K, V, Ctx>, callback: $Runnable_): void;
        getOpFuture(): $CompletableFuture<void>;
        submitOpListener(runnable: $Runnable_): void;
        getFutureForStatus0(status: $ItemStatus<K, V, Ctx>): $CompletableFuture<void>;
        submitOp(op: $CompletionStage<void>): void;
        getCriticalSectionScheduler(): $Scheduler;
        static FLAG_HAVE_RETRIED: number;
        static UNLOADED_EXCEPTION: $IllegalStateException;
        static FLAG_REMOVED: number;
        static FLAG_BROKEN: number;
        get open(): boolean;
        get key(): K;
        get item(): $AtomicReference<V>;
        get flags(): number;
        get userData(): $AtomicReference<UserData>;
        get busy(): boolean;
        set flag(value: number);
        get targetStatus(): $ItemStatus<K, V, Ctx>;
        get dependencyDirty(): boolean;
        get criticalSectionExecutor(): $Executor;
        get opFuture(): $CompletableFuture<void>;
        get criticalSectionScheduler(): $Scheduler;
    }
    export class $ItemStatus<K, V, Ctx> {
        static EMPTY_DEPENDENCIES: $KeyStatusPair<any, any, any>[];
    }
    export interface $ItemStatus<K, V, Ctx> {
        ordinal(): number;
        getPrev(): $ItemStatus<K, V, Ctx>;
        getNext(): $ItemStatus<K, V, Ctx>;
        getDependencies(arg0: $ItemHolder<K, V, Ctx, never>): $KeyStatusPair<K, V, Ctx>[];
        postUpgradeToThis(arg0: Ctx): $Completable;
        upgradeToThis(arg0: Ctx, arg1: $Cancellable): $Completable;
        getAllStatuses(): $ItemStatus<K, V, Ctx>[];
        downgradeFromThis(arg0: Ctx, arg1: $Cancellable): $Completable;
        preDowngradeFromThis(arg0: Ctx, arg1: $Cancellable): $Completable;
        getDependenciesToRemove(holder: $ItemHolder<K, V, Ctx, never>): $KeyStatusPair<K, V, Ctx>[];
        getDependenciesToAdd(holder: $ItemHolder<K, V, Ctx, never>): $KeyStatusPair<K, V, Ctx>[];
        get prev(): $ItemStatus<K, V, Ctx>;
        get next(): $ItemStatus<K, V, Ctx>;
        get allStatuses(): $ItemStatus<K, V, Ctx>[];
    }
    export class $ItemTicket$TicketType {
        getDescription(): string;
        static DEPENDENCY: $ItemTicket$TicketType;
        static EXTERNAL: $ItemTicket$TicketType;
        constructor(description: string);
        get description(): string;
    }
    export class $StatusAdvancingScheduler<K, V, Ctx, UserData> {
        removeTicket(key: K, targetStatus: $ItemStatus<K, V, Ctx>): void;
        removeTicket(key: K, type: $ItemTicket$TicketType, source: $Object, targetStatus: $ItemStatus<K, V, Ctx>): void;
        addTicket(key: K, targetStatus: $ItemStatus<K, V, Ctx>, callback: $Runnable_): $ItemHolder<K, V, Ctx, UserData>;
        addTicket(key: K, source: $Object, targetStatus: $ItemStatus<K, V, Ctx>, callback: $Runnable_): $ItemHolder<K, V, Ctx, UserData>;
        addTicket(key: K, type: $ItemTicket$TicketType, source: $Object, targetStatus: $ItemStatus<K, V, Ctx>, callback: $Runnable_): $ItemHolder<K, V, Ctx, UserData>;
        getHolder(key: K): $ItemHolder<K, V, Ctx, UserData>;
        itemCount(): number;
        static NO_OP: $Runnable;
    }
    export class $ItemTicket<K, V, Ctx> {
        getType(): $ItemTicket$TicketType;
        getSource(): $Object;
        getTargetStatus(): $ItemStatus<K, V, Ctx>;
        consumeCallback(): void;
        constructor(type: $ItemTicket$TicketType, source: $Object, targetStatus: $ItemStatus<K, V, Ctx>, callback: $Runnable_);
        get type(): $ItemTicket$TicketType;
        get source(): $Object;
        get targetStatus(): $ItemStatus<K, V, Ctx>;
    }
    export class $CancellationSignaller {
        cancel(): void;
        addListener(callback: $Consumer_<$Throwable>): void;
        fireComplete(throwable: $Throwable): void;
        static COMPLETED: $CancellationSignaller;
        constructor(cancel: $Consumer_<$CancellationSignaller>);
    }
    export class $Cancellable {
        cancel(): void;
        isCancelled(): boolean;
        constructor();
        get cancelled(): boolean;
    }
    export class $KeyStatusPair<K, V, Ctx> {
        key(): K;
        status(): $ItemStatus<K, V, Ctx>;
        constructor(key: K, status: $ItemStatus<K, V, Ctx>);
    }
}
