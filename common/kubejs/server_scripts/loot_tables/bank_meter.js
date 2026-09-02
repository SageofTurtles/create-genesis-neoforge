LootJS.lootTables(event => {
  let tables = [
    'minecraft:chests/bastion_treasure',
    'minecraft:chests/end_city_treasure'
  ]

  tables.forEach(table => {
    event.getLootTable(table)
      .firstPool()
      .addEntry('numismaticsutils:bank_meter')
  })
})