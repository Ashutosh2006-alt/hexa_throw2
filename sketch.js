//this are the matter.js functions.
const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
//this is the important variable used in the game.
var world;
var engine;

//this is the platform used in the game.
var platform1;
var platform2;
var platform3;

//this is the wheat block used in the game.
var Wheat1;
var Wheat2;
var Wheat4;
var Wheat5;
var Wheat6;
var Wheat7;
var Wheat8;
var Wheat9;
var Wheat10;
var Wheat11;
var Wheat12;
var Wheat13;
var Wheat14;
var Wheat15;
var Wheat16;
var Wheat17;
var Wheat18;
var Wheat19;
var Wheat20;
var Wheat21;
var Wheat22;

//this is the throughing object.
var hexa;
var chain;

//this is the function preload for loading up the images.
function preload() {

  //this is the image.
  dirt = loadImage("images/brown.jpg");
  hexaimg = loadImage("images/hexa.png");
  volcanoImg = loadImage("images/volcano.png");

}
// this is the function setup for making the base of the game.
function setup() {

  //this is the canvas for the game.
  createCanvas(windowWidth, windowHeight);

  //this is the engine used in the game.
  engine = Engine.create();
  world = engine.world;

  //this is the platform used in the game.
  platform1 = new Platform(width / 2, height - 30, width, 5);
  platform2 = new Platform(width / 3 + 50, height / 2 - 30, 250, 5);
  platform3 = new Platform(width / 2 + 100, height / 3, 300, 5);

  //this is the wheat block used in the game.
  Wheat1 = new Wheat(600, 260, 30, 40);
  Wheat2 = new Wheat(570, 260, 30, 40);
  Wheat3 = new Wheat(540, 260, 30, 40);
  Wheat4 = new Wheat(630, 260, 30, 40);
  Wheat5 = new Wheat(660, 260, 30, 40);
  Wheat6 = new Wheat(585, 220, 30, 40);
  Wheat7 = new Wheat(555, 220, 30, 40);
  Wheat8 = new Wheat(615, 220, 30, 40);
  Wheat9 = new Wheat(645, 220, 30, 40);
  Wheat10 = new Wheat(600, 170, 30, 40);
  Wheat11 = new Wheat(570, 180, 30, 40);
  Wheat12 = new Wheat(630, 180, 30, 40);
  Wheat13 = new Wheat(600, 140, 30, 40);
  Wheat14 = new Wheat(900, 170, 30, 40);
  Wheat15 = new Wheat(930, 170, 30, 40);
  Wheat16 = new Wheat(870, 170, 30, 40);
  Wheat17 = new Wheat(840, 170, 30, 40);
  Wheat18 = new Wheat(960, 170, 30, 40);
  Wheat19 = new Wheat(900, 140, 30, 40);
  Wheat20 = new Wheat(930, 140, 30, 40);
  Wheat21 = new Wheat(870, 140, 30, 40);
  Wheat22 = new Wheat(900, 110, 30, 40);

  //this is the throwing object.
  hexa = Bodies.circle(50, 150, 20);
  World.add(world, hexa);
  chain = new Spring(this.hexa, { x: 150, y: 160 })
}
// this is the function draw for drawing object in the game.
function draw() {
  background("black");
  //this is the engine update function.
  Engine.update(engine);

  //this are the essencial grafics for the game.
  imageMode(CENTER);
  image(dirt, width / 3 + 80, height / 2 - 30, 200, 20);
  image(dirt, width / 2 + 120, height / 3, 200, 20);
  image(volcanoImg, width / 2, height - 30, width-350, 200);
  image(hexaimg, hexa.position.x, hexa.position.y, 40, 40);


  //displaying the wheat block.
  Wheat1.display();
  Wheat2.display();
  Wheat3.display();
  Wheat4.display();
  Wheat5.display();
  Wheat6.display();
  Wheat7.display();
  Wheat8.display();
  Wheat9.display();
  Wheat10.display();
  Wheat11.display();
  Wheat12.display();
  Wheat13.display();
  Wheat14.display();
  Wheat15.display();
  Wheat16.display();
  Wheat17.display();
  Wheat18.display();
  Wheat19.display();
  Wheat20.display();
  Wheat21.display();
  Wheat22.display();

  //displaying the platforms.
  platform1.display();
  platform2.display();
  platform3.display();

  //this isthe chain used in the game.
  chain.display();

  textSize(20);
  stroke("black");
  fill("white")
  text("PRESS THE SPACE KEY TO AGAIN THROW THE BALL",width/3,20);
}

//this are the mouse dragging function.
function mouseDragged() {
  Matter.Body.setPosition(this.hexa, { x: mouseX, y: mouseY });
}

//this  is the mouse realeased function.
function mouseReleased() {
  chain.fly();
}

function keyPressed() {
  if (keyCode === 32)
    Matter.Body.setPosition(hexa, { x: 150, y: 200 });
  chain.attach(hexa);
}