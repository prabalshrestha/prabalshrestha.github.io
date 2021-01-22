
window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {

  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.padding = "15px 0px";
    document.getElementById("logos").style.display="flex";


  } else {
    document.getElementById("navbar").style.padding = "0px 10px";
    document.getElementById("logos").style.display="none";
    
  }
  
}