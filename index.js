var prev = 0;
var $window = $(window);
var nav = $('.scrollhide-nav');

$window.on('scroll', function(){
  var scrollTop = $window.scrollTop();
  nav.toggleClass('hidden', scrollTop > prev);
  prev = scrollTop;
});

$("[data-menu-underline-from-center] a").addClass("underline-from-center");

// Globals
var sliderImages = [
    "img/newShowcase/deer-1-right-face.jp2",
    "img/newShowcase/deer2-straight.jp2",
    "img/newShowcase/deer-3-shoulder.jp2",
    "img/newShowcase/eian-with-kill.jp2",
    "img/newShowcase/eian-right-face.jp2",
    "img/newShowcase/eian-straight.jp2",
    "img/newShowcase/eian-eye.jp2",
    "img/newShowcase/bradenBull.jp2",
    "img/newShowcase/elk-whole.jp2",
    "img/newShowcase/elk-nose.jp2",
    "img/newShowcase/elk-vein.jp2"
];

var sliderElement = $(".slideshow-container");

function populateSlider() {
    // Update coverSlideCount
    $("#coverSlideCount").text("1/" + sliderImages.length);
    sliderImages.forEach(function (elem, index) {
        sliderElement.append(createSlideShowElement(elem, index));
    });
}

function createSlideShowElement(src, index) {
    index+=2; // There is a cover image by default, and we are using 0 based indexing.
    var newSlideDiv = document.createElement("div");
    newSlideDiv.classList.add("mySlides", "fade");

    var numberText = document.createElement("div");
    numberText.classList.add("numbertext");
    numberText.innerText = index + '/' + sliderImages.length; // Example: "1/3"

    var itemImg = document.createElement("img");
    itemImg.style.width = "100%";
    itemImg.src = src;

    newSlideDiv.appendChild(numberText);
    newSlideDiv.appendChild(itemImg);

    return newSlideDiv;
}


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




$(document).ready(function() {
     populateSlider();
});