
kaboom({
    global: true,
    fullscreen: true,
    scale: 3,
    debug: true,
  clearColor:[1,0,0],
  backgroundAudio: true,
  });
  
  
  
  
  
  
  
  
           
  // Speed identifiers
  const MOVE_SPEED = 120
  const JUMP_FORCE = 360
  const BIG_JUMP_FORCE = 550
  let CURRENT_JUMP_FORCE = JUMP_FORCE
  const FALL_DEATH = 460
  const ENEMY_SPEED = 20
  
  const SLICER_SPEED = 100
  const SKELETOR_SPEED = 60
  
  
  // sprites and images
  //get sharable link, copy img and cut link to make it png form
  let isJumping = true
 // loadSprite('mushroom', 'assets/rat.png');


  loadRoot('https://i.imgur.com/')
  loadSprite('mushroom', 'pzU0qoW.gif')
  loadSprite("coin", "/IaEYlzh.png")
  
  loadSprite('2-top-left', '/0fOOkok.png')
  loadSprite('2-top-right', '/fovDvKp.png')
  
  loadSprite('WBC-going-left', 'pw4C08u.png')
  loadSprite('WBC-going-right', 'ftpM2dK.png')
  loadSprite('2-bottom-left', 'c1cYSbt.png')
  loadSprite('2-bottom-right', 'nqQ79eI.png')
  
  
  
  //  loadSprite('WBC-going-right', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAFiElEQVR4Xu2cP27VQBDG/SJRRDkBokVINKk5BGeg4xCcgEPQIQ5DHQkhISokREFBFaVAinnj57HG6/3nWXv3M5rXkGDvevb77Tezazvv1NkHSoETVDQWTGdAwCaBATEgYAqAhWMOMSBgCoCFYw4xIGAKgIVjDjEgYAqAhWMOMSBgCoCFYw4xIGAKgIVzZIf0CS0PObajBe2F0P+9oDk9CSI6zDgPE+hZ6p6FX5tlRlCHGOshgiyBwfCOAuUIQNTOcJ10BCgGZG3+2/n8QwPpv35YyHN6+TZc2S9FH3rM0MGNynpTlg/GVC8CUCxlbWPvBZAYjBgUA7IxkBwQi0Iu3GJANgSigeG6xYBsBOTxblm8NV1f3Q4FH7puQgfHRd2AaKbf9m2m+1YbA5ky2fYhl/eI7JBhdUV5f0sg3Cdq6kIFMrhDiFcMZawfsz4RoSACmWDIG4OlLiEg8m6xuFUPpQFUMKGd+RZpywUyLLcAb6WgAfG6g52idQmnK06D0nnjzzA6wAQSc4dcu6yFImG4QBBdAg1EPpJ9eHjorq+vBza5UBiGbBtwCYwOMIGwQ9yVPItJ/9KHoeSu+GU7F4zoA0YHmEA8AvcsJoPg3399vjjl6asLJPfjHieIbl9U03Oh1jwPMqizAENxNyA1p0L8WjN3sEO+X111z+7vu583N0Nr+tn3kcfp5+ePjzO4IvXBTUi4gHzukEBcAC4UhiHPiwCh06A0gAomBCMGRDrFB4OO+4AIl0BB+S+ApDKtAUkpFD6+KOZ8Kq2UqIZoPgZEo9qlzaKY7wkEsbjDpSy51JVc93CIAYk7J5iuUkU9ZchQykIs7CgOScIg8UpqCLWPuW+E2lyP5gHElrpOSukLgdBYozUKAQoEkNDMrQkEpZ4YEFGAxjvJTTVpevFRi+je43wOxzikrNt337q79y9SdXx2nIq67MfnSHFbv6kmLS+++HvByC3y4VyuIQSFPrlgRiBBKIFnLE20aXJR6Qx++uc+ahUFdlbMGYa0wEowQ3F3LeaJo4k2TS7KQNxHsZ53bxcrKx8QhVvkuPuMOFalyJKTkYFkw2AByCk5NcatKQbkouCQNkgMJ10NKcXdc4Sc4c7GkvTlxNJksja5qCMi5/NZGpFAcmFIp6TShuOSaYKI1Viqi12OIwBxB5Ys4iklFC5JdVntOBqQ2fKWVFjrDkWBpyYwOqAEMi1DtbVDswymNmKPAgGmJZDZXiB04/DHl9/d609/slNGbrpyO3TANIPTCsgiNfkU5yXsGihaIPL6np199oQoPbEFENVtdIJCn5BbtgARcE1VjapebBywCgi1ZShSOAK0BwxRX6pqVPVi50GqYcRSQc7uXJtKPPsVbVdZ7aoDoai0T/6yRrThSS1qSW0gJFdWQd9QV1VXLWA0W9oxFES3tN6XtHCInLHBDaFqWhc0ag2CQ28NxAuH/3OvWuPZBLbMFrNphATEN79T382r9QTsuGEDE0ovnujxscC3+6w9Xwt1l3YGZBdZ9Z0eFoh4yuiOYXoS6cpi35elnyizYu/7u/SEuN60ZUDKgWjrgbZdecSFPaCnrJKZXtK2UFZ9cwOi126XlshAgl/xl1kLQi/AIW6KJ7ioQLzvbDmve6Zin4DI974Q3r2KWSs1qF1smeh0tjv/OJ78ZtkoFftW/VTVIDWoWsHMxONZzDBkEAJMKvahz1AfnjcmIe5npQZVA8hCOBY9AiQ37j4GVR5bAXpXTXIHtmcQXtF8F1SIFnRJpP+mmjS9+ChKNLV4hFsb8+KOcWEq3HNywrxCGbvNvhZASrCa10rFsji+9WBXB2AN5goYELAZYUAMCJgCYOGYQwwImAJg4ZhDDAiYAmDhmEMMCJgCYOGYQwwImAJg4ZhDwID8Axr8YIOQHpqmAAAAAElFTkSuQmCC')

  //hhBlaVP.png
  loadSprite('evil-shroom', 'lOhgTzW.gif')
  loadSprite('virus', 'lOhgTzW.gif')
  //LyN1IWt.png M6rwarW.png
  loadSprite('brick', '/4cLeqWv.png')
  //hi
  loadSprite('block', '/EBJ3qCL.png')
  loadSprite('block2', '/EBJ3qCL.png')
  ///LyN1IWt.png
  loadSprite('WBC', '/AiRF3GI.png')
  loadSprite('WBC2', '/jixNMRZ.png')
   loadSprite('center', 'AiRF3GI.png')
   loadSprite('center2', '/jixNMRZ.png')
  //player.scale = 0.5;
 //AiRF3GI.png

  //0wMd92p.png dkeSOPL.png gesQ1KP.png
  loadSprite('surprise', '/EBJ3qCL.png')
  // xpm3bRa.png
  loadSprite('unboxed', '/EBJ3qCL.png')
  
    //https://imgur.com/qsvJ5mY
  loadSprite('kaboom2','/L2QzPUQ.png')
  

  
  
 
  
  //  mk1acnS.png /X5JYvXn.jpg nZR4Z8X.png  zjqqceX.png-img  sRlE71R.png
  loadSprite('bg2', '3SIAnNb.png')
  loadSprite('bg3', '/4dfLkTd.png')
  //sRlE71R.png
  loadSprite('bg', 'nZR4Z8X.png ') //    add([sprite('bg'), layer('bg'), pos(-200,-300), scale(1)])
 //https://imgur.com/Mnx94xS
  loadSprite('virus2', '2Kfebjj.png')
  loadSprite('virus1', 'IjRMvZ6.png')
  
  //wind
  loadSprite('testing', 'oWqiTDZ.png')
  
  loadSprite('testingw', '/erv89Xu.png')
  loadSprite('testing3', 'oWqiTDZ.png')
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
  loadSprite('lanterns', 'wiSiY09.png')
  loadSprite('slicer', 'kEPti7g.png')
  loadSprite('skeletor', 'Ei1VnX8.png')
  loadSprite('kaboom', '/QSnbWyw.png')
  loadSprite('stairs', 'VghkL08.png')
  loadSprite('Etest', 'LGGBhuF.png');
  //u4DVsx6.png

  
  
  
  
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
        text('Through the Portal', 32),
        origin('center'),
        pos(width() / 2, height() / 3),
        color(0, 0, 1),
        scale(0.8)
    ]);
    add([
      text('Click on Screen & ', 16),
      origin('center'),
      pos(width() / 2, height() / 2),
      color(1, 1, 1), 
  ]);
    // Add the instruction text to the 'obj' layer Click on Screen & 
    add([
        text('Press SPACE to view the rules', 16),
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
        text('Rules:', 24),
        origin('center'),
        pos(width() / 2, height() / 3.5),
        color(1, 0, 0)
    ]);
    
    add([
        text('1. Use arrow keys to move', 16),
        origin('center'),
        pos(width() / 2, height() / 2.5),
        color(1, 1, 1), 
    ]);
    
    add([
        text('2. Avoid rats and collect eggs', 16),
        origin('center'),
        pos(width() / 2, height() / 1.9),
        color(1, 1, 1), 
    ]);
    
    add([
        text('Press SPACE to start the game', 16),
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
    layers(['bg', 'obj', 'ui'], 'obj');
    add([sprite('bg'), layer('bg'), pos(0, 0)]);

    const player = add([
        sprite('WBC'),
        pos(40, 0),
        body(),
        origin('bot'),
        scale(0.5),
    ]);

    // Other game code, including movement, collision, etc.

    player.action(() => {
        camPos(player.pos);
        if (player.pos.y >= FALL_DEATH) {
            go('lose', { score: score });
        }
    });

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
      [ '                                                                                           ',
        '                                          ---  %-- ---%-        ===========                ',
        '                                                                                           ',
        '                                                                                            ',
        '                                                                                            ',
        '                                        ====================                                ',
        '     %   ---%-       ---%-                                                               i   ',
        '                                                                                  ========  ',
        '                                      ==                        ========                    ',
        '               .    _    .   _   .         .  .                           ========          ',
        '==============================   ===                                                        ',
      ], 
      
       
      
  
      
    ]
  //sprite for =
    const levelCfg = {
      width: 20,
      height: 20,
      '=': [sprite('block'), solid(), scale(0.9)],
      '-': [sprite('block2'), solid(), scale(0.9)],
      '$': [sprite('coin'), 'coin' ,scale(0.7)],
      '%': [sprite('surprise'), solid(), scale(0.9), 'coin-surprise' ],
      '*': [sprite('surprise'), solid(),  scale(0.9), 'mushroom-surprise'],
      '}': [sprite('unboxed'), solid() ,scale(0.9)],
     
      //test body() adds gravity
       '_': [sprite('virus1'), solid(), scale(0.3),  'dangerous'],
      '.': [sprite('evil-shroom'), solid(), scale(0.3), 'dangerous'],
      '#': [sprite('mushroom'), solid(), 'mushroom', body() , scale(0.6)],
      '9':[sprite('virus2'), solid(), 'virus2', body() , scale(0.6), 'dangerous'],
      'q':[sprite('virus'), solid(), 'virus', body() , scale(0.6), 'dangerous'],
      //_!
      //LI
     
      'F': [sprite('testing'), solid(), 'testing', body(), scale(2), 'pipe'],
     'i': [sprite('testingw'), solid(), 'testing',  scale(1), 'bmw'],
     
    
      
      
  //not moving add 'varname' like 'virus2' if remvove it moves
    }//-500 -700
    add([sprite('bg'), layer('bg'), pos(-200,-300), scale(1)])
    add([sprite('bg'), layer('bg'), pos(900,-500), scale(1)])

  
  
  
    const gameLevel = addLevel(maps[level], levelCfg)
  
    const scoreLabel = add([
      text(score),
      pos(40, 6),
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
      pos(60, 0),
      body(),
      big(),
      origin('bot')
      ,scale(0.7),
    ])
  
    const player2 = add([
        sprite('WBC2'), solid(),
        pos(60, 0),
        body(),
        big(),
        origin('bot')
        ,scale(0.040),
      ])
    
  
  
  
    action('virus2', (m) => {
      m.move(20, 0)
    })
  
  
     
  
    player.collides('virus2', (m) => {
        
      if (isJumping) {
         destroy(m)
      player.biggify(6)
      } else {
        go('lose', { score: scoreLabel.value})
      }
    
      
    })
  
  
  
 
 
  

  player.collides('bmw', () => {
      keyPress('down', () => {
        window.location.href = "game2.html";
  
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
  
    action('dangerous', (d) => {
      d.move(-ENEMY_SPEED, 0)
    })
  
    player.collides('dangerous', (d) => {
      if (isJumping) {
        destroy(d)
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
keyDown('i', (list) => {
  debug.inspect = true
})

keyDown('o', (list) => {
  debug.inspect = false
})

// Collision logic for kaboom
action('kaboom2', (k) => {
  // Check for collision with enemies
  k.collides('dangerous', (d) => {
      destroy(d); // Destroy dangerous entity
      destroy(k); // Destroy kaboom
  });

  k.collides('virus2', (v) => {
      destroy(v); // Destroy virus
      destroy(k); // Destroy kaboom
  });
});

keyPress('down', () => {
  if (!kaboomActive) {
    kaboomActive = true;
    kaboomSprite = add([
      sprite('kaboom'),
      pos(player2.pos.x, player2.pos.ys),
      scale(0.8),
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

// Modify the player2 collides with 'dangerous' logic
player2.collides('dangerous', (d) => {
  if (kaboomActive) {
    // If kaboom is active, destroy the dangerous item instead of losing
    destroy(d);
  } else {
    go('lose', { score: scoreLabel.value });
  }
});

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
    
    
player.overlaps('bmw', () => {
  window.location.href = "game2.html";
})
player2.overlaps('bmw', () => {
  window.location.href = "game2.html";
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
    
      action('dangerous', (d) => {
        d.move(-ENEMY_SPEED, 0)
      })
    
      player2.collides('dangerous', (d) => {
        go('lose', { score: scoreLabel.value });
      });
   
    
      player2.action(() => {
        camPos(player.pos)
        if (player.pos.y >= FALL_DEATH) {
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
    
    
    
    player2.action(() => {
      if(player.grounded()) {
        isJumping = false
      }
    })
    
    
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
    
    
    
    
    
    start("game", { level: 0, score: 0})
    