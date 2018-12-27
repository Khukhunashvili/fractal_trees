function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(20);
  stroke(255);
  text("Initial commit!", windowWidth/2, windowHeight/2, windowWidth, windowHeight);
  fill(255);

}

window.onresize = function() {
  canvas.size(windowWidth, windowHeight);
};
