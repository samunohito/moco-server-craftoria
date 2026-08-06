import { $RenderBuffers } from "@package/net/minecraft/client/renderer";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $List_, $List } from "@package/java/util";
import { $AntiFarmingPerChunk$State } from "@package/net/puffish/skillsmod/experience/source/builtin/util";
import { $Matrix4f } from "@package/org/joml";

declare module "@package/net/puffish/skillsmod/access" {
    export class $BuiltBufferAccess {
    }
    export interface $BuiltBufferAccess {
        setEmits(arg0: $List_<$Matrix4f>): void;
        getEmits(): $List<$Matrix4f>;
    }
    export class $MinecraftClientAccess {
    }
    export interface $MinecraftClientAccess {
        getBufferBuilders(): $RenderBuffers;
        get bufferBuilders(): $RenderBuffers;
    }
    /**
     * Values that may be interpreted as {@link $MinecraftClientAccess}.
     */
    export type $MinecraftClientAccess_ = (() => $RenderBuffers);
    export class $WorldChunkAccess {
    }
    export interface $WorldChunkAccess {
        getAntiFarmingPerChunkState(): $AntiFarmingPerChunk$State;
        get antiFarmingPerChunkState(): $AntiFarmingPerChunk$State;
    }
    /**
     * Values that may be interpreted as {@link $WorldChunkAccess}.
     */
    export type $WorldChunkAccess_ = (() => $AntiFarmingPerChunk$State);
    export class $DamageSourceAccess {
    }
    export interface $DamageSourceAccess {
        getWeapon(): ($ItemStack) | undefined;
        get weapon(): ($ItemStack) | undefined;
    }
    /**
     * Values that may be interpreted as {@link $DamageSourceAccess}.
     */
    export type $DamageSourceAccess_ = (() => ($ItemStack_) | undefined);
    export class $RenderLayerAccess {
    }
    export interface $RenderLayerAccess {
        setEmits(arg0: $List_<$Matrix4f>): void;
        set emits(value: $List_<$Matrix4f>);
    }
    /**
     * Values that may be interpreted as {@link $RenderLayerAccess}.
     */
    export type $RenderLayerAccess_ = ((arg0: $List<$Matrix4f>) => void);
}
