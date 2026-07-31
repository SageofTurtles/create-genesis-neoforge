const FLUID_MIXING_ID = 'kubejs:fluid_mixing'
const FLUID_MIXING_W = 124
const FLUID_MIXING_H = 68
const FLUID_MIXING_BADGE_X = FLUID_MIXING_W - 12
const FLUID_MIXING_BADGE_Y = 3

JEIAddedEvents.registerCategories(event => {
  const guiHelper = event.JEI_HELPERS.guiHelper

  event.custom(FLUID_MIXING_ID, category => {
    category
      .title('Fluid Conversion')
      .background(guiHelper.createBlankDrawable(FLUID_MIXING_W, FLUID_MIXING_H))
      .icon(guiHelper.createDrawableItemStack(Item.of('minecraft:lava_bucket')))

      .isRecipeHandled(recipe => !!(recipe && recipe.data))

      .handleLookup((builder, recipe) => {
        const d = recipe.data
        if (!d) return

        const hasThird = !!d.input3
        const rowY = hasThird ? 7 : 26

        if (d.input2) {
          JEIInfo.slot(builder, 'INPUT', 8, rowY, d.input1)
          JEIInfo.slot(builder, 'INPUT', 44, rowY, d.input2)
        } else {

          JEIInfo.slot(builder, 'INPUT', 26, rowY, d.input1)
        }

        if (hasThird) {
          JEIInfo.slot(builder, 'INPUT', 26, 44, d.input3)
        }

        JEIInfo.slot(builder, 'OUTPUT', 100, 26, d.output)
      })

      .setDrawHandler((recipe, slotsView, g, mouseX, mouseY) => {
        const d = recipe.data
        if (!d) return

        const hasThird = !!d.input3

        if (d.input2) {
          JEIInfo.plus(g, 34, hasThird ? 15 : 34)
        }

        if (hasThird) {
          JEIInfo.arrowDown(g, 34, 28, 14)
        }

        JEIInfo.arrowRight(g, 70, 34, 24)

        if (d.note) {
          JEIInfo.noteBadge(g, FLUID_MIXING_BADGE_X, FLUID_MIXING_BADGE_Y)
        }
      })

      .withTooltip((recipe, slotsView, mouseX, mouseY) => {
        const d = recipe.data

        if (d && d.note && JEIInfo.overNoteBadge(mouseX, mouseY, FLUID_MIXING_BADGE_X, FLUID_MIXING_BADGE_Y)) {
          return JEIInfo.tooltip(d.note)
        }

        return JEIInfo.tooltip([])
      })
  })
})

JEIAddedEvents.registerRecipes(event => {

  event.custom(FLUID_MIXING_ID)
    .add({
      type: 'fluid_mixing',
      input1: 'minecraft:lava',
      input2: 'minecraft:water',
      output: 'minecraft:cobblestone',
      note: 'When flowing lava touches water, it forms cobblestone.'
    })

    .add({
      type: 'fluid_mixing',
      input1: 'minecraft:lava',
      input2: 'minecraft:water',
      output: 'minecraft:stone',
      note: 'A water source block turns to stone when lava flows down on top of it.'
    })

    .add({
      type: 'fluid_mixing',
      input1: 'minecraft:lava',
      input2: 'minecraft:water',
      output: 'minecraft:obsidian',
      note: 'A lava source block turns to obsidian when touched by water.'
    })

    .add({
      type: 'fluid_mixing',
      input1: 'minecraft:lava',
      input2: 'minecraft:blue_ice',
      input3: 'minecraft:soul_soil',
      output: 'minecraft:basalt',
      note: 'When lava flows on top of soul soil while also touching blue ice, it turns to basalt.'
    })

    .add({
      type: 'fluid_mixing',
      input1: 'minecraft:lava',
      input2: 'create:chocolate',
      output: 'create:scoria',
      note: 'When flowing lava touches chocolate, it forms scoria.'
    })

    .add({
      type: 'fluid_mixing',
      input1: 'minecraft:lava',
      input2: 'create:honey',
      output: 'create:limestone',
      note: 'When flowing lava touches honey, it forms limestone.'
    })

    .add({
      type: 'fluid_mixing',
      input1: 'minecraft:lava',
      input2: 'aeronautics:levitite_blend',
      output: 'minecraft:calcite',
      note: 'When flowing lava touches levitite blend, it forms calcite.'
    })

  const molten_vents = [
    'asurine',
    'crimsite',
    'ochrum',
    'scorchia',
    'scoria',
    'veridium'
  ]

  molten_vents.forEach(entry => {
    event.custom(FLUID_MIXING_ID)
      .add({
        type: 'fluid_mixing',
        input1: 'minecraft:lava',
        input2: `molten_vents:active_molten_${entry}`,
        output: `create:${entry}`,
        note: `Lava turns to ${entry} when it touches an active ${entry} vent.`
      })
  })
})
