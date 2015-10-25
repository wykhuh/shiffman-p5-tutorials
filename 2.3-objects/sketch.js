var circle = {
  x: 0,
  y: 100,
  diameter: 50
};

var r = 218;
var g = 160;
var b = 211;

function setup() {
  createCanvas(600, 400);
}

// draw a circle
function draw() {
  background(r, g, b);

  //ellipse
  fill(250, 200, 200);
  ellipse(circle.x, circle.y, circle.diameter, circle.diameter);

  circle.x ++;
}
