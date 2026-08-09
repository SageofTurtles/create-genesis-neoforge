const MOB_INTERACTION_ID = 'kubejs:mob_interaction'
const MOB_INTERACTION_W = 126
const MOB_INTERACTION_H = 60
const MOB_INTERACTION_BADGE_X = MOB_INTERACTION_W - 12
const MOB_INTERACTION_BADGE_Y = 3

JEIAddedEvents.registerCategories(event => {
  const guiHelper = event.JEI_HELPERS.guiHelper

  event.custom(MOB_INTERACTION_ID, category => {
    category
      .title('Mob Interaction')
      .background(guiHelper.createBlankDrawable(MOB_INTERACTION_W, MOB_INTERACTION_H))
      .icon(guiHelper.createDrawableItemStack(Item.of('minecraft:milk_bucket')))

      .isRecipeHandled(recipe => !!(recipe && recipe.data))

      .handleLookup((builder, recipe) => {
        const d = recipe.data
        if (!d) return

        JEIInfo.slot(builder, 'INPUT', 9, 8, d.item)
        JEIInfo.slot(builder, 'INPUT', 46, 36, d.spawn_egg)
        JEIInfo.slot(builder, 'OUTPUT', 100, 36, d.output)
      })

      .setDrawHandler((recipe, slotsView, g, mouseX, mouseY) => {
        const d = recipe.data
        if (!d) return

        JEIInfo.arrowDownRight(g, 28, 24, 14)
        JEIInfo.arrowRight(g, 70, 44, 24)

        if (d.note) {
          JEIInfo.noteBadge(g, MOB_INTERACTION_BADGE_X, MOB_INTERACTION_BADGE_Y)
        }
      })

      .withTooltip((recipe, slotsView, mouseX, mouseY) => {
        const d = recipe.data

        if (d && d.note && JEIInfo.overNoteBadge(mouseX, mouseY, MOB_INTERACTION_BADGE_X, MOB_INTERACTION_BADGE_Y)) {
          return JEIInfo.tooltip(d.note)
        }

        return JEIInfo.tooltip([])
      })
  })
})

JEIAddedEvents.registerRecipes(event => {
  event.custom(MOB_INTERACTION_ID)

    .add({
      type: 'mob_interaction',
      item: 'minecraft:bucket',
      spawn_egg: [
        'minecraft:cow_spawn_egg',
        'minecraft:goat_spawn_egg',
        'minecraft:mooshroom_spawn_egg'
      ],
      output: 'minecraft:milk_bucket',
      note: 'Right-click on a cow, goat, or mooshroom with an empty bucket to milk it.'
    })

    .add({
      type: 'mob_interaction',
      item: 'minecraft:bowl',
      spawn_egg: 'minecraft:mooshroom_spawn_egg',
      output: 'minecraft:mushroom_stew',
      note: 'Right-click on a mooshroom with an empty bowl to get mushroom stew.'
    })

    .add({
      type: 'mob_interaction',
      item: 'minecraft:brush',
      spawn_egg: 'minecraft:armadillo_spawn_egg',
      output: 'minecraft:armadillo_scute',
      note: 'Armadillos drop their scutes when brushed.'
    })

    .add({
      type: 'mob_interaction',
      item: 'minecraft:shears',
      spawn_egg: 'minecraft:sheep_spawn_egg',
      output: '#minecraft:wool',
      note: 'Adult sheep can be sheared and drop 1-3 wool matching their color.'
    })

    .add({
      type: 'mob_interaction',
      item: 'minecraft:shears',
      spawn_egg: 'minecraft:mooshroom_spawn_egg',
      output: 'minecraft:red_mushroom',
      note: 'A red mooshroom can be sheared and drops 5 red mushrooms.'
    })

    .add({
      type: 'mob_interaction',
      item: 'minecraft:shears',
      spawn_egg: 'minecraft:mooshroom_spawn_egg',
      output: 'minecraft:brown_mushroom',
      note: 'A brown mooshroom can be sheared and drops 5 brown mushrooms.'
    })

    .add({
      type: 'mob_interaction',
      item: 'minecraft:shears',
      spawn_egg: 'minecraft:bogged_spawn_egg',
      output: [
        'minecraft:red_mushroom',
        'minecraft:brown_mushroom'
      ],
      note: 'A bogged will drop two mushrooms when sheared.'
    })

    .add({
      type: 'mob_interaction',
      item: 'minecraft:wither_spawn_egg',
      spawn_egg: '#kubejs:spawn_eggs',
      output: 'minecraft:wither_rose',
      note: 'When a wither kills a mob, it drops a wither rose.'
    })
})
