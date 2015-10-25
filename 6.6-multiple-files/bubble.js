function Bubble (x, y) {
  this.x = x;
  this.y = y;
  
  this.move = function() {
    this.x += random(-1, 1);
    this.y += random(-1, 1);
  }
  
  this.display = function() {
    stroke(255);
    fill(255, 150);
    ellipse(this.x, this.y, 24, 24);
  }
}
