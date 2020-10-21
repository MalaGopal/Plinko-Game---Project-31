const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world,ground;
var plinkos = [];
var particles = [];
var divisions = [];
var divisionsHeight = 300;

function setup() {
 
  createCanvas(810,800);
  

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(width/2,height,width,20);
  
 for(var k = 0; k< width;k = k+80){
   divisions.push(new Divisions(k,height-divisionsHeight/2,10,divisionsHeight));
 }

  
  for(var j = 75; j < width; j = j + 50){
      plinkos.push(new Plinko(j,75));
  }
  for(var j = 100;j < width;j = j+50){
    plinkos.push(new Plinko(j,175));
  }
  for(var j = 75;j < width;j = j+50){
    plinkos.push(new Plinko(j,275));
  }
  for(var j = 100;j < width;j = j+50){
    plinkos.push(new Plinko(j,375));
  }
  for(var j = 75;j < width;j = j+50){
    plinkos.push(new Plinko(j,475));
  }





 
  
}

function draw() {
  background(0,255,255);  
textSize(20);
Engine.update(engine);


  ground.display()
  for (var k = 0 ; k<divisions.length ; k++){
    divisions[k].display();
  }

  if(frameCount%60 === 0){
    particles.push(new Particle(random(width/2-30,width/2+30),10,10));
  }

  for(var j = 0; j<particles.length;j++){
    particles[j].display();
  }

  for(var i = 0; i < plinkos.length;i++ ){
    plinkos[i].display();
  }
  drawSprites();
}