var canvas;
var music;
var rect1,rect2,rect3,rect4;
var ball;


function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,400);
    rect1=createSprite(500,380,200,40);
rect1.shapeColor=rgb(0,0,255);

rect2=createSprite(710,380,200,40);
rect2.shapeColor= rgb(255,128,0);

rect3=createSprite(290,380,200,40);
rect3.shapeColor=rgb(153,0,76);

rect4=createSprite(70,380,200,40);
rect4.shapeColor=rgb(0,100,0);

 ball=createSprite(random(20,750),100, 40,40);
ball.shapeColor=rgb(255,255,255);
ball.velocityY=4;
ball.velocityX=9;
    //create 4 different surfaces
 //create box sprite and give velocity


}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
edges=createEdgeSprites();
ball.bounceOff(edges);

if(rect1.isTouching(ball) && ball.bounceOff(rect1)){
    ball.shapeColor = rgb(0,0,255);
    music.play();
}

if(rect2.isTouching(ball) && ball.bounceOff(rect2)){
    ball.shapeColor = rgb(255,128,0);
    music.play();
}


if(rect3.isTouching(ball)){
    ball.shapeColor = rgb(153,0,76);
    ball.velocityX = 0;
    ball.velocityY = 0;
    music.stop();
}


if(rect4.isTouching(ball) && ball.bounceOff(rect4)){
    ball.shapeColor = rgb(0,100,0);
    music.play();
}
drawSprites();
}
