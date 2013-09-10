
$.ajax({
	url: "process.php",
	type: "GET",
	success: function (response1){
		$('#problem').text(response1);	
		//console.log(response1);
	}
});


//$('form.ajax').on('submit', function (){
//	var form = $(this),
//	url = form.attr('action'),
//	type = form.attr('method'),
//	data = {};
//	data['answer'] = $("[name='answer']").val();
//	
//	$.ajax({
//		url: url,
//		type: type,
//		data: data,
//		success: function(response){
//			if(response.match("Correct")){
//				$.messager.alert('Correct', response, 'info');
//					location.reload();
//			} else {
//				$.messager.alert('Incorrect', response, 'error');
//				setTimeout(function(){
//					location.reload();
//	           }, 4000);  
//			}
//		}
//	});
//	return false;
//});

$(document).ready(function () {
	setTimeout(function(){
	var form = $('form.ajax'),
	url = form.attr('action'),
	type = form.attr('method'),
	data = {};
	data['answer'] = "X";
	$.ajax({
		url: url,
		type: type,
		data: data,
		success: function(response){
			//console.log(response);
				$.messager.alert('Timeout', "You took to long to answer", 'error');
				setTimeout(function(){
					location.reload();
	           }, 4000);  
		}
	});
	return false;
	},10000);
});

$('.answer').change(function (){
	var form = $('form.ajax'),
	url = form.attr('action'),
	type = form.attr('method'),
	data = {};
	data['answer'] = $('.answer').val();
	//console.log(data);
	
	$.ajax({
		url: url,
		type: type,
		data: data,
		success: function(response){
			//console.log(response);
			if(response.match("Correct")){
				$.messager.alert('Correct', response, 'info');
				setTimeout(function(){
					location.reload();
	           }, 4000);  
			} else {
				
				$.messager.alert('Incorrect', response, 'error');
				setTimeout(function(){
					location.reload();
	           }, 4000);  
			}
		}
	});
	return false;
});