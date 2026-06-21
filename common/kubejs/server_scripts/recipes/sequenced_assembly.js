ServerEvents.recipes(event => {
  // RECIPE FUNCTION
  const add = (recipeId, input, transitional, sequence, loopCount, outputs) => {
    event.recipes.create.sequenced_assembly(
      outputs,
      input,
      sequence
    )
      .transitionalItem(transitional)
      .loops(loopCount)
      .id(`kubejs:${recipeId}_sequenced_assembly`)
  }

  // TRANSITIONAL ITEMS
  let enchanted_golden_apple = 'kubejs:incomplete_enchanted_golden_apple'

  // RECIPE CHANGES
  add(
    'enchanted_golden_apple',
    'minecraft:golden_apple',
    enchanted_golden_apple,
    [
      event.recipes.create.filling(enchanted_golden_apple, [enchanted_golden_apple, Fluid.ingredientOf('create:potion', { 'create:potion_fluid_bottle_type': 'regular', 'minecraft:potion_contents': { potion: 'minecraft:fire_resistance' } }).withAmount(125)]),
      event.recipes.create.filling(enchanted_golden_apple, [enchanted_golden_apple, Fluid.ingredientOf('create:potion', { 'create:potion_fluid_bottle_type': 'regular', 'minecraft:potion_contents': { potion: 'minecraft:regeneration' } }).withAmount(125)]),
      event.recipes.create.filling(enchanted_golden_apple, [enchanted_golden_apple, Fluid.of('create_enchantment_industry:experience', 100)])
    ], 1,
    'minecraft:enchanted_golden_apple'
  )
})
