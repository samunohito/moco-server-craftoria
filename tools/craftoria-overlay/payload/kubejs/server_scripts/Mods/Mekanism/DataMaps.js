ServerEvents.generateData('after_mods', event => {
  event.json('mekanism:data_maps/mekanism/chemical/chemical_attribute_fuel', {
    values: {
      'mekanism:ethene': {
        burn_time: 40,
        energy: 90,
      },
    },
  });
});
