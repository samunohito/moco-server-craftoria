import { $SoundSource, $SoundSource_ } from "@package/net/minecraft/sounds";
import { $PlayableResource } from "@package/de/keksuccino/fancymenu/util/resource";

declare module "@package/de/keksuccino/fancymenu/util/resource/resources/audio" {
    export class $PlayableResourceWithAudio {
    }
    export interface $PlayableResourceWithAudio extends $PlayableResource {
        setVolume(arg0: number): void;
        getVolume(): number;
    }
    export class $IAudio {
    }
    export interface $IAudio extends $PlayableResourceWithAudio {
        getDuration(): number;
        play(): void;
        setPlayTime(arg0: number): void;
        getPlayTime(): number;
        setSoundChannel(arg0: $SoundSource_): void;
        getSoundChannel(): $SoundSource;
        get duration(): number;
    }
}
