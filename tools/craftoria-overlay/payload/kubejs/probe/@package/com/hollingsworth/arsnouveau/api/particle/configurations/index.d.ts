import { $Level_ } from "@package/net/minecraft/world/level";
import { $BaseProperty, $PropMap } from "@package/com/hollingsworth/arsnouveau/api/particle/configurations/properties";
import { $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $AbstractWidget } from "@package/net/minecraft/client/gui/components";
import { $List, $List_ } from "@package/java/util";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $PropertyParticleOptions, $ParticleEmitter } from "@package/com/hollingsworth/arsnouveau/api/particle";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $Enum } from "@package/java/lang";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $Vec3_, $Vec3 } from "@package/net/minecraft/world/phys";
import { $Vector3f } from "@package/org/joml";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
export * as properties from "@package/com/hollingsworth/arsnouveau/api/particle/configurations/properties";

declare module "@package/com/hollingsworth/arsnouveau/api/particle/configurations" {
    export class $ParticleMotion$SpawnType extends $Enum<$ParticleMotion$SpawnType> {
        static values(): $ParticleMotion$SpawnType[];
        static valueOf(arg0: string): $ParticleMotion$SpawnType;
        static SPHERE: $ParticleMotion$SpawnType;
        static CUBE: $ParticleMotion$SpawnType;
    }
    /**
     * Values that may be interpreted as {@link $ParticleMotion$SpawnType}.
     */
    export type $ParticleMotion$SpawnType_ = "sphere" | "cube";
    export interface $IParticleMotionType<T> extends RegistryMarked<RegistryTypes.ArsNouveauParticleConfigsTag, RegistryTypes.ArsNouveauParticleConfigs> {}
    export class $ParticleMotion {
        init(arg0: $ParticleEmitter): void;
        getProperties(arg0: $PropMap): $List<$BaseProperty<never>>;
        getType(): $IParticleMotionType<never>;
        tick(arg0: $PropertyParticleOptions, arg1: $Level_, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): void;
        getMotionScaled(arg0: $Vec3_, arg1: number, arg2: $ParticleMotion$SpawnType_): $Vec3;
        toEmitterSpace(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): $Vector3f;
        getNumParticles(arg0: number): number;
        static CODEC: $Codec<$ParticleMotion>;
        propertyMap: $PropMap;
        emitter: $ParticleEmitter;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ParticleMotion>;
        constructor(arg0: $PropMap);
        get type(): $IParticleMotionType<never>;
    }
    export class $IParticleMotionType<T extends $ParticleMotion> {
    }
    export interface $IParticleMotionType<T extends $ParticleMotion> {
        getName(): $Component;
        create(arg0: $PropMap): T;
        create(): T;
        streamCodec(): $StreamCodec<$RegistryFriendlyByteBuf, T>;
        codec(): $MapCodec<T>;
        getIconLocation(): $ResourceLocation;
        get name(): $Component;
        get iconLocation(): $ResourceLocation;
    }
    /**
     * Values that may be interpreted as {@link $IParticleMotionType}.
     */
    export type $IParticleMotionType_<T> = RegistryTypes.ArsNouveauParticleConfigs;
    export class $ParticleConfigWidgetProvider {
        tick(): void;
        render(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number): void;
        addWidgets(arg0: $List_<$AbstractWidget>): void;
        mouseScrolled(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
        renderBg(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number): void;
        renderIcon(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        getButtonTitle(): $Component;
        getButtonTooltips(arg0: $List_<$Component_>): void;
        x: number;
        width: number;
        y: number;
        height: number;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number);
        get buttonTitle(): $Component;
    }
}
