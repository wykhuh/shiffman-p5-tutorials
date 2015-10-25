var bgcolor;
var button;
var slider;
var nameInput;
var nameP;

function setup() {
  canvas = createCanvas(500, 200);
  canvas.mouseOver(overPara);
  canvas.mouseOut(outPara);
  canvas.mousePressed(changeColor);

  bgcolor = color(200);

  nameP = createP('Your name');
  nameP.mouseOver(overPara);
  nameP.mouseOut(outPara);

  button = createButton('go go');
  button.mousePressed(changeColor);

  slider = createSlider(10, 100, 86);

  nameInput = createInput('type your name');
  // tab or enter will trigger updateText
  nameInput.changed(updateText);
}

function draw() {
  background(bgcolor);
  fill(255, 0, 175);
  ellipse(100, 100, slider.value(), slider.value());
  text(nameInput.value(), 10, 20);
}

function updateText() {
  nameP.html(nameInput.value());
}

function changeColor() {
  bgcolor = color(random(255));
}

function overPara(){
  nameP.html('your mouse is over me');
}


function outPara(){
  nameP.html('your mouse is out');
}
