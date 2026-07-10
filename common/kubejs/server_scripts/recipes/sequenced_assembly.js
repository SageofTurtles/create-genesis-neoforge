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
  let netherite_scrap = 'kubejs:incomplete_netherite_scrap'

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

  add(
    'netherite_scrap',
    'minecraft:crying_obsidian',
    netherite_scrap,
    [
      event.recipes.create.filling(netherite_scrap, [netherite_scrap, Fluid.of('create_dragons_plus:dragon_breath', 250)]),
      event.recipes.create.filling(netherite_scrap, [netherite_scrap, Fluid.ingredientOf('create:potion', { 'create:potion_fluid_bottle_type': 'regular', 'minecraft:potion_contents': { potion: 'minecraft:long_fire_resistance' } }).withAmount(250)]),
      event.recipes.create.cutting(netherite_scrap, netherite_scrap),
      event.recipes.create.pressing(netherite_scrap, netherite_scrap)
    ], 4,
    [
      CreateItem.of('minecraft:netherite_scrap', 0.50),
      CreateItem.of('minecraft:flint', 0.20),
      CreateItem.of('minecraft:obsidian', 0.12),
      CreateItem.of('minecraft:magma_cream', 0.10),
      CreateItem.of('minecraft:ghast_tear', 0.05),
      CreateItem.of('amendments:dragon_charge', 0.03)
    ]
  )
})
