ServerEvents.recipes(event => {
  // RECIPE FUNCTION
  const add = (recipeId, inputs, output, count) => {
    event.shapeless(
      Item.of(output, count),
      inputs
    ).id(`kubejs:${recipeId}_shapeless`)
  }

  // TARGETED RECIPE CHANGES
  add('banking_guide', ['create:sturdy_sheet', '#numismatics:id_cards'], 'numismatics:banking_guide', 1)
  add('concrete_powder', ['4x minecraft:sand', '4x minecraft:gravel'], 'kubejs:concrete_powder', 8)
  add('crimson_nylium', ['minecraft:netherrack', 'minecraft:crimson_fungus'], 'minecraft:crimson_nylium', 1)
  add('flow_banner_pattern', ['minecraft:paper', 'minecraft:ominous_bottle'], 'minecraft:flow_banner_pattern', 1)
  add('globe_banner_pattern', ['minecraft:paper', 'naturescompass:naturescompass'], 'minecraft:globe_banner_pattern', 1)
  add('guster_banner_pattern', ['minecraft:paper', 'minecraft:breeze_rod'], 'minecraft:guster_banner_pattern', 1)
  add('mycelium', ['minecraft:dirt', '#c:mushrooms'], 'minecraft:mycelium', 1)
  add('rooted_dirt', ['minecraft:dirt', 'minecraft:hanging_roots'], 'minecraft:rooted_dirt', 1)
  add('service_bell', ['create:andesite_casing', 'create:iron_sheet'], 'another_furniture:service_bell', 1)
  add('snout_banner_pattern', ['minecraft:paper', 'minecraft:piglin_head'], 'minecraft:piglin_banner_pattern', 1)
  add('warped_nylium', ['minecraft:netherrack', 'minecraft:warped_fungus'], 'minecraft:warped_nylium', 1)

  // BULK RECIPE CHANGES
  global.COLORS.forEach(entry => {
    add(`${entry}_portable_engine_from_dyeing`, ['#kubejs:portable_engines', `minecraft:${entry}_dye`], `simulated:${entry}_portable_engine`, 1)
  })

  global.COPYCATS_FUNCTIONAL.forEach(entry => {
    const { block, base, count } = entry
    add(`copycat_${block}`, [SizedIngredient.of(base, count), 'copycats:copycat_block'], `copycats:copycat_${block}`, count)
  })

  global.FURNITURE_DYEING.forEach(entry => {
    add(`white_${entry}`, ['minecraft:white_dye', `#another_furniture:${entry}s`], `another_furniture:white_${entry}`, 1)
  })
})
