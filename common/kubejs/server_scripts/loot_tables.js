LootJS.lootTables(event => {
  // ENTITY DROPS
  event.getLootTable('minecraft:entities/bat')
    .firstPool()
    .addEntry(LootEntry.of('minecraft:leather').applyEnchantmentBonus([0, 1]))

  event.getLootTable('minecraft:entities/warden')
    .firstPool()
    .addEntry(LootEntry.of('minecraft:echo_shard').applyEnchantmentBonus([0, 1]))

  event.getLootTable('minecraft:entities/shulker')
    .clear()
    .firstPool()
    .addEntry(LootEntry.of('minecraft:shulker_shell', 2))

  event.getLootTable('minecraft:entities/ender_dragon')
    .createPool(pool => {
      pool.addEntry('minecraft:dragon_head')
    })
    .createPool(pool => {
      pool.addEntry('minecraft:dragon_egg')
    })
})
