function setup() {
  for (var i = 0; i < 10; i++) {
    var p = createP("apples");
    var x = floor(random(windowWidth));
    var y = floor(random(windowHeight));
    p.position(x, y);
    p.class("apple");
    p.mousePressed(toggleClass);
  }

  for (var i = 0; i < 10; i++) {
    var p = createP("blueberries");
    var x = floor(random(windowWidth));
    var y = floor(random(windowHeight));
    p.position(x, y);
    p.class("blueberry");
    p.mousePressed(toggleClass);
  }
}

function toggleClass() {
  if (this.elt.className.trim() == "blueberry") {
    this.removeClass("blueberry");
    this.class("apple");
  } else {
    this.removeClass("apple");
    this.class("blueberry");
  }
}

function becomeBlueberry() {
  this.removeClass("apple");
  this.class("blueberry");
}
