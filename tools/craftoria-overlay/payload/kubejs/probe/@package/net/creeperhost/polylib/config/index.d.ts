import { $Path_, $Path } from "@package/java/nio/file";
import { $Class } from "@package/java/lang";

declare module "@package/net/creeperhost/polylib/config" {
    export class $PolyConfig extends $ConfigData {
        serverOnlySupport: boolean;
        constructor();
    }
    export class $ConfigData {
        constructor();
    }
    export class $ConfigBuilder {
        load(data: $ConfigData): void;
        load(): void;
        save(data: $ConfigData): void;
        save(): void;
        saveConfig(): string;
        getConfigName(): string;
        getConfigPath(): $Path;
        getConfigData(): $ConfigData;
        constructor(configName: string, clazz: $Class<never>);
        constructor(configName: string, configPath: $Path_, data: $ConfigData);
        constructor(configName: string, configPath: $Path_, clazz: $Class<never>);
        get configName(): string;
        get configPath(): $Path;
        get configData(): $ConfigData;
    }
}
