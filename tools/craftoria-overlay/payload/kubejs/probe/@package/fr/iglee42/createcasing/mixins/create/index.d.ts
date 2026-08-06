import { $IItemHandlerModifiable } from "@package/net/neoforged/neoforge/items";

declare module "@package/fr/iglee42/createcasing/mixins/create" {
    export class $DeployerBlockEntityAccessor {
    }
    export interface $DeployerBlockEntityAccessor {
        invokeInitHandler(): void;
        getInvHandler(): $IItemHandlerModifiable;
        get invHandler(): $IItemHandlerModifiable;
    }
}
