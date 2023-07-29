let blob;

let blobs = [];
let zoom = 1;

function setup() {
  createCanvas(600, 600);
  blob = new Blob(0, 0, 64);
  for (let i = 0; i < 200; i++) {
    let x = random(-width, width);
    let y = random(-height, height);
    blobs[i] = new Blob(x, y, 16);
  }
}

const gridSpacing = 20;

function drawGrid() {
  stroke(40); // Set the color of the grid lines
  strokeWeight(1);

  // Draw vertical lines
  for (let x = -width; x <= width; x += gridSpacing) {
    line(x, -height, x, height);
  }

  // Draw horizontal lines
  for (let y = -height; y <= height; y += gridSpacing) {
    line(-width, y, width, y);
  }
}

function draw() {
  background(0);

  
  // translate (width / 2 - blob.pos.x, height / 2 - blob.pos.y);
  translate(width / 2, height / 2);
  let newscale = 64 / blob.r;
  zoom = lerp(zoom, newscale, 0.2);
  scale(zoom);
  translate(-blob.pos.x, -blob.pos.y);
  
  drawGrid();

  for (let i = blobs.length-1; i >= 0; i--) {
    blobs[i].show();
    if (blob.eats(blobs[i])) {
      blobs.splice(i, 1);
    }
  }

  blob.show();
  blob.update();
}
