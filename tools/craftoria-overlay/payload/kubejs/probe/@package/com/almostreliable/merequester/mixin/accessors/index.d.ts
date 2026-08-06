
declare module "@package/com/almostreliable/merequester/mixin/accessors" {
    export class $SlotMixin {
    }
    export interface $SlotMixin {
        merequester$setX(arg0: number): void;
        merequester$setY(arg0: number): void;
    }
    export class $EditBoxMixin {
    }
    export interface $EditBoxMixin {
        merequester$isEditable(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $EditBoxMixin}.
     */
    export type $EditBoxMixin_ = (() => boolean);
}
