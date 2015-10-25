var x =0;
var speed =3;

function setup() {
  createCanvas(600, 400);
}

// make circle move horziontally;
// when at edge of canvas, circle moves in opposite direction
function draw() {
  background(0);

  stroke(255);
  strokeWeight(4);
  noFill();
  ellipse(x, 200, 100, 100);


  if (x > width || x < 0) {
    println('off screen')
    // toggle sign of speed
    speed = speed * -1;
  }

  x += speed;

}
