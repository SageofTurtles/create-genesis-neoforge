ServerEvents.recipes(event => {
  // BULK RECIPE CHANGES
  global.CORAL_TYPES.forEach(entry => {
    event.replaceInput(
      { id: `create_aquatic_ambitions:crafting/materials/${entry}_coral_block` },
      `minecraft:${entry}_coral`,
      `#genesis:${entry}_corals`
    )
  })

  // TARGETED RECIPE CHANGES
  event.replaceInput({ id: 'create:mechanical_crafting/wand_of_symmetry' }, 'minecraft:ender_pearl', 'minecraft:echo_shard')
  event.replaceInput({ id: 'minecraft:ender_chest' }, 'minecraft:ender_eye', 'minecraft:ender_pearl')
  event.replaceInput({ id: 'minecraft:lodestone' }, 'minecraft:netherite_ingot', 'minecraft:iron_ingot')
  event.replaceInput({ id: 'railways:crafting/remote_lens' }, 'minecraft:ender_eye', 'minecraft:ender_pearl')
  event.replaceInput({ output: 'createdeco:locked_copper_door' }, 'minecraft:copper_door', 'minecraft:waxed_copper_door')
})