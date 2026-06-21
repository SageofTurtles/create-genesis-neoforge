const $MobEffectInstance = Java.loadClass('net.minecraft.world.effect.MobEffectInstance')

// Echolocation: causes mobs & players within range to glow
StartupEvents.registry('mob_effect', event => {
  event.create('echolocation')
    .beneficial()
    .color(0x00b7c0)
    .effectTick((entity, lvl) => {
      if (entity.level.isClientSide()) return
      let radius = 48.0
      let boundingBox = entity.boundingBox.inflate(radius, radius, radius)
      let entitiesInRange = entity.level.getEntitiesWithin(boundingBox)
      entitiesInRange.forEach(target => {
        if (target.isLiving() && (target.uuid != entity.uuid)) {
          target.addEffect(new $MobEffectInstance('minecraft:glowing', 30, 0, false, false))
        }
      })
    })
})
