class Drop{
    constructor(x,y){
        var options = {
            restitution:0.8,
            friction:1,
            density:1,
            isStatic:false
        }
        this.body = Bodies.circle(x,y,5,options);
        this.radius = 5;
        World.add(world,this.body);
    }
    display(){
        var pos  = this.body.position;
        push();
        //translate(pos.x,pos.y);
        ellipseMode(CENTER);
        fill("blue");
        ellipse(pos.x,pos.y,10,10);
        pop();
    }
    update(){
        if(this.body.position.y>height){
            Matter.body.setPosition(this.body,{x:random(0,400), y:random(0,400)});
        }
    }
}