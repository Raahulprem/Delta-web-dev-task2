class InputHandler {
  constructor(paddle) {
    document.addEventListener("keydown", event => {
      switch (event.keyCode) {
		case 38:
		paddle.a = 32;
		break;
        case 37:
		  //paddle.a = 37;
          paddle.moveLeft();
		  
          break;

        case 39:
		  //paddle.a = 39;
          paddle.moveRight();
		  
          break;
	  }
	  
	});
	
    document.addEventListener("keyup", event => {
      switch (event.keyCode) {
		case 38:
		paddle.a = 0;
		break;
        case 37:
		  //paddle.a = 0;
          if (paddle.speed < 0) paddle.stop();
          break;

        case 39:
		  //paddle.a = 0;
          if (paddle.speed > 0) paddle.stop();
          break;
      }
    });	
  }
}


/* FOR MY REFERENCE:

here paddle.a is used to get value for bullets and make bullets come 
enaku therinju ithu avlo proper ah illa nyabagam vechko...

USE  IN IF WANT CHANGE OPERATION MODE:
document.addEventListener("keydown", event => {
	 a = event.KeyCode;
	 
	 if(event.KeyCode==37||event.KeyCode==39){
		 var bulle = new bullets(shooter.position.x);
		  bullet.push(bulle);
	 }
	 switch (event.keyCode) {
        case 38:
          
		  var bulle = new bullets(shooter.position.x);
		  bullet.push(bulle);
	
          break;
		
		case 37:
          var bulle = new bullets(shooter.position.x);
		  bullet.push(bulle);
          break;  

        case 39:
		  var bulle = new bullets(shooter.position.x);
		  bullet.push(bulle);          
          break;
	  }
	  
	});
*/	