StartupEvents.modifyCreativeTab('kubejs:tab', event => {
  event.remove('kubejs:blank_music_disc')
  event.remove('kubejs:concrete_powder')
  event.remove('kubejs:empty_ink_sac')
  event.remove('kubejs:incomplete_enchanted_golden_apple')
  event.remove('kubejs:incomplete_netherite_scrap')
})

StartupEvents.modifyCreativeTab('minecraft:colored_blocks', event => {
  event.addAfter('minecraft:pink_concrete', 'kubejs:concrete_powder')
})

StartupEvents.modifyCreativeTab('minecraft:ingredients', event => {
  event.addAfter('minecraft:ink_sac', 'kubejs:empty_ink_sac')
})

StartupEvents.modifyCreativeTab('minecraft:tools_and_utilities', event => {
  event.addAfter('minecraft:music_disc_pigstep', 'kubejs:blank_music_disc')
})