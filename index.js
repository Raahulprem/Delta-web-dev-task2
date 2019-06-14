

let cvs = document.getElementById("game");
let ctx = cvs.getContext("2d");
var gh = cvs.height;
var gw = cvs.width;
var bullet = [];
var rocke = [];
var j = 0;
var i = 0;
var r = 0;
var hScore = localStorage.getItem("highScore");
let shooter = new canon();
let gdisplay = new display();
var k = 0;
gdisplay.front();



new InputHandler(shooter);



let lastTime = 0;
function gameLoop( timestamp) {

ctx.clearRect(0, 0, gw, gh)



  

gdisplay.inter();


 

shooter.move();
shooter.draw(ctx);
  
  
  if(shooter.a==32/*||shooter.a==39*/){
  var bulle = new bullets(shooter.position.x);
		  bullet.push(bulle);
  }  
for (var i = 0; i < bullet.length; i++){  
  bullet[i].show(ctx);
  bullet[i].move();
  for(var k = 0;k<rocke.length;k++){
	if(bullet[i].hits(rocke[k])){
		console.log("10");
		bullet[i].vanish();
		rocke[k].shrink();
		
		r++;
	}
	}
  if(bullet[i].position.y < 10){
	  bullet.splice(i,1);
  }
}
for (var i = bullet.length-1; i >= 0; i--){
	if(bullet[i].gone){
		bullet.splice(i,1);
	}
	}
 
 for (var i = rocke.length-1; i >= 0; i--){
	if(rocke[i].width < 20){
		rocke.splice(i,1);
	}
	}
 
    for(var i = 0; i < rocke.length; i++){
		 
	rocke[i].show(ctx);
	rocke[i].move();
	if(rocke[i].dash(shooter)){
	console.log("dashing");
	var g = (localStorage.getItem("highScore"));
	
	if (r> g){
    localStorage.setItem("highScore",r);}	
	location.reload();
	}
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