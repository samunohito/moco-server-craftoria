import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";

declare module "@package/net/satisfy/farm_and_charm/core/entity" {
    export class $BowlAccessor$FedTracker {
    }
    export interface $BowlAccessor$FedTracker {
        farmAndCharm$$isFed(): boolean;
        farmAndCharm$$resetFed(): void;
        farmAndCharm$$markAsFed(): void;
    }
    export class $BowlAccessor$StayNearBowl {
    }
    export interface $BowlAccessor$StayNearBowl {
        farmAndCharm$clearStayRestriction(): void;
        farmAndCharm$isWithinStayRange(arg0: $BlockPos_): boolean;
        farmAndCharm$hasStayRestriction(): boolean;
        farmAndCharm$getStayCenter(): $BlockPos;
        farmAndCharm$setStayCenter(arg0: $BlockPos_): void;
    }
    export class $ChickenCoopAccess {
    }
    export interface $ChickenCoopAccess {
        farmAndCharm$setCoopTarget(arg0: $BlockPos_): void;
        farmAndCharm$hasCoopTarget(): boolean;
        farmAndCharm$getCoopTarget(): $BlockPos;
        farmAndCharm$getCoopCooldown(): number;
        farmAndCharm$clearCoopTarget(): void;
        farmAndCharm$searchedForCoop(): boolean;
        farmAndCharm$setSearchedForCoop(arg0: boolean): void;
        farmAndCharm$setCoopCooldown(arg0: number): void;
    }
}
