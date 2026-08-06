const disabledQuarryCards = [
  'rftoolsbuilder:shape_card_quarry',
  'rftoolsbuilder:shape_card_quarry_silk',
  'rftoolsbuilder:shape_card_quarry_fortune',
  'rftoolsbuilder:shape_card_quarry_clear',
  'rftoolsbuilder:shape_card_quarry_clear_silk',
  'rftoolsbuilder:shape_card_quarry_clear_fortune',
];

const disabledBrokenDevices = [
  ...disabledQuarryCards,
  'mob_grinding_utils:entity_spawner',
];

ServerEvents.recipes(event => {
  disabledBrokenDevices.forEach(item => event.remove({ output: item }));

  event.replaceInput(
    { id: 'mekanism:digital_miner' },
    '#c:circuits/basic',
    '#c:circuits/elite'
  );

  event.remove({ id: 'industrialforegoing:mob_duplicator' });
  event.shaped('industrialforegoing:mob_duplicator', [
    'PWP',
    'CMC',
    'ERE',
  ], {
    C: 'minecraft:magma_cream',
    E: 'minecraft:emerald',
    M: '#industrialforegoing:machine_frame/supreme',
    P: '#c:plastics',
    R: 'minecraft:redstone',
    W: 'minecraft:nether_wart',
  }).id('craftoria:industrialforegoing/mob_duplicator');
});

LootJS.lootTables(event => {
  event.forEachTable(table => {
    const lootType = table.getLootType();
    if (lootType === LootType.CHEST || lootType === LootType.ENTITY) {
      table.removeItem(disabledBrokenDevices);
    }
  });
});
