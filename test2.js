
kaboom({
    global: true,
    fullscreen: true,
    scale: 3,
    debug: true,
  clearColor:[1,0,0],
  });
  
           
  // Speed identifiers
  const MOVE_SPEED = 120
  const JUMP_FORCE = 360
  const BIG_JUMP_FORCE = 550
  let CURRENT_JUMP_FORCE = JUMP_FORCE
  const FALL_DEATH = 800

  
  const SLICER_SPEED = 100

  const ENEMY_SPEED = 2000; // Increase this value for faster movement
const SKELETOR_SPEED = 2000; // Increase this value for faster vertical movement

const SKELETOR_SPAWN_INTERVAL = 1; // Time in seconds between each spawn
  // sprites and images
  //get sharable link, copy img and cut link to make it png form
  let isJumping = true
 // loadSprite('mushroom', 'assets/rat.png');


  loadRoot('https://i.imgur.com/')
  loadSprite('mushroom', 'pzU0qoW.gif')
  loadSprite("coin", "/IaEYlzh.png")
   // Function to spawn a skeletor
loadSprite('fireball','/I6pQvIO.png')
loadSprite('virus2', '/I6pQvIO.png')
loadSprite('virus1', '/I6pQvIO.png')
loadSprite('virus', '/I6pQvIO.png')

loadSprite('boss', '2Kfebjj.png')
loadSprite('2-top-left', '/0fOOkok.png')
  loadSprite('2-top-right', '/fovDvKp.png')

loadSprite('WBC-going-left', 'pw4C08u.png')
loadSprite('WBC-going-right', 'ftpM2dK.png')

loadSprite('2-bottom-left', 'c1cYSbt.png')
loadSprite('2-bottom-right', 'nqQ79eI.png')
  //hhBlaVP.png
  loadSprite('evil-shroom', 'lOhgTzW.gif')

  //LyN1IWt.png M6rwarW.png
  loadSprite('brick', '/eGQ0TNc.png')
  //hi
  loadSprite('block', '/eGQ0TNc.png')
  loadSprite('block2', '/eGQ0TNc.png')
  ///LyN1IWt.png
 
 //

  //0wMd92p.png dkeSOPL.png gesQ1KP.png
  loadSprite('surprise', '/eGQ0TNc.png')
  // xpm3bRa.png
  loadSprite('unboxed', '/eGQ0TNc.png')
  
  
  
  
  loadSprite("gun", "lkF9kTX.png");

 
  
  
  //  mk1acnS.png /X5JYvXn.jpg nZR4Z8X.png  zjqqceX.png-img
  loadSprite('bg', 'pxACvfD.jpg')
  
   loadSprite('WBC', '/AiRF3GI.png')
  loadSprite('WBC2', '/jixNMRZ.png')
   loadSprite('center', 'AiRF3GI.png')
   loadSprite('center2', '/jixNMRZ.png')

  
  
  loadSprite('testing', 'u0JLBTP.png')
  
  loadSprite('testingw', '/lqptrAD.png')
  loadSprite('testing3', 'u0JLBTP.png')
  //background objects ect...
  
  
  
  loadSprite('left-wall', 'rfDoaa1.png')
  loadSprite('top-wall', 'QA257Bj.png')
  loadSprite('bottom-wall', 'vWJWmvb.png')
  loadSprite('right-wall', 'SmHhgUn.png')
  loadSprite('bottom-left-wall', 'awnTfNC.png')
  loadSprite('bottom-right-wall', '84oyTFy.png')
   //xlpUxIm.png
  loadSprite('top-left-wall', 'xlpUxIm.png')
  
  loadSprite('top-right-wall', 'z0OmBd1.jpg')
  loadSprite('top-door', 'U9nre4n.png')
  loadSprite('fire-pot', 'xpm3bRa.png')
  loadSprite('left-door', 'okdJNls.png')
  loadSprite('win', '8HiUBSH.png')
  loadSprite('slicer', 'kEPti7g.png')
  loadSprite('skeletor', 'Ei1VnX8.png')
 //https://imgur.com/qsvJ5mY
 loadSprite('kaboom2','/L2QzPUQ.png')
 loadSprite('kaboom', '/QSnbWyw.png')

  loadSprite('stairs', 'VghkL08.png')
  loadSprite('Etest', 'LGGBhuF.png');
  //u4DVsx6.png
  loadSprite('bg2', 'wrihruP.png');
  
  loadSprite('page1','/erv89Xu.png');
  loadSprite('page2','/0qOD7Uv.png');
  loadSprite('page3','/1s3KLlk.png')
  loadSprite('page4','/3KXj0jE.png')
  loadSprite('page5','/a4Qt4Qv.png')
  loadSprite('page6','/JwgOg5i.png')

  scene('title', () => {
    layers(['bg2', 'obj'], 'obj'); // 'obj' is the default layer

    // Add the background to the 'bg2' layer
    add([
        sprite('bg2'),
        layer('bg2'), // Add the sprite to the background layer
        origin('center'),
        pos(width() / 2, height() / 2), // Position it at the center
        scale(0.3), // Adjust scale as needed
        
    ]);

    add([
        text('Witch Boss Fight', 32),
        origin('center'),
        pos(width() / 2, height() / 3),
        color(1, 0, 0) 
    ]);
    
    add([
        text('Press SPACE to view the rules', 16),
        origin('center'),
        pos(width() / 2, height() / 2),
        color(1, 0, 0) 
    ]);

    keyPress('space', () => {
        go('rules');
    });
});

// Rules scene
scene('rules', () => {
  layers(['bg2', 'obj'], 'obj'); // 'obj' is the default layer

  add([
    sprite('bg2'),
    layer('bg2'), // Add the sprite to the background layer
    origin('center'),
    pos(width() / 2, height() / 2), // Position it at the center
    scale(0.3), // Adjust scale as needed
    
]);

    add([
        text('Rules:', 24),
        origin('center'),
        pos(width() / 2, height() / 4.5),
        color(1, 0, 0) 
    ]);
    
    add([
        text('1. Use arrow keys to move', 16),
        origin('center'),
        pos(width() / 2, height() / 3),
        color(1, 0, 0) 
    ]);
    
    add([
        text('2. Avoid enemies and collect coins', 16),
        origin('center'),
        pos(width() / 2, height() / 2),
        color(1, 0, 0) 
    ]);
    
    add([
        text('Press SPACE to start the game', 16),
        origin('center'),
        pos(width() / 2, height() / 1.5),
        color(1, 0, 0) 
    ]);

    keyPress('space', () => {
        go('game', { level: 0, score: 0 });
    });
});

// Game scene
scene("game", ({ level, score }) => {
    layers(['bg', 'obj', 'ui'], 'obj');
    add([sprite('bg'), layer('bg'), pos(0, 0)]);

    const player = add([
        sprite('WBC'),
        pos(30, 0),
        body(),
        origin('bot')
        ,scale(0.7),
    ]);

    // Other game code, including movement, collision, etc.


    keyPress('space', () => {
        // Game logic for space press if needed
    });
});

// Start with the title screen
start('title');
  scene("game", ({ level, score }) => {
   
    layers(['bg', 'obj', 'ui'], 'obj');
   
  //drawing map
    const maps = [
      [ '                                                                                                                ',
        '                                                                                                                ',
        '                                                        4                                                      i',
        '            =====                          ----%-============   ===%%%%===%%%%%%%====    ==%%====            ===',
        '                                                                                                            ====',
        '                                                                                                           =====',
        '                         1                    3                                       ===                 ======',
        '      =====          %====          ===============   ====================   ======%=======/            ========',
        '                                                                                                     ========== ',
        '                                ==                                                                 ============ ',
        '                                           2                              == 5                 =================',
        '================================================================================================================',
      ], 
      
      [ 
        '=                                  =   ',
        '=                                  =   ',
        '=                                  =   ',
        '=                                  =   ',
        '=                                  =   ',
        '=                                  =   ',
        '=                                  =   ',
        '=                                  =   ',
        '=                                  =   ',
        '=                                  =   ',
        '=             8                    =   ',
        '=                                  =   ',
        '=                                  =   ',
        '=                4  ==             =   ',
        '=                                  =   ',
        '=            =====                 =   ',
        '=                                  =   ',
        '=             $        $           =   ',
        '=    ===               =           =    ',
        '=                                  =    ',
        '=        =====                     =   ',
        '======            $                =   ',
        '=               ===                =   ',
        '=           $        ==    $       =   ',
        '=           =             ==       =   ',
        '= $  $$$   $$ $ $  $$$  $ $$   $$  =   ',
        '====================================   ',
      ], 
      
  
      
    ]
  //sprite for =
    const levelCfg = {
      width: 20,
      height: 20,
      '=': [sprite('block'), solid(), scale(0.8),'block'],
      '-': [sprite('block2'), solid(), scale(0.8)],
      '$': [sprite('coin'), 'coin' ,scale(0.7)],
      '%': [sprite('surprise'), solid(), scale(0.8), 'coin-surprise' ],
      '*': [sprite('surprise'), solid(),  scale(0.8), 'mushroom-surprise'],
      '}': [sprite('unboxed'), solid() ,scale(0.8)],
      '8': [sprite('skeletor'), solid() ,scale(2), 'dangerous','skelly'],
     
      //88
       '_': [sprite('virus1'), solid(), scale(0.3),  'dangerous'],
      '.': [sprite('evil-shroom'), solid(), scale(0.3), 'dangerous'],
      '#': [sprite('mushroom'), solid(), 'mushroom', body() , scale(0.6)],
      '9':[sprite('virus2'), solid(), 'virus2', body() , scale(0.6), 'dangerous'],
      'q':[sprite('virus'), solid(), 'virus', body() , scale(0.6), 'dangerous'],
      //_!
      //LI
      '4': [sprite('win'), solid(), 'win',  scale(0.2), 'win'],
      'F': [sprite('testing'), solid(), 'testing', body(), scale(0.9), 'pipe'],
      '1': [sprite('page1'), 'coin' ,scale(0.7)],
      '2': [sprite('page2'), 'coin' ,scale(0.7)],
      '3': [sprite('page3'), 'coin' ,scale(0.7)],
      '4': [sprite('page4'), 'coin' ,scale(0.7)],
      '5': [sprite('page5'), 'coin' ,scale(0.7)],
      '6': [sprite('page6'), 'coin' ,scale(0.7)],
     'i': [sprite('testingw'), solid(), 'testing',  scale(0.9), 'bmw'],
     
    
      
      
  //not moving add 'varname' like 'virus2' if remvove it moves
    }//-500 -700
    
    add([sprite('bg'), layer('bg'), pos(-500,-240)])
  
  
    const gameLevel = addLevel(maps[level], levelCfg)
  
    
    const scoreLabel = add([
      text(score),
      pos(30, 6),
      layer('ui'),
      {
        value: score,
      }
    ])
  
    add([text('level ' + parseInt(level + 1) ), pos(40, 6)])
    
    function big() {
      let timer = 0
      let isBig = false
      return {
        update() {
          if (isBig) {
            CURRENT_JUMP_FORCE = BIG_JUMP_FORCE
            timer -= dt()
            if (timer <= 0) {
              this.smallify()
            }
          }
        },
        isBig() {
          return isBig
        },
        smallify() {
          this.scale = vec2(1)
          CURRENT_JUMP_FORCE = JUMP_FORCE
          timer = 0
          isBig = false
        },
        biggify(time) {
          this.scale = vec2(2)
          timer = time
          isBig = true
        }
      }
    }
  
   
  
    const player = add([
      sprite('WBC'), solid(),
      pos(30, 0),
      body(),
      big(),
      origin('bot')
      ,scale(0.7),
    ])
  
    const player2 = add([
        sprite('WBC2'), solid(),
        pos(40, 0),
        body(),
        big(),
        origin('bot')
        ,scale(0.040),
      ])
    
      const bossEnemy = add([
        sprite("boss"),
        pos(-120, height() - 10),
        origin("bot"),
        { speed: 50 },
        scale(1.5),
        solid(),
        "dangerous2",
        "boss",
    ]);
    loop(1, () => {
      if (bossEnemy.speed < 100) {
          bossEnemy.speed += 1; // Adjust increment to control the rate of speed increase
      }
  });
  
    // Boss movement
    bossEnemy.action(() => {
        bossEnemy.pos.x += bossEnemy.speed * dt();
    });
    
    // Player collision with boss
    player.collides("boss", (enemy) => {
        if (isJumping) {
            destroy(enemy);
            player.biggify(6);
        } else {
            go("lose", { score: scoreLabel.value });
        }
    });
    
    // Debug toggle
    keyDown("i", () => {
        debug.inspect = true;
    });
    keyDown("o", () => {
        debug.inspect = false;
    });
    
    // Handle collisions and destruction
    action("dangerous2", (dangerous) => {
        if (destructionCooldown > 0) {
            destructionCooldown -= dt();
            return;
        }
    
        // Handle block collisions
        dangerous.collides("block", (block) => {
            toDestroy.add(block);
        });
    
        // Handle coin collisions
        dangerous.collides("coin", (coin) => {
            toDestroy.add(coin);
        });
    
        // Handle surprise collisions
        dangerous.collides("surprise", (surprise) => {
            toDestroy.add(surprise);
        });
    
        // Process destruction queue periodically
        loop(0.1, () => {
            toDestroy.forEach((obj) => destroy(obj));
            toDestroy.clear();
            destructionCooldown = 0.2; // Cooldown of 0.2 seconds
        });
    });
      let isJumping = false;
      let destructionCooldown = 0;
      const toDestroy = new Set();

    //https://imgur.com/qsvJ5mY
    let kaboomActive = false;
let kaboomSprite = null;
let kaboom2Active = false;
let kaboom2Sprite = null;



keyPress('s', () => {
  if (!kaboom2Active) {
      kaboom2Active = true;
      kaboom2Sprite = add([
          sprite('kaboom2'),
          pos(player.pos.x + 30, player.pos.y), // Offset from player
          scale(1),
          'kaboom2'
      ]);

      // Make the kaboom move forward like a fireball
      kaboom2Sprite.action(() => {
          kaboom2Sprite.move(100, 0); // Move forward
          kaboom2Sprite.angle += 5; // Spin the kaboom sprite

          // Check if it goes off-screen
          if (kaboom2Sprite.pos.x > width()) {
              destroy(kaboom2Sprite);
              kaboom2Active = false;
          }
      });

      // Destroy kaboom after a certain time if it doesn't go off-screen
      wait(2, () => {
          if (kaboom2Sprite) {
              destroy(kaboom2Sprite);
              kaboom2Active = false;
          }
      });
  }
});


// Collision logic for kaboom
action('kaboom2', (k) => {
  // Check for collision with enemies
  k.collides('dangerous', (d) => {
    destroy(d); // Destroy dangerous entity
    destroy(k); // Destroy kaboom
});

 
});
player.collides('win', (v) => {
  window.location.href = 'win.html'
      destroy(k); // Destroy kaboom
  });
  player2.collides('win', (v) => {
    window.location.href = 'win.html'
        destroy(k); // Destroy kaboom
    });
keyPress('down', () => {
  if (!kaboomActive) {
    kaboomActive = true;
    kaboomSprite = add([
      sprite('kaboom'),
      pos(player2.pos.x, player2.pos.ys),
      scale(1),
      'kaboom'
    ]);
    
    // Make the kaboom follow player2
    kaboomSprite.action(() => {
      kaboomSprite.pos = player2.pos;
    });
    
    // Destroy kaboom after 5 seconds
    wait(3, () => {
      if (kaboomSprite) {
        destroy(kaboomSprite);
        kaboomActive = false;
      }
    });
  }
});
// Define a unified collision handler function
function handlePlayer2CollisionWithDangerous(d) {
  if (kaboomActive) {
    // Destroy the dangerous entity if kaboom is active
    destroy(d);
  } else {
    // Otherwise, trigger the 'lose' scene with the current score
    go('lose', { score: scoreLabel.value });
  }
}

// Combine collision handlers for both 'dangerous' and 'virus'
player2.collides('dangerous', handlePlayer2CollisionWithDangerous);
player2.collides('virus', handlePlayer2CollisionWithDangerous);

player.collides('virus', (d) => {
  if (kaboomActive) {
    // If kaboom is active, destroy the dangerous item instead of losing
    destroy(d);
  } else {
    go('lose', { score: scoreLabel.value });
  }
});
// sprite('virus'), 
// Do the same for 'virus2' collisions
player2.collides('virus2', (m) => {
  if (kaboomActive) {
    destroy(m);
  } else if (isJumping) {
    destroy(m);
    player2.biggify(6);
  } else {
    go('lose', { score: scoreLabel.value });
  }
});
    


    action('virus2', (m) => {
      m.move(20, 0)
    })
  
    function spawnFireball(x, y) {
      add([
          sprite('fireball'), // Load or define your fireball sprite
          pos(x, y),
          body(),
          'fireball'
      ]);
  }
 
   // Modify the Skeletor behavior
   action('skeletor', (s) => {
  
    // Spawn enemies near Skeletor every second (only if we're on level 1, which is the second level)
    if (level === 1) {
      loop(1, () => {
        add([
          sprite('virus1'),
          pos(s.pos.x + rand(-50, 50), 0),
          solid(),
          scale(0.3),
          'dangerous'
        ]);
      });
    }
  });

// Skeletor's attack (simple pattern)
// Action for Skeletor's behavior
action('skeletor', (s) => {
  // Loop to spawn enemies near Skeletor every second
  loop(1, () => {
    // Get Skeletor's current position
    const skeletorPos = s.pos.x;
    
    // Spawn enemies near Skeletor's x position (with a random offset)
    add([
      sprite('virus1'),
      pos(skeletorPos + rand(-50, 50), 0), // Random x offset near Skeletor's position, y = 0 (top of the screen)
      solid(),
      scale(0.3),
      'dangerous'
    ]);
  });
});

// Action for dangerous enemies (virus1) falling down


  // Fireball movement logic
  action('fireball', (f) => {
      f.move(-200, 0); // Adjust speed/direction as needed
  });
  
     
  
    player.collides('virus2', (m) => {
        
      if (isJumping) {
         destroy(m)
      player.biggify(6)
      } else {
        go('lose', { score: scoreLabel.value})
      }
    
      
    })
  
  
  
// window.location.href = 'win.html'
 
  
player.collides('skelly', (d) => {
 window.location.href = 'win.html'
})



player.collides('skelly', (d) => {
  if (kaboomActive) {
    window.location.href = 'win.html'
    destroy(d);
  } 
});



  player.collides('bmw', () => {
   
     
          go('game', {
            level: (level + 1) % maps.length,
            score: scoreLabel.value
          
        })
    
    
    })
    player2.collides('bmw', () => {
   
     
      go('game', {
        level: (level + 1) % maps.length,
        score: scoreLabel.value
      
    })


})
  
    action('mushroom', (m) => {
      m.move(20, 0)
    })
  
    player.on("headbump", (obj) => {
      if (obj.is('coin-surprise')) {
        gameLevel.spawn('$', obj.gridPos.sub(0, 1))
        destroy(obj)
        gameLevel.spawn('}', obj.gridPos.sub(0,0))
      }
      if (obj.is('mushroom-surprise')) {
        gameLevel.spawn('#', obj.gridPos.sub(0, 1))
        destroy(obj)
        gameLevel.spawn('}', obj.gridPos.sub(0,0))
      }
    })
  
    player.collides('mushroom', (m) => {
      destroy(m)
      player.biggify(6)
    })
  
    player.collides('coin', (c) => {
      destroy(c)
      scoreLabel.value++
      scoreLabel.text = scoreLabel.value
    })
  
   //= 
   
  
    player.collides('dangerous', (d) => {
      if (isJumping) {
        destroy(d)
      } else {
        go('lose', { score: scoreLabel.value})
      }
    })
    player.collides('dangerous', (d) => {
      if (isJumping) {
         spawnSkeletor();
      } else {
        go('lose', { score: scoreLabel.value})
      }
    })
    player2.collides('dangerous', (d) => {
      if (isJumping) {
         spawnSkeletor();
      } else {
        go('lose', { score: scoreLabel.value})
      }
    })
    player.action(() => {
      camPos(player.pos)
      if (player.pos.y >= FALL_DEATH) {
        go('lose', { score: scoreLabel.value})
      }
    })
    
    


  //pipe testing
    player.collides('pipe', () => {
      keyPress('down', () => {
        
        
        go('win', { score: scoreLabel.value})
        
      })
    })
    


    

    const SKELETOR_SPAWN_INTERVAL = 5; // Time interval to spawn skeletors
    
    // Action for a dangerous enemy moving left
   
    
    // Function to spawn a skeletor
    function spawnSkeletor() {
      const skeletor = add([
        sprite('virus'),sprite('space-invader'), sprite('space-invader3'),// Add your skeletor sprite here
        pos(rand(0, width()), -50), // Random horizontal position, starting above the screen
        'virus', // Tag for collision detection
        { dir: 1, timer: rand(5) } // Initial properties
      ]);
      action('skeletor', (s) => { // Move skeletor vertically
        s.move(0, SKELETOR_SPEED * dt());
      });
      
      // Move skeletor downwards
      action('virus', (s) => {
        s.move(0, SKELETOR_SPEED * dt());
      });
    
      // Collision with the player
      collides('virus', 'player', () => {
        gameOver(); 
      });
      collides('virus', 'player2', () => {
        gameOver(); 
      });
    }
    
    // Function to handle game over
    function gameOver() {
      console.log("Game Over!");
    }
    
    // Function to check if the 'dangerous' tile is present
    function checkDangerousTile() {
      const dangerousTileExists = get('dangerous').length > 0; // Check if any 'dangerous' tile exists
    
      if (dangerousTileExists) {
        spawnSkeletor(); // Spawn skeletor if dangerous tile is present
      }
    }
    
    // Spawn skeletors at regular intervals but only when 'dangerous' tile is present
    loop(SKELETOR_SPAWN_INTERVAL, () => {
      checkDangerousTile(); // Check for dangerous tile before spawning
    });
    


    
  
    player2.collides('virus2', (m) => {
        
        if (isJumping) {
           destroy(m)
        player2.biggify(6)
        } else {
          go('lose', { score: scoreLabel.value})
        }
      
        
      })
    
    
    
      
      
      
      action('mushroom', (m) => {
        m.move(20, 0)
      })
    
      player2.on("headbump", (obj) => {
        if (obj.is('coin-surprise')) {
          gameLevel.spawn('$', obj.gridPos.sub(0, 1))
          destroy(obj)
          gameLevel.spawn('}', obj.gridPos.sub(0,0))
        }
        if (obj.is('mushroom-surprise')) {
          gameLevel.spawn('#', obj.gridPos.sub(0, 1))
          destroy(obj)
          gameLevel.spawn('}', obj.gridPos.sub(0,0))
        }
      })
    
      player2.collides('mushroom', (m) => {
        destroy(m)
        player2.biggify(6)
      })
    
      player2.collides('coin', (c) => {
        destroy(c)
        scoreLabel.value++
        scoreLabel.text = scoreLabel.value
      })
    
     
      player2.collides('dangerous', (d) => {
        if (isJumping) {
          destroy(d)
        } else {
          go('lose', { score: scoreLabel.value})
        }
      })
    
      
      
    //pipe testing
      player2.collides('pipe', () => {
        keyPress('s', () => {
          
          
          go('win', { score: scoreLabel.value})
          
        })
      })









    //
  scene('win', ({ score }) => {
    add([text(score, 36), origin('center'), pos(width()/2, height()/ 2)])
    
    
    
    
    
    
  
    
  })
    
   //yes bmw
   
  
    
    
      
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    //platform
    
    
     
    keyDown('left', () => {
      player2.move(-MOVE_SPEED, 0);
      player2.changeSprite('2-top-left');
      player2.scale = 0.040;
  });
  
  keyDown('right', () => {
      player2.move(MOVE_SPEED, 0);
      player2.changeSprite('2-top-right');
      player2.scale = 0.040;
  });
  
    
    
      keyDown('down', () => {
        // Destroy all objects tagged as 'dangerous'
       
       player2.scale = 0.040;
        // Change the player's sprite to represent jumping
        player2.changeSprite('center2'); // Change 'jumping' to your actual jumping sprite
      });
      
     
    
     
    
      keyDown('a', () => {
        player.move(-MOVE_SPEED, 0)
         player.changeSprite('WBC-going-left')
      })
    
    
     keyDown('s', () => {
       
         player.changeSprite('center')
      })
      
      keyDown('d',  () => {
        player.move(MOVE_SPEED, 0)
         player.changeSprite('WBC-going-right')
      })
    
    //thank the lord stay humble
    
    
    
    
    
    
      player.action(() => {
        if(player.grounded()) {
          isJumping = false
        }
      })
    
      keyPress('w', () => {
        if (player.grounded()) {
          isJumping = true
          player.jump(CURRENT_JUMP_FORCE)
        }
      })
      keyPress('up', () => {
          if (player2.grounded()) {
            isJumping = true
            player2.jump(CURRENT_JUMP_FORCE)
          }
        })
    })
  
    
    
    
    scene('lose', ({ score }) => {
      add([text(score, 32), origin('center'), pos(width()/2, height()/ 2)])
      keyPress("space", () => {
        go('game', { level: 0, score: 0 });
    });
    })
    
    scene('win', ({ score }) => {
      text('you won', 32),
      add([text(score, 32), origin('center'), pos(width()/2, height()/ 2)])
      keyPress("space", () => {
        go('game', { level: 0, score: 0 });
    });
    })
    
    
    
    start("game", { level: 0, score: 0})