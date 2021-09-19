function my_touch(fixedRect, movingRect){
    if (fixedRect.x - movingRect.x<fixedRect.width/2 + movingRect.width/2 &&
      movingRect.x - fixedRect.x<fixedRect.width/2 + movingRect.width/2 &&
      fixedRect.y - movingRect.y<fixedRect.height/2 + movingRect.height/2 &&
      movingRect.y - fixedRect.y<fixedRect.height/2 + movingRect.height/2
      ){
        return true;
      }
    else{
      return false;
    }
  }
  
  function bounce(fixed, moving){
    if(fixed.x - moving.x<fixed.width/2 + moving.width/2 &&
      moving.x - fixed.x<fixed.width/2 + moving.width/2){
        moving.velocityX = -moving.velocityX
        fixed.velocityX = -fixed.velocityX
      }
    if (fixed.y - moving.y<fixed.height/2 + moving.height/2 &&
      moving.y - fixed.y<fixed.height/2 + moving.height/2){
        fixed.velocityY = -fixed.velocityY
        moving.velocityY = -moving.velocityY
      }
  }

