class Tree {
    constructor(x, y) {
      this.x=x
      this.y=y
      this.boxwidth=450
      this.boxheight=600
      this.boxthickness=10
      this.image=loadImage("tree.png")
      this.bottombody = Bodies.rectangle(this.x, this.y, this.boxwidth, this.boxthickness,{
        isStatic
        :true
      });
      this.LeftBody = Bodies.rectangle(0, 0, this.boxthickness, this.boxheight,{
        isStatic
        :true
      });
      this.RightBody = Bodies.rectangle(this.x+this.boxwidth/2, this.y-this.boxheight/2, this.boxthickness, this.boxheight,{
        isStatic
        :true
      });
      World.add(world, this.bottombody);
      World.add(world, this.LeftBody)
      World.add(world, this.RightBody);
 
    }
    display(){
      var pos =this.bottombody.position;
    
      push();
      translate(pos.x, pos.y);
      imageMode(CENTER);
      image(this.image, 0, -this.boxheight/2, this.boxwidth,this.boxheight);
      pop();    
    }
  };