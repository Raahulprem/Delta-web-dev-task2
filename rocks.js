class rocks{
	
	constructor(){
		this.width = 100;
		this.height = 100;
		
		this.speed = {
			x : 1,
			y : 2,
		}
		
		this.position = {
			x : 400,
			y : 0,
		}
	}
	
	show(ctx){
		
		ctx.fillStyle = "yellow";
		ctx.fillRect(  this.position.x, this.position.y, this.width, this.height);
	}
	
	move(){
		
		this.position.y += this.speed.y;
		this.position.x += this.speed.x;
		
		if (this.position.x + this.width > 1100 || this.position.x < 400) {
      this.speed.x = -this.speed.x;
    }

    
    if (this.position.y < 0 || this.position.y > 700-this.height) {
      this.speed.y = -this.speed.y;
    }
	

	}
	
	shrink(){
		this.width-=2;
		this.height-=2;
	}
	
	
	dash(shooter){
		 var h = this.position.x + this.width/2 - shooter.position.x - shooter.width/2;
		 h= Math.abs(h);
		if( shooter.position.y < this.position.y+this.height &&   h < this.width/2 + shooter.width/2  ){return true;}
		//else if (shooter.position.y < this.position.y+this.height && shooter.position.x +shooter.width<=this.position.x+this.width){return true;}
		else{return false;}
	}
}