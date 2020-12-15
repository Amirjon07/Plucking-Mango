
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint
var boy, launchingForce=100
function preload()
{
boy=loadImage("boy.png")
}

function setup() {
	createCanvas(1300, 600);


	engine = Engine.create();
	world = engine.world;

	stone=new Stone(235,420,30)
	mango1=new Mango(1100,100,30)
	mango2=new Mango(1170,130,30)
	mango3=new Mango(1010,140,30)
	mango4=new Mango(1100,160,30)
	mango5=new Mango(1000,70,30)
	mango6=new Mango(1100,70,30)
	mango7=new Mango(1000,230,30)
	mango8=new Mango(900,230,40)
	mango9=new Mango(1100,230,40)
	mango10=new Mango(1200,200,30)
	mango11=new Mango(1120,50,30)
	mango12=new Mango(900,160,30)
	tree=new Tree(1050,580)
	ground=new Ground(width/2,600,width,20)
	string=new String(stone.body,{x:235,y:420})
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
stone.display()
mango1.display() 
mango2.display() 
mango3.display() 
mango4.display() 
mango5.display() 
mango6.display() 
mango7.display() 
mango8.display() 
mango9.display() 
mango10.display() 
mango11.display() 
mango12.display() 
tree.display()
ground.display()
string.display()
image(boy,200,340,200,300)
detectCollocin(stone,mango1)
detectCollocin(stone,mango2)
detectCollocin(stone,mango3)
detectCollocin(stone,mango4)
detectCollocin(stone,mango5)
detectCollocin(stone,mango6)
detectCollocin(stone,mango7)
detectCollocin(stone,mango8)
detectCollocin(stone,mango9)
detectCollocin(stone,mango10)
detectCollocin(stone,mango11)
detectCollocin(stone,mango12)

}

function detectCollocin(stone,mango){
	var mangoposition=mango.body.position
	var stoneposition=stone.body.position
	var distance=dist(stoneposition.x,stoneposition.y,mangoposition.x,mangoposition.y)
if(distance<=mango.r+stone.r){
	Matter.Body.setStatic(mango.body,false)
}
}

function mouseDragged(){
	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
	string.fly()
}

function keyPressed(){
	if(keyCode==32){
	Matter.Body.setPosition(stone.body,{x:235,y:420})
	string.attach(stone.body)
	}
}

