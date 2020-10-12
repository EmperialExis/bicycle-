$(document).ready(function(){
  $('.slider').slick({
    dots:true,
    arrows:false,
    slidesToShow:1,
    infinite:true,
    autoplay:true,
    pauseOnFocus:true,
    adaptiveHeight:true,
    pauseOnHover:true,
    swipe:true,
    TouchMove:true,
    responsive:[
      {
        dots:false,
        breakpoint: 768,
        settings:{
            arrows:false,
          slidesToShow:1,
        }
      }, {
        dots:false,
        breakpoint: 922,
        settings:{
          arrows:false,
          slidesToShow:1
        }
      }, {
        dots:false,
        breakpoint: 480,
        settings:{
          arrows:false,
          slidesToShow:1
        }
      }
    ]
  });
  });
