ServerEvents.recipes(event => {
  // RECIPE FUNCTION
  const add = (recipeId, input, output) => {
    event.recipes.create.pressing(
      output,
      input
    ).id(`kubejs:${recipeId}_pressing`)
  }

  // RECIPE CHANGES
  add('netherite_ingot', 'minecraft:netherite_ingot', 'createvintageneoforged:netherite_sheet')
  add('paper_from_tree_bark', 'farmersdelight:tree_bark', 'minecraft:paper')
})
