import { $Registry } from "@package/net/minecraft/core";
import { $Item } from "@package/net/minecraft/world/item";
import { $ResourceLocation, $ResourceLocation_, $ResourceKey } from "@package/net/minecraft/resources";
import { $ItemBuilder } from "@package/dev/latvian/mods/kubejs/item";
import { $SourceLine } from "@package/dev/latvian/mods/kubejs/script";

declare module "@package/dev/bluephs/createvintageneoforged/compat/kubejs/item" {
    export class $SpringItemBuilder extends $ItemBuilder {
        setStiffness(arg0: number): $SpringItemBuilder;
        sourceLine: $SourceLine;
        id: $ResourceLocation;
        registryKey: $ResourceKey<$Registry<$Item>>;
        constructor(arg0: $ResourceLocation_);
        set stiffness(value: number);
    }
}
