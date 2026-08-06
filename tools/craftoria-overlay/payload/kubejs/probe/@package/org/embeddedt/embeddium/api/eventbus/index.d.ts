import { $Event, $ICancellableEvent } from "@package/net/neoforged/bus/api";

declare module "@package/org/embeddedt/embeddium/api/eventbus" {
    export class $EventHandlerRegistrar$Handler<T extends $EmbeddiumEvent> {
    }
    export interface $EventHandlerRegistrar$Handler<T extends $EmbeddiumEvent> {
        acceptEvent(arg0: T): void;
    }
    /**
     * Values that may be interpreted as {@link $EventHandlerRegistrar$Handler}.
     */
    export type $EventHandlerRegistrar$Handler_<T> = ((arg0: T) => void);
    export class $EmbeddiumEvent extends $Event implements $ICancellableEvent {
        isCanceled(): boolean;
        isCancelable(): boolean;
        setCanceled(arg0: boolean): void;
        constructor();
        get cancelable(): boolean;
    }
    export class $EventHandlerRegistrar<T extends $EmbeddiumEvent> {
        post(arg0: T): boolean;
        addListener(arg0: $EventHandlerRegistrar$Handler_<T>): void;
        constructor();
    }
}
