var ball = {
  x: 300,
  y: 200,
  xspeed: 4,
  yspeed: -3
}

function setup() {
  createCanvas(600, 400);
}

// draw lollipop
function draw() {
  background(0);

 lollipop(300, 200, 50);
 lollipop(200, 100, 100);

}

function lollipop(x, y, diameter) {
  fill(0, 200, 255);
  rect(x-10, y, 20, 150);
  
  fill(255, 0, 200);
  ellipse(x, y, diameter, diameter)
  
}