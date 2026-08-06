
declare module "@package/com/matyrobbrt/keybindbundles/ii" {
    export class $KeyMappingExtension {
    }
    export interface $KeyMappingExtension {
        incrementClickCount(): void;
        restoreToOriginalKey(): void;
        takeOverForBundle(): void;
        kbb$unregister(): void;
    }
}
