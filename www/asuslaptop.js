var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

//Knappen för "specifikationer"
var coll = document.getElementsByClassName("specifikationknapp");
var i;

for (i = 0; i < coll.length; i++) {
coll[i].addEventListener("click", function() {
  this.classList.toggle("active");
  var asuslaptopproduktspecifikationer = this.nextElementSibling;
  if (asuslaptopproduktspecifikationer.style.maxHeight){
    asuslaptopproduktspecifikationer.style.maxHeight = null;
  } else {
    asuslaptopproduktspecifikationer.style.maxHeight = asuslaptopproduktspecifikationer.scrollHeight + "px";
  }
});
}
