class String {
    constructor(bodyA,bodyB,offsetX,offsetY) {
        this.offsetX=offsetX
        this.offsetY=offsetY
        var options = {
          bodyA: body1,
          bodyB: body2,
          pointB:{x:this.offsetX,y:offsetY}
}
 this.string = Constraint.create(options);
 World.add(world,this.string)

 }
  display() {
    strokeWeight(4);
    line(this.string.bodyA.position.x,this.string.bodyA.position.y,this.string.bodyB.position.x,this.string.bodyB.position.y)
  }
}
