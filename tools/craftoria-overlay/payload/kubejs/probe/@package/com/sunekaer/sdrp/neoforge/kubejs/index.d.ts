import { $Level_, $Level } from "@package/net/minecraft/world/level";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $RichPresence } from "@package/com/jagrosh/discordipc/entities";
import { $Object } from "@package/java/lang";
import { $DimensionType, $DimensionType_ } from "@package/net/minecraft/world/level/dimension";
import { $KubeEvent } from "@package/dev/latvian/mods/kubejs/event";

declare module "@package/com/sunekaer/sdrp/neoforge/kubejs" {
    export class $SDRPKubeJSIntegration$ClientDimensionChangeEvent implements $KubeEvent {
        updateSDRPState(message: string, imageName: string, imageKey: string): void;
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
        dimensionType: $DimensionType;
        level: $Level;
        player: $Player;
        constructor(dimensionType: $DimensionType_, player: $Player, level: $Level_);
    }
    export class $SDRPKubeJSWrapper {
        static setState(message: string, imageName: string, imageKey: string): void;
        static getCurrentState(): $RichPresence;
        constructor();
        static get currentState(): $RichPresence;
    }
}
