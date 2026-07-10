ServerEvents.recipes(event => {
  // RECIPE FUNCTION
  const unheated = (recipeId, inputs, output) => {
    event.recipes.create.mixing(
      output,
      inputs
    ).id(`kubejs:${recipeId}_mixing`)
  }
  const heated = (recipeId, inputs, output) => {
    event.recipes.create.mixing(
      output,
      inputs
    ).heated().id(`kubejs:${recipeId}_mixing`)
  }
  const superheated = (recipeId, inputs, output) => {
    event.recipes.create.mixing(
      output,
      inputs
    ).superheated().id(`kubejs:${recipeId}_mixing`)
  }

  // TARGETED RECIPE CHANGES
  heated('lava_from_cobblestone', Ingredient.of('#c:cobblestones'), Fluid.lava(50))
  heated('molten_andesite_alloy_from_molten_iron', [Fluid.of('createmetalwork:molten_andesite', 90), Fluid.of('createmetalwork:molten_iron', 10)], Fluid.of('createmetalwork:molten_andesite_alloy', 90))
  heated('molten_andesite_alloy_from_molten_zinc', [Fluid.of('createmetalwork:molten_andesite', 90), Fluid.of('createmetalwork:molten_zinc', 10)], Fluid.of('createmetalwork:molten_andesite_alloy', 90))
  heated('molten_brass_from_ingots', ['minecraft:copper_ingot', 'create:zinc_ingot'], Fluid.of('createmetalwork:molten_brass', 90))
  heated('molten_brass_from_molten', [Fluid.of('createmetalwork:molten_copper', 90), Fluid.of('createmetalwork:molten_zinc', 90)], Fluid.of('createmetalwork:molten_brass', 180))
  superheated('molten_netherite_from_electrum', ['2x createmetalwork:crushed_netherite_scrap', '2x createaddition:electrum_ingot'], Fluid.of('createmetalwork:molten_netherite', 90))
  superheated('molten_netherite_from_gold', ['3x minecraft:netherite_scrap', Fluid.of('createmetalwork:molten_gold', 360)], Fluid.of('createmetalwork:molten_netherite', 90))
  unheated('diorite', ['minecraft:cobblestone', 'minecraft:quartz'], 'minecraft:diorite')
  unheated('powder_snow_bucket', ['minecraft:snow_block', 'minecraft:bucket'], 'minecraft:powder_snow_bucket')

  // BULK RECIPE CHANGES
  global.MOLTEN_METALS.forEach(entry => {
    const { name, molten, block, crushed, raw, ingot, sheet, nugget } = entry
    if (name == 'netherite') {
      superheated(`${name}_block_to_molten`, block, Fluid.of(molten, 810))
      superheated(`${name}_ingot_to_molten`, ingot, Fluid.of(molten, 90))
      superheated(`${name}_nugget_to_molten`, nugget, Fluid.of(molten, 10))
    }
    else {
      heated(`${name}_block_to_molten`, block, Fluid.of(molten, 810))
      if (crushed != null) {
        heated(`${name}_crushed_to_molten`, crushed, Fluid.of(molten, 90))
      }
      if (raw != null) {
        heated(`${name}_raw_to_molten`, raw, Fluid.of(molten, 90))
      }
      if (ingot != null) {
        heated(`${name}_ingot_to_molten`, ingot, Fluid.of(molten, 90))
      }
      if (sheet != null) {
        heated(`${name}_sheet_to_molten`, sheet, Fluid.of(molten, 90))
      }
      if (nugget != null) {
        heated(`${name}_nugget_to_molten`, nugget, Fluid.of(molten, 10))
      }
    }
  })
})
