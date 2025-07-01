var canvas;
var img;

function setup() {
  canvas = createCanvas(200, 200);
  background("#ddd");

  canvas.drop(gotFile);
}

function gotFile(file) {
  createP(file.name + " " + file.size);
  loadImage(file.data, handleImage);
}

function handleImage(img) {
  image(img, 0, 0, 200, 200);
}
