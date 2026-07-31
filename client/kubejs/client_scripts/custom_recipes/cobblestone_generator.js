const COBBLE_GEN_ID = 'kubejs:cobblestone_generator'
const COBBLE_GEN_W = 126
const COBBLE_GEN_H = 60
const COBBLE_GEN_BADGE_X = COBBLE_GEN_W - 12
const COBBLE_GEN_BADGE_Y = 3

JEIAddedEvents.registerCategories(event => {
  const guiHelper = event.JEI_HELPERS.guiHelper

  event.custom(COBBLE_GEN_ID, category => {
    category
      .title('Stone Generation')
      .background(guiHelper.createBlankDrawable(COBBLE_GEN_W, COBBLE_GEN_H))
      .icon(guiHelper.createDrawableItemStack(Item.of('createcobblestone:mechanical_generator')))

      .isRecipeHandled(recipe => !!(recipe && recipe.data))

      .handleLookup((builder, recipe) => {
        const d = recipe.data
        if (!d) return

        JEIInfo.slot(builder, 'INPUT', 9, 8, d.input)
        JEIInfo.slot(builder, 'CATALYST', 46, 36, d.generator)
        JEIInfo.slot(builder, 'OUTPUT', 100, 36, d.output)
      })

      .setDrawHandler((recipe, slotsView, g, mouseX, mouseY) => {
        const d = recipe.data
        if (!d) return

        JEIInfo.arrowDownRight(g, 28, 24, 14)
        JEIInfo.arrowRight(g, 70, 44, 24)

        if (d.note) {
          JEIInfo.noteBadge(g, COBBLE_GEN_BADGE_X, COBBLE_GEN_BADGE_Y)
        }
      })

      .withTooltip((recipe, slotsView, mouseX, mouseY) => {
        const d = recipe.data

        if (d && d.note && JEIInfo.overNoteBadge(mouseX, mouseY, COBBLE_GEN_BADGE_X, COBBLE_GEN_BADGE_Y)) {
          return JEIInfo.tooltip(d.note)
        }

        return JEIInfo.tooltip([])
      })
  })
})

JEIAddedEvents.registerRecipes(event => {
  const stone_types = [
    'minecraft:cobblestone',
    'minecraft:stone',
    'minecraft:basalt',
    'minecraft:calcite',
    'create:scoria',
    'create:limestone'
  ]

  stone_types.forEach(entry => {
    event.custom(COBBLE_GEN_ID)
      .add({
        type: 'cobblestone_generator',
        input: entry,
        generator: 'createcobblestone:mechanical_generator',
        output: entry,
        note: 'Right-click a Mechanical Generator\'s filter slot with the item to set its output.'
      })
  })
})
