var fixedRect, movingRect, edge;

function setup() {
  createCanvas(displayWidth, displayHeight);
  fixedRect = createSprite(100, displayHeight/2, 200, displayHeight);
  fixedRect.shapeColor = "green"
  movingRect = createSprite(600, 200, 30, 30)
  movingRect.shapeColor = "blue"
  movingRect.velocityX = 4
  edge = createSprite(displayWidth - 100, displayHeight/2, 200, displayHeight)
  edge.shapeColor = "green"
}


function draw() {
  background(255,255,255);
  if(my_touch(fixedRect, movingRect)){
    fixedRect.shapeColor = "red";
    movingRect.shapeColor = "red";
  }
  else{
    fixedRect.shapeColor = "green";
    movingRect.shapeColor = "blue";
  }
  if(my_touch(edge, movingRect)){
    edge.shapeColor = "red";
    movingRect.shapeColor = "red";
  }
  else{
    edge.shapeColor = "green";
    movingRect.shapeColor = "blue";
  }
    
  bounce(movingRect, edge)
  bounce(movingRect, fixedRect)

  drawSprites();
}
