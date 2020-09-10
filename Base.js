class DropBox{
    constructor(x, y, height,width) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0,
            'isStatic':true
                  }
        this.bottombody = Bodies.rectangle(x, y, 200, this.thickness, options);
        this.rightbody = Bodies.rectangle(x, y, 20, height, options);
        this.leftbody = Bodies.rectangle(x, y, 20, height, options);
        this.width = width;
        this.height = height;
        this.thickness=20;

        //this.image = loadImage("sprites/base.png");
        World.add(world, this.bottombody);
        World.add(world, this.leftbody);
        World.add(world, this.rightbody);
      }
      display(){

        push();
        translate(this.bottombody.position.x, this.bottombody.position.y);
        //rotate(angle);
        rectMode(CENTER);
        rect( 0, 0, this.width, this.height);
        pop();
        push();
        translate(this.rightbody.position.x, this.rightbody.position.y);
       // rotate(angle);
        rectMode(CENTER);
        rect( 0, 0, this.width, this.height);
        pop();
        push();
        translate(this.leftbody.position.x, this.leftbody.position.y);
        //rotate(angle);
        rectMode(CENTER);
        rect( 0, 0, this.width, this.height);
        pop();
      }

}