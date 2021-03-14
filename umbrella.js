class Umbrella
{
  constructor(x,y)
  {
    var options =
    {
      isStatic: true   
    }   

    this.image = loadImage("walking_2.png");
    this.umbrella = Bodies.circle(x,y,130,options);
    this.radius = 110;
    World.add(world,this.umbrella);
  }
  
  display()
  {
    var pos = this.umbrella.position;
    imageMode(CENTER);
    image(this.image,pos.x,pos.y+30,400,400);
  }
}