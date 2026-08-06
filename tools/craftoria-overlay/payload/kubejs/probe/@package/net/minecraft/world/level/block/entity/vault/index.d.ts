import { $Level_ } from "@package/net/minecraft/world/level";
import { $PlayerDetector$EntitySelector, $PlayerDetector_, $PlayerDetector } from "@package/net/minecraft/world/level/block/entity/trialspawner";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $ParticleOptions_ } from "@package/net/minecraft/core/particles";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $UUID, $Set } from "@package/java/util";
import { $StringRepresentable } from "@package/net/minecraft/util";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $BlockPos_ } from "@package/net/minecraft/core";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $ResourceKey_, $ResourceKey } from "@package/net/minecraft/resources";
import { $Enum, $Record } from "@package/java/lang";
import { $LootTable } from "@package/net/minecraft/world/level/storage/loot";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/net/minecraft/world/level/block/entity/vault" {
    export class $VaultBlockEntity$Server {
        static tryInsertKey(level: $ServerLevel, pos: $BlockPos_, state: $BlockState_, config: $VaultConfig_, serverData: $VaultServerData, sharedData: $VaultSharedData, player: $Player, stack: $ItemStack_): void;
        static tick(level: $ServerLevel, pos: $BlockPos_, state: $BlockState_, config: $VaultConfig_, serverData: $VaultServerData, sharedData: $VaultSharedData): void;
        constructor();
    }
    export class $VaultBlockEntity extends $BlockEntity {
        getSharedData(): $VaultSharedData;
        getClientData(): $VaultClientData;
        getConfig(): $VaultConfig;
        getServerData(): $VaultServerData;
        setConfig(config: $VaultConfig_): void;
        static ATTACHMENTS_NBT_KEY: string;
        constructor(pos: $BlockPos_, state: $BlockState_);
        get sharedData(): $VaultSharedData;
        get clientData(): $VaultClientData;
        get serverData(): $VaultServerData;
    }
    export class $VaultBlockEntity$Client {
        static emitActivationParticles(level: $Level_, pos: $BlockPos_, state: $BlockState_, sharedData: $VaultSharedData, particle: $ParticleOptions_): void;
        static emitDeactivationParticles(level: $Level_, pos: $BlockPos_, particle: $ParticleOptions_): void;
        static tick(level: $Level_, pos: $BlockPos_, state: $BlockState_, clientData: $VaultClientData, sharedData: $VaultSharedData): void;
        static shouldDisplayActiveEffects(sharedData: $VaultSharedData): boolean;
        constructor();
    }
    export class $VaultClientData {
        currentSpin(): number;
        previousSpin(): number;
        static ROTATION_SPEED: number;
    }
    export class $VaultConfig extends $Record {
        lootTable(): $ResourceKey<$LootTable>;
        overrideLootTableToDisplay(): ($ResourceKey<$LootTable>) | undefined;
        entitySelector(): $PlayerDetector$EntitySelector;
        deactivationRange(): number;
        activationRange(): number;
        playerDetector(): $PlayerDetector;
        keyItem(): $ItemStack;
        constructor(arg0: $ResourceKey_<$LootTable>, arg1: number, arg2: number, arg3: $ItemStack_, arg4: ($ResourceKey_<$LootTable>) | undefined, arg5: $PlayerDetector_, arg6: $PlayerDetector$EntitySelector);
        constructor(lootTable: $ResourceKey_<$LootTable>, activationRange: number, arg2: number, deactivationRange: $ItemStack_, arg4: ($ResourceKey_<$LootTable>) | undefined);
    }
    /**
     * Values that may be interpreted as {@link $VaultConfig}.
     */
    export type $VaultConfig_ = { keyItem?: $ItemStack_, playerDetector?: $PlayerDetector_, lootTable?: $ResourceKey_<$LootTable>, entitySelector?: $PlayerDetector$EntitySelector, deactivationRange?: number, overrideLootTableToDisplay?: ($ResourceKey_<$LootTable>) | undefined, activationRange?: number,  } | [keyItem?: $ItemStack_, playerDetector?: $PlayerDetector_, lootTable?: $ResourceKey_<$LootTable>, entitySelector?: $PlayerDetector$EntitySelector, deactivationRange?: number, overrideLootTableToDisplay?: ($ResourceKey_<$LootTable>) | undefined, activationRange?: number, ];
    export class $VaultState$LightLevel extends $Enum<$VaultState$LightLevel> {
    }
    /**
     * Values that may be interpreted as {@link $VaultState$LightLevel}.
     */
    export type $VaultState$LightLevel_ = "half_lit" | "lit";
    export class $VaultServerData {
        addToRewardedPlayers(player: $Player): void;
        ejectionProgress(): number;
        hasRewardedPlayer(player: $Player): boolean;
        markChanged(): void;
        rewardedPlayers: $Set<$UUID>;
    }
    export class $VaultSharedData {
        getDisplayItem(): $ItemStack;
        setDisplayItem(displayItem: $ItemStack_): void;
        hasDisplayItem(): boolean;
    }
    export class $VaultState extends $Enum<$VaultState> implements $StringRepresentable {
        static values(): $VaultState[];
        static valueOf(arg0: string): $VaultState;
        onTransition(level: $ServerLevel, pos: $BlockPos_, state: $VaultState_, config: $VaultConfig_, sharedData: $VaultSharedData, isOminous: boolean): void;
        getSerializedName(): string;
        lightLevel(): number;
        tickAndGetNext(level: $ServerLevel, pos: $BlockPos_, config: $VaultConfig_, serverData: $VaultServerData, sharedData: $VaultSharedData): $VaultState;
        getRemappedEnumConstantName(): string;
        static ACTIVE: $VaultState;
        static INACTIVE: $VaultState;
        static EJECTING: $VaultState;
        static UNLOCKING: $VaultState;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $VaultState}.
     */
    export type $VaultState_ = "inactive" | "active" | "unlocking" | "ejecting";
}
