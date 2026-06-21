ServerEvents.recipes(event => {
  // RECIPE FUNCTION
  const add = (recipeId, inputHeld, inputBase, inputFluid, fluidAmount, output, playSound) => {
    event.custom({
      type: "create_enchantment_industry:printing",
      ingredients: [
        { item: inputBase },
        { item: inputHeld },
        {
          type: 'neoforge:single',
          fluid: inputFluid,
          amount: fluidAmount
        }
      ],
      results: [{ id: output }],
      sound: playSound
    }).id(`kubejs:${recipeId}_printing`)
  }

  // RECIPE CHANGES
  Ingredient.of('#c:music_discs').itemIds.forEach(entry => {
    let name = entry.split(':')[1]
    add(name, entry, 'kubejs:blank_music_disc', 'create_enchantment_industry:experience', 10, entry, 'block.grindstone.use')
  })
  Ingredient.of('#minecraft:decorated_pot_sherds').itemIds.forEach(entry => {
    let name = entry.split(':')[1]
    add(name, entry, 'minecraft:brick', 'createmetalwork:molten_gold', 180, entry, 'block.grindstone.use')
  })
})
