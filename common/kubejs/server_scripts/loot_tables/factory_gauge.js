LootJS.lootTables(event => {
  let tables = [
    'minecraft:chests/bastion_treasure',
    'structory_towers:end_tower',
    'structory_towers:top/fortress_top'
  ]

  tables.forEach(table => {
    event.getLootTable(table)
      .firstPool()
      .addEntry('create:factory_gauge')
  })
})