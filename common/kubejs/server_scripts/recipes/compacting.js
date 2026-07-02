ServerEvents.recipes(event => {
  // RECIPE FUNCTION
  const unheated = (recipeId, inputs, output, count) => {
    event.recipes.create.compacting(
      Item.of(output, count),
      inputs
    ).id(`kubejs:${recipeId}_compacting`)
  }
  const heated = (recipeId, inputs, output, count) => {
    event.recipes.create.compacting(
      Item.of(output, count),
      inputs
    ).heated().id(`kubejs:${recipeId}_compacting`)
  }
  const superheated = (recipeId, inputs, output, count) => {
    event.recipes.create.compacting(
      Item.of(output, count),
      inputs
    ).superheated().id(`kubejs:${recipeId}_compacting`)
  }

  // RECIPE CHANGES
  heated('deepslate', ['2x minecraft:stone', Fluid.lava(100)], 'minecraft:deepslate', 1)
  heated('industrial_iron_block', 'minecraft:iron_block', 'create:industrial_iron_block', 1)
  heated('industrial_iron_ingot', 'minecraft:iron_ingot', 'createdeco:industrial_iron_ingot', 1)
  heated('industrial_iron_nugget', 'minecraft:iron_nugget', 'createdeco:industrial_iron_nugget', 1)
  heated('ochre_froglight', ['2x minecraft:magma_cream', Fluid.water(500), 'minecraft:yellow_dye'], 'minecraft:ochre_froglight', 1)
  heated('pearlescent_froglight', ['2x minecraft:magma_cream', Fluid.water(500), 'minecraft:purple_dye'], 'minecraft:pearlescent_froglight', 1)
  heated('tuff', ['2x minecraft:flint', 'minecraft:cobblestone', Fluid.lava(100)], 'minecraft:tuff', 1)
  heated('verdant_froglight', ['2x minecraft:magma_cream', Fluid.water(500), 'minecraft:green_dye'], 'minecraft:verdant_froglight', 1)
  superheated('diamond', ['12x minecraft:coal_block', Fluid.lava(1000)], 'minecraft:diamond', 1)
  unheated('blackstone', ['2x minecraft:coal', 'minecraft:basalt', Fluid.lava(100)], 'minecraft:blackstone', 2)
})
