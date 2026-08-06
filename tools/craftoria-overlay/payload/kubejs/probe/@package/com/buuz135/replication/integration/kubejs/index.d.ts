import { $Registry } from "@package/net/minecraft/core";
import { $BuilderBase } from "@package/dev/latvian/mods/kubejs/registry";
import { $ResourceLocation, $ResourceLocation_, $ResourceKey } from "@package/net/minecraft/resources";
import { $IMatterType } from "@package/com/buuz135/replication/api";
import { $Map_, $Map } from "@package/java/util";
import { $Object } from "@package/java/lang";
import { $SourceLine } from "@package/dev/latvian/mods/kubejs/script";

declare module "@package/com/buuz135/replication/integration/kubejs" {
    export class $MatterTypeBuilder extends $BuilderBase<$IMatterType> {
        max(arg0: number): $MatterTypeBuilder;
        color(arg0: number, arg1: number, arg2: number, arg3: number): $MatterTypeBuilder;
        registryKey: $ResourceKey<$Registry<$IMatterType>>;
        sourceLine: $SourceLine;
        id: $ResourceLocation;
        constructor(arg0: $ResourceLocation_);
    }
    export class $ReplicationKubeJSGateway {
        matterValueForTag(arg0: string, arg1: $Map_<string, $Object>): $Map<string, $Object>;
        matterValueForItem(arg0: string, arg1: $Map_<string, $Object>): $Map<string, $Object>;
        matterValue(arg0: $Map_<string, $Object>, arg1: $Map_<string, $Object>): $Map<string, $Object>;
        constructor();
    }
}
