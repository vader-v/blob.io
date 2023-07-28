let blob;

let blobs = [];

function setup() {
  createCanvas(600, 600);
  blob = new Blob(width/2, height/2, 64);
  for (let i = 0; i < 50; i++) {
    let x = random(-width, width*2);
    let y = random(-height, height*2);
    blobs[i] = new Blob(x, y, 16);
  }
}

function draw() {
  background(0);

  translate (-blob.pos.x + width/2, -blob.pos.y + height/2);
  
  for (let i = blobs.length-1; i >= 0; i--) {
    blobs[i].show();
    if (blob.eats(blobs[i])) {
      blobs.splice(i, 1);
    }
  }

  blob.show();
  blob.update();
}
