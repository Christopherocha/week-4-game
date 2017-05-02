var characterSet = false;
var chosenCharacter = ;
var currentEnemy= ;

var players = {
	player1:{
		name: "obi-wan",
		healthPoints: ,
		attack: ,
		counterAttack:
	},
	player2:{
		name: "luke skywalker",
		healthPoints: ,
		attack: ,
		counterAttack:
	},
	player3:{
		name: "darth-sidious",
		healthPoints: ,
		attack: ,
		counterAttack:
	},
	player4:{
		name: "darth-maul",
		healthPoints: ,
		attack: ,
		counterAttack: 25;
	}
}

$(document).ready( function() {

	$("#choose-obi").on("click", function() {
			characterSet = true;
			chosenCharacter = players.player1;
	});

	$("#choose-luke").on("click", function() {
			characterSet = true;
			chosenCharacter = players.player2;
	});

	$("#choose-sidious").on("click", function() {
			characterSet = true;
			chosenCharacter = players.player3;
	});

	$("#choose-maul").on("click", function() {
			characterSet = true;
			chosenCharacter = players.player4;
	});

	

});