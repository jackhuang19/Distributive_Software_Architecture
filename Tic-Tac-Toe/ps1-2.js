
var turns = "red" ;// global 
var win = " ";

function changeRed(itemId) {
   document.getElementById(itemId).style.background = "red";
}

function changeBlue(itemId) {
	document.getElementById(itemId).style.background = "blue";
}

function winner() {
	document.getElementById("message").innerHTML = win + " wins!!!!!";
}

function illegalMove() {
	alert("ILLEGAL MOVE!");
}

function winning() {
	var c00 = document.getElementById("00").style.backgroundColor;
	var c01 = document.getElementById("01").style.backgroundColor;
	var c02 = document.getElementById("02").style.backgroundColor;
	var c10 = document.getElementById("10").style.backgroundColor;
	var c11 = document.getElementById("11").style.backgroundColor;
	var c12 = document.getElementById("12").style.backgroundColor;
	var c20 = document.getElementById("20").style.backgroundColor;
	var c21 = document.getElementById("21").style.backgroundColor;
	var c22 = document.getElementById("22").style.backgroundColor;
	/** winning combos are 
				00 01 02 
				10 11 12
				20 21 22
				00 10 20
				01 11 21
				02 12 22
				00 11 22
				02 11 20**/
	//diagonal 1
	if (c00 == "red" && c11 == "red" && c22 == "red" || c00 == "blue" && c11 == "blue" && c22 == "blue") {
		win = c00;
		winner();
	} //diagonal 2
	if (c02 == "red" && c11 == "red" && c20 == "red" || c02 == "blue" && c11 == "blue" && c20 == "blue") {
		win = c02;
		winner();
	} //row 1
	if (c00 == "red" && c01 == "red" && c02 == "red" || c00 == "blue" && c01 == "blue" && c02 == "blue") {
		win = c00;
		winner();
	}  //row 2
	if (c10 == "red" && c11 == "red" && c12 == "red" || c10 == "blue" && c11 == "blue" && c12 == "blue") {
		win = c10;
		winner();
	} //row 3
	if (c20 == "red" && c21 == "red" && c22 == "red" || c20 == "blue" && c21 == "blue" && c22 == "blue") {
		win = c20;
		winner();
	} //col 1
	if (c00 == "red" && c10 == "red" && c20 == "red" || c00 == "blue" && c10 == "blue" && c20 == "blue") {
		win = c00;
		winner();
	} //col 2
	if (c01 == "red" && c11 == "red" && c21 == "red" || c01 == "blue" && c11 == "blue" && c21 == "blue") {
		win = c01;
		winner();
	} //col 3
	if (c02 == "red" && c12 == "red" && c22 == "red" || c02 == "blue" && c12 == "blue" && c22 == "blue") {
		win = c02;
		winner();
	}
}

function changecolor(item) {
	var elementID = item.id;
	if(document.getElementById(elementID).style.backgroundColor == "red" || document.getElementById(elementID).style.backgroundColor == "blue" ) {
		// illegal move
		illegalMove();
	} else {
		// color that cell  by calling changeBlue or changeRed
		if (turns == "red") {
			changeRed(elementID)
		}
		else if (turns == "blue") {
			changeBlue(elementID)
		}

		winning();
		// evaluate win 
			
		// change turn 
		if (turns == "blue") {
			turns = "red"
		}
		else if (turns == "red") {
			turns = "blue"
		}
	}
}
