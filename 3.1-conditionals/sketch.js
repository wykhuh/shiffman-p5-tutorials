function setup() {
  createCanvas(600, 400);
}

// if mouse is on right half, use purple fill
function draw() {
  background(0);

  stroke(255);
  strokeWeight(4);
  noFill();
  ellipse(300, 200, 100, 100);

  if(mouseX > 300) {
    fill(255, 0, 200);
  }

  ellipse(300, 200, 100, 100);
}
