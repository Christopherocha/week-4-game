var characterSet = false;
var chosenCharacter = ;
var currentEnemy= ;

var players = {
	player1:{
		name: "Erlich",
		healthPoints: ,
		attack: ,
		counterAttack:
	},
	player2:{
		name: "Dinesh",
		healthPoints: ,
		attack: ,
		counterAttack:
	},
	player3:{
		name: "Gilfoyle",
		healthPoints: ,
		attack: ,
		counterAttack:
	},
	player4:{
		name: "Gavin",
		healthPoints: ,
		attack: ,
		counterAttack: 25;
	}
}

$(document).ready( function() {

	$("#choose-erlich").on("click", function() {
		characterSet = true;
		chosenCharacter = players.player1;

		$("#characters").hide();

	});

	$("#choose-dinesh").on("click", function() {
			characterSet = true;
			chosenCharacter = players.player2;
	});

	$("#choose-gilfoyle").on("click", function() {
			characterSet = true;
			chosenCharacter = players.player3;
	});

	$("#choose-gavin").on("click", function() {
			characterSet = true;
			chosenCharacter = players.player4;
	});



});