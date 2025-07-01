var images = [];

function setup() {
  noCanvas();

  for (let i = 0; i < 5; i++) {
    var p = createP("This is a link: ");
    p.style("background-color", "#ccc");
    p.style("padding", "15px");

    var a = createA("#", "apples");
    a.mousePressed(addPhoto);

    a.parent(p);
  }

  var button = select("#clear");
  button.mousePressed(clearImages);
}

function addPhoto() {
  var img = createImg("apple.png");
  images.push(img);
  img.size(100, 100);

  // this refer to the anchor that was clicked
  var paragraph = this.parent();
  img.parent(paragraph);
}

function clearImages() {
  images.forEach((image) => {
    image.remove();
  });
  images = [];
}
