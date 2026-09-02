LootJS.lootTables(event => {
  let tables = [
    'minecraft:archaeology/trail_ruins_common',
    'terralith:desert_outpost',
    'terralith:village/desert/cartographer',
    'terralith:village/fortified/cartographer'
  ]

  tables.forEach(table => {
    if (table != 'minecraft:archaeology/trail_ruins_common') {
      event.getLootTable(table)
        .createPool(pool => {
          pool.addEntry(LootEntry.alternative(
            LootEntry.of('horseman:copper_horn[instrument="minecraft:ponder_goat_horn"]').when(c => c.randomChance(0.02)),
            LootEntry.of('horseman:copper_horn[instrument="minecraft:sing_goat_horn"]').when(c => c.randomChance(0.02)),
            LootEntry.of('horseman:copper_horn[instrument="minecraft:seek_goat_horn"]').when(c => c.randomChance(0.02)),
            LootEntry.of('horseman:copper_horn[instrument="minecraft:feel_goat_horn"]').when(c => c.randomChance(0.02)),
            LootEntry.of('horseman:copper_horn[instrument="minecraft:admire_goat_horn"]').when(c => c.randomChance(0.02)),
            LootEntry.of('horseman:copper_horn[instrument="minecraft:call_goat_horn"]').when(c => c.randomChance(0.02)),
            LootEntry.of('horseman:copper_horn[instrument="minecraft:yearn_goat_horn"]').when(c => c.randomChance(0.02)),
            LootEntry.of('horseman:copper_horn[instrument="minecraft:dream_goat_horn"]').when(c => c.randomChance(0.02))
          ))
        })
    } else {
      event.getLootTable(table)
        .firstPool()
        .addEntry(LootEntry.of('horseman:copper_horn[instrument="minecraft:ponder_goat_horn"]'))
        .addEntry(LootEntry.of('horseman:copper_horn[instrument="minecraft:sing_goat_horn"]'))
        .addEntry(LootEntry.of('horseman:copper_horn[instrument="minecraft:seek_goat_horn"]'))
        .addEntry(LootEntry.of('horseman:copper_horn[instrument="minecraft:feel_goat_horn"]'))
        .addEntry(LootEntry.of('horseman:copper_horn[instrument="minecraft:admire_goat_horn"]'))
        .addEntry(LootEntry.of('horseman:copper_horn[instrument="minecraft:call_goat_horn"]'))
        .addEntry(LootEntry.of('horseman:copper_horn[instrument="minecraft:yearn_goat_horn"]'))
        .addEntry(LootEntry.of('horseman:copper_horn[instrument="minecraft:dream_goat_horn"]'))
    }
  })
})