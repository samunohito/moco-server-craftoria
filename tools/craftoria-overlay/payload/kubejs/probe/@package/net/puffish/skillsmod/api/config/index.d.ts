import { $MinecraftServer } from "@package/net/minecraft/server";

declare module "@package/net/puffish/skillsmod/api/config" {
    export class $ConfigContext {
    }
    export interface $ConfigContext {
        emitWarning(arg0: string): void;
        getServer(): $MinecraftServer;
        get server(): $MinecraftServer;
    }
}
