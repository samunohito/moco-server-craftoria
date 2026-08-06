import { $Object } from "@package/java/lang";

declare module "@package/org/cyclops/integratedscripting/vendors/org/graalvm/word" {
    export class $PointerBase {
    }
    export interface $PointerBase extends $ComparableWord {
        isNull(): boolean;
        isNonNull(): boolean;
        get null(): boolean;
        get nonNull(): boolean;
    }
    export class $WordBase {
    }
    export interface $WordBase {
        /**
         * @deprecated
         */
        equals(o: $Object): boolean;
        rawValue(): number;
    }
    export class $SignedWord {
    }
    export interface $SignedWord extends $ComparableWord {
        add(val: number): $SignedWord;
        add(val: $SignedWord): $SignedWord;
        shiftLeft(n: $UnsignedWord): $SignedWord;
        shiftLeft(n: number): $SignedWord;
        equal(val: number): boolean;
        equal(val: $SignedWord): boolean;
        multiply(val: number): $SignedWord;
        multiply(val: $SignedWord): $SignedWord;
        or(val: number): $SignedWord;
        or(val: $SignedWord): $SignedWord;
        not(): $SignedWord;
        subtract(val: $SignedWord): $SignedWord;
        subtract(val: number): $SignedWord;
        and(val: number): $SignedWord;
        and(val: $SignedWord): $SignedWord;
        xor(val: $SignedWord): $SignedWord;
        xor(val: number): $SignedWord;
        greaterThan(val: number): boolean;
        greaterThan(val: $SignedWord): boolean;
        lessThan(val: number): boolean;
        lessThan(val: $SignedWord): boolean;
        notEqual(val: $SignedWord): boolean;
        notEqual(val: number): boolean;
        greaterOrEqual(val: number): boolean;
        greaterOrEqual(val: $SignedWord): boolean;
        lessOrEqual(val: number): boolean;
        lessOrEqual(val: $SignedWord): boolean;
        signedRemainder(val: $SignedWord): $SignedWord;
        signedRemainder(val: number): $SignedWord;
        signedShiftRight(n: $UnsignedWord): $SignedWord;
        signedShiftRight(n: number): $SignedWord;
        signedDivide(val: number): $SignedWord;
        signedDivide(val: $SignedWord): $SignedWord;
    }
}
