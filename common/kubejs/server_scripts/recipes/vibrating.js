ServerEvents.recipes(event => {
  // RECIPE FUNCTIONS
  const item = (recipeId, inputItem, outputItem, outputCount) => {
    event.custom({
      type: "createvintageneoforged:vibrating",
      ingredients: [{ item: inputItem }],
      results: [
        {
          id: outputItem,
          count: outputCount
        }
      ],
      processing_time: 300
    }).id(`kubejs:${recipeId}_vibrating`)
  }

  const tag = (recipeId, inputTag, outputItem, outputCount) => {
    event.custom({
      type: "createvintageneoforged:vibrating",
      ingredients: [{ tag: inputTag }],
      results: [
        {
          id: outputItem,
          count: outputCount
        }
      ],
      processing_time: 300
    }).id(`kubejs:${recipeId}_vibrating`)
  }

  // BULK RECIPE CHANGES
  global.UNPACKING_SETS.forEach(entry => {
    const { packed, count, unpacked } = entry
    let name = packed.split(':')[1]
    item(name, packed, unpacked, count)
  })

  // TARGETED RECIPE CHANGES
  tag('red_sandstone', 'c:sandstone/red_blocks', 'minecraft:red_sand', 4)
  tag('sandstone', 'c:sandstone/uncolored_blocks', 'minecraft:sand', 4)
  tag('wool', 'minecraft:wool', 'minecraft:string', 4)
})
