
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5;
var roof;
var rope;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
bobObject1= new Bob(150,500,100)
bobObject2= new Bob(250,500,100)
bobObject3= new Bob(350,500,100)
bobObject4= new Bob(450,500,100)
bobObject5= new Bob(550,500,100)
roof = new Roof (370,100,550,20)
  Engine.run(engine);
  
  rope = new Rope(bobObject1.body,roof.body,-bobDiameter*2,0)
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  drawSprites();

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  roof.display();
  rope.display();    
}



