
function compute_x_plus_y(x,y){
  var z=0;
  x = parseInt(x);
  y = parseInt(y);
  var z=x+y;
  return z
}
function ask_for_x_n_y(){
  var x=prompt("Enter x value");
  var y=prompt("Enter y value");
  var z=compute_x_plus_y(x,y);
  document.getElementById("demo").innerHTML=z;
}

function display_my_name(){
  my_name = prompt("Enter my name");
alert(my_name+" is happy!");
}

function show_topic(){
  var x=document.getElementById("demo");
  x.style.fontSize="25px";
  x.style.color="red";
};

$(document).ready(function(){

$("button#hide_h2").on('click',function(){
  $("h2").hide(500);

});
$("button#show_h2").on('click',function(){
  $("h2").show(300);
  $("h2").css("color","blue");
  $("h2").html("You clicked me.");
});
})
