var circleX = 0;

function setup() {
  createCanvas(600, 400);
}

// draw a circle that is moving to the right
function draw() {
  background(250, 250, 100);

  //ellipse
  fill(250, 200, 200);
  ellipse(circleX, 200, 80, 80);
  circleX++;

}
