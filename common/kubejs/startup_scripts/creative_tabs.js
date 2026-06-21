StartupEvents.modifyCreativeTab('minecraft:tools_and_utilities', event => {
  event.addAfter('minecraft:music_disc_pigstep', 'kubejs:blank_music_disc')
})

StartupEvents.modifyCreativeTab('minecraft:ingredients', event => {
  event.addAfter('minecraft:ink_sac', 'kubejs:empty_ink_sac')
})

StartupEvents.modifyCreativeTab('kubejs:tab', event => {
  event.remove('kubejs:blank_music_disc')
  event.remove('kubejs:empty_ink_sac')
  event.remove('kubejs:incomplete_enchanted_golden_apple')
})