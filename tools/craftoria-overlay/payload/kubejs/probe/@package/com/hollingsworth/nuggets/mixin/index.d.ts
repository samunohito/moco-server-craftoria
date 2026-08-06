import { $GoalSelector } from "@package/net/minecraft/world/entity/ai/goal";
import { $Vec3i } from "@package/net/minecraft/core";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $Renderable } from "@package/net/minecraft/client/gui/components";
import { $StructureTemplate$StructureEntityInfo, $StructureTemplate$Palette } from "@package/net/minecraft/world/level/levelgen/structure/templatesystem";
import { $InputConstants$Key } from "@package/com/mojang/blaze3d/platform";
import { $List_, $List } from "@package/java/util";

declare module "@package/com/hollingsworth/nuggets/mixin" {
    export class $AbstractSliderButtonAccessor {
    }
    export interface $AbstractSliderButtonAccessor {
        callGetHandleSprite(): $ResourceLocation;
        callGetSprite(): $ResourceLocation;
    }
    export class $ScreenAccessor {
    }
    export interface $ScreenAccessor {
        getRenderables(): $List<$Renderable>;
        get renderables(): $List<$Renderable>;
    }
    /**
     * Values that may be interpreted as {@link $ScreenAccessor}.
     */
    export type $ScreenAccessor_ = (() => $List_<$Renderable>);
    export class $MobAccessor {
    }
    export interface $MobAccessor {
        getGoalSelector(): $GoalSelector;
        get goalSelector(): $GoalSelector;
    }
    /**
     * Values that may be interpreted as {@link $MobAccessor}.
     */
    export type $MobAccessor_ = (() => $GoalSelector);
    export class $StructureTemplateAccessor {
    }
    export interface $StructureTemplateAccessor {
        getSize(): $Vec3i;
        getPalettes(): $List<$StructureTemplate$Palette>;
        getEntityInfoList(): $List<$StructureTemplate$StructureEntityInfo>;
        get size(): $Vec3i;
        get palettes(): $List<$StructureTemplate$Palette>;
        get entityInfoList(): $List<$StructureTemplate$StructureEntityInfo>;
    }
    export class $KeyMappingAccessor {
    }
    export interface $KeyMappingAccessor {
        getKey(): $InputConstants$Key;
        get key(): $InputConstants$Key;
    }
    /**
     * Values that may be interpreted as {@link $KeyMappingAccessor}.
     */
    export type $KeyMappingAccessor_ = (() => $InputConstants$Key);
}
