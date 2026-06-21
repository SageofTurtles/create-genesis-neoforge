// priority: 100

ServerEvents.recipes(event => {
  // RECIPE FUNCTIONS
  const custom = (parameters) => { event.remove(parameters) }
  const id = (recipeId) => { event.remove({ id: recipeId }) }
  const input = (itemId) => { event.remove({ input: itemId }) }
  const mod = (modId) => { event.remove({ mod: modId }) }
  const output = (itemId) => { event.remove({ output: itemId }) }
  const type = (recipeType) => { event.remove({ type: recipeType }) }

  // BULK RECIPE CHANGES
  global.BLACKLISTED_ITEMS.forEach(entry => {
    input(entry)
    output(entry)
  })

  global.BLACKLISTED_REGEX_ITEMS.forEach(entry => {
    input(entry)
    output(entry)
  })

  global.BLACKLISTED_FLUIDS.forEach(entry => {
    input(Fluid.of(entry))
    output(Fluid.of(entry))
  })

  global.COPPER_BLOCKSETS.forEach(entry => {
    const { block, cut, chiseled, grate } = entry
    id(`minecraft:${cut}_from_${block}_stonecutting`)
    id(`minecraft:${chiseled}_from_${block}_stonecutting`)
    id(`minecraft:${grate}_from_${block}_stonecutting`)
    id(`minecraft:waxed_${cut}_from_waxed_${block}_stonecutting`)
    id(`minecraft:waxed_${chiseled}_from_waxed_${block}_stonecutting`)
    id(`minecraft:waxed_${grate}_from_waxed_${block}_stonecutting`)
  })

  global.CREATE_STONE_TYPES.forEach(entry => {
    id(`bits_n_bobs:${entry}_from_stone_types_${entry}_stonecutting`)
  })

  global.METAL_TRAPDOORS.forEach(entry => {
    const { name, material, trapdoor } = entry
    custom({
      type: 'minecraft:crafting_shaped',
      output: trapdoor
    })
  })

  global.STONECUTTING_BLOCKSETS.forEach(entry => {
    const { name, block, slab, stairs, wall } = entry
    custom([
      { type: 'create:cutting', output: slab },
      { type: 'minecraft:crafting_shaped', output: slab },
      { type: 'minecraft:stonecutting', output: slab }
    ])
    if (stairs != null) {
      custom([
        { type: 'create:cutting', output: stairs },
        { type: 'minecraft:crafting_shaped', output: stairs },
        { type: 'minecraft:stonecutting', output: stairs }
      ])
    }
    if (wall != null) {
      custom([
        { type: 'minecraft:crafting_shaped', output: wall },
        { type: 'minecraft:stonecutting', output: wall }
      ])
    }
  })

  global.WOOD_TYPES.forEach(entry => {
    custom({
      type: 'minecraft:crafting_shaped',
      output: `minecraft:${entry}_trapdoor`
    })
  })

  // TARGETED RECIPE CHANGES
  id('bits_n_bobs:dripstone_block_from_stone_types_dripstone_stonecutting')
  id('create_aquatic_ambitions:crushing/prismarine_bricks_to_lapis_and_copper')
  id('create_aquatic_ambitions:smelting/veridium')
  id('create_dragons_plus:ending/phantom_membrane_from_leathers')
  id('create:crushing/nether_gold_ore')
  id('create:crushing/ochrum_recycling')
  id('create:crushing/ochrum')
  id('create:crushing/prismarine_crystals')
  id('create:crushing/tuff_recycling')
  id('create:crushing/tuff')
  id('create:haunting/blackstone')
  id('create:haunting/lapis_recycling')
  id('create:mixing/lava_from_cobble')
  id('create:splashing/ice')
  id('createvintageneoforged:centrifugation/ender_eye')
  id('createvintageneoforged:hammering/netherite_ingot')
  id('decorative_blocks:dirt_from_rocky_dirt')
  id('decorative_blocks:rocky_dirt')
  id('farmersdelight:cake_from_milk_bottle')
  id('farmersdelight:paper_from_tree_bark')
  id('farmersdelight:wheat_dough_from_water')
  id('minecraft:dispenser')
  id('minecraft:dropper')
  id('minecraft:ender_eye')
  id('minecraft:lever')
  id('minecraft:lightning_rod')
  id('minecraft:netherite_ingot')
  id('minecraft:observer')
  id('minecraft:piston')
  id('minecraft:recovery_compass')
  id('terralith:cobblestone_from_stone_slab')
  id(/createaddition:charging\/deoxidize.*/)
  mod('mcwtrpdoors')
  output(/(create|copycats):copycat_.*/)
  type('createvintageneoforged:coiling')
  type('createvintageneoforged:curving_concave')
  type('createvintageneoforged:curving_convex')
  type('createvintageneoforged:laser_cutting')
  type('createvintageneoforged:polishing')
  type('createvintageneoforged:pressurizing')
  type('createvintageneoforged:turning')
  type('createvintageneoforged:vacuumizing')

  custom({
    mod: 'mcwdoors',
    not: [
      { id: /mcwdoors:garage_.*/ },
      { id: /mcwdoors:(iron|wooden)_portcullis/ }
    ]
  })

  custom({
    id: /create:.*_slab_recycling$/,
    type: 'minecraft:crafting_shapeless'
  })

  custom({
    id: /dndecor:.*_slab_recycling$/,
    type: 'minecraft:crafting_shapeless'
  })
})