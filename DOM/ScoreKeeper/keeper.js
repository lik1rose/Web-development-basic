
var p1btn = document.querySelector("#p1");
var p2btn = document.querySelector("#p2");
var resetbtn = document.querySelector("#reset");
var number = document.querySelector("input[type='number']");
var winningScoreDisplay = document.querySelector("p span");

var s1 = document.querySelector("#s1");
var player2score = document.querySelector("#s2");

var p1score = 0;
var p2score = 0;

var gameOver = false;
var winningScore = 5;

p1btn.addEventListener("click", function(){
	if(!gameOver){
		p1score++;
		if(p1score === winningScore){
			s1.classList.add("winner");
			gameOver = true;
		}
		s1.textContent = p1score;
	}
});

p2btn.addEventListener("click", function(){
	if(!gameOver){
		p2score++;
		if (p2score === winningScore) {
			player2score.classList.add("winner");
			gameOver = true;
		}
		player2score.textContent = p2score;
	}
});

resetbtn.addEventListener("click", function(){
	reset();
});

function reset(){
	p1score = 0;
	p2score = 0;
	gameOver = false;
	s1.classList.remove("winner");
	player2score.classList.remove("winner");

	s1.textContent = p1score;
	player2score.textContent = p2score;
};

number.addEventListener("change", function(){
	winningScoreDisplay.textContent = number.value;
	winningScore = Number(number.value);
	reset();
});







