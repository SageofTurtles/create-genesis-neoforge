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

  global.BACKPACK_UPGRADES.forEach(entry => {
    output(`sophisticatedbackpacks:${entry}_upgrade`)
  })

  global.COPPER_BLOCKSETS_VANILLA.forEach(entry => {
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

  global.METAL_FLOORS.forEach(entry => {
    const { base, floor } = entry
    output(floor)
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

  global.WOOD_ROOFS.forEach(entry => {
    const { type, material } = entry
    output(`mcwroofs:${type}_roof`)
    output(`mcwroofs:${type}_attic_roof`)
    output(`mcwroofs:${type}_top_roof`)
    output(`mcwroofs:${type}_lower_roof`)
    output(`mcwroofs:${type}_steep_roof`)
    output(`mcwroofs:${type}_upper_lower_roof`)
    output(`mcwroofs:${type}_upper_steep_roof`)
  })

  global.WOOD_TYPES.forEach(entry => {
    custom({
      type: 'minecraft:crafting_shaped',
      output: `minecraft:${entry}_trapdoor`
    })
  })

  // TARGETED RECIPE CHANGES
  id('bits_n_bobs:dripstone_block_from_stone_types_dripstone_stonecutting')
  id('comforts:rope_and_nail')
  id('create_aquatic_ambitions:crafting/materials/prismarine_alloy')
  id('create_aquatic_ambitions:crushing/prismarine_bricks_to_lapis_and_copper')
  id('create_aquatic_ambitions:mixing/prismarine_alloy')
  id('create_aquatic_ambitions:smelting/veridium')
  id('create_dragons_plus:ending/phantom_membrane_from_leathers')
  id('create:crafting/curiosities/peculiar_bell')
  id('create:crafting/kinetics/item_vault')
  id('create:crafting/materials/rose_quartz_tiles_from_conversion')
  id('create:crafting/materials/small_rose_quartz_tiles_from_conversion')
  id('create:crushing/amethyst_block')
  id('create:crushing/glowstone')
  id('create:crushing/nether_gold_ore')
  id('create:crushing/netherrack')
  id('create:crushing/ochrum_recycling')
  id('create:crushing/prismarine_crystals')
  id('create:crushing/tuff_recycling')
  id('create:crushing/tuff')
  id('create:crushing/wool')
  id('create:haunting/blackstone')
  id('create:haunting/lapis_recycling')
  id('create:industrial_iron_block_from_ingots_iron_stonecutting')
  id('create:milling/clay')
  id('create:milling/sandstone')
  id('create:milling/wool')
  id('create:mixing/andesite_alloy_from_zinc')
  id('create:mixing/andesite_alloy')
  id('create:mixing/brass_ingot')
  id('create:mixing/lava_from_cobble')
  id('create:rose_quartz_block_from_rose_quartz_stonecutting')
  id('create:rose_quartz_tiles_from_polished_rose_quartz_stonecutting')
  id('create:small_rose_quartz_tiles_from_polished_rose_quartz_stonecutting')
  id('create:splashing/gravel')
  id('create:splashing/ice')
  id('create:splashing/red_sand')
  id('create:splashing/soul_sand')
  id('create:weathered_iron_block_from_ingots_iron_stonecutting')
  id('create:weathered_iron_window')
  id('createvintageneoforged:centrifugation/ender_eye')
  id('createvintageneoforged:hammering/netherite_ingot')
  id('createvintageneoforged:vibrating/snow')
  id('decorative_blocks:dirt_from_rocky_dirt')
  id('decorative_blocks:rocky_dirt')
  id('dndecor:copper_floor_from_ingots_copper_stonecutting')
  id('dndecor:crafting/dark_metal_block_from_dark_metal_block')
  id('dndecor:crafting/industrial_cogwheel')
  id('dndecor:crafting/large_industrial_cogwheel')
  id('dndecor:dark_metal_block_from_dark_metal_plating_stonecutting')
  id('dndecor:dark_metal_block_from_industrial_iron_block_stonecutting')
  id('dndecor:dark_metal_bricks_from_industrial_iron_block_stonecutting')
  id('dndecor:dark_metal_plating_from_dark_metal_block_stonecutting')
  id('dndecor:dark_metal_plating_from_industrial_iron_block_stonecutting')
  id('dndecor:industrial_plating_block_from_ingots_iron_stonecutting')
  id('dndecor:splashing/velvet_block')
  id('farmersdelight:cake_from_milk_bottle')
  id('farmersdelight:integration/create/mixing/tomato_sauce_from_mixing')
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
  id('railways:stonecutting/riveted_locometal')
  id('simulated:rope_coupling')
  id('terralith:cobblestone_from_stone_slab')
  id(/create:copper_(shingles|tiles)_from_ingots_copper_stonecutting/)
  id(/create:crushing\/(asurine|crimsite|ochrum|veridium)$/)
  id(/createaddition:charging\/deoxidize.*/)
  id(/createdeco:.*_hull$/)
  mod('createmetalwork')
  mod('mcwtrpdoors')
  output('another_furniture:service_bell')
  output('create_aquatic_ambitions:prismarine_alloy_rod')
  output('create_mob_spawners:mechanical_spawner')
  output('create:industrial_iron_window')
  output('decorative_blocks:bar_panel')
  output('dndecor:beam')
  output('dndecor:diagonal_metal_support')
  output('dndecor:large_metal_girder')
  output('dndecor:metal_support')
  output('minecraft:chain')
  output('minecraft:nether_wart')
  output('numismatics:banking_guide')
  output('railways:conductor_vent')
  output('rechiseledcreate:mechanical_chisel')
  output('simulated:spring')
  output('sophisticatedbackpacks:advanced_tool_swapper_upgrade')
  output(/(create|copycats):copycat_.*/)
  output(/sophisticatedbackpacks:(tank|battery|pump|filter|deposit|restock)_upgrade/)
  type('createvintageneoforged:coiling')
  type('createvintageneoforged:curving_concave')
  type('createvintageneoforged:curving_convex')
  type('createvintageneoforged:laser_cutting')
  type('createvintageneoforged:polishing')
  type('createvintageneoforged:pressurizing')
  type('createvintageneoforged:turning')
  type('createvintageneoforged:vacuumizing')

  custom({
    output: /dndecor:.*sheet_metal$/,
    type: 'minecraft:stonecutting'
  })

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

  custom({
    id: /minecraft:(andesite|brass|copper|iron|industrial_iron|zinc)_bars_overlay/,
    type: 'minecraft:crafting_shaped'
  })

  custom({
    id: /minecraft:(andesite|brass|iron|industrial_iron|zinc)_bars/,
    type: 'minecraft:crafting_shaped'
  })

  custom({
    id: /minecraft:.*_catwalk.*/,
    type: 'minecraft:stonecutting'
  })

  custom({
    id: /minecraft:.*_support_wedge_from_stonecutting$/,
    type: 'minecraft:stonecutting'
  })
})