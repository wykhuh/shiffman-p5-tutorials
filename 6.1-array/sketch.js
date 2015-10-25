var nums = [100, 25, 12, 72];
var words = ['aaa', 'bbb', 'ccc'];
var index = 0;

function setup() {
  createCanvas(600, 400);
}

// show ellipse 
// show word when mouse is clicked
function draw() {
  background(0);
  ellipse(100, 200, nums[0], nums[0]);
  ellipse(200, 200, nums[1], nums[3]);
  
  fill(255);
  textSize(32);
  text(words[index], 300, 200);

}

function mousePressed() {
  index += 1;
  if (index == words.length) {
    index = 0;
  }
}