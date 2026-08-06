import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $Object } from "@package/java/lang";
import { $KubeEvent } from "@package/dev/latvian/mods/kubejs/event";

declare module "@package/dev/bluephs/dgjs/fuel" {
    export class $FuelTypeEventJS$FuelTypeBuilder {
        getId(): $ResourceLocation;
        normal(arg0: number, arg1: number, arg2: number): $FuelTypeEventJS$FuelTypeBuilder;
        huge(arg0: number, arg1: number, arg2: number): $FuelTypeEventJS$FuelTypeBuilder;
        modular(arg0: number, arg1: number, arg2: number): $FuelTypeEventJS$FuelTypeBuilder;
        burnerStrength(arg0: number): $FuelTypeEventJS$FuelTypeBuilder;
        soundPitch(arg0: number): $FuelTypeEventJS$FuelTypeBuilder;
        burnerMultiplier(arg0: number): $FuelTypeEventJS$FuelTypeBuilder;
        get id(): $ResourceLocation;
    }
    export class $FuelTypeEventJS implements $KubeEvent {
        add(arg0: string, arg1: string): $FuelTypeEventJS$FuelTypeBuilder;
        writeFiles(): void;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        constructor();
    }
}
