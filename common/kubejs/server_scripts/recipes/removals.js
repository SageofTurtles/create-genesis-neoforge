// priority: 100

ServerEvents.recipes(event => {
  // RECIPE FUNCTIONS
  const custom = (parameters) => { event.remove(parameters) }
  const id = (recipeId) => { event.remove({ id: recipeId }) }
  const input = (itemId) => { event.remove({ input: itemId }) }
  const mod = (modId) => { event.remove({ mod: modId }) }
  const output = (itemId) => { event.remove({ output: itemId }) }
  const type = (recipeType) => { event.remove({ type: recipeType }) }

  // BULK RECIPE CHANGES
  global.BLACKLISTED_ITEMS.forEach(entry => {
    input(entry)
    output(entry)
  })

  global.BLACKLISTED_REGEX_ITEMS.forEach(entry => {
    input(entry)
    output(entry)
  })

  global.BLACKLISTED_FLUIDS.forEach(entry => {
    input(Fluid.of(entry))
    output(Fluid.of(entry))
  })

  global.STONECUTTING_BLOCKSETS.forEach(entry => {
    const { name, block, slab, stairs, wall } = entry
    custom([
      { type: 'create:cutting', output: slab },
      { type: 'minecraft:crafting_shaped', output: slab },
      { type: 'minecraft:stonecutting', output: slab }
    ])
    if (stairs != null) {
      custom([
        { type: 'create:cutting', output: stairs },
        { type: 'minecraft:crafting_shaped', output: stairs },
        { type: 'minecraft:stonecutting', output: stairs }
      ])
    }
    if (wall != null) {
      custom([
        { type: 'minecraft:crafting_shaped', output: wall },
        { type: 'minecraft:stonecutting', output: wall }
      ])
    }
  })

  custom({
    mod: 'mcwdoors',
    not: [
      { id: /^mcwdoors:garage_.*/ },
      { id: /mcwdoors:(iron|wooden)_portcullis/ }
    ]
  })

  // TARGETED RECIPE CHANGES
  id(/^createaddition:charging\/deoxidize.*/)
  mod('mcwtrpdoors')
  type('createvintageneoforged:coiling')
  type('createvintageneoforged:curving_convex')
  type('createvintageneoforged:curving_concave')
  type('createvintageneoforged:laser_cutting')
  type('createvintageneoforged:polishing')
  type('createvintageneoforged:vacuumizing')
  type('createvintageneoforged:pressurizing')
  type('createvintageneoforged:turning')
})