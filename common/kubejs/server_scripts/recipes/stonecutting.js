ServerEvents.recipes(event => {
  // RECIPE FUNCTION
  const add = (recipeId, input, output, count) => {
    event.stonecutting(
      Item.of(output, count),
      input
    ).id(`genesis:${recipeId}_stonecutting`)
  }

  // BULK RECIPE CHANGES
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
})