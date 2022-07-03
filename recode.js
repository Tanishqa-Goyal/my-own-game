//make the variables
var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameover;

// call the gamestate
var gameState = "play"

function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  endImg = loadImage("gameover.png");
}

function setup() {
  createCanvas(600, 600);

  // create the tower sprite
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 5;
  
  // create ghost sprite👻
  ghost = createSprite(width/2,height-100,20,20);
  ghost.addAnimation('ghostflying',ghostImg);
  ghost.scale=0.55;
  
  gameover = createSprite(300,200);
  gameover.addImage(endImg);
  gameover.scale = 0.6;
  
  gameover.visible = false;
  doorsGroup = new Group();
  climbersGroup = new Group();

}
    
function draw() {

// if condition for ghost to move with mouse
  if(gameState==="play"){
    background(0)
    ghost.x = World.mouseX
  }

  background(200);
  
  if(tower.y > 400){
      tower.y = 300
    }

// code to destroy ghost if it touches obstacles 
if(doorsGroup.isTouching(ghost) || climbersGroup.isTouching(ghost)) { 
  //gameState=END;

  gameover.visible = true;


 
 ghost.addAnimation("ghostImg",endImg);
 ghost.x=width/2;
 ghost.y=height/2;
 ghost.scale=0.6;
 
 doorsGroup.destroyEach();
 climbersGroup.destroyEach();
 
 doorsGroup.setVelocityYEach(0);
 climbersGroup.setVelocityYEach(0);
 }

    drawSprites()
    doorrandom()
    climberrandom()

}

function doorrandom(){
  if (frameCount % 60 === 0) {
    var door = createSprite(450,40,40,10);
    door.y = Math.round(random(180,10));
    door.addImage(doorImg);
    door.scale=1;
    door.velocityY = 20;
    door.lifetime = 200;
    doorsGroup.add(door);
   }
}
function climberrandom(){
  if (frameCount % 60 === 0) {
    var climber = createSprite(450,90,20,20);
    climber.y = Math.round(random(80,120));
    climber.addImage(climberImg);
    climber.scale=1;
    climber.velocityY = 20;
    climber.lifetime = 200;
    climbersGroup.add(climber);
  }
}
