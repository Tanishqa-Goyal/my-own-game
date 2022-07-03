var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var endImg;

//game state
var gameState = "play"

function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");              
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");
  endImg = loadImage("gameover.png");
}

function setup() {
  createCanvas(windowWidth,windowHeight);

  //create tower sprite
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 1;

  // create ghost sprite👻
  ghost = createSprite(width/2,height-20,20,20);
  ghost.addAnimation('ghostflying',ghostImg);
  ghost.scale=0.08;


// create the different groups 
doorsGroup = new Group();
climbersGroup = new Group();
invisibleBlockGroup = new Group();

}

function draw() {

  // if condition for ghost to move with mouse
  if(gameState==="play"){
    background(0)
    ghost.x = World.mouseX

    // code to add sound to game
    if(ghost.x=World.mouseX){
    loadSound (spookySound)
    }

    // create edges 
    edges= createEdgeSprites();
    ghost.collide(edges);
  
    // reset the background to show it infinite
  if(tower.y > height){
      tower.y = height/2;
    }
    //create obstacles
    createdoor ();
    createclimber ();

  // code to destroy ghost if it touches obstacles 
  if(doorsGroup.isTouching(ghost) || climbersGroup.isTouching(ghost)) { 
    gameState=END;

    // code for end game background and settings
    ghost.addAnimation("ghostflying",endImg);
    ghost.x=width/2;
    ghost.y=height/2;
    ghost.scale=0.6;
    
    doorsGroup.destroyEach();
    climbersGroup.destroyEach();
    
    doorsGroup.setVelocityYEach(0);
    climbersGroup.setVelocityYEach(0);
    }
}
}
// draw the things who have put code for
    drawSprites()

    // now create the obstacles 
    function createdoor(){
      if (World.frameCount % 530 == 0) {
      var door = createSprite(Math.round(random(50, width-50),40, 10, 10));
      door.addImage(doorImg);
      door.scale=0.1;
      door.velocityY = 4;
      door.lifetime = 200;
      doorsGroup.add(door);
      }
    }
      
      function createclimbers(){
        if (World.frameCount % 530 == 0) {
        var climber = createSprite(Math.round(random(50, width-50),40, 10, 10));
        climber.addImage(swordImg);
        climber.scale=0.1;
        climber.velocityY = 4;
        climber.lifetime = 200;
        climber.add(climber);
        }
      }
    





