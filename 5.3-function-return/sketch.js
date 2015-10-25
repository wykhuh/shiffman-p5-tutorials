function setup() {
  createCanvas(600, 400);

  // angle and degrees are from p5
  var angle = degrees(PI/2);
  println (angle);

  var km = milesToKm(26.3);
  println (km);

}

function milesToKm(miles) {
  return  miles * 1.6;
}
