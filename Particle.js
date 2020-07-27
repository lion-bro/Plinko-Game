class Particle{
    constructor(x,y,d){
        var options ={
            restitution: 0.4
        }
        this.body = Bodies.circle(x,y,this.d,options);
        this.d = d;
        World.add(world,this.body);

        this.color = color(random(0,255),random(0,255),rnadom(0,255));

    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x,pos.y);
        rotate(angle);
        noStroke();
        fill(this.color);
        ellipseMode(RADIUS);
        ellipse(0,0,this.d,this.d);
        pop();
    }
}