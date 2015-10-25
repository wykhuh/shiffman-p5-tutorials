var bubbles = [];
var flowers = [];

// preload runs before setup to load external files
function preload() {
  for(var i = 0; i < 3; i++) {
    flowers[i] =  loadImage('images/flower' + i + '.png');
  }
}

function setup() {
  createCanvas(600, 400);
}

function mousePressed() {
  // random returns float; floor rounds down to nearest integer
  var r = floor(random(0, flowers.length));
  var b = new Bubble(mouseX, mouseY, flowers[r]);
  bubbles.push(b);
}

// draw images in random spot
function draw() {
  background(255);
  for(var i =0; i < bubbles.length; i++) {
    bubbles[i].update();
    bubbles[i].display();
  }
}





