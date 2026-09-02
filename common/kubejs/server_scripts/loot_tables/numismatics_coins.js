LootJS.lootTables(event => {
  // All Chests
  event.modifyLootTables(LootType.CHEST)
    .createPool(pool => {
      pool.addEntry(LootEntry.alternative(
        LootEntry.of('numismatics:spur', [2, 8]).when(c => c.randomChance(0.20)),
        LootEntry.of('numismatics:bevel', [1, 4]).when(c => c.randomChance(0.12)),
        LootEntry.of('numismatics:sprocket', [1, 2]).when(c => c.randomChance(0.08))
      ))
      pool.rolls(4)
    })


  // Nether Chests
  let netherTables = [
    'kaisyn:village/exclusives/village_piglin_barrel',
    'kaisyn:village/exclusives/village_piglin_house',
    'minecraft:chests/bastion_bridge',
    'minecraft:chests/bastion_hoglin_stable',
    'minecraft:chests/bastion_other',
    'minecraft:chests/bastion_treasure',
    'minecraft:chests/nether_bridge',
    'structory_towers:basic/crimson_basic',
    'structory_towers:basic/fortress_basic',
    'structory_towers:basic/warped_basic',
    'structory_towers:top/crimson_top',
    'structory_towers:top/warped_top'
  ]

  netherTables.forEach(table => {
    event.getLootTable(table)
      .createPool(pool => {
        pool.addEntry(LootEntry.alternative(
          LootEntry.of('numismatics:bevel', [2, 8]).when(c => c.randomChance(0.20)),
          LootEntry.of('numismatics:sprocket', [1, 4]).when(c => c.randomChance(0.12)),
          LootEntry.of('numismatics:cog', [1, 2]).when(c => c.randomChance(0.08))
        ))
        pool.rolls(2)
      })
  })


  // End Chests
  let endTables = [
    'minecraft:chests/end_city_treasure'
  ]

  endTables.forEach(table => {
    event.getLootTable(table)
      .createPool(pool => {
        pool.addEntry(LootEntry.alternative(
          LootEntry.of('numismatics:sprocket', [2, 8]).when(c => c.randomChance(0.20)),
          LootEntry.of('numismatics:cog', [1, 4]).when(c => c.randomChance(0.12)),
          LootEntry.of('numismatics:crown', [1, 2]).when(c => c.randomChance(0.08))
        ))
        pool.rolls(3)
      })
  })
})