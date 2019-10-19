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

var sliderElement = $(".orbit-container");

function populateSlider() {
    sliderImages.forEach(function (elem) {
        sliderElement.append(createOrbitSlideElement(elem));
    });
}

function createOrbitSlideElement(src) {
    var newListItem = document.createElement("li");
    newListItem.classList.add("orbit-slide");

    var itemImg = document.createElement("img");
    itemImg.classList.add("orbit-image");
    itemImg.src = src;

    newListItem.appendChild(itemImg);

    return newListItem;
}

$(document).ready(function() {
     populateSlider();
});