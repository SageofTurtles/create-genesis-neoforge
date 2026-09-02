LootJS.lootTables(event => {
  let tables = [
    'minecraft:chests/bastion_hoglin_stable',
    'structory_towers:basic/fortress_basic'
  ]

  tables.forEach(table => {
    event.getLootTable(table)
      .firstPool()
      .addEntry(LootEntry.of('createaddition:biomass_pellet', [3, 8]))
  })
})