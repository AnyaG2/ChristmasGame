var w1, w2, w3, w4, w5, w6, w7, w8, w9, w10, w11, w12, w13, w14, w15, w16, w17, w18;
var santa, santaImage;
var gameState = "intro";
var tree, treeImage;
var m1, m2, m3, m4, m5, m6, m7, m8, m9, m10;
var mImage







function preload() {
  santaImage= loadImage("Santa-1.png");
  treeImage= loadImage("Tree-1.png");
  mImage= loadImage("Marshmallow-1.png");
  
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  w1 = createSprite(60,200,250,20);
  w1. shapeColor = ("maroon");
  
  w2 = createSprite(500,400,400,20);
  w2. shapeColor = ("maroon");
  
  w3 = createSprite(300,400,20,125);
  w3. shapeColor = ("maroon");
  
  w4 = createSprite(100,270,20,130);
  w4. shapeColor = ("maroon");
  
  w5 = createSprite(240,453,125,20);
  w5. shapeColor = ("maroon");
  
  w6 = createSprite(450,440,20,60);
  w6. shapeColor = ("maroon");
  
  w7 = createSprite(450,200,300,20);
  w7. shapeColor = ("maroon");
  
  w8 = createSprite(300,200,20,50);
  w8. shapeColor = ("maroon");

  w9 = createSprite(450,250,20,100);
  w9. shapeColor = ("maroon");

  w10 = createSprite(530,290,140,20);
  w10. shapeColor = ("maroon");
  
  w11 = createSprite(150,160,20,80);
  w11. shapeColor = ("maroon");
  
  w12 = createSprite(70,130,160,20);
  w12. shapeColor = ("maroon");
  
  w13 = createSprite(500,100,20,200);
  w13. shapeColor = ("maroon");
  
  w14 = createSprite(20,325,20,20);
  w14. shapeColor = ("maroon");
  
  w15 = createSprite(600,600,20,2000);
  w15. shapeColor = ("maroon");
  
  w16 = createSprite(0,0,20,2000);
  w16. shapeColor = ("maroon");
  
  w17 = createSprite(0,0,2000,20);
  w17. shapeColor = ("maroon");
  
  w18 = createSprite(600,600,2000,20);
  w18. shapeColor = ("maroon");
  
  santa= createSprite(550,550);
  santa.addImage("santa",santaImage);
  santa.scale=0.2;
  
  tree= createSprite(30,50);
  tree.addImage("tree",treeImage);
  tree.scale=0.06;
  
  
  m1= createSprite(Math.random()*561+20,0)
  m1.addImage("m1",mImage);
  m1.scale=0.3
  
  m2= createSprite(Math.random()*561+20,0)
  m2.addImage("m2",mImage);
  m2.scale=0.3
  
  m3= createSprite(Math.random()*561+20,0)
  m3.addImage("m3",mImage);
  m3.scale=0.3
  
  m4= createSprite(Math.random()*561+20,0)
  m4.addImage("m4",mImage);
  m4.scale=0.3
  
  m5= createSprite(Math.random()*561+20,0)
  m5.addImage("m5",mImage);
  m5.scale=0.3
  
  m6= createSprite(Math.random()*561+20,0)
  m6.addImage("m6",mImage);
  m6.scale=0.3
  
  m7= createSprite(Math.random()*561+20,0)
  m7.addImage("m7",mImage);
  m7.scale=0.3
  
  m8= createSprite(Math.random()*561+20,0)
  m8.addImage("m8",mImage);
  m8.scale=0.3
  
  m9= createSprite(Math.random()*561+20,0)
  m9.addImage("m9",mImage);
  m9.scale=0.3
  
  m10= createSprite(Math.random()*561+20,0)
  m10.addImage("m10",mImage);
  m10.scale=0.3
  
  
}

function draw() {
  background("#FFA07A");
 
   if(keyDown(UP_ARROW)){
    santa.velocityY = -5
    santa.velocityX =  0
  }
  
  if(keyDown(DOWN_ARROW)){
    santa.velocityY = 5
    santa.velocityX = 0
  }
  
  if(keyDown(RIGHT_ARROW)){
    santa.velocityX=  5
    santa.velocityY = 0
  }
  
   if(keyDown(LEFT_ARROW)){
    santa.velocityX = -5
    santa.velocityY =  0
  }
 
  if(keyDown("r")){
    gameState = "intro";
  }
  
  
 if (gameState === "intro"){
    background("#FFA07A")
    textSize(30)
    text("INTRODUCTION",160,70,fill("maroon"))
    textSize(25)
    text("1. There are two levels.",50,150,fill("black"))
    text("2. Use arrow keys to move the character",50,250)
    text("3. Qualify each level to reach the next level",50,350)
    text("4. Press 'R' to restart",50,450)
    text("5. Press  'space' key to continue",50,550)
   santa.visible = false;
    tree.visible= false;
    w1.visible = false;
    w2.visible = false;
    w3.visible = false;
    w4.visible = false;
    w5.visible = false;
    w6.visible= false;
    w7.visible = false;
    w8.visible = false;
    w9.visible = false;
    w10.visible = false;
    w11.visible = false;
    w12.visible = false;
    w13.visible = false;
    w14.visible = false;
    m1.visible = false;
    m2.visible = false;
    m3.visible = false;
    m4.visible = false;
    m5.visible = false;
    m6.visible = false;
    m7.visible = false;
    m8.visible = false;
    m9.visible = false;
    m10.visible = false;
   
   if (gameState === "intro"&&keyDown("space")){
    gameState = "level1"
  }
 }
  
  if (gameState === "level1"){
    
    background("#FFA07A")
    
    santa.visible = true
    tree.visible = true;
    w1.visible = true;
    w2.visible = true;
    w3.visible = true;
    w4.visible = true;
    w5.visible = true;
    w6.visible = true;
    w7.visible = true;
    w8.visible = true;
    w9.visible = true;
    w10.visible = true;
    w11.visible = true;
    w12.visible = true;
    w13.visible = true;
    w14.visible = true;
  }
  createEdgeSprites();
  santa.collide(w1);
  santa.collide(w2);
  santa.collide(w3);
  santa.collide(w4);
  santa.collide(w5);
  santa.collide(w6);
  santa.collide(w7);
  santa.collide(w8);
  santa.collide(w9);
  santa.collide(w1);
  santa.collide(w10);
  santa.collide(w11);
  santa.collide(w12);
  santa.collide(w13);
  santa.collide(w14);
  santa.collide(w15);
  santa.collide(w16);
  santa.collide(w17);
  santa.collide(w18);
 
  
  if(gameState === "level1" && santa.isTouching(tree)) {
    gameState = "intro2";
  }
  
  if(gameState === "intro2") {
    background("#FFA07A")
    textSize(30)
    text("INSTRUCTIONS",180,70,fill("maroon"))
    textSize(25)
    text("1. Click the marshmallows before they reach the",50,150,fill("black"))
    text("bottom line",70,180,fill("black"))
    text("2. Use your mouse to click on them",50,250)
    text("3. Click all the marshmallows before the time",50,350)
    text("runs out to win",70,380)
    text("4. Press 'R' to restart",50,460)
    text("5. Press  'space' key to continue",50,550)
    santa.visible = false;
    tree.visible= false;
    w1.visible = false;
    w2.visible = false;
    w3.visible = false;
    w4.visible = false;
    w5.visible = false;
    w6.visible= false;
    w7.visible = false;
    w8.visible = false;
    w9.visible = false;
    w10.visible = false;
    w11.visible = false;
    w12.visible = false;
    w13.visible = false;
    w14.visible = false;
    
  }
  
  if (gameState === "intro2"&&keyDown("space")){
    gameState = "level2"
  }
  
  
  if(gameState === "level2"){
    m1.visible = true;
    //m2.visible = true;
    //m3.visible = true;
    //m4.visible = true;
    //m5.visible = true;
    //m6.visible = true;
    //m7.visible = true;
    //m8.visible = true;
    //m9.visible = true;
    //m10.visible = true;
   
    m1.velocityX=0;
    m1.velocityY=4;
    
    m2.velocityX=0;
    m2.velocityY=4;
    
    m3.velocityX=0;
    m3.velocityY=4;
    
    m4.velocityX=0;
    m4.velocityY=4;
    
    m5.velocityX=0;
    m5.velocityY=4;
    
    m6.velocityX=0;
    m6.velocityY=4;
    
    m7.velocityX=0;
    m7.velocityY=4;
    
    m8.velocityX=0;
    m8.velocityY=4;
    
    m9.velocityX=0;
    m9.velocityY=4;
    
    m10.velocityX=0;
    m10.velocityY=2;
    
  }
  
  if(mousePressedOver(m1)){
    m1.destroy();
    m2.visible=true;
  }
  
  if(mousePressedOver(m2)){
    m2.destroy();
    m3.visible=true;
  }
  
   if(mousePressedOver(m3)){
    m3.destroy();
    m4.visible=true;
  }
  
  if(mousePressedOver(m4)){
    m4.destroy();
    m5.visible=true;
  }
  
  if(mousePressedOver(m5)){
    m5.destroy();
    m6.visible=true;
  }
  
  if(mousePressedOver(m6)){
    m6.destroy();
    m7.visible=true;
  }
  
  if(mousePressedOver(m7)){
    m7.destroy();
    m8.visible=true;
  }
  
  if(mousePressedOver(m8)){
    m8.destroy();
    m9.visible=true;
  }
  
  if(mousePressedOver(m9)){
    m9.destroy();
    m10.visible=true;
  }
  
   if(mousePressedOver(m10)){
    m10.destroy();
    gameState="win"
  }

  if(gameState === "win") {
    background("#FFA07A");
    textSize(100);
    text("YOU WIN!",55,330,fill("maroon"));  
     textSize(30);
    text("Press 'R' to restart", 250,400,fill("maroon"));
  }
  
  if(m1.isTouching(w18)){
    m1.visible=false;
    gameState= "lose";
    }
  
  if(m2.isTouching(w18)){
    m2.visible=false;
    gameState= "lose";
    }
  
  if(m3.isTouching(w18)){
    m3.visible=false;
    gameState= "lose";
    }
  
  if(m4.isTouching(w18)){
    m4.visible=false;
    gameState= "lose";
    }
  
  if(m5.isTouching(w18)){
    m5.visible=false;
    gameState= "lose";
    }
  
  if(m6.isTouching(w18)){
    m6.visible=false;
    gameState= "lose";
    }
  
  if(m7.isTouching(w18)){
    m7.visible=false;
    gameState= "lose";
    }
    
  if(m8.isTouching(w18)){
    m8.visible=false;
    gameState= "lose";
    }
  
  if(m9.isTouching(w18)){
    m9.visible=false;
    gameState= "lose";
    }
  
  if(m10.isTouching(w18)){
    m10.visible=false;
    gameState= "lose";
    }
  
    if(gameState === "lose") {
    background("black");
    textSize(100);
    text("YOU LOSE",40,300,fill("red"));
    textSize(30);
    text("Press 'R' to restart", 250,400,fill("red"));
      m1.visible=false;
      m2.visible=false;
      m3.visible=false;
      m4.visible=false;
      m5.visible=false;
      m6.visible=false;
      m7.visible=false;
      m8.visible=false;
      m9.visible=false;
      m10.visible=false;
  }
drawSprites();


}
 
  
