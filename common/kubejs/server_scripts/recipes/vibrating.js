ServerEvents.recipes(event => {
  // RECIPE FUNCTIONS
  const add = (recipeId, inputItem, outputItem, outputCount) => {
    event.recipes.vintage.vibrating(
      Item.of(outputItem, outputCount),
      Ingredient.of(inputItem)
    )
      .processingTime(300)
      .id(`kubejs:${recipeId}_vibrating`)
  }

  // BULK RECIPE CHANGES
  global.UNPACKING_SETS.forEach(entry => {
    const { packed, count, unpacked } = entry
    let name = packed.split(':')[1]
    add(name, packed, unpacked, count)
  })

  // TARGETED RECIPE CHANGES
  add('red_sandstone', '#c:sandstone/red_blocks', 'minecraft:red_sand', 4)
  add('sandstone', '#c:sandstone/uncolored_blocks', 'minecraft:sand', 4)
  add('wool', '#minecraft:wool', 'minecraft:string', 4)
})
