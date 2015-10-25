
function setup() {
  createCanvas(600, 400);
}

// create a grid of circles that randomly changes colors
function draw() {
  background(0);
  strokeWeight(4);
  stroke(255);

  for(var x = 0; x < mouseX; x += 50) {
    for(var y = 0; y <= height; y += 50) {
      fill(random(255), 0, random(200));
      ellipse(x, y, 25, 25);
    }
  }

}
