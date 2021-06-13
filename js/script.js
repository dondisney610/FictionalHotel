$(function(){

  $('.faq-box').click(function(){
    var $answer = $(this).find('.answer');
    if($answer.hasClass('open')){
      $answer.removeClass('open');
      $answer.slideUp();
    }else{
      $answer.addClass('open');
      $answer.slideDown();
    }
  });

  
  $('.rec-list').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    centerMode: true,
    focusOnSelect: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: 0,
          centerMode: true,
        }
      },
    ]
  });

  new WOW().init();

  $('#nav-btn').on('click',function(){
    $(this).toggleClass('-active');
    $('.nav').toggleClass('-active');
  });

});