var textBox;
var slider;
var paragraph;

function setup() {
  noCanvas();
  paragraph = createP("starting text");
  textBox = createInput("").attribute("placeholder", "enter text");

  slider = createSlider(10, 64, 16);

  // changed will do the callback when user hits enter or tab
  textBox.input;
  console.log(textBox);
}

function draw() {}

function updateSize() {
  paragraph.style("font-size", slider.value() + "px");
}

function doSomething() {
  paragraph.html(textBox.value());
}
