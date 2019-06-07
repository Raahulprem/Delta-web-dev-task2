import shooter from'./shooter';



let game = document.getElementById("game");

let ctx = game.getContext('2d');
var gheight = game.height;
var gwidth = game.width;

/*var bg = new Image();
bg.src = "6942.jpg";
var shooter = new Image();
shooter.src = "shooter.jpg";

document.addEventListener("keydown",move);
function move(){
	if (move.keycode==37){
		x-=5;
	}
	else if(move.keycode==39){
		x+=5;
	}
	else{
		x = 0;
	}
}*/

var bg = document.getElementById("bg");
var shooter = document.getElementById("shooter");
var bullet = document.getElementById("bullet");
var x=0;
 function draw(){
ctx.drawImage(bg, 0, 0,gwidth, gheight);
//ctx.drawImage(shooter, (gwidth/2)+x, (gheight-200-60),150, 200);
ctx.drawImage(bullet, (gwidth/2+37), (gheight-200-100),90,45);
requestAnimationFrame(draw);
	}


let shooter = new shooter();
shooter.draw();