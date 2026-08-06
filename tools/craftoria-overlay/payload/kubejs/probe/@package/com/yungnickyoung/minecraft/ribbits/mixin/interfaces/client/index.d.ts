import { $SoundBuffer } from "@package/com/mojang/blaze3d/audio";
import { $SoundInstance } from "@package/net/minecraft/client/resources/sounds";
import { $UUID_ } from "@package/java/util";

declare module "@package/com/yungnickyoung/minecraft/ribbits/mixin/interfaces/client" {
    export class $IChannelDuck {
    }
    export interface $IChannelDuck {
        ribbits$attachStaticBufferWithTickOffset(arg0: $SoundInstance, arg1: $SoundBuffer, arg2: number): void;
        ribbits$attachStaticBufferWithByteOffset(arg0: $SoundInstance, arg1: $SoundBuffer, arg2: number): void;
    }
    export class $ISoundManagerDuck {
    }
    export interface $ISoundManagerDuck {
        ribbits$stopRibbitsMusic(arg0: $UUID_): void;
        ribbits$stopMaraca(arg0: $UUID_): void;
    }
    export class $ISoundEngineDuck {
    }
    export interface $ISoundEngineDuck {
        ribbits$stopRibbitsMusic(arg0: $UUID_): void;
        ribbits$stopMaraca(arg0: $UUID_): void;
    }
}
