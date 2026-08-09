// Define colors for tooltip text
const orange = 0xc7954b
const yellow = 0xeeda78

ItemEvents.modifyTooltips(event => {
  global.STYLIZED_TOOLTIPS.forEach(entry => {

    // Add tooltip for when SHIFT is pressed
    event.modify(entry.item, { shift: true }, tooltip => {
      let lineNumber = 1
      tooltip.insert(lineNumber++,
        Text.of('Hold [').darkGray()
          .append(Text.of('Shift').white())
          .append('] for Summary')
      )
      // "Summary" lines
      if (entry.hasOwnProperty('summary')) {
        entry.summary.forEach(line => {
          tooltip.insert(lineNumber++, Text.empty())
          tooltip.insert(lineNumber++, formattedText(line))
        })
      }
      // "Uses" lines
      if (entry.hasOwnProperty('uses')) {
        tooltip.insert(lineNumber++, Text.empty())
        entry.uses.forEach(use => {
          tooltip.insert(lineNumber++, formattedUses(use))
          lineNumber++
        })
      }
    })

    // Add tooltip for when SHIFT is not pressed
    event.modify(entry.item, { shift: false }, tooltip => {
      tooltip.insert(1,
        Text.of('Hold [').darkGray()
          .append(Text.of('Shift').gray())
          .append('] for Summary')
      )
    })
  })
})

/**
 *
 * Creates a formatted line of text, with characters between "$" being highlighted
 *
 * @param {line} A string of text to be formatted
 * @returns {text} A text object string
 */

function formattedText(line) {
  // Define text to format using $ to mark highlighted text
  let text = Text.empty()
  let emphatic = false

  // Apply colors and merge text segments
  line.split('$').forEach(segment => {
    text.append(
      Text.of(segment).color(emphatic ? yellow : orange)
    )
    emphatic = !emphatic
  })
  return text
}

/**
 *
 * Creates a block of text with a trigger action & explanation
 *
 * @param {use} An object to be formatted
 * @returns {text} An array of text objects
 */

function formattedUses(use) {
  // Define text array
  let text = []

  // Add first line with trigger action
  let action = Text.of(!!use.hold ? 'Hold ' : 'When ').gray()
  action.append(use.action)
  text.push(action)

  // Add second line with formatted text explanation
  let body = Text.of(' ')
  body.append(formattedText(use.text))
  text.push(body)

  return text
}