class canon{
	constructor(){
	
    this.width = 50;
    this.height = 50;

	this.maxSpeed = 7;
    this.speed = 0;
	this.a = 0;	
	this.position =	{
		x : 725,
		y : 650,
	}
	}
	
	 moveLeft() {
    this.speed = -this.maxSpeed;
  }

  moveRight() {
    this.speed = this.maxSpeed;
  }

  stop() {
    this.speed = 0;
  }
  
  
	draw(ctx){
		ctx.fillStyle = "red";
		ctx.fillRect(this.position.x,this.position.y,this.width,this.height);
	}
	
		
	move() {
    this.position.x += this.speed;

    if (this.position.x < 400) this.position.x =400;

    if (this.position.x + this.width > 1100)
      this.position.x = 1100 - this.width;
  }
}