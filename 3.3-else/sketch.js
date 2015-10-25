
function setup() {
  createCanvas(600, 400);
}

// draw different shapes depending on mouse position
function draw() {
  background(0);

  stroke(255);
  strokeWeight(4);
  noFill();

 // if inside square, fill square
  if(mouseX >300 && mouseX < 400) {
    fill(255, 0, 200);
  }

  // draw different shapes depending on mouse position
  if (mouseX > 450) {
    ellipse(300, 200, 100, 100);
  } else if (mouseX > 300) {
    rect(300, 200, 100, 100);
  } else if (mouseX > 150) {
    line(0, 0, width, height)
  } else {
    point(300, 200);
  }

}
