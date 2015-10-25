var button;
var txt;

function setup() {
  createCanvas(500, 200);
  bgcolor = color(51);

  txt = createP('some text');
  txt.mouseOver(changeStyle);
  txt.mouseOut(revertStyle);

  button = createButton('go');
  button.mousePressed(changeStyle);
}

function draw() {
  background(bgcolor);
  fill(255, 0, 175);
  ellipse(100, 100, 50, 50);
}

function changeStyle() {
  txt.style('background-color', 'pink');
  txt.style('padding', '24px');
}

function revertStyle() {
  txt.style('background-color', 'purple');
  txt.style('padding', '8px');
}
