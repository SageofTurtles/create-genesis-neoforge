ServerEvents.recipes(event => {
  // RECIPE FUNCTION
  const add = (recipeId, fluidInput, itemInput, output) => {
    event.recipes.create.filling(
      output,
      [fluidInput, itemInput]
    ).id(`kubejs:${recipeId}_filling`)
  }

  // RECIPE CHANGES
  add('budding_amethyst', Fluid.ingredientOf('create:potion', { 'create:potion_fluid_bottle_type': 'regular', 'minecraft:potion_contents': { potion: 'minecraft:strong_regeneration' } }).withAmount(1000), 'minecraft:amethyst_block', 'minecraft:budding_amethyst')
  add('ink_sac', Fluid.of('create_dragons_plus:black_dye', 250), 'kubejs:empty_ink_sac', 'minecraft:ink_sac')
  add('podzol', Fluid.of('sliceanddice:fertilizer', 250), 'minecraft:dirt', 'minecraft:podzol')
  add('pointed_dripstone', Fluid.water(500), 'minecraft:clay_ball', 'minecraft:pointed_dripstone')
  add('spore_blossom', Fluid.of('sliceanddice:fertilizer', 250), 'minecraft:big_dripleaf', 'minecraft:spore_blossom')
  add('wither_rose', Fluid.ingredientOf('create:potion', { 'create:potion_fluid_bottle_type': 'regular', 'minecraft:potion_contents': { potion: 'minecraft:harming' } }).withAmount(250), Ingredient.of('#minecraft:flowers'), 'minecraft:wither_rose')
})
