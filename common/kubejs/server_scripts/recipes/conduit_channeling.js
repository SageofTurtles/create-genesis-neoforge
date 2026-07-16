ServerEvents.recipes(event => {
  // RECIPE FUNCTION
  const add = (recipeId, input, outputItem, outputChance, outputCount) => {
    event.custom({
      type: 'create_aquatic_ambitions:channeling',
      ingredients: [{ item: input }],
      results: [{
        id: outputItem,
        count: outputCount,
        chance: outputChance
      }]
    }).id(`kubejs:${recipeId}_conduit_channeling`)
  }

  // TARGETED RECIPE CHANGES
  add('bone', 'minecraft:bone', 'minecraft:turtle_scute', 0.5, 1)
  add('egg', 'minecraft:egg', 'minecraft:turtle_egg', 0.1, 1)
  add('limestone', 'create:limestone', 'minecraft:nautilus_shell', 0.02, 1)

  // BULK RECIPE CHANGES
  global.COPPER_BLOCKSETS_OXIDIZATION.forEach(entry => {
    const { mod, base, exposed, weathered, oxidized } = entry
    add(`${base}_to_${exposed}`, `${mod}:${base}`, `${mod}:${exposed}`, 1.0, 1)
    add(`${exposed}_to_${weathered}`, `${mod}:${exposed}`, `${mod}:${weathered}`, 1.0, 1)
    add(`${weathered}_to_${oxidized}`, `${mod}:${weathered}`, `${mod}:${oxidized}`, 1.0, 1)
  })
})
