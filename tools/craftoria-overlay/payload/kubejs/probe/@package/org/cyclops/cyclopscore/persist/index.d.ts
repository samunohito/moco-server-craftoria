export * as nbt from "@package/org/cyclops/cyclopscore/persist/nbt";

declare module "@package/org/cyclops/cyclopscore/persist" {
    export class $IDirtyMarkListener {
    }
    export interface $IDirtyMarkListener {
        onDirty(): void;
    }
    /**
     * Values that may be interpreted as {@link $IDirtyMarkListener}.
     */
    export type $IDirtyMarkListener_ = (() => void);
}
