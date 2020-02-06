"use strict";

(function($) {
  $(document).ready(function() {
    // Code
    //slider
    $(".uslider").slick({
      dots: true,
      infinite: false,
      speed: 300,
      slidesToShow: 2,
      slidesToScroll: 1,
      rows: 2,
      slidesPerRow: 1,

      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            rows: 2,
            slidesPerRow: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            rows: 1,
            arrows: true,
            dots: false
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            rows: 1,
            arrows: true,
            dots: false
          }
        }
      ]
    });
    //slider-end
  });
})(jQuery);
