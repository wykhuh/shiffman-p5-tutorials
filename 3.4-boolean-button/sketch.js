var on = false;

function setup() {
  createCanvas(600, 400);
}

// when inside the square, fill it
// when mouse is clicked, toggle between green and black background
function draw() {
  // change background to green if on, else background is black
  if (on) {
    background(0, 255, 0);
  } else {
    background(0);
  }

  stroke(255);
  strokeWeight(4);
  noFill();

  // when inside square, fill the square with purple
  if(mouseX >250 && mouseX < 350 && mouseY > 150 && mouseY < 250) {
    fill(255, 0, 200);
  }

  rectMode(CENTER);
  rect(300, 200, 100, 100);

}

// when mouse is pressed inside the square, change he state of on
function mousePressed() {
  if(mouseX >250 && mouseX < 350 && mouseY > 150 && mouseY < 250) {
    on = !on;
  }
}
