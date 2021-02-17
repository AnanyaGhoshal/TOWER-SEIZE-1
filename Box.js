class Box {
    constructor(x, y) {
      var options = {
          'isStatic':false,
          'restitution':1.0,
          'friction':1.0,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, 70, 70, options);
      this.width = 70
      this.height =70
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(4);
      stroke("green");
      fill("yellow");
      rect(0, 0, this.width, this.height);
      pop();
    }
  }
  