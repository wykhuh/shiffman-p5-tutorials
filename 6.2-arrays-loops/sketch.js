var nums = [100, 50, 12, 72];

function setup() {
  createCanvas(600, 400);
}

// show ellipse
function draw() {
  background(0);

  for(var i = 0; i < nums.length; i++) {
    stroke(255)
    noFill();
    ellipse(i *100 + 100, 200, nums[i], nums[i]);
  }

}
