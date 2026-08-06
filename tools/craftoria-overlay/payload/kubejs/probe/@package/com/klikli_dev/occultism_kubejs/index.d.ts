import { $Registry } from "@package/net/minecraft/core";
import { $Item } from "@package/net/minecraft/world/item";
import { $Component_ } from "@package/net/minecraft/network/chat";
import { $ResourceLocation, $ResourceLocation_, $ResourceKey } from "@package/net/minecraft/resources";
import { $ItemBuilder } from "@package/dev/latvian/mods/kubejs/item";
import { $SourceLine } from "@package/dev/latvian/mods/kubejs/script";
export * as component from "@package/com/klikli_dev/occultism_kubejs/component";

declare module "@package/com/klikli_dev/occultism_kubejs" {
    export class $RitualDummyItemType extends $ItemBuilder {
        /**
         * Determines the type of texture shown for the ritual dummy.
         * Valid options are: "misc", "craft", "summon", "possess".
         */
        pentacleType(arg0: string): $RitualDummyItemType;
        /**
         * Sets the tooltip to display for the ritual dummy.
         * It should explain what the ritual does.
         * 
         * This will be overridden by a lang file if it exists.
         */
        ritualTooltip(arg0: $Component_): $RitualDummyItemType;
        sourceLine: $SourceLine;
        id: $ResourceLocation;
        registryKey: $ResourceKey<$Registry<$Item>>;
        constructor(arg0: $ResourceLocation_);
    }
}
