LootJS.lootTables(event => {
  let tables = [
    'minecraft:chests/bastion_other',
    'minecraft:chests/bastion_treasure',
    'minecraft:chests/end_city_treasure',
    'structory_towers:top/fortress_top'
  ]

  tables.forEach(table => {
    event.getLootTable(table)
      .createPool(pool => {
        pool.addEntry(LootEntry.alternative(
          LootEntry.of('create:potato_cannon').when(c => c.randomChance(0.25)),
          LootEntry.of('aeronautics:mounted_potato_cannon').when(c => c.randomChance(0.10))
        ))
      })
  })
})