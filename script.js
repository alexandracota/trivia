
$(document).ready(function() {
	$(".wrapper").hide();

	});

$(".btn").click(function() {
	$(".wrapper").show();

});

//Timer count set to 30.
var count = 30;

var counter = setInterval (timer, 1000);
//Function to count down and clear when finished.
function timer() {
	count = count--;
	if (count <= 0) {
		clearInterval (counter);
		return;
	}
}

timer();

$("#id").html(timer);

// setTimeout(thirtySeconds, 1000 * 30);

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






