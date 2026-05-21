ServerEvents.recipes(event => {
  // RECIPE FUNCTION
  const add = (recipeId, inputs, output, count) => {
    event.shapeless(Item.of(output, count), inputs).id(`genesis:${recipeId}_shapeless`)
  }

  // BULK RECIPE CHANGES
  global.COPYCATS_FUNCTIONAL.forEach(entry => {
    const { block, base, count } = entry
    console.log('BLOCK: ' + block + ' || BASE/COUNT: Item.of(' + base + ', ' + count + ')')
    add(`copycat_${block}`, [SizedIngredient.of(base, count), 'copycats:copycat_block'], `copycats:copycat_${block}`, count)
  })
})
