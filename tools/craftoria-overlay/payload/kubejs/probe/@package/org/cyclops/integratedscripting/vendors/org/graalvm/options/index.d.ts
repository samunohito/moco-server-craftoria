import { $Iterable } from "@package/java/lang";
import { $List_, $Iterator } from "@package/java/util";

declare module "@package/org/cyclops/integratedscripting/vendors/org/graalvm/options" {
    export class $OptionDescriptor {
        getName(): string;
        getKey(): $OptionKey<never>;
        isDeprecated(): boolean;
        static newBuilder<T>(key: $OptionKey<T>, name: string): $OptionDescriptor$Builder;
        getCategory(): $OptionCategory;
        getHelp(): string;
        getDeprecationMessage(): string;
        isOptionMap(): boolean;
        getUsageSyntax(): string;
        getStability(): $OptionStability;
        get name(): string;
        get key(): $OptionKey<never>;
        get deprecated(): boolean;
        get category(): $OptionCategory;
        get help(): string;
        get deprecationMessage(): string;
        get optionMap(): boolean;
        get usageSyntax(): string;
        get stability(): $OptionStability;
    }
    export class $OptionDescriptors {
        static create(descriptors: $List_<$OptionDescriptor>): $OptionDescriptors;
        static createUnion(...descriptors: $OptionDescriptors[]): $OptionDescriptors;
        static EMPTY: $OptionDescriptors;
        [Symbol.iterator](): Iterator<$OptionDescriptor>
    }
    export interface $OptionDescriptors extends $Iterable<$OptionDescriptor> {
        get(optionName: string): $OptionDescriptor;
        iterator(): $Iterator<$OptionDescriptor>;
        [Symbol.iterator](): Iterator<$OptionDescriptor>
    }
}
