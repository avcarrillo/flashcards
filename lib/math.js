/**
 * 
 */
	var total = 50;
	var answer;
	var select;
	var problem;
	var right = 0;
	var wrong = 0;
	
function popup() {
alert("Hello World");
}

$(function(){
	var n1 = document.getElementById("n1");
	var n2 = document.getElementById("n2");
	var op = document.getElementById("op");
	var an = document.getElementById("an");
	var togo = document.getElementById("togo");
	var score = document.getElementById("score");
	var viewPortHeight = $(window).height();
	var size = viewPortHeight / 2;
	var margin = viewPortHeight / 9;
	margin = Math.abs(margin) * -1;
	togo.style.fontSize = "55px";
	score.style.fontSize = "35px";
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
	an.style.fontSize = size + "px";
	an.style.textAlign = "right";
	an.style.marginBottom = margin + "px";
	an.style.marginTop = margin + "px";
	line.style.borderTop = size / 30 + "px solid black";
	$('#togo').text(total+" Left to go");
	$('#score').text("Right = "+right+" Wrong = "+wrong);
	});

function create_problem() {
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
		$('#op').text("-");
		}
	}
	$('#answer').text(answer);
	$('#an').text("");
}

$(document).ready(function() {
	create_problem();
});

function run() {
	$('#an').val(function (){
		if(total == 1){
			$('#problem').text("All Done");
			$('#an').hide();
		} else {
		select = $('#an').text();
		answer = $('#answer').text();
		n1 = $('#n1').text();
		n2 = $('#n2').text();
		op = $('#op').text();
		if(answer == select){
			total--;
			right++;
			create_problem();	
		} else {
			//total++;
			wrong++;
			alert("Wrong Answer. "+n1 + op + n2+" = "+answer);
			create_problem();
		}
		$('#togo').text(total+" Left to go");
		$('#score').text("Right = "+right+" Wrong = "+wrong);
		}
	});
}

//$(document).ready(function() {
//	random();
//	var total = 50;
//	var answer;
//	var select;
//	var problem;
//	var right = 0;
//	var wrong = 0;
//	$('#an').change(function (){
//		if(total == 1){
//			$('#problem').text("All Done");
//			$('#an').hide();
//		} else {
//		select = $('#an').val();
//		answer = $('#answer').text();
//		problem = $('#problem').text();
//		if(answer == select){
//			total--;
//			right++;
//			random();	
//		} else {
//			total++;
//			wrong++;
//			alert("Wrong Answer. "+problem+" = "+answer);
//			random();
//		}
//		$('#togo').text(total+" Left to go");
//		$('#score').text("Right = "+right+" Wrong = "+wrong);
//		}
//	});
//});