
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var ball_options;

function preload() {


	ball_options = {
		isStatic: false,
		restitution: 0.3,
		friction: 0,
		density: 1.2
	}


}

function setup() {
	createCanvas(900, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball = Bodies.circle(230, 500, 20, ball_options);
	World.add(world, ball);

	ground = new Ground(450, 580, 900, 10)

	bucket_1 = new Ground(700, 535, 10, 87)
	bucket_2 = new Ground(820, 535, 10, 87)

	Engine.run(engine);

}


function draw() {
	rectMode(CENTER);
	background(51);
	fill("yellow");
	ellipse(ball.position.x, ball.position.y, 20);
	ground.display()
	bucket_1.display()
	bucket_2.display()

	keypressed()

	drawSprites();

}

function keypressed() {
	if (keyIsDown(UP_ARROW)) {
		Body.applyForce(ball, { x:ball.position.x, y:ball.position.y }, { x: 4, y: -5 })
	}
}



