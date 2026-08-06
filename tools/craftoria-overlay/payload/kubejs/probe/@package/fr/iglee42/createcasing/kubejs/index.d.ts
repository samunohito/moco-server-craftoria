import { $CasingSetBuilder, $TransmissionSetBuilder } from "@package/fr/iglee42/createcasing/kubejs/builders";
import { $List } from "@package/java/util";
import { $Object } from "@package/java/lang";
import { $KubeStartupEvent } from "@package/dev/latvian/mods/kubejs/event";
export * as builders from "@package/fr/iglee42/createcasing/kubejs/builders";
export * as wrappers from "@package/fr/iglee42/createcasing/kubejs/wrappers";

declare module "@package/fr/iglee42/createcasing/kubejs" {
    export class $RegisterSetsEvent implements $KubeStartupEvent {
        createTransmission(arg1: string): $TransmissionSetBuilder;
        createCasing(arg1: string): $CasingSetBuilder;
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
        transmissionSets: $List<$TransmissionSetBuilder>;
        casingSets: $List<$CasingSetBuilder>;
        constructor();
    }
}
