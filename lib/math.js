/**
 * 
 */
function popup() {
alert("Hello World");
}

function random() {
	var total = 10;
	var n1=Math.floor(Math.random()*total);
	var n2=Math.floor(Math.random()*total);
	var op=Math.floor(Math.random()*2);
	if(op == 0){
		problem = n1 + "+" + n2;
		answer = n1+n2;
	} else {
		if(n1<n2){
			problem = n2 + "-" + n1;
			answer = n2-n1;
		} else {
		problem = n1 + "-" + n2;
		answer = n1-n2;
		}
	}
	$('#problem').text(problem);
	$('#answer').text(answer);
}



$(document).ready(function() {
	random();
	var total = 50;
	var answer;
	var select;
	var problem;
	var right = 0;
	var wrong = 0;
	$('.response').change(function (){
		if(total == 1){
			$('#problem').text("All Done");
			$('.response').hide();
		} else {
		select = $('.response').val();
		answer = $('#answer').text();
		problem = $('#problem').text();
		if(answer == select){
			total--;
			right++;
			random();	
		} else {
			total++;
			wrong++;
			alert("Wrong Answer. "+problem+" = "+answer);
			random();
		}
		$('#togo').text(total+" Left to go");
		$('#score').text("Right = "+right+" Wrong = "+wrong);
		}
	});
});