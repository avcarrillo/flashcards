/**
 * 
 */
function popup() {
alert("Hello World");
}

$(function(){
	var n1 = document.getElementById("n1");
	var n2 = document.getElementById("n2");
	var op = document.getElementById("op");
	var viewPortWidth = $(window).width();
	var size = viewPortWidth / 2;
	var margin = viewPortWidth / 9;
	margin = Math.abs(margin) * -1;
	n1.style.fontSize = size + "px";
	n1.style.marginTop = margin + "px";
	n1.style.marginBottom = margin + "px";
	n1.style.textAlign = "right";
	n2.style.fontSize = size + "px";
	n2.style.marginBottom = margin + "px";
	n2.style.marginTop = margin + "px";
	op.style.fontSize = size + "px";
	op.style.marginBottom = margin + "px";
	op.style.marginTop = margin + "px";
	line.style.borderTop = size / 30 + "px solid black";
	});

function random() {
	var total = 10;
	var n1=Math.floor(Math.random()*total);
	var n2=Math.floor(Math.random()*total);
	var op=Math.floor(Math.random()*2);
	$('#n1').text(n1);
	$('#n2').text(n2);
	if(op == 0){
		$('#op').text("+");
		answer = n1+n2;
	} else {
		if(n1<n2){
			$('#n1').text(n2);
			$('#n2').text(n1);
			$('#op').text("-");
			answer = n2-n1;
		} else {
		answer = n1-n2;
		}
	}
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