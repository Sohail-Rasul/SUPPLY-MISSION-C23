class dropBox extends BaseClass {
        constructor(x, y,angle) {
          super(x,y,100,20);
          Matter.Body.setAngle(this.body,angle);
        }
      }
