package dev.mekanismoverclock;

import mekanism.api.Upgrade;
import mekanism.common.config.MekanismConfig;
import mekanism.common.tile.interfaces.IUpgradeTile;

public final class MekanismScaling {
    private MekanismScaling() {
    }

    public static int upgrades(IUpgradeTile tile, Upgrade upgrade) {
        if (!tile.supportsUpgrades() || !tile.supportsUpgrade(upgrade)) {
            return 0;
        }
        return Math.max(tile.getComponent().getUpgrades(upgrade), 0);
    }

    public static double speedMultiplier(IUpgradeTile tile) {
        return OverclockMath.speedMultiplier(
            upgrades(tile, Upgrade.SPEED),
            mekanismBaseMultiplier(),
            OverclockConfig.baselineUpgrades()
        );
    }

    public static double powerMultiplier(IUpgradeTile tile) {
        return OverclockMath.powerMultiplier(
            upgrades(tile, Upgrade.SPEED),
            upgrades(tile, Upgrade.ENERGY),
            mekanismBaseMultiplier(),
            OverclockConfig.baselineUpgrades(),
            OverclockConfig.overclockThreshold(),
            OverclockConfig.powerPenalty()
        );
    }

    public static double capacityMultiplier(IUpgradeTile tile) {
        return OverclockMath.machineCapacityMultiplier(
            upgrades(tile, Upgrade.SPEED),
            upgrades(tile, Upgrade.ENERGY),
            mekanismBaseMultiplier(),
            OverclockConfig.baselineUpgrades(),
            OverclockConfig.overclockThreshold(),
            OverclockConfig.powerPenalty()
        );
    }

    public static double capacityMultiplier(int energyUpgrades) {
        return OverclockMath.capacityMultiplier(
            energyUpgrades,
            mekanismBaseMultiplier(),
            OverclockConfig.baselineUpgrades()
        );
    }

    public static double chemicalMultiplier(IUpgradeTile tile) {
        boolean supportsChemical = tile.supportsUpgrade(Upgrade.CHEMICAL);
        return OverclockMath.chemicalMultiplier(
            upgrades(tile, Upgrade.SPEED),
            upgrades(tile, Upgrade.CHEMICAL),
            supportsChemical,
            mekanismBaseMultiplier(),
            OverclockConfig.baselineUpgrades()
        );
    }

    private static double mekanismBaseMultiplier() {
        return Math.max(MekanismConfig.general.maxUpgradeMultiplier.get(), 1);
    }
}
