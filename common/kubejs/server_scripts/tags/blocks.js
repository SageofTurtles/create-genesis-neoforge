// priority: 200

ServerEvents.tags('block', event => {
  // TAG FUNCTIONS
  const removeAll = (block) => {
    event.removeAllTagsFrom(block)
  }

  // BULK TAG CHANGES
  global.BLACKLISTED_ITEMS.forEach(entry => {
    removeAll(entry)
  })
})
