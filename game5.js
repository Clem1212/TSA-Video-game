kaboom({
  global: true,
  fullscreen: true,
  scale: 1.2,
})

loadRoot('https://i.imgur.com/')
loadSprite('space-invader', 'HOildQC.png')
loadSprite('space-ship', 'AiRF3GI.png')
loadSprite('wall', 'fCKsBPE.png')
loadSprite('bg2', 'o66n7io.png')
scene('title', () => {
    layers(['bg2', 'obj'], 'obj'); // 'obj' is the default layer

    // Add the background to the 'bg2' layer
    add([
        sprite('bg2'),
        layer('bg2'), // Add the sprite to the background layer
        origin('center'),
        pos(width() / 2, height() / 2), // Position it at the center
        scale(2.5), // Adjust scale as needed
    ]);
    add([
        text('Hansel- Robin hood training', 32),
        origin('center'),
        pos(width() / 2, height() / 3),
        color(0,1,0)
    ]);
    
    add([
        text('Press SPACE to view the rules', 16),
        origin('center'),
        pos(width() / 2, height() / 2),
        color(0,1,0)
    ]);
  
    // Transition to the rules scene
    keyPress('space', () => {
        go('rules');
    });
  });
  
  // Rules scene
  scene('rules', () => {
    layers(['bg2', 'obj'], 'obj'); // 'obj' is the default layer

    // Add the background to the 'bg2' layer
    add([
        sprite('bg2'),
        layer('bg2'), // Add the sprite to the background layer
        origin('center'),
        pos(width() / 2, height() / 2), // Position it at the center
        scale(2.5), // Adjust scale as needed
    ]);
    add([
        text('Rules:', 24),
        origin('center'),
        pos(width() / 2, height() / 4),
        color(0,0,0)
    ]);
    
    add([
        text('1. Use arrow keys to move around ', 16),
        origin('center'),
        pos(width() / 2, height() / 3),
        color(0,0,0)
    ]);
    add([
        text('2. click and move the mouse to shoot the targets for your training', 16),
        origin('center'),
        pos(width() / 2, height() / 2.5),
        color(0,0,0)
    ]);
    //click and move the mouse to shoot the targets for your tranning
    add([
        text('3.Train with Robin Hood for witch fight', 16),
        origin('center'),
        pos(width() / 2, height() / 2),
        color(0,0,0)
    ]);
    
    add([
        text('Press SPACE to start the game and reload the game.', 16),
        origin('center'),
        pos(width() / 2, height() / 1.5),
        color(0,0,0)
    ]);
  
    // Transition to the game scene
    keyPress('space', () => {
        go('game'); // Start the game
    });
  });
  start('title');
scene('game', () => {
    window.location.href = "test.html";
})

start('game')

