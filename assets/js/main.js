
$(document).ready(function(){
  $('.responsive').slick({
   infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      arrows: false,
      dots: true,
      fade: true,
  cssEase: 'linear'
      
});
    });


$(document).ready(function(){
  $('.trusted').slick({
   infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
      autoplay: true,
      autoplaySpeed: 5000,
       responsive: [
           {
      breakpoint: 769,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
           },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
          arrows: false
      }
    }
  ]
});
    });


$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 800) {
    $('.return').fadeIn();
  } else {
    $('.return').fadeOut();
  }
});

$("#offerElement1").click(function(){
  $("#it1").toggleClass("invert");
    $("#offerElement>.row>.info>p").toggleClass("weight");
});

$("#offerElement2").click(function(){
  $("#it2").toggleClass("invert");
    $("#offerElement2>.row>.info>p").toggleClass("weight");
});

$("#offerElement3").click(function(){
  $("#it3").toggleClass("invert");
    $("#offerElement3>.row>.info>p").toggleClass("weight");
});


$("#offerElement4").click(function(){
  $("#it4").toggleClass("invert");
    $("#offerElement4>.row>.info>p").toggleClass("weight");
});


$("#offerElement5").click(function(){
  $("#it5").toggleClass("invert");
    $("#offerElement5>.row>.info>p").toggleClass("weight");
});

$("#offerElement6").click(function(){
  $("#it6").toggleClass("invert");
    $("#offerElement6>.row>.info>p").toggleClass("weight");
});

$("#offerElement7").click(function(){
  $("#it7").toggleClass("invert");
    $("#offerElement7>.row>.info>p").toggleClass("weight");
});

$("#offerElement8").click(function(){
  $("#it8").toggleClass("invert");
    $("#offerElement8>.row>.info>p").toggleClass("weight");
});


$("#offerElement9").click(function(){
  $("#it9").toggleClass("invert");
    $("#offerElement9>.row>.info>p").toggleClass("weight");
});


$("#offerElement10").click(function(){
  $("#it10").toggleClass("invert");
    $("#offerElement10>.row>.info>p").toggleClass("weight");
});


$("#offerElement11").click(function(){
  $("#it11").toggleClass("invert");
    $("#offerElement11>.row>.info>p").toggleClass("weight");
});

$("#offerElement12").click(function(){
  $("#it12").toggleClass("invert");
    $("#offerElement12>.row>.info>p").toggleClass("weight");
});

$("#offerElement13").click(function(){
  $("#it13").toggleClass("invert");
    $("#offerElement13>.row>.info>p").toggleClass("weight");
});

$("#offerElement14").click(function(){
  $("#it14").toggleClass("invert");
    $("#offerElement14>.row>.info>p").toggleClass("weight");
});

$("#offerElement15").click(function(){
  $("#it15").toggleClass("invert");
    $("#offerElement15>.row>.info>p").toggleClass("weight");
});








