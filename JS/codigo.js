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
      "display":"block"
      },'slow');
    });
  });

  $('#main-about-box').mouseleave(function(){
    $(this).fadeOut(1300);
  });

  $('#main_logo').on('click', function(){
    $('#main-puzzle-box').fadeOut('slow');
  });

  $('#main-header').mouseenter(function(){
    $('#main-header').animate({
      "opacity":"1"
      });
    });

  $('#main-header').mouseleave(function(){
    $(this).animate({
      "opacity":"1"
    });
  });

  $('#play_button, #puzzle-start, #click-about').click(function(){
    $('#main-header').animate({
      "opacity":"1"
    }, 'fast');
  });

  $('li').hover(function(){
    $(this).animate({
      "opacity":"1"
    }, 'fast');
  });

  $('#play_button, #puzzle-start').click(function(){
    $('#your-status').slideToggle("fast", function(){
      $('#your-status').animate({
        "width":"18%",
        "opacity":"1",
        "z-index":"998"
      }, 'fast');
    });
  });

  $('#main_logo').on('click', function(){
    $('#your-status').fadeOut();
  });

  $('.puzzle-set-1').sortable();
  $('#puzzle-set-2').sortable();


});

