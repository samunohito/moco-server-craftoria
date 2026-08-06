import { $CommandSourceStack, $CommandBuildContext } from "@package/net/minecraft/commands";
import { $Event } from "@package/net/neoforged/bus/api";
import { $LiteralArgumentBuilder } from "@package/com/mojang/brigadier/builder";

declare module "@package/dev/shadowsoffire/apothic_attributes/event" {
    export class $ApotheosisCommandEvent extends $Event {
        getContext(): $CommandBuildContext;
        getRoot(): $LiteralArgumentBuilder<$CommandSourceStack>;
        constructor(arg0: $LiteralArgumentBuilder<$CommandSourceStack>, arg1: $CommandBuildContext);
        get context(): $CommandBuildContext;
        get root(): $LiteralArgumentBuilder<$CommandSourceStack>;
    }
}
