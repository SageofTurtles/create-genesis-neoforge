RecipeViewerEvents.removeEntriesCompletely('item', event => {
  global.BLACKLISTED_ITEMS.forEach(entry => {
    event.remove(entry)
  })
  global.BLACKLISTED_REGEX_ITEMS.forEach(entry => {
    event.remove(entry)
  })
})

RecipeViewerEvents.removeEntriesCompletely('fluid', event => {
  global.BLACKLISTED_FLUIDS.forEach(entry => {
    event.remove(entry)
  })
})

RecipeViewerEvents.removeCategories(event => {
  event.remove('create_dragons_plus:sanding')
})
