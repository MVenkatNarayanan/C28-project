
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var boy;

function preload()
{
	boyImg=loadImage("boy.png");
}

function setup() {
	createCanvas(1200, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	boy=createSprite(194,625,10,10);
	boy.addImage(boyImg);
	boy.scale=0.15;

	tree=new Tree(615,424,10,10);
	
	ground=new Ground(552,733,1200,10);

	stone=new Stone(102,530,5,5);
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  tree.display();
  ground.display();
  stone.display();
  
  drawSprites();
  textSize(25);
  stroke("white");
  text(mouseX + "," + mouseY, 10,30);
}
function mouseDragged(){
    if (gameState!=="launched"){
        Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
    }
}


function mouseReleased(){
    stone.fly();
    gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32){
        Matter.Body.setPosition(stone.body,{x:200,y:50});
       stone.attach(boy.body);
    }
}



