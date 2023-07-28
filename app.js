let blob;

let blobs = [];

function setup() {
  createCanvas(700, 600);
  blob = new Blob(width/2, height/2, 64);
  for (let i = 0; i < 10; i++) {
    blobs[i] = new Blob(random(width), random(height), 16);
  }
}

function draw() {
  background(0);

  translate (-blob.pos.x + width/2, -blob.pos.y + height/2);
  blob.show();
  blob.update();
  for (let i = 0; i < blobs.length; i++) {
    blobs[i].show();
  }
}
