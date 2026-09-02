LootJS.lootTables(event => {
  let tables = [
    'minecraft:chests/stronghold_library',
    'minecraft:chests/village/village_cartographer',
    'structory_towers:basic/workshop_basic'
  ]

  tables.forEach(table => {
    event.getLootTable(table)
      .createPool(pool => {
        pool.addEntry(LootEntry.alternative(
          LootEntry.of('create:empty_schematic').when(c => c.randomChance(0.4)),
          LootEntry.of('create_pattern_schematics:empty_pattern_schematic').when(c => c.randomChance(0.25))
        ))
      })
  })
})