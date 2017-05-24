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
				console.log("time's up!");
				$("#timer").html("Correct: " + correctAnswerCounter + " Incorrect: " + incorrectAnswerCounter);
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
			unansweredCounter++;
		};

	question1();
	console.log(answerCounter);
	};

	//If group 2 has an answer selected, add to answer counter.
		function question2() { 
		if ($('input[name="radio-2"]').is(':checked')) {
			answerCounter++;
		} 
		else if (!$('input[name="radio-2"]').is(':checked')) {
			unansweredCounter++;
		};

	question2();
	console.log(answerCounter);
	};

	//If group 3 has an answer selected, add to answer counter.
		function question3() { 
		if ($('input[name="radio-3"]').is(':checked')) {
			answerCounter++;
		} 
		else if (!$('input[name="radio-3"]').is(':checked')) {
			unansweredCounter++;
		};

	question3();
	console.log(answerCounter);
	};

	//If group 4 has an answer selected, add to answer counter.
		function question4() { 
		if ($('input[name="radio-4"]').is(':checked')) {
			answerCounter++;
		} 
		else if (!$('input[name="radio-4"]').is(':checked')) {
			unansweredCounter++;
		};

	question4();
	console.log(answerCounter);
	};

	//If group 5 has an answer selected, add to answer counter.
		function question5() { 
		if ($('input[name="radio-5"]').is(':checked')) {
			answerCounter++;
		} 
		else if (!$('input[name="radio-5"]').is(':checked')) {
			unansweredCounter++;
		};

	question5();
	console.log(answerCounter);
	};

	//If group 6 has an answer selected, add to answer counter.
		function question6() { 
		if ($('input[name="radio-6"]').is(':checked')) {
			answerCounter++;
		} 
		else if (!$('input[name="radio-6"]').is(':checked')) {
			unansweredCounter++;
		};

	question6();
	console.log(answerCounter);
	};

	//If group 7 has an answer selected, add to answer counter.
		function question7() { 
		if ($('input[name="radio-7"]').is(':checked')) {
			answerCounter++;
		} 
		else if (!$('input[name="radio-7"]').is(':checked')) {
			unansweredCounter++;
		};

	question7();
	console.log(answerCounter);
	};


//How many answered correctly.
var correctAnswerCounter = 0;
//How many answered incorrectly.
var incorrectAnswerCounter = 0;
//How many unanswered.
var unansweredCounter = 0;

//If answerCounter is equal to 7, stop the timer and end game.
if (answerCounter === 7) {
	clearInterval(timer);
	$(".question").hide();
	$(".answers").hide();
	$("#timer").html("Correct: " + correctAnswerCounter + " Incorrect: " + incorrectAnswerCounter);

};








