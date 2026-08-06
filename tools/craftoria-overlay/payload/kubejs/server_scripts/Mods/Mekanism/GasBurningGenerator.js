ServerEvents.recipes(event => {
  event.shaped('mekanismgenerators:gas_burning_generator', ['RAR', 'CPC', 'RAR'], {
    R: '#c:ingots/refined_obsidian',
    A: '#mekanism:alloys/reinforced',
    C: '#c:circuits/elite',
    P: 'mekanism:pressurized_reaction_chamber',
  }).id('mekanismgenerators:generator/gas_burning');
});
