var movingRect,fixedRect;


function setup() {
  createCanvas(800,400);
  

  fixedRect=createSprite(100,200,50,50);
  fixedRect.shapeColor="blue";

  movingRect=createSprite(200,200,50,50);
  movingRect.shapeColor="blue";

  fixedRect.velocityX=2;
  movingRect.velocityX=-2;
}

function draw() {
  background("black");  




if(fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2 &&
  movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2 ){
  movingRect.velocityX=movingRect.velocityX*(-1);
  fixedRect.velocityX=fixedRect.velocityX*(-1);
  }
if(fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2 &&
  movingRect.y-fixedRect.y<fixedRect.height/2+movingRect.height/2){
  movingRect.velocityY=movingRect.velocityY*(-1);
  fixedRect.velocityY=fixedRect.velocityY*(-1);
  
  }
  

  drawSprites();
}