package dev.mekanismoverclock.mixin;

import dev.mekanismoverclock.OverclockConfig;
import mekanism.api.Upgrade;
import org.spongepowered.asm.mixin.Mixin;
import org.spongepowered.asm.mixin.injection.At;
import org.spongepowered.asm.mixin.injection.Inject;
import org.spongepowered.asm.mixin.injection.callback.CallbackInfoReturnable;

@Mixin(value = Upgrade.class, remap = false)
public abstract class UpgradeMixin {
    @Inject(method = "getMax", at = @At("HEAD"), cancellable = true)
    private void mekanismOverclock$getConfiguredMaximum(CallbackInfoReturnable<Integer> callback) {
        Upgrade self = (Upgrade) (Object) this;
        if (self == Upgrade.SPEED) {
            callback.setReturnValue(OverclockConfig.speedLimit());
        } else if (self == Upgrade.ENERGY) {
            callback.setReturnValue(OverclockConfig.energyLimit());
        }
    }
}
