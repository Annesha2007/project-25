class Paper {
    constructor(x, y,r) {
        var options = {
            isStatic:false,
            restitutiion:0.3,
            friction:0,
            density:1.2

        }
        this.x = x;
        this.y = y;
        this.r = r
        this.image=loadImage("paper.png");
        this.body=Bodies.circle(this.x,this.y,(this.r-20)/2,Options)
        world.add(world,this.body);
    }
}
display
{
    var paperpos=this.body.position;

    push()
    translate(paperpos.x,paperpos.y);
    rectMode(CENTER)
    fill(255,0,255)
    image(this.image,pos.x,pos.y,33,33);
    pop()
}
