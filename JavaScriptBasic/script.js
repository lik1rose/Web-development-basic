// alert("Hello from the JS world!!!");

// var userName = prompt("Ur name?");

// alert("Nice to meet you, " + userName);

// console.log("Also great to meet you, " + userName); 


// var age = prompt("What is your age? ");

// var days = age * 365.25;

// alert(userName + ", you are " + age + " years old is roughly " + days + " days");



// console.log("PRINTing All Number Between -10 ~ 20");

// var counter = -10;

// while(counter <= 20){
// 	console.log(counter);
// 	counter++;
// }



// console.log("PRINTing Even Number Between 10 ~ 40");

// var counter = 10;

// while(counter <= 40){
// 	console.log(counter);
// 	counter+=2;
// }



// console.log("PRINTing  Number div by 5 AND 3 Between 5 ~ 50");

// var counter = 5;

// while(counter <= 50){
	
// 	if((counter % 5 == 0) && (counter % 3 == 0)){
// 		console.log(counter);
// 	}
	
// 	counter++;
// }


// var str = "hello";

// for(var i = 0; i < str.length; i++){
// 	console.log(str[i]);
// }


function sayHi(name) {
	console.log("HELLO!" + name);
	console.log("GOODBYE!");
}

function fact(num) {
	var result = 1;

	for(var i =1; i <= num; i++) {
		result = result * i;
	}

	return result;
}

function square(x) {
	return x * x;
}


function kebabToSnake(str) {
	// replace all - with _, then return str
	var newStr = str.replace(/-/g, '_');
	return newStr;
}

function doMath() {
	x = 40;
	console.log(x);
}

function sing() {
	console.log("NewRap_NewStar");
	console.log("MoDongShanBa");
}