
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var boat, boatI, g, gi, f, fi;


function preload()
{
	boatI=loadImage("images/canoe.png");
	gi = loadImage("garbager.png");
	fi = loadImage("images/fishes.png")
}

function setup() {
	createCanvas(window.innerWidth, window.innerHeight);


	engine = Engine.create();
	world = engine.world;

	
     

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("#fff");
  fill("#000");
  textSize(20);
  strokeWeight(10)
  text("CONTROLS",650,20);
  
  textSize(15);
  strokeWeight(10)
  text("1. The boat follows your mouse horizontally so you can use your mouse to move the boat.", 10,50);
  boat = createSprite(650,150,10,10);
  boat.addImage(boatI);
  boat.scale=0.5;
  text("2. Money can be earned by collecting the garbage. You can collect garbage by just clicking on it.",10,250);
  g = createSprite(650,350,10,10);
  g.addImage(gi);
  text("3. If you click on the fish, you lose coins.",10,450);
  f = createSprite(650,550,10,10);
  f.addImage(fi);
  f.scale = 0.3

  drawSprites();
 
}

