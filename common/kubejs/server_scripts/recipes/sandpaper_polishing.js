ServerEvents.recipes(event => {
  // RECIPE FUNCTION
  const add = (recipeId, input, output) => {
    event.recipes.create.sandpaper_polishing(
      output, input
    ).id(`kubejs:${recipeId}_sandpaper_polishing`)
  }

  // RECIPE CHANGES
  add('music_disc', Ingredient.of('#c:music_discs'), 'kubejs:blank_music_disc')
})
