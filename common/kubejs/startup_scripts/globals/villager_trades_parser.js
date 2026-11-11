const PROFESSION_BLOCKS = {
  'armorer': 'minecraft:blast_furnace',
  'cartographer': 'minecraft:cartography_table',
  'cleric': 'minecraft:brewing_stand',
  'cook': 'minecraft:smoker',
  'farmer': 'minecraft:composter',
  'fisherman': 'minecraft:barrel',
  'fletcher': 'minecraft:fletching_table',
  'librarian': 'minecraft:lectern',
  'mason': 'minecraft:stonecutter',
  'mechanic': 'minecraft:smithing_table',
  'smith': 'minecraft:smithing_table',
  'tanner': 'minecraft:cauldron',
  'weaver': 'minecraft:loom',
  'nomad': null
}

const SHOP_FILES = [
  'armorer',
  'cartographer',
  'cleric',
  'cook',
  'farmer',
  'fisherman',
  'fletcher',
  'librarian',
  'mason',
  'mechanic',
  'nomad',
  'smith',
  'tanner',
  'weaver'
]

const villagerTrades = []

for (let i = 0; i < SHOP_FILES.length; i++) {
  let professionId = SHOP_FILES[i]

  try {
    let shopData = JsonIO.read(`kubejs/data/society_trading/shops/${professionId}.json`)

    if (!shopData || !shopData.random_sets) {
      console.warn(`[VillagerTrades] Failed to load or parse ${professionId}.json`)
      continue
    }

    let spawnEgg = professionId === 'nomad'
      ? 'minecraft:wandering_trader_spawn_egg'
      : 'minecraft:villager_spawn_egg'

    let professionBlock = PROFESSION_BLOCKS[professionId]

    if (shopData.random_sets) {
      for (let s = 0; s < shopData.random_sets.length; s++) {
        let randomSet = shopData.random_sets[s]
        if (!randomSet.trades) continue

        for (let t = 0; t < randomSet.trades.length; t++) {
          let trade = randomSet.trades[t]

          villagerTrades.push({
            profession: professionId,
            offer: {
              id: trade.offer.id,
              count: trade.offer.count,
              components: trade.offer.components || null
            },
            request: trade.request,
            second_request: trade.second_request || null,
            spawn_egg: spawnEgg,
            profession_block: professionBlock,
            numismatics_cost: trade.numismatics_cost || null
          })
        }
      }
    }
  } catch (err) {
    console.error(`[VillagerTrades] Error loading ${professionId}.json: ${err}`)
  }
}

console.info(`[VillagerTrades] Loaded ${villagerTrades.length} villager trades from ${SHOP_FILES.length} shop files`)

global['VILLAGER_TRADES'] = villagerTrades
