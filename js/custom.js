$(document).ready(function(){
    const slider = $("#slider").owlCarousel({  
        items:4,
        loop:true,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            375:{
              items:1
            },
            479:{
              items:1
            },
            575:{
              items:2
            },
            600:{
                items:2
            },
            679:{
              items:2
            },
            840:{
              items:3
            },
            1000:{
                items:3
            },
            1200:{
              items:4
            }
        }
    });
});

$(document).ready(function(){
  $('.slider').slick({
  	arrows:false,
  	slidesToShow:3,
    slidesToScroll: 1,
    focusOnSelect: true,
    speed:1000,
    infinite:true,
    autoplay:false,
   autoplaySpeed:1500,
   asNavFor:".sliderbig"



  });
  $('.sliderbig').slick({
    arrows:true,
    fade:true,
    asNavFor:".slider"
  });
  $(".sliderbig").on('afterChange', function(event, slick, currentSlide){
     $("#cp").text(currentSlide + 1);
  });
});





$(document).ready(function(){
  $('.sliderb').slick({
    arrows:false,
    slidesToShow:4,
    slidesToScroll: 1,
    focusOnSelect: true,
    speed:1000,
    infinite:true,
    autoplay:false,
   autoplaySpeed:1500,
   asNavFor:".sliderbigb",
   responsive: [
    {
      breakpoint: 1030,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
             }
    }]
    


  });
  $('.sliderbigb').slick({
    arrows:true,
    fade:true,
    asNavFor:".sliderb",
  });
  $(".sliderbigb").on('afterChange', function(event, slick, currentSlide){
     $("#cp").text(currentSlide + 1);
  });
});



