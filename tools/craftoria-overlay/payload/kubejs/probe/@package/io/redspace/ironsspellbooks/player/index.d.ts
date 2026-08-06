import { $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $Record } from "@package/java/lang";

declare module "@package/io/redspace/ironsspellbooks/player" {
    export class $SpinAttackType extends $Record {
        textureId(): $ResourceLocation;
        fullbright(): boolean;
        static RIPTIDE: $SpinAttackType;
        static FIRE: $SpinAttackType;
        static LIGHTNING: $SpinAttackType;
        constructor(textureId: $ResourceLocation_, fullbright: boolean);
    }
    /**
     * Values that may be interpreted as {@link $SpinAttackType}.
     */
    export type $SpinAttackType_ = { textureId?: $ResourceLocation_, fullbright?: boolean,  } | [textureId?: $ResourceLocation_, fullbright?: boolean, ];
}
