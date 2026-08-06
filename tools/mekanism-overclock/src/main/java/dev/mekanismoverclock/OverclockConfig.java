package dev.mekanismoverclock;

import net.neoforged.fml.event.config.ModConfigEvent;
import net.neoforged.neoforge.common.ModConfigSpec;

public final class OverclockConfig {
    private static final int DEFAULT_SPEED_LIMIT = 16;
    private static final int DEFAULT_ENERGY_LIMIT = 16;
    private static final int DEFAULT_BASELINE = 8;
    private static final int DEFAULT_THRESHOLD = 8;
    private static final double DEFAULT_POWER_PENALTY = 1.5;
    private static final int DEFAULT_MAX_OPERATIONS = 16;

    private static final ModConfigSpec.IntValue SPEED_LIMIT;
    private static final ModConfigSpec.IntValue ENERGY_LIMIT;
    private static final ModConfigSpec.IntValue BASELINE_UPGRADES;
    private static final ModConfigSpec.IntValue OVERCLOCK_THRESHOLD;
    private static final ModConfigSpec.DoubleValue POWER_PENALTY;
    private static final ModConfigSpec.IntValue MAX_OPERATIONS;

    public static final ModConfigSpec SPEC;

    private static volatile int speedLimit = DEFAULT_SPEED_LIMIT;
    private static volatile int energyLimit = DEFAULT_ENERGY_LIMIT;
    private static volatile int baselineUpgrades = DEFAULT_BASELINE;
    private static volatile int overclockThreshold = DEFAULT_THRESHOLD;
    private static volatile double powerPenalty = DEFAULT_POWER_PENALTY;
    private static volatile int maxOperationsPerTick = DEFAULT_MAX_OPERATIONS;

    static {
        ModConfigSpec.Builder builder = new ModConfigSpec.Builder();

        builder.push("upgrades");
        SPEED_LIMIT = builder
            .comment("Maximum Speed Upgrades accepted by a supporting Mekanism machine.")
            .defineInRange("speedLimit", DEFAULT_SPEED_LIMIT, 8, 64);
        ENERGY_LIMIT = builder
            .comment("Maximum Energy Upgrades accepted by a supporting Mekanism machine.")
            .defineInRange("energyLimit", DEFAULT_ENERGY_LIMIT, 8, 64);
        BASELINE_UPGRADES = builder
            .comment("Upgrade count that produces Mekanism's configured maxUpgradeMultiplier.")
            .defineInRange("baselineUpgrades", DEFAULT_BASELINE, 1, 64);
        builder.pop();

        builder.push("overclock");
        OVERCLOCK_THRESHOLD = builder
            .comment("Speed Upgrade count after which the unmitigable power penalty begins.")
            .defineInRange("threshold", DEFAULT_THRESHOLD, 0, 64);
        POWER_PENALTY = builder
            .comment("Power multiplier applied once for every Speed Upgrade above threshold.")
            .defineInRange("powerPenaltyPerUpgrade", DEFAULT_POWER_PENALTY, 1.0, 100.0);
        MAX_OPERATIONS = builder
            .comment("Global cap for Mekanism's standard multi-operation-per-tick machines.")
            .defineInRange("maxOperationsPerTick", DEFAULT_MAX_OPERATIONS, 1, 1024);
        builder.pop();

        SPEC = builder.build();
    }

    private OverclockConfig() {
    }

    static void onConfigLoad(ModConfigEvent.Loading event) {
        if (event.getConfig().getSpec() == SPEC) {
            bake();
        }
    }

    static void onConfigReload(ModConfigEvent.Reloading event) {
        if (event.getConfig().getSpec() == SPEC) {
            bake();
        }
    }

    private static void bake() {
        speedLimit = SPEED_LIMIT.getAsInt();
        energyLimit = ENERGY_LIMIT.getAsInt();
        baselineUpgrades = BASELINE_UPGRADES.getAsInt();
        overclockThreshold = OVERCLOCK_THRESHOLD.getAsInt();
        powerPenalty = POWER_PENALTY.getAsDouble();
        maxOperationsPerTick = MAX_OPERATIONS.getAsInt();
        MekanismOverclock.LOGGER.info(
            "Loaded overclock settings: speedLimit={}, energyLimit={}, baseline={}, threshold={}, penalty={}, maxOps={}",
            speedLimit, energyLimit, baselineUpgrades, overclockThreshold, powerPenalty, maxOperationsPerTick
        );
    }

    public static int speedLimit() {
        return speedLimit;
    }

    public static int energyLimit() {
        return energyLimit;
    }

    public static int baselineUpgrades() {
        return baselineUpgrades;
    }

    public static int overclockThreshold() {
        return overclockThreshold;
    }

    public static double powerPenalty() {
        return powerPenalty;
    }

    public static int maxOperationsPerTick() {
        return maxOperationsPerTick;
    }
}
