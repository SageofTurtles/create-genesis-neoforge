ServerEvents.recipes(event => {
  // RECIPE FUNCTION
  const add = (recipeId, input, output, count) => {
    event.stonecutting(
      Item.of(output, count),
      input
    ).id(`kubejs:${recipeId}_stonecutting`)
  }

  // BULK RECIPE CHANGES
  global.COPPER_BLOCKSETS_CREATE.forEach(entry => {
    const { base, shingles, shingle_stairs, shingle_slab, tiles, tile_stairs, tile_slab } = entry
    add(`${base}_to_${shingles}`, `minecraft:${base}`, `create:${shingles}`, 1)
    add(`${base}_to_${tiles}`, `minecraft:${base}`, `create:${tiles}`, 1)
    add(`waxed_${base}_to_${shingles}`, `minecraft:waxed_${base}`, `create:waxed_${shingles}`, 1)
    add(`waxed_${base}_to_${tiles}`, `minecraft:waxed_${base}`, `create:waxed_${tiles}`, 1)
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

  // TARGETED RECIPE CHANGES
  add('copycat_block', 'create:zinc_ingot', 'copycats:copycat_block', 1)
  add('iron_bars', 'minecraft:iron_ingot', 'minecraft:iron_bars', 4)
})