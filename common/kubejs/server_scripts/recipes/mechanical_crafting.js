ServerEvents.recipes(event => {
  // RECIPE FUNCTIONS
  const add = (recipeId, inputPattern, inputKeys, output) => {
    event.recipes.create.mechanical_crafting(
      output,
      inputPattern,
      inputKeys
    ).id(`kubejs:${recipeId}_mechanical_crafting`)
  }

  // TARGETED RECIPE CHANGES
  add(
    'jetpack',
    [
      ' ABA ',
      'ACDCA',
      'AEFEA',
      ' E E '
    ],
    {
      A: 'create:brass_sheet',
      B: 'create:shaft',
      C: 'create:precision_mechanism',
      D: 'create:copper_backtank',
      E: 'create:chute',
      F: 'simulated:engine_assembly'
    },
    'create_jetpack:jetpack'
  )

  add(
    'netherite_jetpack',
    [
      ' ABA ',
      'ACDCA',
      'AEFEA',
      ' E E '
    ],
    {
      A: 'create:brass_sheet',
      B: 'create:shaft',
      C: 'create:precision_mechanism',
      D: 'create:netherite_backtank',
      E: 'create:chute',
      F: 'simulated:engine_assembly'
    },
    'create_jetpack:netherite_jetpack'
  )
})