//    $('.minimal-carusel').slick({
//   dots: false,
//   infinite: true,
//   speed: 300,
//   slidesToShow: 1,
//   adaptiveHeight: true
// });
$('.minimal-carusel').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,

});

/* Slick Slider */		  
$('.img-slider').slick({
  // dots: true,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear',
});
//Mobile Menu
$(".burgar-menu").click(function(){
  $(".navigation").toggleClass("burger-class");
});
		