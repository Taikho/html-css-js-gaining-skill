const canvas = document.querySelector("canvas");
ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


var x = canvas.width/2;
var y = canvas.height-30;
var dx = 2;
var dy = -2;

function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, 10, 0, Math.PI*2);
    ctx.fillStyle = "blue";
    ctx.fill();
    ctx.closePath();
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    x += dx;
    y += dy;
}

setInterval(draw, 10)


addEventListener("click" => {
    
var keysDown = {};
addEventListener('keydown', function (e) {
  char.moving = true;
	keysDown[e.keyCode] = true;
}, false);

