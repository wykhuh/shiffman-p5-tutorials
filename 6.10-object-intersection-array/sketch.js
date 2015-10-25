var bubbles = [];

function setup() {
  createCanvas(600, 400);
  for(var i =0; i < 4; i++){
    bubbles[i] = new Bubble(random(width), random(height));
  }
}


// when circles overlap, change color
function draw() {
  background(0);

  // nested for loops to check if circle intersects all other circles
  for(var i = 0; i < bubbles.length; i++) {
    bubbles[i].update();
    bubbles[i].display();
    for(var j = i; j < bubbles.length; j++) {
      if (i != j && bubbles[i].intersects(bubbles[j])) {
        bubbles[i].changeColor();
        bubbles[j].changeColor();
      }
    }
  }
}


