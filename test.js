//collect all eggs

kaboom({
    global: true,
    fullscreen: true,
    scale: 3,
    debug: true,
    clearColor: [0, 0, 0.3, 0],
  
  
  })
  
  // Speeds
  const MOVE_SPEED = 140
  const SLICER_SPEED = 100
  const SKELETOR_SPEED = 60
  const AMY_SPEED = 100
  const AMY2_SPEED = 100
  const TIME = 1500
  // Game Logic
  loadRoot('https://i.imgur.com/')
  loadSprite('link-going-left', 'Jhs9Ort.png')
  loadSprite('link-going-right', 'L5xvdrl.png')
  loadSprite('link-going-down', 'c7zdEez.png')
  loadSprite('link-going-up', 'AiRF3GI.png')
  loadSprite('char-going-left', 'OamNLcD.png')
  loadSprite('char-going-right', 'PYeXIve.png')
  loadSprite('char-going-down', 'c7zdEez.png')
  loadSprite('char-going-up', 'AiRF3GI.png')
  loadSprite('left-wall', '9TFD3oG.png')
  loadSprite('top-door', 'U9nre4n.png')
  loadSprite('fire-pot', 'I7xSp7w.png')
  loadSprite('left-door', 'okdJNls.png')
  loadSprite('lanterns', 'wiSiY09.png')
  loadSprite('slicer', '2SElTxG.png')
  loadSprite('fries', '5ZzTgLS.png')
  loadSprite('lean', 'PnSm7GF.png', )
  loadSprite('skeletor', 'aM9Y9i2.png')
  loadSprite('kaboom', '1fGsnD4.png')
  loadSprite('stairs', 'VghkL08.png')
  loadSprite('bg', 't5dnSjN.png ')
  // hzC8m1Q.png  t5dnSjN.png
  
  loadSprite('amy', 'c6JFi5Z.png')
  loadSprite('amy2', 'c6JFi5Z.png')
  loadSprite('al', '36mTRmz.gif')
  loadSprite('al2', '36mTRmz.gif')
  loadSprite('al3', '36mTRmz.gif')
  
  loadSprite('al4', '1lw6e1x.png')
  
  loadSprite('al5', 'SawrOLe.png')
  
  loadSprite('al6', 'X8kBtCi.png')
  //clothes
  loadSprite('shirt', '2SElTxG.png',)
  loadSprite('shirt2', '2SElTxG.png',)
  loadSprite('pants', 'ZNAm1Ig.png',)
  loadSprite('pants2', '4y5B6Gq.png',)
  
  //drinks
  loadSprite('water', '2SElTxG.png',)
  loadSprite('steak', '2SElTxG.png',)
  loadSprite('lemond', '2SElTxG.png',)
  loadSprite('rootbeer', '2SElTxG.png',)
  
  loadSprite('line','VoRjfVy.png')
  //[img]https://i.imgur.com/n1Rk8TJ.png[/img]
  loadSprite('line2','n1Rk8TJ.png')
  //food
  loadSprite('chickennugget', '2SElTxG.png')
  loadSprite('egg', '2SElTxG.png')
  loadSprite('burger', 'Jgu1NJB.png')
  loadSprite('chicken', '2SElTxG.png',)
  loadSprite('boruto', '2SElTxG.png', )
  loadSprite('pizza', '2SElTxG.png', )
  
  loadSprite('walker', 'U9M17O8.png')
  //https://imgur.com/ZcEWbAz
  loadSprite('bg2', '/ZcEWbAz.png')
  scene('title', () => {
    layers(['bg2', 'obj'], 'obj'); // 'obj' is the default layer
  
    // Add the background to the 'bg2' layer
    add([
        sprite('bg2'),
        layer('bg2'), // Add the sprite to the background layer
        origin('center'),
        pos(width() / 2, height() / 2), // Position it at the center
        scale(8), // Adjust scale as needed
    ]);
    add([
        text('Golden goose', 32),
        origin('center'),
        pos(width() / 2, height() / 3),
        color(0, 1, 0)
    ]);
    
    add([
        text('Press SPACE to view the rules', 16),
        origin('center'),
        pos(width() / 2, height() / 2),
         color(1, 1, 0)
    ]); 
  
    // Transition to the rules scene
    keyPress('space', () => {
        go('rules');
    });
  });
  
  // Rules scene
  scene('rules', () => {
    add([
      sprite('bg2'),
      layer('bg2'), // Add the sprite to the background layer
      origin('center'),
      pos(width() / 2, height() / 2), // Position it at the center
      scale(8), // Adjust scale as needed
  ]);
    add([
        text('Rules:', 24),
        origin('center'),
        pos(width() / 2, height() / 3.5),
        color(0, 1, 0)
    ]);
    
    add([
        text('1. Use WASD and Arrow key', 16),
        origin('center'),
        pos(width() / 2, height() / 2.5),
        color(0, 0, 0)
    ]);
    
    add([
        text('2. Run around & dogde enemies ', 16),
        origin('center'),
        pos(width() / 2, height() / 2),
        color(0, 0, 0)
    ]);
    
    add([
        text('enemies to collect eggs', 16),
        origin('center'),
        pos(width() / 2, height() / 1.5),
        color(0, 0, 0)
    ]);
    //
    add([
      text('SPACE to start & reload game.', 16),
      origin('center'),
      pos(width() / 2, height() / 1.2),
      color(0, 0, 0)
  ]);
    // Transition to the game scene
    keyPress('space', () => {
      go('game', { level: 0, score: 0 }); // Start the game
    });
  });
  start('title');
  scene('game', ({ level, score, }) => {
    layers(['bg', 'obj', 'ui'], 'obj')
  
    const maps = [
      [
      
        'aaaaaaaaaaa^',
        'aOOO}OOO  OOa',
        'aO    OOOOO   a',
        'aOOOOO    &OOa',
        'aOOO  OOO O}OOa',
        'aOO  *OOOOOOOOa',
        'aOOOO}OOOOOOOa',
        'aOOO   OOO OOOa',
        'aO  OOOO   OO(0a',
        'a             a',
        'aaaaaaaaaaaaaaa',
      ],
   
    
    ]
    
    
    const levelCfg = {
      width: 48,
      height: 48,
      a: [sprite('left-wall'), solid(), 'wall'],
      u: [sprite('al'),  scale(5), 'al'],
      p: [sprite('al2'),  scale(5), 'al2'],
      e: [sprite('al3'),  scale(5), 'al3'],
  
      o: [sprite('al4'),  scale(5), 'al4'],
  
      i: [sprite('al5'),  scale(5), 'al5'],
      O: [sprite('egg'),   'egg'],
      q: [sprite('al6'),  scale(5), 'al6'],
  
      '-': [sprite('line'),  scale(5), solid(), 'line'],
      '!': [sprite('line2'),  scale(5), solid(), 'line2'],
      '%': [sprite('left-door'), solid(), 'door'],
      '^': [sprite('top-door'), 'next-level'],
      $: [sprite('stairs'), 'before-level'],
  
      '}': [sprite('skeletor'), 'dangerous', 'skeletor',scale(2), { dir: -1, timer: 0 }],
      ')': [sprite('lanterns'), solid()],
      '(': [sprite('fire-pot'), solid()],
      '/': [sprite('walker'),'walker', scale(0.7),  solid(), ], 
     
      '*': [sprite('amy'), 'amy', { dir: -1 }, 'dangerous'],
      '&': [sprite('amy2'), 'amy2', { dir: -1 }, 'dangerous'],
    }
  //loadSprite('egg', '2SElTxG.png')
    addLevel(maps[level], levelCfg)
  
    add([sprite('bg'), layer('bg'), scale(1)])
  
    const scoreLabel = add([
      text('0'),
      pos(400, 450),
      layer('ui'),
      {
        value: score,
      },
      scale(2),
    ])
  
    add([text('level ' + parseInt(level + 1)), pos(-500, -700), scale(20)])
  
   
    const player = add([
      sprite('link-going-down'),
      pos(20, 300), solid(),scale(1.5),
      {
        // right by default
        dir: vec2(0, -1),
      }
      
    ])
  
    player.action(() => {
      player.resolve()
    })
    const playerTwo = add([
      sprite('char-going-down'),
      pos(85, 300), solid(), scale(1.5),
      
      {
        // right by default
        dir: vec2(0, -1),
      },
      
    ])
    playerTwo.action(() => {
      playerTwo.resolve()
     
    })
  
  
  //  player.action(() => {
  //  camPos(player.pos)
  //})
  //playerTwo.action(() => {
   // camPos(playerTwo.pos)
  //})
  
  if (screen.width > 960) {
   //screen.width < 960 player.collides('wall')
  
  keyDown('z', (x) => {
    player.action(() => {
        camPos(player.pos)
      })
  })
  }
  else {(camPos(player.pos)) 
    //screen.width < 960 player.collides('wall')
    keyDown('y', (y) => {
      camPos(320,152) 
  })
  }
   
  
  //160,150
  
  
  
  
  
    playerTwo.overlaps('before-level', () => {
      go('game', {
        level: (level - 1) % maps.length,
        score: scoreLabel.value,
      })
    })
  
    player.overlaps('before-level', () => {
      go('game', {
        level: (level - 1) % maps.length,
        score: scoreLabel.value,
      })
    })
  
  
  
    let eggsCollected = 0; // Initialize a counter for collected eggs
    const totalEggs = 40; // Set this to the total number of eggs in the level
    
   
   
   //here
  
    
  // Keep track of the current dialog data
  // wait(1, () => {
    //destroy(text)
  //})    hasslicer = true
  let curDialog = 0
  
  
  keyDown('l', (list) => {
    debug.log('Collect in this order...P1: shirt, water, drink, and burrito. P2:pizza, chicken, lemonade and shirt')
  })
  
  keyDown('i', (list) => {
    debug.inspect = true
  })
  
  keyDown('o', (list) => {
    debug.inspect = false
  })
  
    keyDown('a', (left) => {
      playerTwo.changeSprite('char-going-left')
      playerTwo.move(-MOVE_SPEED, 0)
      playerTwo.dir = vec2(-1, 0)
    })
  
    keyDown('d', (right) => {
      playerTwo.changeSprite('char-going-right')
      playerTwo.move(MOVE_SPEED, 0)
      playerTwo.dir = vec2(1, 0)
    })
  
    keyDown('w', (up) => {
      playerTwo.changeSprite('char-going-down')
      playerTwo.move(0, -MOVE_SPEED)
      playerTwo.dir = vec2(0, -1)
    })
  
    keyDown('s', (down) => {
      playerTwo.changeSprite('char-going-up')
      playerTwo.move(0, MOVE_SPEED)
      playerTwo.dir = vec2(0, 1)
    })
  
      playerTwo.overlaps('dangerous', () => {
      go('lose', { score: scoreLabel.value })
    })
  
  
    player.overlaps('next-level', () => {
      if (eggsCollected === totalEggs) {
        window.location.href = "game3.html";}
      
    })
    
  
    
    playerTwo.collides('door', (d) => {
      destroy(d)
    })
    playerTwo.overlaps('dangerous', () => {
      go('lose', { score: scoreLabel.value })
    })
  
    playerTwo.collides('egg', (e) => {
      destroy(e);
      eggsCollected++; 
    })
    
    player.collides('egg', (e) => {
      destroy(e);
      eggsCollected++; 
    })
  
  
   
  
    
  
    keyDown('left', () => {
      player.changeSprite('link-going-left')
      player.move(-MOVE_SPEED, 0)
      player.dir = vec2(-1, 0)
   
    })
  
    keyDown('right', () => {
      player.changeSprite('link-going-right')
      player.move(MOVE_SPEED, 0)
      player.dir = vec2(1, 0)
    })
  
    keyDown('up', () => {
      player.changeSprite('link-going-down')
      player.move(0, -MOVE_SPEED)
      player.dir = vec2(0, -1)
    })
  
    keyDown('down', () => {
      player.changeSprite('link-going-up')
      player.move(0, MOVE_SPEED)
      player.dir = vec2(0, 1)
    })
  //varavacation card
    keyPress('space', () => {
      spawnKaboom(playerTwo.pos.add(playerTwo.dir.scale()))
      
    })
    function spawnKaboom(p) {
      const obj = add([sprite('kaboom'), pos(p), 'kaboom'])
      wait(1, () => {
        destroy(obj)
      })
    }
  
    keyPress('space', () => {
      spawnKaboom(player.pos.add(player.dir.scale(48)))
    })
  
    player.collides('door', (d) => {
      destroy(d)
    })
  
    
   
    collides('kaboom', 'skeletor', (k,s) => {
      camShake(2)
      wait(1, () => {
        destroy(k)
      })
      destroy(s)
      scoreLabel.value++
      scoreLabel.text = scoreLabel.value
    })
   
  
    
  
    action('skeletor', (s) => {
      s.move(0, s.dir * SKELETOR_SPEED)
      s.timer -= dt()
      if (s.timer <= 0) {
        s.dir = -s.dir
        s.timer = rand(5)
      }
    })
  
    collides('skeletor', 'wall', (s) => {
      s.dir = -s.dir
    })
  
  
  const timer = add([
    text('0'),
    pos(10,10),
    scale(2),
    layer('ui'),
    {
      time: TIME,
    },
  ])
  
  scene('runout', ({ score }) => {
   
    add([text('you ran out of time, sorry :( Better luck next time!  '), origin('center'), pos(width() / 2, height() / 2)])
    
    
    //diseases. Good job and reload to play again
  })
  timer.action(() =>  {
    timer.time -= dt()
    timer.text = timer.time.toFixed(2)
    if (timer.time <= 0 ) {
      go('runout', { score: score.value })
    }
  })
  
  //var items = [haslean = true,hasslicer = true,hasboruto = true,haslemond = true,haswater = true,hasshirt = true]
  
  
    action('amy', (s) => {
      s.move(s.dir * AMY_SPEED, 0)
    })
  
    collides('amy', 'wall', (s) => {
      s.dir = -s.dir
    })
  
    action('amy2', (s) => {
        s.move(s.dir * AMY2_SPEED, 0)
      })
    
      collides('amy2', 'wall', (s) => {
        s.dir = -s.dir
      })
    
  
    player.overlaps('dangerous', () => {
      go('lose', { score: scoreLabel.value })
    })
  })
  
  
  
  
  
  
  scene('win', ({ score }) => {
    add([text(score, 36), origin('center'), pos(width()/2, height()/ 2)])
    
  
    add([text('You won!' +parseInt() ), pos(9, 6), ])
  
    
    //diseases. Good job and reload to play again
  })
  
  scene('lose', ({ score }) => {
    add([text(score, 32), origin('center'), pos(width() / 2, height() / 2)])
    keyPress("space", () => {
        go('game', { level: 0, score: 0 });
    });
  })
  
  
  
  start('game', { level: 0, score: 0 })
  
  