import { $ResourceType_ } from "@package/ca/teamdman/sfm/common/resourcetype";
import { $Enum } from "@package/java/lang";
import { $StringRepresentable } from "@package/net/minecraft/util";

declare module "@package/ca/teamdman/sfm/common/block" {
    export class $BufferBlockTier extends $Enum<$BufferBlockTier> {
        static values(): $BufferBlockTier[];
        static valueOf(arg0: string): $BufferBlockTier;
        getIntMaxStackSize(): number;
        getIntScalarMaxStackSize(): number;
        getLongScalarMaxStackSize(): number;
        static Basic: $BufferBlockTier;
        static MaxUnit: $BufferBlockTier;
        numSlots: number;
        static MaxGrande: $BufferBlockTier;
        maxStackSize: number;
        static Satisfying: $BufferBlockTier;
        static DoubleSatisfying: $BufferBlockTier;
        static Unit: $BufferBlockTier;
        static Paltry: $BufferBlockTier;
        get intMaxStackSize(): number;
        get intScalarMaxStackSize(): number;
        get longScalarMaxStackSize(): number;
    }
    /**
     * Values that may be interpreted as {@link $BufferBlockTier}.
     */
    export type $BufferBlockTier_ = "unit" | "paltry" | "basic" | "satisfying" | "doublesatisfying" | "maxunit" | "maxgrande";
    export class $BufferBlock$ContainedResource extends $Enum<$BufferBlock$ContainedResource> implements $StringRepresentable {
        static values(): $BufferBlock$ContainedResource[];
        static valueOf(arg0: string): $BufferBlock$ContainedResource;
        static from(arg0: $ResourceType_<never, never, never>): $BufferBlock$ContainedResource;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static Item: $BufferBlock$ContainedResource;
        static Redstone: $BufferBlock$ContainedResource;
        static Chemical: $BufferBlock$ContainedResource;
        static Energy: $BufferBlock$ContainedResource;
        static Unknown: $BufferBlock$ContainedResource;
        static Fluid: $BufferBlock$ContainedResource;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $BufferBlock$ContainedResource}.
     */
    export type $BufferBlock$ContainedResource_ = "item" | "fluid" | "energy" | "chemical" | "redstone" | "unknown";
}
