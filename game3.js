kaboom({
    global: true,
    fullscreen: true,
    scale: 2,
    debug: true,
    clearColor: [0.4, 0.6, 0.8], // Blue sky background
});

// Constants
const JUMP_FORCE = 400;
const PIPE_SPEED = 120;
const PIPE_OPEN = 200; // The gap between pipes
const FALL_DEATH = 600;
const PIPE_SPAWN_INTERVAL = 2; // Seconds
const WIN_SCORE = 20;

// Load assets
loadRoot("https://i.imgur.com/");
loadSprite("bird", "sjhMv7E.png");
loadSprite("bird2", "Q1R3afb.png"); // Player 2 sprite
loadSprite("pipe", "wJ2YNp2.png"); // Pipe sprite
loadSprite("top-door", "0qOD7Uv.png"); // Top-door sprite
loadSprite("bg", "oVthydE.png"); // Background
loadSprite("bg2", "WjsAsIC.jpg");
loadSprite("bg3", "KNzR4ze.png");
loadSprite("bg4", "/6YP0c24.png");
//https://imgur.com/6YP0c24
// Title scene
scene("title", () => {
    layers(["bg2", "obj"], "obj");

    add([
        sprite("bg2"),
        layer("bg2"),
        origin("center"),
        pos(width() / 2, height() / 2),
        scale(0.9),
    ]);

    add([text("Aladdin", 32), origin("center"), pos(width() / 2, height() / 3)]);

    add([
        text("Press SPACE to view the rules", 16),
        origin("center"),
        pos(width() / 2, height() / 2),
    ]);

    keyPress("space", () => go("rules"));
});

// Rules scene
scene("rules", () => {
    layers(["bg2", "obj"], "obj");

    add([
        sprite("bg2"),
        layer("bg2"),
        origin("center"),
        pos(width() / 2, height() / 2),
        scale(0.9),
    ]);

    add([text("Rules:", 24), origin("center"), pos(width() / 2, height() / 3)]);
    add([
        text("1. Use W and arrow key to jump", 16),
        origin("center"),
        pos(width() / 2, height() / 2.5),
    ]);
    add([
        text("2. Avoid Clouds and try to get 20 points to win", 16),
        origin("center"),
        pos(width() / 2, height() / 2),
    ]);
    add([
        text("Press SPACE to start the game.", 16),
        origin("center"),
        pos(width() / 2, height() / 1.5),
    ]);

    keyPress("space", () => go("game"));
});

// Game scene
scene("game", () => {
    add([sprite("bg"), pos(0, 0), scale(width() / 240, height() / 240), scale(3)]);
    add([sprite("bg3"), pos(540, 6), scale(width() / 240, height() / 240), scale(0.5)]);
    add([sprite("bg"), pos(-100, 6), scale(width() / 240, height() / 240), scale(0.5)]);
    add([sprite("bg4"), pos(0, 360), scale(width() / 240, height() / 240), scale(0.9)]);

    const player = add([sprite("bird"), pos(80, 80), body(), scale(0.9), "player"]);
    const player2 = add([sprite("bird2"), pos(80, 80), body(), scale(0.058), "player2"]);

    player.action(() => {
        if (player.pos.y > FALL_DEATH) go("lose", { score: scoreLabel.value });
    });

    keyPress("w", () => player.jump(JUMP_FORCE));
    player2.action(() => {
        if (player2.pos.y > FALL_DEATH) go("lose", { score: scoreLabel.value });
    });

    keyPress("up", () => player2.jump(JUMP_FORCE));

    // Pipes spawning
    function spawnPipe() {
        const pipePosY = rand(0, height() - PIPE_OPEN);
        add([sprite("pipe"), pos(width(), pipePosY), scale(3, 2.8), origin("bot"), "pipe", { passed: false }]);
        add([sprite("pipe"), pos(width(), pipePosY + PIPE_OPEN), scale(3, 2.8), "pipe"]);
        wait(PIPE_SPAWN_INTERVAL, spawnPipe);
    }

    spawnPipe();

    action("pipe", (pipe) => {
        pipe.move(-PIPE_SPEED, 0);
        if (pipe.pos.x + pipe.width < 0) destroy(pipe);
        if (!pipe.passed && pipe.pos.x < player.pos.x) {
            pipe.passed = true;
            scoreLabel.value++;
            scoreLabel.text = scoreLabel.value;

            if (scoreLabel.value === WIN_SCORE) go("win", { score: scoreLabel.value });
        }
    });

    const scoreLabel = add([text("0", 24), pos(12, 30), layer("ui"), { value: 0 }]);

    player.collides("pipe", () => go("lose", { score: scoreLabel.value }));
    player2.collides("pipe", () => go("lose", { score: scoreLabel.value }));

    // Top-door logic
    let topDoorSpawned = false;

    action(() => {
        if (scoreLabel.value >= 8 && !topDoorSpawned) {
            const topDoor = add([
                sprite("top-door"),
                pos(width(), 100), // Start at the right edge of the screen
                origin("center"),
                "top-door",
            ]);
    
            topDoor.action(() => {
                topDoor.move(-PIPE_SPEED, 0); // Move left at the same speed as pipes
    
                // Remove if it goes off-screen
                if (topDoor.pos.x + topDoor.width < 0) {
                    destroy(topDoor);
                    topDoorSpawned = false; // Allow it to respawn
                }
            });
    
            topDoorSpawned = true;
        }
    });
    player.action(() => {
        if (player.pos.y > height() || player.pos.y < 0) {
            go("lose", { score: scoreLabel.value });
        }
    });
    
    player2.action(() => {
        if (player2.pos.y > height() || player2.pos.y < 0) {
            go("lose", { score: scoreLabel.value });
        }
    });
    
    let player1Collided = false;
    let player2Collided = false;

    player.collides("top-door", () => {
        player1Collided = true;
        checkBothPlayersCollided();
    });

    player2.collides("top-door", () => {
        player2Collided = true;
        checkBothPlayersCollided();
    });

    function checkBothPlayersCollided() {
        if (player1Collided && player2Collided) {
            window.location.href = "game4.html";
        }
    }

    
keyDown('i', (list) => {
    debug.inspect = true
  })
  
  keyDown('o', (list) => {
    debug.inspect = false
  })
});

// Lose scene
scene("lose", ({ score }) => {
    add([
        text(`Game Over\nScore: ${score}`, 32),
        origin("center"),
        pos(width() / 2, height() / 2),
    ]);
    keyPress("space", () => go("game"));
});

// Win scene
scene("win", ({ score }) => {
    window.location.href = "game4.html";
});

// Start the game
start("title");

