$('#humburger').click(function(){
$('.humburger').toggleClass('open')
$('.menu').toggleClass('open')})

$(document).ready(function(){
    $('.your-class').slick({
        prevArrow: '<div class="slider-arrow slider-prev "><img src="images/arrow2.png"  style="width:32px"> </div>',
        nextArrow: '<div class="slider-arrow slider-next "><img src="images/arrow1.png"  style="width:32px"></div>',
    });
  });

//  
// hide menu
  $(window).scroll(function() {
    if ($(this).scrollTop()>150)
     {
        $('#nav').fadeOut();
     }
    else
     {
      $('#nav').fadeIn();
     }
 }); 



  