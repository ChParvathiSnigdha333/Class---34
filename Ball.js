class Ball{
    constructor(x,y,r){
        var opt = {
            density:1,
            frictionAir:0.5
        }
        this.body = Bodies.circle(x,y,r,opt)
        this.r = r;
        World.add(world,this.body)
    }
    display(){
        push();
        var pos = this.body.position
        var angle = this.body.angle
        strokeWeight(4)
        stroke("green")
        fill ("white")
        translate(pos.x,pos.y)
        rotate(angle)
        ellipseMode(CENTER)
        ellipse(0,0,this.r,this.r);
        pop();
    }
    }
