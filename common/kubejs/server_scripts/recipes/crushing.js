ServerEvents.recipes(event => {
  // RECIPE FUNCTION
  const add = (recipeId, input, outputs) => {
    event.recipes.create.crushing(
      outputs,
      input
    ).id(`kubejs:${recipeId}_crushing`)
  }

  // RECIPE CHANGES
  add('andesite', 'minecraft:andesite', '9x createmetalwork:crushed_andesite')
  add('breeze_rod', 'minecraft:breeze_rod', ['4x minecraft:wind_charge', CreateItem.of('2x minecraft:wind_charge', 0.25)])
  add('netherite_scrap', 'minecraft:netherite_scrap', ['createmetalwork:crushed_netherite_scrap', CreateItem.of('createmetalwork:crushed_netherite_scrap', 0.50), 'create:experience_nugget', CreateItem.of('create:experience_nugget', 0.50)])
  add('ochrum_recycling', Ingredient.of('#create:stone_types/ochrum'), [CreateItem.of('create:crushed_raw_gold', 0.2), CreateItem.of('minecraft:gold_nugget', 0.2)])
})
