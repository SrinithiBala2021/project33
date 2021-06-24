
const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var bgImg

var snowfall
var snowman
var boyanimation
var girlanimation
var girl ,boy
var boyimg,girlimg
function preload(){
bgImg = loadImage("snow1.jpg")
snowimg = loadImage("snow4.webp")
girlimg = loadImage("girl 1.png")
boyimg = loadImage("boy2.png")
boyanimation  = loadAnimation("boy3.png","boy4.png","boy5.png")
girlanimation = loadAnimation("girl2.png","girl3.png","girl4.png")
snowmanimg = loadImage("snowman.png")
}


function setup() {
  createCanvas(800,400);
  boy = createSprite(600,300,20,20)
  boy.addImage("boy",boyimg)
  boy.scale = 1.3
 
  girl = createSprite(180,300,20,20)
  girl.addImage("girl",girlimg)
  girl.scale = 1.3

  snowman = createSprite(350,200,10,10)
    snowman.addImage("snowman",snowmanimg)
    snowman.scale = 0.1
}
function draw() {
  background(bgImg);  
  if(frameCount%20===0){
    createSnow()
    
  }
  
  
  if(keyCode === LEFT_ARROW && boy.x>300){
    
    fill("black")
    text("SNOW IS FALLING !!",140,230)
    text("I AM GOING TO MAKE SNOWMAN !!",boy.position.x-80,230)

  
  }
  if(boy.x < 300 && boy.x>0){
    fill("black")
    text("BYE !!",180,205)
    text("I AM GOING TO PLAY IN SNOW !!",120,230)
  }
  fill("black")
  text("PRESS LEFT ARROW KEY !!",600,30)
  
  drawSprites();
}
function keyPressed(){
  if(keyCode === LEFT_ARROW){
    boy.addAnimation("boy",boyanimation)
    boy.velocityX = -2

    girl.addAnimation("girl",girlanimation)
  
  }
}
function createSnow(){
snowfall = createSprite(Math.round(random(20,780)),0,10,10)
snowfall.addImage("snow",snowimg)
snowfall.scale = 0.1
snowfall.velocityY = 2

}