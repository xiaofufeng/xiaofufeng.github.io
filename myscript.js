
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
}
