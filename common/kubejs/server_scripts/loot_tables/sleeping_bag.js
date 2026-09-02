LootJS.lootTables(event => {
  event.getLootTable('minecraft:chests/village/village_shepherd')
    .firstPool()
    .addEntry('comforts:sleeping_bag_light_gray')

  event.getLootTable('terralith:desert_outpost')
    .firstPool()
    .addEntry('comforts:sleeping_bag_orange')

  event.getLootTable('structory_towers:top/forager_top')
    .firstPool()
    .addEntry('comforts:sleeping_bag_green')
    .addEntry('comforts:sleeping_bag_brown')

  event.getLootTable('structory_towers:top/nomad_top')
    .firstPool()
    .addEntry('comforts:sleeping_bag_blue')
})