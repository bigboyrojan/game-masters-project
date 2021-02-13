const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var playbutton, playbuttonimg;
var howtoplay, howtoplayimg;
var maze1, maze2, maze3, maze4, maze5, maze6, maze7, maze8, maze9, maze10, maze11, maze12,maze13,maze14, maze15, maze16, maze17, mazegroup;

 var backpack, backpackimg,lvl2key, passport, passportimg;
 var lvl4fence, fenceimg, lvl4key, keyimg, lvl2fence;
var lvl5gate,lvl5gate2,lvl5gate3,lvl5gate4,plane1, planeimg, plane2;
 var enemy,enemyimg,door,doorimg;
 var mainguy,mainguyimg;



function preload () {
    playbuttonimg = loadImage("images/button.PNG");
    howtoplayimg = loadImage("images/how to play.PNG");
    keyimg = loadImage("images/key.PNG");
    mainguyimg = loadImage("images/good guy.PNG");
    enemyimg = loadImage("images/enemy.PNG");
    doorimg = loadImage("images/door.PNG");
    backpackimg = loadImage("images/backpack.PNG");
    passportimg = loadImage("images/passport.PNG");
    fenceimg = loadImage("images/fence.PNG");
    planeimg = loadImage("images/plane.PNG");
}


function setup () {
createCanvas(1000,500);

engine = Engine.create();
world = engine.world;
 playbutton = createSprite(500,250,50,50);
playbutton.addImage(playbuttonimg);
playbutton.scale = 0.2;
 howtoplay = createSprite(50,450,50,50);
 howtoplay.addImage(howtoplayimg);
 howtoplay.scale = 0.5;

maze1 = createSprite(225,150,300,10);
maze1.shapeColor = "lime";
maze2 = createSprite(923,150,150,10);
maze2.shapeColor = "lime";
maze3 = createSprite(25,90,50,10);
maze3.shapeColor = "lime";
maze4 = createSprite(125,90,10,65);
maze4.shapeColor = "lime";
maze5 = createSprite(850,435,10,125);
maze5.shapeColor = "lime";
maze6 = createSprite(812,367,85,10);
maze6.shapeColor = "lime";
maze7 = createSprite(595,330,10,85);
maze7.shapeColor = "lime";
maze8 = createSprite(594,177,10,65);
maze8.shapeColor = "lime";
maze9 = createSprite(435,367,100,10);
maze9.shapeColor = "lime";
maze10 = createSprite(380,188,10,85);
maze10.shapeColor = "lime";
maze11 = createSprite(380,330,10,85);
maze11.shapeColor = "lime";
maze12 = createSprite(275,367,200,10);
maze12.shapeColor = "lime";
maze13 = createSprite(638,367,75,10);
maze13.shapeColor = "lime";
maze14 = createSprite(662,150,125,10);
maze14.shapeColor = "lime";
maze15 = createSprite(35,367,75,10);
maze15.shapeColor = "lime";
maze16 = createSprite(125,250,250,10);
maze16.shapeColor = "lime";
maze17 = createSprite(925,230,150,10);
maze17.shapeColor = "lime";
mazegroup = createGroup();
mazegroup.add(maze1, maze2, maze3, maze4, maze5, maze6, maze7, maze8, maze9, maze10, maze11, maze12, maze13, maze14, maze15, maze16, maze17);
 backpack = createSprite(50,30,40,40);
 backpack.addImage(backpackimg);
 backpack.scale = 0.2;
 lvl2key = createSprite(30,305,40,40);
 lvl2key.addImage(keyimg);
 lvl2key.scale = 0.1;
 lvl2fence = createSprite(980,300,10,100);
 lvl2fence.addImage(fenceimg);
 lvl2fence.scale = 0.2;
 lvl4fence = createSprite(10,200,10,75);
 lvl4fence.addImage(fenceimg);
 lvl4fence.scale = 0.2;
 lvl4key = createSprite(950,190,40,40);
 lvl4key.addImage(keyimg);
 lvl4key.scale = 0.1;
 lvl5gate = createSprite(730,80,10,150);
 lvl5gate.shapeColor = "orange";
 lvl5gate2 = createSprite(595,436,10,125);
 lvl5gate2.shapeColor = "blue";
 lvl5gate3 = createSprite(723,367,95,10);
 lvl5gate3.shapeColor = "green";
 lvl5gate4 = createSprite(786,150,122,10);
 lvl5gate4.shapeColor = "red";
passport = createSprite(340,185,40,40);
passport.addImage(passportimg);
passport.scale = 0.15;
plane1  = createSprite(750,450,40,40);
plane1.addImage(planeimg);
plane1.scale = 0.3;
plane2 = createSprite(830,65,40,40);
plane2.addImage(planeimg);
plane2.scale = 0.3;
mainguy = createSprite(500,250,50,50);
 mainguy.shapeColor = "orange";
mainguy.addImage(mainguyimg);
mainguy.scale = 0.2;
 enemy  = createSprite(905,450,20,20);
 enemy.addImage(enemyimg);
 enemy.scale = 0.25;
 door = createSprite(975,65,10,60);
 door.addImage(doorimg);
 door.scale = 0.2;


}
function draw () {
    Engine.update(engine);
background(0,255,255);
text("Exit", 960,115);
textSize(15);
text("backpack",75,30);
textSize(15);
text("plane 2",805,125);
textSize(15);
text("plane 1",640,450);
textSize(15);
text("key",65,305);
textSize(15);
text("passport",310,220);
textSize(15);
text("fence",5,165);
textSize(15);
text("fence",895,305);
text("key",900,195);

textSize(15);
text("gate",690,80);
textSize(15);
text("gate",776,180);
textSize(15);
text("gate",545,436);
textSize(15);
text("gate",715,355);

bruh();
noice();
breme();
clapped();
meme();
psych();
boi();
thicc();
thiccboi();
createEdgeSprites();
drawSprites();
}

function bruh() {
    if (keyCode === DOWN_ARROW) {
        mainguy.velocityY = 3;
        }
}

function noice() {
    if (keyCode === UP_ARROW) {
        mainguy.velocityY = -3;
        }
}

function breme() {
    if (keyCode === RIGHT_ARROW) {
        mainguy.velocityX = 3;
        mainguy.velocityY = 0;
        }
}
function clapped() {
    if (keyCode === LEFT_ARROW) {
        mainguy.velocityX = -3;
        mainguy.velocityY = 0;
        }
}


function meme() {
    if (keyDown("W")) {
        enemy.velocityY = -3;
        }
}

function psych() {
    if (keyDown("S")) {
        enemy.velocityY = 3;
        }
}

function boi() {
    if (keyDown("A")) {
        enemy.velocityX = -3;
        }
}

function thicc() {
    if (keyDown("D")) {
        enemy.velocityX = 3;
        }
}

function thiccboi() {
    if(mainguy.isTouching(mazegroup)) {
        mainguy.velocityX = 0;
        mainguy.velocityY = 0;
        textSize(35);
        text("you lose", 500,250);
        }
}