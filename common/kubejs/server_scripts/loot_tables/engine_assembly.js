LootJS.lootTables(event => {
  let tables = [
    'structory_towers:basic/workshop_basic',
    'structory:outcast/generic/miner'
  ]

  tables.forEach(table => {
    event.getLootTable(table)
      .firstPool()
      .addEntry('simulated:engine_assembly')
  })
})