var textBox1;
var bgcolor;
var hoverP;
var canvas;
var text;

function setup() {
  canvas = createCanvas(200, 200);
  bgcolor = color(200);

  canvas.mousePressed(changeColor);

  hoverP = createP("Hover");
  hoverP.mouseOver(overPara);
  hoverP.mouseOut(outPara);

  textBox1 = createInput("").attribute("placeholder", "enter text");

  // changed will do the callback when user hits enter or tab
  textBox1.changed(updateText1);
}

function draw() {
  background(bgcolor);
  fill(255, 0, 175);
}

function updateText1() {
  // html is p5 function that will change the html of an element
  hoverP.html(textBox1.value());
}

function overPara() {
  hoverP.html("your mouse is over me");
}

function outPara() {
  hoverP.html("your mouse is out");
}

function changeColor() {
  bgcolor = color(random(255));
}
