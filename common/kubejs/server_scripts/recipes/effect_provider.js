ServerEvents.recipes(event => {
  event.custom({
    type: 'jeed:effect_provider',
    effect: 'kubejs:echolocation',
    providers: [{ item: 'minecraft:echo_shard' }]
  })
  event.custom({
    type: 'jeed:effect_provider',
    effect: 'createaddition:shocking',
    providers: [{ item: 'createaddition:tesla_coil' }]
  })
})