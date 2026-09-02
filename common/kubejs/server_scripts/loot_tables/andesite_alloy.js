LootJS.lootTables(event => {
  let tables = [
    'minecraft:chests/village/village_mason',
    'minecraft:chests/village/village_toolsmith',
    'structory:outcast/generic/miner'
  ]

  tables.forEach(table => {
    event.getLootTable(table)
      .firstPool()
      .addEntry(LootEntry.of('create:andesite_alloy', [2, 6]))
  })
})