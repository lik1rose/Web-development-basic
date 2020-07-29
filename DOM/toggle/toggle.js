
var button = document.querySelector("button");
var isPink = false;

// button.addEventListener("click", function(){
// 	//if white make it pink else make it white
	
// 	if(isPink){
// 		document.body.style.background = "white";
// 	} else {
// 		document.body.style.background = "pink";
// 	}
// 	isPink = !isPink;	

// });

button.addEventListener("click", function(){
	//if white make it pink else make it white
	
	document.body.classList.toggle("pink");

});