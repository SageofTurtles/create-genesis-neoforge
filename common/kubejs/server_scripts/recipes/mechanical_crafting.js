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
    'helve_hammer',
    [
      '   BB',
      'ACCCD',
      'AA  E'
    ],
    {
      A: 'minecraft:iron_block',
      B: 'simulated:spring',
      C: '#minecraft:logs',
      D: 'create:andesite_casing',
      E: 'create:shaft'
    },
    'createvintageneoforged:helve_hammer'
  )

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
    'mechanical_spawner',
    [
      '  A  ',
      'BCDCB',
      'ECFCE',
      'BCGCB',
      '  A  '
    ],
    {
      A: 'create:shaft',
      B: 'create:brass_casing',
      C: 'minecraft:netherite_ingot',
      D: 'minecraft:ominous_bottle',
      E: 'minecraft:chain',
      F: 'minecraft:heavy_core',
      G: 'minecraft:nether_star'
    },
    'create_mob_spawners:mechanical_spawner'
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