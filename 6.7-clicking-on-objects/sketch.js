var bubbles = [];

function setup() {
  createCanvas(600, 400);
  for (var i = 0; i < 10; i++) {
    var x = random(width);
    var y = random(height);
    bubbles.push(new Bubble(x, y));
  }
}

// when mouse is clicked, call the clicked() on every bubble
function mousePressed() {
  for(var i =0; i < bubbles.length; i++) {
    bubbles[i].clicked();
  }
}

// draw 10 bubbles in random spot
function draw() {
  background(0);
  for(var i =0; i < bubbles.length; i++) {
    bubbles[i].move();
    bubbles[i].display();
  }
}




  