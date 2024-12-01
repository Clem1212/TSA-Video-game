kaboom({
  global: true,
  fullscreen: true,
  scale: 1,
  background: [74, 48, 82],

})
//https://voca.ro/1hxQWiXPbP6J

loadRoot('https://i.imgur.com/')
loadSprite('space-invader', '/MDYv8tK.png')
loadSprite('space-invader2', '/mN0SSq3.png')
loadSprite('space-invader3', '/AI5SRbU.png')
loadSprite('space-invader4', '/I6pQvIO.png')
loadSprite('space-invader5', '/zAlD3nG.png')
loadSprite('top-door', '/0qOD7Uv.png')
loadSprite('kaboom', '/QSnbWyw.png')
loadSprite('space-ship', '/jixNMRZ.png')
loadSprite('2-top-left', '/0fOOkok.png')
loadSprite('2-top-right', '/fovDvKp.png')
loadSprite('wall', 'fCKsBPE.png')
//https://imgur.com/gp3lqXW
loadSprite('bg2', '/QNJGCL7.png')
loadSprite('bg', '/YJYpOc3.png')

scene('title', () => {
  const music = play("game-music", {
    loop: true,  // Set to true if you want it to loop
    volume: 0.5, // Adjust volume level
  });
  
  add([
    sprite('bg2'),
    layer('bg2'), // Add the sprite to the background layer
    origin('center'),
    pos(width() / 3.5, height() / 1.7), // Position it at the center
    scale(2.4), // Adjust scale as needed
]);

  add([
      text('Gretel -Rapunzel training', 32),
      origin('center'),
      pos(width() / 2, height() / 3),
     
  ]);
  
  add([
      text('Press SPACE to view the rules', 16),
      origin('center'),
      pos(width() / 2, height() / 2),
      color(0,0,1)
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
      scale(1.7), // Adjust scale as needed
    
  ]);
  add([
      text('Rules:', 24),
      origin('center'),
      pos(width() / 2, height() / 3),
      color(0,0,1)
  ]);
  
  add([
      text('1. Use A & D key to dodge falling iteams', 16),
      origin('center'),
      pos(width() / 2, height() / 2.5),
  ]);
  
  add([
      text('2.Train with Rapunzel for witch fight', 16),
      origin('center'),
      pos(width() / 2, height() / 2),
  ]);
  
  add([
      text('Press SPACE to start the game and reload the game.', 16),
      origin('center'),
      pos(width() / 2, height() / 1.5), 
  ]);

  // Transition to the game scene
  keyPress('space', () => {
      go('game'); // Start the game
  });
});
start('title');
scene('game', () => {
  const MOVE_SPEED = 300
  const INVADER_SPEED = 400
  const SPAWN_DELAY = 15;
  layers(['obj', 'ui'], 'obj')
  add([sprite('bg'), layer('bg'), pos(-9, -200),scale(1.7)]);
  const score = add([
      text('0'),
      pos(50, 50),
      scale(2),
      layer('ui'),
      {
          value: 0,
      },
  ])

  const player = add([
      sprite('space-ship'),
      ,scale(0.10),
      layer('obj'),
      pos(width() / 2, height() - 98),
      origin('center'),
  ])

keyDown('right', () => {
    player.move(MOVE_SPEED, 0);
    if (player.pos.x > width()) {
        player.pos.x = 0;
    }
    player.use(sprite('2-top-right')); // Change sprite to "2-top-right" when moving right
});
 
keyDown('left', () => {
  player.move(-MOVE_SPEED, 0);
  if (player.pos.x < 0) {
      player.pos.x = width();
  }
  player.use(sprite('2-top-left')); // Change sprite to "2-top-left" when moving left
});

keyDown('down', () => {
 
  player.use(sprite('space-ship')); // Change sprite to "2-top-right" when moving right
});

  function spawnInvader() {
      const x = rand(0, width())
      add([
          sprite('space-invader'),
          scale(2),
          layer('obj'),
          pos(x, 0),
          origin('center'),
          'space-invader',
          { speed: INVADER_SPEED + rand(-20, 20) }
      ])
  }

  // Spawn invaders every second
  loop(1, () => {
      spawnInvader()
  })

  action('space-invader', (s) => {
      s.move(0, s.speed)
      if (s.pos.y > height()) {
          destroy(s)
          score.value++
          score.text = score.value
      }
      if (score.value >= 100) {
        window.location.href = "finalboss.html"
    }
  })




  keyDown('i', (list) => {
    debug.inspect = true
  })
  
  keyDown('o', (list) => {
    debug.inspect = false
  })


  
  function spawnInvader2() {
    const x = rand(0, width())
    add([
        sprite('space-invader2'),
        scale(1.5),
        layer('obj'),
        pos(x, 0),
        origin('center'),
        'space-invader2',
        { speed: INVADER_SPEED + rand(-20, 20) }
    ])
}

// Spawn invaders every second
loop(1, () => {
    spawnInvader2()
})

action('space-invader2', (s) => {
    s.move(0, s.speed)
    if (s.pos.y > height()) {
        destroy(s)
        score.value++
        score.text = score.value
    }
})

let kaboomActive = false;
let kaboomSprite = null;

keyPress('down', () => {
  if (!kaboomActive) {
      kaboomActive = true;
      player.isInvincible = true;
      kaboomSprite = add([
          sprite('kaboom'),
          pos(player.pos.x + 30, player.pos.y), // Offset from player
          scale(1),
          'kaboom'
      ]);

      // Make the kaboom move forward like a fireball
  
      kaboomSprite.action(() => {
        kaboomSprite.pos = player.pos;
      });

      // Destroy kaboom after a certain time if it doesn't go off-screen
      wait(2, () => {
         camShake(4)
          if (kaboomSprite) {
            player.isInvincible = false;
              destroy(kaboomSprite);
              kaboomActive = false;
          }
      });
  }
});

player.collides('space-invader', (e) => {
  if (!kaboomActive) {
      go('lose', score.value); // Go to the 'lose' scene if kaboom is not active
  } else {
      destroy(e); // Destroy the invader if kaboom is active
  }
});

player.collides('space-invader2', (e) => {
  if (!kaboomActive) {
      go('lose', score.value);
  } else {
      destroy(e);
  }
});

player.collides('space-invader3', (e) => {
  if (!kaboomActive) {
      go('lose', score.value);
  } else {
      destroy(e);
  }
});

player.collides('space-invader4', (e) => {
  if (!kaboomActive) {
      go('lose', score.value);
  } else {
      destroy(e);
  }
});

player.collides('space-invader5', (e) => {
  if (!kaboomActive) {
      go('lose', score.value);
  } else {
      destroy(e);
  }
});

// Collision logic for kaboom
collides('kaboom', 'space-invader2', (k, d) => {
  camShake(4); // Shake the camera for effect
  wait(1, () => {
      destroy(k); // Destroy the kaboom after 1 second delay
  });
  destroy(d); // Destroy the invader immediately
  score.value++;
  score.text = score.value;
});

collides('kaboom', 'space-invader', (k, s) => {
  camShake(4); // Shake the camera for effect
  wait(1, () => {
      destroy(k); // Destroy the kaboom after 1 second delay
  });
  destroy(s); // Destroy the invader immediately
  score.value++;
  score.text = score.value;
});

collides('kaboom', 'space-invader4', (k, fo) => {
  camShake(4); // Shake the camera for effect
  wait(1, () => {
      destroy(k); // Destroy the kaboom after 1 second delay
  });
  destroy(fo); // Destroy the invader immediately
  score.value++;
  score.text = score.value;
});

collides('kaboom', 'space-invader3', (k, f) => {
  camShake(4); // Shake the camera for effect
  wait(1, () => {
      destroy(k); // Destroy the kaboom after 1 second delay
  });
  destroy(f); // Destroy the invader immediately
  score.value++;
  score.text = score.value;
});

collides('kaboom', 'space-invader5', (k, f) => {
  camShake(4); // Shake the camera for effect
  wait(1, () => {
      destroy(k); // Destroy the kaboom after 1 second delay
  });
  destroy(f); // Destroy the invader immediately
  score.value++;
  score.text = score.value;
});


function top() {
  const x = rand(0, width());
  add([
    sprite('top-door'),
    scale(2),
    layer('obj'),
    pos(x, 0),
    origin('center'),
    'top-door',
    { speed: INVADER_SPEED + rand(-20, 20) }
  ]);
}

// Set the spawn delay

// Wait for the initial delay, then start the spawn loop
wait(SPAWN_DELAY, () => {
  // Spawn doors every second
  loop(1, () => {
    top();
  });
});

action('top-door', (s) => {
  s.move(0, s.speed);
  if (s.pos.y > height()) {
    destroy(s);
    score.value++;
    score.text = score.value;
  }
});

player.collides('top-door', () => {
  window.location.href = "finalboss.html";
});


function spawnInvader5() {
  const x = rand(0, width())
  add([
      sprite('space-invader5'),
      scale(1),
      layer('obj'),
      pos(x, 0),
      origin('center'),
      'space-invader5',
      { speed: INVADER_SPEED + rand(-20, 20) }
  ])
}

// Spawn invaders every second
loop(1, () => {
  spawnInvader3()
})

action('space-invader5', (s) => {
  s.move(0, s.speed)
  if (s.pos.y > height()) {
      destroy(s)
      score.value++
      score.text = score.value
  }
})









function spawnInvader3() {
  const x = rand(0, width())
  add([
      sprite('space-invader3'),
      scale(1),
      layer('obj'),
      pos(x, 0),
      origin('center'),
      'space-invader3',
      { speed: INVADER_SPEED + rand(-20, 20) }
  ])
}

// Spawn invaders every second
loop(1, () => {
  spawnInvader3()
})

action('space-invader3', (s) => {
  s.move(0, s.speed)
  if (s.pos.y > height()) {
      destroy(s)
      score.value++
      score.text = score.value
  }
})











function spawnInvader4() {
  const x = rand(0, width())
  add([
      sprite('space-invader4'),
      scale(1),
      layer('obj'),
      pos(x, 0),
      origin('center'),
      'space-invader',
      { speed: INVADER_SPEED + rand(-20, 20) }
  ])
}

// Spawn invaders every second
loop(1, () => {
  spawnInvader4()
})

action('space-invader4', (s) => {
  s.move(0, s.speed)
  if (s.pos.y > height()) {
      destroy(s)
      score.value++
      score.text = score.value
  }
})







player.collides('space-invader4', () => {
  if (!kaboomActive) {
      go('lose', score.value);
  }
});

player.collides('space-invader2', () => {
  if (!kaboomActive) {
      go('lose', score.value);
  }
});

player.collides('space-invader', () => {
  if (!kaboomActive) {
      go('lose', score.value);
  }
});

player.collides('space-invader3', () => {
  if (!kaboomActive) {
      go('lose', score.value);
  }
});
player.collides('space-invader5', () => {
  if (!kaboomActive) {
      go('lose', score.value);
  }
});

  k.collides('space-invader2', (s) => {
      destroy(s);
      score.value++;
      score.text = score.value;
  });
  
  k.collides('space-invader3', (s) => {
      destroy(s);
      score.value++;
      score.text = score.value;
  });
  
  k.collides('space-invader4', (s) => {
      destroy(s);
      score.value++;
      score.text = score.value;
  });
  k.collides('space-invader5', (s) => {
    destroy(s);
    score.value++;
    score.text = score.value;
});
})

scene('lose', (score) => {
  add([
      text(score),
      origin('center'),
      scale(10),
      pos(width() / 2, height() / 2),
  ])

  add([
      text('Game Over! Reload page to restart'),
      origin('center'),
     scale(4),
      pos(width() / 2, height() / 2 + 80),
  ])

  keyPress('space', () => {
      go('game')
  })
})
//kaboom shake
start('game')