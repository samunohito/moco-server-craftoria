import { $AdvancementHolder, $AdvancementProgress, $AdvancementHolder_ } from "@package/net/minecraft/advancements";
import { $RenderType } from "@package/net/minecraft/client/renderer";
import { $NarratableEntry } from "@package/net/minecraft/client/gui/narration";
import { $Renderable } from "@package/net/minecraft/client/gui/components";
import { $ByteBufferBuilder } from "@package/com/mojang/blaze3d/vertex";
import { $KeyMapping } from "@package/net/minecraft/client";
import { $SequencedMap, $Map_, $Map, $List } from "@package/java/util";

declare module "@package/vazkii/patchouli/mixin/client" {
    export class $AccessorKeyMapping {
        static getAllKeyMappings(): $Map<string, $KeyMapping>;
        static get allKeyMappings(): $Map<string, $KeyMapping>;
    }
    export interface $AccessorKeyMapping {
    }
    export class $AccessorMultiBufferSource {
    }
    export interface $AccessorMultiBufferSource {
        getFixedBuffers(): $SequencedMap<$RenderType, $ByteBufferBuilder>;
        getFallbackBuffer(): $ByteBufferBuilder;
        get fixedBuffers(): $SequencedMap<$RenderType, $ByteBufferBuilder>;
        get fallbackBuffer(): $ByteBufferBuilder;
    }
    export class $AccessorScreen {
    }
    export interface $AccessorScreen {
        getNarratables(): $List<$NarratableEntry>;
        getRenderables(): $List<$Renderable>;
        get narratables(): $List<$NarratableEntry>;
        get renderables(): $List<$Renderable>;
    }
    export class $AccessorClientAdvancements {
    }
    export interface $AccessorClientAdvancements {
        getProgress(): $Map<$AdvancementHolder, $AdvancementProgress>;
        get progress(): $Map<$AdvancementHolder, $AdvancementProgress>;
    }
    /**
     * Values that may be interpreted as {@link $AccessorClientAdvancements}.
     */
    export type $AccessorClientAdvancements_ = (() => $Map_<$AdvancementHolder_, $AdvancementProgress>);
}
