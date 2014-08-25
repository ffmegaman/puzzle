$(document).ready(function(){
  $('#puzzle-start, #play_button').click(function(){
    $('#main-puzzle-box').show(function(){
      $(this).click().animate({
       "width":"100%",
       "display":"block"
      },'fast');
    });
  });

    $('#click-about').click(function(){
    $('#main-about-box').show(function(){
      $(this).click().animate({
      "height":"31.9em",
      "display":"block",
      "z-index":"1000"
      },'slow');
    });
  });

  $('#main-about-box').mouseleave(function(){
    $(this).fadeOut(1300);
  });


  $('#back-button').on('click', function(){
    $('#main-puzzle-box').fadeOut('slow');
  });

  $('.puzzle-set-1').sortable();
  $('.puzzle-set-2').sortable();


});

