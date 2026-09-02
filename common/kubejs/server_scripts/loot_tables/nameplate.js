LootJS.lootTables(event => {
  let tables = [
    'minecraft:chests/village/village_cartographer',
    'minecraft:chests/village/village_shepherd',
    'structory:library/low',
  ]

  tables.forEach(table => {
    event.getLootTable(table)
      .firstPool()
      .addEntry(LootEntry.of('simulated:white_nameplate', [1, 2]))
  })
})