ServerEvents.recipes(event => {
  // RECIPE FUNCTIONS
  const input = (parameters) => { event.replaceInput(parameters) }

  // RECIPE CHANGES
  event.replaceInput(
    { output: 'createdeco:locked_copper_door' },
    'minecraft:copper_door',
    'minecraft:waxed_copper_door'
  )
})