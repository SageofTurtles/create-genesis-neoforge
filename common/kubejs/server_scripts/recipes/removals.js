// priority: 100

ServerEvents.recipes(event => {
  // RECIPE FUNCTIONS
  const output = (result) => {
    event.remove({ output: result })
  }
  const input = (ingredient) => {
    event.remove({ input: ingredient })
  }
  const custom = (parameters) => {
    event.remove(parameters)
  }

  // BULK RECIPE CHANGES
  global.BLACKLISTED_ITEMS.forEach(entry => {
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
})