ServerEvents.recipes(event => {
  // RECIPE FUNCTION
  const add = (recipeId, input, output, count) => {
    event.recipes.create.haunting(
      Item.of(output, count),
      input
    ).id(`kubejs:${recipeId}_haunting`)
  }

  // RECIPE CHANGES
  add('cobblestone', 'minecraft:cobblestone', 'minecraft:infested_cobblestone', 1)
  add('raw_meat', Ingredient.of('#c:foods/raw_meat'), 'minecraft:rotten_flesh', 1)
  add('sea_lantern', 'minecraft:sea_lantern', 'minecraft:shroomlight', 1)
})
