LootJS.lootTables(event => {
  let tables = [
    'minecraft:chests/village/village_cartographer',
    'minecraft:chests/stronghold_library'
  ]

  tables.forEach(table => {
    event.getLootTable(table)
      .firstPool()
      .addEntry('naturescompass:naturescompass')
  })
})