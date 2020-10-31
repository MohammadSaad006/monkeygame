
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup

var ground
var gameState=1
var PLAY=1
var END=1
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  monkeyImage=loadImage("sprite_0.png")
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  monkey = createSprite(50,318,20,50);
  monkey.addAnimation("running", monkey_running);
  monkey.scale = 0.15;

   ground = createSprite(200,370,400,20);
   ground.velocityX=-4;
   ground.x = ground.width/2;
   console.log(ground.x) 
  
 obstaclesGroup =createGroup();
bananaGroup=createGroup();
  
  SurvivalTime=0
}


function draw() {
  background(222)

     if(keyDown("space")&& monkey.y >= 100) {
        monkey.velocityY = -12;
     }
  
    
     monkey.velocityY = monkey.velocityY + 0.8
  
     if (ground.x < 500){
      ground.x = ground.width/2;
     }
  
  
SurvivalTime = SurvivalTime + Math.round(getFrameRate()/60 );
  stroke("black");
  textSize(20);
  fill("black")
  if(gameState===PLAY){
  text(" Survival Time: "+  SurvivalTime, 130,50);
     banana();
  Obstacles();

    if (gameState===END){

    if(obstaclesGroup.isTouching(monkey)){
      gameState=END;
      SurvivalTime=0
      bananaGroup.velocityX = 0;
      monkey.velocityX = 0;
      obstaclesGroup.setVelocityXEach(0);
      bananaGroup.setVelocityXEach(0);
      ground.velocityX=0
       obstaclesGroup.destroyEach();
      bananaGroup.destroyEach();
     
      monkey.addImage(monkeyImage);
      }
  }
  }
 monkey.collide(ground);
 
  drawSprites();
  
  
}

function Obstacles(){
 if (frameCount % 300 === 0){
   var obstacles = createSprite(400,325,10,40);
    obstacles.addImage(obstaceImage);
    obstacles.scale = 0.2;
    obstacles.velocityX = -3;
  
   obstaclesGroup.add(obstacles);
   
 }
}
function banana(){
  if (frameCount % 80 === 0){
   var banana = createSprite(400,165,10,40);
    banana.y = Math.round(random(50,200));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;
    
    bananaGroup.add(banana);
    
}
}




