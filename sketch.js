const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine;

var ground, left, right
var ball



function preload() {

}

function setup() {
	createCanvas(1500, 700);
	engine = Engine.create();
	world = engine.world;


	var ball_options = {
		isStatic: false,
		restitution: 1,
		friction: 0,
		density: 1.2
	}


	ball = Bodies.circle(Math.round(random(30, 1470)), 10, 20, ball_options);
	World.add(world, ball);
	ground = new Ground(width / 2, 670, width, 20)
	left = new Ground(1200, 600, 20, 120);
	right = new Ground(1300, 600, 20, 120);
	bouncer1 = new Ground(600, 50, 20, 60)
	bouncer2 = new Ground(1000, 480, 20, 60)
	bouncer3 = new Ground(246, 350, 20, 60)
	bouncer4 = new Ground(1400, 175, 20, 60)
	wallSave1 = new Ground(1500, 350, 25, 700)
	//wallSave2 = new Ground(1500, 350, 50, 700)

	//Create the Bodies Here.


	Engine.run(engine);

}


function draw() {
	rectMode(CENTER);
	background(0);

	ground.display();
	left.display();
	right.display();
	bouncer1.display();
	bouncer2.display();
	bouncer3.display();
	bouncer4.display();
	wallSave1.display();

	ellipse(ball.position.x, ball.position.y, 40, 40)

}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball, ball.position, { x: 80, y: -85 });
	};


}


