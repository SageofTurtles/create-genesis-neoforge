const BLOCK_INTERACTION_ID = 'kubejs:block_interaction'
const BLOCK_INTERACTION_W = 126
const BLOCK_INTERACTION_H = 60
const BLOCK_INTERACTION_BADGE_X = BLOCK_INTERACTION_W - 12
const BLOCK_INTERACTION_BADGE_Y = 3

JEIAddedEvents.registerCategories(event => {
  const guiHelper = event.JEI_HELPERS.guiHelper

  event.custom(BLOCK_INTERACTION_ID, category => {
    category
      .title('Block Interaction')
      .background(guiHelper.createBlankDrawable(BLOCK_INTERACTION_W, BLOCK_INTERACTION_H))
      .icon(guiHelper.createDrawableItemStack(Item.of('create_enchantment_industry:super_experience_block')))

      .isRecipeHandled(recipe => !!(recipe && recipe.data))

      .handleLookup((builder, recipe) => {
        const d = recipe.data
        if (!d) return

        JEIInfo.slot(builder, 'INPUT', 9, 8, d.item)
        JEIInfo.slot(builder, 'INPUT', 46, 36, d.block)
        JEIInfo.slot(builder, 'OUTPUT', 100, 36, d.output)
      })

      .setDrawHandler((recipe, slotsView, g, mouseX, mouseY) => {
        const d = recipe.data
        if (!d) return

        JEIInfo.arrowDownRight(g, 28, 24, 14)
        JEIInfo.arrowRight(g, 70, 44, 24)

        if (d.note) {
          JEIInfo.noteBadge(g, BLOCK_INTERACTION_BADGE_X, BLOCK_INTERACTION_BADGE_Y)
        }
      })

      .withTooltip((recipe, slotsView, mouseX, mouseY) => {
        const d = recipe.data

        if (d && d.note && JEIInfo.overNoteBadge(mouseX, mouseY, BLOCK_INTERACTION_BADGE_X, BLOCK_INTERACTION_BADGE_Y)) {
          return JEIInfo.tooltip(d.note)
        }

        return JEIInfo.tooltip([])
      })
  })
})

JEIAddedEvents.registerRecipes(event => {
  event.custom(BLOCK_INTERACTION_ID)

    .add({
      type: 'block_interaction',
      item: '#minecraft:hoes',
      block: [
        'minecraft:grass_block',
        'minecraft:dirt',
        'minecraft:dirt_path'
      ],
      output: 'minecraft:farmland',
      note: 'Right-click on block with hoe to convert it into farmland for crops.'
    })

    .add({
      type: 'block_interaction',
      item: '#minecraft:hoes',
      block: 'farmersdelight:rich_soil',
      output: 'farmersdelight:rich_soil_farmland',
      note: 'Right-click on block with hoe to convert it into rich farmland for crops.'
    })

    .add({
      type: 'block_interaction',
      item: '#minecraft:hoes',
      block: [
        'minecraft:coarse_dirt',
        'minecraft:rooted_dirt'
      ],
      output: 'minecraft:dirt',
      note: 'Right-click on block with hoe to convert it into dirt.'
    })

    .add({
      type: 'block_interaction',
      item: '#minecraft:shovels',
      block: [
        'minecraft:grass_block',
        'minecraft:dirt',
        'minecraft:coarse_dirt',
        'minecraft:podzol',
        'minecraft:mycelium',
        'minecraft:rooted_dirt'
      ],
      output: 'minecraft:dirt_path',
      note: 'Right-click on block with shovel to convert it into dirt path.'
    })

    .add({
      type: 'block_interaction',
      item: 'minecraft:shears',
      block: 'minecraft:pumpkin',
      output: 'minecraft:carved_pumpkin',
      note: 'Right-click on pumpkin with shears to convert it into a carved pumpkin.'
    })

    .add({
      type: 'block_interaction',
      item: 'minecraft:shears',
      block: 'minecraft:pumpkin',
      output: 'minecraft:pumpkin_seeds',
      note: 'Drops 4 pumpkin seeds'
    })

    .add({
      type: 'block_interaction',
      item: 'minecraft:shears',
      block: [
        'minecraft:bee_nest',
        'minecraft:beehive'
      ],
      output: 'minecraft:honeycomb',
      note: 'Right-click on a full beehive or bee nest with shears to extract honeycomb.'
    })

    .add({
      type: 'block_interaction',
      item: 'minecraft:glass_bottle',
      block: [
        'minecraft:bee_nest',
        'minecraft:beehive'
      ],
      output: 'minecraft:honey_bottle',
      note: 'Right-click on a full beehive or bee nest with a glass bottle to extract honey.'
    })

    .add({
      type: 'block_interaction',
      item: 'minecraft:lightning_rod',
      block: 'create:experience_block',
      output: 'create_enchantment_industry:super_experience_block',
      note: 'When lightning strikes a block of experience, it has a chance to transform into super experience.'
    })

    .add({
      type: 'block_interaction',
      block: 'farmersdelight:rice_roll_medley_block',
      output: [
        'farmersdelight:kelp_roll_slice',
        'farmersdelight:salmon_roll',
        'farmersdelight:cod_roll'
      ],
      note: 'Right-click on the meal with an empty hand to take a serving.'
    })

  global.FEAST_MEALS.forEach(entry => {
    const { mod, block, serving } = entry
    event.custom(BLOCK_INTERACTION_ID)
      .add({
        type: 'block_interaction',
        item: 'minecraft:bowl',
        block: `${mod}:${block}`,
        output: `${mod}:${serving}`,
        note: 'Right-click on the meal with a bowl to take a serving.'
      })
  })
})
