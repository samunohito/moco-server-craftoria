import { $VertexConsumer } from "@package/com/mojang/blaze3d/vertex";
import { $ImmutableList } from "@package/com/google/common/collect";
import { $EffectSettings, $Effect } from "@package/net/tysontheember/emberstextapi/immersivemessages/effects";
import { $Object } from "@package/java/lang";
import { $TypewriterTrack } from "@package/net/tysontheember/emberstextapi/immersivemessages/effects/animation";
import { $Matrix4f } from "@package/org/joml";

declare module "@package/net/tysontheember/emberstextapi/accessor" {
    export class $ETAStyle {
    }
    export interface $ETAStyle {
        emberstextapi$setObfuscateKey(arg0: $Object): void;
        emberstextapi$setTypewriterIndex(arg0: number): void;
        emberstextapi$getTypewriterTrack(): $TypewriterTrack;
        emberstextapi$getObfuscateKey(): $Object;
        emberstextapi$getTypewriterIndex(): number;
        emberstextapi$setTypewriterTrack(arg0: $TypewriterTrack): void;
        emberstextapi$setItemNbt(arg0: string): void;
        emberstextapi$setItemId(arg0: string): void;
        emberstextapi$setEffects(arg0: $ImmutableList<$Effect>): void;
        emberstextapi$getItemCount(): number;
        emberstextapi$getEffects(): $ImmutableList<$Effect>;
        emberstextapi$addEffect(arg0: $Effect): void;
        emberstextapi$getItemId(): string;
        emberstextapi$setItemCount(arg0: number): void;
        emberstextapi$getItemNbt(): string;
        emberstextapi$setEntityId(arg0: string): void;
        emberstextapi$getEntityYaw(): number;
        emberstextapi$setEntityYaw(arg0: number): void;
        emberstextapi$getEntityId(): string;
        emberstextapi$getEntityNbt(): string;
        emberstextapi$setEntityNbt(arg0: string): void;
        emberstextapi$setObfuscateStableKey(arg0: $Object): void;
        emberstextapi$getObfuscateSpanStart(): number;
        emberstextapi$setObfuscateSpanStart(arg0: number): void;
        emberstextapi$setObfuscateSpanLength(arg0: number): void;
        emberstextapi$getObfuscateSpanLength(): number;
        emberstextapi$getObfuscateStableKey(): $Object;
        emberstextapi$setEntityLighting(arg0: number): void;
        emberstextapi$setEntityOffsetY(arg0: number): void;
        emberstextapi$getEntitySpin(): number;
        emberstextapi$setEntityAnimation(arg0: string): void;
        emberstextapi$getItemOffsetY(): number;
        emberstextapi$setEntitySpin(arg0: number): void;
        emberstextapi$setEntityScale(arg0: number): void;
        emberstextapi$getEntityAnimation(): string;
        emberstextapi$setItemOffsetX(arg0: number): void;
        emberstextapi$setEntityRoll(arg0: number): void;
        emberstextapi$getEntityOffsetY(): number;
        emberstextapi$getEntityPitch(): number;
        emberstextapi$getEntityLighting(): number;
        emberstextapi$getEntityRoll(): number;
        emberstextapi$getItemOffsetX(): number;
        emberstextapi$getEntityScale(): number;
        emberstextapi$setItemOffsetY(arg0: number): void;
        emberstextapi$setEntityPitch(arg0: number): void;
        emberstextapi$getEntityOffsetX(): number;
        emberstextapi$setEntityOffsetX(arg0: number): void;
    }
    export class $ETABakedGlyph {
    }
    export interface $ETABakedGlyph {
        emberstextapi$render(arg0: $EffectSettings, arg1: boolean, arg2: number, arg3: $Matrix4f, arg4: $VertexConsumer, arg5: number): void;
    }
    /**
     * Values that may be interpreted as {@link $ETABakedGlyph}.
     */
    export type $ETABakedGlyph_ = ((arg0: $EffectSettings, arg1: boolean, arg2: number, arg3: $Matrix4f, arg4: $VertexConsumer, arg5: number) => void);
}
