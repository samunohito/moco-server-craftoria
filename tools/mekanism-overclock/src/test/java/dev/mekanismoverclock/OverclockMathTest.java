package dev.mekanismoverclock;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

class OverclockMathTest {
    private static final double EPSILON = 1.0E-8;

    @Test
    void speedUsesEightUpgradeBaseline() {
        assertEquals(1.0, OverclockMath.speedMultiplier(0, 10.0, 8), EPSILON);
        assertEquals(10.0, OverclockMath.speedMultiplier(8, 10.0, 8), EPSILON);
        assertEquals(100.0, OverclockMath.speedMultiplier(16, 10.0, 8), EPSILON);
    }

    @Test
    void equalSpeedAndEnergyRemainVanillaThroughEight() {
        assertEquals(1.0, OverclockMath.powerMultiplier(0, 0, 10.0, 8, 8, 1.5), EPSILON);
        assertEquals(10.0, OverclockMath.powerMultiplier(8, 8, 10.0, 8, 8, 1.5), EPSILON);
    }

    @Test
    void overclockPenaltyCannotBeMitigatedByEnergyUpgrades() {
        double twelve = OverclockMath.powerMultiplier(12, 12, 10.0, 8, 8, 1.5);
        double sixteen = OverclockMath.powerMultiplier(16, 16, 10.0, 8, 8, 1.5);
        assertEquals(160.090306546024, twelve, EPSILON);
        assertEquals(2562.890625, sixteen, EPSILON);
        assertEquals(Math.pow(1.5, 8), sixteen / 100.0, EPSILON);
    }

    @Test
    void capacityContinuesScalingPastEight() {
        assertEquals(10.0, OverclockMath.capacityMultiplier(8, 10.0, 8), EPSILON);
        assertEquals(100.0, OverclockMath.capacityMultiplier(16, 10.0, 8), EPSILON);
    }

    @Test
    void chemicalUsageTracksOverclockSpeed() {
        assertEquals(100.0, OverclockMath.chemicalMultiplier(16, 0, false, 10.0, 8), EPSILON);
        assertEquals(1_000.0, OverclockMath.chemicalMultiplier(16, 8, true, 10.0, 8), EPSILON);
    }

    @Test
    void multipleOperationsAreCapped() {
        assertEquals(1, OverclockMath.operationsPerTick(2.0, 1, 16));
        assertEquals(10, OverclockMath.operationsPerTick(0.1, 1, 16));
        assertEquals(16, OverclockMath.operationsPerTick(0.01, 1, 16));
        assertEquals(16, OverclockMath.operationsPerTick(0.1, 4, 16));
    }

    @Test
    void longScalingSaturatesInsteadOfOverflowing() {
        assertEquals(2_563L, OverclockMath.scaleLongCeil(1L, 2562.890625));
        assertEquals(Long.MAX_VALUE, OverclockMath.scaleLongCeil(Long.MAX_VALUE, 2.0));
        assertTrue(OverclockMath.scaleLongCeil(1_000L, 10.0) > 0);
    }
}
