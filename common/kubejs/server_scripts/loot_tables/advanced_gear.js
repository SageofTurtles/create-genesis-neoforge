LootJS.lootTables(event => {
  let tables = [
    'minecraft:chests/end_city_treasure'
  ]

  tables.forEach(table => {
    event.getLootTable(table)
      .createPool(pool => {
        pool.addEntry(LootEntry.alternative(
          LootEntry.of('create_jetpack:jetpack').when(c => c.randomChance(0.25)),
          LootEntry.of('create:extendo_grip').when(c => c.randomChance(0.20)),
          LootEntry.of('create:wand_of_symmetry').when(c => c.randomChance(0.15))
        ))
      })
  })
})