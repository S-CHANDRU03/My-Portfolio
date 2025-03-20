// closenav function

var sidenav = document.querySelector(".sidenav")
var menuicon = document.getElementById("menuicon")
var closenav = document.getElementById("closenav")

menuicon.addEventListener("click",function(){
    sidenav.style.marginLeft=0
})

closenav.addEventListener("click",function(){
    sidenav.style.marginLeft="-50%"    
})