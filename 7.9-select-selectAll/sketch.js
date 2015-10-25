var paragraph;
var paragraphs;

function setup() {
  createCanvas(100, 100);
  background(0);

  // if the dom element needs dynamic content, use p5
  createP('this is paragraph by p5')

  // if dom element has static content, use html
  // select() will select first element
  paragraph = select('#unicorn');
  paragraph.mouseOver(changeBackground);

  // selectAll() will select all elements
  paragraphs = selectAll('.rainbow');
  for(var i =0; i < paragraphs.length; i++) {
    paragraphs[i].style('font-size', '20px');
  }


  var button = select('#button');
  button.mousePressed(canvasBg);
}


function canvasBg() {
  background(random(255));
}

function changeBackground() {
  paragraph.style('background-color', 'red')
}
