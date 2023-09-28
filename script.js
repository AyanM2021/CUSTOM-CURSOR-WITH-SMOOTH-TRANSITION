// declaring variables and storing with reapective html

var main=document.querySelector("#main");
var cursor=document.querySelector("#cursor");
var h1 = document.querySelector("#cursor");

// using dets function

main.addEventListener("mousemove",function(dets){
    cursor.style.left=dets.x + "px";
    cursor.style.top=dets.y + "px";
   
})

// h1.addEventListener("mousemove",function() {
//      cursor.style.height =50+"px";
//      cursor.style.width =50+"px";
// })