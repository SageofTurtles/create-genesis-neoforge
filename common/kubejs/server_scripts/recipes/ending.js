ServerEvents.recipes(event => {
  // RECIPE FUNCTIONS
  const addTag = (recipeId, inputTag, outputItem, outputCount) => {
    event.custom({
      type: 'create_dragons_plus:ending',
      ingredients: [{ tag: inputTag }],
      results: [{
        id: outputItem,
        count: outputCount
      }]
    }).id(`kubejs:${recipeId}_ending`)
  }
  const addItem = (recipeId, inputItem, outputItem, outputChance, outputCount) => {
    event.custom({
      type: 'create_dragons_plus:ending',
      ingredients: [{ item: inputItem }],
      results: [{
        id: outputItem,
        chance: outputChance,
        count: outputCount
      }]
    }).id(`kubejs:${recipeId}_ending`)
  }

  // RECIPE CHANGES
  addItem('leather', 'minecraft:leather', 'minecraft:phantom_membrane', 0.25, 1)
  addTag('flower', 'minecraft:flowers', 'minecraft:chorus_flower', 1)
})
