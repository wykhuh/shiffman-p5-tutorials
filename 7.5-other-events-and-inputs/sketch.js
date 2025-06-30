var bgcolor;
var button;
var slider;
var nameInput;
var nameP;
var text;

function setup() {
  canvas = createCanvas(500, 200);
  bgcolor = color(200);

  nameP = createP("Your name");

  button = createButton("go go");
  button.mousePressed(changeColor);

  slider = createSlider(10, 100, 86);

  nameInput = createInput("").attribute("placeholder", "type some text");
}

function draw() {
  background(bgcolor);
  fill(255, 0, 175);
  ellipse(100, 100, slider.value(), slider.value());

  // update text outside of canvas
  nameP.html(nameInput.value());
  // update canvas text
  text(nameInput.value(), 10, 20);
}

function updateText() {
  nameP.html(nameInput.value());
}

function changeColor() {
  bgcolor = color(random(255));
}
