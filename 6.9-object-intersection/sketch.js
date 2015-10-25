var b1;
var b2;

function setup() {
  createCanvas(600, 400);
  b1 = new Bubble(250, 200);
  b2 = new Bubble(350, 200);
}


// when circles overlap, change color
function draw() {
  background(0);

  b1.update();
  b1.display();
  b2.update();
  b2.display();
  
  
  if (b1.intersects(b2)){
    b1.changeColor();
    b2.changeColor();
  }
  
}




  