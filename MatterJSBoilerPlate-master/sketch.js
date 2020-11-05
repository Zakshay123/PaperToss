
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);

box1= new Box(600,300,70,20)
box2= new Box(650,250,20,70)
box3= new Box(550,250,20,70)
paper= new Paper(200,250)
ground=createSprite(400,600,900,20)
ground.shapeColor=(200,50,200)
}


function draw() {
  rectMode(CENTER);
  background(0);

  box1.display()
  box2.display()
  box3.display()
  paper.display()
  drawSprites();
}
function keyPressed(){
if (keyCode  === UP_ARROW){
	Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85})
}
}