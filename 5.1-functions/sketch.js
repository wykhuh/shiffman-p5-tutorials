var ball = {
  x: 300,
  y: 200,
  xspeed: 4,
  yspeed: -3
}

function setup() {
  createCanvas(600, 400);
}

// ball bounce off all edges
function draw() {
  background(0);

  move();
  bounce();
  display();
}

function move() {
  ball.x += ball.xspeed;
  ball.y += ball.yspeed;
}


function bounce() {
  if (ball.x < 0 || ball.x > width) {
    ball.xspeed *= -1;
  }

  if (ball.y < 0 || ball.y > height) {
    ball.yspeed *= -1;
  }

}

function display() {
  strokeWeight(4);
  stroke(255);
  noFill();

  ellipse(ball.x, ball.y, 24, 24);

}
