// priority: 100

var JEIInfo = (function () {
  const $Minecraft = Java.loadClass('net.minecraft.client.Minecraft')
  const $Component = Java.loadClass('net.minecraft.network.chat.Component')
  const $ArrayList = Java.loadClass('java.util.ArrayList')


  function argb(color, fallback) {
    return (color === undefined || color === null ? fallback : color) | 0
  }

  const COLOR_TEXT = 0xFF404040 | 0
  const COLOR_TEXT_DIM = 0xFF7A7A7A | 0
  const COLOR_ARROW = 0xFF5B5B5B | 0
  const COLOR_FRAME = 0xFF8B8B8B | 0

  function font() {
    return $Minecraft.getInstance().font
  }


  function comp(str) {
    return $Component.literal(String(str))
  }


  function isFluid(id) {
    try {
      return Fluid.exists(id)
    } catch (err) {
      return false
    }
  }


  function fillSlot(slot, ingredient) {
    if (ingredient === null || ingredient === undefined || ingredient === '') return slot

    if (Array.isArray(ingredient)) {
      ingredient.forEach(entry => fillSlot(slot, entry))
      return slot
    }

    if (typeof ingredient === 'object') {
      if (ingredient.fluid) return slot.addFluidStack(ingredient.fluid, ingredient.amount || 1000)
      if (ingredient.tag) return slot.addIngredients(Ingredient.of(ingredient.tag))
      if (ingredient.item) return slot.addItemStack(Item.of(ingredient.item, ingredient.count || 1))
      return slot
    }

    const str = String(ingredient)
    if (str.startsWith('#')) return slot.addIngredients(Ingredient.of(str))
    if (isFluid(str)) return slot.addFluidStack(str, 1000)
    return slot.addItemStack(Item.of(str))
  }


  function slot(builder, role, x, y, ingredient) {
    const s = builder.addSlot(role, x, y)

    if (role === 'OUTPUT') {
      s.setOutputSlotBackground()
    } else {
      s.setStandardSlotBackground()
    }

    try {
      fillSlot(s, ingredient)
    } catch (err) {

      console.error(`[JEIInfo] failed to put ingredient into slot: ${err}`)
    }

    return s
  }


  function arrowRight(g, x, cy, len, color) {
    const c = argb(color, COLOR_ARROW)
    const head = 6
    g.fill(x, cy - 1, x + len - head, cy + 2, c)
    for (let i = 0; i < head; i++) {
      g.fill(x + len - head + i, cy - 6 + i, x + len - head + i + 1, cy + 7 - i, c)
    }
  }

  function arrowDown(g, cx, y, len, color) {
    const c = argb(color, COLOR_ARROW)
    const head = 6
    g.fill(cx - 1, y, cx + 2, y + len - head, c)
    for (let i = 0; i < head; i++) {
      g.fill(cx - 6 + i, y + len - head + i, cx + 7 - i, y + len - head + i + 1, c)
    }
  }

  function arrowDownRight(g, x, y, size, color) {
    const c = argb(color, COLOR_ARROW)
    const head = 5
    const shaft = size - head

    for (let i = 0; i < shaft; i++) {
      g.fill(x + i, y + i, x + i + 3, y + i + 3, c)
    }

    const tx = x + size
    const ty = y + size
    for (let j = 0; j <= head; j++) {
      g.fill(tx - j, ty - head + j, tx + 2, ty - head + j + 1, c)
    }
  }

  function plus(g, cx, cy, color) {
    const c = argb(color, COLOR_ARROW)
    g.fill(cx - 5, cy - 1, cx + 6, cy + 2, c)
    g.fill(cx - 1, cy - 5, cx + 2, cy + 6, c)
  }

  const DRAW_STRING_EXACT =
    'drawString(net.minecraft.client.gui.Font,net.minecraft.network.chat.Component,int,int,int,boolean)'
  const DRAW_SEQUENCE_EXACT =
    'drawString(net.minecraft.client.gui.Font,net.minecraft.util.FormattedCharSequence,int,int,int,boolean)'

  let drawStringFallback = false

  function drawText(g, component, x, y, color) {
    if (!drawStringFallback) {
      try {
        g[DRAW_STRING_EXACT](font(), component, x, y, color, false)
        return
      } catch (err) {
        drawStringFallback = true
        console.warn(`[JEIInfo] explicit choice of drawString overload is not available, text will be shadowed: ${err}`)
      }
    }

    g.drawString(font(), component, x, y, color)
  }

  function drawSequence(g, sequence, x, y, color) {
    if (!drawStringFallback) {
      try {
        g[DRAW_SEQUENCE_EXACT](font(), sequence, x, y, color, false)
        return
      } catch (err) {
        drawStringFallback = true
        console.warn(`[JEIInfo] explicit choice of drawString overload is not available, text will be shadowed: ${err}`)
      }
    }

    g.drawString(font(), sequence, x, y, color)
  }

  function textWidth(str) {
    return font().width(comp(str))
  }

  function text(g, str, x, y, color) {
    drawText(g, comp(str), x, y, argb(color, COLOR_TEXT))
  }

  function textCentered(g, str, cx, y, color) {
    const s = String(str)
    drawText(g, comp(s), Math.floor(cx - textWidth(s) / 2), y, argb(color, COLOR_TEXT))
  }


  function paragraph(g, lines, x, y, wrapWidth, lineHeight, color) {
    const c = argb(color, COLOR_TEXT)
    const lh = lineHeight || 10
    const arr = Array.isArray(lines) ? lines : [lines]
    let cy = y

    for (let n = 0; n < arr.length; n++) {
      const split = font().split(comp(arr[n]), wrapWidth)

      for (let i = 0; i < split.size(); i++) {
        drawSequence(g, split.get(i), x, cy, c)
        cy += lh
      }
    }

    return cy
  }


  function tooltip(lines) {
    const list = new $ArrayList()
    const arr = Array.isArray(lines) ? lines : [lines]

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === null || arr[i] === undefined || arr[i] === '') continue
      list.add(comp(arr[i]))
    }

    return list
  }


  function inRect(mouseX, mouseY, x, y, w, h) {
    return mouseX >= x && mouseX < x + w && mouseY >= y && mouseY < y + h
  }


  const BADGE = 9

  function noteBadge(g, x, y) {
    g.fill(x, y, x + BADGE, y + BADGE, COLOR_FRAME)
    g.fill(x + 1, y + 1, x + BADGE - 1, y + BADGE - 1, 0xFFC6C6C6 | 0)


    const glyph = Math.max(1, textWidth('?') - 1)
    const gx = x + 1 + Math.floor((BADGE - 2 - glyph) / 2)

    drawText(g, comp('?'), gx, y + 1, COLOR_TEXT)
  }

  function overNoteBadge(mouseX, mouseY, x, y) {
    return inRect(mouseX, mouseY, x, y, BADGE, BADGE)
  }

  return {
    COLOR_TEXT: COLOR_TEXT,
    COLOR_TEXT_DIM: COLOR_TEXT_DIM,
    COLOR_ARROW: COLOR_ARROW,
    COLOR_FRAME: COLOR_FRAME,

    argb: argb,
    font: font,
    comp: comp,

    slot: slot,
    fillSlot: fillSlot,

    arrowRight: arrowRight,
    arrowDown: arrowDown,
    arrowDownRight: arrowDownRight,
    plus: plus,

    text: text,
    textCentered: textCentered,
    textWidth: textWidth,
    paragraph: paragraph,
    tooltip: tooltip,

    inRect: inRect,
    BADGE: BADGE,
    noteBadge: noteBadge,
    overNoteBadge: overNoteBadge
  }
})()
