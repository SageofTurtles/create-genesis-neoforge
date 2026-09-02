LootJS.lootTables(event => {
  let tables = [
    'minecraft:chests/bastion_other',
    'minecraft:chests/bastion_treasure',
    'minecraft:chests/end_city_treasure'
  ]

  tables.forEach(table => {
    event.getLootTable(table)
      .firstPool()
      .addEntry(LootEntry.of('create:powdered_obsidian', [2, 6]))
  })
})