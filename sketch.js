const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var umbrella;
var thunder,thunder1,thunder2,thunder3,thunder4;
var rand;


var drops = [];

var maxDrops = 100;

var thunderFrame=0;

var thunderGroup



function preload()
{
   thunder1 = loadImage("1.png");
   thunder2 = loadImage("2.png");    
   thunder3 = loadImage("3.png");    
   thunder4 = loadImage("4.png");        
}


function setup()
{
   engine = Engine.create();
   world = engine.world;
  
   var canvas = createCanvas(400,700);   

   thunderGroup = new Group();
   dropsGroup = new Group();

   umbrella = new Umbrella(180,500);
   umbrella.debug = true;

   if(frameCount % 200 === 0)
   {
     for(var i=0; i<maxDrops; i++)
     {
      drops.push(new Drops(random(0,400),random(0,100)));
     }
   }
    
}


function draw()
{
  Engine.update(engine);

   background(0);

    rand = Math.round(random(1,4));
  
    if(frameCount % 80 === 0)
    {
      thunderFrame = frameCount;
      thunder = createSprite(random(10,370), random(10,30), 10, 10);
    
      switch (rand)
      {
        case 1: thunder.addImage(thunder1);
        break;
        case 2: thunder.addImage(thunder2);
        break;
        case 3: thunder.addImage(thunder3);
        break;
        case 4: thunder.addImage(thunder4);
        break;
        default: break;
      } 
      thunder.scale = random(0.3,0.5);
      thunderGroup.add(thunder);
    }
  
  if(thunderFrame  + 10 ===frameCount && thunder)
  {
    thunderGroup.destroyEach();     
  }

 
  umbrella.display();
  
  for(var i = 0; i<maxDrops; i++)
  {
    drops[i].display();
    drops[i].update();
    
  }

  

  
 drawSprites();

}   

