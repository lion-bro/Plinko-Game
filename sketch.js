const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;
  
  ground = new Ground(240,790,480,20);

}

var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight = 300;

for (var k = 0; k <= 10; k = k + 80){

  divisions.push(new Divisions(k,divisionHeight-divisionHeight/2,10,divisionHeight));
}


//for(var j = 40; j<=width; j = j +50){

  //plinkos.push(new Plinko(j,75,10));

//}

//for(var j = 15; j <= width - 10; j = j +50){

  //plinkos.push(new Plinko(j,175,10));

//}

for (var k = 0; k < divisions.length; k++){

  divisions[k].display();

}

function draw() {
  background("black");  
  Engine.update(engine);

  ground.display();

  

  drawSprites();
}