import { $IPartTypeWriter, $IPartStateWriter } from "@package/org/cyclops/integrateddynamics/api/part/write";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Event } from "@package/net/neoforged/bus/api";
import { $IVariable, $IValue } from "@package/org/cyclops/integrateddynamics/api/evaluate/variable";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $PartTarget, $IPartType, $IPartState, $PartCapability } from "@package/org/cyclops/integrateddynamics/api/part";
import { $BlockEntityMultipartTicking } from "@package/org/cyclops/integrateddynamics/core/blockentity";
import { $Direction_ } from "@package/net/minecraft/core";
import { $IPartNetwork, $INetwork } from "@package/org/cyclops/integrateddynamics/api/network";
import { $IAspectRead, $IAspectWrite, $IAspect } from "@package/org/cyclops/integrateddynamics/api/part/aspect";
import { $IPartStateReader, $IPartTypeReader } from "@package/org/cyclops/integrateddynamics/api/part/read";
import { $IModBusEvent } from "@package/net/neoforged/fml/event";
import { $BlockEntityType_ } from "@package/net/minecraft/world/level/block/entity";
import { $RegisterCapabilitiesEvent, $BlockCapability } from "@package/net/neoforged/neoforge/capabilities";

declare module "@package/org/cyclops/integrateddynamics/core/part/event" {
    export class $PartEvent<P extends $IPartType<any, any>, S extends $IPartState<P>> extends $Event {
        getTarget(): $PartTarget;
        getNetwork(): $INetwork;
        getPartType(): P;
        getPartNetwork(): $IPartNetwork;
        getPartState(): S;
        constructor(arg0: $INetwork, arg1: $IPartNetwork, arg2: $PartTarget, arg3: P, arg4: S);
        get target(): $PartTarget;
        get network(): $INetwork;
        get partType(): P;
        get partNetwork(): $IPartNetwork;
        get partState(): S;
    }
    export class $PartAspectEvent<P extends $IPartType<P, S>, S extends $IPartState<P>, A extends $IAspect<any, any>> extends $PartEvent<P, S> {
        getAspect(): A;
        getEntityPlayer(): $Player;
        constructor(arg0: $INetwork, arg1: $IPartNetwork, arg2: $PartTarget, arg3: P, arg4: S, arg5: $Player | null, arg6: A);
        get aspect(): A;
        get entityPlayer(): $Player;
    }
    export class $RegisterPartCapabilitiesEvent extends $Event implements $IModBusEvent {
        register<T>(arg0: $BlockCapability<T, $Direction_>, arg1: $PartCapability<T>): void;
        constructor(arg0: $RegisterCapabilitiesEvent, arg1: $BlockEntityType_<$BlockEntityMultipartTicking>);
    }
    export class $PartReaderAspectEvent<P extends $IPartTypeReader<P, S>, S extends $IPartStateReader<P>, A extends $IAspectRead<any, any>> extends $PartAspectEvent<P, S, A> {
        getItemStack(): $ItemStack;
        setItemStack(arg0: $ItemStack_): void;
        constructor(arg0: $INetwork, arg1: $IPartNetwork, arg2: $PartTarget, arg3: P, arg4: S, arg5: $Player | null, arg6: A, arg7: $ItemStack_);
    }
    export class $PartWriterAspectEvent<P extends $IPartTypeWriter<P, S>, S extends $IPartStateWriter<P>, A extends $IAspectWrite<any, any>> extends $PartAspectEvent<P, S, A> {
        getItemStack(): $ItemStack;
        constructor(arg0: $INetwork, arg1: $IPartNetwork, arg2: $PartTarget, arg3: P, arg4: S, arg5: $Player | null, arg6: A, arg7: $ItemStack_);
        get itemStack(): $ItemStack;
    }
    export class $PartVariableDrivenVariableContentsUpdatedEvent<P extends $IPartType<P, S>, S extends $IPartState<P>> extends $PartEvent<P, S> {
        getValue(): $IValue;
        getVariable(): $IVariable<any>;
        getEntityPlayer(): $Player;
        constructor(arg0: $INetwork, arg1: $IPartNetwork, arg2: $PartTarget, arg3: P, arg4: S, arg5: $Player | null, arg6: $IVariable<any>, arg7: $IValue);
        get value(): $IValue;
        get variable(): $IVariable<any>;
        get entityPlayer(): $Player;
    }
}
