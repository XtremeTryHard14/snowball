var bg;
var backgroundImg,snow,snowImg;

function preload(){
    backgroundImg = loadImage("snow3.jpg")
    snowImg = loadImage("snow5.webp")

}

function setup() {
 var canvas = createCanvas(800,400);
 
  bg = createSprite(400,200,50,50);
  bg.addImage(backgroundImg);
  bg.scale = 0.8;

}

function draw() {
  background("black") 

  snowfall()
  drawSprites()
}
 
 function snowfall()
 {
   if (frameCount %40 === 0){
     snow = createSprite(random(50,750),20,50,50);
     snow.addImage(snowImg);
    snow.scale = 0.1;
    snow.velocityY = 2
    snow.lifetime = 450;

   }
    
}
 
