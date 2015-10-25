var offset = 0;

function setup() {
  createCanvas(600, 400);
}

// create one row of circles that move to the right
function draw() {
  background(0);
  strokeWeight(4);
  stroke(255);

  for(var x = 0; x < width; x += 50) {
    fill(random(255), 0, random(200));
    ellipse(x + offset, 200, 25, 25);
  }

  offset ++;
}
