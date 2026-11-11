const VILLAGER_TRADING_ID = 'kubejs:villager_trading'
const VILLAGER_TRADING_W = 160
const VILLAGER_TRADING_H = 90
const VILLAGER_TRADING_BADGE_X = VILLAGER_TRADING_W - 12
const VILLAGER_TRADING_BADGE_Y = 3

JEIAddedEvents.registerCategories(event => {
  const guiHelper = event.JEI_HELPERS.guiHelper

  event.custom(VILLAGER_TRADING_ID, category => {
    category
      .title('Villager Trading')
      .background(guiHelper.createBlankDrawable(VILLAGER_TRADING_W, VILLAGER_TRADING_H))
      .icon(guiHelper.createDrawableItemStack(Item.of('numismatics:cog')))

      .isRecipeHandled(recipe => !!(recipe && recipe.data))

      .handleLookup((builder, recipe) => {
        const d = recipe.data
        if (!d) return

        JEIInfo.slot(builder, 'INPUT', 3, 3, d.spawn_egg)

        if (d.profession_block) {
          JEIInfo.slot(builder, 'INPUT', 3, 27, d.profession_block)
        }

        if (d.second_request) {
          JEIInfo.slot(builder, 'INPUT', 45, 37, Item.of(d.second_request.id, d.second_request.count))
          JEIInfo.slot(builder, 'INPUT', 71, 37, Item.of(d.request.id, d.request.count))
        } else {
          JEIInfo.slot(builder, 'INPUT', 58, 37, Item.of(d.request.id, d.request.count))
        }

        JEIInfo.slot(builder, 'OUTPUT', 116, 37, d.offer)
      })

      .setDrawHandler((recipe, slotsView, g, mouseX, mouseY) => {
        const d = recipe.data
        if (!d) return

        JEIInfo.arrowRight(g, 90, 45, 20)

        JEIInfo.noteBadge(g, VILLAGER_TRADING_BADGE_X, VILLAGER_TRADING_BADGE_Y)

        const professionName = d.profession.charAt(0).toUpperCase() + d.profession.slice(1)
        JEIInfo.textCentered(g, professionName, VILLAGER_TRADING_W / 2, 6, JEIInfo.COLOR_TEXT)

        if (d.numismatics_cost !== null && d.numismatics_cost !== undefined) {
          const costText = `Cost: ${d.numismatics_cost}¤`
          JEIInfo.textCentered(g, costText, VILLAGER_TRADING_W / 2, VILLAGER_TRADING_H - 12, JEIInfo.COLOR_TEXT_DIM)
        }
      })

      .withTooltip((recipe, slotsView, mouseX, mouseY) => {
        const d = recipe.data

        if (d && JEIInfo.overNoteBadge(mouseX, mouseY, VILLAGER_TRADING_BADGE_X, VILLAGER_TRADING_BADGE_Y)) {
          return JEIInfo.tooltip('All villager trades reset daily!')
        }

        return JEIInfo.tooltip([])
      })
  })
})

JEIAddedEvents.registerRecipes(event => {
  const trades = global.VILLAGER_TRADES || []

  if (trades.length === 0) {
    console.warn('[VillagerTrading] No villager trades found in global.VILLAGER_TRADES')
    return
  }

  console.info(`[VillagerTrading] Registering ${trades.length} villager trades`)

  trades.forEach(trade => {
    event.custom(VILLAGER_TRADING_ID).add({
      type: 'villager_trading',
      profession: trade.profession,
      offer: trade.offer,
      request: trade.request,
      second_request: trade.second_request,
      spawn_egg: trade.spawn_egg,
      profession_block: trade.profession_block,
      numismatics_cost: trade.numismatics_cost
    })
  })
})
