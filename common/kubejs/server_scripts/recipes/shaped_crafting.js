ServerEvents.recipes(event => {
  // RECIPE FUNCTIONS
  const one_by_one = (recipeId, input, output, count) => {
    event.shaped(Item.of(output, count), ['A'], { A: input }).id(`kubejs:${recipeId}_shaped`)
  }
  const one_by_two = (recipeId, input, output, count) => {
    event.shaped(Item.of(output, count), ['A', 'A'], { A: input }).id(`kubejs:${recipeId}_shaped`)
  }
  const one_by_three = (recipeId, input, output, count) => {
    event.shaped(Item.of(output, count), ['A', 'A', 'A'], { A: input }).id(`kubejs:${recipeId}_shaped`)
  }
  const two_by_one = (recipeId, input, output, count) => {
    event.shaped(Item.of(output, count), ['AA'], { A: input }).id(`kubejs:${recipeId}_shaped`)
  }
  const two_by_two = (recipeId, input, output, count) => {
    event.shaped(Item.of(output, count), ['AA', 'AA'], { A: input }).id(`kubejs:${recipeId}_shaped`)
  }
  const three_by_one = (recipeId, input, output, count) => {
    event.shaped(Item.of(output, count), ['AAA'], { A: input }).id(`kubejs:${recipeId}_shaped`)
  }
  const three_by_two = (recipeId, input, output, count) => {
    event.shaped(Item.of(output, count), ['AAA', 'AAA'], { A: input }).id(`kubejs:${recipeId}_shaped`)
  }
  const three_by_three = (recipeId, input, output, count) => {
    event.shaped(Item.of(output, count), ['AAA', 'AAA', 'AAA'], { A: input }).id(`kubejs:${recipeId}_shaped`)
  }
  const eight = (recipeId, input, output, count) => {
    event.shaped(Item.of(output, count), ['AAA', 'A A', 'AAA'], { A: input }).id(`kubejs:${recipeId}_shaped`)
  }
  const eight_one = (recipeId, outside, inside, output, count) => {
    event.shaped(Item.of(output, count), ['AAA', 'ABA', 'AAA'], { A: outside, B: inside }).id(`kubejs:${recipeId}_shaped`)
  }

  // TARGETED RECIPE CHANGES
  eight_one('cying_obsidian', 'minecraft:obsidian', 'minecraft:ghast_tear', 'minecraft:crying_obsidian', 8)
  event.shaped('2x create:industrial_iron_window', ['ABA', 'BCB'], { A: 'minecraft:iron_nugget', B: 'createdeco:industrial_iron_nugget', C: '#c:glass_blocks/colorless' }).id('kubejs:industrial_iron_window_shaped')
  event.shaped('4x decorative_blocks:rocky_dirt', ['AB', 'BA'], { A: 'minecraft:dirt', B: 'minecraft:cobblestone' }).id('kubejs:rocky_dirt_shaped')
  event.shaped('create_connected:sequenced_pulse_generator', [' A ', 'BCB', 'DDD'], { A: 'minecraft:redstone_torch', B: 'create:electron_tube', C: 'create:brass_sheet', D: '#c:stones' }).id('kubejs:sequenced_pulse_generator_shaped')
  event.shaped('create_vibrant_vaults:vertical_item_vault', ['A', 'B', 'A'], { A: 'create:iron_sheet', B: 'minecraft:barrel' }).id('kubejs:vertical_item_vault_shaped')
  event.shaped('create:item_vault', ['ABA'], { A: 'create:iron_sheet', B: 'minecraft:barrel' }).id('kubejs:item_vault_shaped')
  event.shaped('create:peculiar_bell', ['ABA', 'BCB'], { A: 'minecraft:stick', B: 'create:brass_sheet', C: 'create:brass_nugget' }).id('kubejs:peculiar_bell_shaped')
  event.shaped('createvintageneoforged:centrifuge', ['A A', 'BCB', 'ADA'], { A: 'simulated:spring', B: '#minecraft:logs', C: 'create:shaft', D: 'create:andesite_casing' }).id('kubejs:centrifuge_shaped')
  event.shaped('createvintageneoforged:vibrating_table', ['ABA', 'ACA'], { A: 'simulated:spring', B: '#minecraft:wooden_slabs', C: 'create:mechanical_piston' }).id('kubejs:vibrating_table_shaped')
  event.shaped('minecraft:bee_nest', ['AAA', 'BBB', 'AAA'], { A: '#minecraft:logs', B: 'minecraft:honeycomb' }).id('kubejs:bee_nest_shaped')
  event.shaped('minecraft:bell', ['ABA', 'BCB'], { A: 'minecraft:stick', B: 'create:golden_sheet', C: 'minecraft:gold_nugget' }).id('kubejs:bell_shaped')
  event.shaped('minecraft:dispenser', [' AB', 'ACB', ' AB'], { A: 'minecraft:stick', B: 'minecraft:string', C: 'minecraft:dropper' }).id('kubejs:dispenser_stackable_shaped')
  event.shaped('minecraft:ender_eye', [' A ', 'BCD', ' E '], { A: 'minecraft:wind_charge', B: 'create_aquatic_ambitions:spiky_shell', C: 'minecraft:ender_pearl', D: 'minecraft:echo_shard', E: 'minecraft:blaze_powder' }).id('kubejs:ender_eye_shaped')
  event.shaped('minecraft:lightning_rod', ['A', 'B', 'B'], { A: 'minecraft:copper_ingot', B: 'createaddition:copper_rod' }).id('kubejs:lightning_rod')
  event.shaped('minecraft:recovery_compass', [' A ', 'ABA', ' A '], { A: 'minecraft:iron_ingot', B: 'minecraft:echo_shard' }).id('kubejs:recovery_compass_shaped')
  event.shaped('minecraft:saddle', ['  A', 'AAA', 'B B'], { A: 'minecraft:leather', B: 'minecraft:iron_ingot' }).id('kubejs:saddle_shaped')
  event.shaped('simulated:rope_coupling', ['ABA'], { A: 'minecraft:iron_nugget', B: 'farmersdelight:rope' }).id('kubejs:rope_coupling_shaped')
  one_by_three('rope_from_string', 'minecraft:string', 'farmersdelight:rope', 1)
  three_by_one('paper_from_tree_bark', 'farmersdelight:tree_bark', 'minecraft:paper', 3)
  three_by_three('rose_quartz_block', 'create:rose_quartz', 'create:rose_quartz_block', 1)

  // BULK RECIPE CHANGES
  global.COLORS.forEach(entry => {
    eight_one(`${entry}_concrete_powder_dyeing`, 'kubejs:concrete_powder', `minecraft:${entry}_dye`, `minecraft:${entry}_concrete_powder`, 8)
  })

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
        event.shaped(base, ['A A', ' A '], { A: crafted }).id(`kubejs:copycat_${crafted_name}_to_${base_name}_shaped`)
        break
      case 4:
        two_by_two(`copycat_${crafted_name}_to_${base_name}`, crafted, base, 1)
        break
      case 6:
        event.shaped(base, ['AA ', 'A A', ' AA'], { A: crafted }).id(`kubejs:copycat_${crafted_name}_to_${base_name}_shaped`)
        break
      case 8:
        eight(`copycat_${crafted_name}_to_${base_name}`, crafted, base, 1)
        break
    }
  })

  global.CORAL_TYPES.forEach(entry => {
    two_by_two(`dead_${entry}_coral_block`, `#kubejs:dead_${entry}_corals`, `minecraft:dead_${entry}_coral_block`, 1)
  })

  global.HORSE_ARMORS.forEach(entry => {
    const { name, material, armor } = entry
    event.shaped(
      armor,
      [
        '  A',
        'ABA',
        'ACA'
      ],
      {
        A: material,
        B: '#minecraft:wool',
        C: 'minecraft:leather_horse_armor'
      }
    ).id(`kubejs:${name}_horse_armor_shaped`)
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
      event.shaped(`6x ${stairs}`, ['  A', ' AA', 'AAA'], { A: block },).id(`kubejs:${name}_stairs_shaped`)
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