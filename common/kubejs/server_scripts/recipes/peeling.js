ServerEvents.recipes(event => {
  // RECIPE FUNCTION
  const doubleOutput = (recipeId, input, output1, output1Count, output1Chance, output2, output2Count, output2Chance) => {
    event.custom({
      type: "createfisheryindustry:peeling",
      ingredients: [{ item: input }],
      results: [
        {
          id: output1,
          count: output1Count,
          chance: output1Chance
        },
        {
          id: output2,
          count: output2Count,
          chance: output2Chance
        },
      ]
    }).id(`genesis:${recipeId}_peeling`)
  }

  // BULK RECIPE CHANGES
  global.WOOD_TYPES.forEach(entry => {
    if (entry == 'bamboo') {
      doubleOutput(
        `${entry}_block_to_stripped`,
        `minecraft:${entry}_block`,
        `minecraft:stripped_${entry}_block`, 1, 1.00,
        'farmersdelight:straw', 1, 1.00
      )
    }
    else if (entry == 'crimson' || entry == 'warped') {
      doubleOutput(
        `${entry}_stem_to_stripped`,
        `minecraft:${entry}_stem`,
        `minecraft:stripped_${entry}_stem`, 1, 1.00,
        'farmersdelight:tree_bark', 1, 1.00
      )
      doubleOutput(
        `${entry}_hyphae_to_stripped`,
        `minecraft:${entry}_hyphae`,
        `minecraft:stripped_${entry}_hyphae`, 1, 1.00,
        'farmersdelight:tree_bark', 1, 1.00
      )
    }
    else {
      doubleOutput(
        `${entry}_log_to_stripped`,
        `minecraft:${entry}_log`,
        `minecraft:stripped_${entry}_log`, 1, 1.00,
        'farmersdelight:tree_bark', 1, 1.00
      )
      doubleOutput(
        `${entry}_wood_to_stripped`,
        `minecraft:${entry}_wood`,
        `minecraft:stripped_${entry}_wood`, 1, 1.00,
        'farmersdelight:tree_bark', 1, 1.00
      )
    }
  })
})