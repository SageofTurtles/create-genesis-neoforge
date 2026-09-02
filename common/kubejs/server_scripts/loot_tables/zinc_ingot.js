LootJS.lootTables(event => {
  let tables = [
    'minecraft:chests/village/village_toolsmith',
    'structory:outcast/generic/miner',
    'terralith:underground/chest'
  ]

  tables.forEach(table => {
    event.getLootTable(table)
      .firstPool()
      .addEntry(LootEntry.of('create:zinc_ingot', [2, 4]))
  })
})