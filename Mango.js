class Mango{
    constructor(x,y){
        var options={
            isStatic:true,
            restitution:0,
            friction:1
        }
        this.body = Bodies.rectangle(x,y,options);
        this.image=loadImage("mango.png")

        World.add(world, this.body);
    }
    display(){
       // image(this.image,)
    }
}