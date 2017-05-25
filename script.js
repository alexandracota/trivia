//Hides questions at start of game.
$(document).ready(function() {
	$(".question").hide();
	$(".answers").hide();
	$(".submit").hide();


	//Displays questions when start button is clicked.
	$(".start").click(function() {
		$(".question").show();
		$(".answers").show();
		$(".submit").show();

		//Set Timeout.
		var timeOut = function() {
			question1();
			question2();
			question3();
			question4();
			question5();
			question6();
			question7();

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
				$("#timer").html("Correct: " + correctAnswerCounter + " Incorrect: " + incorrectAnswerCounter + " Unanswered: " + unansweredCounter);
			}
			else {
				$("#timer").html("Time remaining: 00:" + count + " seconds");
			}
		$(".submit").on("click", function submit() {
		clearInterval(counter);
		$("#timer").html("Correct: " + correctAnswerCounter + " Incorrect: " + incorrectAnswerCounter + " Unanswered: " + unansweredCounter);
		$(".question").hide();
		$(".answers").hide();
		$(".submit").hide();

		});
	
	};
	


	});



//How many answered correctly.
var correctAnswerCounter = 0;
//How many answered incorrectly.
var incorrectAnswerCounter = 0;
//How many unanswered.
var unansweredCounter = 7;

	//If group 1 has an answer selected, add to answer counter.
	function question1() { 
		var answer = $('input[name="radio-1"]:checked').val(); 
		if (answer === "correct") {
			correctAnswerCounter++;
			unansweredCounter--;
		} 
		else if (answer === "incorrect") {
			incorrectAnswerCounter++;
			unansweredCounter--;
		}

		console.log(answer);
	};
	

	//If group 2 has an answer selected, add to answer counter.
	function question2() { 
		var answer = $('input[name="radio-2"]:checked').val(); 
		if (answer === "correct") {
			correctAnswerCounter++;
			unansweredCounter--;
		} 
		else if (answer === "incorrect") {
			incorrectAnswerCounter++;
			unansweredCounter--;
		}
	};
	


	//If group 3 has an answer selected, add to answer counter.
	function question3() { 
		var answer = $('input[name="radio-3"]:checked').val(); 
		if (answer === "correct") {
			correctAnswerCounter++;
			unansweredCounter--;
		} 
		else if (answer === "incorrect") {
			incorrectAnswerCounter++;
			unansweredCounter--;
		}
	};
	

	//If group 4 has an answer selected, add to answer counter.
	function question4() { 
		var answer = $('input[name="radio-4"]:checked').val(); 
		if (answer === "correct") {
			correctAnswerCounter++;
			unansweredCounter--;
		} 
		else if (answer === "incorrect") {
			incorrectAnswerCounter++;
			unansweredCounter--;
		}
	};

	
	//If group 5 has an answer selected, add to answer counter.
	function question5() { 
		var answer = $('input[name="radio-5"]:checked').val(); 
		if (answer === "correct") {
			correctAnswerCounter++;
			unansweredCounter--;
		} 
		else if (answer === "incorrect") {
			incorrectAnswerCounter++;
			unansweredCounter--;
		}
	};


	//If group 6 has an answer selected, add to answer counter.
	function question6() { 
		var answer = $('input[name="radio-6"]:checked').val(); 
		if (answer === "correct") {
			correctAnswerCounter++;
			unansweredCounter--;
		} 
		else if (answer === "incorrect") {
			incorrectAnswerCounter++;
			unansweredCounter--;
		}
	};

	//If group 7 has an answer selected, add to answer counter.
	function question7() { 
		var answer = $('input[name="radio-7"]:checked').val(); 
		if (answer === "correct") {
			correctAnswerCounter++;
			unansweredCounter--;
		} 
		else if (answer === "incorrect") {
			incorrectAnswerCounter++;
			unansweredCounter--;
		}
	};



});




