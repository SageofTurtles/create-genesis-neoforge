ServerEvents.recipes(event => {
  // RECIPE FUNCTIONS
  const two_by_one = (recipeId, input, output, count) => {
    event.shaped(Item.of(output, count), ['AA'], { A: input }).id(`genesis:${recipeId}_shaped`)
  }
  const three_by_one = (recipeId, input, output, count) => {
    event.shaped(Item.of(output, count), ['AAA'], { A: input }).id(`genesis:${recipeId}_shaped`)
  }
  const three_by_two = (recipeId, input, output, count) => {
    event.shaped(Item.of(output, count), ['AAA', 'AAA'], { A: input }).id(`genesis:${recipeId}_shaped`)
  }

  // BULK RECIPE CHANGES
  global.STONECUTTING_BLOCKSETS.forEach(entry => {
    const { name, block, slab, stairs, wall } = entry
    three_by_one(`${name}_slab`, block, slab, 6)
    two_by_one(`${name}_block_from_slab`, slab, block, 1)
    if (stairs != null) {
      event.shaped(
        `6x ${stairs}`,
        [
          '  A',
          ' AA',
          'AAA'
        ],
        { A: block },
      ).id(`genesis:${name}_stairs_shaped`)
      two_by_one(`${name}_block_from_stairs`, stairs, block, 1)
    }
    if (wall != null) {
      three_by_two(`${name}_wall`, block, wall, 6)
      two_by_one(`${name}_block_from_wall`, wall, block, 1)
    }
  })
})