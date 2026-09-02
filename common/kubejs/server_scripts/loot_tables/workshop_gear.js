LootJS.lootTables(event => {
  let tables = [
    'minecraft:chests/village/village_toolsmith',
    'structory_towers:basic/workshop_basic'
  ]

  tables.forEach(table => {
    event.getLootTable(table)
      .createPool(pool => {
        pool.addEntry('create:goggles')
        pool.addEntry('create:wrench')
        pool.addEntry('cmparallelpipes:pipe_wrench')
        pool.addEntry('create:super_glue')
        pool.addEntry('simulated:honey_glue')
        pool.addEntry('createaddition:straw')
      })
  })
})