// priority: 200

ServerEvents.tags('block', event => {
  // TAG FUNCTIONS
  const removeAllTags = (block) => {
    event.removeAllTagsFrom(block)
  }
  const removeAllBlocks = (tag) => {
    event.removeAll(tag)
  }

  // BULK TAG CHANGES
  global.BLACKLISTED_ITEMS.forEach(entry => {
    removeAllTags(entry)
  })
  global.BLACKLISTED_REGEX_ITEMS.forEach(entry => {
    removeAllTags(entry)
  })
  removeAllBlocks('minecraft:enderman_holdable')
})
