$(document).ready(function () {
  // banner owl carousel
  $("#banner-area .owl-carousel").owlCarousel({
    dots: true,
    items: 1,
    lazyLoad: true,
    loop: true,
    autoplay: true,
    autoplayTimeout: 5000,
    animateOut: "fadeOut",
  });
});
