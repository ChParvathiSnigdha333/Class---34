const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world ;
var ground ;

function setup(){
    var canvas = createCanvas(3000,800);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground (600,790,1200,20)
   
    ball = new Ball (200,200,80)

    for (var i=500 ; i<800; i = i+75){
        
    box = new Box(900, i, 70, 70);
    
    }

    rope = new Rope (ball.body,{x:500,y:50})
}

function draw(){
    Engine.update(engine);
    background("lightblue")
    //strokeWeight(4);
   ground.display();
   box.display();
   ball.display();
   rope.display();
}

function mouseDragged(){
    Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
}