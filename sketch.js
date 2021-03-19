const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18,box19,box20, ground;
var ball, rope


var ing,img;

function preload(){
ing

}

function setup() {
  createCanvas(3000, 800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600, 600, 1200, 20);
  box1 = new Box(900, 100, 70, 70);
  box2 = new Box(900,100,70,70);
  box3 = new Box(830,100,70,70);
  box4 = new Box(900,100,70,70);
  box5 = new Box(900,100,70,70);
  box6 = new Box(900,100,70,70);
  box7 = new Box(830,100,70,70);
  box8 = new Box(830,100,70,70);
  box9 = new Box(830,100,70,70);
  box10 = new Box(830,100,70,70);
  ball=new Ball(700,600,80,80);


  box11 = new Box(1000, 100, 70, 70);
  box12 = new Box(1000,100,70,70);
  box13 = new Box(1000,100,70,70);
  box14 = new Box(1000,100,70,70);
  box15 = new Box(1000,100,70,70);

  box16 = new Box(1070,100,70,70);
  box17 = new Box(1070,100,70,70);
  box18 = new Box(1070,100,70,70);
  box19 = new Box(1070,100,70,70);
  box20 = new Box(1070,100,70,70);



   
  rope=new Rope(ball.body,{x:700,y:100})






  
}

function draw() {
  background(180);
  Engine.update(engine);
  ground.display();
  
  if(keyCode == 32){
    box1.x=900;
    box1.y=100;
    box2.x=900;
    box2.y=100;
    box3.x=900;
    box3.y=100;
    box4.x=900;
    box4.y=100;
    box5.x=900;
    box5.y=100;
    box6.x=830;
    box6.y=100;
    box7.x=830;
    box7.y=100;
    box8.x=830;
    box8.y=100;
    box9.x=830;
    box9.y=100;
    box10.x=830;
    box10.y=100;
    box11.x=1000;
    box11.x=1000;
    box12.x=1000;
    box12.y=100;
    box13.x=1000;
    box13.y=100;
    box14.x=1000;
    box14.y=100;
    box15.x=1070;
    box15.y=100;
    box16.x=1070;
    box16.y=100;
    box17.x=1070;
    box17.y=100;
    box18.x=1070;
    box18.y=100;
    box19.x=1070;
    box19.y=100;
    box20.x=1070;
    box20.y=100;
    
  }


  
  
  box3.display();
  box2.display();
  box1.display(); 
  box5.display();
  box4.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  

  box11.display();
  box12.display();
  box13.display(); 
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();

  ball.display();
  rope.display();

  


}

function mouseDragged()
{
Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})



}


  


