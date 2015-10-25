function setup() {
  var canvas = createCanvas(300, 250);
  // use parent() to attach canvas as a child to a particular DOM element
  // parent() assumes the selector is an #id
  canvas.parent('canvasp');
}

// attach canvas to a particular paragraph
function draw() {
  background(0);
  ellipse(200, 200, random(100), random(100));
}
