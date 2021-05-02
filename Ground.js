class Ground{
    constructor (x,y,w,h){
    var opt = {
        'isStatic' : true 
    }
    
    this.body = Bodies.rectangle(x,y,w,h,opt)
    this.w = w;
    this.h = h;
    World.add(world,this.body)
}
display(){
    push();
    var pos = this.body.position
    fill ("white")
    rectMode(CENTER)
    rect(pos.x,pos.y,this.w,this.h);
    pop();
}
}