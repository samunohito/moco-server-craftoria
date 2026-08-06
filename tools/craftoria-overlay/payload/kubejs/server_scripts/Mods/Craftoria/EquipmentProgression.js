// Keep completed diamond equipment out of low-risk surface loot while preserving
// treasure/vault/equipment chests, boss drops, unique gear, and Apotheosis loot.
LootJS.lootTables(event => {
  const completedDiamondGear = [
    'minecraft:diamond_sword',
    'minecraft:diamond_axe',
    'minecraft:diamond_pickaxe',
    'minecraft:diamond_shovel',
    'minecraft:diamond_helmet',
    'minecraft:diamond_chestplate',
    'minecraft:diamond_leggings',
    'minecraft:diamond_boots',
  ];

  const lowRiskSurfaceLoot = [
    // The campsite is an easily accessible surface structure. It already has
    // iron/gold equipment, raw resources, diamonds, and an Artifact roll.
    'artifacts:chests/campsite_chest',

    // Keep the Illager Windmill treasure chest intact; only its ordinary
    // barrels lose the completed diamond sword.
    'dungeons_arise:chests/illager_windmill/illager_windmill_barrels',

    // Mushroom Village barrels are settlement supplies rather than a dungeon
    // climax, so their ordinary enchanted diamond sword is removed.
    'dungeons_arise:chests/mushroom_village/mushroom_village_barrels',
  ];

  lowRiskSurfaceLoot.forEach(id => {
    event.getLootTable(id).removeItem(completedDiamondGear);
  });
});
