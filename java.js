var slides = document.getElementsByClassName("foto"); 
      var radiobuttons = document.getElementsByClassName("botonesinferiores");
      function showSlides (cuandox) {
      var cuandoy; 
if (cuandox > slides.length) {slideIndex = 1}
if (cuandox < 1) {slideIndex = slides.length}
for (cuandoy = 0; cuandoy < slides.length; cuandoy++) {
        slides[cuandoy].style.display = "none";
      }
for (cuandoy = 0; cuandoy < radiobuttons.length; cuandoy++) {
  radiobuttons[cuandoy].className = radiobuttons[cuandoy].

className.replace(" contador", "");
      }
slides[slideIndex - 1].style.display = "block";
  radiobuttons[slideIndex - 1].className += " contador";
}
var slideIndex = 1;
function botones_laterales (cuandox) {
showSlides(slideIndex += cuandox);
}

function hagas_clic (cuandox)  {
showSlides(slideIndex = cuandox);
}

document.addEventListener("DOMContentLoaded",
function (event) 
{
showSlides(slideIndex);
});
