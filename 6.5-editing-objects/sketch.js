var bubbles = [];

function setup() {
  createCanvas(600, 400);
}

// display new circles at where you click
function draw() {
  background(0);
  
  for(var i =0; i < bubbles.length; i++) {
    bubbles[i].move();
    bubbles[i].display();
  }
  
  if (bubbles.length > 50) {
    bubbles.splice(0, 1);
  }
}

function mouseDragged () {
  bubbles.push(new Bubble(mouseX, mouseY));
}

function keyPressed() {
  bubbles.splice(0, 1);
}

function Bubble (x, y) {
  this.x = x;
  this.y = y;
  
  this.move = function() {
    this.x += random(-1, 1);
    this.y += random(-1, 1);
  }
  
  this.display = function() {
    stroke(255);
    fill(255, 0, 150, 50);
    ellipse(this.x, this.y, 24, 24);
  }
}



  