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
  add('red_sand', 'minecraft:red_sand', CreateItem.of('minecraft:dead_bush', 0.25))
  add('soul_sand', 'minecraft:soul_sand', CreateItem.of('4x minecraft:quartz', 0.12))
})
