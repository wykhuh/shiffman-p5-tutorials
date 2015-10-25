
function setup() {
  createCanvas(600, 400);
}

// when inside square, fill square
// when inside square and mouse is pressed, make background green
function draw() {
  background(0);

  stroke(255);
  strokeWeight(4);
  noFill();

  // when inside square
  if(mouseX >250 && mouseX < 350 && mouseY > 150 && mouseY < 250) {
    // if mouse is pressed, turn background to green
    if (mouseIsPressed) {
      background(0, 255, 0);
    }

    // fill with purple
    fill(255, 0, 200);
  }
  rectMode(CENTER);
  rect(300, 200, 100, 100);

}
