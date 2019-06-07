export default class shooter{
	 
	  constructor(gwidth,gheight){
		this.width = 150;
		this.height = 200;
		
		this.positions = {
			x:(gwidth/2)-(this.width/2)+x,
			y:(gheight-(this.height)-(gheight/33)),
		}
	} 
  
  draw(ctx){
	  ctx.drawImage(shooter, this.positions.x, this.positions.y,this.width, this.height);
  }  
}
