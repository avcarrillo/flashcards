function number_write(x)
{
  var text_box = $('#an');
  if(x>=0 && x<=9)
  {
    if(text_box.text()==""){
   text_box.text(x);
  } else {
	  var y = text_box.text();
	  console.log(y);
	  text_box.text(y * 10 + x);
  }
  }
}
function number_clear()
{
	$('#an').text("");
}
function number_c()
{
  var text_box = $('#an');
  var num = text_box.value;
  var num1 = num%10;
  num -= num1;
  num /= 10;
  text_box.value = num;
}