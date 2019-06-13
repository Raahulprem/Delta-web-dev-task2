class bullets {
	
	constructor(pos){
		 this.width = 10;
    this.height = 10;

	this.gone = false;
    this.speed = 10;
		
	this.position =	{
		x : (pos+20),
		y : 635,
	}
	}
	
vanish(){
	this.gone = true;
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

hits(rock){
	if(rock.position.y + rock.height/2 > this.position.y && rock.position.x < this.position.x && rock.position.x +rock.width > this.position.x ){
		return true;
	}
	else{
		return false;
	}
}
	
}