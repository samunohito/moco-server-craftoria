import { $Container } from "@package/net/minecraft/world";
import { $ContainerData } from "@package/net/minecraft/world/inventory";
export * as client from "@package/io/github/mortuusars/exposure/mixin/client";

declare module "@package/io/github/mortuusars/exposure/mixin" {
    export class $LecternBlockEntityAccessor {
    }
    export interface $LecternBlockEntityAccessor {
        getDataAccess(): $ContainerData;
        getBookAccess(): $Container;
        get dataAccess(): $ContainerData;
        get bookAccess(): $Container;
    }
}
