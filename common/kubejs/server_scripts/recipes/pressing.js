ServerEvents.recipes(event => {
  // RECIPE FUNCTION
  const add = (recipeId, input, output) => {
    event.recipes.create.pressing(
      output,
      input
    ).id(`kubejs:${recipeId}_pressing`)
  }

  // RECIPE CHANGES
  add('paper_from_tree_bark', 'farmersdelight:tree_bark', 'minecraft:paper')
})
