// priority: 200

ServerEvents.tags('item', event => {
  // TAG FUNCTIONS
  const removeAll = (item) => {
    event.removeAllTagsFrom(item)
  }
  const add = (tag, item) => {
    event.add(tag, item)
  }

  // BULK TAG CHANGES
  global.BLACKLISTED_ITEMS.forEach(entry => {
    removeAll(entry)
  })
  global.BLACKLISTED_REGEX_ITEMS.forEach(entry => {
    removeAll(entry)
  })
  global.CORAL_TYPES.forEach(entry => {
    add(`genesis:${entry}_corals`, [`minecraft:${entry}_coral`, `minecraft:${entry}_coral_fan`])
    add(`genesis:dead_${entry}_corals`, [`minecraft:dead_${entry}_coral`, `minecraft:dead_${entry}_coral_fan`])
  })

  // TARGETED TAG CHANGES
  add('genesis:folding_doors', ['create:andesite_door', 'create:copper_door'])
  add('genesis:sliding_doors', ['create:brass_door', 'create:train_door', 'create:framed_glass_door'])
  add('genesis:stone_pressure_plates', ['minecraft:stone_pressure_plate', 'minecraft:polished_blackstone_pressure_plate'])
})
