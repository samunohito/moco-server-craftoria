import { $MinecraftServer } from "@package/net/minecraft/server";
import { $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $List } from "@package/java/util";
import { $Class } from "@package/java/lang";
import { $BaseCapability } from "@package/net/neoforged/neoforge/capabilities";

declare module "@package/dev/compactmods/machines/api/room/capability" {
    export class $CompactRoomCapability<T, Ctx> extends $BaseCapability<T, Ctx> {
        static register<T, C>(arg0: $CompactRoomCapability<T, C>, arg1: $IRoomCapabilityProvider<T, C>): void;
        static create<T, C>(arg0: $ResourceLocation_, arg1: $Class<T>, arg2: $Class<C>): $CompactRoomCapability<T, C>;
        getCapability(arg0: $MinecraftServer, arg1: string, arg2: Ctx): T;
        static getAll(): $List<$CompactRoomCapability<never, never>>;
        static createVoid<T>(arg0: $ResourceLocation_, arg1: $Class<T>): $CompactRoomCapability<T, void>;
        static get all(): $List<$CompactRoomCapability<never, never>>;
    }
}
