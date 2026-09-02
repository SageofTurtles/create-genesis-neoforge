LootJS.lootTables(event => {
  let tables = [
    'minecraft:chests/bastion_other',
    'minecraft:chests/bastion_treasure',
    'structory_towers:basic/fortress_basic'
  ]

  tables.forEach(table => {
    event.getLootTable(table)
      .firstPool()
      .addEntry(LootEntry.of('create:brass_ingot', [2, 4]))
  })
})