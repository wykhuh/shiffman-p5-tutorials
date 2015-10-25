function Bubble (x, y, img) {
  this.x = x;
  this.y = y;
  this.img = img;

  this.update = function() {
    this.x += random(-1, 1);
    this.y += random(-1, 1);
  }
  
  this.display = function() {
    // image center is at this.x, this.y
    imageMode(CENTER);
    image(this.img, this.x, this.y)
  }
}
