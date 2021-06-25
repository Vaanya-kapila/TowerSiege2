class Block3 extends BaseClass {
  constructor(x,y){
    super(x,y,100,60);
    this.Visibility = 255;
  }

  display(){
    if(this.body.speed<3){
      super.display();
    }
    else{
      World.remove(world, this.body);
      push();
      this.Visibility = this.Visibility - 5;
      tint(255,this.Visibility);
      pop();
    }
  }

  score(){
    if(this.Visibility<0 && this.Visibility>-1005){
      score++;
    }
  }
};
