const disabledWindGenerator = 'mekanismgenerators:wind_generator';

ServerEvents.recipes(event => {
  event.remove({ output: disabledWindGenerator });
});

LootJS.lootTables(event => {
  event.forEachTable(table => {
    const lootType = table.getLootType();
    if (lootType === LootType.CHEST || lootType === LootType.ENTITY) {
      table.removeItem(disabledWindGenerator);
    }
  });
});
