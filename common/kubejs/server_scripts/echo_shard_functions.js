const playSound = 'playSound(net.minecraft.world.entity.Entity,net.minecraft.core.BlockPos,net.minecraft.sounds.SoundEvent,net.minecraft.sounds.SoundSource,float,float)'
const $MobEffectInstance = Java.loadClass('net.minecraft.world.effect.MobEffectInstance')

// Echo shard absorbs sonic boom damage
EntityEvents.beforeHurt('minecraft:player', event => {
  const { player, source, level } = event
  let damageType = source.getType()
  const shard = 'minecraft:echo_shard'
  if (!player.isHoldingInAnyHand(shard) || damageType != 'sonic_boom') return
  else if (player.getMainHandItem().id == shard) {
    player.getMainHandItem().count--
  }
  else if (player.getOffHandItem().id == shard) {
    player.getOffHandItem().count--
  }
  level[playSound](null, player.blockPosition(), 'minecraft:block.glass.break', 'players', 1, 0.1)
  event.cancel()
})

// Use echo shard to get Echolocation effect
ItemEvents.rightClicked('minecraft:echo_shard', event => {
  const { item, player, hand, level } = event
  if (hand == 'OFF_HAND' && player.getMainHandItem() == item) return
  level[playSound](null, player.blockPosition(), 'minecraft:entity.warden.tendril_clicks', 'players', 1, 0.1)
  item.count--
  player.addEffect(new $MobEffectInstance('kubejs:echolocation', 400, 0, false, true))
})