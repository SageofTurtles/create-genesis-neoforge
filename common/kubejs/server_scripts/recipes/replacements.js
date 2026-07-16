// priority: 150

ServerEvents.recipes(event => {
  // BULK RECIPE CHANGES
  global.CORAL_TYPES.forEach(entry => {
    event.replaceInput(
      { id: `create_aquatic_ambitions:crafting/materials/${entry}_coral_block` },
      `minecraft:${entry}_coral`,
      `#kubejs:${entry}_corals`
    )
  })

  global.FURNITURE_DYEING.forEach(entry => {
    event.replaceInput({ type: 'minecraft:crafting_shapeless', input: `another_furniture:white_${entry}` }, `another_furniture:white_${entry}`, `#another_furniture:${entry}s`)
  })

  // TARGETED RECIPE CHANGES
  event.replaceInput({ id: 'bits_n_bobs:crafting/cogwheel_chain_carriage' }, '#minecraft:wool', 'farmersdelight:rope')
  event.replaceInput({ id: 'bits_n_bobs:crafting/flywheel_bearing' }, 'create:andesite_alloy', 'createdeco:industrial_iron_ingot')
  event.replaceInput({ id: 'create_aquatic_ambitions:crushing/prismarine_to_lapis' }, 'minecraft:prismarine', 'create_aquatic_ambitions:prismarine_alloy')
  event.replaceInput({ id: 'create:crafting/kinetics/rope_pulley' }, '#minecraft:wool', 'farmersdelight:rope')
  event.replaceInput({ id: 'create:crafting/schematics/schematicannon' }, 'minecraft:iron_block', 'create:industrial_iron_block')
  event.replaceInput({ id: 'create:mechanical_crafting/wand_of_symmetry' }, 'minecraft:ender_pearl', 'minecraft:echo_shard')
  event.replaceInput({ id: 'create:splashing/stained_glass_pane' }, '#c:glass_panes', '#kubejs:stained_glass_panes')
  event.replaceInput({ id: 'create:splashing/stained_glass' }, '#c:glass_blocks', '#kubejs:stained_glass')
  event.replaceInput({ id: 'minecraft:ender_chest' }, 'minecraft:ender_eye', 'minecraft:ender_pearl')
  event.replaceInput({ id: 'minecraft:lodestone' }, 'minecraft:netherite_ingot', 'minecraft:iron_ingot')
  event.replaceInput({ id: 'railways:crafting/remote_lens' }, 'minecraft:ender_eye', 'minecraft:ender_pearl')
  event.replaceInput({ input: 'mcwdoors:garage_white_door' }, 'mcwdoors:garage_white_door', '#kubejs:garage_doors')
  event.replaceInput({ output: 'createdeco:locked_copper_door' }, 'minecraft:copper_door', 'minecraft:waxed_copper_door')
  event.replaceInput({ output: 'dndecor:large_industrial_chain' }, 'create:industrial_iron_block', 'createdeco:industrial_iron_ingot')
  event.replaceInput({ output: 'sophisticatedbackpacks:everlasting_upgrade' }, 'minecraft:end_crystal', 'minecraft:echo_shard')
  event.replaceInput({ output: 'sophisticatedbackpacks:stack_upgrade_tier_4' }, 'minecraft:netherite_block', 'minecraft:netherite_ingot')
  event.replaceInput({ output: /dndecor:industrial_.*_bolt$/ }, 'create:industrial_iron_block', 'createdeco:industrial_iron_ingot')
  event.replaceInput({ output: /simulated:.*_handle$/ }, 'simulated:iron_handle', '#simulated:handle_variants')

  event.replaceInput(
    [{
      type: 'minecraft:crafting_shaped',
      not: [
        { id: 'create:crafting/schematics/schematicannon' }
      ]
    }, {
      type: 'minecraft:crafting_shapeless',
      not: [
        { id: 'createdeco:industrial_iron_ingot_from_industrial_iron_block' }
      ]
    }],
    'create:industrial_iron_block',
    'createdeco:industrial_iron_ingot'
  )
})
