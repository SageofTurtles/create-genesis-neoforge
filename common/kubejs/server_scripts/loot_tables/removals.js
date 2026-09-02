// priority: 100

LootJS.lootTables(event => {
  // TARGETED REMOVALS
  event.getLootTable('minecraft:chests/pillager_outpost')
    .removeItem('minecraft:goat_horn')

  event.getLootTable('structory_towers:sword_portal')
    .removeItem('minecraft:quartz')
    .removeItem('minecraft:warped_stem')
    .removeItem('minecraft:warped_wart_block')
    .removeItem('minecraft:warped_fungus')
    .removeItem('minecraft:warped_fungus_on_a_stick')
    .removeItem('minecraft:warped_roots')

  event.getLootTable('structory_towers:top/desert_top')
    .removeItem('minecraft:daylight_detector')
    .removeItem('minecraft:netherite_scrap')

  event.getLootTable('structory_towers:top/workshop_top')
    .removeItem('minecraft:weeping_vines')
    .removeItem('minecraft:crimson_roots')
    .removeItem('minecraft:crimson_fungus')
    .removeItem('minecraft:observer')
    .removeItem('minecraft:comparator')
    .removeItem('minecraft:daylight_detector')
    .removeItem('minecraft:netherite_scrap')

  event.getLootTable('terralith:desert_outpost')
    .removeItem('minecraft:goat_horn')

  event.getLootTable('terralith:underground/giant_bee_hive')
    .removeItem('minecraft:potion')

    
  // BULK REMOVALS
  event.modifyLootTables(LootType.CHEST, /sophisticatedbackpacks:inject\/.*/)
    .removeItem('sophisticatedbackpacks:advanced_magnet_upgrade')
})