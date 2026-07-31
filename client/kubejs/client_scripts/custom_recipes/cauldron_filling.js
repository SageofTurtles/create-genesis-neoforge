const CAULDRON_FILL_ID = 'kubejs:cauldron_filling'
const CAULDRON_FILL_W = 90
const CAULDRON_FILL_H = 86
const CAULDRON_FILL_BADGE_X = CAULDRON_FILL_W - 12
const CAULDRON_FILL_BADGE_Y = 3

JEIAddedEvents.registerCategories(event => {
  const guiHelper = event.JEI_HELPERS.guiHelper

  event.custom(CAULDRON_FILL_ID, category => {
    category
      .title('Cauldron Filling')
      .background(guiHelper.createBlankDrawable(CAULDRON_FILL_W, CAULDRON_FILL_H))
      .icon(guiHelper.createDrawableItemStack(Item.of('minecraft:cauldron')))

      .isRecipeHandled(recipe => !!(recipe && recipe.data))

      .handleLookup((builder, recipe) => {
        const d = recipe.data
        if (!d) return

        JEIInfo.slot(builder, 'INPUT', 11, 6, d.input)
        JEIInfo.slot(builder, 'CATALYST', 11, 35, d.dripstone || 'minecraft:pointed_dripstone')
        JEIInfo.slot(builder, 'CATALYST', 11, 64, d.cauldron || 'minecraft:cauldron')
        JEIInfo.slot(builder, 'OUTPUT', 67, 64, d.output)
      })

      .setDrawHandler((recipe, slotsView, g, mouseX, mouseY) => {
        const d = recipe.data
        if (!d) return

        JEIInfo.arrowDown(g, 19, 24, 9)
        JEIInfo.arrowDown(g, 19, 53, 9)
        JEIInfo.arrowRight(g, 36, 72, 24)

        if (d.note) {
          JEIInfo.noteBadge(g, CAULDRON_FILL_BADGE_X, CAULDRON_FILL_BADGE_Y)
        }
      })

      .withTooltip((recipe, slotsView, mouseX, mouseY) => {
        const d = recipe.data

        if (d && d.note && JEIInfo.overNoteBadge(mouseX, mouseY, CAULDRON_FILL_BADGE_X, CAULDRON_FILL_BADGE_Y)) {
          return JEIInfo.tooltip(d.note)
        }

        return JEIInfo.tooltip([])
      })
  })
})

JEIAddedEvents.registerRecipes(event => {
  event.custom(CAULDRON_FILL_ID)

    .add({
      type: 'cauldron_filling',
      input: 'minecraft:lava',
      output: 'minecraft:lava',
      note: 'A lava source above pointed dripstone slowly fills a cauldron beneath it.'
    })

    .add({
      type: 'cauldron_filling',
      input: 'minecraft:water',
      output: 'minecraft:water',
      note: 'A water source above pointed dripstone slowly fills a cauldron beneath it.'
    })

    .add({
      type: 'cauldron_filling',
      input: 'create_dragons_plus:dragon_breath',
      output: 'create_dragons_plus:dragon_breath',
      note: 'A dragon\'s breath source above pointed dripstone slowly fills a cauldron beneath it.'
    })
})
