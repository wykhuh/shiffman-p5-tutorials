var happy = ["rainbow", "unicorn", "purple", "bacteria"];

function setup() {
  noCanvas();
  var button = select('#button');
  button.mousePressed(addItem);
}

// create li, and attach them to ol
function addItem() {
  var r = floor(random(0, happy.length));
  var li = createElement('li', happy[r]);
  li.parent('happylist');
}

