var correctAnswerCounter = 0;
var incorrectAnswerCounter = 0;

//Hides questions at start of game.
$(document).ready(function() {
	$(".question").hide();
	$(".answers").hide();


	//Displays questions when start button is clicked.
	$(".start").click(function() {
		$(".question").show();
		$(".answers").show();

		//Set Timeout.
		var timeOut = function() {	
		};
		//Time out after 30 seconds.
		setTimeout(timeOut, 1000 * 30);
		//Timer count set to 30.
		var count = 31;
		//Counter to count the seconds.
		var counter = setInterval(timer, 1000);
		//Function to count down and clear when finished.
		//var timer = 
		function timer() {
			count--;
			if (count <= 0) {
				clearInterval(counter);
				$("#timer").html("00:00 seconds");
				console.log("time's up!");
			}
			else {
				$("#timer").html("Time remaining: 00:" + count + " seconds");
			}
		};

	});

});

//Create answer counter.

var answerCounter = 0;

//If group 1 has an answer selected, add to answer counter.
function question1() { 
	if ($('input[name="radio-1"]').is(':checked')) {
		answerCounter++;
	} 
	else if (!$('input[name="radio-1"]').is(':checked')) {
		console.log("Take a guess!");
	};

question1();
console.log(answerCounter);
};

//If group 2 has an answer selected, add to answer counter.

	if ($('input[name="radio-2"]:checked')) {
		answerCounter++;
	};
	
console.log(answerCounter);

//If group 3 has an answer selected, add to answer counter.
	if ($('input[name="radio-3"]:checked')) {
		answerCounter++;
	};
	
console.log(answerCounter);

//If group 4 has an answer selected, add to answer counter.
	if ($('input[name="radio-4"]:checked')) {
		answerCounter++;
	};
	
console.log(answerCounter);

//If group 5 has an answer selected, add to answer counter.
	if ($('input[name="radio-5"]:checked')) {
		answerCounter++;
	};
	
console.log(answerCounter);

//If group 6 has an answer selected, add to answer counter.
	if ($('input[name="radio-6"]:checked')) {
		answerCounter++;
	};
	
console.log(answerCounter);

//If group 7 has an answer selected, add to answer counter.
	if ($('input[name="radio-7"]:checked')) {
		answerCounter++;
	};
	
console.log(answerCounter);






