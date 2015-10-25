var textBox1;
var textBox2;

var slider;
var paragraph;

// use slider to change size of text  
// text entered in input is added to DOM
function setup() {
  noCanvas();
  paragraph = createP('starting text');
  textBox1 = createInput('enter text - changed');
  textBox2 = createInput('enter text - input');

  // min, max, starting value
  slider = createSlider(10, 64, 16);

  // changed will do the callback when user hits enter or tab
  textBox1.changed(updateText1);

  // input will do callback whenever there is any change
  textBox2.input(updateText2);

  slider.input(updateSize);
}

function updateText1() {
  // html is p5 function that will change the html of an element
  paragraph.html(textBox1.value());
}

function updateText2() {
  paragraph.html(textBox2.value());
}

function updateSize() {
  paragraph.style('font-size', slider.value() + 'px' );
}
