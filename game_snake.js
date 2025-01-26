let score_span = document.getElementById("score");
let highscore_span = document.getElementById("highscore");

let canvas = document.getElementById("grid");
let c = canvas.getContext("2d");

let snake_trail = [];
let snake_x, snake_y;
let snake_dx, snake_dy;
let apple_x, apple_y;
let snake_tail;

let tile_size = 20;
let grid_dimension =20;

window.onload = function () {
    gameReset();
    document.addEventListener("keydown", keyPush);
    setInterval(game, 1000 / 15);

    canvas.width = grid_dimension * tile_size;
    canvas.height = grid_dimension * tile_size;
    highscore_span.innerHTML = 0;
}

function gameReset() {
    if (score_span.innerHTML > highscore_span.innerHTML) {
        highscore_span.innerHTML = score_span.innerHTML;
    }

    snake_x = Math.floor(Math.random() * canvas.width / tile_size);
    snake_y = Math.floor(Math.random() * canvas.height / tile_size);
    snake_dx = 0;
    snake_dy = 0;
    apple_x = Math.floor(Math.random() * canvas.width / tile_size);
    apple_y = Math.floor(Math.random() * canvas.height / tile_size);
    snake_tail = 5;

    score_span.innerHTML = 0;
}

function keyPush(event) {
    switch (event.keyCode) {
        case 37:
            if (snake_dx != 1){
                snake_dx = -1;
                snake_dy = 0;
            }
            break;
        case 38:
            if (snake_dy != 1){
                snake_dx = 0;
                snake_dy = -1;
            }
            break;
        case 39:
            if (snake_dx != -1){
                snake_dx = 1;
                snake_dy = 0;
            }
            break;
        case 40:
            if (snake_dy != -1){
                snake_dx = 0;
                snake_dy = 1;
            }
            break;
    }
}

function game() {
    snake_x += snake_dx;
    snake_y += snake_dy;
    
    checkSnake();
    drawBackground();
    drawSnake();
    drawApple();
}


function checkSnake(){
    if (snake_x < 0 || snake_y < 0 || snake_x > grid_dimension-1 || snake_y > grid_dimension-1){
        gameReset();
    }
    //add function to check if snake ate itself

}

function drawBackground() {
    c.strokeStyle = "black";
    c.fillStyle = "green";
    c.fillRect(0, 0, canvas.width, canvas.height);
}

function drawSnake() {
    c.fillStyle = "lime";
    for (var i = 0; i < snake_trail.length - 1; i++) {
        c.fillRect(
            snake_trail[i].x * tile_size,
            snake_trail[i].y * tile_size,
            tile_size - 2,
            tile_size - 2
        );
    }

    snake_trail.push({
        x: snake_x,
        y: snake_y
    });

    while (snake_trail.length > snake_tail) {
        snake_trail.shift();
    }
}

function drawApple() {
    if (apple_x == snake_x && apple_y == snake_y) {
        score_span.innerHTML++;
        snake_tail++;
        apple_x = Math.floor(Math.random() * grid_dimension);
        apple_y = Math.floor(Math.random() * grid_dimension);
    }
    c.fillStyle = "red";
    c.fillRect(
        apple_x * tile_size,
        apple_y * tile_size,
        tile_size - 2,
        tile_size - 2
    );
};