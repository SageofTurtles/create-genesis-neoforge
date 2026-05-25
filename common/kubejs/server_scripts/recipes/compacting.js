ServerEvents.recipes(event => {
  // RECIPE FUNCTION
  const add = (recipeId, inputs, output, count) => {
    event.recipes.create.compacting(
      Item.of(output, count),
      inputs
    ).id(`genesis:${recipeId}_compacting`)
  }

  // RECIPE CHANGES
  add('blackstone', ['2x minecraft:coal', 'minecraft:basalt', Fluid.lava(100)], 'minecraft:blackstone', 2)
})
