import { $Anchor } from "@package/com/leobeliik/extremesoundmuffler/utils";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $Map, $Set, $List } from "@package/java/util";

declare module "@package/com/leobeliik/extremesoundmuffler/interfaces" {
    export class $ISoundLists {
        static muffledSounds: $Map<$ResourceLocation, number>;
        static forbiddenCache: $Map<$ResourceLocation, boolean>;
        static modsMuffled: $Set<string>;
        static soundsList: $List<$ResourceLocation>;
        static forbiddenSounds: $Set<string>;
        static recentSoundsList: $List<$ResourceLocation>;
        static anchorList: $List<$Anchor>;
    }
    export interface $ISoundLists {
    }
}
