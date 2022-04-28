var guitarCube, axe, enemy, cannon, sword, platform1, fakePlatform, platform2, platform3, platform4, platform5;
var cubeImg;


function preload () {

cubeImg = loadImage("images/guitar.png")

}

function setup() {
  createCanvas(800,400);
   platform1 = createSprite(0 ,300 , 300, 15);
  platform2 = createSprite(220, 280, 100 ,15);
  platform3 = createSprite(350,260,100,15);

  guitarCube = createSprite(40, 270, 15, 15);
  guitarCube.addImage(cubeImg);
  guitarCube.scale = 0.2
  
axe = createSprite(250,350,5,50);
sword = createSprite(270,75,5,50);
}

function draw() {
  background("purple");
  if(keyIsDown(UP_ARROW))  {
    guitarCube.x += 2;
  }

  
  if(keyIsDown(DOWN_ARROW))  {
    guitarCube.x = 2;
  }



  if(keyDown("space")&& guitarCube.y >= 50) {
    guitarCube.velocityY = -5;
  }

  if(guitarCube.collide(axe)) {
    text("Fin de juego", 200, 100);
    axe.velocityX = 0;
    axe.velocityY = 0;
    guitarCube.visible = false;
    
  }

  if(guitarCube.y >= 300) {

  guitarCube.velocityY = 0;
  }
  
  guitarCube.velocityY = guitarCube.velocityY + 0.8

  guitarCube.collide(platform1);
  guitarCube.collide(platform2);
  guitarCube.collide(platform3);

  axe.velocityY = -2;
  axe.velocityX = -2;

  sword.velocityY = 2;
  sword.velocityX = -2;

  drawSprites();
}

