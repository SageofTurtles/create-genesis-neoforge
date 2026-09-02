LootJS.lootTables(event => {
  // Bat
  event.getLootTable('minecraft:entities/bat')
    .firstPool()
    .addEntry(LootEntry.of('minecraft:leather').applyEnchantmentBonus([0, 1]))

  // Warden
  event.getLootTable('minecraft:entities/warden')
    .createPool(pool => {
      pool.addEntry(LootEntry.of('minecraft:echo_shard').applyEnchantmentBonus([0, 1]))
    })

  // Shulker
  event.getLootTable('minecraft:entities/shulker')
    .clear()
    .firstPool()
    .addEntry(LootEntry.of('minecraft:shulker_shell', 2))

  // Ender Dragon
  event.getLootTable('minecraft:entities/ender_dragon')
    .createPool(pool => {
      pool.addEntry('minecraft:dragon_head')
    })
    .createPool(pool => {
      pool.addEntry('minecraft:dragon_egg')
    })
})
