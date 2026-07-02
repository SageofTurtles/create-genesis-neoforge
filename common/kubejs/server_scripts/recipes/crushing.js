ServerEvents.recipes(event => {
  // RECIPE FUNCTION
  const add = (recipeId, input, outputs) => {
    event.recipes.create.crushing(
      outputs,
      input
    ).id(`kubejs:${recipeId}_crushing`)
  }

  // RECIPE CHANGES
  add('breeze_rod', 'minecraft:breeze_rod', ['4x minecraft:wind_charge', CreateItem.of('2x minecraft:wind_charge', 0.25)])
  add('ochrum_recycling', Ingredient.of('#create:stone_types/ochrum'), [CreateItem.of('create:crushed_raw_gold', 0.2), CreateItem.of('minecraft:gold_nugget', 0.2)])
})
