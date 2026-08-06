import { $ParticleOptions_, $ParticleOptions } from "@package/net/minecraft/core/particles";

declare module "@package/com/leclowndu93150/particle_effects/utils" {
    export class $PEStatusEffect {
    }
    export interface $PEStatusEffect {
        particleEffects$getParticleEffect(): $ParticleOptions;
        particleEffects$setParticleEffect(arg0: $ParticleOptions_): void;
    }
    export class $PEType {
    }
    export interface $PEType {
        particleEffects$getColor(): number;
        particleEffects$setColor(arg0: number): void;
    }
}
