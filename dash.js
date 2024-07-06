var menu = document.querySelector(".db")
var cont = document.querySelector(".contact")
var abt = document.querySelector(".about")

function openMenu(){
  menu.style.left="0"
  
}
function closeMenu() {
  menu.style.left="-60%"
}

function opencont(){
 closeMenu()
 cont.style.left="0"
}

function closecont() {
  cont.style.left="-60%"
  openMenu()
  
}
function openabout() 
{
  closeMenu()
  abt.style.left="0"
}
function closeabout() {
  abt.style.left="-100%"
  openMenu()
}



















