// happens once
function setup() {
  createCanvas(600, 400);

  // canvas color.
  // only fill canvas once
  background(250, 250, 100);
}

// paint program that draws an endless trail of circles;
// clear canvas by clicking mouse

// code inside draw() is automatically looped forever
function draw() {

  //ellipse
  noStroke();
  fill(250, 200, 200, 100);
  ellipse(mouseX, mouseY, 25, 25);

}

// event functions only executed when event occurs
function mousePressed() {
  // set canvas background will "clear" the canvas
  background(250, 250, 100);
}
