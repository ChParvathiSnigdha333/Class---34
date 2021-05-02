class Box {
    constructor(x,y,w,h){
    var opt = {
       restitution : 0.8,
       friction:1,
       density:0.04
    }
    
    this.body = Bodies.rectangle(x,y,w,h,opt)
    this.w = w;
    this.h = h;
    World.add(world,this.body)
}
display(){
    push();
    var pos = this.body.position
    var angle = this.body.angle
    strokeWeight(4)
    stroke("green")
    fill ("white")
    rectMode(CENTER)
    translate(pos.x,pos.y)
    rotate(angle)
    rect(0,0,this.w,this.h);
    pop();
}
}