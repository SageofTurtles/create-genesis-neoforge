LootJS.lootTables(event => {
  let tables = [
    'minecraft:chests/village/village_cartographer',
    'terralith:underground/giant_bee_hive'
  ]

  tables.forEach(table => {
    event.getLootTable(table)
      .firstPool()
      .addEntry(LootEntry.of('create_mobile_packages:robo_bee', [1, 4]))
  })
})