

let cvs = document.getElementById("game");
let ctx = cvs.getContext("2d");
var gh = cvs.height;
var gw = cvs.width;
var bullet = [];
var rocke = [];
var j = 0;
var i = 0;


let shooter = new canon();






new InputHandler(shooter);



let lastTime = 0;
function gameLoop( timestamp) {

ctx.clearRect(0, 0, gw, gh)



/*let deltaTime = timestamp - lastTime;
  lastTime = timestamp;*/
  



ctx.fillStyle = "black";
ctx.fillRect(0,0,gw,gh);
ctx.fillStyle = "white";
ctx.fillRect(400,0,gw-800,gh);


shooter.move(/* deltaTime */);
shooter.draw(ctx);
  
  
  if(shooter.a==37||shooter.a==39){
  var bulle = new bullets(shooter.position.x);
		  bullet.push(bulle);
  }  
for (var i = 0; i < bullet.length; i++){  
  bullet[i].show(ctx);
  bullet[i].move();
  for(var k = 0;k<rocke.length;k++){
	if(bullet[i].hits(rocke[k])){
		console.log("10");
		bullet.splice(i,1);
		rocke[k].shrink();
		
	}
	}
  
}

 
    for(var i = 0; i < rocke.length; i++){
		 
	rocke[i].show(ctx);
	rocke[i].move();
	
	
	 
	}
//console.log(j);
if(j%1000 == 0){
	var rock = new rocks();
		  rocke.push(rock);
	    }
 
j++;
requestAnimationFrame(gameLoop);
}


document.addEventListener("keydown", event => {
	if(event.keyCode == 32){
requestAnimationFrame(gameLoop);
}});

/*

remove the if statement if i want to shoot conyinuosly from starting game
or later try changing to space for shhoting
value of space is --'32'

*/