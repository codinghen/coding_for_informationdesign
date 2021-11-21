function setup() {
  createCanvas(480, 700);
  angleMode(DEGREES);
}

function draw() {
  background(255);
  translate(10, 10);

  // grid of 24 squares
  for (var y = 0; y < 600; y += 100) {
    for (var x = 0; x < 400; x += 100) {
      noFill();
      strokeWeight(1);
      stroke(0);
      rect(x, y, 100, 100);
    }
  }

  // 24 arcs
  for (var y = 47; y <= 600; y += 100) {
    for (var x = 47; x <= 400; x += 100) {
      noFill();
      strokeWeight(12);
      stroke(0);
      strokeCap(SQUARE);
      arc(x, y, 94, 94, 0, 90);
    }
  }

}
