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
  add('iron_rod', 'createaddition:iron_rod', 'simulated:spring', 2)
  add('leather', 'minecraft:leather', 'kubejs:empty_ink_sac', 2)
  add('prismarine_alloy', 'create_aquatic_ambitions:prismarine_alloy', 'create_aquatic_ambitions:prismarine_alloy_rod', 2)
})
