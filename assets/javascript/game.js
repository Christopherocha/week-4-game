var characterSet = false;
var chosenCharacter = false;
var currentEnemy= false;
var enemiesLeft = 3;
var winCount = 0;

var players = {
	player1:{
		name: "Erlich",
		healthPoints: 120,
		attack: 10,
		baseAttack: 10,
		counterAttack: 5,
		img: "assets/images/erlich.jpeg"
	},
	player2:{
		name: "Dinesh",
		healthPoints: 100,
		attack: 10,
		baseAttack: 10,
		counterAttack: 5,
		img: "assets/images/dinesh.jpeg"
	},
	player3:{
		name: "Gilfoyle",
		healthPoints: 150,
		attack: 12,
		baseAttack: 12,
		counterAttack: 10,
		img: "assets/images/gilfoyle.jpeg"
	},
	player4:{
		name: "Gavin",
		healthPoints: 180,
		attack: 12,
		baseAttack: 12,
		counterAttack: 20,
		img: "assets/images/gavin.jpeg"
	}
}

$(document).ready(function() {

	// Choose character logic
	$("#choose-erlich").on("click", function() {
		characterSet = true;
		chosenCharacter = players.player1;

		$("#characters").hide();
		$("#fight-erlich").hide();
		$("#chosen-erlich").show();
		$("#chosen").show();
		$("#enemy-row").show();
		$("#chosen-name").text(chosenCharacter.name);
		$("#chosen-img").attr("src", chosenCharacter.img);
		$("#chosen-hp").text(chosenCharacter.healthPoints);
		$("#choose-message").show();
		$("#died-message").hide();
		$("#win-message").hide();
	});

	$("#choose-dinesh").on("click", function() {
		characterSet = true;
		chosenCharacter = players.player2;

		$("#characters").hide();
		$("#fight-dinesh").hide();
		$("#chosen-dinesh").show();
		$("#chosen").show();
		$("#enemy-row").show();
		$("#chosen-name").text(chosenCharacter.name);
		$("#chosen-img").attr("src", chosenCharacter.img);
		$("#chosen-hp").text(chosenCharacter.healthPoints);
		$("#choose-message").show();
		$("#died-message").hide();
		$("#win-message").hide();
	});

	$("#choose-gilfoyle").on("click", function() {
		characterSet = true;
		chosenCharacter = players.player3;

		$("#characters").hide();
		$("#fight-gilfoyle").hide();
		$("#chosen-gilfoyle").show();
		$("#chosen").show();
		$("#enemy-row").show();
		$("#chosen-name").text(chosenCharacter.name);
		$("#chosen-img").attr("src", chosenCharacter.img);
		$("#chosen-hp").text(chosenCharacter.healthPoints);
		$("#choose-message").show();
		$("#died-message").hide();
		$("#win-message").hide();
	});

	$("#choose-gavin").on("click", function() {
		characterSet = true;
		chosenCharacter = players.player4;

		$("#characters").hide();
		$("#fight-gavin").hide();
		$("#chosen-gavin").show();
		$("#chosen").show();
		$("#enemy-row").show();
		$("#chosen-name").text(chosenCharacter.name);
		$("#chosen-img").attr("src", chosenCharacter.img);
		$("#chosen-hp").text(chosenCharacter.healthPoints);
		$("#choose-message").show();
		$("#died-message").hide();
		$("#win-message").hide();
	});
	// End choose character logic

	// Choose enemy logic

	$("#fight-erlich").on("click", function() {
		if (currentEnemy === false) {
			currentEnemy = players.player1;
			$("#fight-erlich").hide();
			$("#enemy-row").hide();
			$("#defender-name").text(currentEnemy.name);
			$("#defender-img").attr("src", currentEnemy.img);
			$("#defender-hp").text(currentEnemy.healthPoints);
			$("#current-opponent").show();
			$("#choose-message").hide();
			
			if (enemiesLeft < 3) {
				$("#opponent").show();
			}
		} 
	});

	$("#fight-dinesh").on("click", function() {
		if (currentEnemy === false) {
			currentEnemy = players.player2;
			$("#fight-dinesh").hide();
			$("#enemy-row").hide();
			$("#defender-name").text(currentEnemy.name);
			$("#defender-img").attr("src", currentEnemy.img);
			$("#defender-hp").text(currentEnemy.healthPoints);
			$("#current-opponent").show();
			$("#choose-message").hide();
			
			if (enemiesLeft < 3) {
				$("#opponent").show();
			}
		} 
	});

	$("#fight-gilfoyle").on("click", function() {
		if (currentEnemy === false) {
			currentEnemy = players.player3;
			$("#fight-gilfoyle").hide();
			$("#enemy-row").hide();
			$("#defender-name").text(currentEnemy.name);
			$("#defender-img").attr("src", currentEnemy.img);
			$("#defender-hp").text(currentEnemy.healthPoints);
			$("#current-opponent").show();
			$("#choose-message").hide();
			
			if (enemiesLeft < 3) {
				$("#opponent").show();
			}
		} 
	});

	$("#fight-gavin").on("click", function() {
		if (currentEnemy === false) {
			currentEnemy = players.player4;
			$("#fight-gavin").hide();
			$("#enemy-row").hide();
			$("#defender-name").text(currentEnemy.name);
			$("#defender-img").attr("src", currentEnemy.img);
			$("#defender-hp").text(currentEnemy.healthPoints);
			$("#current-opponent").show();
			$("#choose-message").hide();

			if (enemiesLeft < 3) {
				$("#opponent").show();
			}
		} 
	});

	// End logic to choose opponent

	// Begin attack logic
	$("#attack").on("click", function(){
		if (currentEnemy === false) {
			// do something to alert the user to pick an enemy


		} else {
			// logic to attack the opponent and then also to check if their health is below 0 to remove them from the currentOpponent ...
			// ... section and also check the count for defeated enemies to display the restart button.
			currentEnemy.healthPoints = currentEnemy.healthPoints - chosenCharacter.attack;
			chosenCharacter.healthPoints = chosenCharacter.healthPoints - currentEnemy.counterAttack;
			chosenCharacter.attack += chosenCharacter.baseAttack; 
			$("#defender-hp").text(currentEnemy.healthPoints);
			$("#chosen-hp").text(chosenCharacter.healthPoints);

			if (currentEnemy.healthPoints <= 0) {
				currentEnemy = false;
				enemiesLeft --;
				$("#enemy-row").show();
				$("#opponent").hide();
				$("#defender-name").text("");
				$("#defender-img").attr("src", "");
				$("#defender-hp").text("");
				$("#choose-message").show();
				// add logic to display message to choose a new opponent
				if (enemiesLeft === 0) {
					// Logic to restart the game
					characterSet = false;
					chosenCharacter = false;
					currentEnemy= false;
					enemiesLeft = 3;

					$("#characters").show();
					$("#enemy-row").hide();
					$("#fight-erlich").show();
					$("#fight-dinesh").show();
					$("#fight-gilfoyle").show();
					$("#fight-gavin").show();
					$("#chosen").hide();
					$("#choose-message").hide();
					$("#win-message").show();

					//Hide enemy row and make sure all

				}

			} else if (chosenCharacter.healthPoints <= 0) {
				//logic for gameover bc your person died
				characterSet = false;
				chosenCharacter = false;
				currentEnemy= false;
				enemiesLeft = 3;

				$("#died-message").show();
				$("#characters").show();
				$("#enemy-row").hide();
				$("#fight-erlich").show();
				$("#fight-dinesh").show();
				$("#fight-gilfoyle").show();
				$("#fight-gavin").show();
				$("#chosen").hide();

			}
		}

	});

});