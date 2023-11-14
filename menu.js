function menulateral (){
var r1 = document.getElementById('rotativo')
var b1 = document.getElementById('btl1')
var n1 = document.getElementById('menu');
n1.style.animationName = "menulateralof" ;
n1.style.marginLeft = "-20%";
b1.style.display = "block";
r1.style.animationName = "rota1" ;
}
function menulateralof (){
var r1 = document.getElementById('rotativo') 
var b1 = document.getElementById('btl1')
var n1 = document.getElementById('menu');
n1.style.animationName = "menulateral" ;
n1.style.marginLeft = "-20px";
b1.style.display = "none";
r1.style.animationName = "rota" ;
}
