let bgImg;
let towerImg;

function preload() {
  bgImg = loadImage("assets/images/table-bg.jpg"); // load the background img before the sketch starts
  towerImg = loadImage("assets/images/jenga-tower.png"); // load jenga tower img
}

function setup() {
  createCanvas(400, 300);
}

function draw() {
  background(220, 100, 10);
  image(bgImg, 0, 0);
  image(towerImg, 25, 0);

  rect(50, 130, 100, 20);
  text("This is jenga!", 60, 145);
}
