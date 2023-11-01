const gameBoard = document.getElementById("game-board");
const scoreBoard = document.getElementById("score-board");

let snake = [{ x: 10, y: 10 }];
let food = { x: 5, y: 5 };
let dx = 0;
let dy = 0;
let score = 0;

function drawGameBoard() {
 gameBoard.innerHTML = "";
 for (let i = 0; i < 20; i++) {
   for (let j = 0; j < 20; j++) {
     const cell = document.createElement("div");
     cell.style.gridColumnStart = j + 1;
     cell.style.gridRowStart = i + 1;
     gameBoard.appendChild(cell);
   }
 }
}

function drawSnake() {
 for (let i = 0; i < snake.length; i++) {
   const cell = document.getElementById(`cell-${snake[i].x}-${snake[i].y}`);
   cell.classList.add("snake-cell");
 }
}

function drawFood() {
 const cell = document.getElementById(`cell-${food.x}-${food.y}`);
 cell.classList.add("food-cell");
}

function moveSnake() {
 const head = { x: snake[0].x + dx, y: snake[0].y + dy };
 if (head.x < 0 || head.x >= 20 || head.y < 0 || head.y >= 20) {
   return false;
 }
 if (snake.some(cell => cell.x === head.x && cell.y === head.y)) {
   return false;
 }
 if (head.x === food.x && head.y === food.y) {
   score++;
   scoreBoard.innerHTML = `Score: ${score}`;
   moveFood();
 } else {
   const tail = snake.pop();
   gameBoard.getElementsByClassName("snake-cell")[0].classList.remove("snake-cell");
 }
 snake.unshift(head);
 drawSnake();
 return true;
}

function moveFood() {
 let x, y;
 do {
   x = Math.floor(Math.random() * 20);
   y = Math.floor(Math.random() * 20);
 } while (snake.some(cell => cell.x === x && cell.y === y));
 food = { x, y };
 drawFood();
}

function startGame() {
 dx = 0;
 dy = -1;
 drawGameBoard();
 moveFood();
 snake = [{ x: 10, y: 10 }];
 score = 0;
 scoreBoard.innerHTML = `Score: ${score}`;
}

document.addEventListener("keydown", event => {
 switch (event.key) {
   case "ArrowUp":
     if (dy !== 1) {
       dx = 0;
       dy = -1;
     }
     break;
   case "ArrowDown":
     if (dy !== -1) {
       dx = 0;
       dy = 1;
     }
     break;
   case "ArrowLeft":
     if (dx !== 1) {
       dx = -1;
       dy = 0;
     }
     break;
   case "ArrowRight":
     if (dx !== -1) {
       dx = 1;
       dy = 0;
     }
     break;
 }
});

startGame();
setInterval(() => {
 if (!moveSnake()) {
   startGame();
 }
}, 100);