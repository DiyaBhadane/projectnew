const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint
var ground1,ground2;
var block1,block2,block3

function preload() {
    ballImg = loadImage("polygon.png");
}

function setup(){
    createCanvas(1300, 600);
    background("grey")
	engine = Engine.create();
	world = engine.world;

    ground1 = new Ground(400,400,300,10)
    ground2 = new Ground(900,250,300,10)
    ground3 = new Ground(650,590,1300,20)
    
    block1 = new Block(820,220,40,40);
    block2 = new Block(860,220,40,40);
    block3 = new Block(900,220,40,40);
    block4 = new Block(940,220,40,40);
    block5 = new Block(980,220,40,40);
    block6 = new Block(860,180,40,40);
    block7 = new Block(900,180,40,40);
    block8 = new Block(940,180,40,40);
    block9 = new Block(900,140,40,40);

    block10 = new Block(280,370,40,40);
    block11 = new Block(320,370,40,40);
    block12 = new Block(360,370,40,40);
    block13 = new Block(400,370,40,40);
    block14 = new Block(440,370,40,40);
    block15 = new Block(480,370,40,40);
    block16 = new Block(520,370,40,40);
    block17 = new Block(320,330,40,40);
    block18 = new Block(360,330,40,40);
    block19 = new Block(400,330,40,40);
    block20 = new Block(440,330,40,40);
    block21 = new Block(480,330,40,40);
    block22 = new Block(360,290,40,40);
    block23 = new Block(400,290,40,40);
    block24 = new Block(440,290,40,40);
    block25 = new Block(400,250,40,40);

  ball = Bodies.circle(50, 200, 20);
  World.add(world, ball);

  chain = new Chain(this.ball,{x:130, y:190});
}

function draw(){
    ground1.display();
    ground2.display();
    ground3.display();

    fill("red");
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    fill("yellow");
    block6.display();
    block7.display();
    block8.display();
    fill("lightgreen");
    block9.display();

    fill("red");
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();
    fill("green");
    block17.display();
    block18.display();
    block19.display();
    block20.display();
    block21.display();
    fill("yellow");
    block22.display();
    block23.display();
    block24.display();
    fill("pink");
    block25.display();

    chain.display();

    textSize(32);
    fill("black")
    text("Drag the Hexagonal Stone & release it,to launch it towards the blocks",100,500)
    imageMode(CENTER);
    image(ballImg ,55,200,40,40);
}

function mouseDragged() {
    Matter.Body.setPosition(this.ball, {x: mouseX , y: mouseY});  
}
  
  
function mouseReleased() {
    chain.fly();
}