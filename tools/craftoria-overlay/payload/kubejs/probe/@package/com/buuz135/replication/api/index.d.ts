import { $Supplier } from "@package/java/util/function";
import { RegistryTypes, RegistryMarked } from "@special/types";

declare module "@package/com/buuz135/replication/api" {
    export class $IMatterType {
    }
    export interface $IMatterType {
        getName(): string;
        getColor(): $Supplier<number[]>;
        getMax(): number;
        get name(): string;
        get color(): $Supplier<number[]>;
        get max(): number;
    }
    /**
     * Values that may be interpreted as {@link $IMatterType}.
     */
    export type $IMatterType_ = RegistryTypes.ReplicationMatterTypes;
    export interface $IMatterType extends RegistryMarked<RegistryTypes.ReplicationMatterTypesTag, RegistryTypes.ReplicationMatterTypes> {}
}
