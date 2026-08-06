package dev.mekanismoverclock;

import com.mojang.logging.LogUtils;
import net.neoforged.bus.api.IEventBus;
import net.neoforged.fml.ModContainer;
import net.neoforged.fml.common.Mod;
import net.neoforged.fml.config.ModConfig;
import org.slf4j.Logger;

@Mod(MekanismOverclock.MOD_ID)
public final class MekanismOverclock {
    public static final String MOD_ID = "mekanism_overclock";
    public static final Logger LOGGER = LogUtils.getLogger();

    public MekanismOverclock(IEventBus modEventBus, ModContainer modContainer) {
        // STARTUP configs are opened synchronously by registerConfig, so the listener must
        // already exist when registration dispatches ModConfigEvent.Loading.
        modEventBus.addListener(OverclockConfig::onConfigLoad);
        modEventBus.addListener(OverclockConfig::onConfigReload);
        modContainer.registerConfig(ModConfig.Type.STARTUP, OverclockConfig.SPEC);
    }
}
