class display{
	
	constructor(){
		
	}
	
	front(){

ctx.font = "100px Comic Sans MS";
ctx.fillStyle = "orange";
ctx.fillText("press space to start the game", gw/2-680, gh/2);
}
	
	inter(){


ctx.fillStyle = "black";
ctx.fillRect(0,0,gw,gh);
ctx.fillStyle = "white";
ctx.fillRect(400,0,gw-800,gh);

ctx.font = "80px Comic Sans MS";
ctx.fillStyle = "red";
ctx.fillText("score:", 0, 80);
ctx.font = "60px Comic Sans MS";
ctx.fillStyle = "white";
ctx.fillText(r, 300, 80);

ctx.font = "60px Comic Sans MS";
ctx.fillStyle = "red";
ctx.fillText("HighScore:", 1100, 80);
ctx.font = "40px Comic Sans MS";
ctx.fillStyle = "white";
ctx.fillText(hScore, 1430, 80);

}


}