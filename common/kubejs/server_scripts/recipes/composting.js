ServerEvents.compostableRecipes(event => {
  // RECIPE FUNCTION
  const add = (item, chance) => {
    event.add(item, chance, true)
  }

  // RECIPE CHANGES
  add('minecraft:poisonous_potato', 0.5)
  add('minecraft:stick', 0.1)
})
