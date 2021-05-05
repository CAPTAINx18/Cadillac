var wall, car;

function setup() {
  createCanvas(800,400);
  wall = createSprite(200, 200, 20, 100);
  //wall.shapeColor = "teal";

  car = createSprite(720, 200, 50, 30);
  car.velocityX = -5;
  //car.shapeColor = "teal";
}

function draw() {
  background(255,255,255);  

//car.y = mouseY;
//car.x = mouseX;

  console.log(wall.y -  car.y);



 if(TouchSpace(wall, car)){
  wall.shapeColor = "red";
  car.shapeColor = "red";
 }

  else{
    wall.shapeColor = "turquoise";
    car.shapeColor = "turquoise";
  }

  
  //Bounceoff(wall, car);

  //combine(wall, car);
  
  Bounce(wall, car);


  drawSprites();
}

function TouchSpace(object1, object2){
  if(object1.y - object2.y < (object1.height + object2.height)/2 && object2.y - object1.y < (object1.height + object2.height)/2 && object1.x - object2.x < (object1.width + object2.width)/2 && object2.x - object1.x < (object1.width + object2.width)/2){
     return true;
  }

  else{
    return false;
  }
}

function combine(object1, object2){
  if(object1.y - object2.y < (object1.height + object2.height)/2 && object2.y - object1.y < (object1.height + object2.height)/2 && object1.x - object2.x < (object1.width + object2.width)/2 && object2.x - object1.x < (object1.width + object2.width)/2){
    object2.setVelocity(0, 0);

 }
}

function Bounceoff(object1, object2){
  if(object1.y - object2.y < (object1.height + object2.height)/2 && object2.y - object1.y < (object1.height + object2.height)/2 && object1.x - object2.x < (object1.width + object2.width)/2 && object2.x - object1.x < (object1.width + object2.width)/2){
    object2.velocityX = 5;

 }
}

function Bounce(object1, object2){
  if(object1.y - object2.y < (object1.height + object2.height)/2 && object2.y - object1.y < (object1.height + object2.height)/2 && object1.x - object2.x < (object1.width + object2.width)/2 && object2.x - object1.x < (object1.width + object2.width)/2){
    object2.velocityX = 0;
    object1.velocityX = -5;

 }
}


