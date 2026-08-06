import { $Codec } from "@package/com/mojang/serialization";

declare module "@package/lv/id/bonne/animalpen/interaction/value" {
    export class $Value {
        static CODEC: $Codec<$Value>;
    }
    export interface $Value {
        getAsInt(): number;
        getAsString(): string;
        getAsBoolean(): boolean;
        get asInt(): number;
        get asString(): string;
        get asBoolean(): boolean;
    }
}
