import { $DefaultConstructorMarker } from "@package/kotlin/jvm/internal";
import { $ItemStack, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $Object } from "@package/java/lang";
import { $ByteCodec } from "@package/com/teamresourceful/bytecodecs/base";

declare module "@package/earth/terrarium/tempad/api/context" {
    export class $ContextHolder<T> {
        encode(arg0: $ByteBuf): void;
        getType(): $ContextType<T>;
        copy(arg0: $ContextType<T>, arg1: T): $ContextHolder<T>;
        getData(): T;
        static copy$default(arg0: $ContextHolder<any>, arg1: $ContextType<any>, arg2: $Object, arg3: number, arg4: $Object): $ContextHolder<any>;
        component1(): $ContextType<T>;
        getCtx(arg0: $Player): $SyncableContext<T>;
        component2(): T;
        static access$getCodec$cp(): $ByteCodec<any>;
        static Companion: $ContextHolder$Companion;
        constructor(arg0: $ContextType<T>, arg1: T);
        get type(): $ContextType<T>;
        get data(): T;
    }
    export class $ContextType<T> {
        decode(arg0: $ByteBuf): $ContextHolder<T>;
        getId(): $ResourceLocation;
        copy(arg0: $ResourceLocation_, arg1: $ByteCodec<T>): $ContextType<T>;
        static copy$default(arg0: $ContextType<any>, arg1: $ResourceLocation_, arg2: $ByteCodec<any>, arg3: number, arg4: $Object): $ContextType<any>;
        component1(): $ResourceLocation;
        getCtx(arg0: $Player, arg1: T): $SyncableContext<T>;
        component2(): $ByteCodec<T>;
        getCodec(): $ByteCodec<T>;
        static access$getCodec$cp(): $ByteCodec<any>;
        static Companion: $ContextType$Companion;
        constructor(arg0: $ResourceLocation_, arg1: $ByteCodec<T>);
        get id(): $ResourceLocation;
        get codec(): $ByteCodec<T>;
    }
    export class $ContextHolder$Companion {
        getCodec(): $ByteCodec<$ContextHolder<never>>;
        constructor(arg0: $DefaultConstructorMarker);
        get codec(): $ByteCodec<$ContextHolder<never>>;
    }
    export class $ItemContext {
    }
    export interface $ItemContext {
        getStack(): $ItemStack;
        setStack(arg0: $ItemStack_): void;
        exchange(arg0: $ItemStack_): void;
        addStack(arg0: $ItemStack_): void;
    }
    export class $SyncableContext<T> {
    }
    export interface $SyncableContext<T> extends $ItemContext {
        getType(): $ContextType<T>;
        getData(): T;
        getHolder(): $ContextHolder<T>;
        get type(): $ContextType<T>;
        get data(): T;
        get holder(): $ContextHolder<T>;
    }
    export class $ContextType$Companion {
        getCodec(): $ByteCodec<$ContextType<never>>;
        constructor(arg0: $DefaultConstructorMarker);
        get codec(): $ByteCodec<$ContextType<never>>;
    }
}
