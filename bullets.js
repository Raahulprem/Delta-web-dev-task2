class bullets {
	
	constructor(pos){
		 this.width = 10;
    this.height = 10;

	
    this.speed = 10;
		
	this.position =	{
		x : (pos+20),
		y : 635,
	}
	}
	
show(ctx){
	ctx.fillStyle = "blue";
	ctx.fillRect(this.position.x,this.position.y,this.width,this.height);
}	
/*moveLeft() {
    this.speed = -this.maxSpeed;
  }

  moveRight() {
    this.speed = -this.maxSpeed;
  }

  stop() {
    this.speed = 0;
  }*/

move(){
    this.position.y -= this.speed;	
	
	
}	
	
}