ServerEvents.recipes(event => {
  // RECIPE FUNCTION
  const add = (recipeId, inputs, output, count) => {
    event.shapeless(
      Item.of(output, count),
      inputs
    ).id(`kubejs:${recipeId}_shapeless`)
  }

  // TARGETED RECIPE CHANGES
  add('crimson_nylium', ['minecraft:netherrack', 'minecraft:crimson_fungus'], 'minecraft:crimson_nylium', 1)
  add('flow_banner_pattern', ['minecraft:paper', 'minecraft:ominous_bottle'], 'minecraft:flow_banner_pattern', 1)
  add('globe_banner_pattern', ['minecraft:paper', 'naturescompass:naturescompass'], 'minecraft:globe_banner_pattern', 1)
  add('guster_banner_pattern', ['minecraft:paper', 'minecraft:breeze_rod'], 'minecraft:guster_banner_pattern', 1)
  add('mycelium', ['minecraft:dirt', '#c:mushrooms'], 'minecraft:mycelium', 1)
  add('rooted_dirt', ['minecraft:dirt', 'minecraft:hanging_roots'], 'minecraft:rooted_dirt', 1)
  add('snout_banner_pattern', ['minecraft:paper', 'minecraft:piglin_head'], 'minecraft:piglin_banner_pattern', 1)
  add('warped_nylium', ['minecraft:netherrack', 'minecraft:warped_fungus'], 'minecraft:warped_nylium', 1)

  // BULK RECIPE CHANGES
  global.COPYCATS_FUNCTIONAL.forEach(entry => {
    const { block, base, count } = entry
    add(`copycat_${block}`, [SizedIngredient.of(base, count), 'copycats:copycat_block'], `copycats:copycat_${block}`, count)
  })
})
