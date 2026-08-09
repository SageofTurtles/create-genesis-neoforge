// priority: 100

ItemEvents.modifyTooltips(event => {
  const orange = 0xc7954b
  const yellow = 0xeeda78

  // Removals
  event.modify('comforts:rope_and_nail', tooltip => {
    tooltip.removeLine(1)
  })
  event.modify(/comforts:hammock_.*/, tooltip => {
    tooltip.removeLine(1)
  })

  // Map markers
  event.modify('minecraft:map', { shift: true }, tooltip => {
    let line = 1
    tooltip.insert(line++,
      Text.of('Hold [').darkGray()
        .append(Text.of('Shift').white())
        .append('] for Summary')
    )
    tooltip.insert(line++, Text.empty())
    tooltip.insert(line++,
      Text.empty().color(orange)
        .append(Text.of('R-Click').color(yellow))
        .append(' on the following ')
        .append(Text.of('blocks').color(yellow))
        .append(' to add a ')
        .append(Text.of('map marker').color(yellow))
        .append(' at that location. If the block has been ')
        .append(Text.of('named').color(yellow))
        .append(' in an Anvil, the map marker will display the name of the block:')
    )
    tooltip.insert(line++,
      Text.of(' - ').color(orange)
        .append(Text.of('Banner').color(yellow))
    )
    tooltip.insert(line++,
      Text.of(' - ').color(orange)
        .append(Text.of('Beacon').color(yellow))
    )
    tooltip.insert(line++,
      Text.of(' - ').color(orange)
        .append(Text.of('Bed').color(yellow))
    )
    tooltip.insert(line++,
      Text.of(' - ').color(orange)
        .append(Text.of('Bell').color(yellow))
    )
    tooltip.insert(line++,
      Text.of(' - ').color(orange)
        .append(Text.of('Campfire').color(yellow))
    )
    tooltip.insert(line++,
      Text.of(' - ').color(orange)
        .append(Text.of('Conduit').color(yellow))
    )
    tooltip.insert(line++,
      Text.of(' - ').color(orange)
        .append(Text.of('End Portal').color(yellow))
    )
    tooltip.insert(line++,
      Text.of(' - ').color(orange)
        .append(Text.of('Lodestone').color(yellow))
    )
    tooltip.insert(line++,
      Text.of(' - ').color(orange)
        .append(Text.of('Nether Portal').color(yellow))
    )
    tooltip.insert(line++,
      Text.of(' - ').color(orange)
        .append(Text.of('Respawn Anchor').color(yellow))
    )
  })
  event.modify('minecraft:map', { shift: false }, tooltip => {
    tooltip.insert(1,
      Text.of('Hold [').darkGray()
        .append(Text.of('Shift').gray())
        .append('] for Summary')
    )
  })

  // Seats & Supports
  event.modify(/decorative_blocks:.*_(seat|support)$/, { shift: true }, tooltip => {
    tooltip.insert(1,
      Text.of('Hold [').darkGray()
        .append(Text.of('Shift').white())
        .append('] for Summary')
    )
    tooltip.insert(2, Text.empty())
  })
  event.modify(/decorative_blocks:.*_(seat|support)$/, { shift: false }, tooltip => {
    tooltip.insert(1,
      Text.of('Hold [').darkGray()
        .append(Text.of('Shift').gray())
        .append('] for Summary')
    )
  })
})