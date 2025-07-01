var dropzone;

function setup() {
  noCanvas();

  dropzone = select("#dropzone");
  dropzone.dragOver(highlight);
  dropzone.dragLeave(unhighlight);
  dropzone.drop(gotFile, unhighlight);
}

function highlight() {
  dropzone.style("background-color", "#ccc");
}

function unhighlight() {
  dropzone.style("background-color", "#fff");
}

function gotFile(file) {
  if (file.type == "image") {
    createP(file.name + " " + file.size);
    var image = createImg(file.data);
    image.size(100, 100);
  }
}
