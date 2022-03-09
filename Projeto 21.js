
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine;
var world;
var ball;
var ball_options;
var ground;
var parede1, parede2;
var show;


function preload()
{
	
}

function setup() {
	createCanvas(1200, 600);
	engine = Engine.create();
  	world = engine.world;

	//Create the Bodies Here.
    var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}
	ball = Bodies.circle(120, 200, 20, ball_options);
	World.add(world, ball);

   ground = new Ground(600,600, 1200, 35);
   parede1 = new Ground(width/2, 670, width,20);
   parede2 = new Ground(1100,600,20,120);



	rectMode(CENTER);
	ellipseMode(RADIUS);
  
}


function draw() {
  rectMode(CENTER);
  background("LightBlue");
  

  ellipse(ball.position.x,ball.position.y,20);

  ground.Show();
  parede1.Show();
  parede2.Show();
 

 Engine.update(engine);

 
 
 
}

function Key() {
	if(KeyCode === UP_ARROW){
		Matter.Body.applyForce(ball,{x:0, y:0}, {x:0.02, y:0});
	}
}

