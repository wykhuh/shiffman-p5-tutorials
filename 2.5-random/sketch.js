var spot = {
  x: 100,
  y: 50
}

var col = {
  r: 255,
  g: 0,
  b: 0
}

function setup() {
  createCanvas(600, 400);
  background(0);
}

// draw one circle at random location and color;
// canvas is only drawn once, so the canvas gets filled with circles
function draw() {
  // p5 knows the width and height of the canvas
  spot.x = random(0, width);
  spot.y = random(0, height);

  col.r = random(100, 255);
  col.g = 0;
  col.b = random(100, 190);

  noStroke();
  fill(col.r, col.g, col.b, 100);
  ellipse(spot.x, spot.y, 24, 24);

}
