ItemEvents.modification(event => {
  event.modify('reliquary:angelheart_vial', item => {
    item.maxStackSize = 1;
  });
});
