kaboom({
    global: true,
    fullscreen: true,
    scale: 2,
    debug: true,
    clearColor: [0.5, 0.8, 1], // Sky blue background
});

// Change img
const PLATFORM_SPEED = 100; // Horizontal movement speed
const PLATFORM_SPAWN_INTERVAL = 5; // Time interval between spawns
const MIN_Y = -1000; // Minimum vertical position
const MAX_Y = height() - 20; // Maximum visible vertical position

const JUMP_FORCE = 800;
const GRAVITY = 1200;
const WIN_HEIGHT = -1000;
// Load assets
loadRoot('https://i.imgur.com/');
loadSprite('bird', 'AiRF3GI.png'); // Use your WBC sprite as the player
//6sIhgXJ.png
loadSprite('bird2', '/jixNMRZ.png');
loadSprite('platform', '/4cLeqWv.png'); // Use the pipe sprite as the platform
loadSprite('bg', '/NHs0alw.png'); // Background
//https://imgur.com/7jj1bfV
loadSprite('bg3', '/7jj1bfV.png');
//https://imgur.com/BH5dDZ5
loadSprite("top-door", "0qOD7Uv.png"); // Top-door sprite

loadSprite('bg2', '/JpTxGiZ.png');
// Title scene
scene('title', () => {
    layers(['bg2', 'obj'], 'obj'); // 'obj' is the default layer

    // Add the background to the 'bg2' layer
    add([
        sprite('bg2'),
        layer('bg2'), // Add the sprite to the background layer
        origin('center'),
        pos(width() / 2, height() / 2), // Position it at the center
        scale(0.9), // Adjust scale as needed
    ]);
    add([
        text('Jack and the beanstalk', 32),
        origin('center'),
        pos(width() / 2, height() / 3),
        color(0, 1, 0) 
    ]);
    
    add([
        text('Press SPACE to view the rules', 16),
        origin('center'),
        pos(width() / 2, height() / 2),
        color(0, 0, 0) 
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
        scale(0.9),// Adjust scale as needed
    ]);
    add([
        text('Rules:', 24),
        origin('center'),
        pos(width() / 2, height() / 3),
        color(0, 1, 0) 
    ]);
    
    add([
        text('1.Press W and up key to jump', 16),
        origin('center'),
        pos(width() / 2, height() / 2.5),
        color(0, 0, 0) 
    ]);
    
    add([
        text('2.Jump on blocks to climb the beanstalk', 16),
        origin('center'),
        pos(width() / 2, height() / 2),
        color(0, 0, 0) 
    ]);
    add([
        text('reach the top to win', 16),
        origin('center'),
        pos(width() / 2, height() / 1.5),
        color(0, 0, 0)  
    ]);

    add([
        text('Press SPACE to start the game & reload the game.', 16),
        origin('center'),
        pos(width() / 2, height() / 1.3),
        color(0, 0, 0)  
    ]);

    // Transition to the game scene
    keyPress('space', () => {
        go('game'); // Start the game
    });
});
start('title');
scene("game", () => {
    // Background
    //add([sprite('bg'), pos(-1000, -1500), scale(width() / 10, height() / 10)]);
   

add([sprite("bg3"),
    origin("center"), // Center the origin of the image
    pos(width() / 2, height() / 10), // Position it at the center of the canvas
    scale(Math.min(width() / -384, height() / -216)), // Scale proportionally based on the aspect ratio
    scale(7)
]);
add([sprite("bg"),
       
    // Center the origin of the image
  
    pos(width() / -1.4, height() / -0.25), 
        scale(Math.min(width() / -384, height() / -216)), // Scale proportionally based on the aspect ratio
    scale(7)
]);
    // Player (bird)
    const player = add([
        sprite('bird'),
        pos(width() / 2.1, height() / 1.5),
        body(),
        scale(1.2),
        "player",
    ]);
    const player2 = add([
        sprite('bird2'),
        pos(width() / 1.9, height() / 1.5),
        body(),
     scale(0.070),
        "player",
    ]);
    let activeCamera = player;

    // Function to switch the camera position
    function switchCamera() {
        activeCamera = (activeCamera === player) ? player2 : player;
    }

    // Press space bar to switch between player cam positions
    keyPress('space', switchCamera);

    // Add this outside of any specific player action
    action(() => {
        // Update the camera position based on the active camera
        camPos(activeCamera.pos);

        // Hide player2 if it goes off-screen
        if (player2.pos.y > height()) {
            player2.hidden = true; // Make player2 invisible
            activeCamera = player; // Set the active camera to player1
        } else {
            player2.hidden = false; // Make player2 visible when it's on-screen
        }
    });

    // Player-specific action logic
    player.action(() => {
        if (player.pos.x < 0) {
            player.pos.x = 0;
        }
        if (player.pos.x > width()) {
            player.pos.x = width();
        }

        if (player.pos.y > height()) {
            go("lose", { score: scoreLabel.value });
        }
        if (player.pos.y < WIN_HEIGHT) {
            go("win", { score: scoreLabel.value });
        }
    });

    player2.action(() => {
        if (player2.pos.x < 0) {
            player2.pos.x = 0;
        }
        if (player2.pos.x > width()) {
            player2.pos.x = width();
        }

        if (player2.pos.y > height()) {
            // Player2 is off-screen, and we are already handling this in the global action
        }
        if (player2.pos.y < WIN_HEIGHT) {
            go("win", { score: scoreLabel.value });
        }
    });


    // Set gravity
    gravity(GRAVITY);

  // Initial platform for the player to stand on
add([
    sprite('platform'),
    pos(width() / 2, height() - 20),
    solid(),
    scale(1.5),
    "platform",
]);

// Start spawning platforms after 3 seconds
wait(5, () => {
    spawnPlatform(); // Start the recursive spawning process
});

// Constants
// Load the top-door sprite
let platforms = []; // Array to store existing platforms

function spawnPlatform() {
    // Get camera position and dimensions
    const cameraPos = camPos();
    const visibleXStart = cameraPos.x - width() / 2; // Left boundary of the visible area
    const visibleXEnd = cameraPos.x + width() / 2;  // Right boundary of the visible area
    const visibleYStart = cameraPos.y - height() / 2; // Top boundary of the visible area
    const visibleYEnd = cameraPos.y + height() / 2;  // Bottom boundary of the visible area

    let xPos = rand(visibleXStart, visibleXEnd); // Random horizontal position
    let yPos = rand(visibleYStart, visibleYEnd - 100); // Random vertical position (subtract height for better placement)

    // Check for collision with existing platforms to ensure they are not too close
    const MIN_DISTANCE = 100; // Minimum distance between platforms on the y-axis
    let isValidPosition = false;

    while (!isValidPosition) {
        isValidPosition = true;
        for (const existingPlatform of platforms) {
            if (Math.abs(existingPlatform.pos.y - yPos) < MIN_DISTANCE) {
                // If the y-position is too close to an existing platform, set a new y-position
                yPos = rand(visibleYStart, visibleYEnd - 100);
                isValidPosition = false;
                break;
            }
        }
    }

    const platform = add([
        sprite('platform'),
        pos(xPos, yPos),
        solid(),
        scale(1.5),
        "platform",
        {
            xSpeed: PLATFORM_SPEED,
            direction: rand() > 0.5 ? 1 : -1, // Random direction
        },
    ]);

    // Add the new platform to the platforms array
    platforms.push(platform);

    // Check if this platform is above y = -980 to place the top-door
    if (yPos < -980) {
        add([
            sprite('top-door'),
            pos(platform.pos.x, platform.pos.y - platform.height), // Position on top of the platform
            scale(1.5), // Scale as needed
            "top-door",
        ]);
    }

    // Action to move platforms and reverse when off-screen
    platform.action(() => {
        platform.move(platform.xSpeed * platform.direction, 0);

        // Check if platform has completely left the screen horizontally
        if (platform.pos.x > width() || platform.pos.x + platform.width < 0) {
            // Reverse direction
            platform.direction *= -1;

            // Move the platform to the opposite side
            platform.pos.x = platform.direction === 1 ? -platform.width : width();
        }
    });

    // Schedule the next spawn
    wait(PLATFORM_SPAWN_INTERVAL, spawnPlatform);
}


   


    // Start spawning platforms
    
    // Countdown display
    const countdownLabel = add([
        text("3", 48),
        pos(width() / 2, height() / 2),
        origin("center"),
        layer("ui"),
    ]);

    // Countdown logic
    let countdown = 3;
    let canMove = false;

    const countdownInterval = setInterval(() => {
        countdown--;
        countdownLabel.text = countdown.toString();
        if (countdown <= 0) {
            clearInterval(countdownInterval);
            countdownLabel.text = "Go!"; // Show "Go!" when countdown is finished
           // Remove "Go!" after 1 second
            canMove = true; // Enable movement
        }
    }, 1000);

    // Debug log
    console.log("Countdown started");

    // Player jump mechanics
    keyPress("w", () => {
        if (player.grounded() && canMove) {
            player.jump(JUMP_FORCE);
        }
    });
    keyPress("up", () => {
        if (player2.grounded() && canMove) {
            player2.jump(JUMP_FORCE);
        }
    });
    keyDown('i', (list) => {
        debug.inspect = true
      })
      
      keyDown('o', (list) => {
        debug.inspect = false
      })
    // Keep the player within the screen boundaries
    player.action(() => {
        if (player.pos.x < 0) {
            player.pos.x = 0;
        }
        if (player.pos.x > width()) {
            player.pos.x = width();
        }

        // If player falls off the screen, the game is over
        if (player.pos.y > height()) {
            go("lose", { score: scoreLabel.value });
        }
        camPos(player.pos);
        if (player.pos.y < WIN_HEIGHT) {
            go("win", { score: scoreLabel.value });
        }
    });

    // Allow player movement left and right
    keyDown("left", () => {
        if (canMove) {
            player2.move(-200, 0);
        }
    });

    keyDown("right", () => {
        if (canMove) {
            player2.move(200, 0);
        }
    });

    keyDown("a", () => {
        if (canMove) {
            player.move(-200, 0);
        }
    });

    keyDown("d", () => {
        if (canMove) {
            player.move(200, 0);
        }
    });

    // Score system
    const scoreLabel = add([
        text("0", 24),
        pos(12, 12),
        layer("ui"),
        {
            value: 0,
        },
    ]);

    action(() => {
        scoreLabel.value = Math.floor(player.pos.y / -10); // Score based on height
        scoreLabel.text = scoreLabel.value;
    });
});

//win
scene("win", ({ score }) => {
    window.location.href = "game5.html";
});

// Lose scene
scene("lose", ({ score }) => {
    add([
        text("Game Over\nScore: " + score, 32),
        origin("center"),
        pos(width() / 2, height() / 2),
    ]);

    keyPress("space", () => {
        go("game");
    });
});

// Start the game
start("game");
