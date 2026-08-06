package dev.mekanismoverclock.mixin;

import dev.mekanismoverclock.MekanismScaling;
import mekanism.api.Upgrade;
import mekanism.common.MekanismLang;
import mekanism.common.tile.interfaces.IUpgradeTile;
import mekanism.common.util.UpgradeUtils;
import net.minecraft.network.chat.Component;
import org.spongepowered.asm.mixin.Mixin;
import org.spongepowered.asm.mixin.injection.At;
import org.spongepowered.asm.mixin.injection.Inject;
import org.spongepowered.asm.mixin.injection.callback.CallbackInfoReturnable;

import java.util.List;

@Mixin(value = UpgradeUtils.class, remap = false)
public abstract class UpgradeUtilsMixin {
    @Inject(
        method = "getMultScaledInfo(Lmekanism/common/tile/interfaces/IUpgradeTile;Lmekanism/api/Upgrade;)Ljava/util/List;",
        at = @At("HEAD"),
        cancellable = true
    )
    private static void mekanismOverclock$getScaledUpgradeInfo(
        IUpgradeTile tile,
        Upgrade upgrade,
        CallbackInfoReturnable<List<Component>> callback
    ) {
        if (!tile.supportsUpgrades() || upgrade.getMax() <= 1) {
            return;
        }
        double multiplier;
        if (upgrade == Upgrade.SPEED) {
            multiplier = MekanismScaling.speedMultiplier(tile);
        } else if (upgrade == Upgrade.ENERGY) {
            multiplier = MekanismScaling.capacityMultiplier(tile);
        } else {
            return;
        }
        float rounded = Math.round(multiplier * 100.0) / 100.0F;
        callback.setReturnValue(List.of(MekanismLang.UPGRADES_EFFECT.translate(rounded)));
    }
}
