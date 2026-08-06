package dev.mekanismoverclock.mixin;

import dev.mekanismoverclock.MekanismScaling;
import dev.mekanismoverclock.OverclockConfig;
import dev.mekanismoverclock.OverclockMath;
import mekanism.common.tile.interfaces.IUpgradeTile;
import mekanism.common.util.MekanismUtils;
import org.spongepowered.asm.mixin.Mixin;
import org.spongepowered.asm.mixin.injection.At;
import org.spongepowered.asm.mixin.injection.Inject;
import org.spongepowered.asm.mixin.injection.callback.CallbackInfoReturnable;

@Mixin(value = MekanismUtils.class, remap = false)
public abstract class MekanismUtilsMixin {
    @Inject(
        method = "getTicksD(Lmekanism/common/tile/interfaces/IUpgradeTile;I)D",
        at = @At("HEAD"),
        cancellable = true
    )
    private static void mekanismOverclock$getTicks(
        IUpgradeTile tile,
        int baseTicks,
        CallbackInfoReturnable<Double> callback
    ) {
        if (tile.supportsUpgrades()) {
            callback.setReturnValue(OverclockMath.ticksPerOperation(baseTicks, MekanismScaling.speedMultiplier(tile)));
        }
    }

    @Inject(
        method = "getOperationsPerTick(Lmekanism/common/tile/interfaces/IUpgradeTile;II)I",
        at = @At("HEAD"),
        cancellable = true
    )
    private static void mekanismOverclock$getOperationsPerTick(
        IUpgradeTile tile,
        int baseTicks,
        int baseOperations,
        CallbackInfoReturnable<Integer> callback
    ) {
        if (tile.supportsUpgrades()) {
            double ticks = OverclockMath.ticksPerOperation(baseTicks, MekanismScaling.speedMultiplier(tile));
            callback.setReturnValue(
                OverclockMath.operationsPerTick(ticks, baseOperations, OverclockConfig.maxOperationsPerTick())
            );
        }
    }

    @Inject(
        method = "getEnergyPerTick(Lmekanism/common/tile/interfaces/IUpgradeTile;J)J",
        at = @At("HEAD"),
        cancellable = true
    )
    private static void mekanismOverclock$getEnergyPerTick(
        IUpgradeTile tile,
        long baseEnergy,
        CallbackInfoReturnable<Long> callback
    ) {
        if (tile.supportsUpgrades()) {
            callback.setReturnValue(OverclockMath.scaleLongCeil(baseEnergy, MekanismScaling.powerMultiplier(tile)));
        }
    }

    @Inject(
        method = "getGasPerTickMeanMultiplier(Lmekanism/common/tile/interfaces/IUpgradeTile;)D",
        at = @At("HEAD"),
        cancellable = true
    )
    private static void mekanismOverclock$getChemicalPerTick(
        IUpgradeTile tile,
        CallbackInfoReturnable<Double> callback
    ) {
        if (tile.supportsUpgrades()) {
            callback.setReturnValue(MekanismScaling.chemicalMultiplier(tile));
        }
    }

    @Inject(
        method = "getMaxEnergy(Lmekanism/common/tile/interfaces/IUpgradeTile;J)J",
        at = @At("HEAD"),
        cancellable = true
    )
    private static void mekanismOverclock$getMachineCapacity(
        IUpgradeTile tile,
        long baseCapacity,
        CallbackInfoReturnable<Long> callback
    ) {
        if (tile.supportsUpgrades()) {
            callback.setReturnValue(OverclockMath.scaleLongCeil(baseCapacity, MekanismScaling.capacityMultiplier(tile)));
        }
    }

    @Inject(method = "getMaxEnergy(IJ)J", at = @At("HEAD"), cancellable = true)
    private static void mekanismOverclock$getCapacity(
        int energyUpgrades,
        long baseCapacity,
        CallbackInfoReturnable<Long> callback
    ) {
        callback.setReturnValue(
            OverclockMath.scaleLongCeil(baseCapacity, MekanismScaling.capacityMultiplier(energyUpgrades))
        );
    }
}
