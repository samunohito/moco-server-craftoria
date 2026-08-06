import { $KineticBlockEntity } from "@package/com/simibubi/create/content/kinetics/base";
import { $Map } from "@package/java/util";
export * as base from "@package/com/simibubi/create/content/kinetics/base";
export * as fan from "@package/com/simibubi/create/content/kinetics/fan";
export * as transmission from "@package/com/simibubi/create/content/kinetics/transmission";
export * as belt from "@package/com/simibubi/create/content/kinetics/belt";
export * as mechanicalArm from "@package/com/simibubi/create/content/kinetics/mechanicalArm";
export * as deployer from "@package/com/simibubi/create/content/kinetics/deployer";

declare module "@package/com/simibubi/create/content/kinetics" {
    export class $KineticNetwork {
        getSize(): number;
        remove(arg0: $KineticBlockEntity): void;
        add(arg0: $KineticBlockEntity): void;
        sync(): void;
        updateCapacityFor(arg0: $KineticBlockEntity, arg1: number): void;
        updateStressFor(arg0: $KineticBlockEntity, arg1: number): void;
        updateStress(): void;
        updateCapacity(): void;
        initFromTE(arg0: number, arg1: number, arg2: number): void;
        addSilently(arg0: $KineticBlockEntity, arg1: number, arg2: number): void;
        updateNetwork(): void;
        calculateCapacity(): number;
        getActualCapacityOf(arg0: $KineticBlockEntity): number;
        calculateStress(): number;
        getActualStressOf(arg0: $KineticBlockEntity): number;
        sources: $Map<$KineticBlockEntity, number>;
        members: $Map<$KineticBlockEntity, number>;
        initialized: boolean;
        id: number;
        constructor();
        get size(): number;
    }
}
