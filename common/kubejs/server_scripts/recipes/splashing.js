ServerEvents.recipes(event => {
  // RECIPE FUNCTION
  const add = (recipeId, input, outputs) => {
    event.recipes.create.splashing(
      outputs,
      input
    ).id(`kubejs:${recipeId}_splashing`)
  }

  // RECIPE CHANGES
  add('mud', 'minecraft:mud', CreateItem.of('minecraft:hanging_roots', 0.5))
})
