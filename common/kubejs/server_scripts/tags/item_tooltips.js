// priority: 300

ServerEvents.tags('item', event => {

  const ANDESITE_OVERRIDES = [
    'bits_n_bobs:industrial_truss',
    'minecraft:soul_lantern',
    'railways:track_switch_andesite'
  ]

  const UNOBTAINABLE_ITEMS = [
    'create_marketplace:debug_paper',
    'create_marketplace:server_vendor',
    'create_power_loader:andesite_chunk_loader',
    'create:handheld_worldshaper',
    'createlazytick:clock',
    'createshufflefilter:skip',
    'minecraft:barrier',
    'minecraft:bedrock',
    'minecraft:chain_command_block',
    'minecraft:chorus_plant',
    'minecraft:command_block_minecart',
    'minecraft:command_block',
    'minecraft:debug_stick',
    'minecraft:end_portal_frame',
    'minecraft:jigsaw',
    'minecraft:light',
    'minecraft:reinforced_deepslate',
    'minecraft:repeating_command_block',
    'minecraft:spawner',
    'minecraft:structure_block',
    'minecraft:structure_void',
    'minecraft:trial_spawner',
    'minecraft:vault',
    /.*creative.*/,
    /^minecraft:.*_spawn_egg$/,
    /^molten_vents:.*/,
    /^opacbonusclaims:.*/
  ]

  const DRAGON_AGE_ITEMS = [
    'create_mob_spawners:empty_soul_catcher',
    'create_mob_spawners:soul_catcher',
    'minecraft:end_rod',
    'minecraft:lingering_potion',
    'minecraft:spire_armor_trim_smithing_template',
    'minecraft:tipped_arrow',
    /.*:.*dragon.*/,
    /.*chorus,*/,
    /.*end_stone.*/,
    /.*levitite.*/,
    /.*purpur.*/,
    /.*shulker.*/,
    /^railways:track_ender.*/
  ]

  const BRASS_AGE_ITEMS = [
    'aeroclaims:claim_block',
    'aeronautics:gyroscopic_propeller_bearing',
    'aeronautics:mounted_potato_cannon',
    'aeronautics:propeller_bearing',
    'aeroworks:control_desk',
    'aeroworks:copycat_control_desk',
    'aeroworks:gyroscope',
    'aeroworks:joystick',
    'aeroworks:mechanical_servo',
    'aeroworks:stepper_servo',
    'brewinandchewin:fiery_fondue_pot',
    'brewinandchewin:fiery_fondue',
    'brewinandchewin:horror_lasagna',
    'brewinandchewin:red_rum',
    'brewinandchewin:scarlet_cheese_wedge',
    'brewinandchewin:scarlet_cheese_wheel',
    'brewinandchewin:scarlet_pierogi',
    'brewinandchewin:steel_toe_stout',
    'brewinandchewin:unripe_scarlet_cheese_wheel',
    'brewinandchewin:withering_dross',
    'create_connected:dashboard',
    'create_connected:inventory_access_port',
    'create_connected:inventory_bridge',
    'create_connected:kinetic_battery',
    'create_connected:kinetic_bridge',
    'create_connected:overstress_clutch',
    'create_connected:redstone_link_wildcard',
    'create_dragons_plus:blaze_upgrade_smithing_template',
    'create_enchantment_industry:blaze_enchanter',
    'create_enchantment_industry:blaze_forger',
    'create_enchantment_industry:printer',
    'create_jetpack:jetpack',
    'create_mob_spawners:mechanical_spawner',
    'create_mobile_packages:mobile_packager',
    'create:adjustable_chain_gearshift',
    'create:attribute_filter',
    'create:bar_of_chocolate',
    'create:blaze_burner',
    'create:builders_tea',
    'create:chocolate_bucket',
    'create:chocolate_glazed_berries',
    'create:clockwork_bearing',
    'create:content_observer',
    'create:contraption_controls',
    'create:controller_rail',
    'create:controls',
    'create:crafter_slot_cover',
    'create:deployer',
    'create:display_board',
    'create:display_link',
    'create:electron_tube',
    'create:elevator_pulley',
    'create:extendo_grip',
    'create:haunted_bell',
    'create:mechanical_arm',
    'create:mechanical_crafter',
    'create:mechanical_roller',
    'create:peculiar_bell',
    'create:potato_cannon',
    'create:powdered_obsidian',
    'create:precision_mechanism',
    'create:railway_casing',
    'create:rotation_speed_controller',
    'create:schematicannon',
    'create:sequenced_gearshift',
    'create:stockpile_switch',
    'create:sturdy_sheet',
    'create:train_door',
    'create:train_trapdoor',
    'create:wand_of_symmetry',
    'create:weathered_iron_block',
    'create:weathered_iron_window',
    'createaddition:alternator',
    'createaddition:bioethanol_bucket',
    'createaddition:chocolate_cake',
    'createaddition:diamond_grit_sandpaper',
    'createaddition:diamond_grit',
    'createaddition:electric_motor',
    'createaddition:festive_spool',
    'createaddition:modular_accumulator',
    'createaddition:portable_energy_interface',
    'createaddition:redstone_relay',
    'createaddition:tesla_coil',
    'createadditionallogistics:cash_register',
    'createadditionallogistics:package_accelerator',
    'createcobblestone:mechanical_generator',
    'createvintageneoforged:helve_hammer_slot_cover',
    'createvintageneoforged:helve_hammer',
    'dndecor:beam',
    'dndecor:stepped_lever',
    'extra_gauges:display_collector',
    'extra_gauges:integer_selector',
    'farmersdelight:nether_salad',
    'gnkinetics:large_magnet_gear',
    'gnkinetics:magnet_gear',
    'gnkinetics:ring_gear',
    'minecraft:ancient_debris',
    'minecraft:beacon',
    'minecraft:blaze_rod',
    'minecraft:budding_amethyst',
    'minecraft:comparator',
    'minecraft:daylight_detector',
    'minecraft:enchanted_golden_apple',
    'minecraft:end_crystal',
    'minecraft:ghast_tear',
    'minecraft:gilded_blackstone',
    'minecraft:mojang_banner_pattern',
    'minecraft:music_disc_pigstep',
    'minecraft:nether_gold_ore',
    'minecraft:nether_quartz_ore',
    'minecraft:nether_star',
    'minecraft:observer',
    'minecraft:piglin_banner_pattern',
    'minecraft:piglin_head',
    'minecraft:potion',
    'minecraft:rib_armor_trim_smithing_template',
    'minecraft:shroomlight',
    'minecraft:skull_banner_pattern',
    'minecraft:snout_armor_trim_smithing_template',
    'minecraft:splash_potion',
    'minecraft:wither_rose',
    'minecraft:wither_skeleton_skull',
    'numismatics:andesite_depositor',
    'numismatics:bank_terminal',
    'numismatics:banking_guide',
    'numismatics:vendor',
    'numismaticsutils:bank_meter',
    'numismaticsutils:portable_bank_terminal',
    'offroad:borehead_bearing',
    'offroad:rockcutting_wheel',
    'railways:conductor_vent',
    'railways:conductor_whistle',
    'railways:fuel_tank',
    'railways:handcar',
    'railways:portable_fuel_interface',
    'railways:remote_lens',
    'railways:semaphore',
    'railways:wrapped_locometal_smokebox',
    'simulated:analog_transmission',
    'simulated:directional_linked_receiver',
    'simulated:docking_connector',
    'simulated:gimbal_sensor',
    'simulated:gyroscopic_mechanism',
    'simulated:linked_typewriter',
    'simulated:modulating_linked_receiver',
    'simulated:navigation_table',
    'simulated:optical_sensor',
    'simulated:plunger_launcher',
    'simulated:redstone_accumulator',
    'simulated:redstone_inductor',
    'simulated:redstone_magnet',
    'simulated:rope_connector',
    'simulated:rope_winch',
    'simulated:swivel_bearing',
    'simulated:throttle_lever',
    'sophisticatedbackpacks:alchemy_upgrade',
    'sophisticatedbackpacks:battery_upgrade',
    'sophisticatedbackpacks:everlasting_upgrade',
    'sophisticatedbackpacks:stack_upgrade_tier_4',
    /.*_gauge$/,
    /.*biomass.*/,
    /.*brass.*/,
    /.*crimson.*/,
    /.*crushing_wheel$/,
    /.*electrum.*/,
    /.*flywheel.*/,
    /.*industrial.*/,
    /.*nether_wart.*/,
    /.*netherite.*/,
    /.*nixie.*/,
    /.*placard$/,
    /.*prismarine_alloy.*/,
    /.*pulse_.*/,
    /.*quartz.*/,
    /.*red_nether_brick.*/,
    /.*smart.*/,
    /.*soul.*/,
    /.*track.*/,
    /.*warped.*/,
    /^aeroworks:.*_module$/,
    /^create_aquatic_ambitions:.*/,
    /^create_connected:.*catalyst.*/,
    /^create_enchantment_industry:super_.*/,
    /^create:crushed_.*/,
    /^createadditionallogistics:.*flexible_shaft$/,
    /^createmetalwork:.*/,
    /^createrailwaysnavigator:.*/,
    /^dndecor:.*_cogwheel$/,
    /^dndecor:.*_display_board$/,
    /^dndecor:.*_velvet_block$/,
    /^dndecor:.*dark_metal.*/,
    /^dndecor:.*large_metal_girder$/,
    /^minecraft:.*copper_bulb$/,
    /^numismatics:.*_card$/,
    /^railways:.*_boiler$/,
    /^railways:.*_conductor_cap$/,
    /^railways:.*_coupler$/,
    /^railways:.*buffer$/,
    /^railways:(brown|maroon|red|vermilion|orange|yellow|chartreuse|olive_green|lime|green|pine_green|cyan|sea_green|turquiose|light_blue|blue|royal_blue|purple|magenta|pink|white|light_gray|gray|black)_wrapped_locometal_smokebox$/,
    /^railways:(granite|dripstone|ochrum|diorite|limestone|tuff|scorchia)_.*/,
    /^railways:(wooden|copycat)_headstock.*/,
    /^railways:link_and_pin.*/,
    /^sophisticatedbackpacks:(advanced|auto)_.*/
  ]

  // Loop through every registered item in the game
  Ingredient.all.itemIds.forEach(item => {

    // Check ANDESITE_OVERRIDES for match
    const matchesAndesite = ANDESITE_OVERRIDES.some(pattern =>
      pattern instanceof RegExp ? pattern.test(item) : pattern === item
    )

    if (matchesAndesite) {
      event.add('kubejs:andesite_age', item)
      return
    }

    // Check UNOBTAINABLE_ITEMS for match
    const matchesUnobtainable = UNOBTAINABLE_ITEMS.some(pattern =>
      pattern instanceof RegExp ? pattern.test(item) : pattern === item
    )

    if (matchesUnobtainable) {
      event.add('kubejs:unobtainable', item)
      return
    }

    // Check DRAGON_AGE_ITEMS for match
    const matchesDragon = DRAGON_AGE_ITEMS.some(pattern =>
      pattern instanceof RegExp ? pattern.test(item) : pattern === item
    )

    if (matchesDragon) {
      event.add('kubejs:dragon_age', item)
      return
    }

    // Check BRASS_AGE_ITEMS for match
    const matchesBrass = BRASS_AGE_ITEMS.some(pattern =>
      pattern instanceof RegExp ? pattern.test(item) : pattern === item
    )

    if (matchesBrass) {
      event.add('kubejs:brass_age', item)
      return
    }

    // Fallback if item matches neither array
    event.add('kubejs:andesite_age', item)
  })
})