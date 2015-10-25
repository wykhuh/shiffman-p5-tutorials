function Bubble (x, y) {
  this.x = x;
  this.y = y;
  this.diameter = 48;
  // white with 100 alpha
  // color is p5 function
  this.col = color(255, 100);
  
  this.move = function() {
    this.x += random(-1, 1);
    this.y += random(-1, 1);
  }
  
  // if you click within a circle, change fill to purple
  this.clicked = function() {
    var d = dist(this.x, this.y, mouseX, mouseY);
    
    if (d < this.diameter/ 2) {
      this.col = color(255, 0, 200);
    }
  }
  
  this.display = function() {
    stroke(255);
    fill(this.col);
    ellipse(this.x, this.y, this.diameter, this.diameter);
  }
}
