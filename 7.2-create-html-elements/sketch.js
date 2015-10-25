function setup() {
  // p5 creates a canvas and appends it to the page
  createCanvas(150, 150);
  // create any html element
  createElement('h1', 'Heading created by p5')
  // p5 creates and appends a paragraph
  createP("Paragraph created by p5.");

}

function draw() {
  background(0);
  fill(255, 0, 0);
  rect(70, 70, 50, 50);
}

function mousePressed() {
  createP("Random number " + random(0,10) + " created by mouse click.")
}
