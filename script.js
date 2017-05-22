//Hides questions at start of game.
$(document).ready(function() {
	$(".question").hide();
	$(".answers").hide();

	
//Displays questions when start button is clicked.
$(".start").click(function() {
	$(".question").show();
	$(".answers").show();

	});

});


//Timer count set to 30.
var count = 30;

//Counter to count the seconds.
var counter = setInterval(timer, 1000);

//Function to count down and clear when finished.
function timer() {
count = count--;
if (count <= 0) {
	clearInterval(counter);
	return;
	};
};

// //Call the timer function.
// timer();
// setInterval();
// console.log(count);

// //Display live timer on the document.
// $("#timer").html(count + " seconds");



//
//setTimeout(thirtySeconds, 1000 * 30);



// function thirtySeconds() {
// 	$(".timer").append("")
// }

// function timeUp() {
// 	console.log("done");
// 	$(".timer").append("<h3>Time's up!</h3>");
// 	console.log("time is up");
// };

// timeUp();



// });






