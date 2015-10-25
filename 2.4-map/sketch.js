var r = 0;
var b = 255;

function setup() {
  createCanvas(600, 400);
}

// when mouse is at 0 x, background is blue
// when mouse is at 600 x, background is red
// when mouse is in between, background is various shade of blue - purple - red
function draw() {

  // map(value being mapped, min output, max output, min input, max inpu)
  r = map(mouseX, 0, 600, 0, 255);
  b = map(mouseX, 0, 600, 255, 0);

  background(r, 0, b);

  //ellipse
  fill(250, 200, 200);
  ellipse(mouseX, 200, 62, 62);

}
