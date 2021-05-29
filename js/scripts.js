// window.onload = function(){ document.getElementById("loading").style.display = "none" }

function display() {
    var x = document.getElementById("nav-menu");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

function leftArrow() {
  document.querySelectorAll(".yellow").forEach(function(element) {
      element.classList.toggle("hide");
  });
  var x = document.getElementById("insurance-8").innerHTML;
  document.getElementById("insurance-8").innerHTML = document.getElementById("insurance-7").innerHTML;
  document.getElementById("insurance-7").innerHTML = document.getElementById("insurance-6").innerHTML;
  document.getElementById("insurance-6").innerHTML = document.getElementById("insurance-5").innerHTML;
  document.getElementById("insurance-5").innerHTML = document.getElementById("insurance-4").innerHTML;
  document.getElementById("insurance-4").innerHTML = document.getElementById("insurance-3").innerHTML;
  document.getElementById("insurance-3").innerHTML = document.getElementById("insurance-2").innerHTML;
  document.getElementById("insurance-2").innerHTML = document.getElementById("insurance-1").innerHTML;
  document.getElementById("insurance-1").innerHTML = x;


}

function rightArrow() {
  document.querySelectorAll(".yellow").forEach(function(element) {
    element.classList.toggle("hide");
  });
  var x = document.getElementById("insurance-2").innerHTML;
  document.getElementById("insurance-2").innerHTML = document.getElementById("insurance-3").innerHTML;
  document.getElementById("insurance-3").innerHTML = document.getElementById("insurance-4").innerHTML;
  document.getElementById("insurance-4").innerHTML = document.getElementById("insurance-5").innerHTML;
  document.getElementById("insurance-5").innerHTML = document.getElementById("insurance-6").innerHTML;
  document.getElementById("insurance-6").innerHTML = document.getElementById("insurance-7").innerHTML;
  document.getElementById("insurance-7").innerHTML = document.getElementById("insurance-8").innerHTML;
  document.getElementById("insurance-8").innerHTML = document.getElementById("insurance-1").innerHTML;
  document.getElementById("insurance-1").innerHTML = x;
}