const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4;
var log1,log2;
var bird1
var goat1,goat2
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,320,50,50);
    box2 = new Box(920,320,50,50);
    box3 = new Box(700,240,50,50);
    box4 = new Box(920,240,50,50); 
    ground = new Ground(600,height,1200,40);
    log1 = new Log(810,260,300,PI/2);
    log2 = new Log(810,180,300,PI/2);
    bird1 = new Bird(200,100);
    goat1 = new Goat(810,350);
    goat2 = new Goat(810,220);
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    log1.display();
    log2.display();
    bird1.display();
    goat1.display();
    goat2.display();
    ground.display();
}