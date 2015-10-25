var bgcolor;
var button;

function setup() {
  canvas = createCanvas(500, 250);
  bgcolor = color(200);
  button = createButton('go go');
  // p5 DOM library adds mousePressed to each DOM element
  // pass in callback that will be executed when mouse is pressed
  button.mousePressed(changeColor)
}

// when button is pressed, change color of background
function draw() {
  background(bgcolor);
  fill(255, 0, 175);
  rect(100, 100, 50, 50);
}


function changeColor() {
  bgcolor = color(random(255));

}
