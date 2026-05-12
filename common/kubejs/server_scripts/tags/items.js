// priority: 200

ServerEvents.tags('item', event => {
  // TAG FUNCTIONS
  const removeAll = (item) => {
    event.removeAllTagsFrom(item)
  }

  // BULK TAG CHANGES
  global.BLACKLISTED_ITEMS.forEach(entry => {
    removeAll(entry)
  })
  global.BLACKLISTED_REGEX_ITEMS.forEach(entry => {
    removeAll(entry)
  })
})
