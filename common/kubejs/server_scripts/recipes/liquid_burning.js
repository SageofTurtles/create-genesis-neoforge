ServerEvents.recipes(event => {
  event.custom({
    type: 'createaddition:liquid_burning',
    burn_time: 19200,
    ingredients: [
      {
        type: 'neoforge:single',
        amount: 1000,
        fluid: 'create_dragons_plus:dragon_breath'
      }
    ],
    results: [],
    superheated: true
  }).id('kubejs:dragon_breath_liquid_burning')
})