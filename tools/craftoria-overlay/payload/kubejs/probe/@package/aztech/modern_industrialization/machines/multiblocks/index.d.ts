import { $ChunkPos, $Level_ } from "@package/net/minecraft/world/level";
import { $MutableComponent } from "@package/net/minecraft/network/chat";
import { $ChunkEventListener } from "@package/aztech/modern_industrialization/machines/multiblocks/world";
import { $OrientationComponent, $ShapeValidComponent, $PlacedByComponent, $OrientationComponent$Params, $EnergyComponent } from "@package/aztech/modern_industrialization/machines/components";
import { $List, $Map, $Set, $Set_, $List_ } from "@package/java/util";
import { $SilencedComponent } from "@package/dev/thestaticvoid/mi_sound_addon/util";
import { $MachineCasing } from "@package/aztech/modern_industrialization/machines/models";
import { $Tickable } from "@package/aztech/modern_industrialization/util";
import { $Supplier_ } from "@package/java/util/function";
import { $BlockPos, $BlockPos_, $Direction_ } from "@package/net/minecraft/core";
import { $ConfigurableFluidStack, $ConfigurableItemStack } from "@package/aztech/modern_industrialization/inventory";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $MachineGuiParameters } from "@package/aztech/modern_industrialization/machines/gui";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $MachineBlockEntity, $ComponentStorage$GuiServer, $BEP_ } from "@package/aztech/modern_industrialization/machines";
export * as world from "@package/aztech/modern_industrialization/machines/multiblocks/world";

declare module "@package/aztech/modern_industrialization/machines/multiblocks" {
    export class $ShapeTemplate$LayeredBuilder {
        key(arg0: string, arg1: $SimpleMember, arg2: $HatchFlags): $ShapeTemplate$LayeredBuilder;
        build(): $ShapeTemplate;
        constructor(arg0: $MachineCasing, arg1: string[][]);
    }
    export class $HatchFlags {
        values(): $Set<$HatchType>;
        allows(arg0: $HatchType): boolean;
        static NO_HATCH: $HatchFlags;
        constructor(arg0: $Set_<$HatchType>);
    }
    export class $MultiblockMachineBlockEntity extends $MachineBlockEntity {
        unlink(): void;
        getOrientation(): $OrientationComponent;
        getActiveShape(): $ShapeTemplate;
        isShapeValid(): boolean;
        getBigShape(): $ShapeTemplate;
        createShapeMatcher(): $ShapeMatcher;
        guiParams: $MachineGuiParameters;
        shapeValid: $ShapeValidComponent;
        orientation: $OrientationComponent;
        placedBy: $PlacedByComponent;
        silencedComp: $SilencedComponent;
        static ATTACHMENTS_NBT_KEY: string;
        guiComponents: $ComponentStorage$GuiServer;
        constructor(arg0: $BEP_, arg1: $MachineGuiParameters, arg2: $OrientationComponent$Params);
        get activeShape(): $ShapeTemplate;
        get bigShape(): $ShapeTemplate;
    }
    export class $HatchBlockEntity extends $MachineBlockEntity implements $Tickable {
        link(arg0: $MachineCasing): void;
        unlink(): void;
        tick(): void;
        isMatched(): boolean;
        appendFluidOutputs(arg0: $List_<$ConfigurableFluidStack>): void;
        upgradesToSteel(): boolean;
        appendItemInputs(arg0: $List_<$ConfigurableItemStack>): void;
        appendFluidInputs(arg0: $List_<$ConfigurableFluidStack>): void;
        appendItemOutputs(arg0: $List_<$ConfigurableItemStack>): void;
        appendEnergyInputs(arg0: $List_<$EnergyComponent>): void;
        getHatchType(): $HatchType;
        appendEnergyOutputs(arg0: $List_<$EnergyComponent>): void;
        guiParams: $MachineGuiParameters;
        orientation: $OrientationComponent;
        placedBy: $PlacedByComponent;
        silencedComp: $SilencedComponent;
        static ATTACHMENTS_NBT_KEY: string;
        guiComponents: $ComponentStorage$GuiServer;
        constructor(arg0: $BEP_, arg1: $MachineGuiParameters, arg2: $OrientationComponent$Params);
        get matched(): boolean;
        get hatchType(): $HatchType;
    }
    export class $HatchType {
        id(): $ResourceLocation;
        description(): $MutableComponent;
    }
    export class $ShapeMatcher implements $ChunkEventListener {
        matches(arg0: $BlockPos_, arg1: $Level_): boolean;
        onLoad(): void;
        getPositions(): $Set<$BlockPos>;
        rematch(arg0: $Level_): void;
        registerListeners(arg0: $Level_): void;
        unregisterListeners(arg0: $Level_): void;
        onBlockUpdate(arg0: $BlockPos_): void;
        static toWorldPos(arg0: $BlockPos_, arg1: $Direction_, arg2: $BlockPos_): $BlockPos;
        isMatchSuccessful(): boolean;
        unlinkHatches(): void;
        needsRematch(): boolean;
        getMatchedHatches(): $List<$HatchBlockEntity>;
        buildMultiblock(arg0: $Level_): number;
        getHatchFlags(arg0: $BlockPos_): $HatchFlags;
        getSimpleMember(arg0: $BlockPos_): $SimpleMember;
        onUnload(): void;
        getSpannedChunks(): $Set<$ChunkPos>;
        constructor(arg0: $Level_, arg1: $BlockPos_, arg2: $Direction_, arg3: $ShapeTemplate);
        get positions(): $Set<$BlockPos>;
        get matchSuccessful(): boolean;
        get matchedHatches(): $List<$HatchBlockEntity>;
        get spannedChunks(): $Set<$ChunkPos>;
    }
    export class $ShapeTemplate {
        simpleMembers: $Map<$BlockPos, $SimpleMember>;
        hatchCasing: $MachineCasing;
        hatchFlags: $Map<$BlockPos, $HatchFlags>;
    }
    export class $SimpleMember {
        static forBlock(arg0: $Supplier_<$Block>): $SimpleMember;
        static forBlockId(arg0: $ResourceLocation_): $SimpleMember;
        static verticalChain(): $SimpleMember;
        static forBlockState(arg0: $BlockState_): $SimpleMember;
    }
    export interface $SimpleMember {
        matchesState(arg0: $BlockState_): boolean;
        getPreviewState(): $BlockState;
        get previewState(): $BlockState;
    }
    export class $ShapeTemplate$Builder {
        remove(arg0: number, arg1: number, arg2: number): $ShapeTemplate$Builder;
        add(arg0: number, arg1: number, arg2: number, arg3: $SimpleMember, arg4: $HatchFlags): $ShapeTemplate$Builder;
        add(arg0: number, arg1: number, arg2: number, arg3: $SimpleMember): $ShapeTemplate$Builder;
        build(): $ShapeTemplate;
        add3by3(arg0: number, arg1: $SimpleMember, arg2: boolean, arg3: $HatchFlags): $ShapeTemplate$Builder;
        add3by3Levels(arg0: number, arg1: number, arg2: $SimpleMember, arg3: $HatchFlags): $ShapeTemplate$Builder;
        add3by3LevelsRoofed(arg0: number, arg1: number, arg2: $SimpleMember, arg3: $HatchFlags): $ShapeTemplate$Builder;
        constructor(arg0: $MachineCasing);
    }
}
