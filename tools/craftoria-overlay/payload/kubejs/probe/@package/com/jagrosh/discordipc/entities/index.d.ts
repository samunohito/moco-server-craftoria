import { $OffsetDateTime } from "@package/java/time";
import { $JsonObject } from "@package/com/google/gson";

declare module "@package/com/jagrosh/discordipc/entities" {
    export class $RichPresence {
        toJson(): $JsonObject;
        constructor(arg0: string, arg1: string, arg2: $OffsetDateTime, arg3: $OffsetDateTime, arg4: string, arg5: string, arg6: string, arg7: string, arg8: string, arg9: number, arg10: number, arg11: string, arg12: string, arg13: string, arg14: boolean, arg15: string, arg16: string, arg17: string, arg18: string);
    }
}
