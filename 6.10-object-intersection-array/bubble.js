function Bubble (x, y) {
  this.x = x;
  this.y = y;
  this.r = 48;
  this.col = color(255);
  
  this.display = function() {
    stroke(255);
    fill(this.col, 100);
    ellipse(this.x, this.y, this.r * 2, this.r * 2);
  }
  
  this.isFinished = function () {
    if(this.lifespan < 0) {
      return true;
    } else {
      return false;
    }
  }
  
// when circles overlap
  this.intersects = function (other){
    var d = dist(this.x, this.y, other.x, other.y);
    return d < this.r + other.r 
  }
  
  this.update = function() {
    this.x += random(-1, 1);
    this.y += random(-1, 1);
    this.lifespan--;
  }
  
  this.changeColor = function() {
    this.col = color(random(255), random(255), random(255));
  }
}
