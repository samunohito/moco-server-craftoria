package dev.mekanismoverclock;

public final class OverclockMath {
    private OverclockMath() {
    }

    public static double speedMultiplier(int speedUpgrades, double baseMultiplier, int baselineUpgrades) {
        return exponentialMultiplier(baseMultiplier, nonNegative(speedUpgrades) / positive(baselineUpgrades));
    }

    public static double powerMultiplier(
        int speedUpgrades,
        int energyUpgrades,
        double baseMultiplier,
        int baselineUpgrades,
        int overclockThreshold,
        double penaltyPerUpgrade
    ) {
        int speed = nonNegative(speedUpgrades);
        int energy = nonNegative(energyUpgrades);
        double mekanismScaling = exponentialMultiplier(
            baseMultiplier,
            (2.0 * speed - energy) / positive(baselineUpgrades)
        );
        return saturatingMultiply(
            mekanismScaling,
            overclockPenaltyMultiplier(speed, overclockThreshold, penaltyPerUpgrade)
        );
    }

    public static double capacityMultiplier(int energyUpgrades, double baseMultiplier, int baselineUpgrades) {
        return exponentialMultiplier(baseMultiplier, nonNegative(energyUpgrades) / positive(baselineUpgrades));
    }

    public static double machineCapacityMultiplier(
        int speedUpgrades,
        int energyUpgrades,
        double baseMultiplier,
        int baselineUpgrades,
        int overclockThreshold,
        double penaltyPerUpgrade
    ) {
        return saturatingMultiply(
            capacityMultiplier(energyUpgrades, baseMultiplier, baselineUpgrades),
            overclockPenaltyMultiplier(speedUpgrades, overclockThreshold, penaltyPerUpgrade)
        );
    }

    public static double chemicalMultiplier(
        int speedUpgrades,
        int chemicalUpgrades,
        boolean supportsChemicalUpgrades,
        double baseMultiplier,
        int baselineUpgrades
    ) {
        int speed = nonNegative(speedUpgrades);
        if (!supportsChemicalUpgrades) {
            return exponentialMultiplier(baseMultiplier, speed / positive(baselineUpgrades));
        }
        int chemical = nonNegative(chemicalUpgrades);
        return exponentialMultiplier(baseMultiplier, (2.0 * speed - chemical) / positive(baselineUpgrades));
    }

    public static double ticksPerOperation(int baseTicks, double speedMultiplier) {
        if (baseTicks <= 0) {
            return 0.0;
        }
        return baseTicks / Math.max(speedMultiplier, Double.MIN_NORMAL);
    }

    public static int operationsPerTick(double ticksPerOperation, int baseOperations, int maximumOperations) {
        int baseline = Math.max(baseOperations, 0);
        int cap = Math.max(maximumOperations, 1);
        if (ticksPerOperation >= 1.0 || ticksPerOperation <= 0.0 || !Double.isFinite(ticksPerOperation)) {
            return Math.min(baseline, cap);
        }
        double result = Math.max(1.0, 1.0 / ticksPerOperation) * baseline;
        if (result >= cap) {
            return cap;
        }
        return Math.max(0, (int) result);
    }

    public static long scaleLongCeil(long baseValue, double multiplier) {
        if (baseValue <= 0) {
            return Math.max(baseValue, 0L);
        }
        double scaled = baseValue * multiplier;
        if (!Double.isFinite(scaled) || scaled >= Long.MAX_VALUE) {
            return Long.MAX_VALUE;
        }
        return Math.max(1L, (long) Math.ceil(scaled));
    }

    private static double exponentialMultiplier(double base, double exponent) {
        double result = Math.pow(Math.max(base, 1.0), exponent);
        return Double.isFinite(result) ? result : Double.MAX_VALUE;
    }

    private static double saturatingMultiply(double left, double right) {
        double result = left * right;
        return Double.isFinite(result) ? result : Double.MAX_VALUE;
    }

    private static double overclockPenaltyMultiplier(
        int speedUpgrades,
        int overclockThreshold,
        double penaltyPerUpgrade
    ) {
        int excessSpeed = Math.max(nonNegative(speedUpgrades) - nonNegative(overclockThreshold), 0);
        return exponentialMultiplier(Math.max(penaltyPerUpgrade, 1.0), excessSpeed);
    }

    private static int nonNegative(int value) {
        return Math.max(value, 0);
    }

    private static double positive(int value) {
        return Math.max(value, 1);
    }
}
