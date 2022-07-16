var canvas;
var backgroundImage, car1_img, car2_img, track;
var fuelImage, powerCoinImage, lifeImage;
var obstacle1Image, obstacle2Image;
var database, gameState;
var form, player, playerCount;
var allPlayers, car1, car2, fuels, powerCoins, obstacles;
var cars = [];
var blastImage
var coin2Image
var coin3Image
var carImage
var car,carGroup
function preload() {
  backgroundImage = loadImage("./assets/background.png");
  car1_img = loadImage("../assets/carA.png");
  car2_img = loadImage("../assets/carB.png");
  track = loadImage("../assets/track.jpg");
  fuelImage = loadImage("./assets/fuel.png");
  powerCoinImage = loadImage("./assets/coin1.png");
  obstacle1Image = loadImage("./assets/obstacleA.png");
  obstacle2Image = loadImage("./assets/obstacleB.png");
  lifeImage = loadImage("./assets/life.png");
  blastImage=loadImage("./assets/blast.png")
  coin2Image=loadImage("./assets/crushedBottlecoin.png")
  coin3Image=loadImage("./assets/coin3.png")
  carImage=loadImage("./assets/car1.png")
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function draw() {
  background(backgroundImage);
  if (playerCount === 2) {
    game.update(1);
  }

  if (gameState === 1) {
    game.play();
  }

  if (gameState === 2) {
    game.showLeaderboard();
    game.end();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
