ServerEvents.recipes(event => {
  // RECIPE FUNCTIONS
  const one_by_one = (recipeId, input, output, count) => {
    event.shaped(Item.of(output, count), ['A'], { A: input }).id(`genesis:${recipeId}_shaped`)
  }
  const one_by_two = (recipeId, input, output, count) => {
    event.shaped(Item.of(output, count), ['A', 'A'], { A: input }).id(`genesis:${recipeId}_shaped`)
  }
  const two_by_one = (recipeId, input, output, count) => {
    event.shaped(Item.of(output, count), ['AA'], { A: input }).id(`genesis:${recipeId}_shaped`)
  }
  const two_by_two = (recipeId, input, output, count) => {
    event.shaped(Item.of(output, count), ['AA', 'AA'], { A: input }).id(`genesis:${recipeId}_shaped`)
  }
  const three_by_one = (recipeId, input, output, count) => {
    event.shaped(Item.of(output, count), ['AAA'], { A: input }).id(`genesis:${recipeId}_shaped`)
  }
  const three_by_two = (recipeId, input, output, count) => {
    event.shaped(Item.of(output, count), ['AAA', 'AAA'], { A: input }).id(`genesis:${recipeId}_shaped`)
  }
  const eight = (recipeId, input, output, count) => {
    event.shaped(Item.of(output, count), ['AAA', 'A A', 'AAA'], { A: input }).id(`genesis:${recipeId}_shaped`)
  }

  // BULK RECIPE CHANGES
  global.COPYCATS_CONVERSION.forEach(entry => {
    const { name, horizontal, vertical, stacked } = entry
    one_by_one(`copycat_${name}_horizontal_to_vertical`, horizontal, vertical, 1)
    one_by_one(`copycat_${name}_vertical_to_horizontal`, vertical, horizontal, 1)
    if (stacked != null) {
      one_by_two(`copycat_${name}_horizontal_to_stacked`, horizontal, stacked, 2)
      one_by_two(`copycat_${name}_vertical_to_stacked`, vertical, stacked, 2)
      one_by_one(`copycat_${name}_stacked_to_horizontal`, stacked, horizontal, 1)
    }
  })

  global.COPYCATS_DECORATIVE.forEach(entry => {
    const { count, base_name, base, crafted_name, crafted } = entry
    switch (count) {
      case 1:
        one_by_one(`copycat_${crafted_name}_to_${base_name}`, crafted, base, 1)
        break
      case 2:
        two_by_one(`copycat_${crafted_name}_to_${base_name}`, crafted, base, 1)
        break
      case 3:
        event.shaped(
          base,
          [
            'A A',
            ' A '
          ],
          { A: crafted }
        ).id(`genesis:copycat_${crafted_name}_to_${base_name}_shaped`)
        break
      case 4:
        two_by_two(`copycat_${crafted_name}_to_${base_name}`, crafted, base, 1)
        break
      case 6:
        event.shaped(
          base,
          [
            'AA ',
            'A A',
            ' AA'
          ],
          { A: crafted }
        ).id(`genesis:copycat_${crafted_name}_to_${base_name}_shaped`)
        break
      case 8:
        eight(`copycat_${crafted_name}_to_${base_name}`, crafted, base, 1)
        break
    }
  })

  global.METAL_TRAPDOORS.forEach(entry => {
    const { name, material, trapdoor } = entry
    two_by_two(`${name}_trapdoor`, material, trapdoor, 2)
  })

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

  global.WOOD_TYPES.forEach(entry => {
    three_by_two(`${entry}_trapdoor`, `minecraft:${entry}_planks`, `minecraft:${entry}_trapdoor`, 4)
  })
})