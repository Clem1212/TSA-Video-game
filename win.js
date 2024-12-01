
kaboom({
    global: true,
    fullscreen: true,
    scale: 3,
    debug: true,
  clearColor:[1,0,0],
  backgroundAudio: true,
  });
  
  
  
  
  
  
  // sprites and images
  //get sharable link, copy img and cut link to make it png form
  let isJumping = true
 // loadSprite('mushroom', 'assets/rat.png');


  loadRoot('https://i.imgur.com/')
 
  
  //  mk1acnS.png /X5JYvXn.jpg nZR4Z8X.png  zjqqceX.png-img  sRlE71R.png
  loadSprite('bg2', '3SIAnNb.png')
  loadSprite('bg3', '/4dfLkTd.png')
  //sRlE71R.png
  loadSprite('bg', 'nZR4Z8X.png ')
  
  scene('title', () => {
    // Define layers: 'bg2' will be for the background, 'obj' for text and other objects
    layers(['bg2', 'obj'], 'obj'); // 'obj' is the default layer

    // Add the background to the 'bg2' layer
    add([
        sprite('bg2'),
        layer('bg2'), // Add the sprite to the background layer
        origin('center'),
        pos(width() / 2, height() / 2), // Position it at the center
        scale(0.8), // Adjust scale as needed
    ]);
   // add([
   //    text('Hansel and Gretel:', 32),
 //      origin('center'),
  //     pos(width() / 2, height() / 6),
 //      color(1, 1, 1), 
 //      scale(0.4)
 //  ]);
    // Add the title text to the 'obj' layer (default)
    add([
        text('', 32),
        origin('center'),
        pos(width() / 2, height() / 3),
        color(0, 0, 1),
        scale(0.8)
    ]);
    add([
      text('', 16),
      origin('center'),
      pos(width() / 2, height() / 2),
      color(1, 1, 1), 
  ]);
    // Add the instruction text to the 'obj' layer Click on Screen & 
    add([
        text('Press SPACE to skip', 16),
        origin('center'),
        pos(width() / 2, height() / 1.5),
        color(1, 1, 1), 
    ]);

    // Transition to the rules scene when space is pressed
    keyPress('space', () => {
        go('rules');
    });
});


// Rules scene
scene('rules', () => {
  layers(['bg2', 'obj'], 'obj'); // 'obj' is the default layer

  // Add the background to the 'bg2' layer
  add([
      sprite('bg3'),
      layer('bg2'), // Add the sprite to the background layer
      origin('center'),
      pos(width() / 2, height() / 2), // Position it at the center
      scale(0.9), // Adjust scale as needed
  ]);
    add([
        text('', 24),
        origin('center'),
        pos(width() / 2, height() / 3.5),
        color(1, 0, 0)
    ]);
    
    add([
        text('', 16),
        origin('center'),
        pos(width() / 2, height() / 2.5),
        color(1, 1, 1), 
    ]);
    
    add([
        text('', 16),
        origin('center'),
        pos(width() / 2, height() / 1.9),
        color(1, 1, 1), 
    ]);
    
    add([
        text('', 16),
        origin('center'),
        pos(width() / 2, height() / 1.5),
        color(1, 1, 1), 
    ]);

    keyPress('space', () => {
        go('game', { level: 0, score: 0 });
    });
});

// Game scene
scene("game", ({ level, score }) => {
  

    window.location.href = "index.html";
});

// Start with the title screen
start('title');
  