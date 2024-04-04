let button = document.getElementById("executeButton");
let input = document.getElementById("myInput");
let output =  document.getElementById("outputText");
let foodLabel = document.getElementById("food");
let placeLabel = document.getElementById("place");
let everything = document.getElementById("everything");
let title = document.getElementById("title");

let food = ["chicken", "ramen", "pizza", "dumplings", "a bento box", "hamburger"];
let places = ["the dorm", "chinatown", "ktown", "hanco's", "saketumi", "chipotle"];

button.addEventListener("click", function() {
	generator(input.value);
	restyle(input.value);

});

function generator(user_input){
	if (user_input == "Food" || user_input == "food") {
		let index = Math.floor(Math.random() * food.length);
		output.innerText = "You should eat " + food[index] + ".";
	}	
	else if (user_input == "Place" || user_input == "place") {
		let index = Math.floor(Math.random() * places.length);
		output.innerText = "You should go to " + places[index] + ".";
	}
	else {
		alert("Invalid Input");
	}

}

function restyle(user_input){
	if (user_input == "Food" || user_input == "food") {
		foodLabel.style.fontWeight = "bold";
		placeLabel.style.fontWeight = "normal";
	}	
	else if (user_input == "Place" || user_input == "place") {
		placeLabel.style.fontWeight = "bold";
		foodLabel.style.fontWeight = "normal";
	}

	let randR = Math.random() * 255;
	let randG = Math.random() * 255;
	let randB = Math.random() * 255;
	let randNum = Math.floor(Math.random() * 3);
	let randSize = Math.floor(Math.random() * 4) + 2;

	if (randNum == 0){
		button.style.backgroundColor = "rgb("+randR+","+randG+","+randB+")";
		output.style.backgroundColor = "";
		everything.style.backgroundColor = "";

	}
	else if (randNum == 1){
		output.style.backgroundColor = "rgb("+randR+","+randG+","+randB+")";
		button.style.backgroundColor = "";
		everything.style.backgroundColor = "";
	}
	else{
		everything.style.backgroundColor = "rgb("+randR+","+randG+","+randB+")";
		output.style.backgroundColor = "";
		button.style.backgroundColor = "";
	}
	title.style.textShadow = "0px 0px 13px " + "rgb("+randR+","+randG+","+randB+")";
	output.style.fontSize = randSize + "rem";
}

