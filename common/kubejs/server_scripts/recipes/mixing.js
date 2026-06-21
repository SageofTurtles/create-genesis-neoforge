ServerEvents.recipes(event => {
  // RECIPE FUNCTION
  const unheated = (recipeId, inputs, output, count) => {
    event.recipes.create.mixing(
      Item.of(output, count),
      inputs
    ).id(`kubejs:${recipeId}_mixing`)
  }
  const heatedFluid = (recipeId, inputs, output) => {
    event.recipes.create.mixing(
      output,
      inputs
    ).heated().id(`kubejs:${recipeId}_mixing`)
  }

  // RECIPE CHANGES
  heatedFluid('lava_from_cobblestone', Ingredient.of('#c:cobblestones'), Fluid.lava(50))
  unheated('diorite', ['minecraft:cobblestone', 'minecraft:quartz'], 'minecraft:diorite', 1)
  unheated('powder_snow_bucket', ['minecraft:snow_block', 'minecraft:bucket'], 'minecraft:powder_snow_bucket', 1)
})
