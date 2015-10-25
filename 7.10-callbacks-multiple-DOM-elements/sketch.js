var paragraph;
var paragraphs;

function setup() {

  for (var i = 0; i < 10; i++) {
    var par = createP('rainbow');
    par.position(random(500), random(300));
  }

  paragraphs = selectAll('p');
  for(var i =0; i < paragraphs.length; i++) {
    paragraphs[i].mouseOver(highlight);
    paragraphs[i].mouseOut(unhighlight);
  }
}

// when you assign a function as an event to an DOM element, p5 uses
// this to refer to the particular DOM element the event is attached to.
// this knows which element DOM the event happens to.
function highlight() {
  this.style('padding', '16px');
  this.style('background-color', '#f0f')
}

function unhighlight() {
  this.style('padding', '0px');
  this.style('background-color', '#fff')
}
