var textBox;
var slider;
var paragraph;

function setup() {
  noCanvas();
  textBox = createInput("").attribute("placeholder", "enter text");

  slider = createSlider(10, 64, 16);
  slider.input(updateSize);

  // changed will do the callback when user hits enter or tab
  textBox.input(updateText);

  paragraph = createP("starting text");
}

function updateSize() {
  paragraph.style("font-size", slider.value() + "px");
}

function updateText() {
  paragraph.html(textBox.value());
}
