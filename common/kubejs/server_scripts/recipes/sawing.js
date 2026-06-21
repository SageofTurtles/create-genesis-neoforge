ServerEvents.recipes(event => {
  // RECIPE FUNCTION
  const add = (recipeId, input, output, count) => {
    event.recipes.create.cutting(
      Item.of(output, count),
      input
    ).id(`kubejs:${recipeId}_sawing`)
  }

  // BULK RECIPE CHANGES
  global.WOOD_TYPES.forEach(entry => {
    if (entry == 'bamboo') return
    if (entry == 'crimson' || entry == 'warped') {
      add(`${entry}_hyphae_to_stem`, `minecraft:${entry}_hyphae`, `minecraft:${entry}_stem`, 1)
      add(`stripped_${entry}_hyphae_to_stem`, `minecraft:stripped_${entry}_hyphae`, `minecraft:stripped_${entry}_stem`, 1)
    }
    else {
      add(`${entry}_wood_to_log`, `minecraft:${entry}_wood`, `minecraft:${entry}_log`, 1)
      add(`stripped_${entry}_wood_to_log`, `minecraft:stripped_${entry}_wood`, `minecraft:stripped_${entry}_log`, 1)
    }
  })

  // TARGETED RECIPE CHANGES
  add('polished_blackstone_button', 'minecraft:polished_blackstone', 'minecraft:polished_blackstone_button', 1)
  add('polished_blackstone_pressure_plate', 'minecraft:polished_blackstone', 'minecraft:polished_blackstone_pressure_plate', 1)
  add('stone_button', 'minecraft:stone', 'minecraft:stone_button', 1)
  add('stone_pressure_plate', 'minecraft:stone', 'minecraft:stone_pressure_plate', 1)
})