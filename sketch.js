//creating background
var yo, yo_img
var es

//creating sprites 

var runner, runner_img,end_img
var coins,coins_img
var energyDrink,ener_img

var c,c_img
var bm, b_img

//CREATING GAMESTATES

var PLAY=1
var END=0
var gameState=1
var WELCOME=0


//creating score

var score=0


//function for loading the images once
function preload(){
   yo_img=loadImage("yo.png")
    runner_img=loadAnimation("Runner-1.png","Runner-2.png")
    coins_img=loadImage("coin.png")
    ener_img=loadImage("energyDrink.png")
    d_png=loadImage("diamonds.png")
    c_img=loadImage("cash.png")
    b_img=loadImage("bomb.png")
   eg=loadImage("Untitled.png")
    
}






//function for setting up the canvas and groups 
function setup(){ 
    createCanvas(windowWidth,windowHeight)
    yo=createSprite(width/2,height,width,2)
    yo.addImage("image",yo_img)
   yo.velocityY=5


    runner=createSprite(width/2,height-70,20,20)
    runner.addAnimation("skrunning",runner_img)
    runner.scale=0.08

    cg=new Group()
    edg=new Group()
    cg2=new Group()
    dg=new Group()
    bg=new Group()

}




//function for main coding
function draw(){



    
    
     if (gameState===PLAY){
         background(0)
         runner.x=World.mouseX
       runner

        if(yo.y>height){
            yo.y=height/2
        }

  

      edges=createEdgeSprites()
     

    

      createCoins()
      createC()
      createED()
      createB()


     if(cg.isTouching(runner)){
        cg.destroyEach()
        score=score+10
     }

      if(cg2.isTouching(runner)){
          cg2.destroyEach()
          score=score+5
      }

      if(dg.isTouching(runner)){
        dg.destroyEach()
        score=score+50
      }

      if(edg.isTouching(runner)){
        edg.destroyEach()
        score=score+100
        
      }
      if(bg.isTouching(runner)){
        gameState=END
        yo.velocityY=0
        
        cg.destroyEach()
        cg2.destroyEach()
        bg.destroyEach()
        dg.destroyEach()
        edg.destroyEach()
  
  
        runner.x=width/2;
      runner.y=height/2;
      runner.scale=0.6;
    }
      
      
   if (gameState===END){
       cg.setVelocity(0)
        cg2.setVelocity(0)
        bg.setVelocity(0)
        dg.setVelocity(0)
        edg.setVelocity(0)

        eg.visible=true
   }
      
          
    
    drawSprites()
    textSize(20);
    fill(255);
    text("score: "+ score,width-150,30);

     
    }

    
}









//creation of cash
function createC(){
    
        if (World.frameCount % 249 == 0) {
         
          var c = createSprite(Math.round(random(50, width-50),40, 10, 10));
          c.addImage(c_img);
        c.scale=0.12;
        c.velocityY = 5;
        c.lifetime = 200;
        cg.add(c);
        }
      
}
//creation of coins
function createCoins(){
    
        if (World.frameCount % 450 == 0) {
         
          var coins = createSprite(Math.round(random(50, width-50),40, 10, 10));
          coins.addImage(coins_img);
        coins.scale=0.52;
        coins.velocityY = 5;
        coins.lifetime = 200;
        cg2.add(coins);
        }
      
}


//creation of energy drink
function createED(){
    if(World.frameCount%200==0){
        var energyDrink=createSprite(Math.round(random(50,width-50),40,10,10))
        energyDrink.addImage(ener_img)
        energyDrink.scale=0.50
        energyDrink.velocityY=5
        energyDrink.lifetime=200
        edg.add(energyDrink)
    }
}

function createB(){
    if(World.frameCount%609==0){
        var bm=createSprite(Math.round(random(50,width-50),40,10,10))
        bm.addImage(b_img)
        bm.velocityY=5
        bm.scale=0.70
        bm.lifetime=200
        bg.add(bm)
    }
}
