ServerEvents.recipes(event => {
  // RECIPE FUNCTION
  const unheated = (recipeId, inputs, output, count) => {
    event.recipes.create.mixing(
      Item.of(output, count),
      inputs
    ).id(`genesis:${recipeId}_mixing`)
  }

  // RECIPE CHANGES
  unheated('diorite', ['minecraft:cobblestone', 'minecraft:quartz'], 'minecraft:diorite', 1)
})
