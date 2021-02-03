const World=Matter.World;
const Engine=Matter.Engine;
const Bodies=Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;

var position=[];
var maxDrop=10;
var drop;



function preload(){
    boyImg=loadImage("boy.png");
}

function setup(){
    var canvas = createCanvas(400,400);

    engine = Engine.create();
    world = engine.world;
    
    drop1 = new Drop(200,200);

    
}

function draw(){
    background(0)
    Engine.update(engine);
    var rand = [Math.round(random(0,400))]
    position.push(rand);

    

    for(var i = 0; i<maxDrop; i++){
        drop = new Drop(position[i],0);
        drop.display();
    }
    drop1.display();
}   

