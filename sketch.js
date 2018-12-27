function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(20);
  stroke(255);

  translate(windowWidth/2, windowHeight);
  splitBranch(250);
  frame(30);
}

function splitBranch(length){
  if(length<5) {
    console.log("Branch is so small now!");
    return;
  };

  line(0, 0, 0, -length);
  translate(0, -length);

  push();
  rotate(PI/4);
  splitBranch(length*0.7);
  pop();

  push();
  rotate(-PI/4);
  splitBranch(length*0.7);
  pop();
}

window.onresize = function() {
  canvas.size(windowWidth, windowHeight);
};
