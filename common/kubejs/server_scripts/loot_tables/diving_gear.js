LootJS.lootTables(event => {
  let tables = [
    'minecraft:chests/shipwreck_supply',
    'minecraft:chests/shipwreck_treasure',
    'minecraft:chests/underwater_ruin_big'
  ]

  tables.forEach(table => {
    event.getLootTable(table)
      .createPool(pool => {
        pool.addEntry(LootEntry.alternative(
          LootEntry.of('create:copper_backtank').when(c => c.randomChance(0.25)),
          LootEntry.of('create:copper_diving_boots').when(c => c.randomChance(0.25)),
          LootEntry.of('create:copper_diving_helmet').when(c => c.randomChance(0.25))
        ))
      })
  })
})