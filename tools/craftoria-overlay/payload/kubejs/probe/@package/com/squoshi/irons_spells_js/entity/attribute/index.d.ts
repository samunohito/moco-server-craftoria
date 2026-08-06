import { $Predicate } from "@package/java/util/function";
import { $Registry } from "@package/net/minecraft/core";
import { $Either } from "@package/com/mojang/datafixers/util";
import { $ResourceLocation, $ResourceLocation_, $ResourceKey } from "@package/net/minecraft/resources";
import { $EntityType } from "@package/net/minecraft/world/entity";
import { $Attribute } from "@package/net/minecraft/world/entity/ai/attributes";
import { $List } from "@package/java/util";
import { $SourceLine } from "@package/dev/latvian/mods/kubejs/script";
import { $AttributeBuilder$Range, $AttributeBuilder } from "@package/dev/latvian/mods/kubejs/entity";

declare module "@package/com/squoshi/irons_spells_js/entity/attribute" {
    export class $SpellAttributeBuilderJS extends $AttributeBuilder {
        registryKey: $ResourceKey<$Registry<$Attribute>>;
        sourceLine: $SourceLine;
        predicateList: $List<$Predicate<$EntityType<never>>>;
        defaultValue: $Either<$AttributeBuilder$Range, boolean>;
        id: $ResourceLocation;
        constructor(arg0: $ResourceLocation_);
    }
}
