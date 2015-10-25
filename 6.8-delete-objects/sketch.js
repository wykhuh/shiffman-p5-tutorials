var bubbles = [];

function setup() {
  createCanvas(600, 400);
}

// when mouse is clicked, call the clicked() on every bubble
function mousePressed() {
  var bubble = new Bubble(mouseX, mouseY);
  bubbles.push(bubble);
  
}

// draw 10 bubbles in random spot
function draw() {
  background(0);
  // loop from the end of the array to the beginning to avoid errors
  // from changing an array while looping through an array
  for(var i =bubbles.length -1; i >= 0; i--) {
    bubbles[i].update();
    bubbles[i].display();
    if (bubbles[i].isFinished()) {
      bubbles.splice(i, 1);
    }
  }
}




  