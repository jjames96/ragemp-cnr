const spawnPoints = [
    { x: -425.517, y: 1123.620, z: 325.8544 },
    { x: -415.777, y: 1168.791, z: 325.854 },
    { x: -432.534, y: 1157.461, z: 325.854 },
    { x: -401.850, y: 1149.482, z: 325.854 }
]

mp.events.add('playerDeath', (player) => {
    player.spawn(spawnPoints[Math.floor(Math.random() * spawnPoints.length)]);
    player.health = 100;
});
