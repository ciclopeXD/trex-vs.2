var trex, trex_running, edges;
var groundImage,ground;
var clowdImage;
function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  groundImage = loadImage("ground2.png")
  clowdImage=loadImage("nube.png");
}

function setup(){
  createCanvas(600,200);
  
  //crear sprite de Trex
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  edges = createEdgeSprites();
  
  //agregar tamaño y posición al Trex
  trex.scale = 0.5;
  trex.x = 50

  ground=createSprite(200,180,400,20);
  ground.addImage("suelo",groundImage);
  invisibleGround=createSprite(200,190,400,18);
  invisibleGround.visible=false;
}


function draw(){
  //establecer color de fondo.
  background("white");
  ground.velocityX=-5;
  if(ground.x<0){
    ground.x=ground.width/2;
  }
  //cargar la posición Y del Trex
  console.log(trex.y)
  
  //hacer que el Trex salte al presionar la barra espaciadora
  if(keyDown("space")&& trex.y>150){
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.5;
  clowds();
  //evitar que el Trex caiga
  trex.collide(invisibleGround)

  drawSprites();
}

function clowds(){
  clowd=createSprite(600,100,40,10);
  clowd.addImage(clowdImage);
  clowd.scale=0.2;
 // clowd.velocityX=-3;
}
