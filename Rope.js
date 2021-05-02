class Rope{
    constructor(bodyA,pointB){
        var opt = {
            bodyA:bodyA,
            pointB:pointB,
            length:250,
            stiffness:1.2
        }
        this.pointB = pointB;
        this.rope = Constraint.create(opt)
        World.add(world,this.rope)
    }
    display(){
        var pointA= this.rope.bodyA.position;
        var pointB = this.pointB

        push();
        strokeWeight(4)
        line(pointB.x,pointB.y,pointA.x,pointA.y)
        pop();
    }
}