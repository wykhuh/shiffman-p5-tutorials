var bubble = {
  x: 300,
  y: 200,
  move:  function() {
    this.x += random(-1, 1);
    this.y += random(-1, 1);
  },
  display: function() {
    stroke(255);
    strokeWeight(4);
    noFill();
    ellipse(this.x, this.y, 24, 24);
  }
}

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  bubble.move();
  bubble.display();
}

