let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
  navbar.classList.toggle('active');
}

var btnContainer = document.getElementsByClassName("navbar");

var btns = document.getElementsByClassName("link");

for(var i=0; i<btns.length; i++){
  btns[i].addEventListener("click",
  function(){
    var current = document.getElementsByClassName("active");
    if(current.length > 0){

      current[0].className = current[0].className.replace("active", "");
    }
    this.className+= "active";
  });
}