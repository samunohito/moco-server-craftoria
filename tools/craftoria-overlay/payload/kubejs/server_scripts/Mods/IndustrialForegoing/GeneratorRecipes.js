ServerEvents.recipes(event => {
  event
    .custom({
      type: 'industrialforegoing:dissolution_chamber',
      input: [
        { item: 'mekanism:pellet_antimatter' },
        { item: 'powah:reactor_nitro' },
        { item: 'mekanism:pellet_antimatter' },
        { item: 'mekanism:ultimate_control_circuit' },
        { item: 'mekanism:ultimate_control_circuit' },
        { item: 'powah:reactor_nitro' },
        { item: 'minecraft:nether_star' },
        { tag: 'industrialforegoing:machine_frame/supreme' },
      ],
      inputFluid: {
        amount: 2000,
        fluid: 'industrialforegoing:ether_gas',
      },
      output: {
        count: 1,
        id: 'industrialforegoing:mycelial_reactor',
      },
      processingTime: 1200,
    })
    .id('industrialforegoing:dissolution_chamber/mycelial_reactor');
});
