var basketball , basket , court ;
var basketball_img , basket_img , court_img;
var playerscore = 0;
var oponentscore = 0;


function preload(){
  basketball_img = loadImage("Basketball.jpg");
  basket_img = loadImage("Basket.jpg");
  court_img = loadImage("Basket ball court.jpg");

}



function setup() {
  createCanvas(700,680);
  

  court = createSprite(350,550,1000,1500);
  court.addImage(court_img);



  basketball = createSprite(600,600,10,10);
  basketball.addImage(basketball_img);
  basketball_img.scale = 0.5;
  

  basket = createSprite(350,130,10,10);
  basket.addImage(basket_img);
}

function draw() {
  background(0);
  text(mouseX + "," + mouseY, mouseX, mouseY)
  noStroke();
  textSize(30)
  fill("black")

  edges = createEdgeSprites();
  basketball.bounceOff(edges);
  basketball.bounceOff(basket);

  

  if(basketball.isTouching(edges)){
    oponentscore = oponentscore + 1;
  }



  

        if(basketball.isTouching(basket)){
          playerscore = playerscore + 1;
        }

       
   basketball.depth = basketball.depth+5;

   if(playerscore ===0 || oponentscore===0  ){
     basketball.velocityX =0;
     basketball.velocityY =0;
     text("GAME ENDED"   , width-400,200)
   }

       
  

  
  drawSprites();
  text(" Player Score  " + playerscore, width-260, 40)
        text("Oponent Score" + oponentscore , width-255 ,70)
}


function keyPressed(){
  if(keyCode === 39){
    basketball.velocityX = 50;
  }
  if(keyCode === 37){
    basketball.velocityX = -50;
  }
  if (keyCode === 38){
    basketball.velocityY = -50;
  }
  if(keyCode === 40){
    basketball.velocityY = 50;
  }
  

}