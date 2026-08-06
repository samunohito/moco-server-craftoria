import { $Style } from "@package/net/minecraft/network/chat";
import { $AbstractSpell } from "@package/io/redspace/ironsspellbooks/api/spells";

declare module "@package/io/redspace/ironsspellbooks/spells" {
    export class $NoneSpell extends $AbstractSpell {
        static ELDRITCH_OBFUSCATED_STYLE: $Style;
        constructor();
    }
}
