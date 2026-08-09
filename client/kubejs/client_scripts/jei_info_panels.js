RecipeViewerEvents.addInformation('item', event => {
  event.add('minecraft:goat_horn', [
    'If a goat charges a player or mob, but the target steps aside and the goat rams a naturally occuring log, ore, stone, or packed ice block, it will drop one of its horns.'
  ])
  event.add('minecraft:suspicious_stew', [
    'Right-click on a brown mooshroom with an empty bowl after feeding it a flower to get suspicious stew. The stew\'s effect is determined by the type of flower used.'
  ])
  event.add(['minecraft:brown_mushroom', 'farmersdelight:brown_mushroom_colony'], [
    'When planted on rich soil, a brown mushroom will eventually grow into a brown mushroom colony.'
  ])
  event.add(['minecraft:red_mushroom', 'farmersdelight:red_mushroom_colony'], [
    'When planted on rich soil, a red mushroom will eventually grow into a red mushroom colony.'
  ])
  event.add(Ingredient.of('@molten_vents'), [
    'A dormant molten vent can be made active by detonating it with TNT. Active vents will convert lava into their matching stone type upon contact.\n\nVents can be found on land, but are more common at the bottom of the ocean.'
  ])
  event.add('aeronautics:music_disc_cloud_skipper', [
    'Drop a music disc through the clouds and it will transform into a Cloud Skipper disc!'
  ])
})