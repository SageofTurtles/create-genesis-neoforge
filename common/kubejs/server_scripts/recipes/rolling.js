ServerEvents.recipes(event => {
  // RECIPE FUNCTION
  const add = (recipeId, input, outputItem, outputCount) => {
    event.custom({
      type: 'createaddition:rolling',
      ingredients: [{ item: input }],
      results: [{
        count: outputCount,
        id: outputItem
      }]
    }).id(`kubejs:${recipeId}_rolling`)
  }

  // RECIPE CHANGES
  add('leather', 'minecraft:leather', 'kubejs:empty_ink_sac', 2)
})
