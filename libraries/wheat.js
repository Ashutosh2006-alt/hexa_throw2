class Wheat {
  constructor(x, y, width, height, angle) {
    var options = {
      restitution: 0.3,
      friction: 0.6,
      isStatic: false,
      frictionAir:0.02,
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.Visiblity = 255;
    World.add(world, this.body);
  }
  display() {
    if (this.body.speed < 8) {
      var pos = this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill("#D3AF37");
      strokeWeight(1);
      stroke(0, 0, 0);
      rect(0, 0, this.width, this.height);
      pop();

    } else {
      World.remove(world, this.body);
      push();
      this.Visiblity = this.Visiblity - 105;
      tint(225, this.Visiblity);
      pop();
    }

  }


}