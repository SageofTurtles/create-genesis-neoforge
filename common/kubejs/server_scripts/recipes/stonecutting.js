ServerEvents.recipes(event => {
  // RECIPE FUNCTION
  const add = (recipeId, input, output, count) => {
    event.stonecutting(
      Item.of(output, count),
      input
    ).id(`kubejs:${recipeId}_stonecutting`)
  }

  // BULK RECIPE CHANGES
  global.COPPER_BLOCKSETS_MODDED.forEach(entry => {
    const { base, shingles, tiles, floor } = entry
    let shinglesName = shingles.split(':')[1]
    let tilesName = tiles.split(':')[1]
    let floorName = floor.split(':')[1]
    add(`${base}_to_${shinglesName}`, `minecraft:${base}`, shingles, 1)
    add(`${base}_to_${tilesName}`, `minecraft:${base}`, tiles, 1)
    add(`${base}_to_${floorName}`, `minecraft:${base}`, floor, 1)
  })

  global.COPPER_BLOCKSETS_VANILLA.forEach(entry => {
    const { block, cut, chiseled, grate } = entry
    add(`${block}_to_${cut}`, `minecraft:${block}`, `minecraft:${cut}`, 1)
    add(`${block}_to_${chiseled}`, `minecraft:${block}`, `minecraft:${chiseled}`, 1)
    add(`${block}_to_${grate}`, `minecraft:${block}`, `minecraft:${grate}`, 1)
    add(`waxed_${block}_to_${cut}`, `minecraft:waxed_${block}`, `minecraft:waxed_${cut}`, 1)
    add(`waxed_${block}_to_${chiseled}`, `minecraft:waxed_${block}`, `minecraft:waxed_${chiseled}`, 1)
    add(`waxed_${block}_to_${grate}`, `minecraft:waxed_${block}`, `minecraft:waxed_${grate}`, 1)
  })

  global.COPYCATS_DECORATIVE.forEach(entry => {
    const { count, base_name, base, crafted_name, crafted } = entry
    add(`copycat_${base_name}_to_${crafted_name}`, base, crafted, count)
  })

  global.LOCOMETAL_TYPES.forEach(entry => {
    add(`${entry}`, 'minecraft:iron_block', `railways:${entry}`, 1)
  })

  global.METAL_FLOORS.forEach(entry => {
    const { base, floor } = entry
    let name = floor.split(':')[1]
    add(name, base, floor, 1)
  })

  global.STONECUTTING_BLOCKSETS.forEach(entry => {
    const { name, block, slab, stairs, wall } = entry
    add(`${name}_slab`, block, slab, 2)
    if (stairs != null) {
      add(`${name}_stairs`, block, stairs, 1)
    }
    if (wall != null) {
      add(`${name}_wall`, block, wall, 1)
    }
  })

  global.WOOD_ROOFS.forEach(entry => {
    const { type, material } = entry
    add(`${type}_roof`, material, `mcwroofs:${type}_roof`, 1)
    add(`${type}_attic_roof`, material, `mcwroofs:${type}_attic_roof`, 1)
    add(`${type}_top_roof`, material, `mcwroofs:${type}_top_roof`, 1)
    add(`${type}_lower_roof`, material, `mcwroofs:${type}_lower_roof`, 1)
    add(`${type}_steep_roof`, material, `mcwroofs:${type}_steep_roof`, 1)
    add(`${type}_upper_lower_roof`, material, `mcwroofs:${type}_upper_lower_roof`, 1)
    add(`${type}_upper_steep_roof`, material, `mcwroofs:${type}_upper_steep_roof`, 1)
  })

  // TARGETED RECIPE CHANGES
  add('beam_from_industrial_iron_block', 'create:industrial_iron_block', 'dndecor:beam', 2)
  add('beam_from_large_metal_girder', 'dndecor:large_metal_girder', 'dndecor:beam', 1)
  add('conductor_vent', 'createdeco:industrial_iron_ingot', 'railways:conductor_vent', 1)
  add('copycat_block', 'create:zinc_ingot', 'copycats:copycat_block', 1)
  add('diagonal_girder', 'create:metal_girder', 'dndecor:diagonal_girder', 1)
  add('diagonal_metal_support', 'create:metal_girder', 'dndecor:diagonal_metal_support', 1)
  add('iron_bars', 'minecraft:iron_ingot', 'minecraft:iron_bars', 4)
  add('large_metal_girder_from_beam', 'dndecor:beam', 'dndecor:large_metal_girder', 1)
  add('large_metal_girder_from_industrial_iron_block', 'create:industrial_iron_block', 'dndecor:large_metal_girder', 2)
  add('metal_support', 'create:metal_girder', 'dndecor:metal_support', 1)
})