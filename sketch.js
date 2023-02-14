var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;

function preload(){
  pathImg = loadImage("path.png")
 boyImg = loadAnimation("Runner-1.png", "Runner-1.png", "Runner-1.png", "Runner-2.png", "Runner-2.png", "Runner-2.png") 
}

function setup(){
  
createCanvas(400,400);


path = createSprite(200,0)
path.addImage(pathImg)
path.scale = 1.5;
path.velocityY = 2;

boy = createSprite(200,360)
boy.addAnimation("correndo", boyImg)
boy.scale=0.08;
  
//crie um limite à esquerda
leftBoundary=createSprite(0,0,10,800);
leftBoundary.visible = false

//crie um limite à direita
rightBoundary=createSprite(420,0,10,800);
rightBoundary.visible = false
}

function draw() {
  background(0);

  
boy.x = mouseX
  
  edges= createEdgeSprites();
  boy.collide(rightBoundary);
  boy.collide(leftBoundary);  
  //código para redefinir o fundo
  if(path.y > 400 ){
    path.y = height/2;
  }
  
  drawSprites();
}
