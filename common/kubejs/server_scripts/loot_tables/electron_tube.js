LootJS.lootTables(event => {
  let tables = [
    'minecraft:chests/bastion_treasure',
    'minecraft:chests/end_city_treasure',
    'structory_towers:top/fortress_top'
  ]

  tables.forEach(table => {
    event.getLootTable(table)
      .firstPool()
      .addEntry(LootEntry.of('create:electron_tube', [2, 4]))
  })
})