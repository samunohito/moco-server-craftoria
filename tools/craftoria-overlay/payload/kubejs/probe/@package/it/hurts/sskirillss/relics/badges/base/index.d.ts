import { RegistryTypes, RegistryMarked } from "@special/types";
import { $ResourceLocation } from "@package/net/minecraft/resources";

declare module "@package/it/hurts/sskirillss/relics/badges/base" {
    export interface $AbstractBadge extends RegistryMarked<RegistryTypes.RelicsBadgesTag, RegistryTypes.RelicsBadges> {}
    export class $AbstractBadge {
        getId(): string;
        getIconTexture(): $ResourceLocation;
        getOutlineTexture(): $ResourceLocation;
        constructor(arg0: string);
        get id(): string;
        get iconTexture(): $ResourceLocation;
        get outlineTexture(): $ResourceLocation;
    }
    /**
     * Values that may be interpreted as {@link $AbstractBadge}.
     */
    export type $AbstractBadge_ = RegistryTypes.RelicsBadges;
}
