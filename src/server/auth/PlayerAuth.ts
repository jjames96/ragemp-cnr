mp.events.add('playerJoin', (player: PlayerMp) => {
    player.call('showPlayerAuthView');
});
