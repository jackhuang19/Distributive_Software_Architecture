var correct = 0;
var incorrect = 0;
var peopleArray; 
var choiceArray = ["choice1", "choice2", "choice3"];
var index = 0;

window.onload = function() {
	$.getJSON('http://localhost:8000/data.json', function(data) {				
		peopleArray = data;
		play();
	})
}

function play() {
	//checks if all images are used up 
	if (index >= 15) {
		end();
	}	

	//Array of three choices
	var choices = ["", "", ""];

	//selects three indexes to use in choice array
	var selector = randomChoices();

	//assigns image to ID
	img = peopleArray.people[index].image;	
	document.getElementById("person").src = "profilePics/"+img;

	//assigns names to the choices in the array 
	name = peopleArray.people[index].firstname + " " + peopleArray.people[index].lastname;
	choices[selector] = name;
	document.getElementById(choiceArray[selector]).name = "true";

	//loops through and add names to the choices array, also checking if the choice is true
	for(var i = 0; i < 3; i++) {
		var wrongAnswerNum = randomSelector(); 
		while (wrongAnswerNum === index) {
				wrongAnswerNum = randomSelector(); 
		}	
		if (choices[i] === "") {				
			var chosen = peopleArray.people[wrongAnswerNum];			
			choices[i] = chosen.firstname + " " + chosen.lastname;		
			document.getElementById(choiceArray[i]).value = choices[i];
			document.getElementById(choiceArray[i]).name = "false";
		}
	}
	
	for(var a = 0; a < 3; a++) {
		document.getElementById(choiceArray[a]).value = choices[a];
	}
	index++;
}


function record(el) {
	if (el.name === "true") {
		document.getElementById("scoring").innerHTML = "Correct, good job!"
		document.getElementById("scoring").classList = "alert alert-success";
		document.getElementById("increase").innerHTML = correct;
		correct++;
	} else {
		document.getElementById("scoring").innerHTML = "Sorry, you're incorrect. Try again!";
		document.getElementById("scoring").classList = "alert alert-danger";
		document.getElementById("decrease").innerHTML = incorrect;
		incorrect++;
	}
	play();
}

function randomSelector() {
	var min = 0;
	var max = 15
	return Math.floor(Math.random() * (max - min)) + min;	
}

function randomChoices() {
	var min = 0;
	var max = 3;
	return Math.floor(Math.random() * (max - min)) + min;	
}

function reload() {
	alert("Total Points: " + correct);
	location.reload();
}

function end() {
	reload();
}
