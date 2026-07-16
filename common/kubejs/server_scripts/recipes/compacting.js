ServerEvents.recipes(event => {
  // RECIPE FUNCTION
  const unheated = (recipeId, inputs, output) => {
    event.recipes.create.compacting(
      output,
      inputs
    ).id(`kubejs:${recipeId}_compacting`)
  }
  const heated = (recipeId, inputs, output) => {
    event.recipes.create.compacting(
      output,
      inputs
    ).heated().id(`kubejs:${recipeId}_compacting`)
  }
  const superheated = (recipeId, inputs, output) => {
    event.recipes.create.compacting(
      output,
      inputs
    ).superheated().id(`kubejs:${recipeId}_compacting`)
  }

  // TARGETED RECIPE CHANGES
  heated('coal_from_charcoal', '4x minecraft:charcoal', 'minecraft:coal')
  heated('deepslate', ['2x minecraft:stone', Fluid.lava(100)], 'minecraft:deepslate')
  heated('industrial_iron_block', 'minecraft:iron_block', 'create:industrial_iron_block')
  heated('industrial_iron_ingot', 'minecraft:iron_ingot', 'createdeco:industrial_iron_ingot')
  heated('industrial_iron_nugget', 'minecraft:iron_nugget', 'createdeco:industrial_iron_nugget')
  heated('ochre_froglight', ['2x minecraft:magma_cream', Fluid.water(500), 'minecraft:yellow_dye'], 'minecraft:ochre_froglight')
  heated('pearlescent_froglight', ['2x minecraft:magma_cream', Fluid.water(500), 'minecraft:purple_dye'], 'minecraft:pearlescent_froglight')
  heated('prismarine_alloy', ['8x minecraft:prismarine_shard', Fluid.of('createmetalwork:molten_copper', 90)], 'create_aquatic_ambitions:prismarine_alloy')
  heated('tuff', ['2x minecraft:flint', 'minecraft:cobblestone', Fluid.lava(100)], 'minecraft:tuff')
  heated('verdant_froglight', ['2x minecraft:magma_cream', Fluid.water(500), 'minecraft:green_dye'], 'minecraft:verdant_froglight')
  superheated('diamond', ['12x minecraft:coal_block', Fluid.lava(1000)], 'minecraft:diamond')
  unheated('blackstone', ['2x minecraft:coal', 'minecraft:basalt', Fluid.lava(100)], '2x minecraft:blackstone')

  // BULK RECIPE CHANGES
  global.MOLTEN_METALS.forEach(entry => {
    const { name, molten, block, crushed, raw, ingot, sheet, nugget } = entry
    if (name == 'electrum' || name == 'industrial_iron') return
    unheated(`${name}_molten_to_block`, Fluid.of(molten, 810), block)
    if (ingot != null) {
      unheated(`${name}_molten_to_ingot`, Fluid.of(molten, 90), ingot)
      if (crushed != null) {
        heated(`${name}_crushed_to_ingot`, crushed, ingot)
      }
      if (raw != null) {
        heated(`${name}_raw_to_ingot`, raw, ingot)
      }
    }
  })

  global.ORES.forEach(entry => {
    const { ore, stone, productType, product, productQuantity, xp } = entry
    let name = ore.split(':')[1]
    if (name == 'ancient_debris') {
      superheated(name, [product, stone, Fluid.of('create_enchantment_industry:experience', xp)], ore)
    }
    else {
      if (productType == 'fluid') {
        heated(name, [Fluid.of(product, productQuantity), stone, Fluid.of('create_enchantment_industry:experience', xp)], ore)
      }
      else {
        heated(name, [Item.of(product, productQuantity), stone, Fluid.of('create_enchantment_industry:experience', xp)], ore)
      }
    }
  })
})
