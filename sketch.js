let cx, cy;
let secondsRadius;
let minutesRadius;
let hoursRadius;
let clockDiameter;

function setup() {
  createCanvas(720, 400);
  stroke(255);

  let radius = min(width, height) / 2;
  secondsRadius = radius * 0.71;
  minutesRadius = radius * 0.60;
  hoursRadius = radius * 0.50;
  clockDiameter = radius * 1.7;

  cx = width / 2;
  cy = height / 2;
}

function draw() {
  //background(230); //color canvas bg

  // Draw bg
  noStroke();
  //fill(0, 0, 0); //black
  fill(144,122,158); //gray

  ellipse(cx, cy, clockDiameter + 25, clockDiameter + 25);
  //fill(144,122,158); //gray
  fill(174,152,188);

  ellipse(cx, cy, clockDiameter, clockDiameter);

  // sin() & cos() angles start at 3 o'clock;
  // subtracting HALF_PI to makes them start at the top
  let s = map(second(), 0, 60, 0, TWO_PI) - HALF_PI;
  let m = map(minute() + norm(second(), 0, 60), 0, 60, 0, TWO_PI) - HALF_PI;
  let h = map(hour() + norm(minute(), 0, 60), 0, 24, 0, TWO_PI * 2) - HALF_PI;

  // Draw clock hands
  stroke(255);
  strokeWeight(1);
  line(cx, cy, cx + cos(s) * secondsRadius, cy + sin(s) * secondsRadius);
  strokeWeight(2);
  line(cx, cy, cx + cos(m) * minutesRadius, cy + sin(m) * minutesRadius);
  strokeWeight(4);
  line(cx, cy, cx + cos(h) * hoursRadius, cy + sin(h) * hoursRadius);

  // Draw minute ticks
  strokeWeight(2);
  beginShape(POINTS);
  for (var a = 0; a < 360; a+=6) {
    var angle = radians(a);
    var x = cx + cos(angle) * secondsRadius;
    var y = cy + sin(angle) * secondsRadius;
    vertex(x, y);
  }
  endShape();
}
