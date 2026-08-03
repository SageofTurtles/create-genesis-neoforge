JEIAddedEvents.registerRecipeCatalysts(event => {
  let addRecipeCatalyst = 'addRecipeCatalyst(net.minecraft.world.item.ItemStack,mezz.jei.api.recipe.RecipeType[])'

  // BLASTING
  let BLASTING = event.data.jeiHelpers.getRecipeType('create:fan_blasting').get()
  event.data[addRecipeCatalyst]('minecraft:lava_bucket', BLASTING)
  event.data[addRecipeCatalyst]('create_connected:fan_blasting_catalyst', BLASTING)

  // SMOKING
  let SMOKING = event.data.jeiHelpers.getRecipeType('create:fan_smoking').get()
  event.data[addRecipeCatalyst]('minecraft:campfire', SMOKING)
  event.data[addRecipeCatalyst]('create_connected:fan_smoking_catalyst', SMOKING)

  // HAUNTING
  let HAUNTING = event.data.jeiHelpers.getRecipeType('create:fan_haunting').get()
  event.data[addRecipeCatalyst]('minecraft:soul_campfire', HAUNTING)
  event.data[addRecipeCatalyst]('create_connected:fan_haunting_catalyst', HAUNTING)

  // SPLASHING
  let SPLASHING = event.data.jeiHelpers.getRecipeType('create:fan_washing').get()
  event.data[addRecipeCatalyst]('minecraft:water_bucket', SPLASHING)
  event.data[addRecipeCatalyst]('create_connected:fan_splashing_catalyst', SPLASHING)

  // ENDING
  let ENDING = event.data.jeiHelpers.getRecipeType('create_dragons_plus:ending').get()
  event.data[addRecipeCatalyst]('minecraft:dragon_head', ENDING)
  event.data[addRecipeCatalyst]('minecraft:dragon_breath', ENDING)
  event.data[addRecipeCatalyst]('create_dragons_plus:dragon_breath_bucket', ENDING)
  event.data[addRecipeCatalyst]('create_connected:fan_ending_catalyst_dragons_breath', ENDING)
  event.data[addRecipeCatalyst]('create_connected:fan_ending_catalyst_dragon_head', ENDING)

  // FREEZING
  let FREEZING = event.data.jeiHelpers.getRecipeType('create_dragons_plus:freezing').get()
  event.data[addRecipeCatalyst]('minecraft:powder_snow_bucket', FREEZING)
  event.data[addRecipeCatalyst]('create_connected:fan_freezing_catalyst', FREEZING)

  // COLORING
  let COLORING = event.data.jeiHelpers.getRecipeType('create_dragons_plus:coloring').get()
  event.data[addRecipeCatalyst]('create_dragons_plus:white_dye_bucket', COLORING)
  event.data[addRecipeCatalyst]('create_dragons_plus:light_gray_dye_bucket', COLORING)
  event.data[addRecipeCatalyst]('create_dragons_plus:gray_dye_bucket', COLORING)
  event.data[addRecipeCatalyst]('create_dragons_plus:black_dye_bucket', COLORING)
  event.data[addRecipeCatalyst]('create_dragons_plus:brown_dye_bucket', COLORING)
  event.data[addRecipeCatalyst]('create_dragons_plus:red_dye_bucket', COLORING)
  event.data[addRecipeCatalyst]('create_dragons_plus:orange_dye_bucket', COLORING)
  event.data[addRecipeCatalyst]('create_dragons_plus:yellow_dye_bucket', COLORING)
  event.data[addRecipeCatalyst]('create_dragons_plus:lime_dye_bucket', COLORING)
  event.data[addRecipeCatalyst]('create_dragons_plus:green_dye_bucket', COLORING)
  event.data[addRecipeCatalyst]('create_dragons_plus:cyan_dye_bucket', COLORING)
  event.data[addRecipeCatalyst]('create_dragons_plus:light_blue_dye_bucket', COLORING)
  event.data[addRecipeCatalyst]('create_dragons_plus:blue_dye_bucket', COLORING)
  event.data[addRecipeCatalyst]('create_dragons_plus:purple_dye_bucket', COLORING)
  event.data[addRecipeCatalyst]('create_dragons_plus:magenta_dye_bucket', COLORING)
  event.data[addRecipeCatalyst]('create_dragons_plus:pink_dye_bucket', COLORING)
  event.data[addRecipeCatalyst]('create_connected:white_fan_dyeing_catalyst', COLORING)
  event.data[addRecipeCatalyst]('create_connected:light_gray_fan_dyeing_catalyst', COLORING)
  event.data[addRecipeCatalyst]('create_connected:gray_fan_dyeing_catalyst', COLORING)
  event.data[addRecipeCatalyst]('create_connected:black_fan_dyeing_catalyst', COLORING)
  event.data[addRecipeCatalyst]('create_connected:brown_fan_dyeing_catalyst', COLORING)
  event.data[addRecipeCatalyst]('create_connected:red_fan_dyeing_catalyst', COLORING)
  event.data[addRecipeCatalyst]('create_connected:orange_fan_dyeing_catalyst', COLORING)
  event.data[addRecipeCatalyst]('create_connected:yellow_fan_dyeing_catalyst', COLORING)
  event.data[addRecipeCatalyst]('create_connected:lime_fan_dyeing_catalyst', COLORING)
  event.data[addRecipeCatalyst]('create_connected:green_fan_dyeing_catalyst', COLORING)
  event.data[addRecipeCatalyst]('create_connected:cyan_fan_dyeing_catalyst', COLORING)
  event.data[addRecipeCatalyst]('create_connected:light_blue_fan_dyeing_catalyst', COLORING)
  event.data[addRecipeCatalyst]('create_connected:blue_fan_dyeing_catalyst', COLORING)
  event.data[addRecipeCatalyst]('create_connected:purple_fan_dyeing_catalyst', COLORING)
  event.data[addRecipeCatalyst]('create_connected:magenta_fan_dyeing_catalyst', COLORING)
  event.data[addRecipeCatalyst]('create_connected:pink_fan_dyeing_catalyst', COLORING)

  // CONDUIT_CHANNELING
  let CONDUIT_CHANNELING = event.data.jeiHelpers.getRecipeType('create_aquatic_ambitions:channeling').get()
  event.data[addRecipeCatalyst]('minecraft:conduit', CONDUIT_CHANNELING)

  // FUELING
  let FUELING = event.data.jeiHelpers.getRecipeType('createaddition:liquid_burning').get()
  event.data[addRecipeCatalyst]('simulated:white_portable_engine', FUELING)
  event.data[addRecipeCatalyst]('simulated:light_gray_portable_engine', FUELING)
  event.data[addRecipeCatalyst]('simulated:gray_portable_engine', FUELING)
  event.data[addRecipeCatalyst]('simulated:black_portable_engine', FUELING)
  event.data[addRecipeCatalyst]('simulated:brown_portable_engine', FUELING)
  event.data[addRecipeCatalyst]('simulated:red_portable_engine', FUELING)
  event.data[addRecipeCatalyst]('simulated:orange_portable_engine', FUELING)
  event.data[addRecipeCatalyst]('simulated:yellow_portable_engine', FUELING)
  event.data[addRecipeCatalyst]('simulated:lime_portable_engine', FUELING)
  event.data[addRecipeCatalyst]('simulated:green_portable_engine', FUELING)
  event.data[addRecipeCatalyst]('simulated:cyan_portable_engine', FUELING)
  event.data[addRecipeCatalyst]('simulated:light_blue_portable_engine', FUELING)
  event.data[addRecipeCatalyst]('simulated:blue_portable_engine', FUELING)
  event.data[addRecipeCatalyst]('simulated:purple_portable_engine', FUELING)
  event.data[addRecipeCatalyst]('simulated:magenta_portable_engine', FUELING)
  event.data[addRecipeCatalyst]('simulated:pink_portable_engine', FUELING)

  // ANVIL
  let ANVIL = event.data.jeiHelpers.getRecipeType('minecraft:anvil').get()
  event.data[addRecipeCatalyst]('create_enchantment_industry:blaze_forger', ANVIL)

  // SANDPAPER_POLISHING
  let SANDPAPER_POLISHING = event.data.jeiHelpers.getRecipeType('create:sandpaper_polishing').get()
  event.data[addRecipeCatalyst]('create_enchantment_industry:mechanical_grindstone', SANDPAPER_POLISHING)
})