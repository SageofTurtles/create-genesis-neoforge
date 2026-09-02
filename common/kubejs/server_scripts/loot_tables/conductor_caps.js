LootJS.lootTables(event => {
  event.getLootTable('minecraft:chests/nether_bridge')
    .firstPool()
    .addEntry('railways:red_conductor_cap')

  event.getLootTable('minecraft:chests/bastion_treasure')
    .firstPool()
    .addEntry('railways:black_conductor_cap')

  event.getLootTable('structory_towers:top/warped_top')
    .firstPool()
    .addEntry('railways:cyan_conductor_cap')

  event.getLootTable('minecraft:chests/end_city_treasure')
    .firstPool()
    .addEntry('railways:purple_conductor_cap')
})
