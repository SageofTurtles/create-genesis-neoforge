ServerEvents.recipes(event => {
  // RECIPE FUNCTION
  const add = (recipeId, input, output, count) => {
    event.recipes.create.haunting(
      Item.of(output, count),
      input
    ).id(`genesis:${recipeId}_haunting`)
  }

  // RECIPE CHANGES
  add('infested_cobblestone', 'minecraft:cobblestone', 'minecraft:infested_cobblestone', 1)
})
