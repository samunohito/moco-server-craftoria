import { $SpriteShiftEntry } from "@package/net/createmod/catnip/render";
import { $Supplier_ } from "@package/java/util/function";
import { $CTSpriteShiftEntry } from "@package/com/simibubi/create/foundation/block/connected";
import { $Item } from "@package/net/minecraft/world/item";
import { $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $PartialModel } from "@package/dev/engine_room/flywheel/lib/model/baked";
import { $SourceLine } from "@package/dev/latvian/mods/kubejs/script";

declare module "@package/fr/iglee42/createcasing/kubejs/builders" {
    export class $TransmissionSetBuilder {
        item(arg0: $Supplier_<$Item>): $TransmissionSetBuilder;
        cogwheel(): $TransmissionSetBuilder;
        shaft(): $TransmissionSetBuilder;
        notEncasable(): $TransmissionSetBuilder;
        largeCogwheel(): $TransmissionSetBuilder;
        everything(arg0: $Supplier_<$Item>): $TransmissionSetBuilder;
        sourceLine: $SourceLine;
        constructor(arg0: string);
    }
    export class $CasingSetBuilder {
        mixer(arg0: $ResourceLocation_): $CasingSetBuilder;
        roller(arg0: $ResourceLocation_): $CasingSetBuilder;
        deployer(): $CasingSetBuilder;
        clutch(): $CasingSetBuilder;
        gearbox(): $CasingSetBuilder;
        belt(arg0: $Supplier_<$SpriteShiftEntry>, arg1: $ResourceLocation_, arg2: $ResourceLocation_): $CasingSetBuilder;
        gearshift(): $CasingSetBuilder;
        saw(): $CasingSetBuilder;
        drill(arg0: $ResourceLocation_): $CasingSetBuilder;
        harvester(): $CasingSetBuilder;
        cogwheel(arg0: $Supplier_<$CTSpriteShiftEntry> | null, arg1: $Supplier_<$CTSpriteShiftEntry> | null): $CasingSetBuilder;
        press(): $CasingSetBuilder;
        fluids(): $CasingSetBuilder;
        shaft(): $CasingSetBuilder;
        encasedCustomTransmissionBlocks(): $CasingSetBuilder;
        casing(): $CasingSetBuilder;
        slicer(): $CasingSetBuilder;
        chainDrive(): $CasingSetBuilder;
        processingBlocks(arg0: $ResourceLocation_): $CasingSetBuilder;
        contraptionBlocks(arg0: $ResourceLocation_, arg1: $ResourceLocation_): $CasingSetBuilder;
        existingCasing(arg0: $ResourceLocation_): $CasingSetBuilder;
        encasedWoodenShaft(): $CasingSetBuilder;
        chainGearshift(): $CasingSetBuilder;
        encasedWoodenLargeCogwheel(): $CasingSetBuilder;
        encasedWoodenCogwheel(): $CasingSetBuilder;
        everythingExceptCasing(arg0: $Supplier_<$CTSpriteShiftEntry>, arg1: $Supplier_<$SpriteShiftEntry>, arg2: $ResourceLocation_, arg3: $ResourceLocation_, arg4: $Supplier_<$CTSpriteShiftEntry> | null, arg5: $Supplier_<$CTSpriteShiftEntry> | null, arg6: $Supplier_<$PartialModel>, arg7: $Supplier_<$PartialModel>, arg8: $Supplier_<$PartialModel>, arg9: $ResourceLocation_, arg10: $ResourceLocation_, arg11: $ResourceLocation_): $CasingSetBuilder;
        complexTransmissionBlocks(arg0: $Supplier_<$PartialModel>, arg1: $Supplier_<$PartialModel>, arg2: $Supplier_<$PartialModel>): $CasingSetBuilder;
        portableStorageInterface(): $CasingSetBuilder;
        simpleTransmissions(arg0: $Supplier_<$CTSpriteShiftEntry> | null, arg1: $Supplier_<$CTSpriteShiftEntry> | null): $CasingSetBuilder;
        chainConveyor(arg0: $Supplier_<$PartialModel>, arg1: $Supplier_<$PartialModel>, arg2: $Supplier_<$PartialModel>): $CasingSetBuilder;
        largeCogwheel(): $CasingSetBuilder;
        everything(arg0: $Supplier_<$CTSpriteShiftEntry>, arg1: $Supplier_<$SpriteShiftEntry>, arg2: $ResourceLocation_, arg3: $ResourceLocation_, arg4: $Supplier_<$CTSpriteShiftEntry> | null, arg5: $Supplier_<$CTSpriteShiftEntry> | null, arg6: $Supplier_<$PartialModel>, arg7: $Supplier_<$PartialModel>, arg8: $Supplier_<$PartialModel>, arg9: $ResourceLocation_, arg10: $ResourceLocation_, arg11: $ResourceLocation_): $CasingSetBuilder;
        ctSprite(arg0: $Supplier_<$CTSpriteShiftEntry>): $CasingSetBuilder;
        autoClutch(): $CasingSetBuilder;
        fluidPipe(): $CasingSetBuilder;
        encasedFan(): $CasingSetBuilder;
        plough(): $CasingSetBuilder;
        depot(): $CasingSetBuilder;
        configurableGearbox(): $CasingSetBuilder;
        sourceLine: $SourceLine;
        constructor(arg0: string);
    }
}
