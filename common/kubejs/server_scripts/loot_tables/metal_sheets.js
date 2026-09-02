LootJS.lootTables(event => {
  let commonTables = [
    'minecraft:chests/village/village_toolsmith',
    'structory_towers:basic/workshop_basic',
    'structory:outcast/generic/miner'
  ]

  commonTables.forEach(table => {
    event.getLootTable(table)
      .firstPool()
      .addEntry(LootEntry.of('create:copper_sheet', [1, 4]))
      .addEntry(LootEntry.of('create:golden_sheet', [1, 4]))
      .addEntry(LootEntry.of('create:iron_sheet', [1, 4]))
      .addEntry(LootEntry.of('createaddition:zinc_sheet', [1, 4]))
  })

  let advancedTables = [
    'minecraft:chests/bastion_treasure',
    'minecraft:chests/end_city_treasure',
    'structory_towers:top/fortress_top'
  ]

  advancedTables.forEach(table => {
    event.getLootTable(table)
      .firstPool()
      .addEntry(LootEntry.of('create:brass_sheet', [1, 4]))
  })
})