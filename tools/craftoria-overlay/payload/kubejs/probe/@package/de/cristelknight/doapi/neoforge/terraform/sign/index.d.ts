import { $BlockBehaviour$Properties } from "@package/net/minecraft/world/level/block/state";

declare module "@package/de/cristelknight/doapi/neoforge/terraform/sign" {
    export class $BlockSettingsLock {
        static lock(settings: $BlockBehaviour$Properties): $BlockBehaviour$Properties;
    }
    export interface $BlockSettingsLock {
        terraform$lock(): void;
    }
    /**
     * Values that may be interpreted as {@link $BlockSettingsLock}.
     */
    export type $BlockSettingsLock_ = (() => void);
}
