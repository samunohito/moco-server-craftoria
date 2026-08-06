ServerEvents.recipes(event => {
  event.remove({ output: 'reliquary:angelheart_vial' });

  event.shaped('reliquary:angelheart_vial', [
    'GMG',
    'GCG',
    'FTF',
  ], {
    C: 'reliquary:infernal_claw',
    F: 'reliquary:fertile_essence',
    G: '#c:glass_panes',
    M: 'minecraft:milk_bucket',
    T: 'minecraft:totem_of_undying',
  }).id('craftoria:balance/angelheart_vial');
});
