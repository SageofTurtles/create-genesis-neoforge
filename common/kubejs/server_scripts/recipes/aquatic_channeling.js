ServerEvents.recipes(event => {
  // RECIPE FUNCTION
  const add = (recipeId, input, outputItem, outputChance, outputCount) => {
    event.custom({
      type: 'create_aquatic_ambitions:channeling',
      ingredients: [{ item: input }],
      results: [{
        id: outputItem,
        count: outputCount,
        chance: outputChance
      }]
    }).id(`kubejs:${recipeId}_aquatic_channeling`)
  }

  // RECIPE CHANGES
  add('bone', 'minecraft:bone', 'minecraft:turtle_scute', 0.5, 1)
  add('egg', 'minecraft:egg', 'minecraft:turtle_egg', 0.1, 1)
  add('limestone', 'create:limestone', 'minecraft:nautilus_shell', 0.02, 1)
})
