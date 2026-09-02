LootJS.lootTables(event => {
  let tables = [
    'kaisyn:archeology/forest_ruins_common',
    'minecraft:chests/ancient_city',
    'minecraft:chests/pillager_outpost',
    'minecraft:chests/woodland_mansion'
  ]

  tables.forEach(table => {
    if (table != 'kaisyn:archeology/forest_ruins_common') {
      event.getLootTable(table)
        .createPool(pool => {
          pool.addEntry(LootEntry.alternative(
            LootEntry.of('minecraft:goat_horn[instrument="minecraft:ponder_goat_horn"]').when(c => c.randomChance(0.02)),
            LootEntry.of('minecraft:goat_horn[instrument="minecraft:sing_goat_horn"]').when(c => c.randomChance(0.02)),
            LootEntry.of('minecraft:goat_horn[instrument="minecraft:seek_goat_horn"]').when(c => c.randomChance(0.02)),
            LootEntry.of('minecraft:goat_horn[instrument="minecraft:feel_goat_horn"]').when(c => c.randomChance(0.02)),
            LootEntry.of('minecraft:goat_horn[instrument="minecraft:admire_goat_horn"]').when(c => c.randomChance(0.02)),
            LootEntry.of('minecraft:goat_horn[instrument="minecraft:call_goat_horn"]').when(c => c.randomChance(0.02)),
            LootEntry.of('minecraft:goat_horn[instrument="minecraft:yearn_goat_horn"]').when(c => c.randomChance(0.02)),
            LootEntry.of('minecraft:goat_horn[instrument="minecraft:dream_goat_horn"]').when(c => c.randomChance(0.02))
          ))
        })
    } else {
      event.getLootTable(table)
        .firstPool()
        .addEntry(LootEntry.of('minecraft:goat_horn[instrument="minecraft:ponder_goat_horn"]'))
        .addEntry(LootEntry.of('minecraft:goat_horn[instrument="minecraft:sing_goat_horn"]'))
        .addEntry(LootEntry.of('minecraft:goat_horn[instrument="minecraft:seek_goat_horn"]'))
        .addEntry(LootEntry.of('minecraft:goat_horn[instrument="minecraft:feel_goat_horn"]'))
        .addEntry(LootEntry.of('minecraft:goat_horn[instrument="minecraft:admire_goat_horn"]'))
        .addEntry(LootEntry.of('minecraft:goat_horn[instrument="minecraft:call_goat_horn"]'))
        .addEntry(LootEntry.of('minecraft:goat_horn[instrument="minecraft:yearn_goat_horn"]'))
        .addEntry(LootEntry.of('minecraft:goat_horn[instrument="minecraft:dream_goat_horn"]'))
    }
  })
})