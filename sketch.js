const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine, world;

var PaperBall,ground,wall;
var PaperSprite,DustbinSprite;
var Piece1,Piece2,Piece3;
var PaperImg,DustbinImg;

function preload() 
{
   DustbinImg = loadImage("dustbin.png")
   PaperImg = loadImage("paper.png")

}

function setup() {
	var canvas = createCanvas(800,700);
	engine = Engine.create();
	world = engine.world;
   
	PaperSprite=createSprite(50, 650, 20,20);
	PaperSprite.addImage(PaperImg)
   PaperSprite.scale=0.2
   
	DustbinSprite=createSprite(720, 680, 20,20);
	DustbinSprite.addImage(DustbinImg)
   DustbinSprite.scale=0.2
   
	PaperBall = new Garbage(50,650,20,20);
	Piece1 = new DustbinPiece(720,685,100,15);
	Piece2 = new DustbinPiece(675,670,15,100);
	Piece3 = new DustbinPiece(765,670,15,100);
   ground = new Ground(width/2,height,width,20);
   wall = new Ground(width,width/2,20,height);
    
	Engine.run(engine);
}

function draw() {
   background(0);
   Engine.update(engine);
   rectMode(CENTER);
   
   PaperSprite.x= PaperBall.position.x
   PaperSprite.y= PaperBall.position.
   
   PaperBall.display();
   Piece1.display();
   Piece2.display();
   Piece3.display();
   ground.display();
   wall.display();

   PaperBall.velocityX = 2;
   ellipseMode(RADIUS);
   keyPressed();
}

function keyPressed(){
   if (keyCode === UP_ARROW){
      Matter.Body.applyForce(PaperBall.body,PaperBall.body.position,{x:2,y:-2})
   }

}