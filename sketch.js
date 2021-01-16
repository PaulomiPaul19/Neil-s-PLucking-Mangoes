const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

var engine, world;
var boyImg, boy;
var mango1, mango2, mango3, mango4, mango5, mango6, mango7, mango8, mango9, mango10, mango11, mango12;
var groundObject;
var launcherObject;
var treeObject;
var stoneObject;
var launchingForce = 100;

function preload() {
  boyImg = loadImage("Plucking mangoes/boy.png");

}

function setup() {
	createCanvas(1300, 600);

	engine = Engine.create();
	world = engine.world;

  mango1 = new Mango(1100, 100, 30);
  mango2 = new Mango(1170, 130, 30);
  mango3 = new Mango(1010, 140, 30);
  mango4 = new Mango(1000, 70, 30);
  mango5 = new Mango(1100, 70, 30);
  mango6 = new Mango(1000, 230, 30);
  mango7 = new Mango(900, 230, 40);
  mango8 = new Mango(1140, 150, 40);
  mango9 = new Mango(1100,230,40);
	mango10 = new Mango(1200, 200, 40);
	mango11 = new Mango(1120, 50, 40);
	mango12 = new Mango(900, 160, 40);

  groundObject = new Ground(width/2, 600, width, 20);

  treeObject = new Tree(1050, 580);

  stoneObject = new Stone(235, 420, 30);

  launcherObject = new Launcher(stoneObject.body, {x:235,y:420});

  var render = Render.create({
    element: document.body,
    engine: engine,
    options: {
      width: 1300,
      height: 600,
      wireframes: false
    }
  });

  Engine.run(engine);
  Render.run(render);
}

function draw() {
  rectMode(CENTER);
  background(0);

  textSize(25);
  text("Press Space to get a second chance to play!", 50, 50);
  image(boyImg, 200, 340, 200, 300);

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  mango12.display();

  treeObject.display();

  stoneObject.display();

  groundObject.display();

  launcherObject.display();
  
  detectCollision(stoneObject,mango1);
  detectCollision(stoneObject,mango2);
  detectCollision(stoneObject,mango3);
  detectCollision(stoneObject,mango4);
  detectCollision(stoneObject,mango5);
  detectCollision(stoneObject,mango6);
  detectCollision(stoneObject,mango7);
  detectCollision(stoneObject,mango8);
  detectCollision(stoneObject,mango9);
  detectCollision(stoneObject,mango10);
  detectCollision(stoneObject,mango11);
  detectCollision(stoneObject,mango12);
}

function mouseDragged() {
   Matter.Body.setPosition(stoneObject.body, {x: mouseX, y: mouseY});
}

function mouseReleased() {
   launcherObject.fly();
}

function keyPressed() {
   if(keyCode === 32) {
    Matter.Body.setPosition(stoneObject.body, {x: 235, y: 420});
    launcherObject.attach(stoneObject.body);
 }
}

function detectCollision(lstone, lmango) {
  mangoBodyPosition = lmango.body.position;
  stoneBodyPosition = lstone.body.position;
}