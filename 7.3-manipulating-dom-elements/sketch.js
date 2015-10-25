var canvas;
var h1;
var p;
var x = 100;
var y = 100;

function setup() {
  // element with position() are positioned relative to the whole page
  canvas = createCanvas(200, 200);
  canvas.position(400, 100);

  h1 = createElement('h1', 'Heading created by p5');
  h1.position(400, 250);

  p = createP("Paragraph created by p5.");

}

function draw() {
  background(200);
  fill(255, 0, 0);
  // elements without position() are positioned relative to the canvas
  rect(x, y, 50, 50);
  x += random(-5, 5);

  h1.position(x, y)
}

function mousePressed() {
  // html() replace html of an element
  h1.html('Text replaced using html()')
  createP("Random number " + random(0,10) + " from mouse click.")
}
