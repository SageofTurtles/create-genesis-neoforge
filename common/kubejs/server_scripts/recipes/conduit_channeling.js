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
    const { base, exposed, weathered, oxidized } = entry
    add(`${base}_to_${exposed}`, `create:${base}`, `create:${exposed}`, 1.0, 1)
    add(`${exposed}_to_${weathered}`, `create:${exposed}`, `create:${weathered}`, 1.0, 1)
    add(`${weathered}_to_${oxidized}`, `create:${weathered}`, `create:${oxidized}`, 1.0, 1)
  })
})
