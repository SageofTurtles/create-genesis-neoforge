global['STYLIZED_TOOLTIPS'] = [
  {
    item: 'aeroclaims:claim_block',
    summary: [
      'Can be used to $claim chunks$ on a $physics object$, such as an airship or boat.'
    ], uses: [
      {
        action: 'R-Clicked',
        text: 'Opens the $claim$ GUI'
      }
    ]
  },
  {
    item: 'another_furniture:furniture_hammer',
    summary: [
      'Changes the $appearance$ of some types of $furniture$ when used on them. Works on $Benches$, $Chairs$, $Shutters$, and $Stools$.'
    ]
  },
  {
    item: 'brewinandchewin:coaster',
    summary: [
      'Can hold up to $4 items$.'
    ], uses: [
      {
        action: 'R-Clicked with an Item',
        text: '$Places$ the $item$ on the Coaster'
      }, {
        action: 'R-Clicked with an Empty Hand',
        text: '$Removes$ the $item$ from the Coaster'
      }
    ]
  },
  {
    item: 'brewinandchewin:keg',
    summary: [
      'Used to $ferment$ food and drinks. Its $temperature$ can be raised or lowered with $Ice Crates$ or $Heating Casks$ within a 2-block radius.'
    ]
  },
  {
    item: 'comforts:rope_and_nail',
    summary: [
      'Gives an anchor point for one end of a $Hammock$. Must have a 2-block gap between $Rope and Nails$ to hang one.'
    ]
  },
  {
    item: 'create_marketplace:registration_book',
    uses: [
      {
        action: 'R-Clicked on a Vendor or Tablecloth',
        text: 'Adds the $trade$ offer to the global $Global Market$'
      }
    ]
  },
  {
    item: 'extra_gauges:integer_selector',
    summary: [
      'Can be set to output a $whole number$. Useful for connecting to $Logic Gauges$ and $Display Links$.'
    ]
  },
  {
    item: 'extra_gauges:redstone_port',
    summary: [
      'Outputs a $binary signal$ (ON or OFF) using $redstone$.'
    ]
  },
  {
    item: 'extra_gauges:rose_quartz_port',
    summary: [
      'Outputs a $hexidecimal signal$ (strength 0-15) using $redstone$.'
    ]
  },
  {
    item: 'farmersdelight:stove',
    summary: [
      'Heats a $Cooking Pot$ or $Skillet$. $Cooks$ up to $6 food items$ placed on it.'
    ], uses: [
      {
        action: 'R-Clicked with a Shovel or Water Bucket',
        text: '$Extinguishes$ the Stove'
      }, {
        action: 'R-Clicked with Flint and Steel or Fire Charge',
        text: '$Ignites$ the Stove'
      }
    ]
  },
  {
    item: 'gnkinetics:worm_gear',
    summary: [
      'Transfers $rotational power$ to $Large Cogwheels$ that are tangentially connected.'
    ]
  },
  {
    item: 'horseman:copper_horn',
    uses: [
      {
        action: 'R-Clicked on Horse while Sneaking',
        text: '$Binds$ the Copper Horn to the $horse$'
      }, {
        action: 'R-Clicked',
        text: '$Calls$ the $bound horse$'
      }
    ]
  },
  {
    item: 'minecraft:name_tag',
    uses: [
      {
        action: 'R-Clicked on a Mob',
        text: '$Renames$ the mob'
      }, {
        action: 'R-Clicked while Sneaking',
        text: 'Opens the $name editing$ GUI'
      }
    ]
  },
  {
    item: 'minecraft:painting',
    uses: [
      {
        action: 'R-Clicked in the Air',
        text: 'Allows the player to $choose$ the $Painting\'s appearance$'
      }
    ]
  },
  {
    item: 'minecraft:tripwire_hook',
    uses: [
      {
        action: 'R-Clicked with a Tool or Weapon while Sneaking',
        text: '$Hangs$ the $item$ on the Tripwire Hook'
      }, {
        action: 'R-Clicked with an Empty Hand',
        text: '$Removes$ the $item$ from the Tripwire Hook'
      }
    ]
  },
  {
    item: 'naturescompass:naturescompass',
    summary: [
      'Lets the player $locate$ specific $biomes$ when used.'
    ]
  },
  {
    item: 'numismaticsutils:bank_meter',
    uses: [
      {
        action: 'equipped',
        text: 'Displays your $bank account balance$'
      }
    ]
  },
  {
    item: 'numismaticsutils:portable_bank_terminal',
    summary: [
      'Can be used to access your $account$ or $convert currency$ from anywhere.'
    ]
  },
  {
    item: 'railways:conductor_vent',
    uses: [
      {
        action: 'R-Clicked with a Block',
        text: '$Copies$ the $texture$ of the held block'
      }, {
        action: 'R-Clicked on a Smokestack',
        text: 'Toggles the $smoke$ particles on or off'
      }, {
        action: 'R-Clicked as a Conductor',
        text: 'Moves the $Conductor$ instantly through $adjacent$ Vent Blocks'
      }
    ]
  },
  {
    item: 'railways:conductor_whistle',
    uses: [
      {
        action: 'R-Clicked',
        text: '$Summons$ the $train$ driven by the $bound Conductor$'
      }, {
        action: 'R-Clicked on a Conductor',
        text: '$Binds$ it the to the $Conductor$'
      }
    ]
  },
  {
    item: 'railways:fuel_tank',
    summary: [
      'Can be placed on a $train$ and filled with $Lava$, $Biofuel$, $Seed Oil$, or $Dragon\'s Breath$. Increases the $train\'s speed$ by consuming the $fuel$.'
    ]
  },
  {
    item: 'railways:remote_lens',
    uses: [
      {
        action: 'R-Clicked',
        text: 'Allows the player to $control$ the $bound Conductor$'
      }, {
        action: 'R-Clicked on a Conductor',
        text: '$Binds$ it the to the $Conductor$'
      }
    ]
  },
  {
    item: 'rechiseled:chisel',
    uses: [
      {
        action: 'R-Clicked',
        text: 'Opens the $chiseling$ GUI'
      }, {
        action: 'R-Clicked on a Compatible Block',
        text: 'Converts up to a $3x3 area$ of compatible blocks to a $random variant$ or to the $variant selected$ in the $chiseling GUI$'
      }
    ]
  },
  {
    item: /.*hanging(_canvas)?_sign$/, uses: [
      {
        action: 'R-Clicked with an Item',
        text: '$Displays$ the $item$ on the Hanging Sign'
      }, {
        action: 'R-Clicked with an Empty Hand',
        text: '$Removes$ the $item$ from the Hanging Sign'
      }
    ]
  },
  {
    item: /another_furniture:.*_flower_box$/, summary: [
      'Holds up to $2 plants$.'
    ]
  },
  {
    item: /another_furniture:.*_lamp$/, summary: [
      'Can be built $taller$ by $stacking$ them.'
    ], uses: [
      {
        action: 'R-Clicked or Powered with Redstone',
        text: 'Turns the lamp $on$ or $off$'
      }
    ]
  },
  {
    item: /another_furniture:.*_shelf$/, summary: [
      'Holds up to $4 items$ on display.'
    ]
  },
  {
    item: /comforts:hammock_.*/, summary: [
      'Used to $sleep$ through the night without resetting your $respawn bed$.',
      'Requires $Rope and Nails$ to hang.'
    ]
  },
  {
    item: /comforts:sleeping_bag_.*/, summary: [
      'Used to $sleep$ through the night without resetting your $respawn bed$.'
    ]
  },
  {
    item: /farmersdelight:(bamboo|wooden)_basket/,
    summary: [
      '$Catches items$ from its $open$ side. Holds up to 27 stacks of items.'
    ], uses: [
      {
        action: 'Powered with Redstone',
        text: '$Prevents$ the Basket from $catching$ items'
      }
    ]
  },
  {
    item: /gnkinetics:.*magnet_gear/, summary: [
      'Rotates in the $opposite$ direction of $parallel$ Magnet Gears.'
    ], uses: [
      {
        action: 'the Center is R-Clicked with a Wrench',
        text: 'Toggles the $shaft connection$'
      }
    ]
  },
  {
    item: /minecraft:.*item_frame/, uses: [
      {
        action: 'R-Clicked while Sneaking',
        text: 'Toggles the frame\'s $visibility$'
      }
    ]
  }
]