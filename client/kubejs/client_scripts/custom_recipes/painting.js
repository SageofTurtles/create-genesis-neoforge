const PAINTING_ID = 'kubejs:painting'
const PAINTING_W = 100
const PAINTING_H = 82
const PAINTING_BADGE_X = PAINTING_W - 12
const PAINTING_BADGE_Y = 3


const PAINTING_LEFT_CX = 28
const PAINTING_RIGHT_CX = 64

JEIAddedEvents.registerCategories(event => {
  const guiHelper = event.JEI_HELPERS.guiHelper

  event.custom(PAINTING_ID, category => {
    category
      .title('Locometal Painting')
      .background(guiHelper.createBlankDrawable(PAINTING_W, PAINTING_H))
      .icon(guiHelper.createDrawableItemStack(Item.of('railways:paint_brush')))

      .isRecipeHandled(recipe => !!(recipe && recipe.data))

      .handleLookup((builder, recipe) => {
        const d = recipe.data
        if (!d) return

        JEIInfo.slot(builder, 'INPUT', 20, 25, d.main_hand)
        JEIInfo.slot(builder, 'INPUT', 56, 25, d.off_hand)
        JEIInfo.slot(builder, 'INPUT', 20, 59, d.block)
        JEIInfo.slot(builder, 'OUTPUT', 75, 59, d.output)
      })

      .setDrawHandler((recipe, slotsView, g, mouseX, mouseY) => {
        const d = recipe.data
        if (!d) return

        JEIInfo.textCentered(g, 'Main', PAINTING_LEFT_CX, 3)
        JEIInfo.textCentered(g, 'Hand', PAINTING_LEFT_CX, 13)
        JEIInfo.textCentered(g, 'Off', PAINTING_RIGHT_CX, 3)
        JEIInfo.textCentered(g, 'Hand', PAINTING_RIGHT_CX, 13)

        JEIInfo.plus(g, 46, 33)
        JEIInfo.arrowDown(g, 46, 45, 11)
        JEIInfo.arrowRight(g, 44, 67, 24)

        if (d.note) {
          JEIInfo.noteBadge(g, PAINTING_BADGE_X, PAINTING_BADGE_Y)
        }
      })

      .withTooltip((recipe, slotsView, mouseX, mouseY) => {
        const d = recipe.data

        if (d && d.note && JEIInfo.overNoteBadge(mouseX, mouseY, PAINTING_BADGE_X, PAINTING_BADGE_Y)) {
          return JEIInfo.tooltip(d.note)
        }

        return JEIInfo.tooltip([])
      })
  })
})

JEIAddedEvents.registerRecipes(event => {

  global.LOCOMETAL_DYE_GROUPS.forEach(entry => {
    const { item, tag } = entry
    for (let color of global.LOCOMETAL_PAINT_COLORS) {
      if (color == 'sandy') {
        event.custom(PAINTING_ID)
          .add({
            type: 'painting',
            main_hand: [
              'railways:paint_brush',
              'create:potato_cannon'
            ],
            off_hand: `railways:${color}_paint_pitcher`,
            block: `#railways:palettes/dye_groups/${tag}`,
            output: `railways:${item}`,
            note: 'Right-click on a locometal block with a paintbrush to paint it, or use a potato cannon to launch paint from a distance.'
          })
      } else {
        event.custom(PAINTING_ID)
          .add({
            type: 'painting',
            main_hand: [
              'railways:paint_brush',
              'create:potato_cannon'
            ],
            off_hand: `railways:${color}_paint_pitcher`,
            block: `#railways:palettes/dye_groups/${tag}`,
            output: `railways:${color}_${item}`,
            note: 'Right-click on a locometal block with a paintbrush to paint it, or use a potato cannon to launch paint from a distance.'
          })
      }
    }
  })
})
