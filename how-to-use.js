var fixedRect, movingRect, edge;

function setup() {
  createCanvas(1200, 1200);
  fixedRect = createSprite(400, 200, 50, 50);
  fixedRect.shapeColor = "green"
  movingRect = createSprite(600, 200, 30, 30)
  movingRect.shapeColor = "blue"
  movingRect.velocityX = 4
  edge = createSprite(1200, 0, 200, 1200)
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