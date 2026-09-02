LootJS.lootTables(event => {
  let tables = [
    'minecraft:chests/village/village_toolsmith',
    'structory_towers:basic/workshop_basic'
  ]

  tables.forEach(table => {
    event.getLootTable(table)
      .firstPool()
      .addEntry('create:filter')
  })
})