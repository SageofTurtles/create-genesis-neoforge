LootJS.lootTables(event => {
  let tables = [
    'minecraft:chests/nether_bridge',
    'structory_towers:basic/fortress_basic',
    'structory_towers:top/fortress_top'
  ]

  tables.forEach(table => {
    event.getLootTable(table)
      .firstPool()
      .addEntry(LootEntry.of('create:blaze_cake', [1, 3]))
  })
})