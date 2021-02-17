const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground1, ground2;
var box1, box2, box3, box4, box5, box6, box7,box8, box9, box10;
var box11, box12, box13, box14, box15, box16;
var polygon, slingshot;


function setup(){

    createCanvas(1200,600);

   engine = Engine.create();
   world = engine.world;

   ground1 = new Ground(300,500,400,10);
   ground2 = new Ground(900,300,300,10);

   box1 = new Box(195,460);
   box2 = new Box(265,460);
   box3 = new Box(335,460);
   box4 = new Box(405,460);
   box5 = new Box(230,390);
   box6 = new Box(300,390);
   box7 = new Box(370,390);
   box8 = new Box(265,320);
   box9 = new Box(335,320);
   box10 = new Box(300,250);

   box11 = new Box(825,260);
   box12 = new Box(895,260);
   box13 = new Box(965,260);
   box14 = new Box(860,190);
   box15 = new Box(930,190);
   box16 = new Box(895,120);

   polygon = new Polygon(100,200);

   //sling = new Slingshot(polygon.body, {x:60, y:100});
   slingshot = new Slingshot(polygon.body,{x:100,y:200});


}

function draw(){

    Engine.update(engine);

    background(0);
    textSize(20);
    text("Drag the Hexagonal stone and Realse it, to launch it towards the blocks", 100,50);
    ground1.display();
    ground2.display();

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display(); 
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
    polygon.display();
    slingshot.display();

}


function mouseDragged(){

    Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY});
  
  }
  
  function mouseReleased(){
  
    slingshot.fly();
    
  }