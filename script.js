let button = document.getElementById("executeButton");
let input = document.getElementById("myInput");
let output =  document.getElementById("outputText");

let food = ["chicken", "ramen", "pizza", "dumplings", "a bento box", "hamburger"];
let places = ["the dorm", "chinatown", "ktown", "hanco's", "saketumi", "chipotle"];

button.addEventListener("click", function() {
	generator(input.value);
	restyle();

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


function restyle(){


}

