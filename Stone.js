class Stone{
    constructor(x,y,bodyA, pointB){
        var options={
            isStatic:false,
            restitution:0,
            bodyA: bodyA,
            pointB: pointB,
            friction:1,
            density:1.2
        }
        this.image=loadImage("stone.png");

        this.pointB = pointB
        this.body = Constraint.create(options);

        World.add(world, this.body);
    }
    attach(body){
        this.body.bodyA = body;
    }
    
    fly(){
        this.body.bodyA = null;
    }

    display(){
        imageMode(CENTER)
        image(this.image,102,530);

        stone.scale=0.15;
    }
}