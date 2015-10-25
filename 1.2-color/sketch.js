function setup() {
  createCanvas(600, 400);
}

// draw alien
function draw() {
  // set color of canvas
  background(255);
  ellipseMode(CENTER);
  rectMode(CENTER);

  // body
  fill(255, 0, 0); //red
  rect(240, 145, 20, 100);

  // head
  fill(0, 0, 255, 100); //blue
  ellipse(240, 115, 60, 60);

  // eyes
  fill(0, 255, 0); //green
  ellipse(221, 115, 16, 32);
  ellipse(259, 115, 16, 32);

  // legs
  line(230, 195, 220, 205);
  line(250, 195, 260, 205);

}
