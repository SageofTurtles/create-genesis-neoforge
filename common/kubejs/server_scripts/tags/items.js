// priority: 200

ServerEvents.tags('item', event => {
  // TAG FUNCTIONS
  const removeAll = (item) => {
    event.removeAllTagsFrom(item)
  }
  const add = (tag, item) => {
    event.add(tag, item)
  }
  const remove = (tag, item) => {
    event.remove(tag, item)
  }

  // BULK TAG CHANGES
  global.BLACKLISTED_ITEMS.forEach(entry => {
    removeAll(entry)
  })

  global.BLACKLISTED_REGEX_ITEMS.forEach(entry => {
    removeAll(entry)
  })

  global.CORAL_TYPES.forEach(entry => {
    add(`kubejs:${entry}_corals`, [`minecraft:${entry}_coral`, `minecraft:${entry}_coral_fan`])
    add(`kubejs:dead_${entry}_corals`, [`minecraft:dead_${entry}_coral`, `minecraft:dead_${entry}_coral_fan`])
  })

  global.STONE_TYPES.forEach(entry => {
    remove(entry, /.*_(wall|stairs)$/)
  })

  // TARGETED TAG CHANGES
  add('createaddition:plants', 'minecraft:poisonous_potato')
  add('dndecor:dark_metal_decor', ['create:industrial_iron_block', 'dndecor:industrial_plating_block'])
  add('kubejs:folding_doors', ['create:andesite_door', 'create:copper_door'])
  add('kubejs:garage_doors', /mcwdoors:garage_.*_door$/)
  add('kubejs:portable_engines', /^simulated:.*_portable_engine$/)
  add('kubejs:sliding_doors', ['create:brass_door', 'create:train_door', 'create:framed_glass_door'])
  add('kubejs:stained_glass_panes', /^minecraft:.*_stained_glass_pane$/)
  add('kubejs:stained_glass', /^minecraft:.*_stained_glass$/)
  add('kubejs:stone_pressure_plates', ['minecraft:stone_pressure_plate', 'minecraft:polished_blackstone_pressure_plate'])
  remove('dndecor:dark_metal_decor', ['dndecor:dark_metal_block_stairs', 'dndecor:dark_metal_brick_stairs'])
})
