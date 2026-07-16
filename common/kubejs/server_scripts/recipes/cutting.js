ServerEvents.recipes(event => {
  // RECIPE FUNCTION
  const knife = (recipeId, input, outputItem, outputCount) => {
    event.custom({
      type: 'farmersdelight:cutting',
      ingredients: [{ item: input }],
      result: [{
        item: {
          count: outputCount,
          id: outputItem
        }
      }],
      tool: [
        {
          type: 'farmersdelight:item_ability',
          action: 'knife_dig'
        },
        {
          tag: 'c:tools/knife'
        }
      ]
    }).id(`kubejs:${recipeId}_cutting`)
  }

  // RECIPE CHANGES
  knife('cooked_porkchop', 'minecraft:cooked_porkchop', 'farmersdelight:cooked_bacon', 2)
})
