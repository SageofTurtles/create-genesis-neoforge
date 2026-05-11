// priority: 200

ServerEvents.tags('fluid', event => {
  // TAG FUNCTIONS
  const removeAll = (fluid) => {
    event.removeAllTagsFrom(fluid)
  }

  // BULK TAG CHANGES
  global.BLACKLISTED_FLUIDS.forEach(entry => {
    removeAll(entry)
  })
})
