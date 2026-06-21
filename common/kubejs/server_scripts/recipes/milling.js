ServerEvents.recipes(event => {
  // RECIPE FUNCTION
  const add = (recipeId, input, outputs) => {
    event.recipes.create.milling(
      outputs,
      input
    ).id(`kubejs:${recipeId}_milling`)
  }

  // RECIPE CHANGES
  add('rocky_dirt', 'decorative_blocks:rocky_dirt', 'minecraft:coarse_dirt')
})
