const disabledEasyVillagerMachines = [
  'easy_villagers:farmer',
  'easy_villagers:converter',
  'easy_villagers:auto_trader',
];

ServerEvents.recipes(event => {
  disabledEasyVillagerMachines.forEach(item => event.remove({ output: item }));

  event.remove({ id: 'easy_villagers:breeder' });
  event.shaped('easy_villagers:breeder', [
    'GEG',
    'ISI',
    'GEG',
  ], {
    E: 'minecraft:emerald_block',
    G: 'minecraft:golden_apple',
    I: 'easy_villagers:incubator',
    S: '#industrialforegoing:machine_frame/supreme',
  }).id('craftoria:easy_villagers/breeder');

  event.remove({ id: 'easy_villagers:iron_farm' });
  event.shaped('easy_villagers:iron_farm', [
    'IPI',
    'ISI',
    'ILI',
  ], {
    I: 'minecraft:iron_block',
    L: 'minecraft:lava_bucket',
    P: 'minecraft:carved_pumpkin',
    S: '#industrialforegoing:machine_frame/supreme',
  }).id('craftoria:easy_villagers/iron_farm');
});

LootJS.lootTables(event => {
  event.forEachTable(table => {
    const lootType = table.getLootType();
    if (lootType === LootType.CHEST || lootType === LootType.ENTITY) {
      table.removeItem(disabledEasyVillagerMachines);
    }
  });
});
