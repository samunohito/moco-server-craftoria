import { $ILongEnergyStorage } from "@package/dev/technici4n/grandpower/api";
import { $MutableComponent } from "@package/net/minecraft/network/chat";
import { $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $List } from "@package/java/util";
import { $Comparable } from "@package/java/lang";
import { $MachineCasing } from "@package/aztech/modern_industrialization/machines/models";

declare module "@package/aztech/modern_industrialization/api/energy" {
    export class $CableTier implements $Comparable<$CableTier> {
        compareTo(arg0: $CableTier): number;
        shortEnglishName(): $MutableComponent;
        static getTier(arg0: string): $CableTier;
        getMaxTransfer(): number;
        static allTiers(): $List<$CableTier>;
        static addTier(arg0: $CableTier): void;
        getEu(): number;
        shortEnglishKey(): string;
        longEnglishName(): $MutableComponent;
        longEnglishKey(): string;
        eu: number;
        static EV: $CableTier;
        casing: $MachineCasing;
        static SUPERCONDUCTOR: $CableTier;
        builtin: boolean;
        name: string;
        static MV: $CableTier;
        static LV: $CableTier;
        static HV: $CableTier;
        itemKey: $ResourceLocation;
        constructor(arg0: string, arg1: string, arg2: string, arg3: number, arg4: $ResourceLocation_, arg5: boolean);
        get maxTransfer(): number;
    }
    export class $MIEnergyStorage {
    }
    export interface $MIEnergyStorage extends $ILongEnergyStorage {
        canConnect(arg0: $CableTier): boolean;
        canConnect(arg0: string): boolean;
    }
}
