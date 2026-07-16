ServerEvents.recipes(event => {
  // RECIPE FUNCTION
  const consumeItem = (recipeId, inputItem, heldItem, output) => {
    event.recipes.create.deploying(
      Item.of(output),
      [inputItem, heldItem]
    ).id(`kubejs:${recipeId}_deploying`)
  }

  // BULK RECIPE CHANGES
  global.BACKPACK_UPGRADES.forEach(entry => {
    let base = entry.split('_')[1]
    consumeItem(`${entry}_upgrade`, `sophisticatedbackpacks:${base}_upgrade`, 'create:brass_block', `sophisticatedbackpacks:${entry}_upgrade`)
  })

  // TARGETED RECIPE CHANGES
  consumeItem('advanced_tool_swapper_upgrade', 'sophisticatedbackpacks:tool_swapper_upgrade', 'create:brass_block', 'sophisticatedbackpacks:advanced_tool_swapper_upgrade')
})